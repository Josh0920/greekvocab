// ============================================================
// Koine Greek Noun Declension Lexicon
// Structure: { [nounKey]: { meaning, gender, declension, forms: { case: [singular, plural] } } }
//   OR multi-gender: { meaning, type, genderForms: { case: [m.sg, f.sg, n.sg, m.pl, f.pl, n.pl] } }
// Cases: Nom, Gen, Dat, Acc, Voc (where applicable)
// ============================================================

const NOUN_LEXICON = {

  // ========================
  // Article
  // ========================
  "ὁ, ἡ, τό": {
    meaning: "the (definite article)",
    type: "article",
    genderForms: {
      "Nominative": ["ὁ", "ἡ", "τό", "οἱ", "αἱ", "τά"],
      "Genitive": ["τοῦ", "τῆς", "τοῦ", "τῶν", "τῶν", "τῶν"],
      "Dative": ["τῷ", "τῇ", "τῷ", "τοῖς", "ταῖς", "τοῖς"],
      "Accusative": ["τόν", "τήν", "τό", "τούς", "τάς", "τά"],
    }
  },

  // ========================
  // Pronouns (multi-gender)
  // ========================
  "αὐτός, -ή, -ό": {
    meaning: "he/she/it; self; same",
    type: "pronoun",
    genderForms: {
      "Nominative": ["αὐτός", "αὐτή", "αὐτό", "αὐτοί", "αὐταί", "αὐτά"],
      "Genitive": ["αὐτοῦ", "αὐτῆς", "αὐτοῦ", "αὐτῶν", "αὐτῶν", "αὐτῶν"],
      "Dative": ["αὐτῷ", "αὐτῇ", "αὐτῷ", "αὐτοῖς", "αὐταῖς", "αὐτοῖς"],
      "Accusative": ["αὐτόν", "αὐτήν", "αὐτό", "αὐτούς", "αὐτάς", "αὐτά"],
    }
  },
  "ἐγώ": {
    meaning: "I, me",
    type: "pronoun",
    forms: {
      "Nominative": ["ἐγώ", "ἡμεῖς"],
      "Genitive": ["ἐμοῦ / μου", "ἡμῶν"],
      "Dative": ["ἐμοί / μοι", "ἡμῖν"],
      "Accusative": ["ἐμέ / με", "ἡμᾶς"],
    }
  },
  "σύ": {
    meaning: "you (singular)",
    type: "pronoun",
    forms: {
      "Nominative": ["σύ", "ὑμεῖς"],
      "Genitive": ["σοῦ / σου", "ὑμῶν"],
      "Dative": ["σοί / σοι", "ὑμῖν"],
      "Accusative": ["σέ / σε", "ὑμᾶς"],
    }
  },
  "ὅς, ἥ, ὅ": {
    meaning: "who, which, that (relative pronoun)",
    type: "pronoun",
    genderForms: {
      "Nominative": ["ὅς", "ἥ", "ὅ", "οἵ", "αἵ", "ἅ"],
      "Genitive": ["οὗ", "ἧς", "οὗ", "ὧν", "ὧν", "ὧν"],
      "Dative": ["ᾧ", "ᾗ", "ᾧ", "οἷς", "αἷς", "οἷς"],
      "Accusative": ["ὅν", "ἥν", "ὅ", "οὕς", "ἅς", "ἅ"],
    }
  },
  "οὗτος, αὕτη, τοῦτο": {
    meaning: "this, these",
    type: "pronoun",
    genderForms: {
      "Nominative": ["οὗτος", "αὕτη", "τοῦτο", "οὗτοι", "αὗται", "ταῦτα"],
      "Genitive": ["τούτου", "ταύτης", "τούτου", "τούτων", "τούτων", "τούτων"],
      "Dative": ["τούτῳ", "ταύτῃ", "τούτῳ", "τούτοις", "ταύταις", "τούτοις"],
      "Accusative": ["τοῦτον", "ταύτην", "τοῦτο", "τούτους", "ταύτας", "ταῦτα"],
    }
  },
  "ἐκεῖνος, -η, -ο": {
    meaning: "that, those",
    type: "pronoun",
    genderForms: {
      "Nominative": ["ἐκεῖνος", "ἐκείνη", "ἐκεῖνο", "ἐκεῖνοι", "ἐκεῖναι", "ἐκεῖνα"],
      "Genitive": ["ἐκείνου", "ἐκείνης", "ἐκείνου", "ἐκείνων", "ἐκείνων", "ἐκείνων"],
      "Dative": ["ἐκείνῳ", "ἐκείνῃ", "ἐκείνῳ", "ἐκείνοις", "ἐκείναις", "ἐκείνοις"],
      "Accusative": ["ἐκεῖνον", "ἐκείνην", "ἐκεῖνο", "ἐκείνους", "ἐκείνας", "ἐκεῖνα"],
    }
  },
  "τίς, τί": {
    meaning: "who? what? (interrogative)",
    type: "pronoun",
    genderForms: {
      "Nominative": ["τίς", "τίς", "τί", "τίνες", "τίνες", "τίνα"],
      "Genitive": ["τίνος", "τίνος", "τίνος", "τίνων", "τίνων", "τίνων"],
      "Dative": ["τίνι", "τίνι", "τίνι", "τίσι(ν)", "τίσι(ν)", "τίσι(ν)"],
      "Accusative": ["τίνα", "τίνα", "τί", "τίνας", "τίνας", "τίνα"],
    }
  },
  "τις, τι": {
    meaning: "someone, something; a certain (indefinite)",
    type: "pronoun",
    genderForms: {
      "Nominative": ["τις", "τις", "τι", "τινές", "τινές", "τινά"],
      "Genitive": ["τινός", "τινός", "τινός", "τινῶν", "τινῶν", "τινῶν"],
      "Dative": ["τινί", "τινί", "τινί", "τισί(ν)", "τισί(ν)", "τισί(ν)"],
      "Accusative": ["τινά", "τινά", "τι", "τινάς", "τινάς", "τινά"],
    }
  },

  // ========================
  // Adjectives (multi-gender)
  // ========================
  "πᾶς, πᾶσα, πᾶν": {
    meaning: "each, every; all",
    type: "adjective",
    genderForms: {
      "Nominative": ["πᾶς", "πᾶσα", "πᾶν", "πάντες", "πᾶσαι", "πάντα"],
      "Genitive": ["παντός", "πάσης", "παντός", "πάντων", "πασῶν", "πάντων"],
      "Dative": ["παντί", "πάσῃ", "παντί", "πᾶσι(ν)", "πάσαις", "πᾶσι(ν)"],
      "Accusative": ["πάντα", "πᾶσαν", "πᾶν", "πάντας", "πάσας", "πάντα"],
    }
  },
  "μέγας, μεγάλη, μέγα": {
    meaning: "large, great",
    type: "adjective",
    genderForms: {
      "Nominative": ["μέγας", "μεγάλη", "μέγα", "μεγάλοι", "μεγάλαι", "μεγάλα"],
      "Genitive": ["μεγάλου", "μεγάλης", "μεγάλου", "μεγάλων", "μεγάλων", "μεγάλων"],
      "Dative": ["μεγάλῳ", "μεγάλῃ", "μεγάλῳ", "μεγάλοις", "μεγάλαις", "μεγάλοις"],
      "Accusative": ["μέγαν", "μεγάλην", "μέγα", "μεγάλους", "μεγάλας", "μεγάλα"],
    }
  },
  "πολύς, πολλή, πολύ": {
    meaning: "much, many",
    type: "adjective",
    genderForms: {
      "Nominative": ["πολύς", "πολλή", "πολύ", "πολλοί", "πολλαί", "πολλά"],
      "Genitive": ["πολλοῦ", "πολλῆς", "πολλοῦ", "πολλῶν", "πολλῶν", "πολλῶν"],
      "Dative": ["πολλῷ", "πολλῇ", "πολλῷ", "πολλοῖς", "πολλαῖς", "πολλοῖς"],
      "Accusative": ["πολύν", "πολλήν", "πολύ", "πολλούς", "πολλάς", "πολλά"],
    }
  },

  // ========================
  // 2nd Declension Masculine (-ος)
  // ========================
  "λόγος": {
    meaning: "word, statement, message",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["λόγος", "λόγοι"],
      "Genitive": ["λόγου", "λόγων"],
      "Dative": ["λόγῳ", "λόγοις"],
      "Accusative": ["λόγον", "λόγους"],
    }
  },
  "ἄγγελος": {
    meaning: "angel, messenger",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["ἄγγελος", "ἄγγελοι"],
      "Genitive": ["ἀγγέλου", "ἀγγέλων"],
      "Dative": ["ἀγγέλῳ", "ἀγγέλοις"],
      "Accusative": ["ἄγγελον", "ἀγγέλους"],
    }
  },
  "ἄνθρωπος": {
    meaning: "man, human being, person",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["ἄνθρωπος", "ἄνθρωποι"],
      "Genitive": ["ἀνθρώπου", "ἀνθρώπων"],
      "Dative": ["ἀνθρώπῳ", "ἀνθρώποις"],
      "Accusative": ["ἄνθρωπον", "ἀνθρώπους"],
    }
  },
  "ἀδελφός": {
    meaning: "brother",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["ἀδελφός", "ἀδελφοί"],
      "Genitive": ["ἀδελφοῦ", "ἀδελφῶν"],
      "Dative": ["ἀδελφῷ", "ἀδελφοῖς"],
      "Accusative": ["ἀδελφόν", "ἀδελφούς"],
    }
  },
  "ἀπόστολος": {
    meaning: "apostle, messenger",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["ἀπόστολος", "ἀπόστολοι"],
      "Genitive": ["ἀποστόλου", "ἀποστόλων"],
      "Dative": ["ἀποστόλῳ", "ἀποστόλοις"],
      "Accusative": ["ἀπόστολον", "ἀποστόλους"],
    }
  },
  "ἄρτος": {
    meaning: "bread, loaf, food",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["ἄρτος", "ἄρτοι"],
      "Genitive": ["ἄρτου", "ἄρτων"],
      "Dative": ["ἄρτῳ", "ἄρτοις"],
      "Accusative": ["ἄρτον", "ἄρτους"],
    }
  },
  "διδάσκαλος": {
    meaning: "teacher",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["διδάσκαλος", "διδάσκαλοι"],
      "Genitive": ["διδασκάλου", "διδασκάλων"],
      "Dative": ["διδασκάλῳ", "διδασκάλοις"],
      "Accusative": ["διδάσκαλον", "διδασκάλους"],
    }
  },
  "δοῦλος": {
    meaning: "slave, servant",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["δοῦλος", "δοῦλοι"],
      "Genitive": ["δούλου", "δούλων"],
      "Dative": ["δούλῳ", "δούλοις"],
      "Accusative": ["δοῦλον", "δούλους"],
    }
  },
  "θάνατος": {
    meaning: "death",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["θάνατος", "θάνατοι"],
      "Genitive": ["θανάτου", "θανάτων"],
      "Dative": ["θανάτῳ", "θανάτοις"],
      "Accusative": ["θάνατον", "θανάτους"],
    }
  },
  "θεός": {
    meaning: "God, god",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["θεός", "θεοί"],
      "Genitive": ["θεοῦ", "θεῶν"],
      "Dative": ["θεῷ", "θεοῖς"],
      "Accusative": ["θεόν", "θεούς"],
    }
  },
  "θρόνος": {
    meaning: "throne",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["θρόνος", "θρόνοι"],
      "Genitive": ["θρόνου", "θρόνων"],
      "Dative": ["θρόνῳ", "θρόνοις"],
      "Accusative": ["θρόνον", "θρόνους"],
    }
  },
  "καιρός": {
    meaning: "time, season, opportunity",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["καιρός", "καιροί"],
      "Genitive": ["καιροῦ", "καιρῶν"],
      "Dative": ["καιρῷ", "καιροῖς"],
      "Accusative": ["καιρόν", "καιρούς"],
    }
  },
  "κόσμος": {
    meaning: "world, universe",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["κόσμος", "κόσμοι"],
      "Genitive": ["κόσμου", "κόσμων"],
      "Dative": ["κόσμῳ", "κόσμοις"],
      "Accusative": ["κόσμον", "κόσμους"],
    }
  },
  "κύριος": {
    meaning: "Lord, lord, master",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["κύριος", "κύριοι"],
      "Genitive": ["κυρίου", "κυρίων"],
      "Dative": ["κυρίῳ", "κυρίοις"],
      "Accusative": ["κύριον", "κυρίους"],
    }
  },
  "λαός": {
    meaning: "people, crowd",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["λαός", "λαοί"],
      "Genitive": ["λαοῦ", "λαῶν"],
      "Dative": ["λαῷ", "λαοῖς"],
      "Accusative": ["λαόν", "λαούς"],
    }
  },
  "νόμος": {
    meaning: "law",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["νόμος", "νόμοι"],
      "Genitive": ["νόμου", "νόμων"],
      "Dative": ["νόμῳ", "νόμοις"],
      "Accusative": ["νόμον", "νόμους"],
    }
  },
  "οἶκος": {
    meaning: "house, home",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["οἶκος", "οἶκοι"],
      "Genitive": ["οἴκου", "οἴκων"],
      "Dative": ["οἴκῳ", "οἴκοις"],
      "Accusative": ["οἶκον", "οἴκους"],
    }
  },
  "ὄχλος": {
    meaning: "crowd, multitude",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["ὄχλος", "ὄχλοι"],
      "Genitive": ["ὄχλου", "ὄχλων"],
      "Dative": ["ὄχλῳ", "ὄχλοις"],
      "Accusative": ["ὄχλον", "ὄχλους"],
    }
  },
  "ὀφθαλμός": {
    meaning: "eye, sight",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["ὀφθαλμός", "ὀφθαλμοί"],
      "Genitive": ["ὀφθαλμοῦ", "ὀφθαλμῶν"],
      "Dative": ["ὀφθαλμῷ", "ὀφθαλμοῖς"],
      "Accusative": ["ὀφθαλμόν", "ὀφθαλμούς"],
    }
  },
  "τόπος": {
    meaning: "place, location",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["τόπος", "τόποι"],
      "Genitive": ["τόπου", "τόπων"],
      "Dative": ["τόπῳ", "τόποις"],
      "Accusative": ["τόπον", "τόπους"],
    }
  },
  "υἱός": {
    meaning: "son",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["υἱός", "υἱοί"],
      "Genitive": ["υἱοῦ", "υἱῶν"],
      "Dative": ["υἱῷ", "υἱοῖς"],
      "Accusative": ["υἱόν", "υἱούς"],
    }
  },
  "χρόνος": {
    meaning: "time",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["χρόνος", "χρόνοι"],
      "Genitive": ["χρόνου", "χρόνων"],
      "Dative": ["χρόνῳ", "χρόνοις"],
      "Accusative": ["χρόνον", "χρόνους"],
    }
  },
  "οὐρανός": {
    meaning: "heaven, sky",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["οὐρανός", "οὐρανοί"],
      "Genitive": ["οὐρανοῦ", "οὐρανῶν"],
      "Dative": ["οὐρανῷ", "οὐρανοῖς"],
      "Accusative": ["οὐρανόν", "οὐρανούς"],
    }
  },
  "λίθος": {
    meaning: "stone",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["λίθος", "λίθοι"],
      "Genitive": ["λίθου", "λίθων"],
      "Dative": ["λίθῳ", "λίθοις"],
      "Accusative": ["λίθον", "λίθους"],
    }
  },
  "φόβος": {
    meaning: "fear, terror",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["φόβος", "φόβοι"],
      "Genitive": ["φόβου", "φόβων"],
      "Dative": ["φόβῳ", "φόβοις"],
      "Accusative": ["φόβον", "φόβους"],
    }
  },
  "καρπός": {
    meaning: "fruit, crop, result",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["καρπός", "καρποί"],
      "Genitive": ["καρποῦ", "καρπῶν"],
      "Dative": ["καρπῷ", "καρποῖς"],
      "Accusative": ["καρπόν", "καρπούς"],
    }
  },
  "ναός": {
    meaning: "temple",
    gender: "masculine", declension: "2nd",
    forms: {
      "Nominative": ["ναός", "ναοί"],
      "Genitive": ["ναοῦ", "ναῶν"],
      "Dative": ["ναῷ", "ναοῖς"],
      "Accusative": ["ναόν", "ναούς"],
    }
  },

  // 2nd Declension Feminine (-ος)
  "ὁδός": {
    meaning: "way, road, journey",
    gender: "feminine", declension: "2nd",
    forms: {
      "Nominative": ["ὁδός", "ὁδοί"],
      "Genitive": ["ὁδοῦ", "ὁδῶν"],
      "Dative": ["ὁδῷ", "ὁδοῖς"],
      "Accusative": ["ὁδόν", "ὁδούς"],
    }
  },
  "ἔρημος": {
    meaning: "desert, wilderness",
    gender: "feminine", declension: "2nd",
    forms: {
      "Nominative": ["ἔρημος", "ἔρημοι"],
      "Genitive": ["ἐρήμου", "ἐρήμων"],
      "Dative": ["ἐρήμῳ", "ἐρήμοις"],
      "Accusative": ["ἔρημον", "ἐρήμους"],
    }
  },

  // ========================
  // 2nd Declension Neuter (-ον)
  // ========================
  "ἔργον": {
    meaning: "work, deed, action",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["ἔργον", "ἔργα"],
      "Genitive": ["ἔργου", "ἔργων"],
      "Dative": ["ἔργῳ", "ἔργοις"],
      "Accusative": ["ἔργον", "ἔργα"],
    }
  },
  "τέκνον": {
    meaning: "child",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["τέκνον", "τέκνα"],
      "Genitive": ["τέκνου", "τέκνων"],
      "Dative": ["τέκνῳ", "τέκνοις"],
      "Accusative": ["τέκνον", "τέκνα"],
    }
  },
  "εὐαγγέλιον": {
    meaning: "good news, gospel",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["εὐαγγέλιον", "εὐαγγέλια"],
      "Genitive": ["εὐαγγελίου", "εὐαγγελίων"],
      "Dative": ["εὐαγγελίῳ", "εὐαγγελίοις"],
      "Accusative": ["εὐαγγέλιον", "εὐαγγέλια"],
    }
  },
  "δαιμόνιον": {
    meaning: "demon",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["δαιμόνιον", "δαιμόνια"],
      "Genitive": ["δαιμονίου", "δαιμονίων"],
      "Dative": ["δαιμονίῳ", "δαιμονίοις"],
      "Accusative": ["δαιμόνιον", "δαιμόνια"],
    }
  },
  "ἱμάτιον": {
    meaning: "garment, cloak",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["ἱμάτιον", "ἱμάτια"],
      "Genitive": ["ἱματίου", "ἱματίων"],
      "Dative": ["ἱματίῳ", "ἱματίοις"],
      "Accusative": ["ἱμάτιον", "ἱμάτια"],
    }
  },
  "πλοῖον": {
    meaning: "boat, ship",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["πλοῖον", "πλοῖα"],
      "Genitive": ["πλοίου", "πλοίων"],
      "Dative": ["πλοίῳ", "πλοίοις"],
      "Accusative": ["πλοῖον", "πλοῖα"],
    }
  },
  "πρόσωπον": {
    meaning: "face, appearance",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["πρόσωπον", "πρόσωπα"],
      "Genitive": ["προσώπου", "προσώπων"],
      "Dative": ["προσώπῳ", "προσώποις"],
      "Accusative": ["πρόσωπον", "πρόσωπα"],
    }
  },
  "σάββατον": {
    meaning: "Sabbath, week",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["σάββατον", "σάββατα"],
      "Genitive": ["σαββάτου", "σαββάτων"],
      "Dative": ["σαββάτῳ", "σαββάτοις"],
      "Accusative": ["σάββατον", "σάββατα"],
    }
  },
  "σημεῖον": {
    meaning: "sign, miracle",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["σημεῖον", "σημεῖα"],
      "Genitive": ["σημείου", "σημείων"],
      "Dative": ["σημείῳ", "σημείοις"],
      "Accusative": ["σημεῖον", "σημεῖα"],
    }
  },
  "ἱερόν": {
    meaning: "temple",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["ἱερόν", "ἱερά"],
      "Genitive": ["ἱεροῦ", "ἱερῶν"],
      "Dative": ["ἱερῷ", "ἱεροῖς"],
      "Accusative": ["ἱερόν", "ἱερά"],
    }
  },
  "μνημεῖον": {
    meaning: "tomb, monument",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["μνημεῖον", "μνημεῖα"],
      "Genitive": ["μνημείου", "μνημείων"],
      "Dative": ["μνημείῳ", "μνημείοις"],
      "Accusative": ["μνημεῖον", "μνημεῖα"],
    }
  },

  // ========================
  // 1st Declension Feminine (-η)
  // ========================
  "ἀγάπη": {
    meaning: "love",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["ἀγάπη", "ἀγάπαι"],
      "Genitive": ["ἀγάπης", "ἀγαπῶν"],
      "Dative": ["ἀγάπῃ", "ἀγάπαις"],
      "Accusative": ["ἀγάπην", "ἀγάπας"],
    }
  },
  "ἀρχή": {
    meaning: "beginning, ruler",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["ἀρχή", "ἀρχαί"],
      "Genitive": ["ἀρχῆς", "ἀρχῶν"],
      "Dative": ["ἀρχῇ", "ἀρχαῖς"],
      "Accusative": ["ἀρχήν", "ἀρχάς"],
    }
  },
  "γραφή": {
    meaning: "writing, Scripture",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["γραφή", "γραφαί"],
      "Genitive": ["γραφῆς", "γραφῶν"],
      "Dative": ["γραφῇ", "γραφαῖς"],
      "Accusative": ["γραφήν", "γραφάς"],
    }
  },
  "δικαιοσύνη": {
    meaning: "righteousness, justice",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["δικαιοσύνη", "δικαιοσύναι"],
      "Genitive": ["δικαιοσύνης", "δικαιοσυνῶν"],
      "Dative": ["δικαιοσύνῃ", "δικαιοσύναις"],
      "Accusative": ["δικαιοσύνην", "δικαιοσύνας"],
    }
  },
  "εἰρήνη": {
    meaning: "peace",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["εἰρήνη", "εἰρῆναι"],
      "Genitive": ["εἰρήνης", "εἰρηνῶν"],
      "Dative": ["εἰρήνῃ", "εἰρήναις"],
      "Accusative": ["εἰρήνην", "εἰρήνας"],
    }
  },
  "ἐντολή": {
    meaning: "commandment",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["ἐντολή", "ἐντολαί"],
      "Genitive": ["ἐντολῆς", "ἐντολῶν"],
      "Dative": ["ἐντολῇ", "ἐντολαῖς"],
      "Accusative": ["ἐντολήν", "ἐντολάς"],
    }
  },
  "ζωή": {
    meaning: "life",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["ζωή", "ζωαί"],
      "Genitive": ["ζωῆς", "ζωῶν"],
      "Dative": ["ζωῇ", "ζωαῖς"],
      "Accusative": ["ζωήν", "ζωάς"],
    }
  },
  "κεφαλή": {
    meaning: "head",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["κεφαλή", "κεφαλαί"],
      "Genitive": ["κεφαλῆς", "κεφαλῶν"],
      "Dative": ["κεφαλῇ", "κεφαλαῖς"],
      "Accusative": ["κεφαλήν", "κεφαλάς"],
    }
  },
  "παραβολή": {
    meaning: "parable",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["παραβολή", "παραβολαί"],
      "Genitive": ["παραβολῆς", "παραβολῶν"],
      "Dative": ["παραβολῇ", "παραβολαῖς"],
      "Accusative": ["παραβολήν", "παραβολάς"],
    }
  },
  "συναγωγή": {
    meaning: "synagogue, assembly",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["συναγωγή", "συναγωγαί"],
      "Genitive": ["συναγωγῆς", "συναγωγῶν"],
      "Dative": ["συναγωγῇ", "συναγωγαῖς"],
      "Accusative": ["συναγωγήν", "συναγωγάς"],
    }
  },
  "φωνή": {
    meaning: "voice, sound",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["φωνή", "φωναί"],
      "Genitive": ["φωνῆς", "φωνῶν"],
      "Dative": ["φωνῇ", "φωναῖς"],
      "Accusative": ["φωνήν", "φωνάς"],
    }
  },
  "ψυχή": {
    meaning: "soul, life, self",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["ψυχή", "ψυχαί"],
      "Genitive": ["ψυχῆς", "ψυχῶν"],
      "Dative": ["ψυχῇ", "ψυχαῖς"],
      "Accusative": ["ψυχήν", "ψυχάς"],
    }
  },

  // ========================
  // 1st Declension Feminine (-α)
  // ========================
  "ἀλήθεια": {
    meaning: "truth",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["ἀλήθεια", "ἀλήθειαι"],
      "Genitive": ["ἀληθείας", "ἀληθειῶν"],
      "Dative": ["ἀληθείᾳ", "ἀληθείαις"],
      "Accusative": ["ἀλήθειαν", "ἀληθείας"],
    }
  },
  "βασιλεία": {
    meaning: "kingdom, reign",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["βασιλεία", "βασιλεῖαι"],
      "Genitive": ["βασιλείας", "βασιλειῶν"],
      "Dative": ["βασιλείᾳ", "βασιλείαις"],
      "Accusative": ["βασιλείαν", "βασιλείας"],
    }
  },
  "δόξα": {
    meaning: "glory, majesty, fame",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["δόξα", "δόξαι"],
      "Genitive": ["δόξης", "δοξῶν"],
      "Dative": ["δόξῃ", "δόξαις"],
      "Accusative": ["δόξαν", "δόξας"],
    }
  },
  "ἐκκλησία": {
    meaning: "church, assembly",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["ἐκκλησία", "ἐκκλησίαι"],
      "Genitive": ["ἐκκλησίας", "ἐκκλησιῶν"],
      "Dative": ["ἐκκλησίᾳ", "ἐκκλησίαις"],
      "Accusative": ["ἐκκλησίαν", "ἐκκλησίας"],
    }
  },
  "ἐξουσία": {
    meaning: "authority, power",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["ἐξουσία", "ἐξουσίαι"],
      "Genitive": ["ἐξουσίας", "ἐξουσιῶν"],
      "Dative": ["ἐξουσίᾳ", "ἐξουσίαις"],
      "Accusative": ["ἐξουσίαν", "ἐξουσίας"],
    }
  },
  "ἐπαγγελία": {
    meaning: "promise",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["ἐπαγγελία", "ἐπαγγελίαι"],
      "Genitive": ["ἐπαγγελίας", "ἐπαγγελιῶν"],
      "Dative": ["ἐπαγγελίᾳ", "ἐπαγγελίαις"],
      "Accusative": ["ἐπαγγελίαν", "ἐπαγγελίας"],
    }
  },
  "ἡμέρα": {
    meaning: "day",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["ἡμέρα", "ἡμέραι"],
      "Genitive": ["ἡμέρας", "ἡμερῶν"],
      "Dative": ["ἡμέρᾳ", "ἡμέραις"],
      "Accusative": ["ἡμέραν", "ἡμέρας"],
    }
  },
  "θάλασσα": {
    meaning: "sea, lake",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["θάλασσα", "θάλασσαι"],
      "Genitive": ["θαλάσσης", "θαλασσῶν"],
      "Dative": ["θαλάσσῃ", "θαλάσσαις"],
      "Accusative": ["θάλασσαν", "θαλάσσας"],
    }
  },
  "καρδία": {
    meaning: "heart",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["καρδία", "καρδίαι"],
      "Genitive": ["καρδίας", "καρδιῶν"],
      "Dative": ["καρδίᾳ", "καρδίαις"],
      "Accusative": ["καρδίαν", "καρδίας"],
    }
  },
  "οἰκία": {
    meaning: "house, home, household",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["οἰκία", "οἰκίαι"],
      "Genitive": ["οἰκίας", "οἰκιῶν"],
      "Dative": ["οἰκίᾳ", "οἰκίαις"],
      "Accusative": ["οἰκίαν", "οἰκίας"],
    }
  },
  "ὥρα": {
    meaning: "hour, time",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["ὥρα", "ὧραι"],
      "Genitive": ["ὥρας", "ὡρῶν"],
      "Dative": ["ὥρᾳ", "ὥραις"],
      "Accusative": ["ὥραν", "ὥρας"],
    }
  },
  "γλῶσσα": {
    meaning: "tongue, language",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["γλῶσσα", "γλῶσσαι"],
      "Genitive": ["γλώσσης", "γλωσσῶν"],
      "Dative": ["γλώσσῃ", "γλώσσαις"],
      "Accusative": ["γλῶσσαν", "γλώσσας"],
    }
  },
  "χαρά": {
    meaning: "joy, delight",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["χαρά", "χαραί"],
      "Genitive": ["χαρᾶς", "χαρῶν"],
      "Dative": ["χαρᾷ", "χαραῖς"],
      "Accusative": ["χαράν", "χαράς"],
    }
  },

  // ========================
  // 1st Declension Masculine (-ης / -ας)
  // ========================
  "μαθητής": {
    meaning: "disciple, student",
    gender: "masculine", declension: "1st",
    forms: {
      "Nominative": ["μαθητής", "μαθηταί"],
      "Genitive": ["μαθητοῦ", "μαθητῶν"],
      "Dative": ["μαθητῇ", "μαθηταῖς"],
      "Accusative": ["μαθητήν", "μαθητάς"],
    }
  },
  "προφήτης": {
    meaning: "prophet",
    gender: "masculine", declension: "1st",
    forms: {
      "Nominative": ["προφήτης", "προφῆται"],
      "Genitive": ["προφήτου", "προφητῶν"],
      "Dative": ["προφήτῃ", "προφήταις"],
      "Accusative": ["προφήτην", "προφήτας"],
    }
  },

  // ========================
  // 3rd Declension
  // ========================

  // -ματ- stems (neuter)
  "ὄνομα": {
    meaning: "name",
    gender: "neuter", declension: "3rd",
    forms: {
      "Nominative": ["ὄνομα", "ὀνόματα"],
      "Genitive": ["ὀνόματος", "ὀνομάτων"],
      "Dative": ["ὀνόματι", "ὀνόμασι(ν)"],
      "Accusative": ["ὄνομα", "ὀνόματα"],
    }
  },
  "πνεῦμα": {
    meaning: "spirit, wind, breath",
    gender: "neuter", declension: "3rd",
    forms: {
      "Nominative": ["πνεῦμα", "πνεύματα"],
      "Genitive": ["πνεύματος", "πνευμάτων"],
      "Dative": ["πνεύματι", "πνεύμασι(ν)"],
      "Accusative": ["πνεῦμα", "πνεύματα"],
    }
  },
  "σῶμα": {
    meaning: "body",
    gender: "neuter", declension: "3rd",
    forms: {
      "Nominative": ["σῶμα", "σώματα"],
      "Genitive": ["σώματος", "σωμάτων"],
      "Dative": ["σώματι", "σώμασι(ν)"],
      "Accusative": ["σῶμα", "σώματα"],
    }
  },
  "θέλημα": {
    meaning: "will, desire",
    gender: "neuter", declension: "3rd",
    forms: {
      "Nominative": ["θέλημα", "θελήματα"],
      "Genitive": ["θελήματος", "θελημάτων"],
      "Dative": ["θελήματι", "θελήμασι(ν)"],
      "Accusative": ["θέλημα", "θελήματα"],
    }
  },
  "αἷμα": {
    meaning: "blood",
    gender: "neuter", declension: "3rd",
    forms: {
      "Nominative": ["αἷμα", "αἵματα"],
      "Genitive": ["αἵματος", "αἱμάτων"],
      "Dative": ["αἵματι", "αἵμασι(ν)"],
      "Accusative": ["αἷμα", "αἵματα"],
    }
  },
  "ῥῆμα": {
    meaning: "word, saying",
    gender: "neuter", declension: "3rd",
    forms: {
      "Nominative": ["ῥῆμα", "ῥήματα"],
      "Genitive": ["ῥήματος", "ῥημάτων"],
      "Dative": ["ῥήματι", "ῥήμασι(ν)"],
      "Accusative": ["ῥῆμα", "ῥήματα"],
    }
  },
  "στόμα": {
    meaning: "mouth",
    gender: "neuter", declension: "3rd",
    forms: {
      "Nominative": ["στόμα", "στόματα"],
      "Genitive": ["στόματος", "στομάτων"],
      "Dative": ["στόματι", "στόμασι(ν)"],
      "Accusative": ["στόμα", "στόματα"],
    }
  },

  // -ος stems (neuter)
  "ἔθνος": {
    meaning: "nation; (pl.) Gentiles",
    gender: "neuter", declension: "3rd",
    forms: {
      "Nominative": ["ἔθνος", "ἔθνη"],
      "Genitive": ["ἔθνους", "ἐθνῶν"],
      "Dative": ["ἔθνει", "ἔθνεσι(ν)"],
      "Accusative": ["ἔθνος", "ἔθνη"],
    }
  },

  // Other 3rd declension
  "σάρξ": {
    meaning: "flesh, body",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["σάρξ", "σάρκες"],
      "Genitive": ["σαρκός", "σαρκῶν"],
      "Dative": ["σαρκί", "σαρξί(ν)"],
      "Accusative": ["σάρκα", "σάρκας"],
    }
  },
  "νύξ": {
    meaning: "night",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["νύξ", "νύκτες"],
      "Genitive": ["νυκτός", "νυκτῶν"],
      "Dative": ["νυκτί", "νυξί(ν)"],
      "Accusative": ["νύκτα", "νύκτας"],
    }
  },
  "ἐλπίς": {
    meaning: "hope, expectation",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["ἐλπίς", "ἐλπίδες"],
      "Genitive": ["ἐλπίδος", "ἐλπίδων"],
      "Dative": ["ἐλπίδι", "ἐλπίσι(ν)"],
      "Accusative": ["ἐλπίδα", "ἐλπίδας"],
    }
  },
  "χάρις": {
    meaning: "grace, favor, kindness",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["χάρις", "χάριτες"],
      "Genitive": ["χάριτος", "χαρίτων"],
      "Dative": ["χάριτι", "χάρισι(ν)"],
      "Accusative": ["χάριν", "χάριτας"],
    }
  },
  "πίστις": {
    meaning: "faith, trust, belief",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["πίστις", "πίστεις"],
      "Genitive": ["πίστεως", "πίστεων"],
      "Dative": ["πίστει", "πίστεσι(ν)"],
      "Accusative": ["πίστιν", "πίστεις"],
    }
  },
  "πόλις": {
    meaning: "city",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["πόλις", "πόλεις"],
      "Genitive": ["πόλεως", "πόλεων"],
      "Dative": ["πόλει", "πόλεσι(ν)"],
      "Accusative": ["πόλιν", "πόλεις"],
    }
  },
  "χείρ": {
    meaning: "hand",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["χείρ", "χεῖρες"],
      "Genitive": ["χειρός", "χειρῶν"],
      "Dative": ["χειρί", "χερσί(ν)"],
      "Accusative": ["χεῖρα", "χεῖρας"],
    }
  },
  "γυνή": {
    meaning: "woman, wife",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["γυνή", "γυναῖκες"],
      "Genitive": ["γυναικός", "γυναικῶν"],
      "Dative": ["γυναικί", "γυναιξί(ν)"],
      "Accusative": ["γυναῖκα", "γυναῖκας"],
    }
  },

  // 3rd Declension Masculine
  "αἰών": {
    meaning: "age, eternity",
    gender: "masculine", declension: "3rd",
    forms: {
      "Nominative": ["αἰών", "αἰῶνες"],
      "Genitive": ["αἰῶνος", "αἰώνων"],
      "Dative": ["αἰῶνι", "αἰῶσι(ν)"],
      "Accusative": ["αἰῶνα", "αἰῶνας"],
    }
  },
  "ἀνήρ": {
    meaning: "man, husband",
    gender: "masculine", declension: "3rd",
    forms: {
      "Nominative": ["ἀνήρ", "ἄνδρες"],
      "Genitive": ["ἀνδρός", "ἀνδρῶν"],
      "Dative": ["ἀνδρί", "ἀνδράσι(ν)"],
      "Accusative": ["ἄνδρα", "ἄνδρας"],
    }
  },
  "πατήρ": {
    meaning: "father",
    gender: "masculine", declension: "3rd",
    forms: {
      "Nominative": ["πατήρ", "πατέρες"],
      "Genitive": ["πατρός", "πατέρων"],
      "Dative": ["πατρί", "πατράσι(ν)"],
      "Accusative": ["πατέρα", "πατέρας"],
    }
  },
  "ἄρχων": {
    meaning: "ruler, prince",
    gender: "masculine", declension: "3rd",
    forms: {
      "Nominative": ["ἄρχων", "ἄρχοντες"],
      "Genitive": ["ἄρχοντος", "ἀρχόντων"],
      "Dative": ["ἄρχοντι", "ἄρχουσι(ν)"],
      "Accusative": ["ἄρχοντα", "ἄρχοντας"],
    }
  },
  "πούς": {
    meaning: "foot",
    gender: "masculine", declension: "3rd",
    forms: {
      "Nominative": ["πούς", "πόδες"],
      "Genitive": ["ποδός", "ποδῶν"],
      "Dative": ["ποδί", "ποσί(ν)"],
      "Accusative": ["πόδα", "πόδας"],
    }
  },

  // -ευς stems
  "βασιλεύς": {
    meaning: "king",
    gender: "masculine", declension: "3rd",
    forms: {
      "Nominative": ["βασιλεύς", "βασιλεῖς"],
      "Genitive": ["βασιλέως", "βασιλέων"],
      "Dative": ["βασιλεῖ", "βασιλεῦσι(ν)"],
      "Accusative": ["βασιλέα", "βασιλεῖς"],
    }
  },
  "ἀρχιερεύς": {
    meaning: "high priest, chief priest",
    gender: "masculine", declension: "3rd",
    forms: {
      "Nominative": ["ἀρχιερεύς", "ἀρχιερεῖς"],
      "Genitive": ["ἀρχιερέως", "ἀρχιερέων"],
      "Dative": ["ἀρχιερεῖ", "ἀρχιερεῦσι(ν)"],
      "Accusative": ["ἀρχιερέα", "ἀρχιερεῖς"],
    }
  },
  "γραμματεύς": {
    meaning: "scribe",
    gender: "masculine", declension: "3rd",
    forms: {
      "Nominative": ["γραμματεύς", "γραμματεῖς"],
      "Genitive": ["γραμματέως", "γραμματέων"],
      "Dative": ["γραμματεῖ", "γραμματεῦσι(ν)"],
      "Accusative": ["γραμματέα", "γραμματεῖς"],
    }
  },
  "ἱερεύς": {
    meaning: "priest",
    gender: "masculine", declension: "3rd",
    forms: {
      "Nominative": ["ἱερεύς", "ἱερεῖς"],
      "Genitive": ["ἱερέως", "ἱερέων"],
      "Dative": ["ἱερεῖ", "ἱερεῦσι(ν)"],
      "Accusative": ["ἱερέα", "ἱερεῖς"],
    }
  },

  // Other 3rd neuter
  "ὕδωρ": {
    meaning: "water",
    gender: "neuter", declension: "3rd",
    forms: {
      "Nominative": ["ὕδωρ", "ὕδατα"],
      "Genitive": ["ὕδατος", "ὑδάτων"],
      "Dative": ["ὕδατι", "ὕδασι(ν)"],
      "Accusative": ["ὕδωρ", "ὕδατα"],
    }
  },
  "φῶς": {
    meaning: "light",
    gender: "neuter", declension: "3rd",
    forms: {
      "Nominative": ["φῶς", "φῶτα"],
      "Genitive": ["φωτός", "φώτων"],
      "Dative": ["φωτί", "φωσί(ν)"],
      "Accusative": ["φῶς", "φῶτα"],
    }
  },
  "πῦρ": {
    meaning: "fire",
    gender: "neuter", declension: "3rd",
    forms: {
      "Nominative": ["πῦρ", "πυρά"],
      "Genitive": ["πυρός", "πυρῶν"],
      "Dative": ["πυρί", "πυροῖς"],
      "Accusative": ["πῦρ", "πυρά"],
    }
  },

  // Irregular / special
  "γῆ": {
    meaning: "earth, land, soil",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["γῆ", "—"],
      "Genitive": ["γῆς", "—"],
      "Dative": ["γῇ", "—"],
      "Accusative": ["γῆν", "—"],
    }
  },

  // ========================
  // Missing nouns from vocabulary
  // ========================
  "σωτήρ": {
    meaning: "savior; deliverer",
    gender: "masculine", declension: "3rd",
    forms: {
      "Nominative": ["σωτήρ", "σωτῆρες"],
      "Genitive": ["σωτῆρος", "σωτήρων"],
      "Dative": ["σωτῆρι", "σωτῆρσι(ν)"],
      "Accusative": ["σωτῆρα", "σωτῆρας"],
    }
  },
  "σωτηρία": {
    meaning: "salvation; deliverance",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["σωτηρία", "σωτηρίαι"],
      "Genitive": ["σωτηρίας", "σωτηριῶν"],
      "Dative": ["σωτηρίᾳ", "σωτηρίαις"],
      "Accusative": ["σωτηρίαν", "σωτηρίας"],
    }
  },
  "ἀνάστασις": {
    meaning: "resurrection",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["ἀνάστασις", "ἀναστάσεις"],
      "Genitive": ["ἀναστάσεως", "ἀναστάσεων"],
      "Dative": ["ἀναστάσει", "ἀναστάσεσι(ν)"],
      "Accusative": ["ἀνάστασιν", "ἀναστάσεις"],
    }
  },
  "θλῖψις": {
    meaning: "affliction, tribulation",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["θλῖψις", "θλίψεις"],
      "Genitive": ["θλίψεως", "θλίψεων"],
      "Dative": ["θλίψει", "θλίψεσι(ν)"],
      "Accusative": ["θλῖψιν", "θλίψεις"],
    }
  },
  "ἱλαστήριον": {
    meaning: "propitiation, expiation, place of atonement",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["ἱλαστήριον", "ἱλαστήρια"],
      "Genitive": ["ἱλαστηρίου", "ἱλαστηρίων"],
      "Dative": ["ἱλαστηρίῳ", "ἱλαστηρίοις"],
      "Accusative": ["ἱλαστήριον", "ἱλαστήρια"],
    }
  },
  "διακονία": {
    meaning: "service, ministry",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["διακονία", "διακονίαι"],
      "Genitive": ["διακονίας", "διακονιῶν"],
      "Dative": ["διακονίᾳ", "διακονίαις"],
      "Accusative": ["διακονίαν", "διακονίας"],
    }
  },
  "παιδίον": {
    meaning: "child, infant",
    gender: "neuter", declension: "2nd",
    forms: {
      "Nominative": ["παιδίον", "παιδία"],
      "Genitive": ["παιδίου", "παιδίων"],
      "Dative": ["παιδίῳ", "παιδίοις"],
      "Accusative": ["παιδίον", "παιδία"],
    }
  },
  "μήτηρ": {
    meaning: "mother",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["μήτηρ", "μητέρες"],
      "Genitive": ["μητρός", "μητέρων"],
      "Dative": ["μητρί", "μητράσι(ν)"],
      "Accusative": ["μητέρα", "μητέρας"],
    }
  },
  "σοφία": {
    meaning: "wisdom",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["σοφία", "σοφίαι"],
      "Genitive": ["σοφίας", "σοφιῶν"],
      "Dative": ["σοφίᾳ", "σοφίαις"],
      "Accusative": ["σοφίαν", "σοφίας"],
    }
  },

  // ========================
  // Adjectives (vocabulary — all 3 genders)
  // Format: [M.sg, F.sg, N.sg, M.pl, F.pl, N.pl]
  // ========================
  "ἀγαθός, -ή, -όν": {
    meaning: "good, useful",
    type: "adjective",
    genderForms: {
      "Nominative": ["ἀγαθός", "ἀγαθή", "ἀγαθόν", "ἀγαθοί", "ἀγαθαί", "ἀγαθά"],
      "Genitive": ["ἀγαθοῦ", "ἀγαθῆς", "ἀγαθοῦ", "ἀγαθῶν", "ἀγαθῶν", "ἀγαθῶν"],
      "Dative": ["ἀγαθῷ", "ἀγαθῇ", "ἀγαθῷ", "ἀγαθοῖς", "ἀγαθαῖς", "ἀγαθοῖς"],
      "Accusative": ["ἀγαθόν", "ἀγαθήν", "ἀγαθόν", "ἀγαθούς", "ἀγαθάς", "ἀγαθά"],
    }
  },
  "ἀγαπητός, -ή, -όν": {
    meaning: "beloved",
    type: "adjective",
    genderForms: {
      "Nominative": ["ἀγαπητός", "ἀγαπητή", "ἀγαπητόν", "ἀγαπητοί", "ἀγαπηταί", "ἀγαπητά"],
      "Genitive": ["ἀγαπητοῦ", "ἀγαπητῆς", "ἀγαπητοῦ", "ἀγαπητῶν", "ἀγαπητῶν", "ἀγαπητῶν"],
      "Dative": ["ἀγαπητῷ", "ἀγαπητῇ", "ἀγαπητῷ", "ἀγαπητοῖς", "ἀγαπηταῖς", "ἀγαπητοῖς"],
      "Accusative": ["ἀγαπητόν", "ἀγαπητήν", "ἀγαπητόν", "ἀγαπητούς", "ἀγαπητάς", "ἀγαπητά"],
    }
  },
  "ἅγιος, -α, -ον": {
    meaning: "holy; (pl. noun) saints",
    type: "adjective",
    genderForms: {
      "Nominative": ["ἅγιος", "ἁγία", "ἅγιον", "ἅγιοι", "ἅγιαι", "ἅγια"],
      "Genitive": ["ἁγίου", "ἁγίας", "ἁγίου", "ἁγίων", "ἁγίων", "ἁγίων"],
      "Dative": ["ἁγίῳ", "ἁγίᾳ", "ἁγίῳ", "ἁγίοις", "ἁγίαις", "ἁγίοις"],
      "Accusative": ["ἅγιον", "ἁγίαν", "ἅγιον", "ἁγίους", "ἁγίας", "ἅγια"],
    }
  },
  "αἰώνιος, -ον": {
    meaning: "eternal",
    type: "adjective",
    genderForms: {
      "Nominative": ["αἰώνιος", "αἰώνιος", "αἰώνιον", "αἰώνιοι", "αἰώνιοι", "αἰώνια"],
      "Genitive": ["αἰωνίου", "αἰωνίου", "αἰωνίου", "αἰωνίων", "αἰωνίων", "αἰωνίων"],
      "Dative": ["αἰωνίῳ", "αἰωνίῳ", "αἰωνίῳ", "αἰωνίοις", "αἰωνίοις", "αἰωνίοις"],
      "Accusative": ["αἰώνιον", "αἰώνιον", "αἰώνιον", "αἰωνίους", "αἰωνίους", "αἰώνια"],
    }
  },
  "ἄλλος, -η, -ο": {
    meaning: "other, another",
    type: "adjective",
    genderForms: {
      "Nominative": ["ἄλλος", "ἄλλη", "ἄλλο", "ἄλλοι", "ἄλλαι", "ἄλλα"],
      "Genitive": ["ἄλλου", "ἄλλης", "ἄλλου", "ἄλλων", "ἄλλων", "ἄλλων"],
      "Dative": ["ἄλλῳ", "ἄλλῃ", "ἄλλῳ", "ἄλλοις", "ἄλλαις", "ἄλλοις"],
      "Accusative": ["ἄλλον", "ἄλλην", "ἄλλο", "ἄλλους", "ἄλλας", "ἄλλα"],
    }
  },
  "ἁμαρτωλός, -όν": {
    meaning: "sinful; (noun) sinner",
    type: "adjective",
    genderForms: {
      "Nominative": ["ἁμαρτωλός", "ἁμαρτωλός", "ἁμαρτωλόν", "ἁμαρτωλοί", "ἁμαρτωλοί", "ἁμαρτωλά"],
      "Genitive": ["ἁμαρτωλοῦ", "ἁμαρτωλοῦ", "ἁμαρτωλοῦ", "ἁμαρτωλῶν", "ἁμαρτωλῶν", "ἁμαρτωλῶν"],
      "Dative": ["ἁμαρτωλῷ", "ἁμαρτωλῷ", "ἁμαρτωλῷ", "ἁμαρτωλοῖς", "ἁμαρτωλοῖς", "ἁμαρτωλοῖς"],
      "Accusative": ["ἁμαρτωλόν", "ἁμαρτωλόν", "ἁμαρτωλόν", "ἁμαρτωλούς", "ἁμαρτωλούς", "ἁμαρτωλά"],
    }
  },
  "δεξιός, -ά, -όν": {
    meaning: "right (side)",
    type: "adjective",
    genderForms: {
      "Nominative": ["δεξιός", "δεξιά", "δεξιόν", "δεξιοί", "δεξιαί", "δεξιά"],
      "Genitive": ["δεξιοῦ", "δεξιᾶς", "δεξιοῦ", "δεξιῶν", "δεξιῶν", "δεξιῶν"],
      "Dative": ["δεξιῷ", "δεξιᾷ", "δεξιῷ", "δεξιοῖς", "δεξιαῖς", "δεξιοῖς"],
      "Accusative": ["δεξιόν", "δεξιάν", "δεξιόν", "δεξιούς", "δεξιάς", "δεξιά"],
    }
  },
  "δίκαιος, -αία, -αιον": {
    meaning: "right, just, righteous",
    type: "adjective",
    genderForms: {
      "Nominative": ["δίκαιος", "δικαία", "δίκαιον", "δίκαιοι", "δίκαιαι", "δίκαια"],
      "Genitive": ["δικαίου", "δικαίας", "δικαίου", "δικαίων", "δικαίων", "δικαίων"],
      "Dative": ["δικαίῳ", "δικαίᾳ", "δικαίῳ", "δικαίοις", "δικαίαις", "δικαίοις"],
      "Accusative": ["δίκαιον", "δικαίαν", "δίκαιον", "δικαίους", "δικαίας", "δίκαια"],
    }
  },
  "ἕτερος, -α, -ον": {
    meaning: "other, another, different",
    type: "adjective",
    genderForms: {
      "Nominative": ["ἕτερος", "ἑτέρα", "ἕτερον", "ἕτεροι", "ἕτεραι", "ἕτερα"],
      "Genitive": ["ἑτέρου", "ἑτέρας", "ἑτέρου", "ἑτέρων", "ἑτέρων", "ἑτέρων"],
      "Dative": ["ἑτέρῳ", "ἑτέρᾳ", "ἑτέρῳ", "ἑτέροις", "ἑτέραις", "ἑτέροις"],
      "Accusative": ["ἕτερον", "ἑτέραν", "ἕτερον", "ἑτέρους", "ἑτέρας", "ἕτερα"],
    }
  },
  "ἔσχατος, -η, -ον": {
    meaning: "last",
    type: "adjective",
    genderForms: {
      "Nominative": ["ἔσχατος", "ἐσχάτη", "ἔσχατον", "ἔσχατοι", "ἔσχαται", "ἔσχατα"],
      "Genitive": ["ἐσχάτου", "ἐσχάτης", "ἐσχάτου", "ἐσχάτων", "ἐσχάτων", "ἐσχάτων"],
      "Dative": ["ἐσχάτῳ", "ἐσχάτῃ", "ἐσχάτῳ", "ἐσχάτοις", "ἐσχάταις", "ἐσχάτοις"],
      "Accusative": ["ἔσχατον", "ἐσχάτην", "ἔσχατον", "ἐσχάτους", "ἐσχάτας", "ἔσχατα"],
    }
  },
  "ἴδιος, -ία, -ον": {
    meaning: "one's own",
    type: "adjective",
    genderForms: {
      "Nominative": ["ἴδιος", "ἰδία", "ἴδιον", "ἴδιοι", "ἴδιαι", "ἴδια"],
      "Genitive": ["ἰδίου", "ἰδίας", "ἰδίου", "ἰδίων", "ἰδίων", "ἰδίων"],
      "Dative": ["ἰδίῳ", "ἰδίᾳ", "ἰδίῳ", "ἰδίοις", "ἰδίαις", "ἰδίοις"],
      "Accusative": ["ἴδιον", "ἰδίαν", "ἴδιον", "ἰδίους", "ἰδίας", "ἴδια"],
    }
  },
  "Ἰουδαῖος, -αία, -αῖον": {
    meaning: "Jewish (adj.); Jew (noun)",
    type: "adjective",
    genderForms: {
      "Nominative": ["Ἰουδαῖος", "Ἰουδαία", "Ἰουδαῖον", "Ἰουδαῖοι", "Ἰουδαῖαι", "Ἰουδαῖα"],
      "Genitive": ["Ἰουδαίου", "Ἰουδαίας", "Ἰουδαίου", "Ἰουδαίων", "Ἰουδαίων", "Ἰουδαίων"],
      "Dative": ["Ἰουδαίῳ", "Ἰουδαίᾳ", "Ἰουδαίῳ", "Ἰουδαίοις", "Ἰουδαίαις", "Ἰουδαίοις"],
      "Accusative": ["Ἰουδαῖον", "Ἰουδαίαν", "Ἰουδαῖον", "Ἰουδαίους", "Ἰουδαίας", "Ἰουδαῖα"],
    }
  },
  "κακός, -ή, -όν": {
    meaning: "bad, evil",
    type: "adjective",
    genderForms: {
      "Nominative": ["κακός", "κακή", "κακόν", "κακοί", "κακαί", "κακά"],
      "Genitive": ["κακοῦ", "κακῆς", "κακοῦ", "κακῶν", "κακῶν", "κακῶν"],
      "Dative": ["κακῷ", "κακῇ", "κακῷ", "κακοῖς", "κακαῖς", "κακοῖς"],
      "Accusative": ["κακόν", "κακήν", "κακόν", "κακούς", "κακάς", "κακά"],
    }
  },
  "καλός, -ή, -όν": {
    meaning: "good, beautiful",
    type: "adjective",
    genderForms: {
      "Nominative": ["καλός", "καλή", "καλόν", "καλοί", "καλαί", "καλά"],
      "Genitive": ["καλοῦ", "καλῆς", "καλοῦ", "καλῶν", "καλῶν", "καλῶν"],
      "Dative": ["καλῷ", "καλῇ", "καλῷ", "καλοῖς", "καλαῖς", "καλοῖς"],
      "Accusative": ["καλόν", "καλήν", "καλόν", "καλούς", "καλάς", "καλά"],
    }
  },
  "λοιπός, -ή, -όν": {
    meaning: "remaining; (pl. noun) the rest",
    type: "adjective",
    genderForms: {
      "Nominative": ["λοιπός", "λοιπή", "λοιπόν", "λοιποί", "λοιπαί", "λοιπά"],
      "Genitive": ["λοιποῦ", "λοιπῆς", "λοιποῦ", "λοιπῶν", "λοιπῶν", "λοιπῶν"],
      "Dative": ["λοιπῷ", "λοιπῇ", "λοιπῷ", "λοιποῖς", "λοιπαῖς", "λοιποῖς"],
      "Accusative": ["λοιπόν", "λοιπήν", "λοιπόν", "λοιπούς", "λοιπάς", "λοιπά"],
    }
  },
  "μακάριος, -ία, -ιον": {
    meaning: "blessed, happy",
    type: "adjective",
    genderForms: {
      "Nominative": ["μακάριος", "μακαρία", "μακάριον", "μακάριοι", "μακάριαι", "μακάρια"],
      "Genitive": ["μακαρίου", "μακαρίας", "μακαρίου", "μακαρίων", "μακαρίων", "μακαρίων"],
      "Dative": ["μακαρίῳ", "μακαρίᾳ", "μακαρίῳ", "μακαρίοις", "μακαρίαις", "μακαρίοις"],
      "Accusative": ["μακάριον", "μακαρίαν", "μακάριον", "μακαρίους", "μακαρίας", "μακάρια"],
    }
  },
  "μέγιστος, -η, -ον": {
    meaning: "greater (comparative: μείζων); greatest",
    type: "adjective",
    genderForms: {
      "Nominative": ["μείζων", "μείζων", "μεῖζον", "μείζονες", "μείζονες", "μείζονα"],
      "Genitive": ["μείζονος", "μείζονος", "μείζονος", "μειζόνων", "μειζόνων", "μειζόνων"],
      "Dative": ["μείζονι", "μείζονι", "μείζονι", "μείζοσι(ν)", "μείζοσι(ν)", "μείζοσι(ν)"],
      "Accusative": ["μείζονα", "μείζονα", "μεῖζον", "μείζονας", "μείζονας", "μείζονα"],
    }
  },
  "μέσος, -η, -ον": {
    meaning: "middle, in the midst",
    type: "adjective",
    genderForms: {
      "Nominative": ["μέσος", "μέση", "μέσον", "μέσοι", "μέσαι", "μέσα"],
      "Genitive": ["μέσου", "μέσης", "μέσου", "μέσων", "μέσων", "μέσων"],
      "Dative": ["μέσῳ", "μέσῃ", "μέσῳ", "μέσοις", "μέσαις", "μέσοις"],
      "Accusative": ["μέσον", "μέσην", "μέσον", "μέσους", "μέσας", "μέσα"],
    }
  },
  "μόνος, -η, -ον": {
    meaning: "alone, only",
    type: "adjective",
    genderForms: {
      "Nominative": ["μόνος", "μόνη", "μόνον", "μόνοι", "μόναι", "μόνα"],
      "Genitive": ["μόνου", "μόνης", "μόνου", "μόνων", "μόνων", "μόνων"],
      "Dative": ["μόνῳ", "μόνῃ", "μόνῳ", "μόνοις", "μόναις", "μόνοις"],
      "Accusative": ["μόνον", "μόνην", "μόνον", "μόνους", "μόνας", "μόνα"],
    }
  },
  "νεκρός, -ά, -όν": {
    meaning: "dead; (noun) corpse",
    type: "adjective",
    genderForms: {
      "Nominative": ["νεκρός", "νεκρά", "νεκρόν", "νεκροί", "νεκραί", "νεκρά"],
      "Genitive": ["νεκροῦ", "νεκρᾶς", "νεκροῦ", "νεκρῶν", "νεκρῶν", "νεκρῶν"],
      "Dative": ["νεκρῷ", "νεκρᾷ", "νεκρῷ", "νεκροῖς", "νεκραῖς", "νεκροῖς"],
      "Accusative": ["νεκρόν", "νεκράν", "νεκρόν", "νεκρούς", "νεκράς", "νεκρά"],
    }
  },
  "ὅλος, -η, -ον": {
    meaning: "whole, complete; entirely",
    type: "adjective",
    genderForms: {
      "Nominative": ["ὅλος", "ὅλη", "ὅλον", "ὅλοι", "ὅλαι", "ὅλα"],
      "Genitive": ["ὅλου", "ὅλης", "ὅλου", "ὅλων", "ὅλων", "ὅλων"],
      "Dative": ["ὅλῳ", "ὅλῃ", "ὅλῳ", "ὅλοις", "ὅλαις", "ὅλοις"],
      "Accusative": ["ὅλον", "ὅλην", "ὅλον", "ὅλους", "ὅλας", "ὅλα"],
    }
  },
  "ὅσος, -η, -ον": {
    meaning: "as great as, as many as",
    type: "adjective",
    genderForms: {
      "Nominative": ["ὅσος", "ὅση", "ὅσον", "ὅσοι", "ὅσαι", "ὅσα"],
      "Genitive": ["ὅσου", "ὅσης", "ὅσου", "ὅσων", "ὅσων", "ὅσων"],
      "Dative": ["ὅσῳ", "ὅσῃ", "ὅσῳ", "ὅσοις", "ὅσαις", "ὅσοις"],
      "Accusative": ["ὅσον", "ὅσην", "ὅσον", "ὅσους", "ὅσας", "ὅσα"],
    }
  },
  "πιστός, -ή, -όν": {
    meaning: "faithful, believing",
    type: "adjective",
    genderForms: {
      "Nominative": ["πιστός", "πιστή", "πιστόν", "πιστοί", "πισταί", "πιστά"],
      "Genitive": ["πιστοῦ", "πιστῆς", "πιστοῦ", "πιστῶν", "πιστῶν", "πιστῶν"],
      "Dative": ["πιστῷ", "πιστῇ", "πιστῷ", "πιστοῖς", "πισταῖς", "πιστοῖς"],
      "Accusative": ["πιστόν", "πιστήν", "πιστόν", "πιστούς", "πιστάς", "πιστά"],
    }
  },
  "πλείων, πλεῖον": {
    meaning: "larger, more (comparative of πολύς)",
    type: "adjective",
    genderForms: {
      "Nominative": ["πλείων", "πλείων", "πλεῖον", "πλείονες", "πλείονες", "πλείονα"],
      "Genitive": ["πλείονος", "πλείονος", "πλείονος", "πλειόνων", "πλειόνων", "πλειόνων"],
      "Dative": ["πλείονι", "πλείονι", "πλείονι", "πλείοσι(ν)", "πλείοσι(ν)", "πλείοσι(ν)"],
      "Accusative": ["πλείονα", "πλείονα", "πλεῖον", "πλείονας", "πλείονας", "πλείονα"],
    }
  },
  "πονηρός, -ά, -όν": {
    meaning: "evil, wicked, bad",
    type: "adjective",
    genderForms: {
      "Nominative": ["πονηρός", "πονηρά", "πονηρόν", "πονηροί", "πονηραί", "πονηρά"],
      "Genitive": ["πονηροῦ", "πονηρᾶς", "πονηροῦ", "πονηρῶν", "πονηρῶν", "πονηρῶν"],
      "Dative": ["πονηρῷ", "πονηρᾷ", "πονηρῷ", "πονηροῖς", "πονηραῖς", "πονηροῖς"],
      "Accusative": ["πονηρόν", "πονηράν", "πονηρόν", "πονηρούς", "πονηράς", "πονηρά"],
    }
  },
  "πρεσβύτερος, -α, -ον": {
    meaning: "elder, older",
    type: "adjective",
    genderForms: {
      "Nominative": ["πρεσβύτερος", "πρεσβυτέρα", "πρεσβύτερον", "πρεσβύτεροι", "πρεσβύτεραι", "πρεσβύτερα"],
      "Genitive": ["πρεσβυτέρου", "πρεσβυτέρας", "πρεσβυτέρου", "πρεσβυτέρων", "πρεσβυτέρων", "πρεσβυτέρων"],
      "Dative": ["πρεσβυτέρῳ", "πρεσβυτέρᾳ", "πρεσβυτέρῳ", "πρεσβυτέροις", "πρεσβυτέραις", "πρεσβυτέροις"],
      "Accusative": ["πρεσβύτερον", "πρεσβυτέραν", "πρεσβύτερον", "πρεσβυτέρους", "πρεσβυτέρας", "πρεσβύτερα"],
    }
  },
  "πρῶτος, -η, -ον": {
    meaning: "first, earlier",
    type: "adjective",
    genderForms: {
      "Nominative": ["πρῶτος", "πρώτη", "πρῶτον", "πρῶτοι", "πρῶται", "πρῶτα"],
      "Genitive": ["πρώτου", "πρώτης", "πρώτου", "πρώτων", "πρώτων", "πρώτων"],
      "Dative": ["πρώτῳ", "πρώτῃ", "πρώτῳ", "πρώτοις", "πρώταις", "πρώτοις"],
      "Accusative": ["πρῶτον", "πρώτην", "πρῶτον", "πρώτους", "πρώτας", "πρῶτα"],
    }
  },
  "τοιοῦτος, -αύτη, -οῦτον": {
    meaning: "such, of such a kind",
    type: "adjective",
    genderForms: {
      "Nominative": ["τοιοῦτος", "τοιαύτη", "τοιοῦτο", "τοιοῦτοι", "τοιαῦται", "τοιαῦτα"],
      "Genitive": ["τοιούτου", "τοιαύτης", "τοιούτου", "τοιούτων", "τοιούτων", "τοιούτων"],
      "Dative": ["τοιούτῳ", "τοιαύτῃ", "τοιούτῳ", "τοιούτοις", "τοιαύταις", "τοιούτοις"],
      "Accusative": ["τοιοῦτον", "τοιαύτην", "τοιοῦτο", "τοιούτους", "τοιαύτας", "τοιαῦτα"],
    }
  },
  "τρίτος, -η, -ον": {
    meaning: "third",
    type: "adjective",
    genderForms: {
      "Nominative": ["τρίτος", "τρίτη", "τρίτον", "τρίτοι", "τρίται", "τρίτα"],
      "Genitive": ["τρίτου", "τρίτης", "τρίτου", "τρίτων", "τρίτων", "τρίτων"],
      "Dative": ["τρίτῳ", "τρίτῃ", "τρίτῳ", "τρίτοις", "τρίταις", "τρίτοις"],
      "Accusative": ["τρίτον", "τρίτην", "τρίτον", "τρίτους", "τρίτας", "τρίτα"],
    }
  },
  "τυφλός, -ή, -όν": {
    meaning: "blind",
    type: "adjective",
    genderForms: {
      "Nominative": ["τυφλός", "τυφλή", "τυφλόν", "τυφλοί", "τυφλαί", "τυφλά"],
      "Genitive": ["τυφλοῦ", "τυφλῆς", "τυφλοῦ", "τυφλῶν", "τυφλῶν", "τυφλῶν"],
      "Dative": ["τυφλῷ", "τυφλῇ", "τυφλῷ", "τυφλοῖς", "τυφλαῖς", "τυφλοῖς"],
      "Accusative": ["τυφλόν", "τυφλήν", "τυφλόν", "τυφλούς", "τυφλάς", "τυφλά"],
    }
  },

  "ἁμαρτία": {
    meaning: "sin",
    gender: "feminine", declension: "1st",
    forms: {
      "Nominative": ["ἁμαρτία", "ἁμαρτίαι"],
      "Genitive": ["ἁμαρτίας", "ἁμαρτιῶν"],
      "Dative": ["ἁμαρτίᾳ", "ἁμαρτίαις"],
      "Accusative": ["ἁμαρτίαν", "ἁμαρτίας"],
    }
  },
  "δύναμις": {
    meaning: "power, miracle, ability",
    gender: "feminine", declension: "3rd",
    forms: {
      "Nominative": ["δύναμις", "δυνάμεις"],
      "Genitive": ["δυνάμεως", "δυνάμεων"],
      "Dative": ["δυνάμει", "δυνάμεσι(ν)"],
      "Accusative": ["δύναμιν", "δυνάμεις"],
    }
  },
  "ὄρος": {
    meaning: "mountain, hill",
    gender: "neuter", declension: "3rd",
    forms: {
      "Nominative": ["ὄρος", "ὄρη"],
      "Genitive": ["ὄρους", "ὀρῶν"],
      "Dative": ["ὄρει", "ὄρεσι(ν)"],
      "Accusative": ["ὄρος", "ὄρη"],
    }
  },
  "ἕκαστος, -η, -ον": {
    meaning: "each, every one",
    type: "adjective",
    genderForms: {
      "Nominative": ["ἕκαστος", "ἑκάστη", "ἕκαστον", "ἕκαστοι", "ἑκάσται", "ἕκαστα"],
      "Genitive": ["ἑκάστου", "ἑκάστης", "ἑκάστου", "ἑκάστων", "ἑκάστων", "ἑκάστων"],
      "Dative": ["ἑκάστῳ", "ἑκάστῃ", "ἑκάστῳ", "ἑκάστοις", "ἑκάσταις", "ἑκάστοις"],
      "Accusative": ["ἕκαστον", "ἑκάστην", "ἕκαστον", "ἑκάστους", "ἑκάστας", "ἕκαστα"],
    }
  },
  "ἐμός, -ή, -όν": {
    meaning: "my, mine (possessive)",
    type: "adjective",
    genderForms: {
      "Nominative": ["ἐμός", "ἐμή", "ἐμόν", "ἐμοί", "ἐμαί", "ἐμά"],
      "Genitive": ["ἐμοῦ", "ἐμῆς", "ἐμοῦ", "ἐμῶν", "ἐμῶν", "ἐμῶν"],
      "Dative": ["ἐμῷ", "ἐμῇ", "ἐμῷ", "ἐμοῖς", "ἐμαῖς", "ἐμοῖς"],
      "Accusative": ["ἐμόν", "ἐμήν", "ἐμόν", "ἐμούς", "ἐμάς", "ἐμά"],
    }
  },
  "εἷς, μία, ἕν": {
    meaning: "one",
    type: "adjective",
    genderForms: {
      "Nominative": ["εἷς", "μία", "ἕν", "—", "—", "—"],
      "Genitive": ["ἑνός", "μιᾶς", "ἑνός", "—", "—", "—"],
      "Dative": ["ἑνί", "μιᾷ", "ἑνί", "—", "—", "—"],
      "Accusative": ["ἕνα", "μίαν", "ἕν", "—", "—", "—"],
    }
  },
  "οὐδείς, οὐδεμία, οὐδέν": {
    meaning: "no one, none, nothing",
    type: "pronoun",
    genderForms: {
      "Nominative": ["οὐδείς", "οὐδεμία", "οὐδέν", "—", "—", "—"],
      "Genitive": ["οὐδενός", "οὐδεμιᾶς", "οὐδενός", "—", "—", "—"],
      "Dative": ["οὐδενί", "οὐδεμιᾷ", "οὐδενί", "—", "—", "—"],
      "Accusative": ["οὐδένα", "οὐδεμίαν", "οὐδέν", "—", "—", "—"],
    }
  },
  "μηδείς, μηδεμία, μηδέν": {
    meaning: "no one, nothing (used with non-indicative moods)",
    type: "pronoun",
    genderForms: {
      "Nominative": ["μηδείς", "μηδεμία", "μηδέν", "—", "—", "—"],
      "Genitive": ["μηδενός", "μηδεμιᾶς", "μηδενός", "—", "—", "—"],
      "Dative": ["μηδενί", "μηδεμιᾷ", "μηδενί", "—", "—", "—"],
      "Accusative": ["μηδένα", "μηδεμίαν", "μηδέν", "—", "—", "—"],
    }
  },
  "ἀλλήλων": {
    meaning: "one another, each other (reciprocal)",
    type: "pronoun",
    genderForms: {
      "Genitive": ["ἀλλήλων", "ἀλλήλων", "ἀλλήλων", "—", "—", "—"],
      "Dative": ["ἀλλήλοις", "ἀλλήλαις", "ἀλλήλοις", "—", "—", "—"],
      "Accusative": ["ἀλλήλους", "ἀλλήλας", "ἄλληλα", "—", "—", "—"],
    }
  },
  "ὅστις, ἥτις, ὅτι": {
    meaning: "whoever, whatever, whichever",
    type: "pronoun",
    genderForms: {
      "Nominative": ["ὅστις", "ἥτις", "ὅτι", "οἵτινες", "αἵτινες", "ἅτινα"],
      "Genitive": ["ὅτου", "ἥτινος", "ὅτου", "ὧντινων", "ὧντινων", "ὧντινων"],
      "Dative": ["ὅτῳ", "ᾗτινι", "ὅτῳ", "οἷστισι(ν)", "αἷστισι(ν)", "οἷστισι(ν)"],
      "Accusative": ["ὅντινα", "ἥντινα", "ὅτι", "οὕστινας", "ἅστινας", "ἅτινα"],
    }
  },
};
