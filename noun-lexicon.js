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
};
