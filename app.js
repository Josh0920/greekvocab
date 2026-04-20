// ============================================================
// Koine Greek Study Tool — Main Application
// ============================================================

(function () {
    "use strict";

    let data = {};
    let currentCategory = null;
    let currentMode = null;
    let studyCards = [];
    let studyIndex = 0;
    let score = { correct: 0, total: 0 };
    let missed = [];

    // Matching
    let matchSelected = null;
    let matchPairs = [];
    let matchedCount = 0;
    let matchRound = 0;

    // Paradigm quiz
    let paraTableList = [];
    let paraTableIndex = 0;
    let paraBlanks = [];
    let paraBlankIndex = 0;
    let paraMode = null; // "multiple-choice" or "fill-blank"

    const STORAGE_KEY = "koine-greek-data";
    const PARADIGM_CATS = ["verbs", "nouns", "adjectives", "article", "pronouns", "participles"];

    // Stored study options (read from checkboxes before view switch)
    let studyOpts = { shuffle: true, reverse: false, blankAll: false };

    // Chapter filter state
    let selectedChapters = new Set(); // empty = all chapters (no filter)

    // Map base paradigm table titles to canonical tense types
    const BASE_TYPE_MAP = {
        "Present Active Indicative": "Present Active Indicative",
        "Present Middle/Passive Indicative": "Present Middle/Passive Indicative",
        "εἰμί — Present Active Indicative": "Present Active Indicative",
        "Future Active Indicative": "Future Active Indicative",
        "Future Middle Indicative": "Future Middle Indicative",
        "εἰμί — Future": "Future Middle Indicative",
        "Liquid Future Active Indicative": "Future Active Indicative",
        "Imperfect Active Indicative": "Imperfect Active Indicative",
        "Imperfect Middle/Passive Indicative": "Imperfect Middle/Passive Indicative",
        "εἰμί — Imperfect": "Imperfect Active Indicative",
        "1st Aorist Active Indicative": "1st Aorist Active Indicative",
        "1st Aorist Middle Indicative": "1st Aorist Middle Indicative",
        "1st Aorist Passive Indicative": "1st Aorist Passive Indicative",
        "Perfect Active Indicative": "Perfect Active Indicative",
        "Perfect Middle/Passive Indicative": "Perfect Middle/Passive Indicative",
        "Present Active Subjunctive": "Present Active Subjunctive",
        "εἰμί — Subjunctive": "Present Active Subjunctive",
        "1st Future Passive Indicative": "Future Passive Indicative",
        "Infinitive Endings": "Infinitives",
    };

    // Bare deponent tense names that duplicate proper voice-qualified names
    const DEPONENT_BARE_TENSES = new Set([
        "Present Indicative", "Imperfect Indicative", "Future Indicative",
        "Aorist Indicative", "Perfect Indicative",
        "Present Meaning", "Past Meaning", "Imperative", "Infinitive",
    ]);

    // --- Init ---
    function init() {
        loadData();
        renderCategories();
        bindNav();
        bindManage();
        bindModes();
        bindFlashcards();
        bindMultipleChoice();
        bindFillBlank();
        bindMatching();
        bindTrueFalse();
        bindBrowse();
        bindResults();
        bindParadigm();
        bindDictionary();
        bindTranslate();
    }

    // --- Data ---
    function loadData() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                data = JSON.parse(saved);
                for (const key in CATEGORIES) {
                    if (!data[key]) {
                        data[key] = JSON.parse(JSON.stringify(CATEGORIES[key]));
                    } else {
                        // Merge any new cards from CATEGORIES that aren't in saved data
                        const existingTerms = new Set(data[key].cards.map(c => c.term));
                        for (const card of CATEGORIES[key].cards) {
                            if (!existingTerms.has(card.term)) {
                                data[key].cards.push(JSON.parse(JSON.stringify(card)));
                            }
                        }
                    }
                }
            } catch { data = JSON.parse(JSON.stringify(CATEGORIES)); }
        } else {
            data = JSON.parse(JSON.stringify(CATEGORIES));
        }
        saveData();
    }
    function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }

    // --- Nav ---
    function showView(id) {
        document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
        document.getElementById(id + "-view").classList.add("active");
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        const nb = document.querySelector(`.nav-btn[data-view="${id}"]`);
        if (nb) nb.classList.add("active");
    }
    function bindNav() {
        document.querySelectorAll(".nav-btn").forEach(b =>
            b.addEventListener("click", () => {
                showView(b.dataset.view);
                if (b.dataset.view === "manage") refreshCardList();
            })
        );
        document.querySelectorAll(".back-link").forEach(b =>
            b.addEventListener("click", () => {
                if (b.dataset.back === "home") showView("home");
                else if (b.dataset.back === "mode") openCategory(currentCategory);
                else if (b.dataset.back === "para-select") showParadigmSelect();
            })
        );
    }

    // --- Categories ---
    function renderCategories() {
        const grid = document.getElementById("category-grid");
        grid.innerHTML = "";
        for (const key in data) {
            const cat = data[key];
            const card = document.createElement("button");
            card.className = "category-card";
            const hasParadigms = PARADIGM_CATS.includes(key) && PARADIGM_TABLES[key];
            const paraCount = hasParadigms ? PARADIGM_TABLES[key].length : 0;
            let countText = cat.cards.length + " cards";
            if (paraCount > 0) countText += ` · ${paraCount} tables`;
            card.innerHTML = `
                <span class="cat-icon">${cat.icon}</span>
                <div class="cat-name">${cat.name}</div>
                <div class="cat-count">${countText}</div>
            `;
            card.addEventListener("click", () => openCategory(key));
            grid.appendChild(card);
        }
    }
    function openCategory(key) {
        currentCategory = key;
        const cat = data[key];
        document.getElementById("mode-category-title").textContent = cat.name;
        const hasP = PARADIGM_CATS.includes(key) && PARADIGM_TABLES[key];
        let sub = cat.cards.length + " cards";
        if (hasP) sub += ` · ${PARADIGM_TABLES[key].length} paradigm tables`;
        document.getElementById("mode-card-count").textContent = sub;
        renderChapterFilter(cat.cards);
        showView("mode");
    }

    // --- Chapter Filter ---
    function getChaptersForCards(cards) {
        const chapters = new Set();
        cards.forEach(c => {
            const ch = getCardChapter(c);
            if (ch) chapters.add(ch);
        });
        return [...chapters].sort((a, b) => a - b);
    }

    function renderChapterFilter(cards) {
        const wrap = document.getElementById("chapter-filter");
        const chipsEl = document.getElementById("chapter-chips");
        const chapters = getChaptersForCards(cards);

        if (chapters.length === 0) {
            wrap.classList.add("hidden");
            selectedChapters = new Set();
            return;
        }

        wrap.classList.remove("hidden");
        selectedChapters = new Set(); // empty = all
        chipsEl.innerHTML = "";

        // "No Filter" chip
        const noFilter = document.createElement("button");
        noFilter.className = "ch-chip selected";
        noFilter.dataset.ch = "all";
        noFilter.innerHTML = "All Chapters";
        noFilter.addEventListener("click", () => {
            selectedChapters = new Set();
            updateChipStates();
            updateCardCount();
        });
        chipsEl.appendChild(noFilter);

        const info = typeof CHAPTER_INFO !== "undefined" ? CHAPTER_INFO : {};
        chapters.forEach(ch => {
            const chip = document.createElement("button");
            chip.className = "ch-chip";
            chip.dataset.ch = ch;
            const desc = info[ch] ? ` ${info[ch]}` : "";
            chip.innerHTML = `<span class="ch-num">Ch ${ch}</span><span class="ch-desc">${escapeHTML(desc)}</span>`;
            chip.addEventListener("click", () => {
                if (selectedChapters.has(ch)) {
                    selectedChapters.delete(ch);
                } else {
                    selectedChapters.add(ch);
                }
                updateChipStates();
                updateCardCount();
            });
            chipsEl.appendChild(chip);
        });

        // All / None buttons
        document.getElementById("ch-select-all").onclick = () => {
            selectedChapters = new Set(chapters);
            updateChipStates();
            updateCardCount();
        };
        document.getElementById("ch-select-none").onclick = () => {
            selectedChapters = new Set();
            updateChipStates();
            updateCardCount();
        };
    }

    function updateChipStates() {
        const chips = document.querySelectorAll("#chapter-chips .ch-chip");
        chips.forEach(chip => {
            const ch = chip.dataset.ch;
            if (ch === "all") {
                chip.classList.toggle("selected", selectedChapters.size === 0);
            } else {
                chip.classList.toggle("selected", selectedChapters.has(parseInt(ch)));
            }
        });
    }

    function updateCardCount() {
        const cat = data[currentCategory];
        const filtered = filterByChapter(cat.cards);
        const hasP = PARADIGM_CATS.includes(currentCategory) && PARADIGM_TABLES[currentCategory];
        let sub = filtered.length + " cards";
        if (hasP) sub += ` · ${PARADIGM_TABLES[currentCategory].length} paradigm tables`;
        if (selectedChapters.size > 0) sub += ` (filtered)`;
        document.getElementById("mode-card-count").textContent = sub;
    }

    function getCardChapter(card) {
        // 1. Direct term lookup
        if (typeof CHAPTER_MAP !== "undefined") {
            const ch = CHAPTER_MAP[card.term];
            if (ch) return ch;
        }
        // 2. Definition/notes keyword lookup (for paradigm cards)
        if (typeof DEFINITION_CHAPTER_MAP !== "undefined") {
            const text = (card.definition || "") + " " + (card.notes || "");
            for (const rule of DEFINITION_CHAPTER_MAP) {
                if (text.includes(rule.match)) return rule.chapter;
            }
        }
        return null;
    }

    function filterByChapter(cards) {
        if (selectedChapters.size === 0) return cards;
        return cards.filter(c => {
            const ch = getCardChapter(c);
            return ch && selectedChapters.has(ch);
        });
    }

    // --- Modes ---
    function bindModes() {
        document.querySelectorAll(".mode-card").forEach(b =>
            b.addEventListener("click", () => startStudy(b.dataset.mode))
        );
    }
    function startStudy(mode) {
        currentMode = mode;
        // Store options before switching views (fixes checkbox bug)
        studyOpts.shuffle = document.getElementById("opt-shuffle").checked;
        studyOpts.reverse = document.getElementById("opt-reverse").checked;
        studyOpts.blankAll = document.getElementById("opt-blank-all").checked;

        const cat = data[currentCategory];
        studyCards = filterByChapter([...cat.cards]);
        if (studyCards.length === 0) { studyCards = [...cat.cards]; } // fallback if filter empties
        if (studyOpts.shuffle) shuffle(studyCards);
        studyIndex = 0;
        score = { correct: 0, total: 0 };
        missed = [];

        // Paradigm table quiz for MC/FIB on paradigm categories
        const hasP = PARADIGM_CATS.includes(currentCategory) && PARADIGM_TABLES[currentCategory];
        if (hasP && (mode === "multiple-choice" || mode === "fill-blank")) {
            paraMode = mode;
            showParadigmSelect();
            return;
        }

        switch (mode) {
            case "flashcards": startFlashcards(); break;
            case "multiple-choice": startMultipleChoice(); break;
            case "fill-blank": startFillBlank(); break;
            case "matching": startMatching(); break;
            case "true-false": startTrueFalse(); break;
            case "browse": startBrowse(); break;
        }
    }
    function getReverse() { return studyOpts.reverse; }
    function getTerm(c) { return getReverse() ? c.definition : c.term; }
    function getDef(c) { return getReverse() ? c.term : c.definition; }

    // ============================================================
    // PARADIGM TABLE QUIZ
    // ============================================================
    let selectedVerbs = [];
    let selectedNouns = [];

    function bindParadigm() {
        document.getElementById("para-next-cell").addEventListener("click", nextParaBlank);
        document.getElementById("para-next-table").addEventListener("click", () => {
            paraTableIndex++;
            if (paraTableIndex >= paraTableList.length) showResults();
            else setupParaTable();
        });
        document.getElementById("para-start-btn").addEventListener("click", () => {
            if (currentCategory === "verbs") {
                // Build tables from selected tense types × selected verbs
                const checkedTypes = [...document.querySelectorAll("#para-tense-list input[type='checkbox']:checked")]
                    .map(cb => cb.dataset.type);
                if (checkedTypes.length === 0) return;
                const typeSet = new Set(checkedTypes);
                let tables = [];

                if (selectedVerbs.length > 0) {
                    // Specific verbs selected: only their conjugation tables
                    selectedVerbs.forEach(v => {
                        tables = tables.concat(buildVerbTablesForTypes(v, checkedTypes));
                    });
                } else {
                    // No verbs selected: use generic ending pattern tables
                    const baseTables = PARADIGM_TABLES.verbs || [];
                    baseTables.forEach(bt => {
                        if (bt.title.startsWith("εἰμί")) return;
                        const mappedType = BASE_TYPE_MAP[bt.title];
                        if (mappedType && typeSet.has(mappedType)) tables.push(bt);
                    });
                }

                if (tables.length === 0) return;
                startParadigmQuizDirect(tables);
            } else if ((currentCategory === "nouns" || currentCategory === "adjectives" || currentCategory === "article" || currentCategory === "pronouns") && typeof NOUN_LEXICON !== "undefined") {
                // NOUN MODE: build tables from selected words, or all words for this category
                const catTypes = {
                    nouns:      new Set(["1st Declension", "2nd Declension", "3rd Declension", "Other"]),
                    adjectives: new Set(["Adjective"]),
                    article:    new Set(["Article"]),
                    pronouns:   new Set(["Article", "Pronoun"]),
                };
                const allowed = catTypes[currentCategory];
                let tables = [];

                if (selectedNouns.length > 0) {
                    selectedNouns.forEach(key => {
                        const t = buildNounTableForEntry(key);
                        if (t) tables.push(t);
                    });
                } else {
                    for (const key in NOUN_LEXICON) {
                        if (allowed.has(getNounTypeLabel(NOUN_LEXICON[key]))) {
                            const t = buildNounTableForEntry(key);
                            if (t) tables.push(t);
                        }
                    }
                }

                if (tables.length === 0) return;
                startParadigmQuizDirect(tables);
            } else {
                // Non-verb categories: use table indices
                const checked = document.querySelectorAll("#para-select-list input[type='checkbox']:checked");
                const indices = [...checked].map(cb => parseInt(cb.dataset.index));
                if (indices.length === 0) return;
                startParadigmQuiz(indices);
            }
        });
        // Table select all/deselect all (non-verb categories)
        document.getElementById("para-select-all").addEventListener("click", () => {
            document.querySelectorAll("#para-select-list input[type='checkbox']").forEach(cb => cb.checked = true);
        });
        document.getElementById("para-deselect-all").addEventListener("click", () => {
            document.querySelectorAll("#para-select-list input[type='checkbox']").forEach(cb => cb.checked = false);
        });
        // Tense type select all/deselect all (verb category)
        document.getElementById("tense-select-all").addEventListener("click", () => {
            document.querySelectorAll("#para-tense-list input[type='checkbox']").forEach(cb => cb.checked = true);
        });
        document.getElementById("tense-deselect-all").addEventListener("click", () => {
            document.querySelectorAll("#para-tense-list input[type='checkbox']").forEach(cb => cb.checked = false);
        });
        // Verb picker
        document.getElementById("verb-add-all").addEventListener("click", () => {
            if (typeof VERB_LEXICON === "undefined") return;
            selectedVerbs = Object.keys(VERB_LEXICON);
            renderVerbTags();
            renderVerbPickerList();
        });
        document.getElementById("verb-clear").addEventListener("click", () => {
            selectedVerbs = [];
            renderVerbTags();
            renderVerbPickerList();
        });
        document.getElementById("verb-search").addEventListener("input", () => {
            renderVerbPickerList();
        });
        // Noun picker
        document.getElementById("noun-add-all").addEventListener("click", () => {
            if (typeof NOUN_LEXICON === "undefined") return;
            selectedNouns = Object.keys(NOUN_LEXICON);
            renderNounTags();
            renderNounPickerList();
        });
        document.getElementById("noun-clear").addEventListener("click", () => {
            selectedNouns = [];
            renderNounTags();
            renderNounPickerList();
        });
        document.getElementById("noun-search").addEventListener("input", () => {
            renderNounPickerList();
        });
    }

    function renderVerbPickerList() {
        if (typeof VERB_LEXICON === "undefined") return;
        const list = document.getElementById("verb-picker-list");
        const query = (document.getElementById("verb-search").value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        list.innerHTML = "";
        const sortedKeys = Object.keys(VERB_LEXICON).sort((a, b) =>
            a.normalize("NFD").replace(/[\u0300-\u036f]/g, "").localeCompare(
                b.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), "el"
            )
        );
        for (const key of sortedKeys) {
            const v = VERB_LEXICON[key];
            const searchable = (key + " " + v.meaning).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (query && !searchable.includes(query)) continue;
            const isSelected = selectedVerbs.includes(key);
            const div = document.createElement("div");
            div.className = "verb-picker-item" + (isSelected ? " selected" : "");
            div.innerHTML = `<span class="vp-lexical">${escapeHTML(key)}</span><span class="vp-meaning">${escapeHTML(v.meaning)}</span>`;
            div.addEventListener("click", () => {
                if (selectedVerbs.includes(key)) {
                    selectedVerbs = selectedVerbs.filter(v => v !== key);
                } else {
                    selectedVerbs.push(key);
                }
                renderVerbTags();
                renderVerbPickerList();
            });
            list.appendChild(div);
        }
    }

    function renderVerbTags() {
        const wrap = document.getElementById("verb-selected-tags");
        if (!wrap) return;
        wrap.innerHTML = selectedVerbs.map(v => {
            return `<span class="verb-tag">${v} <button data-verb="${escapeAttr(v)}">&times;</button></span>`;
        }).join("");
        wrap.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", () => {
                selectedVerbs = selectedVerbs.filter(v => v !== btn.dataset.verb);
                renderVerbTags();
                renderVerbPickerList();
            });
        });
    }

    // ============================================================
    // NOUN PARADIGM HELPERS
    // ============================================================

    function getNounTypeLabel(n) {
        if (n.type === "article") return "Article";
        if (n.type === "pronoun") return "Pronoun";
        if (n.type === "adjective") return "Adjective";
        if (n.declension === "1st") return "1st Declension";
        if (n.declension === "2nd") return "2nd Declension";
        if (n.declension === "3rd") return "3rd Declension";
        return "Other";
    }

    function buildNounTableForEntry(nounKey) {
        if (typeof NOUN_LEXICON === "undefined") return null;
        const n = NOUN_LEXICON[nounKey];
        if (!n) return null;
        const title = `${nounKey} — ${n.meaning}`;

        if (n.genderForms) {
            const cases = Object.keys(n.genderForms);
            const cols = ["M.Sg", "F.Sg", "N.Sg", "M.Pl", "F.Pl", "N.Pl"];
            const cells = cases.map(c => n.genderForms[c]);
            return { title, cols, rows: cases, cells };
        } else if (n.forms) {
            const cases = Object.keys(n.forms);
            const cols = ["Singular", "Plural"];
            const cells = cases.map(c => n.forms[c]);
            return { title, cols, rows: cases, cells };
        }
        return null;
    }

    function renderNounPickerList() {
        if (typeof NOUN_LEXICON === "undefined") return;
        const list = document.getElementById("noun-picker-list");
        if (!list) return;
        const query = (document.getElementById("noun-search").value || "")
            .toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        list.innerHTML = "";
        const sortedKeys = Object.keys(NOUN_LEXICON).sort((a, b) =>
            a.normalize("NFD").replace(/[\u0300-\u036f]/g, "").localeCompare(
                b.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), "el"
            )
        );
        for (const key of sortedKeys) {
            const n = NOUN_LEXICON[key];
            const searchable = (key + " " + n.meaning).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (query && !searchable.includes(query)) continue;
            const isSelected = selectedNouns.includes(key);
            const div = document.createElement("div");
            div.className = "verb-picker-item" + (isSelected ? " selected" : "");
            div.innerHTML = `<span class="vp-lexical">${escapeHTML(key)}</span><span class="vp-meaning">${escapeHTML(n.meaning)}</span>`;
            div.addEventListener("click", () => {
                if (selectedNouns.includes(key)) {
                    selectedNouns = selectedNouns.filter(k => k !== key);
                } else {
                    selectedNouns.push(key);
                }
                renderNounTags();
                renderNounPickerList();
            });
            list.appendChild(div);
        }
    }

    function renderNounTags() {
        const wrap = document.getElementById("noun-selected-tags");
        if (!wrap) return;
        wrap.innerHTML = selectedNouns.map(k => {
            return `<span class="verb-tag">${escapeHTML(k)} <button data-noun="${escapeAttr(k)}">&times;</button></span>`;
        }).join("");
        wrap.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", () => {
                selectedNouns = selectedNouns.filter(k => k !== btn.dataset.noun);
                renderNounTags();
                renderNounPickerList();
            });
        });
    }

    function buildVerbTables(verbKey) {
        if (typeof VERB_LEXICON === "undefined") return [];
        const verb = VERB_LEXICON[verbKey];
        if (!verb) return [];
        const tables = [];
        const rows6 = ["1st Person", "2nd Person", "3rd Person"];
        const rows4 = ["2nd Person", "3rd Person"];
        const cols = ["Singular", "Plural"];
        // Indicative tables
        if (verb.indicative) {
            for (const tense in verb.indicative) {
                if (DEPONENT_BARE_TENSES.has(tense)) continue;
                const forms = verb.indicative[tense];
                if (forms.every(f => f === "--")) continue;
                tables.push({
                    title: `${verbKey} — ${tense}`,
                    cols: cols,
                    rows: rows6,
                    cells: [
                        [forms[0], forms[3]],
                        [forms[1], forms[4]],
                        [forms[2], forms[5]]
                    ]
                });
            }
        }
        // Subjunctive tables
        if (verb.subjunctive) {
            for (const tense in verb.subjunctive) {
                const forms = verb.subjunctive[tense];
                if (forms.every(f => f === "--")) continue;
                tables.push({
                    title: `${verbKey} — ${tense}`,
                    cols: cols,
                    rows: rows6,
                    cells: [
                        [forms[0], forms[3]],
                        [forms[1], forms[4]],
                        [forms[2], forms[5]]
                    ]
                });
            }
        }
        // Imperative tables (4 forms: 2sg, 3sg, 2pl, 3pl)
        if (verb.imperative) {
            for (const tense in verb.imperative) {
                const forms = verb.imperative[tense];
                if (forms.every(f => f === "--")) continue;
                tables.push({
                    title: `${verbKey} — ${tense}`,
                    cols: cols,
                    rows: rows4,
                    cells: [
                        [forms[0], forms[2]],
                        [forms[1], forms[3]]
                    ]
                });
            }
        }
        // Infinitives as a single table
        if (verb.infinitives) {
            const infKeys = Object.keys(verb.infinitives);
            if (infKeys.length > 0) {
                tables.push({
                    title: `${verbKey} — Infinitives`,
                    cols: ["Form"],
                    rows: infKeys,
                    cells: infKeys.map(k => [verb.infinitives[k]])
                });
            }
        }
        return tables;
    }

    function buildVerbTablesForTypes(verbKey, tenseTypes) {
        if (typeof VERB_LEXICON === "undefined") return [];
        const verb = VERB_LEXICON[verbKey];
        if (!verb) return [];
        const tables = [];
        const rows6 = ["1st Person", "2nd Person", "3rd Person"];
        const rows4 = ["2nd Person", "3rd Person"];
        const cols = ["Singular", "Plural"];
        const typeSet = new Set(tenseTypes);

        if (verb.indicative) {
            for (const tense in verb.indicative) {
                if (DEPONENT_BARE_TENSES.has(tense)) continue;
                if (!typeSet.has(tense)) continue;
                const forms = verb.indicative[tense];
                if (forms.every(f => f === "--")) continue;
                tables.push({
                    title: `${verbKey} — ${tense}`,
                    cols, rows: rows6,
                    cells: [[forms[0], forms[3]], [forms[1], forms[4]], [forms[2], forms[5]]]
                });
            }
        }
        if (verb.subjunctive) {
            for (const tense in verb.subjunctive) {
                if (!typeSet.has(tense)) continue;
                const forms = verb.subjunctive[tense];
                if (forms.every(f => f === "--")) continue;
                tables.push({
                    title: `${verbKey} — ${tense}`,
                    cols, rows: rows6,
                    cells: [[forms[0], forms[3]], [forms[1], forms[4]], [forms[2], forms[5]]]
                });
            }
        }
        if (verb.imperative) {
            for (const tense in verb.imperative) {
                if (!typeSet.has(tense)) continue;
                const forms = verb.imperative[tense];
                if (forms.every(f => f === "--")) continue;
                tables.push({
                    title: `${verbKey} — ${tense}`,
                    cols, rows: rows4,
                    cells: [[forms[0], forms[2]], [forms[1], forms[3]]]
                });
            }
        }
        if (typeSet.has("Infinitives") && verb.infinitives) {
            const infKeys = Object.keys(verb.infinitives);
            if (infKeys.length > 0) {
                tables.push({
                    title: `${verbKey} — Infinitives`,
                    cols: ["Form"],
                    rows: infKeys,
                    cells: infKeys.map(k => [verb.infinitives[k]])
                });
            }
        }
        return tables;
    }

    function collectVerbTenseTypes() {
        const seen = new Set();
        const types = [];
        const add = (t, group) => { if (!seen.has(t)) { seen.add(t); types.push({ name: t, group }); } };

        // Canonical indicative order
        [
            "Present Active Indicative", "Present Middle/Passive Indicative",
            "Future Active Indicative", "Future Middle Indicative", "Future Passive Indicative",
            "Imperfect Active Indicative", "Imperfect Middle/Passive Indicative",
            "1st Aorist Active Indicative", "2nd Aorist Active Indicative",
            "1st Aorist Middle Indicative", "2nd Aorist Middle Indicative",
            "1st Aorist Passive Indicative", "2nd Aorist Passive Indicative",
            "Perfect Active Indicative", "Perfect Middle/Passive Indicative",
        ].forEach(t => add(t, "Indicative"));

        // Canonical subjunctive order
        [
            "Present Active Subjunctive", "Present Middle/Passive Subjunctive",
            "Aorist Active Subjunctive", "Aorist Middle Subjunctive", "Aorist Passive Subjunctive",
        ].forEach(t => add(t, "Subjunctive"));

        // Canonical imperative order
        [
            "Present Active Imperative", "Present Middle/Passive Imperative",
            "1st Aorist Active Imperative", "1st Aorist Middle Imperative", "1st Aorist Passive Imperative",
            "2nd Aorist Active Imperative", "2nd Aorist Middle Imperative", "2nd Aorist Passive Imperative",
        ].forEach(t => add(t, "Imperative"));

        add("Infinitives", "Other");

        // Add any extras from VERB_LEXICON not in canonical lists (skip bare deponent duplicates)
        if (typeof VERB_LEXICON !== "undefined") {
            for (const key in VERB_LEXICON) {
                const v = VERB_LEXICON[key];
                if (v.indicative) Object.keys(v.indicative).forEach(k => {
                    if (DEPONENT_BARE_TENSES.has(k)) return;
                    const g = k.includes("Subjunctive") ? "Subjunctive" : "Indicative";
                    add(k, g);
                });
                if (v.subjunctive) Object.keys(v.subjunctive).forEach(k => add(k, "Subjunctive"));
                if (v.imperative) Object.keys(v.imperative).forEach(k => add(k, "Imperative"));
            }
        }

        return types;
    }

    function showParadigmSelect() {
        const catName = data[currentCategory].name;
        document.getElementById("para-select-title").textContent = `Select ${catName} Tables`;
        const layout = document.querySelector(".para-select-layout");
        const verbSection = document.getElementById("verb-select-section");
        const tenseSection = document.getElementById("para-tense-section");
        const tableSection = document.getElementById("para-table-section");
        const nounSection = document.getElementById("noun-select-section");

        if (currentCategory === "verbs" && typeof VERB_LEXICON !== "undefined") {
            // VERB MODE: show tense types panel + verb picker panel
            layout.classList.add("two-col");
            verbSection.classList.remove("hidden");
            tenseSection.classList.remove("hidden");
            tableSection.classList.add("hidden");
            nounTypeSection.classList.add("hidden");
            nounSection.classList.add("hidden");

            document.getElementById("verb-search").value = "";
            selectedVerbs = [];
            renderVerbTags();
            renderVerbPickerList();

            // Render tense type checkboxes with section headers
            const tenseTypes = collectVerbTenseTypes();
            const list = document.getElementById("para-tense-list");
            list.innerHTML = "";
            let currentGroup = "";
            tenseTypes.forEach(({ name, group }) => {
                if (group !== currentGroup) {
                    currentGroup = group;
                    const header = document.createElement("div");
                    header.className = "para-section-header";
                    header.textContent = group;
                    list.appendChild(header);
                }
                const label = document.createElement("label");
                label.className = "para-select-item";
                label.innerHTML = `
                    <input type="checkbox" checked data-type="${escapeAttr(name)}">
                    <span class="para-item-title">${escapeHTML(name)}</span>
                `;
                list.appendChild(label);
            });
        } else if ((currentCategory === "nouns" || currentCategory === "adjectives" || currentCategory === "article" || currentCategory === "pronouns") && typeof NOUN_LEXICON !== "undefined") {
            // NOUN MODE: single-column noun picker
            layout.classList.remove("two-col");
            verbSection.classList.add("hidden");
            tenseSection.classList.add("hidden");
            tableSection.classList.add("hidden");
            nounSection.classList.remove("hidden");

            document.getElementById("noun-search").value = "";
            selectedNouns = [];
            renderNounTags();
            renderNounPickerList();
        } else {
            // SIMPLE TABLE MODE (participles, etc.)
            layout.classList.remove("two-col");
            verbSection.classList.add("hidden");
            tenseSection.classList.add("hidden");
            tableSection.classList.remove("hidden");
            nounSection.classList.add("hidden");

            const tables = PARADIGM_TABLES[currentCategory];
            window._paraSelectTables = [...tables];

            const list = document.getElementById("para-select-list");
            list.innerHTML = "";
            tables.forEach((tbl, i) => {
                const dims = `${tbl.rows.length} × ${tbl.cols.length}`;
                const label = document.createElement("label");
                label.className = "para-select-item";
                label.innerHTML = `
                    <input type="checkbox" checked data-index="${i}">
                    <span class="para-item-title">${tbl.title}</span>
                    <span class="para-item-info">${dims}</span>
                `;
                list.appendChild(label);
            });
        }
        showView("para-select");
    }

    function startParadigmQuiz(indices) {
        const allTables = window._paraSelectTables || PARADIGM_TABLES[currentCategory];
        paraTableList = indices.map(i => allTables[i]);
        if (studyOpts.shuffle) shuffle(paraTableList);
        paraTableIndex = 0;
        score = { correct: 0, total: 0 };
        missed = [];
        showView("paradigm");
        setupParaTable();
    }

    function startParadigmQuizDirect(tables) {
        paraTableList = [...tables];
        if (studyOpts.shuffle) shuffle(paraTableList);
        paraTableIndex = 0;
        score = { correct: 0, total: 0 };
        missed = [];
        showView("paradigm");
        setupParaTable();
    }

    function setupParaTable() {
        const tbl = paraTableList[paraTableIndex];
        document.getElementById("para-title").textContent = tbl.title;
        document.getElementById("para-next-table").classList.add("hidden");
        document.getElementById("para-next-cell").classList.add("hidden");
        document.getElementById("para-feedback").classList.add("hidden");

        // Determine blanks: ~50% of cells, randomly chosen
        paraBlanks = [];
        const totalCells = tbl.rows.length * tbl.cols.length;
        const blankAll = studyOpts.blankAll;
        const blankCount = blankAll ? totalCells : Math.max(2, Math.ceil(totalCells * 0.5));
        const allPositions = [];
        for (let r = 0; r < tbl.rows.length; r++)
            for (let c = 0; c < tbl.cols.length; c++)
                allPositions.push([r, c]);
        shuffle(allPositions);
        for (let i = 0; i < blankCount && i < allPositions.length; i++)
            paraBlanks.push(allPositions[i]);
        // Sort blanks top-to-bottom, left-to-right for sequential fill
        paraBlanks.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        paraBlankIndex = 0;

        renderParaTable();
        updateParaProgress();
        highlightCurrentBlank();
        renderParaInput();
    }

    function renderParaTable() {
        const tbl = paraTableList[paraTableIndex];
        const wrap = document.getElementById("para-table-wrap");
        let html = '<table class="para-table"><thead><tr><th></th>';
        tbl.cols.forEach(c => { html += `<th>${c}</th>`; });
        html += "</tr></thead><tbody>";
        for (let r = 0; r < tbl.rows.length; r++) {
            html += `<tr><td class="row-label">${tbl.rows[r]}</td>`;
            for (let c = 0; c < tbl.cols.length; c++) {
                const isBlank = paraBlanks.some(b => b[0] === r && b[1] === c);
                const id = `para-cell-${r}-${c}`;
                if (isBlank) {
                    html += `<td id="${id}" class="blank-cell">?</td>`;
                } else {
                    html += `<td id="${id}">${tbl.cells[r][c]}</td>`;
                }
            }
            html += "</tr>";
        }
        html += "</tbody></table>";
        wrap.innerHTML = html;
        // Make blank cells clickable to jump to them
        paraBlanks.forEach(([br, bc], idx) => {
            const cell = document.getElementById(`para-cell-${br}-${bc}`);
            if (cell) {
                cell.style.cursor = "pointer";
                cell.addEventListener("click", () => jumpToBlank(idx));
            }
        });
    }

    function jumpToBlank(idx) {
        // Only jump to unanswered blanks
        const [r, c] = paraBlanks[idx];
        const cell = document.getElementById(`para-cell-${r}-${c}`);
        if (!cell || cell.classList.contains("correct-cell") || cell.classList.contains("wrong-cell")) return;
        paraBlankIndex = idx;
        highlightCurrentBlank();
        renderParaInput();
        updateParaProgress();
    }

    function highlightCurrentBlank() {
        // Remove previous highlight
        document.querySelectorAll(".para-table td.active-cell").forEach(el =>
            el.classList.remove("active-cell")
        );
        if (paraBlankIndex < paraBlanks.length) {
            const [r, c] = paraBlanks[paraBlankIndex];
            const cell = document.getElementById(`para-cell-${r}-${c}`);
            if (cell) {
                cell.classList.add("active-cell");
                cell.textContent = "?";
            }
        }
    }

    function updateParaProgress() {
        const totalBlanks = paraBlanks.length;
        const done = paraBlankIndex;
        document.getElementById("para-progress").textContent =
            `Table ${paraTableIndex + 1}/${paraTableList.length} · Cell ${Math.min(done + 1, totalBlanks)}/${totalBlanks}`;
        document.getElementById("para-score").textContent =
            `Score: ${score.correct}/${score.total}`;
    }

    function renderParaInput() {
        const area = document.getElementById("para-input-area");
        document.getElementById("para-feedback").classList.add("hidden");
        document.getElementById("para-next-cell").classList.add("hidden");

        if (paraBlankIndex >= paraBlanks.length) {
            area.innerHTML = "";
            document.getElementById("para-next-table").classList.remove("hidden");
            if (paraTableIndex + 1 >= paraTableList.length) {
                document.getElementById("para-next-table").textContent = "See Results";
            } else {
                document.getElementById("para-next-table").textContent = "Next Table →";
            }
            return;
        }

        const tbl = paraTableList[paraTableIndex];
        const [r, c] = paraBlanks[paraBlankIndex];
        const correct = tbl.cells[r][c];

        if (paraMode === "fill-blank") {
            area.innerHTML = `
                <div class="fib-row">
                    <input type="text" id="para-fib-input" class="fib-input" placeholder="Type the form..." autocomplete="off">
                    <button id="para-fib-submit" class="btn btn-primary">Check</button>
                </div>
            `;
            const inp = document.getElementById("para-fib-input");
            const btn = document.getElementById("para-fib-submit");
            const check = () => handleParaFIB(inp.value.trim(), correct);
            btn.addEventListener("click", check);
            inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
            inp.focus();
        } else {
            // Multiple choice
            const allCells = [];
            for (let rr = 0; rr < tbl.rows.length; rr++)
                for (let cc = 0; cc < tbl.cols.length; cc++)
                    if (tbl.cells[rr][cc] !== correct) allCells.push(tbl.cells[rr][cc]);
            // Deduplicate
            const unique = [...new Set(allCells)];
            shuffle(unique);
            let options = [correct];
            for (let i = 0; options.length < 4 && i < unique.length; i++)
                options.push(unique[i]);
            shuffle(options);

            let html = '<div class="mc-options">';
            options.forEach(opt => {
                html += `<button class="mc-option" data-val="${escapeAttr(opt)}">${escapeHTML(opt)}</button>`;
            });
            html += "</div>";
            area.innerHTML = html;
            area.querySelectorAll(".mc-option").forEach(btn => {
                btn.addEventListener("click", () => handleParaMC(btn, btn.dataset.val, correct));
            });
        }
    }

    function handleParaFIB(answer, correct) {
        const normalize = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/^-+/, "").trim();
        const [r, c] = paraBlanks[paraBlankIndex];
        const cell = document.getElementById(`para-cell-${r}-${c}`);
        const fb = document.getElementById("para-feedback");
        score.total++;

        cell.classList.remove("active-cell", "blank-cell");
        if (normalize(answer) === normalize(correct)) {
            score.correct++;
            cell.textContent = correct;
            cell.classList.add("correct-cell");
            fb.textContent = "Correct!";
            fb.className = "feedback correct";
        } else {
            cell.textContent = correct;
            cell.classList.add("wrong-cell");
            fb.innerHTML = `Incorrect — it was: <strong>${correct}</strong>`;
            fb.className = "feedback wrong";
            missed.push({ term: `${paraTableList[paraTableIndex].rows[r]} / ${paraTableList[paraTableIndex].cols[c]}`, definition: correct });
        }
        fb.classList.remove("hidden");
        document.getElementById("para-fib-input").disabled = true;
        document.getElementById("para-fib-submit").classList.add("hidden");
        document.getElementById("para-next-cell").classList.remove("hidden");
        updateParaProgress();
    }

    function handleParaMC(btn, chosen, correct) {
        if (btn.classList.contains("answered")) return;
        document.querySelectorAll("#para-input-area .mc-option").forEach(b => b.classList.add("answered"));
        const [r, c] = paraBlanks[paraBlankIndex];
        const cell = document.getElementById(`para-cell-${r}-${c}`);
        const fb = document.getElementById("para-feedback");
        score.total++;

        cell.classList.remove("active-cell", "blank-cell");
        if (chosen === correct) {
            score.correct++;
            btn.classList.add("correct");
            cell.textContent = correct;
            cell.classList.add("correct-cell");
            fb.textContent = "Correct!";
            fb.className = "feedback correct";
        } else {
            btn.classList.add("wrong");
            document.querySelectorAll("#para-input-area .mc-option").forEach(b => {
                if (b.dataset.val === correct) b.classList.add("correct");
            });
            cell.textContent = correct;
            cell.classList.add("wrong-cell");
            fb.innerHTML = `Incorrect — it was: <strong>${correct}</strong>`;
            fb.className = "feedback wrong";
            missed.push({ term: `${paraTableList[paraTableIndex].rows[r]} / ${paraTableList[paraTableIndex].cols[c]}`, definition: correct });
        }
        fb.classList.remove("hidden");
        document.getElementById("para-next-cell").classList.remove("hidden");
        updateParaProgress();
    }

    function nextParaBlank() {
        paraBlankIndex++;
        if (paraBlankIndex < paraBlanks.length) {
            highlightCurrentBlank();
            renderParaInput();
            updateParaProgress();
        } else {
            // Reveal remaining and show next table button
            highlightCurrentBlank();
            renderParaInput();
            updateParaProgress();
        }
    }

    // ============================================================
    // FLASHCARDS
    // ============================================================
    function bindFlashcards() {
        const fc = document.getElementById("flashcard");
        fc.addEventListener("click", () => fc.classList.toggle("flipped"));
        fc.addEventListener("keydown", e => {
            if (e.key === " " || e.key === "Enter") { e.preventDefault(); fc.classList.toggle("flipped"); }
            if (e.key === "ArrowRight") document.getElementById("fc-next").click();
            if (e.key === "ArrowLeft") document.getElementById("fc-prev").click();
        });
        document.getElementById("fc-next").addEventListener("click", () => {
            if (studyIndex < studyCards.length - 1) { studyIndex++; renderFlashcard(); }
        });
        document.getElementById("fc-prev").addEventListener("click", () => {
            if (studyIndex > 0) { studyIndex--; renderFlashcard(); }
        });
    }
    function startFlashcards() { showView("flashcard"); renderFlashcard(); document.getElementById("flashcard").focus(); }
    function renderFlashcard() {
        const card = studyCards[studyIndex];
        const fc = document.getElementById("flashcard");
        fc.classList.remove("flipped");
        document.getElementById("fc-front-text").textContent = getTerm(card);
        document.getElementById("fc-back-text").textContent = getDef(card);
        document.getElementById("fc-notes").textContent = card.notes || "";
        document.getElementById("fc-progress").textContent = `${studyIndex + 1} / ${studyCards.length}`;
        document.getElementById("fc-bar").style.width = ((studyIndex + 1) / studyCards.length * 100) + "%";
        document.getElementById("fc-prev").disabled = studyIndex === 0;
        document.getElementById("fc-next").disabled = studyIndex === studyCards.length - 1;
    }

    // ============================================================
    // MULTIPLE CHOICE (flat cards)
    // ============================================================
    function bindMultipleChoice() {
        document.getElementById("mc-next").addEventListener("click", () => {
            studyIndex++;
            if (studyIndex >= studyCards.length) showResults();
            else renderMC();
        });
    }
    function startMultipleChoice() { showView("mc"); renderMC(); }
    function renderMC() {
        const card = studyCards[studyIndex];
        document.getElementById("mc-prompt").textContent = getTerm(card);
        document.getElementById("mc-progress").textContent = `${studyIndex + 1} / ${studyCards.length}`;
        document.getElementById("mc-score").textContent = `${score.correct}/${score.total}`;
        document.getElementById("mc-bar").style.width = ((studyIndex + 1) / studyCards.length * 100) + "%";
        document.getElementById("mc-next").classList.add("hidden");
        const correctDef = getDef(card);
        const allDefs = data[currentCategory].cards.map(c => getDef(c));
        let options = [correctDef];
        const pool = allDefs.filter(d => d !== correctDef);
        shuffle(pool);
        while (options.length < 4 && pool.length > 0) options.push(pool.pop());
        shuffle(options);
        const container = document.getElementById("mc-options");
        container.innerHTML = "";
        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "mc-option";
            btn.textContent = opt;
            btn.addEventListener("click", () => handleMCAnswer(btn, opt, correctDef));
            container.appendChild(btn);
        });
    }
    function handleMCAnswer(btn, chosen, correct) {
        if (btn.classList.contains("answered")) return;
        document.querySelectorAll("#mc-options .mc-option").forEach(b => b.classList.add("answered"));
        score.total++;
        if (chosen === correct) { btn.classList.add("correct"); score.correct++; }
        else {
            btn.classList.add("wrong");
            document.querySelectorAll("#mc-options .mc-option").forEach(b => { if (b.textContent === correct) b.classList.add("correct"); });
            missed.push(studyCards[studyIndex]);
        }
        document.getElementById("mc-score").textContent = `${score.correct}/${score.total}`;
        document.getElementById("mc-next").classList.remove("hidden");
    }

    // ============================================================
    // FILL IN BLANK (flat cards)
    // ============================================================
    function bindFillBlank() {
        document.getElementById("fib-submit").addEventListener("click", checkFIB);
        document.getElementById("fib-input").addEventListener("keydown", e => { if (e.key === "Enter") checkFIB(); });
        document.getElementById("fib-next").addEventListener("click", () => {
            studyIndex++;
            if (studyIndex >= studyCards.length) showResults();
            else renderFIB();
        });
    }
    function startFillBlank() { showView("fib"); renderFIB(); }
    function renderFIB() {
        const card = studyCards[studyIndex];
        document.getElementById("fib-prompt").textContent = getDef(card);
        document.getElementById("fib-progress").textContent = `${studyIndex + 1} / ${studyCards.length}`;
        document.getElementById("fib-score").textContent = `${score.correct}/${score.total}`;
        document.getElementById("fib-bar").style.width = ((studyIndex + 1) / studyCards.length * 100) + "%";
        document.getElementById("fib-input").value = "";
        document.getElementById("fib-input").disabled = false;
        document.getElementById("fib-submit").classList.remove("hidden");
        document.getElementById("fib-feedback").classList.add("hidden");
        document.getElementById("fib-next").classList.add("hidden");
        document.getElementById("fib-input").focus();
    }
    function checkFIB() {
        const card = studyCards[studyIndex];
        const answer = document.getElementById("fib-input").value.trim();
        const correct = getTerm(card);
        const fb = document.getElementById("fib-feedback");
        score.total++;
        const normalize = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        const answerN = normalize(answer);
        const answerTranslit = translitToGreek(answerN);
        // Build accepted forms: full answer, each comma/semicolon part, and "I " prepended to verb parts
        const buildAccepted = (correct) => {
            const acc = new Set([normalize(correct)]);
            const parts = correct.split(/[;,]/).map(p => p.trim()).filter(Boolean);
            parts.forEach(p => acc.add(normalize(p)));
            // If definition is like "I take, receive" → also accept "I receive"
            const iVerb = parts.find(p => /^I /i.test(p));
            if (iVerb) {
                parts.forEach(p => {
                    if (!/^I /i.test(p)) acc.add(normalize("I " + p));
                });
                // Also accept without "I " prefix
                parts.forEach(p => acc.add(normalize(p.replace(/^I /i, ""))));
            }
            // Strip leading "I " from user answer and try matching parts
            const answerNoI = answerN.replace(/^i /, "");
            if (answerNoI !== answerN) parts.forEach(p => acc.add(normalize(p.replace(/^I /i, ""))));
            return acc;
        };
        const acceptedForms = buildAccepted(correct);
        if (acceptedForms.has(answerN) || (answerTranslit && acceptedForms.has(answerTranslit))) {
            score.correct++;
            fb.innerHTML = `Correct! <span class="all-meanings">(${correct})</span>`;
            fb.className = "feedback correct";
        } else {
            fb.innerHTML = `Incorrect. Answer: <strong>${correct}</strong>`;
            fb.className = "feedback wrong";
            missed.push(card);
        }
        fb.classList.remove("hidden");
        document.getElementById("fib-input").disabled = true;
        document.getElementById("fib-submit").classList.add("hidden");
        document.getElementById("fib-next").classList.remove("hidden");
        document.getElementById("fib-score").textContent = `${score.correct}/${score.total}`;
    }

    // ============================================================
    // MATCHING
    // ============================================================
    function bindMatching() {
        document.getElementById("match-next").addEventListener("click", () => { matchRound++; setupMatchRound(); });
    }
    function startMatching() { matchRound = 0; matchedCount = 0; showView("match"); setupMatchRound(); }
    function setupMatchRound() {
        const perRound = 5;
        const start = matchRound * perRound;
        const roundCards = studyCards.slice(start, start + perRound);
        if (roundCards.length === 0) { showResults(); return; }
        matchPairs = roundCards; matchedCount = 0; matchSelected = null;
        document.getElementById("match-next").classList.add("hidden");
        document.getElementById("match-progress").textContent = `Round ${matchRound + 1} — ${Math.min(start + perRound, studyCards.length)}/${studyCards.length}`;
        const left = roundCards.map((c, i) => ({ text: getTerm(c), idx: i, side: "left" }));
        const right = roundCards.map((c, i) => ({ text: getDef(c), idx: i, side: "right" }));
        shuffle(left); shuffle(right);
        renderMatchCol("match-left", left);
        renderMatchCol("match-right", right);
    }
    function renderMatchCol(id, items) {
        const col = document.getElementById(id);
        col.innerHTML = "";
        items.forEach(item => {
            const el = document.createElement("button");
            el.className = "match-item";
            el.textContent = item.text;
            el.dataset.idx = item.idx;
            el.dataset.side = item.side;
            el.addEventListener("click", () => handleMatchClick(el, item));
            col.appendChild(el);
        });
    }
    function handleMatchClick(el, item) {
        if (el.classList.contains("matched")) return;
        if (!matchSelected) { matchSelected = { el, item }; el.classList.add("selected"); }
        else {
            if (matchSelected.item.side === item.side) {
                matchSelected.el.classList.remove("selected");
                matchSelected = { el, item }; el.classList.add("selected"); return;
            }
            score.total++;
            if (matchSelected.item.idx === item.idx) {
                score.correct++;
                matchSelected.el.classList.remove("selected");
                matchSelected.el.classList.add("matched");
                el.classList.add("matched");
                matchedCount++;
                if (matchedCount === matchPairs.length) {
                    const totalRounds = Math.ceil(studyCards.length / 5);
                    if (matchRound + 1 >= totalRounds) setTimeout(() => showResults(), 400);
                    else document.getElementById("match-next").classList.remove("hidden");
                }
            } else {
                matchSelected.el.classList.remove("selected");
                matchSelected.el.classList.add("wrong-flash");
                el.classList.add("wrong-flash");
                missed.push(matchPairs[matchSelected.item.idx]);
                setTimeout(() => {
                    matchSelected.el.classList.remove("wrong-flash");
                    el.classList.remove("wrong-flash");
                }, 500);
            }
            matchSelected = null;
        }
    }

    // ============================================================
    // TRUE / FALSE
    // ============================================================
    function bindTrueFalse() {
        document.querySelectorAll(".btn-tf").forEach(b =>
            b.addEventListener("click", () => handleTF(b.dataset.answer === "true"))
        );
        document.getElementById("tf-next").addEventListener("click", () => {
            studyIndex++;
            if (studyIndex >= studyCards.length) showResults();
            else renderTF();
        });
    }
    function startTrueFalse() {
        showView("tf");
        studyCards.forEach(card => {
            card._tfCorrect = Math.random() > 0.5;
            if (!card._tfCorrect) {
                const others = data[currentCategory].cards.filter(c => getDef(c) !== getDef(card));
                if (others.length > 0) card._tfFake = getDef(others[Math.floor(Math.random() * others.length)]);
                else card._tfCorrect = true;
            }
        });
        renderTF();
    }
    function renderTF() {
        const card = studyCards[studyIndex];
        document.getElementById("tf-term").textContent = getTerm(card);
        document.getElementById("tf-def").textContent = card._tfCorrect ? getDef(card) : card._tfFake;
        document.getElementById("tf-progress").textContent = `${studyIndex + 1} / ${studyCards.length}`;
        document.getElementById("tf-score").textContent = `${score.correct}/${score.total}`;
        document.getElementById("tf-bar").style.width = ((studyIndex + 1) / studyCards.length * 100) + "%";
        document.getElementById("tf-feedback").classList.add("hidden");
        document.getElementById("tf-next").classList.add("hidden");
        document.querySelectorAll(".btn-tf").forEach(b => { b.disabled = false; b.classList.remove("correct", "wrong"); });
    }
    function handleTF(answeredTrue) {
        const card = studyCards[studyIndex];
        const isCorrect = answeredTrue === card._tfCorrect;
        score.total++;
        const fb = document.getElementById("tf-feedback");
        document.querySelectorAll(".btn-tf").forEach(b => b.disabled = true);
        if (isCorrect) {
            score.correct++;
            fb.textContent = "Correct!";
            fb.className = "feedback correct";
            document.querySelector(`.btn-tf[data-answer="${answeredTrue}"]`).classList.add("correct");
        } else {
            fb.innerHTML = `Incorrect. Answer: <strong>${getDef(card)}</strong>`;
            fb.className = "feedback wrong";
            document.querySelector(`.btn-tf[data-answer="${answeredTrue}"]`).classList.add("wrong");
            document.querySelector(`.btn-tf[data-answer="${!answeredTrue}"]`).classList.add("correct");
            missed.push(card);
        }
        fb.classList.remove("hidden");
        document.getElementById("tf-next").classList.remove("hidden");
        document.getElementById("tf-score").textContent = `${score.correct}/${score.total}`;
    }

    // ============================================================
    // BROWSE
    // ============================================================
    let browseCards = [];
    function bindBrowse() {
        document.getElementById("browse-filter").addEventListener("input", function() {
            renderBrowseList(this.value);
        });
    }
    function startBrowse() {
        browseCards = studyCards.slice(); // already filtered by chapter
        // sort alphabetically by term for readability
        browseCards.sort((a, b) => {
            const ta = (a.term || "").toLowerCase();
            const tb = (b.term || "").toLowerCase();
            return ta < tb ? -1 : ta > tb ? 1 : 0;
        });
        document.getElementById("browse-filter").value = "";
        showView("browse");
        renderBrowseList("");
    }
    function renderBrowseList(filter) {
        const list = document.getElementById("browse-list");
        const filterN = filter.trim().toLowerCase();
        const filtered = filterN
            ? browseCards.filter(c => {
                const termN = (c.term || "").toLowerCase();
                const defN = (c.definition || "").toLowerCase();
                return termN.includes(filterN) || defN.includes(filterN);
            })
            : browseCards;
        document.getElementById("browse-count").textContent =
            filtered.length + " / " + browseCards.length + " items";
        if (filtered.length === 0) {
            list.innerHTML = `<p class="browse-empty">No items match "${escapeHTML(filter)}".</p>`;
            return;
        }
        list.innerHTML = filtered.map(c => {
            const term = escapeHTML(c.term || "");
            const def = escapeHTML(c.definition || "");
            const chap = c.chapter ? `Ch. ${escapeHTML(String(c.chapter))}` : "";
            return `<div class="browse-item">
                <span class="browse-term">${term}</span>
                <span class="browse-def">${def}</span>
                ${chap ? `<span class="browse-chapter">${chap}</span>` : ""}
            </div>`;
        }).join("");
    }

    // ============================================================
    // RESULTS
    // ============================================================
    function bindResults() {
        document.getElementById("results-retry").addEventListener("click", () => startStudy(currentMode));
        document.getElementById("results-back").addEventListener("click", () => openCategory(currentCategory));
    }
    function showResults() {
        showView("results");
        const pct = score.total > 0 ? Math.round(score.correct / score.total * 100) : 0;
        document.getElementById("results-score").textContent = pct + "%";
        document.getElementById("results-score").style.color =
            pct >= 80 ? "var(--success)" : pct >= 50 ? "var(--gold)" : "var(--error)";
        document.getElementById("results-detail").textContent = `${score.correct} correct out of ${score.total}`;
        const missedDiv = document.getElementById("results-missed");
        missedDiv.innerHTML = "";
        if (missed.length > 0) {
            missedDiv.innerHTML = "<h4>Review These:</h4>";
            const seen = new Set();
            missed.forEach(card => {
                const key = card.term + card.definition;
                if (seen.has(key)) return;
                seen.add(key);
                const div = document.createElement("div");
                div.className = "missed-item";
                div.innerHTML = `<strong>${escapeHTML(card.term)}</strong> <span>— ${escapeHTML(card.definition)}</span>`;
                missedDiv.appendChild(div);
            });
        }
    }

    // ============================================================
    // MANAGE CARDS
    // ============================================================
    function bindManage() {
        document.getElementById("add-card-btn").addEventListener("click", addCard);
        document.getElementById("import-btn").addEventListener("click", bulkImport);
        document.getElementById("export-btn").addEventListener("click", bulkExport);
        document.getElementById("file-upload").addEventListener("change", handleFileUpload);
        document.getElementById("manage-category").addEventListener("change", refreshCardList);
        ["card-term", "card-definition", "card-notes"].forEach(id =>
            document.getElementById(id).addEventListener("keydown", e => { if (e.key === "Enter") addCard(); })
        );
    }
    function getManageCategory() { return document.getElementById("manage-category").value; }
    function addCard() {
        const term = document.getElementById("card-term").value.trim();
        const def = document.getElementById("card-definition").value.trim();
        const notes = document.getElementById("card-notes").value.trim();
        if (!term || !def) return;
        data[getManageCategory()].cards.push({ term, definition: def, notes });
        saveData(); renderCategories(); refreshCardList();
        document.getElementById("card-term").value = "";
        document.getElementById("card-definition").value = "";
        document.getElementById("card-notes").value = "";
        document.getElementById("card-term").focus();
    }
    function refreshCardList() {
        const cat = getManageCategory();
        const cards = data[cat].cards;
        document.getElementById("card-count").textContent = cards.length;
        const list = document.getElementById("card-list");
        list.innerHTML = "";
        cards.forEach((card, i) => {
            const item = document.createElement("div");
            item.className = "card-list-item";
            item.innerHTML = `
                <div class="card-text">
                    <span class="card-term">${escapeHTML(card.term)}</span>
                    <span class="card-def">${escapeHTML(card.definition)}</span>
                </div>
                <button class="delete-btn" title="Delete">&times;</button>
            `;
            item.querySelector(".delete-btn").addEventListener("click", () => {
                data[cat].cards.splice(i, 1);
                saveData(); renderCategories(); refreshCardList();
            });
            list.appendChild(item);
        });
    }
    function bulkImport() {
        const text = document.getElementById("bulk-import").value.trim();
        if (!text) return;
        const cat = getManageCategory();
        text.split("\n").forEach(line => {
            const parts = line.split("\t");
            if (parts.length >= 2)
                data[cat].cards.push({ term: parts[0].trim(), definition: parts[1].trim(), notes: (parts[2] || "").trim() });
        });
        saveData(); renderCategories(); refreshCardList();
        document.getElementById("bulk-import").value = "";
    }
    function bulkExport() {
        const cat = getManageCategory();
        const text = data[cat].cards.map(c => `${c.term}\t${c.definition}\t${c.notes || ""}`).join("\n");
        document.getElementById("bulk-import").value = text;
        navigator.clipboard.writeText(text).catch(() => {});
    }
    function handleFileUpload(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => { document.getElementById("bulk-import").value = ev.target.result; };
        reader.readAsText(file);
        e.target.value = "";
    }

    // ============================================================
    // DICTIONARY
    // ============================================================
    function bindDictionary() {
        const input = document.getElementById("dict-search");
        if (!input) return;
        let debounce = null;
        input.addEventListener("input", () => {
            clearTimeout(debounce);
            debounce = setTimeout(() => searchDictionary(input.value.trim()), 150);
        });
        // Show hint on load
        document.getElementById("dict-results").innerHTML = '<p class="dict-hint">Start typing to search across all categories and verb conjugations</p>';
    }

    // Detect deponent verbs — those with no active indicative forms
    function isDeponentVerb(verbObj) {
        if (!verbObj || !verbObj.indicative) return false;
        // A verb is deponent if it has no Present Active Indicative
        return !verbObj.indicative["Present Active Indicative"];
    }

    // Build English translations for a conjugated verb form, aware of tense/voice
    // tense is optional — when omitted, gives present active translation (for search matching)
    function verbEnglishVariants(meaning, personIdx, tense, isDeponent) {
        const pronounSets = [
            ["I"],                            // 1sg
            ["you"],                          // 2sg
            ["he/she/it", "he", "she", "it"], // 3sg
            ["we"],                           // 1pl
            ["you all"],                       // 2pl
            ["they"],                         // 3pl
        ];
        const pronouns = pronounSets[personIdx];

        // Get first meaning word/phrase — strip "I " prefix
        const firstMeaning = meaning.replace(/;.*$/, "").replace(/,.*$/, "").trim();
        let verb = firstMeaning;
        if (verb.toLowerCase().startsWith("i ")) verb = verb.substring(2);

        // Handle "/" alternatives: conjugate each separately and join with "/"
        if (verb.includes("/")) {
            // "go/come down" → verbs ["go","come"], shared suffix "down"
            // "come/go" → verbs ["come","go"], no suffix
            const slashMatch = verb.match(/^(\S+)\/(\S+)(.*)$/);
            let altVerbs, sharedSuffix;
            if (slashMatch) {
                altVerbs = [slashMatch[1].trim(), slashMatch[2].trim()];
                sharedSuffix = slashMatch[3].trim();
            } else {
                altVerbs = verb.split("/").map(v => v.trim());
                sharedSuffix = "";
            }
            const variants = pronouns.map(p => {
                const altTranslations = altVerbs.map(av => {
                    const avBe = av.toLowerCase().startsWith("am");
                    let trans = buildTenseTranslation(p, av, tense, avBe, personIdx, isDeponent);
                    if (sharedSuffix) {
                        // Insert suffix before voice tags like "(mid.)" or "(pass.)"
                        const voiceMatch = trans.match(/(\s*\((?:mid|pass)\.\).*)$/);
                        if (voiceMatch) {
                            trans = trans.slice(0, -voiceMatch[0].length) + " " + sharedSuffix + voiceMatch[0];
                        } else {
                            trans += " " + sharedSuffix;
                        }
                    }
                    return trans;
                });
                return altTranslations.join(" / ");
            });
            if ((tense || "").toLowerCase().includes("subjunctive")) {
                const mightVariants = variants.map(v => v.replace(/ may /g, " might ").replace(/ may$/, " might"));
                mightVariants.forEach(mv => { if (!variants.includes(mv)) variants.push(mv); });
            }
            return variants;
        }

        // Detect "am" verbs (e.g. "I am, exist" → verb = "am, exist")
        const isBeVerb = verb.toLowerCase().startsWith("am");

        // Build translation for each pronoun variant
        const variants = pronouns.map(p => buildTenseTranslation(p, verb, tense, isBeVerb, personIdx, isDeponent));
        // For subjunctive tenses, also accept "might" in place of "may"
        if ((tense || "").toLowerCase().includes("subjunctive")) {
            const mightVariants = variants.map(v => v.replace(/ may /g, " might ").replace(/ may$/, " might"));
            mightVariants.forEach(mv => { if (!variants.includes(mv)) variants.push(mv); });
        }
        return variants;
    }

    function buildTenseTranslation(pronoun, verb, tense, isBeVerb, personIdx, isDeponent) {
        const t = (tense || "").toLowerCase();

        // Helper: conjugate "be" for person
        const bePresent = () => {
            if (pronoun === "I") return "am";
            if (pronoun === "he/she/it" || pronoun === "he" || pronoun === "she" || pronoun === "it") return "is";
            return "are";
        };
        const bePast = () => (pronoun === "I" || pronoun === "he/she/it" || pronoun === "he" || pronoun === "she" || pronoun === "it") ? "was" : "were";

        // For "be" verbs (εἰμί etc.), the verb IS the be-verb
        if (isBeVerb) {
            const rest = verb.substring(2).trim(); // after "am"
            if (t.includes("present") && !t.includes("subjunctive")) return pronoun + " " + bePresent() + (rest ? " " + rest : "");
            if (t.includes("future")) return pronoun + " will be" + (rest ? " " + rest : "");
            if (t.includes("imperfect")) return pronoun + " " + bePast() + (rest ? " " + rest : "");
            if (t.includes("aorist") && !t.includes("subjunctive")) return pronoun + " " + bePast() + (rest ? " " + rest : "");
            if (t.includes("perfect")) return pronoun + " " + (pronoun === "I" || pronoun === "we" || pronoun === "you" || pronoun === "you all" || pronoun === "they" ? "have" : "has") + " been" + (rest ? " " + rest : "");
            if (t.includes("subjunctive")) return pronoun + " may be" + (rest ? " " + rest : "");
            return pronoun + " " + bePresent() + (rest ? " " + rest : "");
        }

        const hasHave = () => (pronoun === "he/she/it" || pronoun === "he" || pronoun === "she" || pronoun === "it") ? "has" : "have";
        const isMidPass = t.includes("middle/passive") || t.includes("mid/pass");
        const isPassive = t.includes("passive") && !isMidPass;
        const isMiddle = t.includes("middle") && !isMidPass && !isPassive;

        // For deponent verbs, treat mid/pass forms as active (no voice tags)
        if (isDeponent) {
            return buildVoiceTranslation(pronoun, verb, t, "active", bePresent, bePast, hasHave);
        }

        // For mid/pass tenses, build BOTH translations
        if (isMidPass) {
            const mid = buildVoiceTranslation(pronoun, verb, t, "middle", bePresent, bePast, hasHave);
            const pass = buildVoiceTranslation(pronoun, verb, t, "passive", bePresent, bePast, hasHave);
            return mid + " / " + pass;
        }
        if (isPassive) return buildVoiceTranslation(pronoun, verb, t, "passive", bePresent, bePast, hasHave);
        if (isMiddle) return buildVoiceTranslation(pronoun, verb, t, "middle", bePresent, bePast, hasHave);
        return buildVoiceTranslation(pronoun, verb, t, "active", bePresent, bePast, hasHave);
    }

    // Smart English verb forms — handles silent-e, consonant doubling, irregular patterns
    function pastTense(verb) {
        const v = verb.toLowerCase();
        // Common irregular verbs in the lexicon
        const irregulars = {
            "loose": "loosed", "have": "had", "hold": "held", "say": "said",
            "speak": "spoke", "hear": "heard", "see": "saw", "believe": "believed",
            "love": "loved", "seek": "sought", "call": "called", "fill": "filled",
            "do": "did", "make": "made", "keep": "kept", "answer": "answered",
            "come": "came", "go": "went", "give": "gave", "live": "lived",
            "raise": "raised", "take": "took", "send": "sent", "know": "knew",
            "judge": "judged", "remain": "remained", "save": "saved", "die": "died",
            "teach": "taught", "walk": "walked", "follow": "followed", "ask": "asked",
            "wish": "wished", "throw": "threw", "become": "became", "find": "found",
            "receive": "received", "pray": "prayed", "depart": "departed", "begin": "began",
            "write": "wrote", "praise": "praised", "proclaim": "proclaimed", "drink": "drank",
            "lead": "led", "fear": "feared", "rejoice": "rejoiced", "bear": "bore",
            "carry": "carried", "bring": "brought", "sit": "sat", "think": "thought",
            "sow": "sowed", "gather": "gathered", "eat": "ate", "greet": "greeted",
        };
        if (irregulars[v]) return irregulars[v];
        // Rules
        if (v.endsWith("e")) return verb + "d";
        if (v.endsWith("y") && !/[aeiou]y$/.test(v)) return verb.slice(0, -1) + "ied";
        if (/[aeiou][bdgmnpt]$/.test(v) && v.length <= 5) return verb + verb[verb.length - 1] + "ed";
        return verb + "ed";
    }
    function pastParticiple(verb) {
        const v = verb.toLowerCase();
        const irregulars = {
            "loose": "loosed", "have": "had", "hold": "held", "say": "said",
            "speak": "spoken", "hear": "heard", "see": "seen", "believe": "believed",
            "love": "loved", "seek": "sought", "call": "called", "fill": "filled",
            "do": "done", "make": "made", "keep": "kept", "answer": "answered",
            "come": "come", "go": "gone", "give": "given", "live": "lived",
            "raise": "raised", "take": "taken", "send": "sent", "know": "known",
            "judge": "judged", "remain": "remained", "save": "saved", "die": "died",
            "teach": "taught", "walk": "walked", "follow": "followed", "ask": "asked",
            "wish": "wished", "throw": "thrown", "become": "become", "find": "found",
            "receive": "received", "pray": "prayed", "depart": "departed", "begin": "begun",
            "write": "written", "praise": "praised", "proclaim": "proclaimed", "drink": "drunk",
            "lead": "led", "fear": "feared", "rejoice": "rejoiced", "bear": "borne",
            "carry": "carried", "bring": "brought", "sit": "sat", "think": "thought",
            "sow": "sown", "gather": "gathered", "eat": "eaten", "greet": "greeted",
        };
        if (irregulars[v]) return irregulars[v];
        return pastTense(verb);
    }
    function presentParticiple(verb) {
        const v = verb.toLowerCase();
        if (v.endsWith("ie")) return verb.slice(0, -2) + "ying";
        if (v.endsWith("e") && !v.endsWith("ee")) return verb.slice(0, -1) + "ing";
        if (/[aeiou][bdgmnpt]$/.test(v) && !/[aeiou]{2}[bdgmnpt]$/.test(v) && v.length <= 5) return verb + verb[verb.length - 1] + "ing";
        return verb + "ing";
    }

    function buildVoiceTranslation(pronoun, verb, t, voice, bePresent, bePast, hasHave) {
        const isPass = voice === "passive";
        const isMid = voice === "middle";
        const voiceTag = isMid ? " (mid.)" : isPass ? " (pass.)" : "";
        const pp = pastParticiple(verb);
        const pt = pastTense(verb);
        const ppr = presentParticiple(verb);

        if (t.includes("present") && !t.includes("subjunctive")) {
            if (isPass) return pronoun + " " + bePresent() + " " + pp + voiceTag;
            if (isMid) return pronoun + " " + verb + " (mid.)";
            return pronoun + " " + verb;
        }
        if (t.includes("future")) {
            if (isPass) return pronoun + " will be " + pp + voiceTag;
            if (isMid) return pronoun + " will " + verb + " (mid.)";
            return pronoun + " will " + verb;
        }
        if (t.includes("imperfect")) {
            if (isPass) return pronoun + " " + bePast() + " being " + pp + voiceTag;
            if (isMid) return pronoun + " " + bePast() + " " + ppr + " (mid.)";
            return pronoun + " " + bePast() + " " + ppr;
        }
        if (t.includes("aorist") && !t.includes("subjunctive")) {
            if (isPass) return pronoun + " " + bePast() + " " + pp + voiceTag;
            if (isMid) return pronoun + " " + pt + " (mid.)";
            return pronoun + " " + pt;
        }
        if (t.includes("perfect")) {
            if (isPass) return pronoun + " " + hasHave() + " been " + pp + voiceTag;
            if (isMid) return pronoun + " " + hasHave() + " " + pp + " (mid.)";
            return pronoun + " " + hasHave() + " " + pp;
        }
        if (t.includes("subjunctive")) {
            if (isPass) return pronoun + " may be " + pp + voiceTag;
            if (isMid) return pronoun + " may " + verb + " (mid.)";
            return pronoun + " may " + verb;
        }
        return pronoun + " " + verb;
    }

    function verbEnglishDisplay(meaning, personIdx, tense, isDeponent) {
        return verbEnglishVariants(meaning, personIdx, tense, isDeponent)[0];
    }

    // English for imperative forms (2sg, 3sg, 2pl, 3pl → indices 0-3)
    function imperativeEnglish(meaning, impIdx, tense) {
        let verb = meaning.replace(/;.*$/, "").replace(/,.*$/, "").trim();
        if (verb.toLowerCase().startsWith("i ")) verb = verb.substring(2);
        const labels = ["", "let him/her/it ", "", "let them "];
        const prefix = labels[impIdx] || "";
        return prefix + verb + "!";
    }

    // Irregular English past participles for common verbs
    const IRREGULAR_PAST = {
        'write':'written','come':'come','go':'gone','take':'taken','give':'given',
        'know':'known','see':'seen','find':'found','speak':'spoken','hear':'heard',
        'say':'said','rise':'risen','eat':'eaten','drink':'drunk','send':'sent',
        'throw':'thrown','fall':'fallen','begin':'begun','bear':'borne','become':'become',
        'bring':'brought','build':'built','buy':'bought','catch':'caught','choose':'chosen',
        'draw':'drawn','drive':'driven','feel':'felt','get':'got','grow':'grown',
        'have':'had','hold':'held','keep':'kept','leave':'left','lead':'led',
        'lose':'lost','make':'made','put':'put','read':'read','run':'run',
        'sell':'sold','show':'shown','sit':'sat','stand':'stood','teach':'taught',
        'tell':'told','think':'thought','understand':'understood','win':'won',
        'receive':'received','am':'been','exist':'existed','die':'died',
        'beget':'begotten','forgive':'forgiven','break':'broken','wake':'woken',
        'be able':'been able','loose':'loosed','believe':'believed',
    };

    function participleEnglish(meaning, ptcpType) {
        let base = meaning.replace(/;.*$/, "").replace(/,.*$/, "").trim();
        if (base.toLowerCase().startsWith("i ")) base = base.substring(2);
        base = base.trim().toLowerCase();

        // Generate -ing form
        let ing;
        if (base.endsWith('ie')) ing = base.slice(0, -2) + 'ying';
        else if (base === 'be' || base === 'see') ing = base + 'ing';
        else if (base.endsWith('ee')) ing = base + 'ing';
        else if (base.endsWith('e')) ing = base.slice(0, -1) + 'ing';
        else if (/[^aeiou][aeiou][^aeiouwxy]$/.test(base) && base.length <= 4) ing = base + base.slice(-1) + 'ing';
        else ing = base + 'ing';

        // Generate past participle
        let past = IRREGULAR_PAST[base];
        if (!past) {
            if (base.endsWith('e')) past = base + 'd';
            else if (base.endsWith('y') && !/[aeiou]y$/.test(base)) past = base.slice(0, -1) + 'ied';
            else past = base + 'ed';
        }

        const t = ptcpType.toLowerCase();
        if (t.includes('present') && t.includes('active')) return ing;
        if (t.includes('present')) return 'being ' + past;
        if (t.includes('aorist') && t.includes('passive')) return 'having been ' + past;
        if (t.includes('aorist')) return 'having ' + past;
        if (t.includes('perfect') && (t.includes('middle') || t.includes('passive'))) return 'having been ' + past;
        if (t.includes('perfect')) return 'having ' + past;
        return ing;
    }

    function searchDictionary(query) {
        const results = document.getElementById("dict-results");
        if (!query) {
            results.innerHTML = '<p class="dict-hint">Start typing to search across all categories and verb conjugations</p>';
            return;
        }

        const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/^-+/, "").trim();
        // Expand "X/Y" into contextual alternatives: "I come/go to" → ["I come to", "I go to"]
        const expandSlash = (str) => {
            const parts = str.split(";").map(s => s.trim()).filter(Boolean);
            const results = [];
            for (const part of parts) {
                results.push(norm(part));
                // Find "word/word" patterns and expand with full context
                const m = part.match(/(\S+)\/(\S+)/);
                if (m) {
                    results.push(norm(part.replace(m[0], m[1])));
                    results.push(norm(part.replace(m[0], m[2])));
                }
            }
            return results;
        };
        const q = norm(query);
        const qRaw = query.toLowerCase().trim();
        // Also try treating input as a transliteration (e.g. "theos" → "θεος")
        const qTranslit = translitToGreek(q);
        const matches = [];

        // Search all category cards
        for (const catKey in data) {
            const cat = data[catKey];
            cat.cards.forEach(card => {
                const termN = norm(card.term);
                const defN = norm(card.definition);
                const notesN = norm(card.notes || "");
                // Expand definition alternatives: "come/go" → ["come", "go", ...]
                const defAlts = expandSlash(card.definition);
                const defMatch = defN.includes(q) || defAlts.some(alt => alt.includes(q));
                const termMatch = termN.includes(q) || (qTranslit && termN.includes(qTranslit));
                if (termMatch || defMatch || notesN.includes(q)) {
                    matches.push({ type: "card", category: cat.name, catKey, card, termMatch, defMatch });
                }
            });
        }

        // Search verb lexicon — match lexical form, meaning, conjugated forms, AND English translations
        if (typeof VERB_LEXICON !== "undefined") {
            for (const verbKey in VERB_LEXICON) {
                const verb = VERB_LEXICON[verbKey];
                const lexN = norm(verbKey);
                const meaningN = norm(verb.meaning);
                // Expand meaning alternatives: "I come/go to" → ["I come to", "I go to", ...]
                const meaningAlts = expandSlash(verb.meaning);
                const meaningMatch = meaningN.includes(q) || meaningAlts.some(alt => alt.includes(q));
                const lexTranslitMatch = qTranslit && lexN.includes(qTranslit);
                let formMatch = false;
                let matchedInForm = null;

                const verbDeponent = isDeponentVerb(verb);
                // Helper: check a conjugation group (indicative or subjunctive)
                const searchGroup = (group, label) => {
                    if (formMatch || !group) return;
                    for (const tense in group) {
                        if (DEPONENT_BARE_TENSES.has(tense)) continue;
                        const forms = group[tense];
                        for (let i = 0; i < forms.length; i++) {
                            if (forms[i] === "--") continue;
                            // Match Greek form
                            if (norm(forms[i]).includes(q)) {
                                formMatch = true;
                                matchedInForm = { tense, form: forms[i], personIdx: i, english: verbEnglishDisplay(verb.meaning, i, tense, verbDeponent) };
                                return;
                            }
                            // Match English translation (e.g., "he is", "you die")
                            const engVariants = verbEnglishVariants(verb.meaning, i, tense, verbDeponent);
                            for (const eng of engVariants) {
                                if (norm(eng).includes(q)) {
                                    formMatch = true;
                                    matchedInForm = { tense, form: forms[i], personIdx: i, english: verbEnglishDisplay(verb.meaning, i, tense, verbDeponent) };
                                    return;
                                }
                            }
                        }
                    }
                };

                searchGroup(verb.indicative, "indicative");
                searchGroup(verb.subjunctive, "subjunctive");

                // Check imperative forms
                if (!formMatch && verb.imperative) {
                    for (const tense in verb.imperative) {
                        const forms = verb.imperative[tense];
                        for (let i = 0; i < forms.length; i++) {
                            if (forms[i] === "--") continue;
                            if (norm(forms[i]).includes(q)) {
                                formMatch = true;
                                matchedInForm = { tense, form: forms[i], personIdx: i, english: imperativeEnglish(verb.meaning, i, tense) };
                                break;
                            }
                        }
                        if (formMatch) break;
                    }
                }

                // Check infinitives
                if (!formMatch && verb.infinitives) {
                    for (const infType in verb.infinitives) {
                        const inf = verb.infinitives[infType];
                        if (inf !== "--" && norm(inf).includes(q)) {
                            formMatch = true;
                            matchedInForm = { tense: "Infinitives", form: inf, english: "to " + verb.meaning.replace(/^I /, "").replace(/;.*$/, "").trim() };
                            break;
                        }
                    }
                }

                // Check participle forms
                if (!formMatch && verb.participles) {
                    for (const ptcpType in verb.participles) {
                        const ptcpData = verb.participles[ptcpType];
                        for (const caseName in ptcpData) {
                            const forms = ptcpData[caseName];
                            for (let i = 0; i < forms.length; i++) {
                                if (forms[i] !== "—" && norm(forms[i]).includes(q)) {
                                    const gLabels = ["M.Sg.", "F.Sg.", "N.Sg.", "M.Pl.", "F.Pl.", "N.Pl."];
                                    const ptcpEng = participleEnglish(verb.meaning, ptcpType);
                                    formMatch = true;
                                    matchedInForm = { tense: ptcpType + " Participle", form: forms[i], english: ptcpEng + " (" + caseName + " " + (gLabels[i] || "") + ")" };
                                    break;
                                }
                            }
                            if (formMatch) break;
                        }
                        if (formMatch) break;
                    }
                }

                if (lexN.includes(q) || lexTranslitMatch || meaningMatch || formMatch) {
                    matches.push({ type: "verb", verbKey, verb, formMatch: matchedInForm });
                }
            }
        }

        // Search noun lexicon — match lexical form, meaning, or declined forms
        if (typeof NOUN_LEXICON !== "undefined") {
            for (const nounKey in NOUN_LEXICON) {
                const noun = NOUN_LEXICON[nounKey];
                const lexN = norm(nounKey);
                const meaningN = norm(noun.meaning);
                const meaningAlts = expandSlash(noun.meaning);
                const meaningMatch = meaningN.includes(q) || meaningAlts.some(alt => alt.includes(q));
                let formMatch = false;
                let matchedForm = null;

                if (noun.forms) {
                    for (const caseName in noun.forms) {
                        const [sg, pl] = noun.forms[caseName];
                        if (sg !== "—" && norm(sg).includes(q)) {
                            formMatch = true;
                            matchedForm = { caseName, form: sg, number: "Sg." };
                            break;
                        }
                        if (pl !== "—" && norm(pl).includes(q)) {
                            formMatch = true;
                            matchedForm = { caseName, form: pl, number: "Pl." };
                            break;
                        }
                    }
                }
                if (!formMatch && noun.genderForms) {
                    for (const caseName in noun.genderForms) {
                        const f = noun.genderForms[caseName];
                        for (let i = 0; i < f.length; i++) {
                            if (f[i] !== "—" && norm(f[i]).includes(q)) {
                                const gLabels = ["M.Sg.", "F.Sg.", "N.Sg.", "M.Pl.", "F.Pl.", "N.Pl."];
                                formMatch = true;
                                matchedForm = { caseName, form: f[i], number: gLabels[i] || "" };
                                break;
                            }
                        }
                        if (formMatch) break;
                    }
                }

                const nounTranslitMatch = qTranslit && lexN.includes(qTranslit);
                if (lexN.includes(q) || nounTranslitMatch || meaningMatch || formMatch) {
                    matches.push({ type: "noun", nounKey, noun, formMatch: matchedForm, termMatch: lexN.includes(q) || nounTranslitMatch });
                }
            }
        }

        if (matches.length === 0) {
            results.innerHTML = '<p class="dict-empty">No results found</p>';
            return;
        }

        // Sort: exact raw-text matches first, then normalized exact, then starts-with, then contains, then definition-only
        matches.sort((a, b) => {
            const rank = (m) => {
                if (m.type === "card") {
                    const termRaw = m.card.term.toLowerCase().trim();
                    const termN = norm(m.card.term);
                    const defN = norm(m.card.definition);
                    if (termRaw === qRaw) return 0;        // exact raw match
                    if (termN === q) return 1;             // exact normalized term match
                    if (defN === q) return 1.2;            // definition is exactly the query (e.g. "the")
                    if (termN.startsWith(q)) return 2;    // term starts with query
                    if (m.termMatch) return 3;             // term contains query
                    return 6;                              // definition/notes match only
                }
                if (m.type === "verb") {
                    const vRaw = m.verbKey.toLowerCase().trim();
                    if (vRaw === qRaw) return 0.5;
                    if (norm(m.verbKey) === q) return 1.5;
                    if (norm(m.verbKey).startsWith(q)) return 2.5;
                    if (!m.formMatch) return 4;            // verb meaning match
                    return 5;                              // verb conjugation form match
                }
                if (m.type === "noun") {
                    const nRaw = m.nounKey.toLowerCase().trim();
                    if (nRaw === qRaw) return 0.5;
                    if (norm(m.nounKey) === q) return 1.5;
                    if (norm(m.nounKey).startsWith(q)) return 2.5;
                    if (m.formMatch && norm(m.formMatch.form) === q) return 2;  // exact form match
                    // meaning is exactly the query OR the query is the first word of the meaning
                    const meaningN = norm(m.noun.meaning || "");
                    const meaningWords = meaningN.split(/[\s,;()]+/).filter(Boolean);
                    if (!m.formMatch && (meaningN === q || (meaningWords[0] === q))) return 1.3;
                    if (!m.formMatch) return 4;
                    return 5;
                }
                return 7;
            };
            return rank(a) - rank(b);
        });

        // Deduplicate: prefer noun/verb lexicon entries over plain vocab cards for the same term.
        // Build sets of all Greek forms covered by noun-lexicon entries (for suppression of paradigm cards)
        const nounCoveredForms = new Set();
        const verbCoveredForms = new Set();
        for (const m of matches) {
            if (m.type === "noun") {
                nounCoveredForms.add(norm(m.nounKey));
                // Also add just the base lemma (before any comma) so "ἀγαθός, -ή, -όν" covers card term "ἀγαθός, -ή, -όν"
                nounCoveredForms.add(norm(m.nounKey.split(',')[0]));
                const n = m.noun;
                if (n.forms) { for (const c in n.forms) { const [sg,pl] = n.forms[c]; nounCoveredForms.add(norm(sg)); nounCoveredForms.add(norm(pl)); } }
                if (n.genderForms) { for (const c in n.genderForms) { n.genderForms[c].forEach(f => nounCoveredForms.add(norm(f))); } }
            }
            if (m.type === "verb") {
                verbCoveredForms.add(norm(m.verbKey));
            }
        }
        const seen = new Set();
        const deduped = [];
        for (const m of matches) {
            const key = m.type === "card" ? norm(m.card.term) : m.type === "verb" ? norm(m.verbKey) : norm(m.nounKey);
            // Suppress vocab/paradigm card if a richer lexicon entry covers this exact form.
            // Check both the full card term and just the base lemma (before the comma),
            // so "ἀγαθός, -ή, -όν" is suppressed when noun-lexicon has "ἀγαθός, -ή, -όν".
            if (m.type === "card") {
                const cardNorm = norm(m.card.term);
                const cardBase = norm(m.card.term.split(',')[0].split('—')[0].split('/')[0]);
                if (nounCoveredForms.has(cardNorm) || nounCoveredForms.has(cardBase) ||
                    verbCoveredForms.has(cardNorm) || verbCoveredForms.has(cardBase)) continue;
            }
            const uniqueKey = key + "|" + (m.type === "card" ? m.catKey : m.type);
            if (!seen.has(uniqueKey)) {
                seen.add(uniqueKey);
                deduped.push(m);
            }
        }

        // Limit to 50 results
        const shown = deduped.slice(0, 50);
        results.innerHTML = shown.map(m => {
            if (m.type === "card") {
                return renderDictCard(m);
            } else if (m.type === "noun") {
                return renderDictNoun(m);
            } else {
                return renderDictVerb(m);
            }
        }).join("");
    }

    function renderDictCard(m) {
        let html = `<div class="dict-card">
            <div class="dict-card-header">
                <span class="dict-term">${escapeHTML(m.card.term)}</span>
                <span class="dict-category">${escapeHTML(m.category)}</span>
            </div>
            <div class="dict-def">${escapeHTML(m.card.definition)}</div>`;
        if (m.card.notes) {
            html += `<div class="dict-notes">${escapeHTML(m.card.notes)}</div>`;
        }
        html += `</div>`;
        return html;
    }

    function renderDictVerb(m) {
        const v = m.verb;
        let html = `<div class="dict-card">
            <div class="dict-card-header">
                <span class="dict-term">${escapeHTML(m.verbKey)}</span>
                <span class="dict-category">Verb Lexicon</span>
            </div>
            <div class="dict-def">${escapeHTML(v.meaning)}</div>`;
        if (v.note) {
            html += `<div class="dict-verb-note">${escapeHTML(v.note)}</div>`;
        }
        if (m.formMatch) {
            const fm = m.formMatch;
            const engText = fm.english ? ` — "${escapeHTML(fm.english)}"` : "";
            html += `<div class="dict-form-match"><span class="dict-form-greek">${escapeHTML(fm.form)}</span>${engText}<span class="dict-form-tense">${escapeHTML(fm.tense)}</span></div>`;
        }
        // Expandable conjugation tables with English translations
        html += `<details class="dict-conjugations"><summary>View conjugations</summary><div class="dict-conj-grid">`;
        const personLabels = ["1sg", "2sg", "3sg", "1pl", "2pl", "3pl"];
        // Determine which form to highlight (matched form from search)
        const hlForm = m.formMatch ? m.formMatch.form : null;
        const hlTense = m.formMatch ? m.formMatch.tense : null;
        const vDeponent = isDeponentVerb(v);

        if (v.indicative) {
            for (const tense in v.indicative) {
                if (DEPONENT_BARE_TENSES.has(tense)) continue;
                const forms = v.indicative[tense];
                if (forms.every(f => f === "--")) continue;
                html += `<div class="dict-conj-block"><h4>${escapeHTML(tense)}</h4><table>`;
                forms.forEach((f, i) => {
                    if (f !== "--") {
                        const eng = verbEnglishDisplay(v.meaning, i, tense, vDeponent);
                        const isHL = (f === hlForm && tense === hlTense);
                        html += `<tr class="${isHL ? "dict-highlight" : ""}"><td>${personLabels[i]}</td><td>${escapeHTML(f)} <span class="dict-eng">(${escapeHTML(eng)})</span></td></tr>`;
                    }
                });
                html += `</table></div>`;
            }
        }
        if (v.subjunctive) {
            for (const tense in v.subjunctive) {
                const forms = v.subjunctive[tense];
                if (forms.every(f => f === "--")) continue;
                html += `<div class="dict-conj-block"><h4>${escapeHTML(tense)}</h4><table>`;
                forms.forEach((f, i) => {
                    if (f !== "--") {
                        const eng = verbEnglishDisplay(v.meaning, i, tense, vDeponent);
                        const isHL = (f === hlForm && tense === hlTense);
                        html += `<tr class="${isHL ? "dict-highlight" : ""}"><td>${personLabels[i]}</td><td>${escapeHTML(f)} <span class="dict-eng">(${escapeHTML(eng)})</span></td></tr>`;
                    }
                });
                html += `</table></div>`;
            }
        }
        if (v.imperative) {
            const impLabels = ["2sg", "3sg", "2pl", "3pl"];
            for (const tense in v.imperative) {
                const forms = v.imperative[tense];
                if (forms.every(f => f === "--")) continue;
                html += `<div class="dict-conj-block"><h4>${escapeHTML(tense)}</h4><table>`;
                forms.forEach((f, i) => {
                    if (f !== "--") {
                        const eng = imperativeEnglish(v.meaning, i, tense);
                        const isHL = (f === hlForm && tense === hlTense);
                        html += `<tr class="${isHL ? "dict-highlight" : ""}"><td>${impLabels[i]}</td><td>${escapeHTML(f)} <span class="dict-eng">(${escapeHTML(eng)})</span></td></tr>`;
                    }
                });
                html += `</table></div>`;
            }
        }
        if (v.infinitives) {
            const infEntries = Object.entries(v.infinitives).filter(([,f]) => f !== "--");
            if (infEntries.length > 0) {
                const infEng = "to " + v.meaning.replace(/^I /, "").replace(/;.*$/, "").replace(/,.*$/, "").trim();
                html += `<div class="dict-conj-block"><h4>Infinitives</h4><table>`;
                infEntries.forEach(([type, form]) => {
                    const isHL = (form === hlForm && hlTense === "Infinitives");
                    html += `<tr class="${isHL ? "dict-highlight" : ""}"><td>${escapeHTML(type)}</td><td>${escapeHTML(form)} <span class="dict-eng">(${escapeHTML(infEng)})</span></td></tr>`;
                });
                html += `</table></div>`;
            }
        }
        html += `</div>`; // close dict-conj-grid
        if (v.participles) {
            const caseLabels = ["Nominative", "Genitive", "Dative", "Accusative"];
            html += `<div class="dict-participles">`;
            for (const ptcpType in v.participles) {
                const ptcpData = v.participles[ptcpType];
                const ptcpEng = participleEnglish(v.meaning, ptcpType);
                html += `<div class="dict-conj-block dict-conj-block--wide"><h4>${escapeHTML(ptcpType)} Participle — <u>"${escapeHTML(ptcpEng)}"</u></h4>`;
                html += `<table class="dict-ptcp-table"><tr><th></th><th colspan="3">Singular</th><th colspan="3">Plural</th></tr>`;
                html += `<tr><th></th><th>M.</th><th>F.</th><th>N.</th><th>M.</th><th>F.</th><th>N.</th></tr>`;
                caseLabels.forEach(caseName => {
                    const f = ptcpData[caseName];
                    if (!f) return;
                    html += `<tr><td class="dict-ptcp-case"><strong>${caseName}</strong></td>`;
                    f.forEach(form => {
                        const isHL = (form === hlForm);
                        html += `<td class="${isHL ? "dict-highlight" : ""}">${escapeHTML(form)}</td>`;
                    });
                    html += `</tr>`;
                });
                html += `</table></div>`;
            }
            html += `</div>`;
        }
        html += `</details></div>`;
        return html;
    }

    function renderDictNoun(m) {
        const n = m.noun;
        const typeLabel = n.type || (n.gender + ", " + n.declension + " declension");
        const catLabel = n.type === "article" ? "Article" : n.type === "pronoun" ? "Pronoun" : n.type === "adjective" ? "Adjective" : "Noun Lexicon";
        let html = `<div class="dict-card">
            <div class="dict-card-header">
                <span class="dict-term">${escapeHTML(m.nounKey)}</span>
                <span class="dict-category">${escapeHTML(catLabel)}</span>
            </div>
            <div class="dict-def">${escapeHTML(n.meaning)}</div>`;
        if (n.gender && n.declension) {
            html += `<div class="dict-notes">${escapeHTML(n.gender + ", " + n.declension + " declension")}</div>`;
        }
        if (m.formMatch) {
            const fm = m.formMatch;
            html += `<div class="dict-form-match"><span class="dict-form-greek">${escapeHTML(fm.form)}</span><span class="dict-form-tense">${escapeHTML(fm.caseName)} ${escapeHTML(fm.number)}</span></div>`;
        }
        const caseLabels = ["Nominative", "Genitive", "Dative", "Accusative"];
        const hlForm = m.formMatch ? m.formMatch.form : null;

        if (n.genderForms) {
            // Multi-gender table (article, pronouns, adjectives) — wide layout
            html += `<details class="dict-conjugations"><summary>View declension</summary>`;
            html += `<div class="dict-participles"><div class="dict-conj-block dict-conj-block--wide">`;
            html += `<table class="dict-ptcp-table">`;
            html += `<tr><th></th><th colspan="3">Singular</th><th colspan="3">Plural</th></tr>`;
            html += `<tr><th></th><th>M.</th><th>F.</th><th>N.</th><th>M.</th><th>F.</th><th>N.</th></tr>`;
            caseLabels.forEach(caseName => {
                if (n.genderForms[caseName]) {
                    const f = n.genderForms[caseName]; // [m.sg, f.sg, n.sg, m.pl, f.pl, n.pl]
                    html += `<tr><td class="dict-ptcp-case"><strong>${caseName.substring(0,3)}.</strong></td>`;
                    f.forEach(v => {
                        const isHL = (v === hlForm);
                        html += `<td class="${isHL ? "dict-highlight" : ""}">${escapeHTML(v)}</td>`;
                    });
                    html += `</tr>`;
                }
            });
            html += `</table></div></div></details></div>`;
        } else {
            // Simple 2-column table (nouns, personal pronouns)
            html += `<details class="dict-conjugations"><summary>View declension</summary><div class="dict-conj-grid">`;
            html += `<div class="dict-conj-block"><h4>Declension of ${escapeHTML(m.nounKey)}</h4><table>`;
            html += `<tr><th></th><th>Singular</th><th>Plural</th></tr>`;
            caseLabels.forEach(caseName => {
                if (n.forms[caseName]) {
                    const [sg, pl] = n.forms[caseName];
                    const isHL = (sg === hlForm || pl === hlForm);
                    html += `<tr class="${isHL ? "dict-highlight" : ""}"><td><strong>${caseName.substring(0,3)}.</strong></td><td>${escapeHTML(sg)}</td><td>${escapeHTML(pl)}</td></tr>`;
                }
            });
            html += `</table></div></div></details></div>`;
        }
        return html;
    }

    // ============================================================
    // TRANSLITERATION (Latin → Greek, normalized no-accent)
    // ============================================================
    // Maps common Latin transliterations to normalized Greek (no accents/breathings).
    // Used so users can type "theos" and match "θεος" (normalized θεός).
    function translitToGreek(latin) {
        if (!latin) return "";
        // Only process if input looks like Latin (has a-z chars but no Greek)
        if (/[\u0370-\u03ff\u1f00-\u1fff]/.test(latin)) return ""; // already Greek
        if (!/[a-z]/.test(latin)) return "";
        let s = latin.toLowerCase().trim();
        // Multi-char sequences first (order matters)
        s = s.replace(/ps/g, "ψ");
        s = s.replace(/ph/g, "φ");
        s = s.replace(/th/g, "θ");
        s = s.replace(/ch/g, "χ");
        s = s.replace(/ou/g, "ου");
        s = s.replace(/ng/g, "γγ");
        s = s.replace(/nk/g, "γκ");
        s = s.replace(/nx/g, "γξ");
        s = s.replace(/nc/g, "γχ");
        s = s.replace(/ks|x/g, "ξ");
        // Single chars
        const map = { a:"α", b:"β", g:"γ", d:"δ", e:"ε", z:"ζ", h:"η", i:"ι",
                      k:"κ", l:"λ", m:"μ", n:"ν", o:"ο", p:"π", r:"ρ", s:"σ",
                      t:"τ", u:"υ", y:"υ", f:"φ", w:"ω", q:"θ", c:"κ" };
        s = s.replace(/[a-z]/g, c => map[c] || c);
        // Normalize result (strip any remaining non-Greek)
        return s;
    }

    // ============================================================
    // ============================================================
    // TRANSLATE — word-by-word lookup from vocabulary & lexicons
    // ============================================================

    function containsGreek(text) {
        return /[\u0370-\u03FF\u1F00-\u1FFF]/.test(text);
    }
    function tlNorm(s) {
        return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    }
    function tlStrip(w) {
        return w.replace(/[.,;:·!?'"()[\]{}\u00B7\u037E\u0387—–]/g, "").trim();
    }
    // Normalized base of a lemma (before comma/space) — used for deduplication
    function tlBase(lemma) {
        return tlNorm(lemma.split(",")[0].split(" ")[0]);
    }

    // ---- Greek word lookup ----
    function lookupGreekWord(raw) {
        const word = tlStrip(raw);
        if (!word) return null;
        const q = tlNorm(word);

        if (typeof NOUN_LEXICON !== "undefined") {
            for (const key in NOUN_LEXICON)
                if (tlNorm(key.split(",")[0]) === q) return { lemma: key, meaning: NOUN_LEXICON[key].meaning };
            for (const key in NOUN_LEXICON) {
                const src = NOUN_LEXICON[key].forms || NOUN_LEXICON[key].genderForms;
                if (src) for (const c in src) if (src[c].some(f => tlNorm(f) === q)) return { lemma: key, meaning: NOUN_LEXICON[key].meaning };
            }
        }
        if (typeof VERB_LEXICON !== "undefined") {
            for (const key in VERB_LEXICON)
                if (tlNorm(key) === q) return { lemma: key, meaning: VERB_LEXICON[key].meaning };
            for (const key in VERB_LEXICON) {
                const v = VERB_LEXICON[key];
                let hit = false;
                const scan = obj => { if (!obj || hit) return; for (const t in obj) if (Array.isArray(obj[t]) && obj[t].some(f => tlNorm(f) === q)) hit = true; };
                scan(v.indicative); scan(v.subjunctive); scan(v.imperative);
                if (!hit && v.infinitives) for (const t in v.infinitives) if (tlNorm(v.infinitives[t]) === q) hit = true;
                if (!hit && v.participles) for (const pt in v.participles) for (const c in v.participles[pt]) if (v.participles[pt][c].some(f => tlNorm(f) === q)) hit = true;
                if (hit) return { lemma: key, meaning: v.meaning };
            }
        }
        for (const catKey in data)
            for (const card of (data[catKey].cards || [])) {
                const base = tlNorm(card.term.split(",")[0].split("/")[0].split("—")[0]);
                if (base === q || tlNorm(card.term) === q) return { lemma: card.term, meaning: card.definition };
            }
        return null;
    }

    // ---- English stop words ----
    const EN_STOP_WORDS = new Set([
        "i","am","is","are","be","been","being","was","were",
        "a","an","the","to","of","in","on","at","by","for",
        "from","as","it","its","not","no","nor",
        "my","your","his","her","our","their","one","two",
        "he","she","we","they","do","did","has","have","had",
        "will","would","can","could","may","might","shall","should",
        "or","and","but","so","if","up","out","into","unto",
        "this","that","which","who","what","how","when","where",
    ]);

    // ---- English phrase lookup (person + tense aware) ----

    // Subject pronouns → indicative form index [1sg=0, 2sg=1, 3sg=2, 1pl=3, 2pl=4, 3pl=5]
    const EN_PERSON = { "i":0, "you":1, "he":2, "she":2, "it":2, "we":3, "they":5 };

    // Irregular English past → base infinitive
    const EN_IRREG = {
        "went":"go","came":"come","saw":"see","knew":"know","said":"say",
        "told":"tell","spoke":"speak","heard":"hear","found":"find","got":"get",
        "gave":"give","took":"take","sent":"send","brought":"bring","led":"lead",
        "kept":"keep","held":"hold","lost":"lose","made":"make","set":"set",
        "let":"let","was":"be","were":"be","had":"have","did":"do",
        "rose":"rise","fell":"fall","bore":"bear","stood":"stand","sat":"sit",
        "lay":"lie","ran":"run","sang":"sing","wept":"weep","met":"meet",
        "left":"leave","became":"become","began":"begin","ate":"eat",
        "felt":"feel","fought":"fight","sought":"seek","sold":"sell",
        "taught":"teach","wrote":"write","forgave":"forgive","arose":"arise",
        "died":"die","loved":"love","believed":"believe","opened":"open",
        "healed":"heal","prayed":"pray","sinned":"sin","raised":"raise",
        "saved":"save","received":"receive","revealed":"reveal",
        "crucified":"crucify","glorified":"glorify","sanctified":"sanctify",
        "justified":"justify","testified":"testify","proclaimed":"proclaim",
        "baptized":"baptize","blessed":"bless","entered":"enter",
        "returned":"return","showed":"show","appeared":"appear",
    };

    function stemEnglishVerb(verb) {
        if (EN_IRREG[verb]) return { base: EN_IRREG[verb], isPast: true };
        if (verb.endsWith("ied"))  return { base: verb.slice(0,-3)+"y", isPast: true };
        if (verb.endsWith("ed"))   return { base: verb.slice(0,-1),     isPast: true };  // loved→love, died→die
        if (verb.endsWith("ies"))  return { base: verb.slice(0,-3)+"y", isPast: false };
        if (verb.endsWith("es") && verb.length > 3) return { base: verb.slice(0,-2), isPast: false };
        if (verb.endsWith("s")  && verb.length > 3) return { base: verb.slice(0,-1), isPast: false };
        return { base: verb, isPast: false };
    }

    const EN_TENSE_KEYS = {
        present: ["Present Active Indicative","Present Middle/Passive Indicative"],
        aorist:  ["1st Aorist Active Indicative","2nd Aorist Active Indicative","1st Aorist Passive Indicative"],
        future:  ["Future Active Indicative","Future Middle Indicative","Future Passive Indicative"],
        perfect: ["Perfect Active Indicative","Perfect Middle/Passive Indicative"],
    };

    function lookupEnglishPhrase(tokens) {
        // Detect person
        let personIdx = null;
        for (const t of tokens) if (EN_PERSON[t] !== undefined) { personIdx = EN_PERSON[t]; break; }

        const hasFuture  = tokens.includes("will");
        const hasPerfect = tokens.some(t => t === "have" || t === "has");

        // ---- Special case: εἰμί (to be) ----
        // "am/is/are/was/were" are all stop words so the normal verb search never finds them.
        // Detect them first and return the correct εἰμί form immediately.
        const EIMI_FORMS = {
            "am":   { tenseKey: "Present Active Indicative",   defaultPerson: 0 }, // always 1st sg
            "is":   { tenseKey: "Present Active Indicative",   defaultPerson: 2 }, // always 3rd sg
            "are":  { tenseKey: "Present Active Indicative",   defaultPerson: 5 }, // 3rd pl unless pronoun
            "was":  { tenseKey: "Imperfect Active Indicative", defaultPerson: 2 }, // 3rd sg unless pronoun
            "were": { tenseKey: "Imperfect Active Indicative", defaultPerson: 5 }, // 3rd pl unless pronoun
        };
        const eimiTok = tokens.find(t => EIMI_FORMS[t]);
        if (eimiTok && typeof VERB_LEXICON !== "undefined" && VERB_LEXICON["εἰμί"]) {
            const { tenseKey, defaultPerson } = EIMI_FORMS[eimiTok];
            const person = (personIdx !== null) ? personIdx : defaultPerson;
            const v = VERB_LEXICON["εἰμί"];
            if (v.indicative && v.indicative[tenseKey]) {
                const forms = v.indicative[tenseKey];
                if (forms[person] && forms[person] !== "--") {
                    const persLabel = ["1st","2nd","3rd"][person % 3];
                    const numLabel  = person < 3 ? "Sg." : "Pl.";
                    return { results: [{ form: forms[person], lemma: "εἰμί", meaning: v.meaning, info: `${tenseKey} — ${persLabel} ${numLabel}` }], usedVerbToken: eimiTok };
                }
            }
        }

        // ---- Regular verb phrase lookup ----
        // Find main verb token (skip pronouns, stop words, auxiliaries)
        const skip = new Set([...EN_STOP_WORDS, ...Object.keys(EN_PERSON), "will","have","has","had","not","never"]);
        const mainTok = tokens.find(t => !skip.has(t) && t.length > 1);
        if (!mainTok || typeof VERB_LEXICON === "undefined") return { results: [], usedVerbToken: null };

        const { base, isPast } = stemEnglishVerb(mainTok);
        const tenseType = hasFuture ? "future" : hasPerfect ? "perfect" : isPast ? "aorist" : "present";
        const baseNorm  = tlNorm(base);

        const results = [];
        for (const key in VERB_LEXICON) {
            const v = VERB_LEXICON[key];
            const meaningWords = tlNorm(v.meaning).split(/[\s,;/()\-]+/).filter(Boolean);
            const baseIdx = meaningWords.findIndex(w => w === baseNorm);
            // Require the base word to appear in the first 3 tokens of the meaning —
            // this avoids matching verbs where the word only shows up in a secondary
            // or parenthetical sense (e.g. ἀπόλλυμι: "I destroy, kill; (mid.) I perish, die").
            if (baseIdx === -1 || baseIdx > 2) continue;

            if (personIdx !== null && v.indicative) {
                for (const tk of (EN_TENSE_KEYS[tenseType] || [])) {
                    const forms = v.indicative[tk];
                    if (forms && forms[personIdx] && forms[personIdx] !== "--") {
                        const persLabel = ["1st","2nd","3rd"][personIdx % 3];
                        const numLabel  = personIdx < 3 ? "Sg." : "Pl.";
                        results.push({ form: forms[personIdx], lemma: key, meaning: v.meaning, info: `${tk} — ${persLabel} ${numLabel}` });
                        break;
                    }
                }
            } else {
                results.push({ lemma: key, meaning: v.meaning });
            }
        }
        return { results, usedVerbToken: mainTok };
    }

    // ---- English word lookup (single word, no phrase awareness) ----
    function lookupEnglishWord(raw) {
        const word = tlStrip(raw);
        if (!word || word.length < 2) return [];
        const q = tlNorm(word);
        if (EN_STOP_WORDS.has(q)) return [];
        const results = [];
        const seen = new Set(); // dedup by normalized base lemma

        const add = (lemma, meaning) => {
            const base = tlBase(lemma);
            if (!seen.has(base)) { seen.add(base); results.push({ lemma, meaning }); }
        };

        // Only match if q appears within the first 3 tokens of the meaning.
        // This prevents words like "with" matching entries where it only shows
        // up in parenthetical grammar notes (e.g. "used with non-indicative moods").
        const leadMatch = (meaning) => {
            const mw = tlNorm(meaning).split(/[\s,;/()\-]+/).filter(Boolean);
            const idx = mw.findIndex(w => w === q);
            return idx !== -1 && idx <= 2;
        };

        if (typeof VERB_LEXICON !== "undefined")
            for (const key in VERB_LEXICON) if (leadMatch(VERB_LEXICON[key].meaning)) add(key, VERB_LEXICON[key].meaning);
        if (typeof NOUN_LEXICON !== "undefined")
            for (const key in NOUN_LEXICON) if (leadMatch(NOUN_LEXICON[key].meaning)) add(key, NOUN_LEXICON[key].meaning);
        for (const catKey in data)
            for (const card of (data[catKey].cards || []))
                if (leadMatch(card.definition)) add(card.term, card.definition);

        return results;
    }

    // ---- Bind & run ----
    function bindTranslate() {
        document.getElementById("translate-clear-btn").addEventListener("click", () => {
            document.getElementById("translate-input").value = "";
            document.getElementById("translate-output").innerHTML = '<span class="translate-placeholder">Results will appear here</span>';
        });
        document.getElementById("translate-btn").addEventListener("click", doLookup);
        // Enter = look up; Shift+Enter = new line
        document.getElementById("translate-input").addEventListener("keydown", e => {
            if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); doLookup(); }
        });
    }

    function doLookup() {
        const input = document.getElementById("translate-input").value.trim();
        const out   = document.getElementById("translate-output");
        if (!input) return;

        const isGreek = containsGreek(input);
        const words   = input.split(/\s+/).filter(Boolean);

        if (isGreek) {
            // Greek → word-by-word table
            let found = 0;
            let html = '<table class="lookup-table"><thead><tr><th>Word</th><th>Lemma</th><th>Meaning</th></tr></thead><tbody>';
            for (const raw of words) {
                const display = tlStrip(raw);
                if (!display) continue;
                const result = lookupGreekWord(raw);
                if (result) {
                    found++;
                    html += `<tr>
                        <td class="lookup-word greek-text">${escapeHTML(display)}</td>
                        <td class="lookup-lemma greek-text">${escapeHTML(result.lemma)}</td>
                        <td class="lookup-meaning">${escapeHTML(result.meaning)}</td>
                    </tr>`;
                } else {
                    html += `<tr class="lookup-miss">
                        <td class="lookup-word greek-text">${escapeHTML(display)}</td>
                        <td class="lookup-lemma">—</td>
                        <td class="lookup-meaning lookup-not-found">not in vocabulary</td>
                    </tr>`;
                }
            }
            html += "</tbody></table>";
            if (found === 0) html = '<p class="translate-placeholder">No words found in your vocabulary.</p>';
            out.innerHTML = html;

        } else {
            // English → try phrase-aware lookup first
            const tokens = words.map(w => tlStrip(w).toLowerCase());
            const { results: phraseHits, usedVerbToken } = lookupEnglishPhrase(tokens);

            if (phraseHits.length > 0 && phraseHits[0].form) {
                // Specific conjugated forms found — show verb table
                let html = '<table class="lookup-table"><thead><tr><th>Form</th><th>Lemma</th><th>Tense / Person</th><th>Meaning</th></tr></thead><tbody>';
                phraseHits.forEach(r => {
                    html += `<tr>
                        <td class="lookup-word greek-text">${escapeHTML(r.form)}</td>
                        <td class="lookup-lemma greek-text">${escapeHTML(r.lemma)}</td>
                        <td class="lookup-meaning" style="color:var(--text-2);font-size:0.85rem">${escapeHTML(r.info)}</td>
                        <td class="lookup-meaning">${escapeHTML(r.meaning)}</td>
                    </tr>`;
                });
                html += "</tbody></table>";

                // Also look up remaining words (nouns, names, prepositions, etc.)
                const verbBases = new Set(phraseHits.map(r => tlBase(r.lemma)));
                const extraSeen = new Set([...verbBases]);
                const extras = [];
                const addExtra = (lemma, meaning) => {
                    const base = tlBase(lemma);
                    if (!extraSeen.has(base)) { extraSeen.add(base); extras.push({ lemma, meaning }); }
                };
                for (const raw of words) {
                    const tok = tlStrip(raw).toLowerCase();
                    if (EN_PERSON[tok] !== undefined) continue;   // skip subject pronouns (you, I, he…)
                    if (usedVerbToken && tok === usedVerbToken) continue; // skip the main verb token
                    lookupEnglishWord(raw).forEach(h => addExtra(h.lemma, h.meaning));
                }
                if (extras.length > 0) {
                    html += '<table class="lookup-table" style="margin-top:6px"><tbody>';
                    extras.forEach(r => {
                        html += `<tr>
                            <td class="lookup-word greek-text">${escapeHTML(r.lemma)}</td>
                            <td class="lookup-meaning">${escapeHTML(r.meaning)}</td>
                        </tr>`;
                    });
                    html += "</tbody></table>";
                }
                out.innerHTML = html;
            } else {
                // Fall back to word-by-word lookup with deduplication
                const seen = new Set();
                const results = [];
                const add = (lemma, meaning) => {
                    const base = tlBase(lemma);
                    if (!seen.has(base)) { seen.add(base); results.push({ lemma, meaning }); }
                };
                // Include phrase hits that found lemmas (no person detected)
                phraseHits.forEach(r => add(r.lemma, r.meaning));
                // Also search word-by-word
                for (const raw of words) lookupEnglishWord(raw).forEach(h => add(h.lemma, h.meaning));

                if (results.length === 0) {
                    out.innerHTML = '<p class="translate-placeholder">No matches found in your vocabulary.</p>';
                    return;
                }
                let html = '<table class="lookup-table"><thead><tr><th>Greek</th><th>Meaning</th></tr></thead><tbody>';
                results.forEach(r => {
                    html += `<tr>
                        <td class="lookup-word greek-text">${escapeHTML(r.lemma)}</td>
                        <td class="lookup-meaning">${escapeHTML(r.meaning)}</td>
                    </tr>`;
                });
                html += "</tbody></table>";
                out.innerHTML = html;
            }
        }
    }

    // UTILITIES
    // ============================================================
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    function escapeHTML(str) {
        const d = document.createElement("div");
        d.textContent = str;
        return d.innerHTML;
    }
    function escapeAttr(str) {
        return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    init();
})();
