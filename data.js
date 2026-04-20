// ============================================================
// Koine Greek Study Data — populated from user's coursework
// ============================================================

const CATEGORIES = {
    vocabulary: {
        name: "Vocabulary",
        icon: "📖",
        cards: [
            { term: "ἄγγελος", definition: "angel, messenger", notes: "" },
            { term: "ἀμήν", definition: "amen", notes: "" },
            { term: "ἄνθρωπος", definition: "man, mankind", notes: "" },
            { term: "ἀπόστολος", definition: "apostle", notes: "" },
            { term: "Γαλιλαία", definition: "Galilee", notes: "proper noun" },
            { term: "γραφή", definition: "writing", notes: "" },
            { term: "δόξα", definition: "glory, majesty, fame", notes: "" },
            { term: "ἐγώ", definition: "I", notes: "pronoun" },
            { term: "ἔσχατος", definition: "last", notes: "" },
            { term: "ζωή", definition: "life", notes: "" },
            { term: "θεός", definition: "God", notes: "" },
            { term: "καί", definition: "and, even, also, namely", notes: "conjunction" },
            { term: "καρδία", definition: "heart, inner self", notes: "" },
            { term: "κόσμος", definition: "world, universe, mankind", notes: "" },
            { term: "λόγος", definition: "word, Word, statement, message", notes: "" },
            { term: "πνεῦμα", definition: "spirit, Spirit, wind, breath, inner self", notes: "3rd decl. neuter" },
            { term: "προφήτης", definition: "prophet", notes: "" },
            { term: "σάββατον", definition: "sabbath", notes: "" },
            { term: "φωνή", definition: "sound, noise, voice", notes: "" },
            { term: "Χριστός", definition: "Christ, Messiah, Anointed One", notes: "" },
            { term: "ἀγάπη", definition: "love", notes: "" },
            { term: "ἄλλος", definition: "other, another", notes: "" },
            { term: "αὐτός", definition: "he, she, it; him/herself; same", notes: "pronoun" },
            { term: "βασιλεία", definition: "kingdom", notes: "" },
            { term: "δέ", definition: "but, and", notes: "conjunction/particle (postpositive)" },
            { term: "ἐν", definition: "in, on, among", notes: "preposition + dative" },
            { term: "ἔργον", definition: "work, deed, action", notes: "" },
            { term: "καιρός", definition: "(appointed) time, season", notes: "" },
            { term: "νῦν", definition: "now (adv); the present (noun)", notes: "" },
            { term: "ὁ, ἡ, τό", definition: "the", notes: "definite article" },
            { term: "ὅτι", definition: "that, since, because", notes: "conjunction" },
            { term: "οὐ", definition: "not", notes: "negation" },
            { term: "ὥρα", definition: "hour, occasion, moment", notes: "" },
            { term: "ἁμαρτία", definition: "sin", notes: "" },
            { term: "ἀρχή", definition: "beginning; ruler", notes: "" },
            { term: "γάρ", definition: "for; then", notes: "conjunction (postpositive)" },
            { term: "εἶπεν", definition: "he/she/it said", notes: "verb form (aorist of λέγω)" },
            { term: "εἰς", definition: "into; in", notes: "preposition + accusative" },
            { term: "ἐξουσία", definition: "authority, power", notes: "" },
            { term: "εὐαγγέλιον", definition: "good news, Gospel", notes: "" },
            { term: "Ἰησοῦς", definition: "Jesus, Joshua", notes: "proper noun" },
            { term: "κύριος", definition: "Lord; lord, master, sir", notes: "" },
            { term: "μή", definition: "not, lest", notes: "negation (w/ non-indicative)" },
            { term: "οὐρανός", definition: "heaven; sky", notes: "" },
            { term: "οὗτος, αὕτη, τοῦτο", definition: "this (one); these", notes: "demonstrative pronoun" },
            { term: "σύ", definition: "you (singular)", notes: "pronoun" },
            { term: "υἱός", definition: "son; descendant", notes: "" },
            { term: "ὥστε", definition: "therefore, so that", notes: "conjunction" },
            { term: "ἀλλά", definition: "but, yet; rather", notes: "conjunction" },
            { term: "ἀπό", definition: "(away) from", notes: "preposition + genitive" },
            { term: "διά", definition: "through (gen); on account of (acc)", notes: "preposition" },
            { term: "εἰμί", definition: "I am, exist, live, am present", notes: "verb" },
            { term: "ἐκ (ἐξ)", definition: "from, out of", notes: "preposition + genitive" },
            { term: "ἡμέρα", definition: "day", notes: "" },
            { term: "ἦν", definition: "he/she/it was", notes: "imperfect of εἰμί" },
            { term: "θάλασσα", definition: "sea, lake", notes: "" },
            { term: "θάνατος", definition: "death", notes: "" },
            { term: "ἵνα", definition: "in order that; that; so that", notes: "conjunction (+ subjunctive)" },
            { term: "Ἰωάννης", definition: "John", notes: "proper noun" },
            { term: "λέγω", definition: "I say, speak", notes: "verb" },
            { term: "μετά", definition: "with (gen); after (acc)", notes: "preposition" },
            { term: "οἰκία", definition: "house, home", notes: "" },
            { term: "οἶκος", definition: "house, home", notes: "" },
            { term: "ὄχλος", definition: "crowd, multitude", notes: "" },
            { term: "παρὰ (παρ')", definition: "from (gen); beside, in presence of (dat); alongside of (acc)", notes: "preposition; three-case" },
            { term: "παραβολή", definition: "parable", notes: "" },
            { term: "πρός", definition: "to, towards; with", notes: "preposition + accusative" },
            { term: "ὑπό", definition: "by (gen); under (acc)", notes: "preposition" },
            { term: "ἀγαθός", definition: "good, useful", notes: "adjective" },
            { term: "ἀγαπητός", definition: "beloved", notes: "adjective" },
            { term: "ἅγιος", definition: "holy (adj); saints (pl. noun)", notes: "" },
            { term: "αἰώνιος", definition: "eternal", notes: "adjective (2-2 pattern)" },
            { term: "ἀλλήλων", definition: "one another", notes: "reciprocal pronoun" },
            { term: "ἀπεκρίθη", definition: "he/she/it answered", notes: "aorist of ἀποκρίνομαι" },
            { term: "δοῦλος", definition: "slave; servant", notes: "" },
            { term: "ἐάν", definition: "if; when", notes: "conjunction (+ subjunctive)" },
            { term: "ἐμός, ἐμή, ἐμόν", definition: "my, mine", notes: "possessive pronoun" },
            { term: "ἐντολή", definition: "commandment", notes: "" },
            { term: "καθώς", definition: "as, even as", notes: "conjunction" },
            { term: "κακός", definition: "bad, evil", notes: "adjective" },
            { term: "νεκρός", definition: "dead (adj); dead body, corpse (noun)", notes: "" },
            { term: "πιστός", definition: "faithful, believing", notes: "adjective" },
            { term: "πονηρός", definition: "evil, bad", notes: "adjective" },
            { term: "πρῶτος", definition: "first; earlier", notes: "" },
            { term: "τρίτος", definition: "third", notes: "" },
            { term: "εἰ", definition: "if", notes: "conjunction (+ indicative)" },
            { term: "εἰ μή", definition: "except; if not", notes: "" },
            { term: "εἷς, μία, ἕν", definition: "one", notes: "numeral" },
            { term: "ἤδη", definition: "now, already", notes: "adverb" },
            { term: "ὄνομα, -ατος, τό", definition: "name; reputation", notes: "3rd decl. neuter" },
            { term: "οὐδείς, οὐδεμία, οὐδέν", definition: "no one, none, nothing", notes: "" },
            { term: "πᾶς, πᾶσα, πᾶν", definition: "each, every (sing); all (pl)", notes: "" },
            { term: "περί", definition: "concerning, about (gen); around (acc)", notes: "preposition" },
            { term: "σάρξ, σαρκός, ἡ", definition: "flesh; body", notes: "3rd decl. feminine" },
            { term: "σύν", definition: "with", notes: "preposition + dative" },
            { term: "σῶμα, -ατος, τό", definition: "body", notes: "3rd decl. neuter" },
            { term: "τέκνον", definition: "child; descendant", notes: "neuter" },
            { term: "τίς, τί", definition: "Who? What? Which? Why?", notes: "interrogative pronoun" },
            { term: "τις, τι", definition: "someone/thing; certain one; anyone", notes: "indefinite pronoun" },
            { term: "Σίμων, -ωνος, ὁ", definition: "Simon", notes: "proper noun, 3rd decl." },
            { term: "ἀδελφός", definition: "brother", notes: "" },
            { term: "ἄν", definition: "\"-ever\"", notes: "particle" },
            { term: "ἀνήρ, ἀνδρός, ὁ", definition: "male; husband; man", notes: "3rd declension" },
            { term: "ἐκκλησία", definition: "a church; (the) Church; assembly", notes: "" },
            { term: "ἐλπίς, -ίδος, ἡ", definition: "hope, expectation", notes: "3rd declension" },
            { term: "ἔξω", definition: "without (adv); outside (prep + gen)", notes: "" },
            { term: "ἐπί", definition: "on, over (gen); on the basis of (dat); on, to, against (acc)", notes: "preposition" },
            { term: "ἡμεῖς", definition: "we", notes: "pronoun" },
            { term: "θέλημα, -ατος, τό", definition: "will, desire", notes: "3rd decl. neuter" },
            { term: "ἴδε", definition: "See! Behold!", notes: "interjection" },
            { term: "ἰδού", definition: "See! Behold!", notes: "interjection" },
            { term: "καλός, -ή, -όν", definition: "good; beautiful", notes: "adjective" },
            { term: "μήτηρ, μητρός, ἡ", definition: "mother", notes: "3rd declension" },
            { term: "οὐδέ", definition: "and not, not even; neither, nor", notes: "conjunction" },
            { term: "πατήρ, πατρός, ὁ", definition: "father", notes: "3rd declension" },
            { term: "πίστις, πίστεως, ἡ", definition: "faith, belief; trust", notes: "3rd declension" },
            { term: "ὕδωρ, ὕδατος, τό", definition: "water", notes: "3rd decl. neuter" },
            { term: "ὑμεῖς", definition: "you (plural)", notes: "pronoun" },
            { term: "φῶς, φωτός, τό", definition: "light", notes: "3rd decl. neuter" },
            { term: "χάρις, χάριτος, ἡ", definition: "grace, favor, kindness", notes: "3rd declension" },
            { term: "ὧδε", definition: "here", notes: "adverb" },
            { term: "αἰών, αἰῶνος, ὁ", definition: "age, eternity", notes: "" },
            { term: "διδάσκαλος", definition: "teacher", notes: "" },
            { term: "εὐθύς", definition: "immediately", notes: "adverb" },
            { term: "ἕως", definition: "until (conj); as far as (prep + gen)", notes: "" },
            { term: "μαθητής", definition: "disciple", notes: "" },
            { term: "μέν", definition: "on the one hand; indeed", notes: "particle (postpositive)" },
            { term: "μηδείς, μηδεμία, μηδέν", definition: "no one/thing", notes: "" },
            { term: "μόνος, -η, -ον", definition: "alone, only", notes: "" },
            { term: "ὅπως", definition: "how; (in order) that", notes: "conjunction" },
            { term: "ὅσος, -η, -ον", definition: "as great as, as many as", notes: "" },
            { term: "οὖν", definition: "therefore, accordingly; then", notes: "conjunction (postpositive)" },
            { term: "ὀφθαλμός", definition: "eye, sight", notes: "" },
            { term: "πάλιν", definition: "again", notes: "adverb" },
            { term: "πούς, ποδός, ὁ", definition: "foot", notes: "3rd declension" },
            { term: "ὑπέρ", definition: "in behalf of (gen); above (acc)", notes: "preposition" },
            { term: "γυνή, γυναικός, ἡ", definition: "woman; wife", notes: "3rd declension" },
            { term: "δικαιοσύνη", definition: "righteousness", notes: "" },
            { term: "δώδεκα", definition: "twelve", notes: "numeral (indeclinable)" },
            { term: "ἑαυτοῦ, -ῆς, -οῦ", definition: "himself/herself/itself; themselves", notes: "reflexive pronoun" },
            { term: "ἐκεῖνος, -η, -ο", definition: "that (sing); those (pl)", notes: "demonstrative pronoun" },
            { term: "ἤ", definition: "or; than", notes: "conjunction" },
            { term: "κἀγώ", definition: "and I; but I", notes: "crasis of καί + ἐγώ" },
            { term: "μακάριος, -ία, -ιον", definition: "blessed, happy", notes: "adjective" },
            { term: "μέγας, μεγάλη, μέγα", definition: "large; great", notes: "" },
            { term: "πόλις, -εως, ἡ", definition: "city, town", notes: "3rd declension" },
            { term: "πολύς, πολλή, πολύ", definition: "much (sing); many (pl); often (adv)", notes: "" },
            { term: "πῶς", definition: "how?", notes: "interrogative adverb" },
            { term: "σημεῖον", definition: "sign, miracle", notes: "" },
            { term: "ἀλήθεια", definition: "truth", notes: "" },
            { term: "εἰρήνη", definition: "peace", notes: "" },
            { term: "ἐνώπιον", definition: "before", notes: "preposition + genitive" },
            { term: "ἐπαγγελία", definition: "promise", notes: "" },
            { term: "ἑπτά", definition: "seven", notes: "numeral (indeclinable)" },
            { term: "θρόνος", definition: "throne", notes: "" },
            { term: "Ἰερουσαλήμ", definition: "Jerusalem", notes: "proper noun (indeclinable)" },
            { term: "κατά", definition: "down from, against (gen); according to, throughout (acc)", notes: "preposition" },
            { term: "κεφαλή", definition: "head", notes: "" },
            { term: "ὁδός", definition: "way, road; journey, conduct", notes: "" },
            { term: "ὅς, ἥ, ὅ", definition: "who (whom), which", notes: "relative pronoun" },
            { term: "ὅτε", definition: "when", notes: "conjunction" },
            { term: "οὕτως", definition: "thus, so; in this manner", notes: "adverb" },
            { term: "πλοῖον", definition: "ship, boat", notes: "" },
            { term: "ῥῆμα, -ατος, τό", definition: "word, saying", notes: "3rd decl. neuter" },
            { term: "τέ", definition: "and (so), so", notes: "conjunction/particle" },
            { term: "χείρ, χειρός, ἡ", definition: "hand", notes: "3rd declension" },
            { term: "ψυχή", definition: "life; soul; self", notes: "" },
            { term: "ἀκούω", definition: "I hear; learn, obey; understand", notes: "verb" },
            { term: "βλέπω", definition: "I see, look at", notes: "verb" },
            { term: "ἔχω", definition: "I have, hold", notes: "verb" },
            { term: "λύω", definition: "I loose, untie, destroy", notes: "verb (paradigm verb)" },
            { term: "νόμος", definition: "law; principle", notes: "" },
            { term: "ὅπου", definition: "where", notes: "adverb" },
            { term: "πιστεύω", definition: "I believe, have faith (in), trust", notes: "verb" },
            { term: "πρόσωπον", definition: "face; appearance", notes: "" },
            { term: "τότε", definition: "then; thereafter", notes: "adverb" },
            { term: "τυφλός, -ή, -όν", definition: "blind", notes: "adjective" },
            { term: "χαρά", definition: "joy, delight", notes: "" },
            { term: "ἀγαπάω", definition: "I love, cherish", notes: "contract verb (alpha)" },
            { term: "δαιμόνιον", definition: "demon", notes: "" },
            { term: "ζητέω", definition: "I seek, desire, try to obtain", notes: "contract verb (epsilon)" },
            { term: "καλέω", definition: "I call, name, invite", notes: "contract verb (epsilon)" },
            { term: "λαλέω", definition: "I speak, say", notes: "contract verb (epsilon)" },
            { term: "οἶδα", definition: "I know, understand", notes: "defective verb (perf. w/ pres. meaning)" },
            { term: "ὅταν", definition: "whenever", notes: "conjunction" },
            { term: "πλείων, πλεῖον", definition: "larger, more", notes: "comparative" },
            { term: "πληρόω", definition: "I fill, complete, fulfill", notes: "contract verb (omicron)" },
            { term: "ποιέω", definition: "I do, make", notes: "contract verb (epsilon)" },
            { term: "τηρέω", definition: "I keep, guard, observe", notes: "contract verb (epsilon)" },
            { term: "ἀποκρίνομαι", definition: "I answer", notes: "deponent verb" },
            { term: "δεῖ", definition: "it is necessary", notes: "impersonal verb" },
            { term: "δύναμαι", definition: "I am able, am powerful", notes: "deponent verb" },
            { term: "ἔρχομαι", definition: "I come, go", notes: "deponent verb" },
            { term: "νύξ, νυκτός, ἡ", definition: "night", notes: "3rd declension" },
            { term: "ὅστις, ἥτις, ὅτι", definition: "whoever, whichever, whatever", notes: "indefinite relative pronoun" },
            { term: "πορεύομαι", definition: "I go, proceed; live", notes: "deponent verb" },
            { term: "συνάγω", definition: "I gather together, bring together", notes: "verb" },
            { term: "τόπος", definition: "place; location", notes: "" },
            { term: "ὡς", definition: "as, like; that; approximately; when", notes: "conjunction/adverb" },
            { term: "βασιλεύς, -έως, ὁ", definition: "king", notes: "3rd declension" },
            { term: "γεννάω", definition: "I beget, give birth to; produce", notes: "contract verb (alpha)" },
            { term: "ζάω", definition: "I live", notes: "contract verb (alpha)" },
            { term: "Ἰουδαία", definition: "Judea", notes: "proper noun" },
            { term: "Ἰουδαῖος, -αία, -αῖον", definition: "Jewish (adj); Jew (noun)", notes: "" },
            { term: "Ἰσραήλ", definition: "Israel", notes: "proper noun" },
            { term: "καρπός", definition: "fruit; crop; result", notes: "" },
            { term: "μείζων", definition: "greater", notes: "comparative" },
            { term: "ὅλος, -η, -ον", definition: "whole, complete (adj); entirely (adv)", notes: "" },
            { term: "προσκυνέω", definition: "I worship", notes: "contract verb (epsilon)" },
            { term: "αἴρω", definition: "I raise, take up, take away", notes: "liquid verb" },
            { term: "ἀποκτείνω", definition: "I kill", notes: "liquid verb" },
            { term: "ἀποστέλλω", definition: "I send (away)", notes: "liquid verb" },
            { term: "βαπτίζω", definition: "I baptize; dip, immerse", notes: "verb" },
            { term: "γινώσκω", definition: "I know, come to know, realize, learn", notes: "verb (2nd aorist)" },
            { term: "γλῶσσα, -ης, ἡ", definition: "tongue, language", notes: "" },
            { term: "ἐγείρω", definition: "I raise up, wake", notes: "liquid verb" },
            { term: "ἐκβάλλω", definition: "I cast out, send out", notes: "liquid verb" },
            { term: "ἐκεῖ", definition: "there, in that place", notes: "adverb" },
            { term: "κρίνω", definition: "I judge, decide, prefer", notes: "liquid verb" },
            { term: "λαός", definition: "people, crowd", notes: "" },
            { term: "μένω", definition: "I remain, live", notes: "liquid verb" },
            { term: "ὁράω", definition: "I see, notice, experience", notes: "contract verb (suppletive)" },
            { term: "σοφία", definition: "wisdom", notes: "" },
            { term: "στόμα, -ατος, τό", definition: "mouth", notes: "3rd decl. neuter" },
            { term: "σῴζω", definition: "I save, deliver, rescue", notes: "verb" },
            { term: "ἀκολουθέω", definition: "I follow; accompany", notes: "contract verb (epsilon)" },
            { term: "διδάσκω", definition: "I teach", notes: "verb" },
            { term: "ἐπερωτάω", definition: "I ask (for)", notes: "contract verb (alpha)" },
            { term: "ἐρωτάω", definition: "I ask; request", notes: "contract verb (alpha)" },
            { term: "θέλω", definition: "I wish, desire; enjoy", notes: "verb" },
            { term: "περιπατέω", definition: "I walk (around); live", notes: "contract verb (epsilon)" },
            { term: "συναγωγή", definition: "synagogue; meeting", notes: "" },
            { term: "Φαρισαῖος", definition: "Pharisee", notes: "proper noun" },
            { term: "χρόνος", definition: "time", notes: "" },
            { term: "ἀποθνῄσκω", definition: "I die, am about to die", notes: "verb (2nd aorist)" },
            { term: "ἄρτος", definition: "bread, loaf, food", notes: "" },
            { term: "βάλλω", definition: "I throw", notes: "liquid verb" },
            { term: "γῆ, γῆς, ἡ", definition: "earth, land, region, humanity", notes: "" },
            { term: "γίνομαι", definition: "I become, take place; am, exist; am born", notes: "deponent verb" },
            { term: "εἰσέρχομαι", definition: "I come in(to); go in(to); enter", notes: "deponent verb" },
            { term: "ἐξέρχομαι", definition: "I go out", notes: "deponent verb" },
            { term: "ἔτι", definition: "still, yet, even", notes: "adverb" },
            { term: "εὑρίσκω", definition: "I find", notes: "verb (2nd aorist)" },
            { term: "λαμβάνω", definition: "I take; receive", notes: "verb (2nd aorist)" },
            { term: "οὔτε", definition: "and not, neither, nor", notes: "conjunction" },
            { term: "προσέρχομαι", definition: "I come/go to", notes: "deponent verb" },
            { term: "προσεύχομαι", definition: "I pray", notes: "deponent verb" },
            { term: "πῦρ, πυρός, τό", definition: "fire", notes: "3rd decl. neuter" },
            { term: "ἀπέρχομαι", definition: "I depart", notes: "deponent verb" },
            { term: "ἄρχομαι", definition: "I begin", notes: "deponent verb" },
            { term: "γράφω", definition: "I write", notes: "verb" },
            { term: "διό", definition: "therefore, for this reason", notes: "conjunction" },
            { term: "δοξάζω", definition: "I praise, honor, glorify", notes: "verb" },
            { term: "δύναμις", definition: "power; miracle", notes: "" },
            { term: "κηρύσσω", definition: "I proclaim; preach", notes: "verb" },
            { term: "πίνω", definition: "I drink", notes: "verb (2nd aorist)" },
            { term: "ἄγω", definition: "I lead, bring, arrest", notes: "verb" },
            { term: "αἷμα", definition: "blood", notes: "" },
            { term: "ἕκαστος", definition: "each, every", notes: "" },
            { term: "ἱμάτιον", definition: "garment, cloak", notes: "" },
            { term: "ὄρος", definition: "mountain, hill", notes: "" },
            { term: "ὑπάγω", definition: "I depart", notes: "verb" },
            { term: "φοβέομαι", definition: "I fear", notes: "deponent verb (epsilon)" },
            { term: "χαίρω", definition: "I rejoice", notes: "liquid verb" },
            { term: "αἰτέω", definition: "I ask; demand", notes: "contract verb (epsilon)" },
            { term: "μᾶλλον", definition: "more, rather", notes: "adverb" },
            { term: "μαρτυρέω", definition: "I bear witness, testify", notes: "contract verb (epsilon)" },
            { term: "ἀναβαίνω", definition: "I go up", notes: "compound verb" },
            { term: "ἀρχιερεύς, -έως, ὁ", definition: "chief priest, high priest", notes: "3rd declension" },
            { term: "δεξιός, -ά, -όν", definition: "right", notes: "adjective" },
            { term: "δύο", definition: "two", notes: "numeral (indeclinable)" },
            { term: "ἕτερος, -α, -ον", definition: "other; another, different", notes: "" },
            { term: "εὐαγγελίζω", definition: "I bring good news; preach", notes: "verb" },
            { term: "θεωρέω", definition: "I look at; perceive", notes: "contract verb (epsilon)" },
            { term: "Ἱεροσόλυμα", definition: "Jerusalem", notes: "proper noun (neuter plural)" },
            { term: "κάθημαι", definition: "I sit (down); live", notes: "deponent verb" },
            { term: "καταβαίνω", definition: "I go down; come down", notes: "compound verb" },
            { term: "οὗ", definition: "where", notes: "adverb" },
            { term: "παρακαλέω", definition: "I call to one's side; urge, implore; comfort", notes: "contract verb (epsilon)" },
            { term: "πείθω", definition: "I persuade", notes: "verb" },
            { term: "τρεῖς, τρία", definition: "three", notes: "numeral" },
            { term: "ἀσπάζομαι", definition: "I greet, salute", notes: "deponent verb" },
            { term: "γραμματεύς, -έως, ὁ", definition: "scribe", notes: "3rd declension" },
            { term: "ἔφη", definition: "he/she/it was saying; said", notes: "verb form" },
            { term: "ἱερόν, -οῦ, τό", definition: "temple", notes: "neuter" },
            { term: "κράζω", definition: "I cry out, call out", notes: "verb" },
            { term: "οὐχί", definition: "not", notes: "emphatic negation" },
            { term: "παιδίον, -ου, τό", definition: "child, infant", notes: "neuter" },
            { term: "σπείρω", definition: "I sow", notes: "liquid verb" },
            { term: "δέχομαι", definition: "I take, receive", notes: "deponent verb" },
            { term: "δοκέω", definition: "I think, seem", notes: "contract verb (epsilon)" },
            { term: "ἐσθίω", definition: "I eat", notes: "verb (suppletive)" },
            { term: "πέμπω", definition: "I send", notes: "verb" },
            { term: "φέρω", definition: "I carry, bear, produce", notes: "verb (suppletive)" },
            { term: "μηδέ", definition: "but not, nor, not even", notes: "conjunction" },
            { term: "πρεσβύτερος, -α, -ον", definition: "elder; older", notes: "" },
            { term: "λίθος", definition: "stone", notes: "" },
            { term: "τοιοῦτος, -αύτη, -οῦτον", definition: "such, of such a kind", notes: "" },
            { term: "δίκαιος, -αία, -αιον", definition: "right, just, righteous", notes: "adjective" },
            { term: "μέλλω", definition: "I am about to", notes: "verb (+ infinitive)" },
            { term: "ἀπολύω", definition: "I release", notes: "" },
            { term: "ἀπόλλυμι", definition: "I destroy, kill (act); I perish, die (mid)", notes: "μι verb" },
            { term: "εἴτε", definition: "if, whether", notes: "conjunction" },
            { term: "δίδωμι", definition: "I give; entrust", notes: "μι verb" },
            { term: "μου (ἐμοῦ)", definition: "my", notes: "genitive personal pronoun" },
            { term: "συνέρχομαι", definition: "I come together, assemble", notes: "deponent verb" },
            { term: "υἱοθετέω", definition: "I adopt", notes: "ε-contract verb" },
            { term: "φίλεω", definition: "I love", notes: "ε-contract verb" },
            { term: "φαίνω", definition: "I show, appear", notes: "verb" },
            { term: "φεύγω", definition: "I flee", notes: "verb" },
            { term: "φρονέω", definition: "I think, have an attitude", notes: "ε-contract verb" },
            { term: "φωνέω", definition: "I call, cry out", notes: "ε-contract verb" },
            { term: "ἵστημι", definition: "I stand, set, place", notes: "μι verb" },
            { term: "ὀνομάζω", definition: "I name, call", notes: "verb" },
            { term: "ὑποτάσσω", definition: "I submit, subject", notes: "verb" },
            { term: "ἔθνος, -ους, τό", definition: "nation; (pl.) Gentiles", notes: "" },
            { term: "λοιπός, -ή, -όν", definition: "remaining; rest; finally", notes: "adjective" },
            { term: "Μωϋσῆς, -έως, ὁ", definition: "Moses", notes: "proper noun" },
            { term: "παραδίδωμι", definition: "I hand over, betray", notes: "μι verb" },
            { term: "πίπτω", definition: "I fall", notes: "verb" },
            { term: "ὑπάρχω", definition: "I am, exist", notes: "verb" },
            // Additional vocabulary
            { term: "ἁγιάζω", definition: "I consecrate, sanctify", notes: "verb" },
            { term: "ἀμαρτάνω", definition: "I sin", notes: "verb" },
            { term: "ἀμαρτωλός, -όν", definition: "sinful (adj); sinner (noun)", notes: "" },
            { term: "ἀνάστασις, -εως, ἡ", definition: "resurrection", notes: "3rd declension" },
            { term: "ἀπαγγέλλω", definition: "I report; tell", notes: "verb" },
            { term: "διακονέω", definition: "I serve", notes: "ε-contract verb" },
            { term: "διακονία, -ας, ἡ", definition: "service", notes: "" },
            { term: "δικαιόω", definition: "I justify; vindicate", notes: "ο-contract verb" },
            { term: "θλῖψις, -εως, ἡ", definition: "affliction, tribulation", notes: "3rd declension" },
            { term: "ἱλαστήριον, -ου, τό", definition: "propitiation, expiation, place of atonement", notes: "" },
            { term: "σταυρόω", definition: "I crucify", notes: "ο-contract verb" },
            { term: "σωτήρ, -ῆρος, ὁ", definition: "savior; deliverer", notes: "3rd declension" },
            { term: "σωτηρία, -ας, ἡ", definition: "salvation; deliverance", notes: "" },
            { term: "φανερόω", definition: "I reveal, make known", notes: "ο-contract verb" },
            { term: "φόβος, -ου, ὁ", definition: "fear; reverence", notes: "" },
            { term: "ἁμαρτάνω", definition: "I sin", notes: "verb" },
            { term: "ἁμαρτωλός, -όν", definition: "adjective: sinful; noun: sinner", notes: "" },
            { term: "ἀνίστημι", definition: "intransitive: I rise, get up; transitive: I raise", notes: "μι verb" },
            { term: "ἀνοίγω", definition: "I open", notes: "verb" },
            { term: "ἀφίημι", definition: "I let go, leave, permit; forgive", notes: "μι verb" },
            { term: "δείκνυμι", definition: "I show, explain", notes: "μι verb" },
            { term: "ἴδιος, -ία, -ον", definition: "one's own", notes: "" },
            { term: "μέσος, -η, -ον", definition: "middle, in the midst", notes: "" },
            { term: "τίθημι", definition: "I put, place", notes: "μι verb" },
            { term: "φημί", definition: "I say, affirm", notes: "μι verb" },
        ]
    },

    nouns: {
        name: "Noun Paradigms",
        icon: "📝",
        cards: [
            // Article
            { term: "ὁ", definition: "the — Nom. Sing. Masc.", notes: "Article" },
            { term: "τοῦ", definition: "the — Gen. Sing. Masc./Neut.", notes: "Article" },
            { term: "τῷ", definition: "the — Dat. Sing. Masc./Neut.", notes: "Article" },
            { term: "τόν", definition: "the — Acc. Sing. Masc.", notes: "Article" },
            { term: "οἱ", definition: "the — Nom. Plur. Masc.", notes: "Article" },
            { term: "τῶν", definition: "the — Gen. Plur. (all genders)", notes: "Article" },
            { term: "τοῖς", definition: "the — Dat. Plur. Masc./Neut.", notes: "Article" },
            { term: "τούς", definition: "the — Acc. Plur. Masc.", notes: "Article" },
            { term: "ἡ", definition: "the — Nom. Sing. Fem.", notes: "Article" },
            { term: "τῆς", definition: "the — Gen. Sing. Fem.", notes: "Article" },
            { term: "τῇ", definition: "the — Dat. Sing. Fem.", notes: "Article" },
            { term: "τήν", definition: "the — Acc. Sing. Fem.", notes: "Article" },
            { term: "αἱ", definition: "the — Nom. Plur. Fem.", notes: "Article" },
            { term: "ταῖς", definition: "the — Dat. Plur. Fem.", notes: "Article" },
            { term: "τάς", definition: "the — Acc. Plur. Fem.", notes: "Article" },
            { term: "τό", definition: "the — Nom./Acc. Sing. Neut.", notes: "Article" },
            { term: "τά", definition: "the — Nom./Acc. Plur. Neut.", notes: "Article" },

            // 2nd Declension Masculine endings
            { term: "-ος", definition: "Nom. Sing. — 2nd Decl. Masc.", notes: "Case ending" },
            { term: "-ου", definition: "Gen. Sing. — 2nd Decl. Masc./Neut.", notes: "Case ending" },
            { term: "-ῳ", definition: "Dat. Sing. — 2nd Decl. Masc./Neut.", notes: "Case ending" },
            { term: "-ον", definition: "Acc. Sing. — 2nd Decl. Masc.; Nom./Acc. Sing. Neut.", notes: "Case ending" },
            { term: "-οι", definition: "Nom. Plur. — 2nd Decl. Masc.", notes: "Case ending" },
            { term: "-ων", definition: "Gen. Plur. — all declensions", notes: "Case ending" },
            { term: "-οις", definition: "Dat. Plur. — 2nd Decl. Masc./Neut.", notes: "Case ending" },
            { term: "-ους", definition: "Acc. Plur. — 2nd Decl. Masc.", notes: "Case ending" },

            // 1st Declension Feminine endings
            { term: "-η / -α", definition: "Nom. Sing. — 1st Decl. Fem.", notes: "Case ending" },
            { term: "-ης / -ας", definition: "Gen. Sing. — 1st Decl. Fem.", notes: "Case ending" },
            { term: "-ῃ / -ᾳ", definition: "Dat. Sing. — 1st Decl. Fem.", notes: "Case ending" },
            { term: "-ην / -αν", definition: "Acc. Sing. — 1st Decl. Fem.", notes: "Case ending" },
            { term: "-αι", definition: "Nom. Plur. — 1st Decl. Fem.", notes: "Case ending" },
            { term: "-αις", definition: "Dat. Plur. — 1st Decl. Fem.", notes: "Case ending" },
            { term: "-ας", definition: "Acc. Plur. — 1st Decl. Fem.", notes: "Case ending" },

            // 3rd Declension endings
            { term: "-ς / --", definition: "Nom. Sing. — 3rd Decl.", notes: "Case ending (masc/fem use -ς, neuter has no ending)" },
            { term: "-ος", definition: "Gen. Sing. — 3rd Decl.", notes: "Case ending" },
            { term: "-ι", definition: "Dat. Sing. — 3rd Decl.", notes: "Case ending" },
            { term: "-α / -ν", definition: "Acc. Sing. — 3rd Decl.", notes: "Case ending (masc/fem -α, neuter same as nom)" },
            { term: "-ες", definition: "Nom. Plur. — 3rd Decl. Masc./Fem.", notes: "Case ending" },
            { term: "-σι(ν)", definition: "Dat. Plur. — 3rd Decl.", notes: "Case ending" },

            // Square of Stops
            { term: "π, β, φ + σ = ψ", definition: "Labial stops + sigma", notes: "Square of Stops rule" },
            { term: "κ, γ, χ + σ = ξ", definition: "Velar stops + sigma", notes: "Square of Stops rule" },
            { term: "τ, δ, θ + σ = σ", definition: "Dental stops + sigma", notes: "Square of Stops rule" },
        ]
    },

    article: {
        name: "Article Paradigm",
        icon: "🔡",
        cards: [
            { term: "ὁ, ἡ, τό", definition: "the (definite article)", notes: "Article" },
            { term: "ὁ", definition: "the — Nom. Sg. Masc.", notes: "Article" },
            { term: "τοῦ", definition: "the — Gen. Sg. Masc./Neut.", notes: "Article" },
            { term: "τῷ", definition: "the — Dat. Sg. Masc./Neut.", notes: "Article" },
            { term: "τόν", definition: "the — Acc. Sg. Masc.", notes: "Article" },
            { term: "ἡ", definition: "the — Nom. Sg. Fem.", notes: "Article" },
            { term: "τῆς", definition: "the — Gen. Sg. Fem.", notes: "Article" },
            { term: "τῇ", definition: "the — Dat. Sg. Fem.", notes: "Article" },
            { term: "τήν", definition: "the — Acc. Sg. Fem.", notes: "Article" },
            { term: "τό", definition: "the — Nom./Acc. Sg. Neut.", notes: "Article" },
            { term: "τοῦ", definition: "the — Gen. Sg. Neut.", notes: "Article" },
            { term: "τῷ", definition: "the — Dat. Sg. Neut.", notes: "Article" },
            { term: "οἱ", definition: "the — Nom. Pl. Masc.", notes: "Article" },
            { term: "τῶν", definition: "the — Gen. Pl. (all genders)", notes: "Article" },
            { term: "τοῖς", definition: "the — Dat. Pl. Masc./Neut.", notes: "Article" },
            { term: "τούς", definition: "the — Acc. Pl. Masc.", notes: "Article" },
            { term: "αἱ", definition: "the — Nom. Pl. Fem.", notes: "Article" },
            { term: "ταῖς", definition: "the — Dat. Pl. Fem.", notes: "Article" },
            { term: "τάς", definition: "the — Acc. Pl. Fem.", notes: "Article" },
            { term: "τά", definition: "the — Nom./Acc. Pl. Neut.", notes: "Article" },
        ]
    },

    adjectives: {
        name: "Adjectives",
        icon: "🔤",
        cards: [
            // Key adjective vocabulary with paradigm info
            { term: "ἀγαθός, -ή, -όν", definition: "good, useful", notes: "2-1-2 pattern" },
            { term: "πιστός, -ή, -όν", definition: "faithful, believing", notes: "2-1-2 pattern" },
            { term: "κακός, -ή, -όν", definition: "bad, evil", notes: "2-1-2 pattern" },
            { term: "καλός, -ή, -όν", definition: "good; beautiful", notes: "2-1-2 pattern" },
            { term: "δίκαιος, -αία, -αιον", definition: "right, just, righteous", notes: "2-1-2 pattern" },
            { term: "ἅγιος, -α, -ον", definition: "holy, consecrated", notes: "2-1-2 pattern" },
            { term: "νεκρός, -ά, -όν", definition: "dead", notes: "2-1-2 pattern" },
            { term: "πονηρός, -ά, -όν", definition: "evil, wicked", notes: "2-1-2 pattern" },
            { term: "ἕτερος, -α, -ον", definition: "other, another, different", notes: "2-1-2 pattern" },
            { term: "αἰώνιος, -ον", definition: "eternal", notes: "2-2 pattern (same masc/fem form)" },
            { term: "μέγας, μεγάλη, μέγα", definition: "large; great", notes: "Irregular (3-1-3)" },
            { term: "πολύς, πολλή, πολύ", definition: "much; many", notes: "Irregular (3-1-3)" },
            { term: "πᾶς, πᾶσα, πᾶν", definition: "each, every (sing); all (pl)", notes: "3-1-3 pattern" },
            { term: "πλείων, πλεῖον", definition: "larger, more", notes: "Comparative" },
            { term: "μείζων", definition: "greater", notes: "Comparative of μέγας" },

            // Adjective usage rules
            { term: "Attributive Position", definition: "article + adjective + noun (or art + noun + art + adj)", notes: "Modifies the noun directly" },
            { term: "Predicate Position", definition: "adjective + article + noun (no article before adj)", notes: "Creates an 'is' statement" },
            { term: "Substantival Use", definition: "article + adjective (no noun)", notes: "Adjective stands in place of a noun" },
        ]
    },

    verbs: {
        name: "Verb Paradigms",
        icon: "⚡",
        cards: [
            // Present Active Indicative
            { term: "-ω", definition: "1st Sing. — Present Active Indicative", notes: "Primary active ending" },
            { term: "-εις", definition: "2nd Sing. — Present Active Indicative", notes: "Primary active ending" },
            { term: "-ει", definition: "3rd Sing. — Present Active Indicative", notes: "Primary active ending" },
            { term: "-ομεν", definition: "1st Plur. — Present Active Indicative", notes: "Primary active ending" },
            { term: "-ετε", definition: "2nd Plur. — Present Active Indicative", notes: "Primary active ending" },
            { term: "-ουσι(ν)", definition: "3rd Plur. — Present Active Indicative", notes: "Primary active ending" },

            // Present Middle/Passive Indicative
            { term: "-ομαι", definition: "1st Sing. — Present Mid/Pass Indicative", notes: "Primary mid/pass ending" },
            { term: "-ῃ", definition: "2nd Sing. — Present Mid/Pass Indicative", notes: "Primary mid/pass ending" },
            { term: "-εται", definition: "3rd Sing. — Present Mid/Pass Indicative", notes: "Primary mid/pass ending" },
            { term: "-ομεθα", definition: "1st Plur. — Present Mid/Pass Indicative", notes: "Primary mid/pass ending" },
            { term: "-εσθε", definition: "2nd Plur. — Present Mid/Pass Indicative", notes: "Primary mid/pass ending" },
            { term: "-ονται", definition: "3rd Plur. — Present Mid/Pass Indicative", notes: "Primary mid/pass ending" },

            // εἰμί Present
            { term: "εἰμί", definition: "I am — 1st Sing. Pres. Act. Ind.", notes: "εἰμί conjugation" },
            { term: "εἶ", definition: "you are — 2nd Sing. Pres. Act. Ind.", notes: "εἰμί conjugation" },
            { term: "ἐστίν", definition: "he/she/it is — 3rd Sing. Pres. Act. Ind.", notes: "εἰμί conjugation" },
            { term: "ἐσμέν", definition: "we are — 1st Plur. Pres. Act. Ind.", notes: "εἰμί conjugation" },
            { term: "ἐστέ", definition: "you are — 2nd Plur. Pres. Act. Ind.", notes: "εἰμί conjugation" },
            { term: "εἰσίν", definition: "they are — 3rd Plur. Pres. Act. Ind.", notes: "εἰμί conjugation" },

            // Future Active Indicative
            { term: "-σω", definition: "1st Sing. — Future Active Indicative", notes: "Stem + σ + primary endings" },
            { term: "-σεις", definition: "2nd Sing. — Future Active Indicative", notes: "Future active" },
            { term: "-σει", definition: "3rd Sing. — Future Active Indicative", notes: "Future active" },
            { term: "-σομεν", definition: "1st Plur. — Future Active Indicative", notes: "Future active" },
            { term: "-σετε", definition: "2nd Plur. — Future Active Indicative", notes: "Future active" },
            { term: "-σουσι(ν)", definition: "3rd Plur. — Future Active Indicative", notes: "Future active" },

            // Future Middle Indicative
            { term: "-σομαι", definition: "1st Sing. — Future Middle Indicative", notes: "Future middle" },
            { term: "-σῃ", definition: "2nd Sing. — Future Middle Indicative", notes: "Future middle" },
            { term: "-σεται", definition: "3rd Sing. — Future Middle Indicative", notes: "Future middle" },
            { term: "-σομεθα", definition: "1st Plur. — Future Middle Indicative", notes: "Future middle" },
            { term: "-σεσθε", definition: "2nd Plur. — Future Middle Indicative", notes: "Future middle" },
            { term: "-σονται", definition: "3rd Plur. — Future Middle Indicative", notes: "Future middle" },

            // εἰμί Future
            { term: "ἔσομαι", definition: "I will be — 1st Sing. Fut.", notes: "εἰμί future" },
            { term: "ἔσῃ", definition: "you will be — 2nd Sing. Fut.", notes: "εἰμί future" },
            { term: "ἔσται", definition: "he/she/it will be — 3rd Sing. Fut.", notes: "εἰμί future" },
            { term: "ἐσόμεθα", definition: "we will be — 1st Plur. Fut.", notes: "εἰμί future" },
            { term: "ἔσεσθε", definition: "you will be — 2nd Plur. Fut.", notes: "εἰμί future" },
            { term: "ἔσονται", definition: "they will be — 3rd Plur. Fut.", notes: "εἰμί future" },

            // Liquid Future Active
            { term: "-ῶ", definition: "1st Sing. — Future Liquid Active Indicative", notes: "Liquid verbs (λ, μ, ν, ρ stems)" },
            { term: "-εῖς", definition: "2nd Sing. — Future Liquid Active Indicative", notes: "Liquid future" },
            { term: "-εῖ", definition: "3rd Sing. — Future Liquid Active Indicative", notes: "Liquid future" },
            { term: "-οῦμεν", definition: "1st Plur. — Future Liquid Active Indicative", notes: "Liquid future" },
            { term: "-εῖτε", definition: "2nd Plur. — Future Liquid Active Indicative", notes: "Liquid future" },
            { term: "-οῦσι(ν)", definition: "3rd Plur. — Future Liquid Active Indicative", notes: "Liquid future" },

            // Imperfect Active Indicative (secondary)
            { term: "ε-__-ον", definition: "1st Sing. — Imperfect Active Indicative", notes: "Augment + stem + secondary endings" },
            { term: "ε-__-ες", definition: "2nd Sing. — Imperfect Active Indicative", notes: "Secondary active" },
            { term: "ε-__-ε(ν)", definition: "3rd Sing. — Imperfect Active Indicative", notes: "Secondary active" },
            { term: "ε-__-ομεν", definition: "1st Plur. — Imperfect Active Indicative", notes: "Secondary active" },
            { term: "ε-__-ετε", definition: "2nd Plur. — Imperfect Active Indicative", notes: "Secondary active" },
            { term: "ε-__-ον", definition: "3rd Plur. — Imperfect Active Indicative", notes: "Same as 1st sing." },

            // Imperfect Middle/Passive
            { term: "ε-__-ομην", definition: "1st Sing. — Imperfect Mid/Pass Indicative", notes: "Secondary mid/pass" },
            { term: "ε-__-ου", definition: "2nd Sing. — Imperfect Mid/Pass Indicative", notes: "Secondary mid/pass" },
            { term: "ε-__-ετο", definition: "3rd Sing. — Imperfect Mid/Pass Indicative", notes: "Secondary mid/pass" },
            { term: "ε-__-ομεθα", definition: "1st Plur. — Imperfect Mid/Pass Indicative", notes: "Secondary mid/pass" },
            { term: "ε-__-εσθε", definition: "2nd Plur. — Imperfect Mid/Pass Indicative", notes: "Secondary mid/pass" },
            { term: "ε-__-οντο", definition: "3rd Plur. — Imperfect Mid/Pass Indicative", notes: "Secondary mid/pass" },

            // εἰμί Imperfect
            { term: "ἤμην", definition: "I was — 1st Sing. Impf.", notes: "εἰμί imperfect" },
            { term: "ἦς", definition: "you were — 2nd Sing. Impf.", notes: "εἰμί imperfect" },
            { term: "ἦν", definition: "he/she/it was — 3rd Sing. Impf.", notes: "εἰμί imperfect" },
            { term: "ἦμεν / ἤμεθα", definition: "we were — 1st Plur. Impf.", notes: "εἰμί imperfect" },
            { term: "ἦτε", definition: "you were — 2nd Plur. Impf.", notes: "εἰμί imperfect" },
            { term: "ἦσαν", definition: "they were — 3rd Plur. Impf.", notes: "εἰμί imperfect" },

            // First Aorist Active
            { term: "ε-__-σα", definition: "1st Sing. — 1st Aorist Active Indicative", notes: "Augment + stem + σα" },
            { term: "ε-__-σας", definition: "2nd Sing. — 1st Aorist Active Indicative", notes: "1st aorist" },
            { term: "ε-__-σε(ν)", definition: "3rd Sing. — 1st Aorist Active Indicative", notes: "1st aorist" },
            { term: "ε-__-σαμεν", definition: "1st Plur. — 1st Aorist Active Indicative", notes: "1st aorist" },
            { term: "ε-__-σατε", definition: "2nd Plur. — 1st Aorist Active Indicative", notes: "1st aorist" },
            { term: "ε-__-σαν", definition: "3rd Plur. — 1st Aorist Active Indicative", notes: "1st aorist" },

            // First Aorist Middle
            { term: "ε-__-σαμην", definition: "1st Sing. — 1st Aorist Middle Indicative", notes: "1st aorist middle" },
            { term: "ε-__-σω", definition: "2nd Sing. — 1st Aorist Middle Indicative", notes: "1st aorist middle" },
            { term: "ε-__-σατο", definition: "3rd Sing. — 1st Aorist Middle Indicative", notes: "1st aorist middle" },
            { term: "ε-__-σαμεθα", definition: "1st Plur. — 1st Aorist Middle Indicative", notes: "1st aorist middle" },
            { term: "ε-__-σασθε", definition: "2nd Plur. — 1st Aorist Middle Indicative", notes: "1st aorist middle" },
            { term: "ε-__-σαντο", definition: "3rd Plur. — 1st Aorist Middle Indicative", notes: "1st aorist middle" },

            // First Aorist Passive
            { term: "ε-__-θην", definition: "1st Sing. — 1st Aorist Passive Indicative", notes: "1st aorist passive" },
            { term: "ε-__-θης", definition: "2nd Sing. — 1st Aorist Passive Indicative", notes: "1st aorist passive" },
            { term: "ε-__-θη", definition: "3rd Sing. — 1st Aorist Passive Indicative", notes: "1st aorist passive" },
            { term: "ε-__-θημεν", definition: "1st Plur. — 1st Aorist Passive Indicative", notes: "1st aorist passive" },
            { term: "ε-__-θητε", definition: "2nd Plur. — 1st Aorist Passive Indicative", notes: "1st aorist passive" },
            { term: "ε-__-θησαν", definition: "3rd Plur. — 1st Aorist Passive Indicative", notes: "1st aorist passive" },

            // Perfect Active
            { term: "redup.-__-κα", definition: "1st Sing. — Perfect Active Indicative", notes: "Reduplication + stem + κα" },
            { term: "redup.-__-κας", definition: "2nd Sing. — Perfect Active Indicative", notes: "Perfect active" },
            { term: "redup.-__-κε(ν)", definition: "3rd Sing. — Perfect Active Indicative", notes: "Perfect active" },
            { term: "redup.-__-καμεν", definition: "1st Plur. — Perfect Active Indicative", notes: "Perfect active" },
            { term: "redup.-__-κατε", definition: "2nd Plur. — Perfect Active Indicative", notes: "Perfect active" },
            { term: "redup.-__-κασι(ν)", definition: "3rd Plur. — Perfect Active Indicative", notes: "Perfect active" },

            // Perfect Mid/Pass
            { term: "redup.-__-μαι", definition: "1st Sing. — Perfect Mid/Pass Indicative", notes: "Perfect mid/pass" },
            { term: "redup.-__-σαι", definition: "2nd Sing. — Perfect Mid/Pass Indicative", notes: "Perfect mid/pass" },
            { term: "redup.-__-ται", definition: "3rd Sing. — Perfect Mid/Pass Indicative", notes: "Perfect mid/pass" },
            { term: "redup.-__-μεθα", definition: "1st Plur. — Perfect Mid/Pass Indicative", notes: "Perfect mid/pass" },
            { term: "redup.-__-σθε", definition: "2nd Plur. — Perfect Mid/Pass Indicative", notes: "Perfect mid/pass" },
            { term: "redup.-__-νται", definition: "3rd Plur. — Perfect Mid/Pass Indicative", notes: "Perfect mid/pass" },

            // Subjunctive Active
            { term: "-ω (subj)", definition: "1st Sing. — Present/Aorist Active Subjunctive", notes: "Lengthened connecting vowel" },
            { term: "-ῃς (subj)", definition: "2nd Sing. — Present/Aorist Active Subjunctive", notes: "Subjunctive" },
            { term: "-ῃ (subj)", definition: "3rd Sing. — Present/Aorist Active Subjunctive", notes: "Subjunctive" },
            { term: "-ωμεν (subj)", definition: "1st Plur. — Present/Aorist Active Subjunctive", notes: "Subjunctive" },
            { term: "-ητε (subj)", definition: "2nd Plur. — Present/Aorist Active Subjunctive", notes: "Subjunctive" },
            { term: "-ωσι(ν) (subj)", definition: "3rd Plur. — Present/Aorist Active Subjunctive", notes: "Subjunctive" },

            // εἰμί Subjunctive
            { term: "ὦ", definition: "(that) I may be — 1st Sing. Subj.", notes: "εἰμί subjunctive" },
            { term: "ᾖς", definition: "(that) you may be — 2nd Sing. Subj.", notes: "εἰμί subjunctive" },
            { term: "ᾖ", definition: "(that) he/she/it may be — 3rd Sing. Subj.", notes: "εἰμί subjunctive" },
            { term: "ὦμεν", definition: "(that) we may be — 1st Plur. Subj.", notes: "εἰμί subjunctive" },
            { term: "ὦσι(ν)", definition: "(that) they may be — 3rd Plur. Subj.", notes: "εἰμί subjunctive" },

            // Infinitives
            { term: "-ειν", definition: "Present Active Infinitive ending", notes: "Infinitive" },
            { term: "-εσθαι", definition: "Present Mid/Pass Infinitive ending", notes: "Infinitive" },
            { term: "-σαι", definition: "1st Aorist Active Infinitive ending", notes: "Infinitive" },
            { term: "-σασθαι", definition: "1st Aorist Middle Infinitive ending", notes: "Infinitive" },
            { term: "-θηναι", definition: "1st Aorist Passive Infinitive ending", notes: "Infinitive" },
            { term: "-κεναι", definition: "Perfect Active Infinitive ending", notes: "Infinitive" },
            { term: "εἶναι", definition: "to be — εἰμί Present Infinitive", notes: "εἰμί infinitive" },

            // Future Passive
            { term: "-θήσομαι", definition: "1st Sing. — 1st Future Passive Indicative", notes: "Future passive" },
            { term: "-θήσῃ", definition: "2nd Sing. — 1st Future Passive Indicative", notes: "Future passive" },
            { term: "-θήσεται", definition: "3rd Sing. — 1st Future Passive Indicative", notes: "Future passive" },
            { term: "-θησόμεθα", definition: "1st Plur. — 1st Future Passive Indicative", notes: "Future passive" },
            { term: "-θήσεσθε", definition: "2nd Plur. — 1st Future Passive Indicative", notes: "Future passive" },
            { term: "-θήσονται", definition: "3rd Plur. — 1st Future Passive Indicative", notes: "Future passive" },
        ]
    },

    prepositions: {
        name: "Prepositions",
        icon: "📌",
        cards: [
            { term: "ἐν", definition: "in, on, among", notes: "Takes DATIVE" },
            { term: "εἰς", definition: "into, in, among", notes: "Takes ACCUSATIVE" },
            { term: "ἐκ (ἐξ)", definition: "from, out of", notes: "Takes GENITIVE; ἐξ before vowels" },
            { term: "ἀπό (ἀπ', ἀφ')", definition: "(away) from", notes: "Takes GENITIVE" },
            { term: "πρός", definition: "to, toward, with", notes: "Takes ACCUSATIVE" },
            { term: "διά (δι')", definition: "through (gen); on account of (acc)", notes: "Two-case preposition" },
            { term: "κατά (κατ', καθ')", definition: "down from, against (gen); according to, throughout (acc)", notes: "Two-case preposition" },
            { term: "μετά (μετ', μεθ')", definition: "with (gen); after (acc)", notes: "Two-case preposition" },
            { term: "περί", definition: "concerning, about (gen); around (acc)", notes: "Two-case preposition" },
            { term: "ἐπί (ἐπ', ἐφ')", definition: "on, over (gen); on the basis of (dat); on, to, against (acc)", notes: "Three-case preposition" },

            { term: "ὑπέρ", definition: "in behalf of (gen); above (acc)", notes: "Two-case preposition" },
            { term: "ὑπό (ὑπ', ὑφ')", definition: "by (gen); under (acc)", notes: "Two-case: agency with genitive" },
            { term: "σύν", definition: "with, together with", notes: "Takes DATIVE" },
            { term: "πρό", definition: "before, in front of", notes: "Takes GENITIVE" },
            { term: "ἐνώπιον", definition: "before", notes: "Takes GENITIVE (improper prep)" },
        ]
    },

    pronouns: {
        name: "Pronouns",
        icon: "👤",
        cards: [
            // Relative Pronoun ὅς, ἥ, ὅ
            { term: "ὅς", definition: "who/which/that — Nom. Sing. Masc.", notes: "Relative pronoun" },
            { term: "ἥ", definition: "who/which/that — Nom. Sing. Fem.", notes: "Relative pronoun" },
            { term: "ὅ", definition: "which/that — Nom. Sing. Neut.", notes: "Relative pronoun" },
            { term: "οὗ", definition: "of whom/which — Gen. Sing. Masc./Neut.", notes: "Relative pronoun" },
            { term: "ἧς", definition: "of whom/which — Gen. Sing. Fem.", notes: "Relative pronoun" },
            { term: "ᾧ", definition: "to/for whom/which — Dat. Sing. Masc./Neut.", notes: "Relative pronoun" },
            { term: "ᾗ", definition: "to/for whom/which — Dat. Sing. Fem.", notes: "Relative pronoun" },
            { term: "ὅν", definition: "whom/which — Acc. Sing. Masc.", notes: "Relative pronoun" },
            { term: "ἥν", definition: "whom/which — Acc. Sing. Fem.", notes: "Relative pronoun" },
            { term: "οἵ", definition: "who/which — Nom. Plur. Masc.", notes: "Relative pronoun" },
            { term: "αἵ", definition: "who/which — Nom. Plur. Fem.", notes: "Relative pronoun" },
            { term: "ἅ", definition: "which — Nom./Acc. Plur. Neut.", notes: "Relative pronoun" },
            { term: "ὧν", definition: "of whom/which — Gen. Plur. (all genders)", notes: "Relative pronoun" },
            { term: "οἷς", definition: "to/for whom/which — Dat. Plur. Masc./Neut.", notes: "Relative pronoun" },
            { term: "αἷς", definition: "to/for whom/which — Dat. Plur. Fem.", notes: "Relative pronoun" },
            { term: "οὕς", definition: "whom/which — Acc. Plur. Masc.", notes: "Relative pronoun" },
            { term: "ἅς", definition: "whom/which — Acc. Plur. Fem.", notes: "Relative pronoun" },

            // αὐτός
            { term: "αὐτός", definition: "he / himself / same — Nom. Sing. Masc.", notes: "3rd person pronoun" },
            { term: "αὐτή", definition: "she / herself / same — Nom. Sing. Fem.", notes: "3rd person pronoun" },
            { term: "αὐτό", definition: "it / itself / same — Nom. Sing. Neut.", notes: "3rd person pronoun" },
            { term: "αὐτοῦ", definition: "of him / his — Gen. Sing. Masc.", notes: "3rd person pronoun" },
            { term: "αὐτῆς", definition: "of her / her — Gen. Sing. Fem.", notes: "3rd person pronoun" },
            { term: "αὐτῷ", definition: "to/for him — Dat. Sing. Masc.", notes: "3rd person pronoun" },
            { term: "αὐτῇ", definition: "to/for her — Dat. Sing. Fem.", notes: "3rd person pronoun" },
            { term: "αὐτόν", definition: "him — Acc. Sing. Masc.", notes: "3rd person pronoun" },
            { term: "αὐτήν", definition: "her — Acc. Sing. Fem.", notes: "3rd person pronoun" },
            { term: "αὐτοί", definition: "they (m.) — Nom. Plur. Masc.", notes: "3rd person pronoun" },
            { term: "αὐτῶν", definition: "of them / their — Gen. Plur. (all genders)", notes: "3rd person pronoun" },
            { term: "αὐτοῖς", definition: "to/for them — Dat. Plur. Masc./Neut.", notes: "3rd person pronoun" },
            { term: "αὐτούς", definition: "them (m.) — Acc. Plur. Masc.", notes: "3rd person pronoun" },

            // οὗτος (Demonstrative — this)
            { term: "οὗτος", definition: "this — Nom. Sing. Masc.", notes: "Near demonstrative" },
            { term: "αὕτη", definition: "this — Nom. Sing. Fem.", notes: "Near demonstrative" },
            { term: "τοῦτο", definition: "this — Nom. Sing. Neut.", notes: "Near demonstrative" },
            { term: "τούτου", definition: "of this — Gen. Sing. Masc./Neut.", notes: "Near demonstrative" },
            { term: "ταύτης", definition: "of this — Gen. Sing. Fem.", notes: "Near demonstrative" },
            { term: "τούτῳ", definition: "to/for this — Dat. Sing. Masc./Neut.", notes: "Near demonstrative" },
            { term: "ταύτῃ", definition: "to/for this — Dat. Sing. Fem.", notes: "Near demonstrative" },
            { term: "τοῦτον", definition: "this — Acc. Sing. Masc.", notes: "Near demonstrative" },
            { term: "ταύτην", definition: "this — Acc. Sing. Fem.", notes: "Near demonstrative" },
            { term: "οὗτοι", definition: "these — Nom. Plur. Masc.", notes: "Near demonstrative" },
            { term: "αὗται", definition: "these — Nom. Plur. Fem.", notes: "Near demonstrative" },
            { term: "ταῦτα", definition: "these — Nom./Acc. Plur. Neut.", notes: "Near demonstrative" },
            { term: "τούτων", definition: "of these — Gen. Plur. (all genders)", notes: "Near demonstrative" },
            { term: "τούτοις", definition: "to/for these — Dat. Plur. Masc./Neut.", notes: "Near demonstrative" },
            { term: "ταύταις", definition: "to/for these — Dat. Plur. Fem.", notes: "Near demonstrative" },
            { term: "τούτους", definition: "these — Acc. Plur. Masc.", notes: "Near demonstrative" },
            { term: "ταύτας", definition: "these — Acc. Plur. Fem.", notes: "Near demonstrative" },

            // ἐκεῖνος (Demonstrative — that)
            { term: "ἐκεῖνος", definition: "that — Nom. Sing. Masc.", notes: "Far demonstrative" },
            { term: "ἐκείνη", definition: "that — Nom. Sing. Fem.", notes: "Far demonstrative" },
            { term: "ἐκεῖνο", definition: "that — Nom. Sing. Neut.", notes: "Far demonstrative" },
            { term: "ἐκείνου", definition: "of that — Gen. Sing. Masc./Neut.", notes: "Far demonstrative" },
            { term: "ἐκείνης", definition: "of that — Gen. Sing. Fem.", notes: "Far demonstrative" },
            { term: "ἐκείνῳ", definition: "to/for that — Dat. Sing. Masc./Neut.", notes: "Far demonstrative" },
            { term: "ἐκείνῃ", definition: "to/for that — Dat. Sing. Fem.", notes: "Far demonstrative" },
            { term: "ἐκεῖνον", definition: "that — Acc. Sing. Masc.", notes: "Far demonstrative" },
            { term: "ἐκείνην", definition: "that — Acc. Sing. Fem.", notes: "Far demonstrative" },
            { term: "ἐκεῖνοι", definition: "those — Nom. Plur. Masc.", notes: "Far demonstrative" },
            { term: "ἐκεῖναι", definition: "those — Nom. Plur. Fem.", notes: "Far demonstrative" },
            { term: "ἐκεῖνα", definition: "those — Nom./Acc. Plur. Neut.", notes: "Far demonstrative" },
            { term: "ἐκείνων", definition: "of those — Gen. Plur. (all genders)", notes: "Far demonstrative" },
            { term: "ἐκείνοις", definition: "to/for those — Dat. Plur. Masc./Neut.", notes: "Far demonstrative" },
            { term: "ἐκείναις", definition: "to/for those — Dat. Plur. Fem.", notes: "Far demonstrative" },
            { term: "ἐκείνους", definition: "those — Acc. Plur. Masc.", notes: "Far demonstrative" },
            { term: "ἐκείνας", definition: "those — Acc. Plur. Fem.", notes: "Far demonstrative" },
        ]
    },

    participles: {
        name: "Participles",
        icon: "🔀",
        cards: [
            // Present Active Participle
            { term: "-ων", definition: "Nom. Sing. Masc. — Pres. Act. Participle", notes: "3rd declension (3-1-3)" },
            { term: "-ουσα", definition: "Nom. Sing. Fem. — Pres. Act. Participle", notes: "1st declension" },
            { term: "-ον", definition: "Nom. Sing. Neut. — Pres. Act. Participle", notes: "3rd declension" },
            { term: "-οντος", definition: "Gen. Sing. Masc./Neut. — Pres. Act. Participle", notes: "3rd declension" },
            { term: "-ούσης", definition: "Gen. Sing. Fem. — Pres. Act. Participle", notes: "1st declension" },
            { term: "-οντι", definition: "Dat. Sing. Masc./Neut. — Pres. Act. Participle", notes: "3rd declension" },
            { term: "-ούσῃ", definition: "Dat. Sing. Fem. — Pres. Act. Participle", notes: "1st declension" },
            { term: "-οντα", definition: "Acc. Sing. Masc. — Pres. Act. Participle", notes: "3rd declension" },
            { term: "-ουσαν", definition: "Acc. Sing. Fem. — Pres. Act. Participle", notes: "1st declension" },
            { term: "-οντες", definition: "Nom. Plur. Masc. — Pres. Act. Participle", notes: "3rd declension" },
            { term: "-ουσαι", definition: "Nom. Plur. Fem. — Pres. Act. Participle", notes: "1st declension" },
            { term: "-οντα (pl)", definition: "Nom./Acc. Plur. Neut. — Pres. Act. Participle", notes: "3rd declension" },

            // Present Mid/Pass Participle
            { term: "-ομενος", definition: "Nom. Sing. Masc. — Pres. Mid/Pass Participle", notes: "2-1-2 pattern" },
            { term: "-ομενη", definition: "Nom. Sing. Fem. — Pres. Mid/Pass Participle", notes: "2-1-2 pattern" },
            { term: "-ομενον", definition: "Nom. Sing. Neut. — Pres. Mid/Pass Participle", notes: "2-1-2 pattern" },
            { term: "-ομενου", definition: "Gen. Sing. Masc./Neut. — Pres. Mid/Pass Participle", notes: "2-1-2 pattern" },
            { term: "-ομενης", definition: "Gen. Sing. Fem. — Pres. Mid/Pass Participle", notes: "2-1-2 pattern" },

            // 1st Aorist Active Participle
            { term: "-σας", definition: "Nom. Sing. Masc. — 1st Aor. Act. Participle", notes: "3-1-3 pattern" },
            { term: "-σασα", definition: "Nom. Sing. Fem. — 1st Aor. Act. Participle", notes: "1st declension" },
            { term: "-σαν", definition: "Nom. Sing. Neut. — 1st Aor. Act. Participle", notes: "3rd declension" },
            { term: "-σαντος", definition: "Gen. Sing. Masc./Neut. — 1st Aor. Act. Participle", notes: "3rd declension" },
            { term: "-σαντες", definition: "Nom. Plur. Masc. — 1st Aor. Act. Participle", notes: "3rd declension" },
            { term: "-σαντα (pl)", definition: "Nom./Acc. Plur. Neut. — 1st Aor. Act. Participle", notes: "3rd declension" },

            // 1st Aorist Passive Participle
            { term: "-θεις", definition: "Nom. Sing. Masc. — 1st Aor. Pass. Participle", notes: "3-1-3 pattern with θε" },
            { term: "-θεισα", definition: "Nom. Sing. Fem. — 1st Aor. Pass. Participle", notes: "1st declension" },
            { term: "-θεν", definition: "Nom. Sing. Neut. — 1st Aor. Pass. Participle", notes: "3rd declension" },
            { term: "-θεντος", definition: "Gen. Sing. Masc./Neut. — 1st Aor. Pass. Participle", notes: "3rd declension" },
            { term: "-θεντες", definition: "Nom. Plur. Masc. — 1st Aor. Pass. Participle", notes: "3rd declension" },

            // 1st Aorist Middle Participle
            { term: "-σαμενος", definition: "Nom. Sing. Masc. — 1st Aor. Mid. Participle", notes: "2-1-2 pattern" },
            { term: "-σαμενη", definition: "Nom. Sing. Fem. — 1st Aor. Mid. Participle", notes: "2-1-2 pattern" },
            { term: "-σαμενον", definition: "Nom. Sing. Neut. — 1st Aor. Mid. Participle", notes: "2-1-2 pattern" },

            // Perfect Active Participle
            { term: "-κως", definition: "Nom. Sing. Masc. — Perf. Act. Participle", notes: "3-1-3 pattern" },
            { term: "-κυια", definition: "Nom. Sing. Fem. — Perf. Act. Participle", notes: "1st declension" },
            { term: "-κος", definition: "Nom. Sing. Neut. — Perf. Act. Participle", notes: "3rd declension" },

            // Perfect Mid/Pass Participle
            { term: "-μενος", definition: "Nom. Sing. Masc. — Perf. Mid/Pass Participle", notes: "2-1-2 pattern" },
            { term: "-μενη", definition: "Nom. Sing. Fem. — Perf. Mid/Pass Participle", notes: "2-1-2 pattern" },
            { term: "-μενον", definition: "Nom. Sing. Neut. — Perf. Mid/Pass Participle", notes: "2-1-2 pattern" },

            // εἰμί Present Participle
            { term: "ὤν", definition: "being — Masc. Nom. Sing. Pres. Ptc. of εἰμί", notes: "3rd declension" },
            { term: "οὖσα", definition: "being — Fem. Nom. Sing. Pres. Ptc. of εἰμί", notes: "1st declension" },
            { term: "ὄν", definition: "being — Neut. Nom. Sing. Pres. Ptc. of εἰμί", notes: "3rd declension" },
            { term: "ὄντος", definition: "being — Masc./Neut. Gen. Sing. Pres. Ptc. of εἰμί", notes: "3rd declension" },
            { term: "οὔσης", definition: "being — Fem. Gen. Sing. Pres. Ptc. of εἰμί", notes: "1st declension" },
        ]
    },

    syntax: {
        name: "Syntax & Grammar Rules",
        icon: "📐",
        cards: [
            { term: "Nominative Case", definition: "Subject of the verb; predicate nominative", notes: "ὁ ἄνθρωπος βλέπει — The man sees" },
            { term: "Genitive Case", definition: "Possession, separation, source, description; key word: 'of'", notes: "ὁ λόγος τοῦ θεοῦ — The word of God" },
            { term: "Dative Case", definition: "Indirect object, means, location; key words: 'to / in / with'", notes: "λέγει αὐτῷ — He says to him" },
            { term: "Accusative Case", definition: "Direct object, extent of time/space", notes: "βλέπει τὸν ἄνθρωπον — He sees the man" },
            { term: "Vocative Case", definition: "Direct address", notes: "κύριε — O Lord!" },
            { term: "Inflection", definition: "Changing the form of a word (usually its ending)", notes: "Fundamental concept of Greek grammar" },
            { term: "Declension", definition: "A family of nouns inflected the same way", notes: "1st (α/η stems), 2nd (ο stems), 3rd (consonant stems)" },
            { term: "Predicate Nominative", definition: "The direct object of εἰμί goes in the nominative case", notes: "Not accusative — because εἰμί is copulative" },
            { term: "Neuter Plural Rule", definition: "Neuter plural subjects take a SINGULAR verb", notes: "τὰ τέκνα βλέπει (the children see)" },
            { term: "Active Voice", definition: "Subject performs the action", notes: "" },
            { term: "Passive Voice", definition: "Subject receives the action", notes: "" },
            { term: "Middle Voice", definition: "Subject acts in own interest or on self", notes: "Distinct from active and passive" },
            { term: "Deponent Verbs", definition: "Middle/passive form but active meaning", notes: "e.g., ἔρχομαι (I come/go), πορεύομαι (I go)" },
            { term: "Contract Verbs", definition: "Stems ending in α, ε, or ο that contract with endings", notes: "Contractions always get a circumflex accent" },
            { term: "Augment", definition: "ε- prefix added to secondary (past) tense verb stems", notes: "Imperfect and Aorist indicative only" },
            { term: "Reduplication", definition: "Repeating the first consonant + ε before the stem", notes: "Used in Perfect tense forms" },
            { term: "Square of Stops", definition: "Labial (π,β,φ)+σ=ψ; Velar (κ,γ,χ)+σ=ξ; Dental (τ,δ,θ)+σ=σ", notes: "Important for 3rd declension and verb stems" },
            { term: "Attributive Position", definition: "Art + Adj + Noun — adjective modifies noun", notes: "ὁ ἀγαθὸς ἄνθρωπος = the good man" },
            { term: "Predicate Position", definition: "Adj + Art + Noun — creates an 'is' statement", notes: "ἀγαθὸς ὁ ἄνθρωπος = the man IS good" },
            { term: "Genitive Absolute", definition: "Participle + noun in genitive, grammatically independent of main clause", notes: "Temporal/causal circumstance" },
            { term: "Subjunctive Mood", definition: "Probability, exhortation, purpose, prohibition", notes: "ἵνα + subjunctive = purpose clause" },
            { term: "Imperative Mood", definition: "Commands and requests", notes: "Present = ongoing; Aorist = simple/undefined" },
            { term: "Conditional — 1st Class", definition: "εἰ + indicative = assumed true for argument's sake", notes: "1st class condition" },
            { term: "Conditional — 3rd Class", definition: "ἐάν + subjunctive = possible/probable", notes: "3rd class condition" },
            { term: "Postpositive Words", definition: "Words that cannot appear first in a clause", notes: "δέ, γάρ, οὖν, μέν" },
            { term: "Movable Nu", definition: "The ν at the end of forms like ἐστίν", notes: "Added before vowels or at end of sentence" },
            { term: "Crasis", definition: "Two words combined into one", notes: "e.g., κἀγώ = καί + ἐγώ" },
            { term: "Gamma Nasal", definition: "γ before γ, κ, χ, or ξ is pronounced as 'n'", notes: "e.g., ἄγγελος = 'angelos'" },
            { term: "Smooth Breathing", definition: "Normal pronunciation — no added sound", notes: "Breathing mark on initial vowels" },
            { term: "Rough Breathing", definition: "Adds an 'h' sound", notes: "ρ and υ always take rough breathing" },
        ]
    }
};

// ============================================================
// Paradigm Tables — for table-based quizzes
// Categories that have paradigms will use these for MC/FIB
// Structure: { title, cols, rows, cells[row][col] }
// ============================================================

const PARADIGM_TABLES = {
    verbs: [
        {
            title: "Present Active Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-ω", "-ομεν"],
                ["-εις", "-ετε"],
                ["-ει", "-ουσι(ν)"]
            ]
        },
        {
            title: "Present Middle/Passive Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-ομαι", "-ομεθα"],
                ["-ῃ", "-εσθε"],
                ["-εται", "-ονται"]
            ]
        },
        {
            title: "εἰμί — Present Active Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["εἰμί", "ἐσμέν"],
                ["εἶ", "ἐστέ"],
                ["ἐστίν", "εἰσίν"]
            ]
        },
        {
            title: "Future Active Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-σω", "-σομεν"],
                ["-σεις", "-σετε"],
                ["-σει", "-σουσι(ν)"]
            ]
        },
        {
            title: "Future Middle Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-σομαι", "-σομεθα"],
                ["-σῃ", "-σεσθε"],
                ["-σεται", "-σονται"]
            ]
        },
        {
            title: "εἰμί — Future",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["ἔσομαι", "ἐσόμεθα"],
                ["ἔσῃ", "ἔσεσθε"],
                ["ἔσται", "ἔσονται"]
            ]
        },
        {
            title: "Liquid Future Active Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-ῶ", "-οῦμεν"],
                ["-εῖς", "-εῖτε"],
                ["-εῖ", "-οῦσι(ν)"]
            ]
        },
        {
            title: "Imperfect Active Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["ε-__-ον", "ε-__-ομεν"],
                ["ε-__-ες", "ε-__-ετε"],
                ["ε-__-ε(ν)", "ε-__-ον"]
            ]
        },
        {
            title: "Imperfect Middle/Passive Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["ε-__-ομην", "ε-__-ομεθα"],
                ["ε-__-ου", "ε-__-εσθε"],
                ["ε-__-ετο", "ε-__-οντο"]
            ]
        },
        {
            title: "εἰμί — Imperfect",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["ἤμην", "ἦμεν"],
                ["ἦς", "ἦτε"],
                ["ἦν", "ἦσαν"]
            ]
        },
        {
            title: "1st Aorist Active Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["ε-__-σα", "ε-__-σαμεν"],
                ["ε-__-σας", "ε-__-σατε"],
                ["ε-__-σε(ν)", "ε-__-σαν"]
            ]
        },
        {
            title: "1st Aorist Middle Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["ε-__-σαμην", "ε-__-σαμεθα"],
                ["ε-__-σω", "ε-__-σασθε"],
                ["ε-__-σατο", "ε-__-σαντο"]
            ]
        },
        {
            title: "1st Aorist Passive Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["ε-__-θην", "ε-__-θημεν"],
                ["ε-__-θης", "ε-__-θητε"],
                ["ε-__-θη", "ε-__-θησαν"]
            ]
        },
        {
            title: "Perfect Active Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-κα", "-καμεν"],
                ["-κας", "-κατε"],
                ["-κε(ν)", "-κασι(ν)"]
            ]
        },
        {
            title: "Perfect Middle/Passive Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-μαι", "-μεθα"],
                ["-σαι", "-σθε"],
                ["-ται", "-νται"]
            ]
        },
        {
            title: "Present Active Subjunctive",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-ω", "-ωμεν"],
                ["-ῃς", "-ητε"],
                ["-ῃ", "-ωσι(ν)"]
            ]
        },
        {
            title: "εἰμί — Subjunctive",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["ὦ", "ὦμεν"],
                ["ᾖς", "ἦτε"],
                ["ᾖ", "ὦσι(ν)"]
            ]
        },
        {
            title: "1st Future Passive Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-θήσομαι", "-θησόμεθα"],
                ["-θήσῃ", "-θήσεσθε"],
                ["-θήσεται", "-θήσονται"]
            ]
        },
        {
            title: "Infinitive Endings",
            cols: ["Active", "Middle", "Passive"],
            rows: ["Present", "1st Aorist", "Perfect"],
            cells: [
                ["-ειν", "-εσθαι", "-εσθαι"],
                ["-σαι", "-σασθαι", "-θηναι"],
                ["-κεναι", "-σθαι", "-σθαι"]
            ]
        },
        {
            title: "Present M/P Subjunctive",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-ωμαι", "-ωμεθα"],
                ["-ῃ", "-ησθε"],
                ["-ηται", "-ωνται"]
            ]
        },
        {
            title: "Aorist Active Subjunctive",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-ω", "-ωμεν"],
                ["-ῃς", "-ητε"],
                ["-ῃ", "-ωσι(ν)"]
            ]
        },
        {
            title: "Aorist Middle Subjunctive",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-ωμαι", "-ωμεθα"],
                ["-ῃ", "-ησθε"],
                ["-ηται", "-ωνται"]
            ]
        },
        {
            title: "Aorist Passive Subjunctive",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["-θῶ", "-θῶμεν"],
                ["-θῇς", "-θῆτε"],
                ["-θῇ", "-θῶσι(ν)"]
            ]
        },
        {
            title: "Contract Verb Subjunctive",
            cols: ["-άω contract", "-έω contract", "-όω contract"],
            rows: ["1st Sg", "2nd Sg", "3rd Sg", "1st Pl", "2nd Pl", "3rd Pl"],
            cells: [
                ["-ῶ", "-ῶ", "-ῶ"],
                ["-ᾷς", "-ῇς", "-οῖς"],
                ["-ᾷ", "-ῇ", "-οῖ"],
                ["-ῶμεν", "-ῶμεν", "-ῶμεν"],
                ["-ᾶτε", "-ῆτε", "-ῶτε"],
                ["-ῶσι(ν)", "-ῶσι(ν)", "-ῶσι(ν)"]
            ]
        },
        {
            title: "Imperatives — Active",
            cols: ["Present", "1st Aorist"],
            rows: ["2nd Sg", "3rd Sg", "2nd Pl", "3rd Pl"],
            cells: [
                ["-ε", "-σον"],
                ["-έτω", "-σάτω"],
                ["-ετε", "-σατε"],
                ["-έτωσαν", "-σάτωσαν"]
            ]
        },
        {
            title: "Imperatives — Middle",
            cols: ["Present", "1st Aorist"],
            rows: ["2nd Sg", "3rd Sg", "2nd Pl", "3rd Pl"],
            cells: [
                ["-ου", "-σαι"],
                ["-έσθω", "-σάσθω"],
                ["-εσθε", "-σασθε"],
                ["-έσθωσαν", "-σάσθωσαν"]
            ]
        },
        {
            title: "Imperatives — Passive",
            cols: ["Present", "1st Aorist"],
            rows: ["2nd Sg", "3rd Sg", "2nd Pl", "3rd Pl"],
            cells: [
                ["-ου", "-θητι"],
                ["-έσθω", "-θήτω"],
                ["-εσθε", "-θητε"],
                ["-έσθωσαν", "-θήτωσαν"]
            ]
        },
        {
            title: "Imperatives — εἰμί",
            cols: ["Form"],
            rows: ["2nd Sg", "3rd Sg", "2nd Pl", "3rd Pl"],
            cells: [
                ["ἴσθι"],
                ["ἔστω"],
                ["ἔστε"],
                ["ἔστωσαν"]
            ]
        },
        {
            title: "δίδωμι — Present Active Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["δίδωμι", "δίδομεν"],
                ["δίδως", "δίδοτε"],
                ["δίδωσι(ν)", "διδόασι(ν)"]
            ]
        },
        {
            title: "δίδωμι — Imperfect Active Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["ἐδίδουν", "ἐδίδομεν"],
                ["ἐδίδους", "ἐδίδοτε"],
                ["ἐδίδου", "ἐδίδουν"]
            ]
        },
        {
            title: "δίδωμι — Aorist Active Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["ἔδωκα", "ἐδώκαμεν"],
                ["ἔδωκας", "ἐδώκατε"],
                ["ἔδωκε(ν)", "ἔδωκαν"]
            ]
        },
        {
            title: "δίδωμι — Future Active Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["δώσω", "δώσομεν"],
                ["δώσεις", "δώσετε"],
                ["δώσει", "δώσουσι(ν)"]
            ]
        },
        {
            title: "δίδωμι — Perfect Active Indicative",
            cols: ["Singular", "Plural"],
            rows: ["1st Person", "2nd Person", "3rd Person"],
            cells: [
                ["δέδωκα", "δεδώκαμεν"],
                ["δέδωκας", "δεδώκατε"],
                ["δέδωκε(ν)", "δεδώκασι(ν)"]
            ]
        },
        {
            title: "δίδωμι — Imperative Active",
            cols: ["Present", "2nd Aorist"],
            rows: ["2nd Sg", "3rd Sg", "2nd Pl", "3rd Pl"],
            cells: [
                ["δίδου", "δός"],
                ["διδότω", "δότω"],
                ["δίδοτε", "δότε"],
                ["διδότωσαν", "δότωσαν"]
            ]
        }
    ],

    nouns: [
        {
            title: "The Article (ὁ, ἡ, τό)",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["ὁ", "ἡ", "τό"],
                ["τοῦ", "τῆς", "τοῦ"],
                ["τῷ", "τῇ", "τῷ"],
                ["τόν", "τήν", "τό"],
                ["οἱ", "αἱ", "τά"],
                ["τῶν", "τῶν", "τῶν"],
                ["τοῖς", "ταῖς", "τοῖς"],
                ["τούς", "τάς", "τά"]
            ]
        },
        {
            title: "Case Endings Overview",
            cols: ["2nd M", "1st F", "2nd N", "3rd M/F", "3rd N"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["-ος", "--", "-ον", "-ς", "--"],
                ["-ου", "-ς", "-ου", "-ος", "-ος"],
                ["-ῳ", "-ῃ", "-ῳ", "-ι", "-ι"],
                ["-ον", "-ην", "-ον", "-α", "--"],
                ["-οι", "-αι", "-α", "-ες", "-α"],
                ["-ων", "-ων", "-ων", "-ων", "-ων"],
                ["-οις", "-αις", "-οις", "-σι(ν)", "-σι(ν)"],
                ["-ους", "-ας", "-α", "-ας", "-α"]
            ]
        }
    ],

    pronouns: [
        {
            title: "Relative Pronoun (ὅς, ἥ, ὅ)",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["ὅς", "ἥ", "ὅ"],
                ["οὗ", "ἧς", "οὗ"],
                ["ᾧ", "ᾗ", "ᾧ"],
                ["ὅν", "ἥν", "ὅ"],
                ["οἵ", "αἵ", "ἅ"],
                ["ὧν", "ὧν", "ὧν"],
                ["οἷς", "αἷς", "οἷς"],
                ["οὕς", "ἅς", "ἅ"]
            ]
        },
        {
            title: "αὐτός (he/she/it; same)",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["αὐτός", "αὐτή", "αὐτό"],
                ["αὐτοῦ", "αὐτῆς", "αὐτοῦ"],
                ["αὐτῷ", "αὐτῇ", "αὐτῷ"],
                ["αὐτόν", "αὐτήν", "αὐτό"],
                ["αὐτοί", "αὐταί", "αὐτά"],
                ["αὐτῶν", "αὐτῶν", "αὐτῶν"],
                ["αὐτοῖς", "αὐταῖς", "αὐτοῖς"],
                ["αὐτούς", "αὐτάς", "αὐτά"]
            ]
        },
        {
            title: "οὗτος (this, these)",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["οὗτος", "αὕτη", "τοῦτο"],
                ["τούτου", "ταύτης", "τούτου"],
                ["τούτῳ", "ταύτῃ", "τούτῳ"],
                ["τοῦτον", "ταύτην", "τοῦτο"],
                ["οὗτοι", "αὗται", "ταῦτα"],
                ["τούτων", "τούτων", "τούτων"],
                ["τούτοις", "ταύταις", "τούτοις"],
                ["τούτους", "ταύτας", "ταῦτα"]
            ]
        },
        {
            title: "ἐκεῖνος (that, those)",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["ἐκεῖνος", "ἐκείνη", "ἐκεῖνο"],
                ["ἐκείνου", "ἐκείνης", "ἐκείνου"],
                ["ἐκείνῳ", "ἐκείνῃ", "ἐκείνῳ"],
                ["ἐκεῖνον", "ἐκείνην", "ἐκεῖνο"],
                ["ἐκεῖνοι", "ἐκεῖναι", "ἐκεῖνα"],
                ["ἐκείνων", "ἐκείνων", "ἐκείνων"],
                ["ἐκείνοις", "ἐκείναις", "ἐκείνοις"],
                ["ἐκείνους", "ἐκείνας", "ἐκεῖνα"]
            ]
        }
    ],

    participles: [
        {
            title: "Present Active Participle",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["-ων", "-ουσα", "-ον"],
                ["-οντος", "-ούσης", "-οντος"],
                ["-οντι", "-ούσῃ", "-οντι"],
                ["-οντα", "-ουσαν", "-ον"],
                ["-οντες", "-ουσαι", "-οντα"],
                ["-οντων", "-ουσῶν", "-οντων"],
                ["-ουσι(ν)", "-ούσαις", "-ουσι(ν)"],
                ["-οντας", "-ούσας", "-οντα"]
            ]
        },
        {
            title: "Present Middle/Passive Participle",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["-ομενος", "-ομενη", "-ομενον"],
                ["-ομενου", "-ομενης", "-ομενου"],
                ["-ομενῳ", "-ομενῃ", "-ομενῳ"],
                ["-ομενον", "-ομενην", "-ομενον"],
                ["-ομενοι", "-ομεναι", "-ομενα"],
                ["-ομενων", "-ομενων", "-ομενων"],
                ["-ομενοις", "-ομεναις", "-ομενοις"],
                ["-ομενους", "-ομενας", "-ομενα"]
            ]
        },
        {
            title: "1st Aorist Active Participle",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["-σας", "-σασα", "-σαν"],
                ["-σαντος", "-σάσης", "-σαντος"],
                ["-σαντι", "-σάσῃ", "-σαντι"],
                ["-σαντα", "-σασαν", "-σαν"],
                ["-σαντες", "-σασαι", "-σαντα"],
                ["-σαντων", "-σασῶν", "-σαντων"],
                ["-σασι(ν)", "-σασαις", "-σασι(ν)"],
                ["-σαντας", "-σασας", "-σαντα"]
            ]
        },
        {
            title: "1st Aorist Passive Participle",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["-θεις", "-θεισα", "-θεν"],
                ["-θεντος", "-θεισης", "-θεντος"],
                ["-θεντι", "-θεισῃ", "-θεντι"],
                ["-θεντα", "-θεισαν", "-θεν"],
                ["-θεντες", "-θεισαι", "-θεντα"],
                ["-θεντων", "-θεισῶν", "-θεντων"],
                ["-θεισι(ν)", "-θεισαις", "-θεισι(ν)"],
                ["-θεντας", "-θεισας", "-θεντα"]
            ]
        },
        {
            title: "εἰμί — Present Participle",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["ὤν", "οὖσα", "ὄν"],
                ["ὄντος", "οὔσης", "ὄντος"],
                ["ὄντι", "οὔσῃ", "ὄντι"],
                ["ὄντα", "οὖσαν", "ὄν"],
                ["ὄντες", "οὖσαι", "ὄντα"],
                ["ὄντων", "οὐσῶν", "ὄντων"],
                ["οὖσι(ν)", "οὔσαις", "οὖσι(ν)"],
                ["ὄντας", "οὔσας", "ὄντα"]
            ]
        },
        {
            title: "1st Aorist Middle Participle",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["-σάμενος", "-σαμένη", "-σάμενον"],
                ["-σαμένου", "-σαμένης", "-σαμένου"],
                ["-σαμένῳ", "-σαμένῃ", "-σαμένῳ"],
                ["-σάμενον", "-σαμένην", "-σάμενον"],
                ["-σάμενοι", "-σάμεναι", "-σάμενα"],
                ["-σαμένων", "-σαμένων", "-σαμένων"],
                ["-σαμένοις", "-σαμέναις", "-σαμένοις"],
                ["-σαμένους", "-σαμένας", "-σάμενα"]
            ]
        },
        {
            title: "2nd Aorist Active Participle",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["-ών", "-οῦσα", "-όν"],
                ["-όντος", "-ούσης", "-όντος"],
                ["-όντι", "-ούσῃ", "-όντι"],
                ["-όντα", "-οῦσαν", "-όν"],
                ["-όντες", "-οῦσαι", "-όντα"],
                ["-όντων", "-ουσῶν", "-όντων"],
                ["-οῦσι(ν)", "-ούσαις", "-οῦσι(ν)"],
                ["-όντας", "-ούσας", "-όντα"]
            ]
        },
        {
            title: "2nd Aorist Passive Participle",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["-είς", "-εῖσα", "-έν"],
                ["-έντος", "-είσης", "-έντος"],
                ["-έντι", "-είσῃ", "-έντι"],
                ["-έντα", "-εῖσαν", "-έν"],
                ["-έντες", "-εῖσαι", "-έντα"],
                ["-έντων", "-εισῶν", "-έντων"],
                ["-εῖσι(ν)", "-είσαις", "-εῖσι(ν)"],
                ["-έντας", "-είσας", "-έντα"]
            ]
        },
        {
            title: "2nd Aorist Middle Participle",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["-όμενος", "-ομένη", "-όμενον"],
                ["-ομένου", "-ομένης", "-ομένου"],
                ["-ομένῳ", "-ομένῃ", "-ομένῳ"],
                ["-όμενον", "-ομένην", "-όμενον"],
                ["-όμενοι", "-όμεναι", "-όμενα"],
                ["-ομένων", "-ομένων", "-ομένων"],
                ["-ομένοις", "-ομέναις", "-ομένοις"],
                ["-ομένους", "-ομένας", "-όμενα"]
            ]
        },
        {
            title: "1st Perfect Active Participle",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["-κώς", "-κυῖα", "-κός"],
                ["-κότος", "-κυίας", "-κότος"],
                ["-κότι", "-κυίᾳ", "-κότι"],
                ["-κότα", "-κυῖαν", "-κός"],
                ["-κότες", "-κυῖαι", "-κότα"],
                ["-κότων", "-κυιῶν", "-κότων"],
                ["-κόσι(ν)", "-κυίαις", "-κόσι(ν)"],
                ["-κότας", "-κυίας", "-κότα"]
            ]
        },
        {
            title: "1st Perfect Middle/Passive Participle",
            cols: ["Masculine", "Feminine", "Neuter"],
            rows: ["Nom. Sg.", "Gen. Sg.", "Dat. Sg.", "Acc. Sg.", "Nom. Pl.", "Gen. Pl.", "Dat. Pl.", "Acc. Pl."],
            cells: [
                ["-μένος", "-μένη", "-μένον"],
                ["-μένου", "-μένης", "-μένου"],
                ["-μένῳ", "-μένῃ", "-μένῳ"],
                ["-μένον", "-μένην", "-μένον"],
                ["-μένοι", "-μέναι", "-μένα"],
                ["-μένων", "-μένων", "-μένων"],
                ["-μένοις", "-μέναις", "-μένοις"],
                ["-μένους", "-μένας", "-μένα"]
            ]
        }
    ]
};

// ============================================================
// Chapter Map — which Mounce chapter each vocab term belongs to
// Extracted from INTRO NOTES; user will fill in later chapters
// ============================================================
const CHAPTER_MAP = {
    // Chapter 4 (Mounce 3-4)
    "ἄγγελος": 4, "ἀμήν": 4, "ἄνθρωπος": 4, "ἀπόστολος": 4,
    "Γαλιλαία": 4, "γραφή": 4, "δόξα": 4, "ἐγώ": 4,
    "ἔσχατος": 4, "ζωή": 4, "θεός": 4, "καί": 4,
    "καρδία": 4, "κόσμος": 4, "λόγος": 4, "πνεῦμα": 4,
    "προφήτης": 4, "σάββατον": 4, "φωνή": 4, "Χριστός": 4,
    // Chapter 6 (Mounce 5-6)
    "ἀγάπη": 6, "ἄλλος": 6, "αὐτός": 6, "βασιλεία": 6,
    "δέ": 6, "ἐν": 6, "ἔργον": 6, "καιρός": 6,
    "νῦν": 6, "ὁ, ἡ, τό": 6, "ὅτι": 6, "οὐ": 6, "ὥρα": 6,
    // Chapter 7
    "ἁμαρτία": 7, "ἀρχή": 7, "γάρ": 7, "εἶπεν": 7,
    "εἰς": 7, "ἐξουσία": 7, "εὐαγγέλιον": 7, "Ἰησοῦς": 7,
    "κύριος": 7, "μή": 7, "οὐρανός": 7, "οὗτος, αὕτη, τοῦτο": 7,
    "σύ": 7, "υἱός": 7, "ὥστε": 7,
    // Chapter 8
    "ἀλλά": 8, "ἀπό": 8, "διά": 8, "εἰμί": 8,
    "ἐκ (ἐξ)": 8, "ἡμέρα": 8, "ἦν": 8, "θάλασσα": 8,
    "θάνατος": 8, "ἵνα": 8, "Ἰωάννης": 8, "λέγω": 8,
    "μετά": 8, "οἰκία": 8, "οἶκος": 8, "ὄχλος": 8,
    "παρὰ (παρ')": 8, "παραβολή": 8, "πρός": 8, "ὑπό": 8,
    // Chapter 9
    "ἀγαθός": 9, "ἀγαπητός": 9, "ἅγιος": 9, "αἰώνιος": 9,
    "ἀλλήλων": 9, "ἀπεκρίθη": 9, "δοῦλος": 9, "ἐάν": 9,
    "ἐμός, ἐμή, ἐμόν": 9, "ἐντολή": 9, "καθώς": 9, "κακός": 9,
    "μου (ἐμοῦ)": 9, "νεκρός": 9, "πιστός": 9, "πονηρός": 9,
    "πρῶτος": 9, "τρίτος": 9,
    // Chapter 10
    "εἰ": 10, "εἰ μή": 10, "εἷς, μία, ἕν": 10, "ἤδη": 10,
    "ὄνομα, -ατος, τό": 10, "οὐδείς, οὐδεμία, οὐδέν": 10,
    "πᾶς, πᾶσα, πᾶν": 10, "περί": 10, "σάρξ, σαρκός, ἡ": 10,
    "σύν": 10, "σῶμα, -ατος, τό": 10, "τέκνον": 10,
    "τίς, τί": 10, "τις, τι": 10, "Σίμων, -ωνος, ὁ": 10,
    // Chapter 11
    "ἀδελφός": 11, "ἄν": 11, "ἀνήρ, ἀνδρός, ὁ": 11,
    "ἐκκλησία": 11, "ἐλπίς, -ίδος, ἡ": 11, "ἔξω": 11,
    "ἐπί": 11, "ἡμεῖς": 11, "θέλημα, -ατος, τό": 11,
    "ἴδε": 11, "ἰδού": 11, "καλός, -ή, -όν": 11,
    "μήτηρ, μητρός, ἡ": 11, "οὐδέ": 11, "πατήρ, πατρός, ὁ": 11,
    "πίστις, πίστεως, ἡ": 11, "ὕδωρ, ὕδατος, τό": 11,
    "ὑμεῖς": 11, "φῶς, φωτός, τό": 11, "χάρις, χάριτος, ἡ": 11,
    "ὧδε": 11,
    // Chapter 12
    "αἰών, αἰῶνος, ὁ": 12, "διδάσκαλος": 12, "εὐθύς": 12,
    "ἕως": 12, "μαθητής": 12, "μέν": 12,
    "μηδείς, μηδεμία, μηδέν": 12, "μόνος, -η, -ον": 12,
    "ὅπως": 12, "ὅσος, -η, -ον": 12, "οὖν": 12,
    "ὀφθαλμός": 12, "πάλιν": 12, "πούς, ποδός, ὁ": 12, "ὑπέρ": 12,
    // Chapter 13
    "γυνή, γυναικός, ἡ": 13, "δικαιοσύνη": 13, "δώδεκα": 13,
    "ἑαυτοῦ, -ῆς, -οῦ": 13, "ἐκεῖνος, -η, -ο": 13, "ἤ": 13,
    "κἀγώ": 13, "μακάριος, -ία, -ιον": 13,
    "μέγας, μεγάλη, μέγα": 13, "πόλις, -εως, ἡ": 13,
    "πολύς, πολλή, πολύ": 13, "πῶς": 13, "σημεῖον": 13,
    // Chapter 14
    "ἀλήθεια": 14, "εἰρήνη": 14, "ἐνώπιον": 14, "ἐπαγγελία": 14,
    "ἑπτά": 14, "θρόνος": 14, "Ἰερουσαλήμ": 14, "κατά": 14,
    "κεφαλή": 14, "ὁδός": 14, "ὅς, ἥ, ὅ": 14, "ὅτε": 14,
    "οὕτως": 14, "πλοῖον": 14, "ῥῆμα, -ατος, τό": 14,
    "τέ": 14, "χείρ, χειρός, ἡ": 14, "ψυχή": 14,
    // Chapter 16 (Mounce 15-16)
    "ἀκούω": 16, "βλέπω": 16, "ἔχω": 16, "λύω": 16,
    "νόμος": 16, "ὅπου": 16, "πιστεύω": 16, "πρόσωπον": 16,
    "τότε": 16, "τυφλός, -ή, -όν": 16, "χαρά": 16,
    // Chapter 17
    "ἀγαπάω": 17, "δαιμόνιον": 17, "ζητέω": 17, "καλέω": 17,
    "λαλέω": 17, "οἶδα": 17, "ὅταν": 17, "πλείων, πλεῖον": 17,
    "πληρόω": 17, "ποιέω": 17, "τηρέω": 17,
    // Chapter 18
    "ἀποκρίνομαι": 18, "δεῖ": 18, "δύναμαι": 18, "ἔρχομαι": 18,
    "νύξ, νυκτός, ἡ": 18, "ὅστις, ἥτις, ὅτι": 18,
    "πορεύομαι": 18, "συνάγω": 18, "τόπος": 18, "ὡς": 18,
    // Chapter 19
    "βασιλεύς, -έως, ὁ": 19, "γεννάω": 19, "ζάω": 19,
    "Ἰουδαία": 19, "Ἰουδαῖος, -αία, -αῖον": 19, "Ἰσραήλ": 19,
    "καρπός": 19, "μείζων": 19, "ὅλος, -η, -ον": 19, "προσκυνέω": 19,
    // Chapter 20
    "αἴρω": 20, "ἀποκτείνω": 20, "ἀποστέλλω": 20, "βαπτίζω": 20,
    "γινώσκω": 20, "γλῶσσα, -ης, ἡ": 20, "ἐγείρω": 20, "ἐκβάλλω": 20,
    "ἐκεῖ": 20, "κρίνω": 20, "λαός": 20, "μένω": 20,
    "ὁράω": 20, "σοφία": 20, "στόμα, -ατος, τό": 20, "σῴζω": 20,
    // Chapter 21
    "ἀκολουθέω": 21, "διδάσκω": 21, "ἐπερωτάω": 21, "ἐρωτάω": 21,
    "θέλω": 21, "περιπατέω": 21, "συναγωγή": 21, "Φαρισαῖος": 21,
    "χρόνος": 21,
    // Chapter 22
    "ἀποθνῄσκω": 22, "ἄρτος": 22, "βάλλω": 22, "γῆ, γῆς, ἡ": 22,
    "γίνομαι": 22, "εἰσέρχομαι": 22, "ἐξέρχομαι": 22, "ἔτι": 22,
    "εὑρίσκω": 22, "λαμβάνω": 22, "οὔτε": 22,
    "προσέρχομαι": 22, "προσεύχομαι": 22, "πῦρ, πυρός, τό": 22,
    // Chapter 23
    "ἀπέρχομαι": 23, "ἄρχομαι": 23, "γράφω": 23, "διό": 23,
    "δοξάζω": 23, "δύναμις": 23, "κηρύσσω": 23, "πίνω": 23,
    // Chapter 24
    "ἄγω": 24, "αἷμα": 24, "ἕκαστος": 24, "ἱμάτιον": 24,
    "ὄρος": 24, "ὑπάγω": 24, "φοβέομαι": 24, "χαίρω": 24,
    // Chapter 25
    "αἰτέω": 25, "μᾶλλον": 25, "μαρτυρέω": 25,
    // Chapter 27
    "ἀναβαίνω": 27, "ἀρχιερεύς, -έως, ὁ": 27, "δεξιός, -ά, -όν": 27,
    "δύο": 27, "ἕτερος, -α, -ον": 27, "εὐαγγελίζω": 27, "θεωρέω": 27,
    "Ἱεροσόλυμα": 27, "κάθημαι": 27, "καταβαίνω": 27, "οὗ": 27,
    "παρακαλέω": 27, "πείθω": 27, "τρεῖς, τρία": 27,
    // Chapter 28
    "ἀσπάζομαι": 28, "γραμματεύς, -έως, ὁ": 28, "ἔφη": 28,
    "ἱερόν, -οῦ, τό": 28, "κράζω": 28, "οὐχί": 28,
    "παιδίον, -ου, τό": 28, "σπείρω": 28,
    // Chapter 29
    "δέχομαι": 29, "δοκέω": 29, "ἐσθίω": 29, "πέμπω": 29, "φέρω": 29,
    // Chapter 30
    "μηδέ": 30, "πρεσβύτερος, -α, -ον": 30,
    // Chapter 31
    "λίθος": 31, "τοιοῦτος, -αύτη, -οῦτον": 31,
    // Chapter 32
    "δίκαιος, -αία, -αιον": 32, "μέλλω": 32,
    // Chapter 33
    "ἀπόλλυμι": 33, "ἀπολύω": 33, "εἴτε": 33,
    // Chapter 34
    "δίδωμι": 34, "ἔθνος, -ους, τό": 34, "λοιπός, -ή, -όν": 34,
    "Μωϋσῆς, -έως, ὁ": 34, "παραδίδωμι": 34, "πίπτω": 34, "ὑπάρχω": 34,
};

// Maps definition/notes keywords to chapters (for paradigm cards)
// This lets verb endings, noun endings, etc. get chapter assignments
const DEFINITION_CHAPTER_MAP = [
    // Participles (Mounce ch 27-29) — must come before adjective rules
    // since some participle cards share adjective-pattern notes like "2-1-2"
    { match: "Pres. Act. Participle", chapter: 27 },
    { match: "Pres. Mid/Pass Participle", chapter: 27 },
    { match: "1st Aor. Act. Participle", chapter: 28 },
    { match: "1st Aor. Mid. Participle", chapter: 28 },
    { match: "1st Aor. Pass. Participle", chapter: 28 },
    { match: "Perf. Act. Participle", chapter: 29 },
    { match: "Perf. Mid/Pass Participle", chapter: 29 },
    // Nouns & Article (ch 6 = nom/acc, ch 7 = gen/dat, ch 10 = 3rd decl)
    { match: "Article", chapter: 6 },
    { match: "2nd Decl", chapter: 6 },
    { match: "1st Decl", chapter: 6 },
    { match: "3rd Decl", chapter: 10 },
    { match: "Square of Stops", chapter: 10 },
    // Adjectives (ch 9)
    { match: "2-1-2 pattern", chapter: 9 },
    { match: "2-2 pattern", chapter: 9 },
    { match: "3-1-3", chapter: 9 },
    { match: "Comparative", chapter: 13 },
    { match: "Attributive", chapter: 9 },
    { match: "Predicate", chapter: 9 },
    { match: "Substantival", chapter: 9 },
    { match: "Modifies the noun", chapter: 9 },
    { match: "stands in place of a noun", chapter: 9 },
    { match: "'is' statement", chapter: 9 },
    // Verb paradigms
    { match: "Present Active Indicative", chapter: 16 },
    { match: "Primary active ending", chapter: 16 },
    { match: "Present Mid/Pass Indicative", chapter: 18 },
    { match: "Primary mid/pass ending", chapter: 18 },
    { match: "εἰμί conjugation", chapter: 8 },
    { match: "εἰμί Pres", chapter: 8 },
    { match: "Future Active Indicative", chapter: 19 },
    { match: "Future active", chapter: 19 },
    { match: "Future Middle Indicative", chapter: 19 },
    { match: "Future middle", chapter: 19 },
    { match: "εἰμί future", chapter: 19 },
    { match: "εἰμί Fut", chapter: 19 },
    { match: "Liquid future", chapter: 20 },
    { match: "Liquid Future", chapter: 20 },
    { match: "Future Liquid", chapter: 20 },
    { match: "Imperfect Active Indicative", chapter: 21 },
    { match: "Secondary active", chapter: 21 },
    { match: "Imperfect Mid/Pass Indicative", chapter: 21 },
    { match: "Secondary mid/pass", chapter: 21 },
    { match: "εἰμί imperfect", chapter: 21 },
    { match: "εἰμί Impf", chapter: 21 },
    { match: "1st Aorist", chapter: 22 },
    { match: "Perfect Active Indicative", chapter: 25 },
    { match: "Perfect active", chapter: 25 },
    { match: "Perfect Mid/Pass Indicative", chapter: 25 },
    { match: "Perfect mid/pass", chapter: 25 },
    { match: "Subjunctive", chapter: 31 },
    { match: "εἰμί subjunctive", chapter: 31 },
    { match: "εἰμί Subj", chapter: 31 },
    { match: "Infinitive", chapter: 16 },
    { match: "εἰμί infinitive", chapter: 8 },
    { match: "Future Passive", chapter: 24 },
    { match: "Future passive", chapter: 24 },
    // Pronouns
    { match: "Relative pronoun", chapter: 14 },
    { match: "3rd person pronoun", chapter: 12 },
    { match: "demonstrative", chapter: 13 },
    { match: "Demonstrative", chapter: 13 },
    { match: "Reflexive", chapter: 13 },
    { match: "Reciprocal", chapter: 9 },
    { match: "Personal pronoun", chapter: 11 },
    { match: "Interrogative", chapter: 10 },
    { match: "Indefinite", chapter: 10 },
];

// Chapter descriptions for the UI
const CHAPTER_INFO = {
    4: "The Alphabet & First Words",
    6: "Nominative & Accusative; Article",
    7: "Genitive & Dative",
    8: "Prepositions & εἰμί",
    9: "Adjectives",
    10: "Third Declension",
    11: "First/Second Person; More 3rd Decl.",
    12: "αὐτός; More Pronouns",
    13: "Demonstratives; Comparatives",
    14: "Relative Pronouns",
    16: "Present Active Indicative",
    17: "Contract Verbs",
    18: "Deponent Verbs",
    19: "Future Active/Middle",
    20: "Verbal Roots & Liquid Futures",
    21: "Imperfect Tense",
    22: "Second Aorist",
    23: "First Aorist",
    24: "Aorist Passive; Future Passive",
    25: "Perfect Tense",
    27: "Present Participles",
    28: "Aorist Participles",
    29: "Perfect Participles",
    30: "Infinitives",
    31: "Subjunctive Mood",
    32: "Imperative; Conditional",
    33: "-μι Verbs",
    34: "More -μι Verbs; πίπτω",
};
