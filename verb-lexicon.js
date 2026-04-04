const VERB_LEXICON = {
  "εἰμί": {
    meaning: "I am, exist, live, am present",
    indicative: {
      "Present Active Indicative": ["εἰμί", "εἶ", "ἐστίν", "ἐσμέν", "ἐστέ", "εἰσίν"],
      "Future Middle Indicative": ["ἔσομαι", "ἔσῃ", "ἔσται", "ἐσόμεθα", "ἔσεσθε", "ἔσονται"],
      "Imperfect Active Indicative": ["ἤμην", "ἦς", "ἦν", "ἦμεν", "ἦτε", "ἦσαν"],
      "Future Active Indicative": ["ἔσομαι", "ἔσῃ", "ἔσται", "ἐσόμεθα", "ἔσεσθε", "ἔσονται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ὦ", "ᾖς", "ᾖ", "ὦμεν", "ἦτε", "ὦσιν"],
    },
    infinitives: {
      "Present Active": "εἶναι",
    },
      imperative: {
        "Present Active Imperative": ["ἴσθι", "ἔστω", "ἔστε", "ἔστωσαν"],
      },
  },
  "λύω": {
    meaning: "I loose, untie, destroy",
    indicative: {
      "Present Active Indicative": ["λύω", "λύεις", "λύει", "λύομεν", "λύετε", "λύουσι(ν)"],
      "Present Middle/Passive Indicative": ["λύομαι", "λύῃ", "λύεται", "λυόμεθα", "λύεσθε", "λύονται"],
      "Future Active Indicative": ["λύσω", "λύσεις", "λύσει", "λύσομεν", "λύσετε", "λύσουσι(ν)"],
      "Future Middle Indicative": ["λύσομαι", "λύσῃ", "λύσεται", "λυσόμεθα", "λύσεσθε", "λύσονται"],
      "Imperfect Active Indicative": ["ἔλυον", "ἔλυες", "ἔλυε(ν)", "ἐλύομεν", "ἐλύετε", "ἔλυον"],
      "Imperfect Middle/Passive Indicative": ["ἐλυόμην", "ἐλύου", "ἐλύετο", "ἐλυόμεθα", "ἐλύεσθε", "ἐλύοντο"],
      "1st Aorist Active Indicative": ["ἔλυσα", "ἔλυσας", "ἔλυσε(ν)", "ἐλύσαμεν", "ἐλύσατε", "ἔλυσαν"],
      "1st Aorist Middle Indicative": ["ἐλυσάμην", "ἐλύσω", "ἐλύσατο", "ἐλυσάμεθα", "ἐλύσασθε", "ἐλύσαντο"],
      "1st Aorist Passive Indicative": ["ἐλύθην", "ἐλύθης", "ἐλύθη", "ἐλύθημεν", "ἐλύθητε", "ἐλύθησαν"],
      "Perfect Active Indicative": ["λέλυκα", "λέλυκας", "λέλυκε(ν)", "λελύκαμεν", "λελύκατε", "λελύκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["λέλυμαι", "λέλυσαι", "λέλυται", "λελύμεθα", "λέλυσθε", "λέλυνται"],
      "Future Passive Indicative": ["λυθήσομαι", "λυθήσῃ", "λυθήσεται", "λυθησόμεθα", "λυθήσεσθε", "λυθήσονται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["λύω", "λύῃς", "λύῃ", "λύωμεν", "λύητε", "λύωσιν"],
      "Present Middle/Passive Subjunctive": ["λύωμαι", "λύῃ", "λύηται", "λυώμεθα", "λύησθε", "λύωνται"],
      "Aorist Active Subjunctive": ["λύσω", "λύσῃς", "λύσῃ", "λύσωμεν", "λύσητε", "λύσωσιν"],
      "Aorist Middle Subjunctive": ["λύσωμαι", "λύσῃ", "λύσηται", "λυσώμεθα", "λύσησθε", "λύσωνται"],
      "Aorist Passive Subjunctive": ["λυθῶ", "λυθῇς", "λυθῇ", "λυθῶμεν", "λυθῆτε", "λυθῶσιν"],
    },
    infinitives: {
      "Present Active": "λύειν",
      "Present Middle/Passive": "λύεσθαι",
      "1st Aorist Active": "λῦσαι",
      "1st Aorist Middle": "λύσασθαι",
      "1st Aorist Passive": "λυθῆναι",
      "Perfect Active": "λελυκέναι",
      "Perfect Middle/Passive": "λελύσθαι",
    },
    imperative: {
      "Present Active Imperative": ["λῦε", "λυέτω", "λύετε", "λυέτωσαν"],
      "Present Middle/Passive Imperative": ["λύου", "λυέσθω", "λύεσθε", "λυέσθωσαν"],
      "1st Aorist Active Imperative": ["λῦσον", "λυσάτω", "λύσατε", "λυσάτωσαν"],
      "1st Aorist Middle Imperative": ["λῦσαι", "λυσάσθω", "λύσασθε", "λυσάσθωσαν"],
      "1st Aorist Passive Imperative": ["λύθητι", "λυθήτω", "λύθητε", "λυθήτωσαν"],
    },

  },
  "λέγω": {
    meaning: "I say, speak",
    indicative: {
      "Present Active Indicative": ["λέγω", "λέγεις", "λέγει", "λέγομεν", "λέγετε", "λέγουσι(ν)"],
      "Present Middle/Passive Indicative": ["λέγομαι", "λέγῃ", "λέγεται", "λεγόμεθα", "λέγεσθε", "λέγονται"],
      "Future Active Indicative": ["ἐρῶ", "ἐρεῖς", "ἐρεῖ", "ἐροῦμεν", "ἐρεῖτε", "ἐροῦσι(ν)"],
      "Future Middle Indicative": ["ἐροῦμαι", "ἐρῇ", "ἐρεῖται", "ἐρούμεθα", "ἐρεῖσθε", "ἐροῦνται"],
      "Future Passive Indicative": ["ῥηθήσομαι", "ῥηθήσῃ", "ῥηθήσεται", "ῥηθησόμεθα", "ῥηθήσεσθε", "ῥηθήσονται"],
      "Imperfect Active Indicative": ["ἔλεγον", "ἔλεγες", "ἔλεγε(ν)", "ἐλέγομεν", "ἐλέγετε", "ἔλεγον"],
      "Imperfect Middle/Passive Indicative": ["ἐλεγόμην", "ἐλέγου", "ἐλέγετο", "ἐλεγόμεθα", "ἐλέγεσθε", "ἐλέγοντο"],
      "1st Aorist Passive Indicative": ["ἐρρήθην", "ἐρρήθης", "ἐρρήθη", "ἐρρήθημεν", "ἐρρήθητε", "ἐρρήθησαν"],
      "Perfect Active Indicative": ["εἴρηκα", "εἴρηκας", "εἴρηκε(ν)", "εἰρήκαμεν", "εἰρήκατε", "εἴρηκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["εἴρημαι", "εἴρησαι", "εἴρηται", "εἰρήμεθα", "εἴρησθε", "εἴρηνται"],
      "2nd Aorist Active Indicative": ["εἶπον", "εἶπες", "εἶπε(ν)", "εἴπαμεν", "εἴπατε", "εἶπον"],
      "2nd Aorist Middle Indicative": ["εἰπάμην", "εἴπου", "εἴπατο", "εἰπάμεθα", "εἴπασθε", "εἴπαντο"],
      "Aorist Active Indicative": ["εἶπον", "εἶπες", "εἶπε(ν)", "εἴπομεν", "εἴπετε", "εἶπον"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["λέγω", "λέγῃς", "λέγῃ", "λέγωμεν", "λέγητε", "λέγωσιν"],
      "Present Middle/Passive Subjunctive": ["λέγωμαι", "λέγῃ", "λέγηται", "λεγώμεθα", "λέγησθε", "λέγωνται"],
      "Aorist Active Subjunctive": ["εἴπω", "εἴπῃς", "εἴπῃ", "εἴπωμεν", "εἴπητε", "εἴπωσιν"],
      "Aorist Middle Subjunctive": ["εἴπωμαι", "εἴπῃ", "εἴπηται", "εἰπώμεθα", "εἴπησθε", "εἴπωνται"],
      "Aorist Passive Subjunctive": ["ῥηθῶ", "ῥηθῇς", "ῥηθῇ", "ῥηθῶμεν", "ῥηθῆτε", "ῥηθῶσιν"],
    },
    infinitives: {
      "Present Active": "λέγειν",
      "Present Middle/Passive": "λέγεσθαι",
      "2nd Aorist Active": "εἰπεῖν",
      "2nd Aorist Middle": "εἰπέσθαι",
      "1st Aorist Passive": "ῥηθῆναι",
      "Perfect Active": "εἰρηκέναι",
      "Perfect Middle/Passive": "εἰρῆσθαι",
    },
    imperative: {
      "Present Active Imperative": ["λέγε", "λεγέτω", "λέγετε", "λεγέτωσαν"],
      "Present Middle/Passive Imperative": ["λέγου", "λεγέσθω", "λέγεσθε", "λεγέσθωσαν"],
      "2nd Aorist Active Imperative": ["εἰπέ", "εἰπέτω", "εἴπατε", "εἰπέτωσαν"],
      "2nd Aorist Middle Imperative": ["εἰποῦ", "εἰπέσθω", "εἴπεσθε", "εἰπέσθωσαν"],
      "1st Aorist Passive Imperative": ["ῥήθητι", "ῥηθήτω", "ῥήθητε", "ῥηθήτωσαν"],
    },

  },
  "ἀκούω": {
    meaning: "I hear; learn, obey; understand",
    indicative: {
      "Present Active Indicative": ["ἀκούω", "ἀκούεις", "ἀκούει", "ἀκούομεν", "ἀκούετε", "ἀκούουσι(ν)"],
      "Present Middle/Passive Indicative": ["ἀκούομαι", "ἀκούῃ", "ἀκούεται", "ἀκουόμεθα", "ἀκούεσθε", "ἀκούονται"],
      "Future Active Indicative": ["ἀκούσω", "ἀκούσεις", "ἀκούσει", "ἀκούσομεν", "ἀκούσετε", "ἀκούσουσι(ν)"],
      "Imperfect Active Indicative": ["ἤκουον", "ἤκουες", "ἤκουε(ν)", "ἠκούομεν", "ἠκούετε", "ἤκουον"],
      "1st Aorist Active Indicative": ["ἤκουσα", "ἤκουσας", "ἤκουσε(ν)", "ἠκούσαμεν", "ἠκούσατε", "ἤκουσαν"],
      "1st Aorist Passive Indicative": ["ἠκούσθην", "ἠκούσθης", "ἠκούσθη", "ἠκούσθημεν", "ἠκούσθητε", "ἠκούσθησαν"],
      "Perfect Active Indicative": ["ἀκήκοα", "ἀκήκοας", "ἀκήκοε(ν)", "ἀκηκόαμεν", "ἀκηκόατε", "ἀκήκοασι(ν)"],
      "Imperfect Middle/Passive Indicative": ["ἠκουόμην", "ἠκούου", "ἠκούετο", "ἠκουόμεθα", "ἠκούεσθε", "ἠκούοντο"],
      "Future Middle Indicative": ["ἀκούσομαι", "ἀκούσῃ", "ἀκούσεται", "ἀκουσόμεθα", "ἀκούσεσθε", "ἀκούσονται"],
      "Future Passive Indicative": ["ἀκουσθήσομαι", "ἀκουσθήσῃ", "ἀκουσθήσεται", "ἀκουσθησόμεθα", "ἀκουσθήσεσθε", "ἀκουσθήσονται"],
      "1st Aorist Middle Indicative": ["ἠκουσάμην", "ἠκούσω", "ἠκούσατο", "ἠκουσάμεθα", "ἠκούσασθε", "ἠκούσαντο"],
      "Perfect Middle/Passive Indicative": ["ἀκήκοσμαι", "ἀκήκοσαι", "ἀκήκοσται", "ἀκηκόσμεθα", "ἀκήκοσθε", "ἀκήκοσνται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἀκούω", "ἀκούῃς", "ἀκούῃ", "ἀκούωμεν", "ἀκούητε", "ἀκούωσιν"],
      "Present Middle/Passive Subjunctive": ["ἀκούωμαι", "ἀκούῃ", "ἀκούηται", "ἀκούώμεθα", "ἀκούησθε", "ἀκούωνται"],
      "Aorist Active Subjunctive": ["ἀκούσω", "ἀκούσῃς", "ἀκούσῃ", "ἀκούσωμεν", "ἀκούσητε", "ἀκούσωσιν"],
      "Aorist Middle Subjunctive": ["ἀκούσωμαι", "ἀκούσῃ", "ἀκούσηται", "ἀκούσώμεθα", "ἀκούσησθε", "ἀκούσωνται"],
      "Aorist Passive Subjunctive": ["εκούσῶ", "εκούσῇς", "εκούσῇ", "εκούσῶμεν", "εκούσῆτε", "εκούσῶσιν"],
    },
    infinitives: {
      "Present Active": "ἀκούειν",
      "Present Middle/Passive": "ἀκούεσθαι",
      "1st Aorist Active": "ἀκοῦσαι",
      "1st Aorist Passive": "ἀκουσθῆναι",
      "Perfect Active": "ἀκηκοέναι",
    },
    imperative: {
      "Present Active Imperative": ["ἄκουε", "ἀκουέτω", "ἀκούετε", "ἀκουέτωσαν"],
      "Present Middle/Passive Imperative": ["ἀκούου", "ἀκουέσθω", "ἀκούεσθε", "ἀκουέσθωσαν"],
      "1st Aorist Active Imperative": ["ἄκουσον", "ἀκουσάτω", "ἀκούσατε", "ἀκουσάτωσαν"],
      "1st Aorist Passive Imperative": ["ἀκούσθητι", "ἀκουσθήτω", "ἀκούσθητε", "ἀκουσθήτωσαν"],
    },

  },
  "βλέπω": {
    meaning: "I see, look at",
    indicative: {
      "Present Active Indicative": ["βλέπω", "βλέπεις", "βλέπει", "βλέπομεν", "βλέπετε", "βλέπουσι(ν)"],
      "Present Middle/Passive Indicative": ["βλέπομαι", "βλέπῃ", "βλέπεται", "βλεπόμεθα", "βλέπεσθε", "βλέπονται"],
      "Future Active Indicative": ["βλέψω", "βλέψεις", "βλέψει", "βλέψομεν", "βλέψετε", "βλέψουσι(ν)"],
      "Imperfect Active Indicative": ["ἔβλεπον", "ἔβλεπες", "ἔβλεπε(ν)", "ἐβλέπομεν", "ἐβλέπετε", "ἔβλεπον"],
      "1st Aorist Active Indicative": ["ἔβλεψα", "ἔβλεψας", "ἔβλεψε(ν)", "ἐβλέψαμεν", "ἐβλέψατε", "ἔβλεψαν"],
      "Imperfect Middle/Passive Indicative": ["ἐβλεπόμην", "ἐβλέπου", "ἐβλέπετο", "ἐβλεπόμεθα", "ἐβλέπεσθε", "ἐβλέποντο"],
      "Future Middle Indicative": ["βλέψομαι", "βλέψῃ", "βλέψεται", "βλεψόμεθα", "βλέψεσθε", "βλέψονται"],
      "Future Passive Indicative": ["βλεφθήσομαι", "βλεφθήσῃ", "βλεφθήσεται", "βλεφθησόμεθα", "βλεφθήσεσθε", "βλεφθήσονται"],
      "Perfect Active Indicative": ["βέβλεφα", "βέβλεφας", "βέβλεφε(ν)", "βεβλέφαμεν", "βεβλέφατε", "βεβλέφασι(ν)"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["βλέπω", "βλέπῃς", "βλέπῃ", "βλέπωμεν", "βλέπητε", "βλέπωσιν"],
      "Present Middle/Passive Subjunctive": ["βλέπωμαι", "βλέπῃ", "βλέπηται", "βλέπώμεθα", "βλέπησθε", "βλέπωνται"],
      "Aorist Active Subjunctive": ["βλέψω", "βλέψῃς", "βλέψῃ", "βλέψωμεν", "βλέψητε", "βλέψωσιν"],
      "Aorist Middle Subjunctive": ["βλέψωμαι", "βλέψῃ", "βλέψηται", "βλέψώμεθα", "βλέψησθε", "βλέψωνται"],
      "Aorist Passive Subjunctive": ["βλεφθῶ", "βλεφθῇς", "βλεφθῇ", "βλεφθῶμεν", "βλεφθῆτε", "βλεφθῶσιν"],
    },
    infinitives: {
      "Present Active": "βλέπειν",
      "Present Middle/Passive": "βλέπεσθαι",
      "1st Aorist Active": "βλέψαι",
    },
    imperative: {
      "Present Active Imperative": ["βλέπε", "βλεπέτω", "βλέπετε", "βλεπέτωσαν"],
      "Present Middle/Passive Imperative": ["βλέπου", "βλεπέσθω", "βλέπεσθε", "βλεπέσθωσαν"],
      "1st Aorist Active Imperative": ["βλέψον", "βλεψάτω", "βλέψατε", "βλεψάτωσαν"],
    },

  },
  "ἔχω": {
    meaning: "I have, hold",
    indicative: {
      "Present Active Indicative": ["ἔχω", "ἔχεις", "ἔχει", "ἔχομεν", "ἔχετε", "ἔχουσι(ν)"],
      "Present Middle/Passive Indicative": ["ἔχομαι", "ἔχῃ", "ἔχεται", "ἐχόμεθα", "ἔχεσθε", "ἔχονται"],
      "Future Active Indicative": ["ἕξω", "ἕξεις", "ἕξει", "ἕξομεν", "ἕξετε", "ἕξουσι(ν)"],
      "Imperfect Active Indicative": ["εἶχον", "εἶχες", "εἶχε(ν)", "εἴχομεν", "εἴχετε", "εἶχον"],
      "Perfect Active Indicative": ["ἔσχηκα", "ἔσχηκας", "ἔσχηκε(ν)", "ἐσχήκαμεν", "ἐσχήκατε", "ἔσχηκασι(ν)"],
      "2nd Aorist Active Indicative": ["ἔσχον", "ἔσχες", "ἔσχε(ν)", "ἐσχόμεν", "ἔσχετε", "ἔσχον"],
      "Imperfect Middle/Passive Indicative": ["εἰχόμην", "εἴχου", "εἴχετο", "εἰχόμεθα", "εἴχεσθε", "εἴχοντο"],
      "Future Middle Indicative": ["ἕξομαι", "ἕξῃ", "ἕξεται", "ἑξόμεθα", "ἕξεσθε", "ἕξονται"],
      "Aorist Active Indicative": ["ἔσχον", "ἔσχες", "ἔσχε(ν)", "ἔσχομεν", "ἔσχετε", "ἔσχον"],
      "Aorist Middle Indicative": ["ἐσχόμην", "ἔσχου", "ἔσχετο", "ἐσχόμεθα", "ἔσχεσθε", "ἔσχοντο"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἔχω", "ἔχῃς", "ἔχῃ", "ἔχωμεν", "ἔχητε", "ἔχωσιν"],
      "Present Middle/Passive Subjunctive": ["ἔχωμαι", "ἔχῃ", "ἔχηται", "ἔχώμεθα", "ἔχησθε", "ἔχωνται"],
      "Aorist Active Subjunctive": ["σχῶ", "σχῇς", "σχῇ", "σχῶμεν", "σχῆτε", "σχῶσιν"],
      "Aorist Middle Subjunctive": ["σχωμαι", "σχῃ", "σχηται", "σχώμεθα", "σχησθε", "σχωνται"],
      "Aorist Passive Subjunctive": ["σχεθῶ", "σχεθῇς", "σχεθῇ", "σχεθῶμεν", "σχεθῆτε", "σχεθῶσιν"],
    },
    infinitives: {
      "Present Active": "ἔχειν",
      "Present Middle/Passive": "ἔχεσθαι",
      "2nd Aorist Active": "σχεῖν",
      "Perfect Active": "ἐσχηκέναι",
    },
    imperative: {
      "Present Active Imperative": ["ἔχε", "ἐχέτω", "ἔχετε", "ἐχέτωσαν"],
      "Present Middle/Passive Imperative": ["ἔχου", "ἐχέσθω", "ἔχεσθε", "ἐχέσθωσαν"],
      "2nd Aorist Active Imperative": ["σχέ", "σχέτω", "σχέτε", "σχέτωσαν"],
    },

  },
  "πιστεύω": {
    meaning: "I believe, have faith (in), trust",
    indicative: {
      "Present Active Indicative": ["πιστεύω", "πιστεύεις", "πιστεύει", "πιστεύομεν", "πιστεύετε", "πιστεύουσι(ν)"],
      "Present Middle/Passive Indicative": ["πιστεύομαι", "πιστεύῃ", "πιστεύεται", "πιστευόμεθα", "πιστεύεσθε", "πιστεύονται"],
      "Future Active Indicative": ["πιστεύσω", "πιστεύσεις", "πιστεύσει", "πιστεύσομεν", "πιστεύσετε", "πιστεύσουσι(ν)"],
      "Imperfect Active Indicative": ["ἐπίστευον", "ἐπίστευες", "ἐπίστευε(ν)", "ἐπιστεύομεν", "ἐπιστεύετε", "ἐπίστευον"],
      "1st Aorist Active Indicative": ["ἐπίστευσα", "ἐπίστευσας", "ἐπίστευσε(ν)", "ἐπιστεύσαμεν", "ἐπιστεύσατε", "ἐπίστευσαν"],
      "1st Aorist Passive Indicative": ["ἐπιστεύθην", "ἐπιστεύθης", "ἐπιστεύθη", "ἐπιστεύθημεν", "ἐπιστεύθητε", "ἐπιστεύθησαν"],
      "Perfect Active Indicative": ["πεπίστευκα", "πεπίστευκας", "πεπίστευκε(ν)", "πεπιστεύκαμεν", "πεπιστεύκατε", "πεπίστευκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["πεπίστευμαι", "πεπίστευσαι", "πεπίστευται", "πεπιστεύμεθα", "πεπίστευσθε", "πεπίστευνται"],
      "Imperfect Middle/Passive Indicative": ["ἐπιστευόμην", "ἐπιστεύου", "ἐπιστεύετο", "ἐπιστευόμεθα", "ἐπιστεύεσθε", "ἐπιστεύοντο"],
      "Future Middle Indicative": ["πιστεύσομαι", "πιστεύσῃ", "πιστεύσεται", "πιστευσόμεθα", "πιστεύσεσθε", "πιστεύσονται"],
      "Future Passive Indicative": ["πιστευθήσομαι", "πιστευθήσῃ", "πιστευθήσεται", "πιστευθησόμεθα", "πιστευθήσεσθε", "πιστευθήσονται"],
      "1st Aorist Middle Indicative": ["ἐπιστευσάμην", "ἐπιστεύσω", "ἐπιστεύσατο", "ἐπιστευσάμεθα", "ἐπιστεύσασθε", "ἐπιστεύσαντο"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["πιστεύω", "πιστεύῃς", "πιστεύῃ", "πιστεύωμεν", "πιστεύητε", "πιστεύωσιν"],
      "Present Middle/Passive Subjunctive": ["πιστεύωμαι", "πιστεύῃ", "πιστεύηται", "πιστεύώμεθα", "πιστεύησθε", "πιστεύωνται"],
      "Aorist Active Subjunctive": ["πιστεύσω", "πιστεύσῃς", "πιστεύσῃ", "πιστεύσωμεν", "πιστεύσητε", "πιστεύσωσιν"],
      "Aorist Middle Subjunctive": ["πιστεύσωμαι", "πιστεύσῃ", "πιστεύσηται", "πιστεύσώμεθα", "πιστεύσησθε", "πιστεύσωνται"],
      "Aorist Passive Subjunctive": ["πιστευθῶ", "πιστευθῇς", "πιστευθῇ", "πιστευθῶμεν", "πιστευθῆτε", "πιστευθῶσιν"],
    },
    infinitives: {
      "Present Active": "πιστεύειν",
      "Present Middle/Passive": "πιστεύεσθαι",
      "1st Aorist Active": "πιστεῦσαι",
      "1st Aorist Passive": "πιστευθῆναι",
      "Perfect Active": "πεπιστευκέναι",
    },
    imperative: {
      "Present Active Imperative": ["πίστευε", "πιστευέτω", "πιστεύετε", "πιστευέτωσαν"],
      "Present Middle/Passive Imperative": ["πιστεύου", "πιστευέσθω", "πιστεύεσθε", "πιστευέσθωσαν"],
      "1st Aorist Active Imperative": ["πίστευσον", "πιστευσάτω", "πιστεύσατε", "πιστευσάτωσαν"],
      "1st Aorist Passive Imperative": ["πιστεύθητι", "πιστευθήτω", "πιστεύθητε", "πιστευθήτωσαν"],
    },

  },
  "ἀγαπάω": {
    meaning: "I love, cherish",
    indicative: {
      "Present Active Indicative": ["ἀγαπῶ", "ἀγαπᾷς", "ἀγαπᾷ", "ἀγαπῶμεν", "ἀγαπᾶτε", "ἀγαπῶσι(ν)"],
      "Present Middle/Passive Indicative": ["ἀγαπῶμαι", "ἀγαπᾷ", "ἀγαπᾶται", "ἀγαπώμεθα", "ἀγαπᾶσθε", "ἀγαπῶνται"],
      "Future Active Indicative": ["ἀγαπήσω", "ἀγαπήσεις", "ἀγαπήσει", "ἀγαπήσομεν", "ἀγαπήσετε", "ἀγαπήσουσι(ν)"],
      "Imperfect Active Indicative": ["ἠγάπων", "ἠγάπας", "ἠγάπα", "ἠγαπῶμεν", "ἠγαπᾶτε", "ἠγάπων"],
      "1st Aorist Active Indicative": ["ἠγάπησα", "ἠγάπησας", "ἠγάπησε(ν)", "ἠγαπήσαμεν", "ἠγαπήσατε", "ἠγάπησαν"],
      "1st Aorist Passive Indicative": ["ἠγαπήθην", "ἠγαπήθης", "ἠγαπήθη", "ἠγαπήθημεν", "ἠγαπήθητε", "ἠγαπήθησαν"],
      "Perfect Active Indicative": ["ἠγάπηκα", "ἠγάπηκας", "ἠγάπηκε(ν)", "ἠγαπήκαμεν", "ἠγαπήκατε", "ἠγάπηκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["ἠγάπημαι", "ἠγάπησαι", "ἠγάπηται", "ἠγαπήμεθα", "ἠγάπησθε", "ἠγάπηνται"],
      "Imperfect Middle/Passive Indicative": ["ἠγαπώμην", "ἠγάπου", "ἠγαπᾶτο", "ἠγαπώμεθα", "ἠγαπᾶσθε", "ἠγαπῶντο"],
      "Future Middle Indicative": ["ἀγαπήσομαι", "ἀγαπήσῃ", "ἀγαπήσεται", "ἀγαπησόμεθα", "ἀγαπήσεσθε", "ἀγαπήσονται"],
      "Future Passive Indicative": ["ἀγαπηθήσομαι", "ἀγαπηθήσῃ", "ἀγαπηθήσεται", "ἀγαπηθησόμεθα", "ἀγαπηθήσεσθε", "ἀγαπηθήσονται"],
      "1st Aorist Middle Indicative": ["ἠγαπησάμην", "ἠγαπήσω", "ἠγαπήσατο", "ἠγαπησάμεθα", "ἠγαπήσασθε", "ἠγαπήσαντο"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἀγαπῶ", "ἀγαπᾷς", "ἀγαπᾷ", "ἀγαπῶμεν", "ἀγαπᾶτε", "ἀγαπῶσιν"],
      "Present Middle/Passive Subjunctive": ["ἀγαπῶμαι", "ἀγαπᾷ", "ἀγαπᾶται", "ἀγαπώμεθα", "ἀγαπᾶσθε", "ἀγαπῶνται"],
      "Aorist Active Subjunctive": ["ἀγαπήσω", "ἀγαπήσῃς", "ἀγαπήσῃ", "ἀγαπήσωμεν", "ἀγαπήσητε", "ἀγαπήσωσιν"],
      "Aorist Middle Subjunctive": ["ἀγαπήσωμαι", "ἀγαπήσῃ", "ἀγαπήσηται", "ἀγαπήσώμεθα", "ἀγαπήσησθε", "ἀγαπήσωνται"],
      "Aorist Passive Subjunctive": ["εγαπήῶ", "εγαπήῇς", "εγαπήῇ", "εγαπήῶμεν", "εγαπήῆτε", "εγαπήῶσιν"],
    },
    infinitives: {
      "Present Active": "ἀγαπᾶν",
      "Present Middle/Passive": "ἀγαπᾶσθαι",
      "1st Aorist Active": "ἀγαπῆσαι",
      "1st Aorist Passive": "ἀγαπηθῆναι",
      "Perfect Active": "ἠγαπηκέναι",
    },
    imperative: {
      "Present Active Imperative": ["ἀγάπα", "ἀγαπάτω", "ἀγαπᾶτε", "ἀγαπάτωσαν"],
      "Present Middle/Passive Imperative": ["ἀγαπῶ", "ἀγαπάσθω", "ἀγαπᾶσθε", "ἀγαπάσθωσαν"],
      "1st Aorist Active Imperative": ["ἀγάπησον", "ἀγαπησάτω", "ἀγαπήσατε", "ἀγαπησάτωσαν"],
      "1st Aorist Passive Imperative": ["ἀγαπήθητι", "ἀγαπηθήτω", "ἀγαπήθητε", "ἀγαπηθήτωσαν"],
    },

  },
  "ζητέω": {
    meaning: "I seek, desire, try to obtain",
    indicative: {
      "Present Active Indicative": ["ζητῶ", "ζητεῖς", "ζητεῖ", "ζητοῦμεν", "ζητεῖτε", "ζητοῦσι(ν)"],
      "Present Middle/Passive Indicative": ["ζητοῦμαι", "ζητεῖ", "ζητεῖται", "ζητούμεθα", "ζητεῖσθε", "ζητοῦνται"],
      "Future Active Indicative": ["ζητήσω", "ζητήσεις", "ζητήσει", "ζητήσομεν", "ζητήσετε", "ζητήσουσι(ν)"],
      "Imperfect Active Indicative": ["ἐζήτουν", "ἐζήτεις", "ἐζήτει", "ἐζητοῦμεν", "ἐζητεῖτε", "ἐζήτουν"],
      "1st Aorist Active Indicative": ["ἐζήτησα", "ἐζήτησας", "ἐζήτησε(ν)", "ἐζητήσαμεν", "ἐζητήσατε", "ἐζήτησαν"],
      "Perfect Active Indicative": ["ἐζήτηκα", "ἐζήτηκας", "ἐζήτηκε(ν)", "ἐζητήκαμεν", "ἐζητήκατε", "ἐζήτηκασι(ν)"],
      "Imperfect Middle/Passive Indicative": ["ἐζητούμην", "ἐζητοῦ", "ἐζητεῖτο", "ἐζητούμεθα", "ἐζητεῖσθε", "ἐζητοῦντο"],
      "Future Middle Indicative": ["ζητήσομαι", "ζητήσῃ", "ζητήσεται", "ζητησόμεθα", "ζητήσεσθε", "ζητήσονται"],
      "Future Passive Indicative": ["ζητηθήσομαι", "ζητηθήσῃ", "ζητηθήσεται", "ζητηθησόμεθα", "ζητηθήσεσθε", "ζητηθήσονται"],
      "1st Aorist Middle Indicative": ["ἐζητησάμην", "ἐζητήσω", "ἐζητήσατο", "ἐζητησάμεθα", "ἐζητήσασθε", "ἐζητήσαντο"],
      "1st Aorist Passive Indicative": ["ἐζητήθην", "ἐζητήθης", "ἐζητήθη", "ἐζητήθημεν", "ἐζητήθητε", "ἐζητήθησαν"],
      "Perfect Middle/Passive Indicative": ["ἐζήτημαι", "ἐζήτησαι", "ἐζήτηται", "ἐζητήμεθα", "ἐζήτησθε", "ἐζήτηνται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ζητῶ", "ζητῇς", "ζητῇ", "ζητῶμεν", "ζητῆτε", "ζητῶσιν"],
      "Present Middle/Passive Subjunctive": ["ζητῶμαι", "ζητῇ", "ζητῆται", "ζητώμεθα", "ζητῆσθε", "ζητῶνται"],
      "Aorist Active Subjunctive": ["ζητήσω", "ζητήσῃς", "ζητήσῃ", "ζητήσωμεν", "ζητήσητε", "ζητήσωσιν"],
      "Aorist Middle Subjunctive": ["ζητήσωμαι", "ζητήσῃ", "ζητήσηται", "ζητήσώμεθα", "ζητήσησθε", "ζητήσωνται"],
      "Aorist Passive Subjunctive": ["ζητηθῶ", "ζητηθῇς", "ζητηθῇ", "ζητηθῶμεν", "ζητηθῆτε", "ζητηθῶσιν"],
    },
    infinitives: {
      "Present Active": "ζητεῖν",
      "Present Middle/Passive": "ζητεῖσθαι",
      "1st Aorist Active": "ζητῆσαι",
    },
    imperative: {
      "Present Active Imperative": ["ζήτει", "ζητείτω", "ζητεῖτε", "ζητείτωσαν"],
      "Present Middle/Passive Imperative": ["ζητοῦ", "ζητείσθω", "ζητεῖσθε", "ζητείσθωσαν"],
      "1st Aorist Active Imperative": ["ζήτησον", "ζητησάτω", "ζητήσατε", "ζητησάτωσαν"],
      "1st Aorist Passive Imperative": ["ζητήθητι", "ζητηθήτω", "ζητήθητε", "ζητηθήτωσαν"],
    },

  },
  "καλέω": {
    meaning: "I call, name, invite",
    indicative: {
      "Present Active Indicative": ["καλῶ", "καλεῖς", "καλεῖ", "καλοῦμεν", "καλεῖτε", "καλοῦσι(ν)"],
      "Present Middle/Passive Indicative": ["καλοῦμαι", "καλεῖ", "καλεῖται", "καλούμεθα", "καλεῖσθε", "καλοῦνται"],
      "Future Active Indicative": ["καλέσω", "καλέσεις", "καλέσει", "καλέσομεν", "καλέσετε", "καλέσουσι(ν)"],
      "Imperfect Active Indicative": ["ἐκάλουν", "ἐκάλεις", "ἐκάλει", "ἐκαλοῦμεν", "ἐκαλεῖτε", "ἐκάλουν"],
      "1st Aorist Active Indicative": ["ἐκάλεσα", "ἐκάλεσας", "ἐκάλεσε(ν)", "ἐκαλέσαμεν", "ἐκαλέσατε", "ἐκάλεσαν"],
      "1st Aorist Passive Indicative": ["ἐκλήθην", "ἐκλήθης", "ἐκλήθη", "ἐκλήθημεν", "ἐκλήθητε", "ἐκλήθησαν"],
      "Perfect Active Indicative": ["κέκληκα", "κέκληκας", "κέκληκε(ν)", "κεκλήκαμεν", "κεκλήκατε", "κέκληκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["κέκλημαι", "κέκλησαι", "κέκληται", "κεκλήμεθα", "κέκλησθε", "κέκληνται"],
      "Imperfect Middle/Passive Indicative": ["ἐκαλούμην", "ἐκαλοῦ", "ἐκαλεῖτο", "ἐκαλούμεθα", "ἐκαλεῖσθε", "ἐκαλοῦντο"],
      "Future Middle Indicative": ["καλέσομαι", "καλέσῃ", "καλέσεται", "καλεσόμεθα", "καλέσεσθε", "καλέσονται"],
      "Future Passive Indicative": ["κληθήσομαι", "κληθήσῃ", "κληθήσεται", "κληθησόμεθα", "κληθήσεσθε", "κληθήσονται"],
      "1st Aorist Middle Indicative": ["ἐκαλεσάμην", "ἐκάλεσω", "ἐκαλέσατο", "ἐκαλεσάμεθα", "ἐκαλέσασθε", "ἐκαλέσαντο"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["καλῶ", "καλῇς", "καλῇ", "καλῶμεν", "καλῆτε", "καλῶσιν"],
      "Present Middle/Passive Subjunctive": ["καλῶμαι", "καλῇ", "καλῆται", "καλώμεθα", "καλῆσθε", "καλῶνται"],
      "Aorist Active Subjunctive": ["καλέσω", "καλέσῃς", "καλέσῃ", "καλέσωμεν", "καλέσητε", "καλέσωσιν"],
      "Aorist Middle Subjunctive": ["καλέσωμαι", "καλέσῃ", "καλέσηται", "καλέσώμεθα", "καλέσησθε", "καλέσωνται"],
      "Aorist Passive Subjunctive": ["κληθῶ", "κληθῇς", "κληθῇ", "κληθῶμεν", "κληθῆτε", "κληθῶσιν"],
    },
    infinitives: {
      "Present Active": "καλεῖν",
      "Present Middle/Passive": "καλεῖσθαι",
      "1st Aorist Active": "καλέσαι",
      "1st Aorist Passive": "κληθῆναι",
      "Perfect Active": "κεκληκέναι",
      "Perfect Middle/Passive": "κεκλῆσθαι",
    },
    imperative: {
      "Present Active Imperative": ["κάλει", "καλείτω", "καλεῖτε", "καλείτωσαν"],
      "Present Middle/Passive Imperative": ["καλοῦ", "καλείσθω", "καλεῖσθε", "καλείσθωσαν"],
      "1st Aorist Active Imperative": ["κάλεσον", "καλεσάτω", "καλέσατε", "καλεσάτωσαν"],
      "1st Aorist Passive Imperative": ["κλήθητι", "κληθήτω", "κλήθητε", "κληθήτωσαν"],
    },

  },
  "λαλέω": {
    meaning: "I speak, say",
    indicative: {
      "Present Active Indicative": ["λαλῶ", "λαλεῖς", "λαλεῖ", "λαλοῦμεν", "λαλεῖτε", "λαλοῦσι(ν)"],
      "Present Middle/Passive Indicative": ["λαλοῦμαι", "λαλεῖ", "λαλεῖται", "λαλούμεθα", "λαλεῖσθε", "λαλοῦνται"],
      "Future Active Indicative": ["λαλήσω", "λαλήσεις", "λαλήσει", "λαλήσομεν", "λαλήσετε", "λαλήσουσι(ν)"],
      "Imperfect Active Indicative": ["ἐλάλουν", "ἐλάλεις", "ἐλάλει", "ἐλαλοῦμεν", "ἐλαλεῖτε", "ἐλάλουν"],
      "1st Aorist Active Indicative": ["ἐλάλησα", "ἐλάλησας", "ἐλάλησε(ν)", "ἐλαλήσαμεν", "ἐλαλήσατε", "ἐλάλησαν"],
      "1st Aorist Passive Indicative": ["ἐλαλήθην", "ἐλαλήθης", "ἐλαλήθη", "ἐλαλήθημεν", "ἐλαλήθητε", "ἐλαλήθησαν"],
      "Perfect Active Indicative": ["λελάληκα", "λελάληκας", "λελάληκε(ν)", "λελαλήκαμεν", "λελαλήκατε", "λελάληκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["λελάλημαι", "λελάλησαι", "λελάληται", "λελαλήμεθα", "λελάλησθε", "λελάληνται"],
      "Imperfect Middle/Passive Indicative": ["ἐλαλούμην", "ἐλαλοῦ", "ἐλαλεῖτο", "ἐλαλούμεθα", "ἐλαλεῖσθε", "ἐλαλοῦντο"],
      "Future Middle Indicative": ["λαλήσομαι", "λαλήσῃ", "λαλήσεται", "λαλησόμεθα", "λαλήσεσθε", "λαλήσονται"],
      "Future Passive Indicative": ["λαληθήσομαι", "λαληθήσῃ", "λαληθήσεται", "λαληθησόμεθα", "λαληθήσεσθε", "λαληθήσονται"],
      "1st Aorist Middle Indicative": ["ἐλαλησάμην", "ἐλάλησω", "ἐλαλήσατο", "ἐλαλησάμεθα", "ἐλαλήσασθε", "ἐλαλήσαντο"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["λαλῶ", "λαλῇς", "λαλῇ", "λαλῶμεν", "λαλῆτε", "λαλῶσιν"],
      "Present Middle/Passive Subjunctive": ["λαλῶμαι", "λαλῇ", "λαλῆται", "λαλώμεθα", "λαλῆσθε", "λαλῶνται"],
      "Aorist Active Subjunctive": ["λαλήσω", "λαλήσῃς", "λαλήσῃ", "λαλήσωμεν", "λαλήσητε", "λαλήσωσιν"],
      "Aorist Middle Subjunctive": ["λαλήσωμαι", "λαλήσῃ", "λαλήσηται", "λαλήσώμεθα", "λαλήσησθε", "λαλήσωνται"],
      "Aorist Passive Subjunctive": ["λαλήῶ", "λαλήῇς", "λαλήῇ", "λαλήῶμεν", "λαλήῆτε", "λαλήῶσιν"],
    },
    infinitives: {
      "Present Active": "λαλεῖν",
      "Present Middle/Passive": "λαλεῖσθαι",
      "1st Aorist Active": "λαλῆσαι",
      "1st Aorist Passive": "λαληθῆναι",
      "Perfect Active": "λελαληκέναι",
    },
    imperative: {
      "Present Active Imperative": ["λάλει", "λαλείτω", "λαλεῖτε", "λαλείτωσαν"],
      "Present Middle/Passive Imperative": ["λαλοῦ", "λαλείσθω", "λαλεῖσθε", "λαλείσθωσαν"],
      "1st Aorist Active Imperative": ["λάλησον", "λαλησάτω", "λαλήσατε", "λαλησάτωσαν"],
      "1st Aorist Passive Imperative": ["λαλήθητι", "λαληθήτω", "λαλήθητε", "λαληθήτωσαν"],
    },

  },
  "πληρόω": {
    meaning: "I fill, complete, fulfill",
    indicative: {
      "Present Active Indicative": ["πληρῶ", "πληροῖς", "πληροῖ", "πληροῦμεν", "πληροῦτε", "πληροῦσι(ν)"],
      "Present Middle/Passive Indicative": ["πληροῦμαι", "πληροῖ", "πληροῦται", "πληρούμεθα", "πληροῦσθε", "πληροῦνται"],
      "Future Active Indicative": ["πληρώσω", "πληρώσεις", "πληρώσει", "πληρώσομεν", "πληρώσετε", "πληρώσουσι(ν)"],
      "Imperfect Active Indicative": ["ἐπλήρουν", "ἐπλήρου", "ἐπλήρου", "ἐπληροῦμεν", "ἐπληροῦτε", "ἐπλήρουν"],
      "1st Aorist Active Indicative": ["ἐπλήρωσα", "ἐπλήρωσας", "ἐπλήρωσε(ν)", "ἐπληρώσαμεν", "ἐπληρώσατε", "ἐπλήρωσαν"],
      "1st Aorist Passive Indicative": ["ἐπληρώθην", "ἐπληρώθης", "ἐπληρώθη", "ἐπληρώθημεν", "ἐπληρώθητε", "ἐπληρώθησαν"],
      "Perfect Active Indicative": ["πεπλήρωκα", "πεπλήρωκας", "πεπλήρωκε(ν)", "πεπληρώκαμεν", "πεπληρώκατε", "πεπλήρωκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["πεπλήρωμαι", "πεπλήρωσαι", "πεπλήρωται", "πεπληρώμεθα", "πεπλήρωσθε", "πεπλήρωνται"],
      "Imperfect Middle/Passive Indicative": ["ἐπληρούμην", "ἐπληροῦ", "ἐπληροῦτο", "ἐπληρούμεθα", "ἐπληροῦσθε", "ἐπληροῦντο"],
      "Future Middle Indicative": ["πληρώσομαι", "πληρώσῃ", "πληρώσεται", "πληρωσόμεθα", "πληρώσεσθε", "πληρώσονται"],
      "Future Passive Indicative": ["πληρωθήσομαι", "πληρωθήσῃ", "πληρωθήσεται", "πληρωθησόμεθα", "πληρωθήσεσθε", "πληρωθήσονται"],
      "1st Aorist Middle Indicative": ["ἐπληρωσάμην", "ἐπλήρωσω", "ἐπληρώσατο", "ἐπληρωσάμεθα", "ἐπληρώσασθε", "ἐπληρώσαντο"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["πληρῶ", "πληροῖς", "πληροῖ", "πληρῶμεν", "πληρῶτε", "πληρῶσιν"],
      "Present Middle/Passive Subjunctive": ["πληρῶμαι", "πληρῇ", "πληρῆται", "πληρώμεθα", "πληρῆσθε", "πληρῶνται"],
      "Aorist Active Subjunctive": ["πληρώσω", "πληρώσῃς", "πληρώσῃ", "πληρώσωμεν", "πληρώσητε", "πληρώσωσιν"],
      "Aorist Middle Subjunctive": ["πληρώσωμαι", "πληρώσῃ", "πληρώσηται", "πληρώσώμεθα", "πληρώσησθε", "πληρώσωνται"],
      "Aorist Passive Subjunctive": ["πληρωθῶ", "πληρωθῇς", "πληρωθῇ", "πληρωθῶμεν", "πληρωθῆτε", "πληρωθῶσιν"],
    },
    infinitives: {
      "Present Active": "πληροῦν",
      "Present Middle/Passive": "πληροῦσθαι",
      "1st Aorist Active": "πληρῶσαι",
      "1st Aorist Passive": "πληρωθῆναι",
      "Perfect Active": "πεπληρωκέναι",
    },
    imperative: {
      "Present Active Imperative": ["πλήρου", "πληρούτω", "πληροῦτε", "πληρούτωσαν"],
      "Present Middle/Passive Imperative": ["πληροῦ", "πληρούσθω", "πληροῦσθε", "πληρούσθωσαν"],
      "1st Aorist Active Imperative": ["πλήρωσον", "πληρωσάτω", "πληρώσατε", "πληρωσάτωσαν"],
      "1st Aorist Passive Imperative": ["πληρώθητι", "πληρωθήτω", "πληρώθητε", "πληρωθήτωσαν"],
    },

  },
  "ποιέω": {
    meaning: "I do/make",
    indicative: {
      "Present Active Indicative": ["ποιῶ", "ποιεῖς", "ποιεῖ", "ποιοῦμεν", "ποιεῖτε", "ποιοῦσι(ν)"],
      "Present Middle/Passive Indicative": ["ποιοῦμαι", "ποιεῖ", "ποιεῖται", "ποιούμεθα", "ποιεῖσθε", "ποιοῦνται"],
      "Future Active Indicative": ["ποιήσω", "ποιήσεις", "ποιήσει", "ποιήσομεν", "ποιήσετε", "ποιήσουσι(ν)"],
      "Future Middle Indicative": ["ποιήσομαι", "ποιήσῃ", "ποιήσεται", "ποιησόμεθα", "ποιήσεσθε", "ποιήσονται"],
      "Imperfect Active Indicative": ["ἐποίουν", "ἐποίεις", "ἐποίει", "ἐποιοῦμεν", "ἐποιεῖτε", "ἐποίουν"],
      "1st Aorist Active Indicative": ["ἐποίησα", "ἐποίησας", "ἐποίησε(ν)", "ἐποιήσαμεν", "ἐποιήσατε", "ἐποίησαν"],
      "1st Aorist Middle Indicative": ["ἐποιησάμην", "ἐποίησω", "ἐποιήσατο", "ἐποιησάμεθα", "ἐποιήσασθε", "ἐποιήσαντο"],
      "Perfect Active Indicative": ["πεποίηκα", "πεποίηκας", "πεποίηκε(ν)", "πεποιήκαμεν", "πεποιήκατε", "πεποίηκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["πεποίημαι", "πεποίησαι", "πεποίηται", "πεποιήμεθα", "πεποίησθε", "πεποίηνται"],
      "Imperfect Middle/Passive Indicative": ["ἐποιούμην", "ἐποιοῦ", "ἐποιεῖτο", "ἐποιούμεθα", "ἐποιεῖσθε", "ἐποιοῦντο"],
      "Future Passive Indicative": ["ποιηθήσομαι", "ποιηθήσῃ", "ποιηθήσεται", "ποιηθησόμεθα", "ποιηθήσεσθε", "ποιηθήσονται"],
      "1st Aorist Passive Indicative": ["ἐποιήθην", "ἐποιήθης", "ἐποιήθη", "ἐποιήθημεν", "ἐποιήθητε", "ἐποιήθησαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ποιῶ", "ποιῇς", "ποιῇ", "ποιῶμεν", "ποιῆτε", "ποιῶσιν"],
      "Present Middle/Passive Subjunctive": ["ποιῶμαι", "ποιῇ", "ποιῆται", "ποιώμεθα", "ποιῆσθε", "ποιῶνται"],
      "Aorist Active Subjunctive": ["ποιήσω", "ποιήσῃς", "ποιήσῃ", "ποιήσωμεν", "ποιήσητε", "ποιήσωσιν"],
      "Aorist Middle Subjunctive": ["ποιήσωμαι", "ποιήσῃ", "ποιήσηται", "ποιήσώμεθα", "ποιήσησθε", "ποιήσωνται"],
      "Aorist Passive Subjunctive": ["ποιηθῶ", "ποιηθῇς", "ποιηθῇ", "ποιηθῶμεν", "ποιηθῆτε", "ποιηθῶσιν"],
    },
    infinitives: {
      "Present Active": "ποιεῖν",
      "Present Middle/Passive": "ποιεῖσθαι",
      "1st Aorist Active": "ποιῆσαι",
      "1st Aorist Middle": "ποιήσασθαι",
      "Perfect Active": "πεποιηκέναι",
    },
    imperative: {
      "Present Active Imperative": ["ποίει", "ποιείτω", "ποιεῖτε", "ποιείτωσαν"],
      "Present Middle/Passive Imperative": ["ποιοῦ", "ποιείσθω", "ποιεῖσθε", "ποιείσθωσαν"],
      "1st Aorist Active Imperative": ["ποίησον", "ποιησάτω", "ποιήσατε", "ποιησάτωσαν"],
      "1st Aorist Passive Imperative": ["ποιήθητι", "ποιηθήτω", "ποιήθητε", "ποιηθήτωσαν"],
    },

  },
  "τηρέω": {
    meaning: "I keep, guard, observe",
    indicative: {
      "Present Active Indicative": ["τηρῶ", "τηρεῖς", "τηρεῖ", "τηροῦμεν", "τηρεῖτε", "τηροῦσι(ν)"],
      "Present Middle/Passive Indicative": ["τηροῦμαι", "τηρεῖ", "τηρεῖται", "τηρούμεθα", "τηρεῖσθε", "τηροῦνται"],
      "Future Active Indicative": ["τηρήσω", "τηρήσεις", "τηρήσει", "τηρήσομεν", "τηρήσετε", "τηρήσουσι(ν)"],
      "Imperfect Active Indicative": ["ἐτήρουν", "ἐτήρεις", "ἐτήρει", "ἐτηροῦμεν", "ἐτηρεῖτε", "ἐτήρουν"],
      "1st Aorist Active Indicative": ["ἐτήρησα", "ἐτήρησας", "ἐτήρησε(ν)", "ἐτηρήσαμεν", "ἐτηρήσατε", "ἐτήρησαν"],
      "1st Aorist Passive Indicative": ["ἐτηρήθην", "ἐτηρήθης", "ἐτηρήθη", "ἐτηρήθημεν", "ἐτηρήθητε", "ἐτηρήθησαν"],
      "Perfect Active Indicative": ["τετήρηκα", "τετήρηκας", "τετήρηκε(ν)", "τετηρήκαμεν", "τετηρήκατε", "τετήρηκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["τετήρημαι", "τετήρησαι", "τετήρηται", "τετηρήμεθα", "τετήρησθε", "τετήρηνται"],
      "Imperfect Middle/Passive Indicative": ["ἐτηρούμην", "ἐτηροῦ", "ἐτηρεῖτο", "ἐτηρούμεθα", "ἐτηρεῖσθε", "ἐτηροῦντο"],
      "Future Middle Indicative": ["τηρήσομαι", "τηρήσῃ", "τηρήσεται", "τηρησόμεθα", "τηρήσεσθε", "τηρήσονται"],
      "Future Passive Indicative": ["τηρηθήσομαι", "τηρηθήσῃ", "τηρηθήσεται", "τηρηθησόμεθα", "τηρηθήσεσθε", "τηρηθήσονται"],
      "1st Aorist Middle Indicative": ["ἐτηρησάμην", "ἐτήρησω", "ἐτηρήσατο", "ἐτηρησάμεθα", "ἐτηρήσασθε", "ἐτηρήσαντο"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["τηρῶ", "τηρῇς", "τηρῇ", "τηρῶμεν", "τηρῆτε", "τηρῶσιν"],
      "Present Middle/Passive Subjunctive": ["τηρῶμαι", "τηρῇ", "τηρῆται", "τηρώμεθα", "τηρῆσθε", "τηρῶνται"],
      "Aorist Active Subjunctive": ["τηρήσω", "τηρήσῃς", "τηρήσῃ", "τηρήσωμεν", "τηρήσητε", "τηρήσωσιν"],
      "Aorist Middle Subjunctive": ["τηρήσωμαι", "τηρήσῃ", "τηρήσηται", "τηρήσώμεθα", "τηρήσησθε", "τηρήσωνται"],
      "Aorist Passive Subjunctive": ["τηρήῶ", "τηρήῇς", "τηρήῇ", "τηρήῶμεν", "τηρήῆτε", "τηρήῶσιν"],
    },
    infinitives: {
      "Present Active": "τηρεῖν",
      "Present Middle/Passive": "τηρεῖσθαι",
      "1st Aorist Active": "τηρῆσαι",
      "1st Aorist Passive": "τηρηθῆναι",
      "Perfect Active": "τετηρηκέναι",
    },
    imperative: {
      "Present Active Imperative": ["τήρει", "τηρείτω", "τηρεῖτε", "τηρείτωσαν"],
      "Present Middle/Passive Imperative": ["τηροῦ", "τηρείσθω", "τηρεῖσθε", "τηρείσθωσαν"],
      "1st Aorist Active Imperative": ["τήρησον", "τηρησάτω", "τηρήσατε", "τηρησάτωσαν"],
      "1st Aorist Passive Imperative": ["τηρήθητι", "τηρηθήτω", "τηρήθητε", "τηρηθήτωσαν"],
    },

  },
  "ἀποκρίνομαι": {
    meaning: "I answer",
    indicative: {
      "Present Middle/Passive Indicative": ["ἀποκρίνομαι", "ἀποκρίνῃ", "ἀποκρίνεται", "ἀποκρινόμεθα", "ἀποκρίνεσθε", "ἀποκρίνονται"],
      "Future Middle Indicative": ["ἀποκρινοῦμαι", "ἀποκρινῇ", "ἀποκρινεῖται", "ἀποκρινούμεθα", "ἀποκρινεῖσθε", "ἀποκρινοῦνται"],
      "Imperfect Middle/Passive Indicative": ["ἀπεκρινόμην", "ἀπεκρίνου", "ἀπεκρίνετο", "ἀπεκρινόμεθα", "ἀπεκρίνεσθε", "ἀπεκρίνοντο"],
      "1st Aorist Passive Indicative": ["ἀπεκρίθην", "ἀπεκρίθης", "ἀπεκρίθη", "ἀπεκρίθημεν", "ἀπεκρίθητε", "ἀπεκρίθησαν"],
      "Present Indicative": ["ἀποκρίνομαι", "ἀποκρίνῃ", "ἀποκρίνεται", "ἀποκρινόμεθα", "ἀποκρίνεσθε", "ἀποκρίνονται"],
      "Imperfect Indicative": ["ἀπεκρινόμην", "ἀπεκρίνου", "ἀπεκρίνετο", "ἀπεκρινόμεθα", "ἀπεκρίνεσθε", "ἀπεκρίνοντο"],
      "Future Indicative": ["ἀποκρινοῦμαι", "ἀποκρινῇ", "ἀποκρινεῖται", "ἀποκρινούμεθα", "ἀποκρινεῖσθε", "ἀποκρινοῦνται"],
      "Aorist Indicative": ["ἀπεκρινάμην", "ἀπεκρίνω", "ἀπεκρίνατο", "ἀπεκρινάμεθα", "ἀπεκρίνασθε", "ἀπεκρίναντο"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["ἀποκρίνωμαι", "ἀποκρίνῃ", "ἀποκρίνηται", "ἀποκρινώμεθα", "ἀποκρίνησθε", "ἀποκρίνωνται"],
      "Aorist Passive Subjunctive": ["ἀποκριθῶ", "ἀποκριθῇς", "ἀποκριθῇ", "ἀποκριθῶμεν", "ἀποκριθῆτε", "ἀποκριθῶσιν"],
    },
    infinitives: {
      "Present Middle/Passive": "ἀποκρίνεσθαι",
      "1st Aorist Passive": "ἀποκριθῆναι",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["ἀποκρίνου", "ἀποκρινέσθω", "ἀποκρίνεσθε", "ἀποκρινέσθωσαν"],
      "1st Aorist Passive Imperative": ["ἀποκρίθητι", "ἀποκριθήτω", "ἀποκρίθητε", "ἀποκριθήτωσαν"],
    },

  },
  "δύναμαι": {
    meaning: "I am able, am powerful",
    indicative: {
      "Present Middle/Passive Indicative": ["δύναμαι", "δύνᾳ / δύνῃ", "δύναται", "δυνάμεθα", "δύνασθε", "δύνανται"],
      "Future Middle Indicative": ["δυνήσομαι", "δυνήσῃ", "δυνήσεται", "δυνησόμεθα", "δυνήσεσθε", "δυνήσονται"],
      "Imperfect Middle/Passive Indicative": ["ἠδυνάμην", "ἠδύνω", "ἠδύνατο", "ἠδυνάμεθα", "ἠδύνασθε", "ἠδύναντο"],
      "1st Aorist Passive Indicative": ["ἠδυνήθην", "ἠδυνήθης", "ἠδυνήθη", "ἠδυνήθημεν", "ἠδυνήθητε", "ἠδυνήθησαν"],
      "Present Indicative": ["δύναμαι", "δύνῃ", "δύναται", "δυνάμεθα", "δύνασθε", "δύνανται"],
      "Imperfect Indicative": ["ἐδυνάμην", "ἐδύνου", "ἐδύνατο", "ἐδυνάμεθα", "ἐδύνασθε", "ἐδύναντο"],
      "Future Indicative": ["δυνήσομαι", "δυνήσῃ", "δυνήσεται", "δυνησόμεθα", "δυνήσεσθε", "δυνήσονται"],
      "Aorist Indicative": ["ἐδυνήθην", "ἐδυνήθης", "ἐδυνήθη", "ἐδυνήθημεν", "ἐδυνήθητε", "ἐδυνήθησαν"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["δύνωμαι", "δύνῃ", "δύνηται", "δυνώμεθα", "δύνησθε", "δύνωνται"],
      "Aorist Passive Subjunctive": ["εδυνήῶ", "εδυνήῇς", "εδυνήῇ", "εδυνήῶμεν", "εδυνήῆτε", "εδυνήῶσιν"],
    },
    infinitives: {
      "Present Middle/Passive": "δύνασθαι",
      "1st Aorist Passive": "δυνηθῆναι",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["δύνασο", "δυνάσθω", "δύνασθε", "δυνάσθωσαν"],
    },

  },
  "ἔρχομαι": {
    meaning: "I come/go",
    indicative: {
      "Present Middle/Passive Indicative": ["ἔρχομαι", "ἔρχῃ", "ἔρχεται", "ἐρχόμεθα", "ἔρχεσθε", "ἔρχονται"],
      "Future Middle Indicative": ["ἐλεύσομαι", "ἐλεύσῃ", "ἐλεύσεται", "ἐλευσόμεθα", "ἐλεύσεσθε", "ἐλεύσονται"],
      "Imperfect Middle/Passive Indicative": ["ἠρχόμην", "ἤρχου", "ἤρχετο", "ἠρχόμεθα", "ἤρχεσθε", "ἤρχοντο"],
      "Perfect Active Indicative": ["ἐλήλυθα", "ἐλήλυθας", "ἐλήλυθε(ν)", "ἐληλύθαμεν", "ἐληλύθατε", "ἐληλύθασιν"],
      "2nd Aorist Active Indicative": ["ἦλθον", "ἦλθες", "ἦλθε(ν)", "ἤλθομεν", "ἤλθετε", "ἦλθον"],
      "Present Indicative": ["ἔρχομαι", "ἔρχῃ", "ἔρχεται", "ἐρχόμεθα", "ἔρχεσθε", "ἔρχονται"],
      "Imperfect Indicative": ["ἠρχόμην", "ἤρχου", "ἤρχετο", "ἠρχόμεθα", "ἤρχεσθε", "ἤρχοντο"],
      "Future Indicative": ["ἐλεύσομαι", "ἐλεύσῃ", "ἐλεύσεται", "ἐλευσόμεθα", "ἐλεύσεσθε", "ἐλεύσονται"],
      "Aorist Indicative": ["ἦλθον", "ἦλθες", "ἦλθε(ν)", "ἤλθομεν", "ἤλθετε", "ἦλθον"],
      "Perfect Indicative": ["ἐλήλυθα", "ἐλήλυθας", "ἐλήλυθε(ν)", "ἐληλύθαμεν", "ἐληλύθατε", "ἐλήλυθασι(ν)"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["ἔρχωμαι", "ἔρχῃ", "ἔρχηται", "ἐρχώμεθα", "ἔρχησθε", "ἔρχωνται"],
      "Aorist Active Subjunctive": ["ἔλθω", "ἔλθῃς", "ἔλθῃ", "ἔλθωμεν", "ἔλθητε", "ἔλθωσιν"],
      "Aorist Middle Subjunctive": ["ἔλθωμαι", "ἔλθῃ", "ἔλθηται", "ἔλθώμεθα", "ἔλθησθε", "ἔλθωνται"],
    },
    infinitives: {
      "Present Middle/Passive": "ἔρχεσθαι",
      "2nd Aorist Active": "ἐλθεῖν",
      "Perfect Active": "ἐληλυθέναι",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["ἔρχου", "ἐρχέσθω", "ἔρχεσθε", "ἐρχέσθωσαν"],
      "2nd Aorist Active Imperative": ["ἐλθέ", "ἐλθέτω", "ἔλθετε", "ἐλθέτωσαν"],
    },

  },
  "πορεύομαι": {
    meaning: "I go, proceed; live",
    indicative: {
      "Present Middle/Passive Indicative": ["πορεύομαι", "πορεύῃ", "πορεύεται", "πορευόμεθα", "πορεύεσθε", "πορεύονται"],
      "Future Middle Indicative": ["πορεύσομαι", "πορεύσῃ", "πορεύσεται", "πορευσόμεθα", "πορεύσεσθε", "πορεύσονται"],
      "Imperfect Middle/Passive Indicative": ["ἐπορευόμην", "ἐπορεύου", "ἐπορεύετο", "ἐπορευόμεθα", "ἐπορεύεσθε", "ἐπορεύοντο"],
      "1st Aorist Passive Indicative": ["ἐπορεύθην", "ἐπορεύθης", "ἐπορεύθη", "ἐπορεύθημεν", "ἐπορεύθητε", "ἐπορεύθησαν"],
      "Perfect Middle/Passive Indicative": ["πεπόρευμαι", "πεπόρευσαι", "πεπόρευται", "πεπορεύμεθα", "πεπόρευσθε", "πεπόρευνται"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["πορεύωμαι", "πορεύῃ", "πορεύηται", "πορευώμεθα", "πορεύησθε", "πορεύωνται"],
      "Aorist Passive Subjunctive": ["πορευθῶ", "πορευθῇς", "πορευθῇ", "πορευθῶμεν", "πορευθῆτε", "πορευθῶσιν"],
    },
    infinitives: {
      "Present Middle/Passive": "πορεύεσθαι",
      "1st Aorist Passive": "πορευθῆναι",
      "Perfect Middle/Passive": "πεπορεύσθαι",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["πορεύου", "πορευέσθω", "πορεύεσθε", "πορευέσθωσαν"],
      "1st Aorist Passive Imperative": ["πορεύθητι", "πορευθήτω", "πορεύθητε", "πορευθήτωσαν"],
    },

  },
  "γεννάω": {
    meaning: "I beget, give birth to; produce",
    indicative: {
      "Present Active Indicative": ["γεννῶ", "γεννᾷς", "γεννᾷ", "γεννῶμεν", "γεννᾶτε", "γεννῶσι(ν)"],
      "Present Middle/Passive Indicative": ["γεννῶμαι", "γεννᾷ", "γεννᾶται", "γεννώμεθα", "γεννᾶσθε", "γεννῶνται"],
      "Future Active Indicative": ["γεννήσω", "γεννήσεις", "γεννήσει", "γεννήσομεν", "γεννήσετε", "γεννήσουσι(ν)"],
      "Imperfect Active Indicative": ["ἐγέννων", "ἐγέννας", "ἐγέννα", "ἐγεννῶμεν", "ἐγεννᾶτε", "ἐγέννων"],
      "1st Aorist Active Indicative": ["ἐγέννησα", "ἐγέννησας", "ἐγέννησε(ν)", "ἐγεννήσαμεν", "ἐγεννήσατε", "ἐγέννησαν"],
      "1st Aorist Passive Indicative": ["ἐγεννήθην", "ἐγεννήθης", "ἐγεννήθη", "ἐγεννήθημεν", "ἐγεννήθητε", "ἐγεννήθησαν"],
      "Perfect Active Indicative": ["γεγέννηκα", "γεγέννηκας", "γεγέννηκε(ν)", "γεγεννήκαμεν", "γεγεννήκατε", "γεγέννηκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["γεγέννημαι", "γεγέννησαι", "γεγέννηται", "γεγεννήμεθα", "γεγέννησθε", "γεγέννηνται"],
      "Imperfect Middle/Passive Indicative": ["ἐγεννώμην", "ἐγέννου", "ἐγεννᾶτο", "ἐγεννώμεθα", "ἐγεννᾶσθε", "ἐγεννῶντο"],
      "Future Middle Indicative": ["γεννήσομαι", "γεννήσῃ", "γεννήσεται", "γεννησόμεθα", "γεννήσεσθε", "γεννήσονται"],
      "Future Passive Indicative": ["γεννηθήσομαι", "γεννηθήσῃ", "γεννηθήσεται", "γεννηθησόμεθα", "γεννηθήσεσθε", "γεννηθήσονται"],
      "1st Aorist Middle Indicative": ["ἐγεννησάμην", "ἐγέννησω", "ἐγεννήσατο", "ἐγεννησάμεθα", "ἐγεννήσασθε", "ἐγεννήσαντο"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["γεννῶ", "γεννᾷς", "γεννᾷ", "γεννῶμεν", "γεννᾶτε", "γεννῶσιν"],
      "Present Middle/Passive Subjunctive": ["γεννῶμαι", "γεννᾷ", "γεννᾶται", "γεννώμεθα", "γεννᾶσθε", "γεννῶνται"],
      "Aorist Active Subjunctive": ["γεννήσω", "γεννήσῃς", "γεννήσῃ", "γεννήσωμεν", "γεννήσητε", "γεννήσωσιν"],
      "Aorist Middle Subjunctive": ["γεννήσωμαι", "γεννήσῃ", "γεννήσηται", "γεννήσώμεθα", "γεννήσησθε", "γεννήσωνται"],
      "Aorist Passive Subjunctive": ["γεννήῶ", "γεννήῇς", "γεννήῇ", "γεννήῶμεν", "γεννήῆτε", "γεννήῶσιν"],
    },
    infinitives: {
      "Present Active": "γεννᾶν",
      "Present Middle/Passive": "γεννᾶσθαι",
      "1st Aorist Active": "γεννῆσαι",
      "1st Aorist Passive": "γεννηθῆναι",
      "Perfect Active": "γεγεννηκέναι",
    },
    imperative: {
      "Present Active Imperative": ["γέννα", "γεννάτω", "γεννᾶτε", "γεννάτωσαν"],
      "1st Aorist Active Imperative": ["γέννησον", "γεννησάτω", "γεννήσατε", "γεννησάτωσαν"],
      "1st Aorist Passive Imperative": ["γεννήθητι", "γεννηθήτω", "γεννήθητε", "γεννηθήτωσαν"],
    },

  },
  "ζάω": {
    meaning: "I live",
    indicative: {
      "Present Active Indicative": ["ζῶ", "ζῇς", "ζῇ", "ζῶμεν", "ζῆτε", "ζῶσι(ν)"],
      "Future Active Indicative": ["ζήσω", "ζήσεις", "ζήσει", "ζήσομεν", "ζήσετε", "ζήσουσι(ν)"],
      "Imperfect Active Indicative": ["ἔζων", "ἔζας", "ἔζα", "ἐζῶμεν", "ἐζᾶτε", "ἔζων"],
      "1st Aorist Active Indicative": ["ἔζησα", "ἔζησας", "ἔζησε(ν)", "ἐζήσαμεν", "ἐζήσατε", "ἔζησαν"],
      "Present Middle/Passive Indicative": ["ζῶμαι", "ζῇ", "ζῆται", "ζώμεθα", "ζῆσθε", "ζῶνται"],
      "Imperfect Middle/Passive Indicative": ["ἐζώμην", "ἔζου", "ἐζᾶτο", "ἐζώμεθα", "ἐζᾶσθε", "ἐζῶντο"],
      "Future Middle Indicative": ["ζήσομαι", "ζήσῃ", "ζήσεται", "ζησόμεθα", "ζήσεσθε", "ζήσονται"],
      "Future Passive Indicative": ["ζηθήσομαι", "ζηθήσῃ", "ζηθήσεται", "ζηθησόμεθα", "ζηθήσεσθε", "ζηθήσονται"],
      "1st Aorist Middle Indicative": ["ἐζησάμην", "ἔζησω", "ἐζήσατο", "ἐζησάμεθα", "ἐζήσασθε", "ἐζήσαντο"],
      "1st Aorist Passive Indicative": ["ἐζήθην", "ἐζήθης", "ἐζήθη", "ἐζήθημεν", "ἐζήθητε", "ἐζήθησαν"],
      "Perfect Active Indicative": ["ἔζηκα", "ἔζηκας", "ἔζηκε(ν)", "ἐζήκαμεν", "ἐζήκατε", "ἔζηκασι(ν)"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ζῶ", "ζῇς", "ζῇ", "ζῶμεν", "ζῆτε", "ζῶσιν"],
      "Present Middle/Passive Subjunctive": ["ζῶμαι", "ζῇ", "ζῆται", "ζώμεθα", "ζῆσθε", "ζῶνται"],
      "Aorist Active Subjunctive": ["ζησω", "ζησῃς", "ζησῃ", "ζησωμεν", "ζησητε", "ζησωσιν"],
      "Aorist Middle Subjunctive": ["ζησωμαι", "ζησῃ", "ζησηται", "ζησώμεθα", "ζησησθε", "ζησωνται"],
    },
    infinitives: {
      "Present Active": "ζῆν",
      "1st Aorist Active": "ζῆσαι",
    },
    imperative: {
      "Present Active Imperative": ["ζῆ", "ζάτω", "ζᾶτε", "ζάτωσαν"],
    },

  },
  "προσκυνέω": {
    meaning: "I worship",
    indicative: {
      "Present Active Indicative": ["προσκυνῶ", "προσκυνεῖς", "προσκυνεῖ", "προσκυνοῦμεν", "προσκυνεῖτε", "προσκυνοῦσιν"],
      "Future Active Indicative": ["προσκυνήσω", "προσκυνήσεις", "προσκυνήσει", "προσκυνήσομεν", "προσκυνήσετε", "προσκυνήσουσιν"],
      "Imperfect Active Indicative": ["προσεκύνουν", "προσεκύνεις", "προσεκύνει", "προσεκυνοῦμεν", "προσεκυνεῖτε", "προσεκύνουν"],
      "1st Aorist Active Indicative": ["προσεκύνησα", "προσεκύνησας", "προσεκύνησε(ν)", "προσεκυνήσαμεν", "προσεκυνήσατε", "προσεκύνησαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["προσκυνῶ", "προσκυνῇς", "προσκυνῇ", "προσκυνῶμεν", "προσκυνῆτε", "προσκυνῶσιν"],
      "Present Middle/Passive Subjunctive": ["προσκυνῶμαι", "προσκυνῇ", "προσκυνῆται", "προσκυνώμεθα", "προσκυνῆσθε", "προσκυνῶνται"],
      "Aorist Active Subjunctive": ["προσκύνησω", "προσκύνησῃς", "προσκύνησῃ", "προσκύνησωμεν", "προσκύνησητε", "προσκύνησωσιν"],
      "Aorist Middle Subjunctive": ["προσκύνησωμαι", "προσκύνησῃ", "προσκύνησηται", "προσκύνησώμεθα", "προσκύνησησθε", "προσκύνησωνται"],
      "Aorist Passive Subjunctive": ["προσκυνηθῶ", "προσκυνηθῇς", "προσκυνηθῇ", "προσκυνηθῶμεν", "προσκυνηθῆτε", "προσκυνηθῶσιν"],
    },
    infinitives: {
      "Present Active": "προσκυνεῖν",
      "1st Aorist Active": "προσκυνῆσαι",
    },
    imperative: {
      "Present Active Imperative": ["προσκύνει", "προσκυνείτω", "προσκυνεῖτε", "προσκυνείτωσαν"],
      "1st Aorist Active Imperative": ["προσκύνησον", "προσκυνησάτω", "προσκυνήσατε", "προσκυνησάτωσαν"],
    },

  },
  "αἴρω": {
    meaning: "I raise, take up, take away",
    indicative: {
      "Present Active Indicative": ["αἴρω", "αἴρεις", "αἴρει", "αἴρομεν", "αἴρετε", "αἴρουσι(ν)"],
      "Present Middle/Passive Indicative": ["αἴρομαι", "αἴρῃ", "αἴρεται", "αἰρόμεθα", "αἴρεσθε", "αἴρονται"],
      "Future Active Indicative": ["ἀρῶ", "ἀρεῖς", "ἀρεῖ", "ἀροῦμεν", "ἀρεῖτε", "ἀροῦσι(ν)"],
      "Imperfect Active Indicative": ["ᾖρον", "ᾖρες", "ᾖρε(ν)", "ᾖρομεν", "ᾖρετε", "ᾖρον"],
      "1st Aorist Active Indicative": ["ἦρα", "ἦρας", "ἦρε(ν)", "ἤραμεν", "ἤρατε", "ἦραν"],
      "1st Aorist Passive Indicative": ["ἤρθην", "ἤρθης", "ἤρθη", "ἤρθημεν", "ἤρθητε", "ἤρθησαν"],
      "Perfect Active Indicative": ["ἦρκα", "ἦρκας", "ἦρκε(ν)", "ἤρκαμεν", "ἤρκατε", "ἦρκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["ἦρμαι", "ἦρσαι", "ἦρται", "ἤρμεθα", "ἦρσθε", "ἦρνται"],
      "Imperfect Middle/Passive Indicative": ["ᾐρόμην", "ᾖρου", "ᾖρετο", "ᾐρόμεθα", "ᾖρεσθε", "ᾖροντο"],
      "Future Passive Indicative": ["ἀρθήσομαι", "ἀρθήσῃ", "ἀρθήσεται", "ἀρθησόμεθα", "ἀρθήσεσθε", "ἀρθήσονται"],
      "Aorist Passive Indicative": ["ἤρθην", "ἤρθης", "ἤρθη", "ἤρθημεν", "ἤρθητε", "ἤρθησαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["αἴρω", "αἴρῃς", "αἴρῃ", "αἴρωμεν", "αἴρητε", "αἴρωσιν"],
      "Present Middle/Passive Subjunctive": ["αἴρωμαι", "αἴρῃ", "αἴρηται", "αἴρώμεθα", "αἴρησθε", "αἴρωνται"],
      "Aorist Active Subjunctive": ["ἄρω", "ἄρῃς", "ἄρῃ", "ἄρωμεν", "ἄρητε", "ἄρωσιν"],
      "Aorist Middle Subjunctive": ["ἄρωμαι", "ἄρῃ", "ἄρηται", "ἄρώμεθα", "ἄρησθε", "ἄρωνται"],
      "Aorist Passive Subjunctive": ["ερῶ", "ερῇς", "ερῇ", "ερῶμεν", "ερῆτε", "ερῶσιν"],
    },
    infinitives: {
      "Present Active": "αἴρειν",
      "Present Middle/Passive": "αἴρεσθαι",
      "1st Aorist Active": "ἆραι",
      "1st Aorist Passive": "ἀρθῆναι",
      "Perfect Active": "ἠρκέναι",
    },
    imperative: {
      "Present Active Imperative": ["αἶρε", "αἰρέτω", "αἴρετε", "αἰρέτωσαν"],
      "Present Middle/Passive Imperative": ["αἴρου", "αἰρέσθω", "αἴρεσθε", "αἰρέσθωσαν"],
      "1st Aorist Active Imperative": ["ἆρον", "ἀράτω", "ἄρατε", "ἀράτωσαν"],
      "1st Aorist Passive Imperative": ["ἄρθητι", "ἀρθήτω", "ἄρθητε", "ἀρθήτωσαν"],
    },

  },
  "ἀποκτείνω": {
    meaning: "I kill",
    indicative: {
      "Present Active Indicative": ["ἀποκτείνω", "ἀποκτείνεις", "ἀποκτείνει", "ἀποκτείνομεν", "ἀποκτείνετε", "ἀποκτείνουσι(ν)"],
      "Future Active Indicative": ["ἀποκτενῶ", "ἀποκτενεῖς", "ἀποκτενεῖ", "ἀποκτενοῦμεν", "ἀποκτενεῖτε", "ἀποκτενοῦσι(ν)"],
      "Imperfect Active Indicative": ["ἀπέκτεινον", "ἀπέκτεινες", "ἀπέκτεινε(ν)", "ἀπεκτείνομεν", "ἀπεκτείνετε", "ἀπέκτεινον"],
      "1st Aorist Active Indicative": ["ἀπέκτεινα", "ἀπέκτεινας", "ἀπέκτεινε(ν)", "ἀπεκτείναμεν", "ἀπεκτείνατε", "ἀπέκτειναν"],
      "1st Aorist Passive Indicative": ["ἀπεκτάνθην", "ἀπεκτάνθης", "ἀπεκτάνθη", "ἀπεκτάνθημεν", "ἀπεκτάνθητε", "ἀπεκτάνθησαν"],
      "Aorist Active Indicative": ["ἀπέκτεινα", "ἀπέκτεινας", "ἀπέκτεινε(ν)", "ἀπεκτείναμεν", "ἀπεκτείνατε", "ἀπέκτειναν"],
      "Perfect Active Indicative": ["ἀπέκτονα", "ἀπέκτονας", "ἀπέκτονε(ν)", "ἀπεκτόναμεν", "ἀπεκτόνατε", "ἀπέκτονασι(ν)"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἀποκτείνω", "ἀποκτείνῃς", "ἀποκτείνῃ", "ἀποκτείνωμεν", "ἀποκτείνητε", "ἀποκτείνωσιν"],
      "Present Middle/Passive Subjunctive": ["ἀποκτείνωμαι", "ἀποκτείνῃ", "ἀποκτείνηται", "ἀποκτείνώμεθα", "ἀποκτείνησθε", "ἀποκτείνωνται"],
      "Aorist Active Subjunctive": ["ἀπκτεινω", "ἀπκτεινῃς", "ἀπκτεινῃ", "ἀπκτεινωμεν", "ἀπκτεινητε", "ἀπκτεινωσιν"],
      "Aorist Middle Subjunctive": ["ἀπκτεινωμαι", "ἀπκτεινῃ", "ἀπκτεινηται", "ἀπκτεινώμεθα", "ἀπκτεινησθε", "ἀπκτεινωνται"],
      "Aorist Passive Subjunctive": ["ἀπκτάνῶ", "ἀπκτάνῇς", "ἀπκτάνῇ", "ἀπκτάνῶμεν", "ἀπκτάνῆτε", "ἀπκτάνῶσιν"],
    },
    infinitives: {
      "Present Active": "ἀποκτείνειν",
      "1st Aorist Active": "ἀποκτεῖναι",
    },
    imperative: {
      "Present Active Imperative": ["ἀπόκτεινε", "ἀποκτεινέτω", "ἀποκτείνετε", "ἀποκτεινέτωσαν"],
      "1st Aorist Active Imperative": ["ἀπόκτεινον", "ἀποκτεινάτω", "ἀποκτείνατε", "ἀποκτεινάτωσαν"],
    },

  },
  "ἀποστέλλω": {
    meaning: "I send (away)",
    indicative: {
      "Present Active Indicative": ["ἀποστέλλω", "ἀποστέλλεις", "ἀποστέλλει", "ἀποστέλλομεν", "ἀποστέλλετε", "ἀποστέλλουσι(ν)"],
      "Present Middle/Passive Indicative": ["ἀποστέλλομαι", "ἀποστέλλῃ", "ἀποστέλλεται", "ἀποστελλόμεθα", "ἀποστέλλεσθε", "ἀποστέλλονται"],
      "Future Active Indicative": ["ἀποστελῶ", "ἀποστελεῖς", "ἀποστελεῖ", "ἀποστελοῦμεν", "ἀποστελεῖτε", "ἀποστελοῦσι(ν)"],
      "Imperfect Active Indicative": ["ἀπέστελλον", "ἀπέστελλες", "ἀπέστελλε(ν)", "ἀπεστέλλομεν", "ἀπεστέλλετε", "ἀπέστελλον"],
      "1st Aorist Active Indicative": ["ἀπέστειλα", "ἀπέστειλας", "ἀπέστειλε(ν)", "ἀπεστείλαμεν", "ἀπεστείλατε", "ἀπέστειλαν"],
      "Perfect Active Indicative": ["ἀπέσταλκα", "ἀπέσταλκας", "ἀπέσταλκε(ν)", "ἀπεστάλκαμεν", "ἀπεστάλκατε", "ἀπέσταλκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["ἀπέσταλμαι", "ἀπέσταλσαι", "ἀπέσταλται", "ἀπεστάλμεθα", "ἀπέσταλσθε", "ἀπέσταλνται"],
      "2nd Aorist Passive Indicative": ["ἀπεστάλην", "ἀπεστάλης", "ἀπεστάλη", "ἀπεστάλημεν", "ἀπεστάλητε", "ἀπεστάλησαν"],
      "Aorist Active Indicative": ["ἀπέστειλα", "ἀπέστειλας", "ἀπέστειλε(ν)", "ἀπεστείλαμεν", "ἀπεστείλατε", "ἀπέστειλαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἀποστέλλω", "ἀποστέλλῃς", "ἀποστέλλῃ", "ἀποστέλλωμεν", "ἀποστέλλητε", "ἀποστέλλωσιν"],
      "Present Middle/Passive Subjunctive": ["ἀποστέλλωμαι", "ἀποστέλλῃ", "ἀποστέλληται", "ἀποστέλλώμεθα", "ἀποστέλλησθε", "ἀποστέλλωνται"],
      "Aorist Active Subjunctive": ["ἀποστείλω", "ἀποστείλῃς", "ἀποστείλῃ", "ἀποστείλωμεν", "ἀποστείλητε", "ἀποστείλωσιν"],
      "Aorist Middle Subjunctive": ["ἀποστείλωμαι", "ἀποστείλῃ", "ἀποστείληται", "ἀποστείλώμεθα", "ἀποστείλησθε", "ἀποστείλωνται"],
      "Aorist Passive Subjunctive": ["ἀπστάλῶ", "ἀπστάλῇς", "ἀπστάλῇ", "ἀπστάλῶμεν", "ἀπστάλῆτε", "ἀπστάλῶσιν"],
    },
    infinitives: {
      "Present Active": "ἀποστέλλειν",
      "Present Middle/Passive": "ἀποστέλλεσθαι",
      "1st Aorist Active": "ἀποστεῖλαι",
      "2nd Aorist Passive": "ἀποσταλῆναι",
      "Perfect Active": "ἀπεσταλκέναι",
    },
    imperative: {
      "Present Active Imperative": ["ἀπόστελλε", "ἀποστελλέτω", "ἀποστέλλετε", "ἀποστελλέτωσαν"],
      "1st Aorist Active Imperative": ["ἀπόστειλον", "ἀποστειλάτω", "ἀποστείλατε", "ἀποστειλάτωσαν"],
      "2nd Aorist Passive Imperative": ["ἀποστάληθι", "ἀποσταλήτω", "ἀποστάλητε", "ἀποσταλήτωσαν"],
    },

  },
  "βαπτίζω": {
    meaning: "I baptize; dip, immerse",
    indicative: {
      "Present Active Indicative": ["βαπτίζω", "βαπτίζεις", "βαπτίζει", "βαπτίζομεν", "βαπτίζετε", "βαπτίζουσι(ν)"],
      "Present Middle/Passive Indicative": ["βαπτίζομαι", "βαπτίζῃ", "βαπτίζεται", "βαπτιζόμεθα", "βαπτίζεσθε", "βαπτίζονται"],
      "Future Active Indicative": ["βαπτίσω", "βαπτίσεις", "βαπτίσει", "βαπτίσομεν", "βαπτίσετε", "βαπτίσουσι(ν)"],
      "Imperfect Active Indicative": ["ἐβάπτιζον", "ἐβάπτιζες", "ἐβάπτιζε(ν)", "ἐβαπτίζομεν", "ἐβαπτίζετε", "ἐβάπτιζον"],
      "1st Aorist Active Indicative": ["ἐβάπτισα", "ἐβάπτισας", "ἐβάπτισε(ν)", "ἐβαπτίσαμεν", "ἐβαπτίσατε", "ἐβάπτισαν"],
      "1st Aorist Middle Indicative": ["ἐβαπτισάμην", "ἐβαπτίσω", "ἐβαπτίσατο", "ἐβαπτισάμεθα", "ἐβαπτίσασθε", "ἐβαπτίσαντο"],
      "1st Aorist Passive Indicative": ["ἐβαπτίσθην", "ἐβαπτίσθης", "ἐβαπτίσθη", "ἐβαπτίσθημεν", "ἐβαπτίσθητε", "ἐβαπτίσθησαν"],
      "Perfect Active Indicative": ["βεβάπτικα", "βεβάπτικας", "βεβάπτικε(ν)", "βεβαπτίκαμεν", "βεβαπτίκατε", "βεβάπτικασι(ν)"],
      "Perfect Middle/Passive Indicative": ["βεβάπτισμαι", "βεβάπτισαι", "βεβάπτισται", "βεβαπτίσμεθα", "βεβάπτισθε", "βεβάπτισνται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["βαπτίζω", "βαπτίζῃς", "βαπτίζῃ", "βαπτίζωμεν", "βαπτίζητε", "βαπτίζωσιν"],
      "Present Middle/Passive Subjunctive": ["βαπτίζωμαι", "βαπτίζῃ", "βαπτίζηται", "βαπτίζώμεθα", "βαπτίζησθε", "βαπτίζωνται"],
      "Aorist Active Subjunctive": ["βαπτίσω", "βαπτίσῃς", "βαπτίσῃ", "βαπτίσωμεν", "βαπτίσητε", "βαπτίσωσιν"],
      "Aorist Middle Subjunctive": ["βαπτίσωμαι", "βαπτίσῃ", "βαπτίσηται", "βαπτίσώμεθα", "βαπτίσησθε", "βαπτίσωνται"],
      "Aorist Passive Subjunctive": ["βαπτισθῶ", "βαπτισθῇς", "βαπτισθῇ", "βαπτισθῶμεν", "βαπτισθῆτε", "βαπτισθῶσιν"],
    },
    infinitives: {
      "Present Active": "βαπτίζειν",
      "Present Middle/Passive": "βαπτίζεσθαι",
      "1st Aorist Active": "βαπτίσαι",
      "1st Aorist Passive": "βαπτισθῆναι",
      "Perfect Active": "βεβαπτικέναι",
    },
    imperative: {
      "Present Active Imperative": ["βάπτιζε", "βαπτιζέτω", "βαπτίζετε", "βαπτιζέτωσαν"],
      "Present Middle/Passive Imperative": ["βαπτίζου", "βαπτιζέσθω", "βαπτίζεσθε", "βαπτιζέσθωσαν"],
      "1st Aorist Active Imperative": ["βάπτισον", "βαπτισάτω", "βαπτίσατε", "βαπτισάτωσαν"],
      "1st Aorist Passive Imperative": ["βαπτίσθητι", "βαπτισθήτω", "βαπτίσθητε", "βαπτισθήτωσαν"],
    },

  },
  "γινώσκω": {
    meaning: "I know, come to know, realize, learn",
    indicative: {
      "Present Active Indicative": ["γινώσκω", "γινώσκεις", "γινώσκει", "γινώσκομεν", "γινώσκετε", "γινώσκουσι(ν)"],
      "Present Middle/Passive Indicative": ["γινώσκομαι", "γινώσκῃ", "γινώσκεται", "γινωσκόμεθα", "γινώσκεσθε", "γινώσκονται"],
      "Future Middle Indicative": ["γνώσομαι", "γνώσῃ", "γνώσεται", "γνωσόμεθα", "γνώσεσθε", "γνώσονται"],
      "Imperfect Active Indicative": ["ἐγίνωσκον", "ἐγίνωσκες", "ἐγίνωσκε(ν)", "ἐγινώσκομεν", "ἐγινώσκετε", "ἐγίνωσκον"],
      "Perfect Active Indicative": ["ἔγνωκα", "ἔγνωκας", "ἔγνωκε(ν)", "ἐγνώκαμεν", "ἐγνώκατε", "ἐγνώκασιν"],
      "Perfect Middle/Passive Indicative": ["ἔγνωσμαι", "ἔγνωσαι", "ἔγνωσται", "ἐγνώσμεθα", "ἔγνωσθε", "ἔγνωσνται"],
      "2nd Aorist Active Indicative": ["ἔγνων", "ἔγνως", "ἔγνω", "ἔγνωμεν", "ἔγνωτε", "ἔγνωσαν"],
      "2nd Aorist Passive Indicative": ["ἐγνώσθην", "ἐγνώσθης", "ἐγνώσθη", "ἐγνώσθημεν", "ἐγνώσθητε", "ἐγνώσθησαν"],
      "Imperfect Middle/Passive Indicative": ["ἐγινωσκόμην", "ἐγίνωσκου", "ἐγίνωσκετο", "ἐγινωσκόμεθα", "ἐγίνωσκεσθε", "ἐγίνωσκοντο"],
      "Future Active Indicative": ["γνώσομαι", "γνώσῃ", "γνώσεται", "γνωσόμεθα", "γνώσεσθε", "γνώσονται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["γινώσκω", "γινώσκῃς", "γινώσκῃ", "γινώσκωμεν", "γινώσκητε", "γινώσκωσιν"],
      "Present Middle/Passive Subjunctive": ["γινώσκωμαι", "γινώσκῃ", "γινώσκηται", "γινώσκώμεθα", "γινώσκησθε", "γινώσκωνται"],
      "Aorist Active Subjunctive": ["γνῶ", "γνῷς", "γνῷ", "γνῶμεν", "γνῶτε", "γνῶσιν"],
      "Aorist Middle Subjunctive": ["γνωμαι", "γνῃ", "γνηται", "γνώμεθα", "γνησθε", "γνωνται"],
      "Aorist Passive Subjunctive": ["γνώσῶ", "γνώσῇς", "γνώσῇ", "γνώσῶμεν", "γνώσῆτε", "γνώσῶσιν"],
    },
    infinitives: {
      "Present Active": "γινώσκειν",
      "2nd Aorist Active": "γνῶναι",
      "Perfect Active": "ἐγνωκέναι",
    },
    imperative: {
      "Present Active Imperative": ["γίνωσκε", "γινωσκέτω", "γινώσκετε", "γινωσκέτωσαν"],
      "2nd Aorist Active Imperative": ["γνῶθι", "γνώτω", "γνῶτε", "γνώτωσαν"],
      "1st Aorist Passive Imperative": ["γνώσθητι", "γνωσθήτω", "γνώσθητε", "γνωσθήτωσαν"],
    },

  },
  "ἐγείρω": {
    meaning: "I raise up, wake",
    indicative: {
      "Present Active Indicative": ["ἐγείρω", "ἐγείρεις", "ἐγείρει", "ἐγείρομεν", "ἐγείρετε", "ἐγείρουσι(ν)"],
      "Present Middle/Passive Indicative": ["ἐγείρομαι", "ἐγείρῃ", "ἐγείρεται", "ἐγειρόμεθα", "ἐγείρεσθε", "ἐγείρονται"],
      "Future Active Indicative": ["ἐγερῶ", "ἐγερεῖς", "ἐγερεῖ", "ἐγεροῦμεν", "ἐγερεῖτε", "ἐγεροῦσι(ν)"],
      "Imperfect Active Indicative": ["ἤγειρον", "ἤγειρες", "ἤγειρε(ν)", "ἠγείρομεν", "ἠγείρετε", "ἤγειρον"],
      "1st Aorist Active Indicative": ["ἤγειρα", "ἤγειρας", "ἤγειρε(ν)", "ἠγείραμεν", "ἠγείρατε", "ἤγειραν"],
      "1st Aorist Passive Indicative": ["ἠγέρθην", "ἠγέρθης", "ἠγέρθη", "ἠγέρθημεν", "ἠγέρθητε", "ἠγέρθησαν"],
      "Perfect Active Indicative": ["ἐγήγερκα", "ἐγήγερκας", "ἐγήγερκε(ν)", "ἐγηγέρκαμεν", "ἐγηγέρκατε", "ἐγηγέρκασιν"],
      "Perfect Middle/Passive Indicative": ["ἐγήγερμαι", "ἐγήγερσαι", "ἐγήγερται", "ἐγηγέρμεθα", "ἐγήγερσθε", "ἐγήγερνται"],
      "Imperfect Middle/Passive Indicative": ["ἠγειρόμην", "ἠγείρου", "ἠγείρετο", "ἠγειρόμεθα", "ἠγείρεσθε", "ἠγείροντο"],
      "Future Passive Indicative": ["ἐγερθήσομαι", "ἐγερθήσῃ", "ἐγερθήσεται", "ἐγερθησόμεθα", "ἐγερθήσεσθε", "ἐγερθήσονται"],
      "Aorist Passive Indicative": ["ἠγέρθην", "ἠγέρθης", "ἠγέρθη", "ἠγέρθημεν", "ἠγέρθητε", "ἠγέρθησαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἐγείρω", "ἐγείρῃς", "ἐγείρῃ", "ἐγείρωμεν", "ἐγείρητε", "ἐγείρωσιν"],
      "Present Middle/Passive Subjunctive": ["ἐγείρωμαι", "ἐγείρῃ", "ἐγείρηται", "ἐγείρώμεθα", "ἐγείρησθε", "ἐγείρωνται"],
      "Aorist Active Subjunctive": ["ἐγείρω", "ἐγείρῃς", "ἐγείρῃ", "ἐγείρωμεν", "ἐγείρητε", "ἐγείρωσιν"],
      "Aorist Middle Subjunctive": ["ἐγείρωμαι", "ἐγείρῃ", "ἐγείρηται", "ἐγείρώμεθα", "ἐγείρησθε", "ἐγείρωνται"],
      "Aorist Passive Subjunctive": ["εγέρῶ", "εγέρῇς", "εγέρῇ", "εγέρῶμεν", "εγέρῆτε", "εγέρῶσιν"],
    },
    infinitives: {
      "Present Active": "ἐγείρειν",
      "Present Middle/Passive": "ἐγείρεσθαι",
      "1st Aorist Active": "ἐγεῖραι",
      "1st Aorist Passive": "ἐγερθῆναι",
      "Perfect Active": "ἐγηγερκέναι",
    },
    imperative: {
      "Present Active Imperative": ["ἔγειρε", "ἐγειρέτω", "ἐγείρετε", "ἐγειρέτωσαν"],
      "1st Aorist Active Imperative": ["ἔγειρον", "ἐγειράτω", "ἐγείρατε", "ἐγειράτωσαν"],
      "1st Aorist Passive Imperative": ["ἐγέρθητι", "ἐγερθήτω", "ἐγέρθητε", "ἐγερθήτωσαν"],
    },

  },
  "ἐκβάλλω": {
    meaning: "I cast out, send out",
    indicative: {
      "Present Active Indicative": ["ἐκβάλλω", "ἐκβάλλεις", "ἐκβάλλει", "ἐκβάλλομεν", "ἐκβάλλετε", "ἐκβάλλουσι(ν)"],
      "Future Active Indicative": ["ἐκβαλῶ", "ἐκβαλεῖς", "ἐκβαλεῖ", "ἐκβαλοῦμεν", "ἐκβαλεῖτε", "ἐκβαλοῦσι(ν)"],
      "Imperfect Active Indicative": ["ἐξέβαλλον", "ἐξέβαλλες", "ἐξέβαλλε(ν)", "ἐξεβάλλομεν", "ἐξεβάλλετε", "ἐξέβαλλον"],
      "Perfect Active Indicative": ["ἐκβέβληκα", "ἐκβέβληκας", "ἐκβέβληκε(ν)", "ἐκβεβλήκαμεν", "ἐκβεβλήκατε", "ἐκβέβληκασι(ν)"],
      "2nd Aorist Active Indicative": ["ἐξέβαλον", "ἐξέβαλες", "ἐξέβαλε(ν)", "ἐξεβάλομεν", "ἐξεβάλετε", "ἐξέβαλον"],
      "Aorist Active Indicative": ["ἐξέβαλον", "ἐξέβαλες", "ἐξέβαλε(ν)", "ἐξεβάλομεν", "ἐξεβάλετε", "ἐξέβαλον"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἐκβάλλω", "ἐκβάλλῃς", "ἐκβάλλῃ", "ἐκβάλλωμεν", "ἐκβάλλητε", "ἐκβάλλωσιν"],
      "Present Middle/Passive Subjunctive": ["ἐκβάλλωμαι", "ἐκβάλλῃ", "ἐκβάλληται", "ἐκβάλλώμεθα", "ἐκβάλλησθε", "ἐκβάλλωνται"],
      "Aorist Active Subjunctive": ["ἐκβάλω", "ἐκβάλῃς", "ἐκβάλῃ", "ἐκβάλωμεν", "ἐκβάλητε", "ἐκβάλωσιν"],
      "Aorist Middle Subjunctive": ["ἐκβάλωμαι", "ἐκβάλῃ", "ἐκβάληται", "ἐκβάλώμεθα", "ἐκβάλησθε", "ἐκβάλωνται"],
      "Aorist Passive Subjunctive": ["ἐκβληθῶ", "ἐκβληθῇς", "ἐκβληθῇ", "ἐκβληθῶμεν", "ἐκβληθῆτε", "ἐκβληθῶσιν"],
    },
    infinitives: {
      "Present Active": "ἐκβάλλειν",
      "2nd Aorist Active": "ἐκβαλεῖν",
      "Perfect Active": "ἐκβεβληκέναι",
    },
    imperative: {
      "Present Active Imperative": ["ἔκβαλλε", "ἐκβαλλέτω", "ἐκβάλλετε", "ἐκβαλλέτωσαν"],
      "2nd Aorist Active Imperative": ["ἔκβαλε", "ἐκβαλέτω", "ἐκβάλετε", "ἐκβαλέτωσαν"],
    },

  },
  "κρίνω": {
    meaning: "I judge, decide, prefer",
    indicative: {
      "Present Active Indicative": ["κρίνω", "κρίνεις", "κρίνει", "κρίνομεν", "κρίνετε", "κρίνουσι"],
      "Present Middle/Passive Indicative": ["κρίνομαι", "κρίνῃ", "κρίνεται", "κρινόμεθα", "κρίνεσθε", "κρίνονται"],
      "Future Active Indicative": ["κρινῶ", "κρινεῖς", "κρινεῖ", "κρινοῦμεν", "κρινεῖτε", "κρινοῦσι"],
      "Future Middle Indicative": ["κρινοῦμαι", "κρινῇ", "κρινεῖται", "κρινούμεθα", "κρινεῖσθε", "κρινοῦνται"],
      "Imperfect Active Indicative": ["ἔκρινον", "ἔκρινες", "ἔκρινε", "ἐκρίνομεν", "ἐκρίνετε", "ἔκρινον"],
      "1st Aorist Active Indicative": ["ἔκρινα", "ἔκρινας", "ἔκρινε(ν)", "ἐκρίναμεν", "ἐκρίνατε", "ἔκριναν"],
      "1st Aorist Passive Indicative": ["ἐκρίθην", "ἐκρίθης", "ἐκρίθη", "ἐκρίθημεν", "ἐκρίθητε", "ἐκρίθησαν"],
      "Perfect Active Indicative": ["κέκρικα", "κέκρικας", "κέκρικε", "κεκρίκαμεν", "κεκρίκατε", "κέκρικασι"],
      "Perfect Middle/Passive Indicative": ["κέκριμαι", "κέκρισαι", "κέκριται", "κεκρίμεθα", "κέκρισθε", "κέκρινται"],
      "Imperfect Middle/Passive Indicative": ["ἐκρινόμην", "ἐκρίνου", "ἐκρίνετο", "ἐκρινόμεθα", "ἐκρίνεσθε", "ἐκρίνοντο"],
      "Future Passive Indicative": ["κριθήσομαι", "κριθήσῃ", "κριθήσεται", "κριθησόμεθα", "κριθήσεσθε", "κριθήσονται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["κρίνω", "κρίνῃς", "κρίνῃ", "κρίνωμεν", "κρίνητε", "κρίνωσιν"],
      "Present Middle/Passive Subjunctive": ["κρίνωμαι", "κρίνῃ", "κρίνηται", "κρίνώμεθα", "κρίνησθε", "κρίνωνται"],
      "Aorist Active Subjunctive": ["κρίνω", "κρίνῃς", "κρίνῃ", "κρίνωμεν", "κρίνητε", "κρίνωσιν"],
      "Aorist Middle Subjunctive": ["κρίνωμαι", "κρίνῃ", "κρίνηται", "κρίνώμεθα", "κρίνησθε", "κρίνωνται"],
      "Aorist Passive Subjunctive": ["κριθῶ", "κριθῇς", "κριθῇ", "κριθῶμεν", "κριθῆτε", "κριθῶσιν"],
    },
    infinitives: {
      "Present Active": "κρίνειν",
      "Present Middle/Passive": "κρίνεσθαι",
      "1st Aorist Active": "κρῖναι",
      "1st Aorist Passive": "κριθῆναι",
      "Perfect Active": "κεκρικέναι",
      "Perfect Middle/Passive": "κεκρίσθαι",
    },
    imperative: {
      "Present Active Imperative": ["κρῖνε", "κρινέτω", "κρίνετε", "κρινέτωσαν"],
      "Present Middle/Passive Imperative": ["κρίνου", "κρινέσθω", "κρίνεσθε", "κρινέσθωσαν"],
      "1st Aorist Active Imperative": ["κρῖνον", "κρινάτω", "κρίνατε", "κρινάτωσαν"],
      "1st Aorist Passive Imperative": ["κρίθητι", "κριθήτω", "κρίθητε", "κριθήτωσαν"],
    },

  },
  "μένω": {
    meaning: "I remain, live",
    indicative: {
      "Present Active Indicative": ["μένω", "μένεις", "μένει", "μένομεν", "μένετε", "μένουσι"],
      "Present Middle/Passive Indicative": ["μένομαι", "μένῃ", "μένεται", "μενόμεθα", "μένεσθε", "μένονται"],
      "Future Active Indicative": ["μενῶ", "μενεῖς", "μενεῖ", "μενοῦμεν", "μενεῖτε", "μενοῦσι"],
      "Imperfect Active Indicative": ["ἔμενον", "ἔμενες", "ἔμενε", "ἐμένομεν", "ἐμένετε", "ἔμενον"],
      "1st Aorist Active Indicative": ["ἔμεινα", "ἔμεινας", "ἔμεινε(ν)", "ἐμείναμεν", "ἐμείνατε", "ἔμειναν"],
      "Perfect Active Indicative": ["μεμένηκα", "μεμένηκας", "μεμένηκε", "μεμενήκαμεν", "μεμενήκατε", "μεμένηκασι"],
      "Imperfect Middle/Passive Indicative": ["ἐμενόμην", "ἐμένου", "ἐμένετο", "ἐμενόμεθα", "ἐμένεσθε", "ἐμένοντο"],
      "Future Middle Indicative": ["μενοῦμαι", "μενῇ", "μενεῖται", "μενούμεθα", "μενεῖσθε", "μενοῦνται"],
      "Future Passive Indicative": ["μενηθήσομαι", "μενηθήσῃ", "μενηθήσεται"],
      "Aorist Active Indicative": ["ἔμεινα", "ἔμεινας", "ἔμεινε", "ἐμείναμεν", "ἐμείνατε", "ἔμειναν"],
      "Perfect Middle/Passive Indicative": ["μεμένημαι", "μεμένησαι", "μεμένηται", "μεμενήμεθα", "μεμένησθε", "μεμένηνται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["μένω", "μένῃς", "μένῃ", "μένωμεν", "μένητε", "μένωσιν"],
      "Present Middle/Passive Subjunctive": ["μένωμαι", "μένῃ", "μένηται", "μένώμεθα", "μένησθε", "μένωνται"],
      "Aorist Active Subjunctive": ["μείνω", "μείνῃς", "μείνῃ", "μείνωμεν", "μείνητε", "μείνωσιν"],
      "Aorist Middle Subjunctive": ["μείνωμαι", "μείνῃ", "μείνηται", "μείνώμεθα", "μείνησθε", "μείνωνται"],
    },
    infinitives: {
      "Present Active": "μένειν",
      "1st Aorist Active": "μεῖναι",
      "Perfect Active": "μεμενηκέναι",
    },
    imperative: {
      "Present Active Imperative": ["μένε", "μενέτω", "μένετε", "μενέτωσαν"],
      "1st Aorist Active Imperative": ["μεῖνον", "μεινάτω", "μείνατε", "μεινάτωσαν"],
    },

  },
  "ὁράω": {
    meaning: "I see, notice, experience",
    indicative: {
      "Present Active Indicative": ["ὁρῶ", "ὁρᾷς", "ὁρᾷ", "ὁρῶμεν", "ὁρᾶτε", "ὁρῶσι"],
      "Future Middle Indicative": ["ὄψομαι", "ὄψῃ", "ὄψεται", "ὀψόμεθα", "ὄψεσθε", "ὄψονται"],
      "Imperfect Active Indicative": ["ἑώρων", "ἑώρας", "ἑώρα", "ἑωρῶμεν", "ἑωρᾶτε", "ἑώρων"],
      "1st Aorist Passive Indicative": ["ὤφθην", "ὤφθης", "ὤφθη", "ὤφθημεν", "ὤφθητε", "ὤφθησαν"],
      "Perfect Active Indicative": ["ἑώρακα", "ἑώρακας", "ἑώρακε", "ἑωράκαμεν", "ἑωράκατε", "ἑώρακασι"],
      "2nd Aorist Active Indicative": ["εἶδον", "εἶδες", "εἶδε(ν)", "εἴδομεν", "εἴδετε", "εἶδον"],
      "Future Active Indicative": ["ὄψομαι", "ὄψῃ", "ὄψεται", "ὀψόμεθα", "ὄψεσθε", "ὄψονται"],
      "Aorist Active Indicative": ["εἶδον", "εἶδες", "εἶδε", "εἴδομεν", "εἴδετε", "εἶδον"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ὁρῶ", "ὁρᾷς", "ὁρᾷ", "ὁρῶμεν", "ὁρᾶτε", "ὁρῶσιν"],
      "Present Middle/Passive Subjunctive": ["ὁρῶμαι", "ὁρᾷ", "ὁρᾶται", "ὁρώμεθα", "ὁρᾶσθε", "ὁρῶνται"],
      "Aorist Active Subjunctive": ["ἴδω", "ἴδῃς", "ἴδῃ", "ἴδωμεν", "ἴδητε", "ἴδωσιν"],
      "Aorist Middle Subjunctive": ["ἴδωμαι", "ἴδῃ", "ἴδηται", "ἴδώμεθα", "ἴδησθε", "ἴδωνται"],
      "Aorist Passive Subjunctive": ["ὤφῶ", "ὤφῇς", "ὤφῇ", "ὤφῶμεν", "ὤφῆτε", "ὤφῶσιν"],
    },
    infinitives: {
      "Present Active": "ὁρᾶν",
      "1st Aorist Passive": "ὀφθῆναι",
      "2nd Aorist Active": "ἰδεῖν",
      "Perfect Active": "ἑωρακέναι",
    },
    imperative: {
      "Present Active Imperative": ["ὅρα", "ὁράτω", "ὁρᾶτε", "ὁράτωσαν"],
      "2nd Aorist Active Imperative": ["ἰδέ", "ἰδέτω", "ἴδετε", "ἰδέτωσαν"],
      "1st Aorist Passive Imperative": ["ὄφθητι", "ὀφθήτω", "ὄφθητε", "ὀφθήτωσαν"],
    },
  },
  "σῴζω": {
    meaning: "I save, deliver, rescue",
    indicative: {
      "Present Active Indicative": ["σῴζω", "σῴζεις", "σῴζει", "σῴζομεν", "σῴζετε", "σῴζουσι"],
      "Present Middle/Passive Indicative": ["σῴζομαι", "σῴζῃ", "σῴζεται", "σῳζόμεθα", "σῴζεσθε", "σῴζονται"],
      "Future Active Indicative": ["σώσω", "σώσεις", "σώσει", "σώσομεν", "σώσετε", "σώσουσι"],
      "Imperfect Active Indicative": ["ἔσῴζον", "ἔσῴζες", "ἔσῴζε", "ἐσῴζομεν", "ἐσῴζετε", "ἔσῴζον"],
      "1st Aorist Active Indicative": ["ἔσωσα", "ἔσωσας", "ἔσωσε", "ἐσώσαμεν", "ἐσώσατε", "ἔσωσαν"],
      "1st Aorist Passive Indicative": ["ἐσώθην", "ἐσώθης", "ἐσώθη", "ἐσώθημεν", "ἐσώθητε", "ἐσώθησαν"],
      "Perfect Active Indicative": ["σέσωκα", "σέσωκας", "σέσωκε", "σεσώκαμεν", "σεσώκατε", "σέσωκασι"],
      "Perfect Middle/Passive Indicative": ["σέσωσμαι", "σέσωσαι", "σέσωσται", "σεσώσμεθα", "σέσωσθε", "σέσωσνται"],
      "Imperfect Middle/Passive Indicative": ["ἐσῳζόμην", "ἐσῴζου", "ἐσῴζετο", "ἐσῳζόμεθα", "ἐσῴζεσθε", "ἐσῴζοντο"],
      "Future Middle Indicative": ["σώσομαι", "σώσῃ", "σώσεται", "σωσόμεθα", "σώσεσθε", "σώσονται"],
      "Future Passive Indicative": ["σωθήσομαι", "σωθήσῃ", "σωθήσεται", "σωθησόμεθα", "σωθήσεσθε", "σωθήσονται"],
      "1st Aorist Middle Indicative": ["ἐσωσάμην", "ἔσωσω", "ἐσώσατο", "ἐσωσάμεθα", "ἐσώσασθε", "ἐσώσαντο"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["σῴζω", "σῴζῃς", "σῴζῃ", "σῴζωμεν", "σῴζητε", "σῴζωσιν"],
      "Present Middle/Passive Subjunctive": ["σῴζωμαι", "σῴζῃ", "σῴζηται", "σῴζώμεθα", "σῴζησθε", "σῴζωνται"],
      "Aorist Active Subjunctive": ["σώσω", "σώσῃς", "σώσῃ", "σώσωμεν", "σώσητε", "σώσωσιν"],
      "Aorist Middle Subjunctive": ["σώσωμαι", "σώσῃ", "σώσηται", "σώσώμεθα", "σώσησθε", "σώσωνται"],
      "Aorist Passive Subjunctive": ["σωθῶ", "σωθῇς", "σωθῇ", "σωθῶμεν", "σωθῆτε", "σωθῶσιν"],
    },
    infinitives: {
      "Present Active": "σῴζειν",
      "Present Middle/Passive": "σῴζεσθαι",
      "1st Aorist Active": "σῶσαι",
      "1st Aorist Passive": "σωθῆναι",
      "Perfect Active": "σεσωκέναι",
    },
    imperative: {
      "Present Active Imperative": ["σῷζε", "σῳζέτω", "σῴζετε", "σῳζέτωσαν"],
      "Present Middle/Passive Imperative": ["σῴζου", "σῳζέσθω", "σῴζεσθε", "σῳζέσθωσαν"],
      "1st Aorist Active Imperative": ["σῶσον", "σωσάτω", "σώσατε", "σωσάτωσαν"],
      "1st Aorist Passive Imperative": ["σώθητι", "σωθήτω", "σώθητε", "σωθήτωσαν"],
    },

  },
  "ἀκολουθέω": {
    meaning: "I follow; accompany",
    indicative: {
      "Present Active Indicative": ["ἀκολουθῶ", "ἀκολουθεῖς", "ἀκολουθεῖ", "ἀκολουθοῦμεν", "ἀκολουθεῖτε", "ἀκολουθοῦσι"],
      "Future Active Indicative": ["ἀκολουθήσω", "ἀκολουθήσεις", "ἀκολουθήσει", "ἀκολουθήσομεν", "ἀκολουθήσετε", "ἀκολουθήσουσι"],
      "Imperfect Active Indicative": ["ἠκολούθουν", "ἠκολούθεις", "ἠκολούθει", "ἠκολουθοῦμεν", "ἠκολουθεῖτε", "ἠκολούθουν"],
      "1st Aorist Active Indicative": ["ἠκολούθησα", "ἠκολούθησας", "ἠκολούθησε", "ἠκολουθήσαμεν", "ἠκολουθήσατε", "ἠκολούθησαν"],
      "Perfect Active Indicative": ["ἠκολούθηκα", "ἠκολούθηκας", "ἠκολούθηκε", "ἠκολουθήκαμεν", "ἠκολουθήκατε", "ἠκολούθηκασι"],
      "Present Middle/Passive Indicative": ["ἀκολουθοῦμαι", "ἀκολουθεῖ", "ἀκολουθεῖται", "ἀκολουθούμεθα", "ἀκολουθεῖσθε", "ἀκολουθοῦνται"],
      "Imperfect Middle/Passive Indicative": ["ἠκολουθούμην", "ἠκολουθοῦ", "ἠκολουθεῖτο", "ἠκολουθούμεθα", "ἠκολουθεῖσθε", "ἠκολουθοῦντο"],
      "Future Middle Indicative": ["ἀκολουθήσομαι", "ἀκολουθήσῃ", "ἀκολουθήσεται", "ἀκολουθησόμεθα", "ἀκολουθήσεσθε", "ἀκολουθήσονται"],
      "Future Passive Indicative": ["ἀκολουθηθήσομαι", "ἀκολουθηθήσῃ", "ἀκολουθηθήσεται", "ἀκολουθηθησόμεθα", "ἀκολουθηθήσεσθε", "ἀκολουθηθήσονται"],
      "1st Aorist Middle Indicative": ["ἠκολουθησάμην", "ἠκολούθησω", "ἠκολουθήσατο", "ἠκολουθησάμεθα", "ἠκολουθήσασθε", "ἠκολουθήσαντο"],
      "1st Aorist Passive Indicative": ["ἠκολουθήθην", "ἠκολουθήθης", "ἠκολουθήθη", "ἠκολουθήθημεν", "ἠκολουθήθητε", "ἠκολουθήθησαν"],
      "Perfect Middle/Passive Indicative": ["ἠκολούθημαι", "ἠκολούθησαι", "ἠκολούθηται", "ἠκολουθήμεθα", "ἠκολούθησθε", "ἠκολούθηνται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἀκολουθῶ", "ἀκολουθῇς", "ἀκολουθῇ", "ἀκολουθῶμεν", "ἀκολουθῆτε", "ἀκολουθῶσιν"],
      "Present Middle/Passive Subjunctive": ["ἀκολουθῶμαι", "ἀκολουθῇ", "ἀκολουθῆται", "ἀκολουθώμεθα", "ἀκολουθῆσθε", "ἀκολουθῶνται"],
      "Aorist Active Subjunctive": ["ἀκολουθήσω", "ἀκολουθήσῃς", "ἀκολουθήσῃ", "ἀκολουθήσωμεν", "ἀκολουθήσητε", "ἀκολουθήσωσιν"],
      "Aorist Middle Subjunctive": ["ἀκολουθήσωμαι", "ἀκολουθήσῃ", "ἀκολουθήσηται", "ἀκολουθήσώμεθα", "ἀκολουθήσησθε", "ἀκολουθήσωνται"],
    },
    infinitives: {
      "Present Active": "ἀκολουθεῖν",
      "1st Aorist Active": "ἀκολουθῆσαι",
      "Perfect Active": "ἠκολουθηκέναι",
    },
    imperative: {
      "Present Active Imperative": ["ἀκολούθει", "ἀκολουθείτω", "ἀκολουθεῖτε", "ἀκολουθείτωσαν"],
      "1st Aorist Active Imperative": ["ἀκολούθησον", "ἀκολουθησάτω", "ἀκολουθήσατε", "ἀκολουθησάτωσαν"],
    },

  },
  "διδάσκω": {
    meaning: "I teach",
    indicative: {
      "Present Active Indicative": ["διδάσκω", "διδάσκεις", "διδάσκει", "διδάσκομεν", "διδάσκετε", "διδάσκουσι"],
      "Present Middle/Passive Indicative": ["διδάσκομαι", "διδάσκῃ", "διδάσκεται", "διδασκόμεθα", "διδάσκεσθε", "διδάσκονται"],
      "Future Active Indicative": ["διδάξω", "διδάξεις", "διδάξει", "διδάξομεν", "διδάξετε", "διδάξουσι"],
      "Imperfect Active Indicative": ["ἐδίδασκον", "ἐδίδασκες", "ἐδίδασκε", "ἐδιδάσκομεν", "ἐδιδάσκετε", "ἐδίδασκον"],
      "1st Aorist Active Indicative": ["ἐδίδαξα", "ἐδίδαξας", "ἐδίδαξε(ν)", "ἐδιδάξαμεν", "ἐδιδάξατε", "ἐδίδαξαν"],
      "1st Aorist Passive Indicative": ["ἐδιδάχθην", "ἐδιδάχθης", "ἐδιδάχθη", "ἐδιδάχθημεν", "ἐδιδάχθητε", "ἐδιδάχθησαν"],
      "Perfect Active Indicative": ["δεδίδαχα", "δεδίδαχας", "δεδίδαχε", "δεδιδαχάμεν", "δεδιδαχάτε", "δεδίδαχασι"],
      "Imperfect Middle/Passive Indicative": ["ἐδιδασκόμην", "ἐδίδασκου", "ἐδίδασκετο", "ἐδιδασκόμεθα", "ἐδίδασκεσθε", "ἐδίδασκοντο"],
      "Future Middle Indicative": ["διδάξομαι", "διδάξῃ", "διδάξεται", "διδαξόμεθα", "διδάξεσθε", "διδάξονται"],
      "Future Passive Indicative": ["διδαχθήσομαι", "διδαχθήσῃ", "διδαχθήσεται", "διδαχθησόμεθα", "διδαχθήσεσθε", "διδαχθήσονται"],
      "Aorist Active Indicative": ["ἐδίδαξα", "ἐδίδαξας", "ἐδίδαξε", "ἐδιδάξαμεν", "ἐδιδάξατε", "ἐδίδαξαν"],
      "Aorist Middle Indicative": ["ἐδιδαξάμην", "ἐδίδαξω", "ἐδιδαξάτο", "ἐδιδαξάμεθα", "ἐδιδάξασθε", "ἐδιδαξάvτο"],
      "Aorist Passive Indicative": ["ἐδιδάχθην", "ἐδιδάχθης", "ἐδιδάχθη", "ἐδιδάχθημεν", "ἐδιδάχθητε", "ἐδιδάχθησαν"],
      "Perfect Middle/Passive Indicative": ["δεδίδαγμαι", "δεδίδαξαι", "δεδίδακται", "δεδιδαγμέθα", "δεδίδαχθε", "δεδίδαγνται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["διδάσκω", "διδάσκῃς", "διδάσκῃ", "διδάσκωμεν", "διδάσκητε", "διδάσκωσιν"],
      "Present Middle/Passive Subjunctive": ["διδάσκωμαι", "διδάσκῃ", "διδάσκηται", "διδάσκώμεθα", "διδάσκησθε", "διδάσκωνται"],
      "Aorist Active Subjunctive": ["διδάξω", "διδάξῃς", "διδάξῃ", "διδάξωμεν", "διδάξητε", "διδάξωσιν"],
      "Aorist Middle Subjunctive": ["διδάξωμαι", "διδάξῃ", "διδάξηται", "διδάξώμεθα", "διδάξησθε", "διδάξωνται"],
      "Aorist Passive Subjunctive": ["διδάχῶ", "διδάχῇς", "διδάχῇ", "διδάχῶμεν", "διδάχῆτε", "διδάχῶσιν"],
    },
    infinitives: {
      "Present Active": "διδάσκειν",
      "Present Middle/Passive": "διδάσκεσθαι",
      "1st Aorist Active": "διδάξαι",
      "1st Aorist Passive": "διδαχθῆναι",
      "Perfect Active": "δεδιδαχέναι",
    },
    imperative: {
      "Present Active Imperative": ["δίδασκε", "διδασκέτω", "διδάσκετε", "διδασκέτωσαν"],
      "1st Aorist Active Imperative": ["δίδαξον", "διδαξάτω", "διδάξατε", "διδαξάτωσαν"],
    },

  },
  "ἐπερωτάω": {
    meaning: "I ask (for)",
    indicative: {
      "Present Active Indicative": ["ἐπερωτῶ", "ἐπερωτᾷς", "ἐπερωτᾷ", "ἐπερωτῶμεν", "ἐπερωτᾶτε", "ἐπερωτῶσι"],
      "Future Active Indicative": ["ἐπερωτήσω", "ἐπερωτήσεις", "ἐπερωτήσει", "ἐπερωτήσομεν", "ἐπερωτήσετε", "ἐπερωτήσουσι"],
      "Imperfect Active Indicative": ["ἐπηρώτων", "ἐπηρώτας", "ἐπηρώτα", "ἐπηρωτῶμεν", "ἐπηρωτᾶτε", "ἐπηρώτων"],
      "1st Aorist Active Indicative": ["ἐπηρώτησα", "ἐπηρώτησας", "ἐπηρώτησε", "ἐπηρωτήσαμεν", "ἐπηρωτήσατε", "ἐπηρώτησαν"],
      "Present Middle/Passive Indicative": ["ἐπερωτῶμαι", "ἐπερωτᾷ", "ἐπερωτᾶται", "ἐπερωτώμεθα", "ἐπερωτᾶσθε", "ἐπερωτῶνται"],
      "Imperfect Middle/Passive Indicative": ["ἐπηρωτώμην", "ἐπηρώτου", "ἐπηρωτᾶτο", "ἐπηρωτώμεθα", "ἐπηρωτᾶσθε", "ἐπηρωτῶντο"],
      "Future Middle Indicative": ["ἐπερωτήσομαι", "ἐπερωτήσῃ", "ἐπερωτήσεται", "ἐπερωτησόμεθα", "ἐπερωτήσεσθε", "ἐπερωτήσονται"],
      "Future Passive Indicative": ["ἐπερωτηθήσομαι", "ἐπερωτηθήσῃ", "ἐπερωτηθήσεται", "ἐπερωτηθησόμεθα", "ἐπερωτηθήσεσθε", "ἐπερωτηθήσονται"],
      "1st Aorist Middle Indicative": ["ἐπηρωτησάμην", "ἐπηρώτησω", "ἐπηρωτήσατο", "ἐπηρωτησάμεθα", "ἐπηρωτήσασθε", "ἐπηρωτήσαντο"],
      "1st Aorist Passive Indicative": ["ἐπηρωτήθην", "ἐπηρωτήθης", "ἐπηρωτήθη", "ἐπηρωτήθημεν", "ἐπηρωτήθητε", "ἐπηρωτήθησαν"],
      "Perfect Active Indicative": ["ἐπηρώτηκα", "ἐπηρώτηκας", "ἐπηρώτηκε", "ἐπηρωτήκαμεν", "ἐπηρωτήκατε", "ἐπηρώτηκασι"],
      "Perfect Middle/Passive Indicative": ["ἐπηρώτημαι", "ἐπηρώτησαι", "ἐπηρώτηται", "ἐπηρωτήμεθα", "ἐπηρώτησθε", "ἐπηρώτηνται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἐπερωτῶ", "ἐπερωτᾷς", "ἐπερωτᾷ", "ἐπερωτῶμεν", "ἐπερωτᾶτε", "ἐπερωτῶσιν"],
      "Present Middle/Passive Subjunctive": ["ἐπερωτῶμαι", "ἐπερωτᾷ", "ἐπερωτᾶται", "ἐπερωτώμεθα", "ἐπερωτᾶσθε", "ἐπερωτῶνται"],
      "Aorist Active Subjunctive": ["ἐπηρώτησω", "ἐπηρώτησῃς", "ἐπηρώτησῃ", "ἐπηρώτησωμεν", "ἐπηρώτησητε", "ἐπηρώτησωσιν"],
      "Aorist Middle Subjunctive": ["ἐπηρώτησωμαι", "ἐπηρώτησῃ", "ἐπηρώτησηται", "ἐπηρώτησώμεθα", "ἐπηρώτησησθε", "ἐπηρώτησωνται"],
      "Aorist Passive Subjunctive": ["ἐπερωτηθῶ", "ἐπερωτηθῇς", "ἐπερωτηθῇ", "ἐπερωτηθῶμεν", "ἐπερωτηθῆτε", "ἐπερωτηθῶσιν"],
    },
    infinitives: {
      "Present Active": "ἐπερωτᾶν",
      "1st Aorist Active": "ἐπερωτῆσαι",
    },
    imperative: {
      "Present Active Imperative": ["ἐπερώτα", "ἐπερωτάτω", "ἐπερωτᾶτε", "ἐπερωτάτωσαν"],
      "1st Aorist Active Imperative": ["ἐπερώτησον", "ἐπερωτησάτω", "ἐπερωτήσατε", "ἐπερωτησάτωσαν"],
    },

  },
  "ἐρωτάω": {
    meaning: "I ask; request",
    indicative: {
      "Present Active Indicative": ["ἐρωτῶ", "ἐρωτᾷς", "ἐρωτᾷ", "ἐρωτῶμεν", "ἐρωτᾶτε", "ἐρωτῶσι"],
      "Future Active Indicative": ["ἐρωτήσω", "ἐρωτήσεις", "ἐρωτήσει", "ἐρωτήσομεν", "ἐρωτήσετε", "ἐρωτήσουσι"],
      "Imperfect Active Indicative": ["ἠρώτων", "ἠρώτας", "ἠρώτα", "ἠρωτῶμεν", "ἠρωτᾶτε", "ἠρώτων"],
      "1st Aorist Active Indicative": ["ἠρώτησα", "ἠρώτησας", "ἠρώτησε", "ἠρωτήσαμεν", "ἠρωτήσατε", "ἠρώτησαν"],
      "Present Middle/Passive Indicative": ["ἐρωτῶμαι", "ἐρωτᾷ", "ἐρωτᾶται", "ἐρωτώμεθα", "ἐρωτᾶσθε", "ἐρωτῶνται"],
      "Imperfect Middle/Passive Indicative": ["ἠρωτώμην", "ἠρώτου", "ἠρωτᾶτο", "ἠρωτώμεθα", "ἠρωτᾶσθε", "ἠρωτῶντο"],
      "Future Middle Indicative": ["ἐρωτήσομαι", "ἐρωτήσῃ", "ἐρωτήσεται", "ἐρωτησόμεθα", "ἐρωτήσεσθε", "ἐρωτήσονται"],
      "Future Passive Indicative": ["ἐρωτηθήσομαι", "ἐρωτηθήσῃ", "ἐρωτηθήσεται", "ἐρωτηθησόμεθα", "ἐρωτηθήσεσθε", "ἐρωτηθήσονται"],
      "1st Aorist Middle Indicative": ["ἠρωτησάμην", "ἠρώτησω", "ἠρωτήσατο", "ἠρωτησάμεθα", "ἠρωτήσασθε", "ἠρωτήσαντο"],
      "1st Aorist Passive Indicative": ["ἠρωτήθην", "ἠρωτήθης", "ἠρωτήθη", "ἠρωτήθημεν", "ἠρωτήθητε", "ἠρωτήθησαν"],
      "Perfect Active Indicative": ["ἠρώτηκα", "ἠρώτηκας", "ἠρώτηκε", "ἠρωτήκαμεν", "ἠρωτήκατε", "ἠρώτηκασι"],
      "Perfect Middle/Passive Indicative": ["ἠρώτημαι", "ἠρώτησαι", "ἠρώτηται", "ἠρωτήμεθα", "ἠρώτησθε", "ἠρώτηνται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἐρωτῶ", "ἐρωτᾷς", "ἐρωτᾷ", "ἐρωτῶμεν", "ἐρωτᾶτε", "ἐρωτῶσιν"],
      "Present Middle/Passive Subjunctive": ["ἐρωτῶμαι", "ἐρωτᾷ", "ἐρωτᾶται", "ἐρωτώμεθα", "ἐρωτᾶσθε", "ἐρωτῶνται"],
      "Aorist Active Subjunctive": ["ἠρώτησω", "ἠρώτησῃς", "ἠρώτησῃ", "ἠρώτησωμεν", "ἠρώτησητε", "ἠρώτησωσιν"],
      "Aorist Middle Subjunctive": ["ἠρώτησωμαι", "ἠρώτησῃ", "ἠρώτησηται", "ἠρώτησώμεθα", "ἠρώτησησθε", "ἠρώτησωνται"],
      "Aorist Passive Subjunctive": ["ἐρωτηθῶ", "ἐρωτηθῇς", "ἐρωτηθῇ", "ἐρωτηθῶμεν", "ἐρωτηθῆτε", "ἐρωτηθῶσιν"],
    },
    infinitives: {
      "Present Active": "ἐρωτᾶν",
      "1st Aorist Active": "ἐρωτῆσαι",
    },
    imperative: {
      "Present Active Imperative": ["ἐρώτα", "ἐρωτάτω", "ἐρωτᾶτε", "ἐρωτάτωσαν"],
      "1st Aorist Active Imperative": ["ἐρώτησον", "ἐρωτησάτω", "ἐρωτήσατε", "ἐρωτησάτωσαν"],
    },

  },
  "θέλω": {
    meaning: "I wish, desire; enjoy",
    indicative: {
      "Present Active Indicative": ["θέλω", "θέλεις", "θέλει", "θέλομεν", "θέλετε", "θέλουσι"],
      "Future Active Indicative": ["θελήσω", "θελήσεις", "θελήσει", "θελήσομεν", "θελήσετε", "θελήσουσι"],
      "Imperfect Active Indicative": ["ἤθελον", "ἤθελες", "ἤθελε", "ἠθέλομεν", "ἠθέλετε", "ἤθελον"],
      "1st Aorist Active Indicative": ["ἠθέλησα", "ἠθέλησας", "ἠθέλησε", "ἠθελήσαμεν", "ἠθελήσατε", "ἠθέλησαν"],
      "Perfect Active Indicative": ["τεθέληκα", "τεθέληκας", "τεθέληκε", "τεθελήκαμεν", "τεθελήκατε", "τεθέληκασι"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["θέλω", "θέλῃς", "θέλῃ", "θέλωμεν", "θέλητε", "θέλωσιν"],
      "Present Middle/Passive Subjunctive": ["θέλωμαι", "θέλῃ", "θέληται", "θέλώμεθα", "θέλησθε", "θέλωνται"],
      "Aorist Active Subjunctive": ["θελήσω", "θελήσῃς", "θελήσῃ", "θελήσωμεν", "θελήσητε", "θελήσωσιν"],
      "Aorist Middle Subjunctive": ["θελήσωμαι", "θελήσῃ", "θελήσηται", "θελήσώμεθα", "θελήσησθε", "θελήσωνται"],
    },
    infinitives: {
      "Present Active": "θέλειν",
      "1st Aorist Active": "θελῆσαι",
    },
    imperative: {
      "Present Active Imperative": ["θέλε", "θελέτω", "θέλετε", "θελέτωσαν"],
    },

  },
  "περιπατέω": {
    meaning: "I walk (around); live",
    indicative: {
      "Present Active Indicative": ["περιπατῶ", "περιπατεῖς", "περιπατεῖ", "περιπατοῦμεν", "περιπατεῖτε", "περιπατοῦσι"],
      "Future Active Indicative": ["περιπατήσω", "περιπατήσεις", "περιπατήσει", "περιπατήσομεν", "περιπατήσετε", "περιπατήσουσι"],
      "Imperfect Active Indicative": ["περιεπάτουν", "περιεπάτεις", "περιεπάτει", "περιεπατοῦμεν", "περιεπατεῖτε", "περιεπάτουν"],
      "1st Aorist Active Indicative": ["περιεπάτησα", "περιεπάτησας", "περιεπάτησε", "περιεπατήσαμεν", "περιεπατήσατε", "περιεπάτησαν"],
      "Present Middle/Passive Indicative": ["περιπατοῦμαι", "περιπατεῖ", "περιπατεῖται", "περιπατούμεθα", "περιπατεῖσθε", "περιπατοῦνται"],
      "Imperfect Middle/Passive Indicative": ["περιεπατούμην", "περιεπατοῦ", "περιεπάτειτο", "περιεπατούμεθα", "περιεπατεῖσθε", "περιεπατοῦντο"],
      "Future Middle Indicative": ["περιπατήσομαι", "περιπατήσῃ", "περιπατήσειται", "περιπατησόμεθα", "περιπατήσεσθε", "περιπατήσονται"],
      "Future Passive Indicative": ["περιπατηθήσομαι", "περιπατηθήσῃ", "περιπατηθήσεται", "περιπατηθησόμεθα", "περιπατηθήσεσθε", "περιπατηθήσονται"],
      "1st Aorist Middle Indicative": ["περιεπατησάμην", "περιεπάτησω", "περιεπατήσατο", "περιεπατησάμεθα", "περιεπατήσασθε", "περιεπατήσαντο"],
      "1st Aorist Passive Indicative": ["περιεπατήθην", "περιεπατήθης", "περιεπατήθη", "περιεπατήθημεν", "περιεπατήθητε", "περιεπατήθησαν"],
      "Perfect Active Indicative": ["περιπεπάτηκα", "περιπεπάτηκας", "περιπεπάτηκε", "περιπεπατήκαμεν", "περιπεπατήκατε", "περιπεπάτηκασι"],
      "Perfect Middle/Passive Indicative": ["περιπεπάτημαι", "περιπεπάτησαι", "περιπεπάτηται", "περιπεπατήμεθα", "περιπεπάτησθε", "περιπεπάτηνται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["περιπατῶ", "περιπατῇς", "περιπατῇ", "περιπατῶμεν", "περιπατῆτε", "περιπατῶσιν"],
      "Present Middle/Passive Subjunctive": ["περιπατῶμαι", "περιπατῇ", "περιπατῆται", "περιπατώμεθα", "περιπατῆσθε", "περιπατῶνται"],
      "Aorist Active Subjunctive": ["περιεπάτησω", "περιεπάτησῃς", "περιεπάτησῃ", "περιεπάτησωμεν", "περιεπάτησητε", "περιεπάτησωσιν"],
      "Aorist Middle Subjunctive": ["περιεπάτησωμαι", "περιεπάτησῃ", "περιεπάτησηται", "περιεπάτησώμεθα", "περιεπάτησησθε", "περιεπάτησωνται"],
      "Aorist Passive Subjunctive": ["περιπατηθῶ", "περιπατηθῇς", "περιπατηθῇ", "περιπατηθῶμεν", "περιπατηθῆτε", "περιπατηθῶσιν"],
    },
    infinitives: {
      "Present Active": "περιπατεῖν",
      "1st Aorist Active": "περιπατῆσαι",
    },
    imperative: {
      "Present Active Imperative": ["περιπάτει", "περιπατείτω", "περιπατεῖτε", "περιπατείτωσαν"],
      "1st Aorist Active Imperative": ["περιπάτησον", "περιπατησάτω", "περιπατήσατε", "περιπατησάτωσαν"],
    },

  },
  "ἀποθνῄσκω": {
    meaning: "I die, am about to die, am freed from",
    indicative: {
      "Present Active Indicative": ["ἀποθνῄσκω", "ἀποθνῄσκεις", "ἀποθνῄσκει", "ἀποθνῄσκομεν", "ἀποθνῄσκετε", "ἀποθνῄσκουσιν"],
      "Future Middle Indicative": ["ἀποθανοῦμαι", "ἀποθανῇ", "ἀποθανεῖται", "ἀποθανούμεθα", "ἀποθανεῖσθε", "ἀποθανοῦνται"],
      "Imperfect Active Indicative": ["ἀπέθνῃσκον", "ἀπέθνῃσκες", "ἀπέθνῃσκε(ν)", "ἀπεθνῄσκομεν", "ἀπεθνῄσκετε", "ἀπέθνῃσκον"],
      "2nd Aorist Active Indicative": ["ἀπέθανον", "ἀπέθανες", "ἀπέθανε(ν)", "ἀπεθάνομεν", "ἀπεθάνετε", "ἀπέθανον"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἀποθνῄσκω", "ἀποθνῄσκῃς", "ἀποθνῄσκῃ", "ἀποθνῄσκωμεν", "ἀποθνῄσκητε", "ἀποθνῄσκωσιν"],
      "Present Middle/Passive Subjunctive": ["ἀποθνῄσκωμαι", "ἀποθνῄσκῃ", "ἀποθνῄσκηται", "ἀποθνῄσκώμεθα", "ἀποθνῄσκησθε", "ἀποθνῄσκωνται"],
      "Aorist Active Subjunctive": ["ἀποθάνω", "ἀποθάνῃς", "ἀποθάνῃ", "ἀποθάνωμεν", "ἀποθάνητε", "ἀποθάνωσιν"],
      "Aorist Middle Subjunctive": ["ἀποθάνωμαι", "ἀποθάνῃ", "ἀποθάνηται", "ἀποθάνώμεθα", "ἀποθάνησθε", "ἀποθάνωνται"],
    },
    infinitives: {
      "Present Active": "ἀποθνῄσκειν",
      "2nd Aorist Active": "ἀποθανεῖν",
    },
    imperative: {
      "Present Active Imperative": ["ἀποθνῇσκε", "ἀποθνῃσκέτω", "ἀποθνῄσκετε", "ἀποθνῃσκέτωσαν"],
      "2nd Aorist Active Imperative": ["ἀπόθανε", "ἀποθανέτω", "ἀποθάνετε", "ἀποθανέτωσαν"],
    },

  },
  "βάλλω": {
    meaning: "I throw",
    indicative: {
      "Present Active Indicative": ["βάλλω", "βάλλεις", "βάλλει", "βάλλομεν", "βάλλετε", "βάλλουσιν"],
      "Present Middle/Passive Indicative": ["βάλλομαι", "βάλλῃ", "βάλλεται", "βαλλόμεθα", "βάλλεσθε", "βάλλονται"],
      "Future Active Indicative": ["βαλῶ", "βαλεῖς", "βαλεῖ", "βαλοῦμεν", "βαλεῖτε", "βαλοῦσιν"],
      "Imperfect Active Indicative": ["ἔβαλλον", "ἔβαλλες", "ἔβαλλε(ν)", "ἐβάλλομεν", "ἐβάλλετε", "ἔβαλλον"],
      "1st Aorist Passive Indicative": ["ἐβλήθην", "ἐβλήθης", "ἐβλήθη", "ἐβλήθημεν", "ἐβλήθητε", "ἐβλήθησαν"],
      "Perfect Active Indicative": ["βέβληκα", "βέβληκας", "βέβληκε(ν)", "βεβλήκαμεν", "βεβλήκατε", "βεβλήκασιν"],
      "Perfect Middle/Passive Indicative": ["βέβλημαι", "βέβλησαι", "βέβληται", "βεβλήμεθα", "βέβλησθε", "βέβληνται"],
      "2nd Aorist Active Indicative": ["ἔβαλον", "ἔβαλες", "ἔβαλε(ν)", "ἐβάλομεν", "ἐβάλετε", "ἔβαλον"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["βάλλω", "βάλλῃς", "βάλλῃ", "βάλλωμεν", "βάλλητε", "βάλλωσιν"],
      "Present Middle/Passive Subjunctive": ["βάλλωμαι", "βάλλῃ", "βάλληται", "βάλλώμεθα", "βάλλησθε", "βάλλωνται"],
      "Aorist Active Subjunctive": ["βάλω", "βάλῃς", "βάλῃ", "βάλωμεν", "βάλητε", "βάλωσιν"],
      "Aorist Middle Subjunctive": ["βάλωμαι", "βάλῃ", "βάληται", "βάλώμεθα", "βάλησθε", "βάλωνται"],
      "Aorist Passive Subjunctive": ["βληθῶ", "βληθῇς", "βληθῇ", "βληθῶμεν", "βληθῆτε", "βληθῶσιν"],
    },
    infinitives: {
      "Present Active": "βάλλειν",
      "Present Middle/Passive": "βάλλεσθαι",
      "1st Aorist Passive": "βληθῆναι",
      "2nd Aorist Active": "βαλεῖν",
      "Perfect Active": "βεβληκέναι",
    },
    imperative: {
      "Present Active Imperative": ["βάλλε", "βαλλέτω", "βάλλετε", "βαλλέτωσαν"],
      "2nd Aorist Active Imperative": ["βάλε", "βαλέτω", "βάλετε", "βαλέτωσαν"],
      "1st Aorist Passive Imperative": ["βλήθητι", "βληθήτω", "βλήθητε", "βληθήτωσαν"],
    },

  },
  "γίνομαι": {
    meaning: "I become, take place; am, exist; am born, am created",
    indicative: {
      "Present Middle/Passive Indicative": ["γίνομαι", "γίνῃ", "γίνεται", "γινόμεθα", "γίνεσθε", "γίνονται"],
      "Future Middle Indicative": ["γενήσομαι", "γενήσῃ", "γενήσεται", "γενησόμεθα", "γενήσεσθε", "γενήσονται"],
      "Imperfect Middle/Passive Indicative": ["ἐγινόμην", "ἐγίνου", "ἐγίνετο", "ἐγινόμεθα", "ἐγίνεσθε", "ἐγίνοντο"],
      "1st Aorist Passive Indicative": ["ἐγενήθην", "ἐγενήθης", "ἐγενήθη", "ἐγενήθημεν", "ἐγενήθητε", "ἐγενήθησαν"],
      "Perfect Active Indicative": ["γέγονα", "γέγονας", "γέγονε(ν)", "γεγόναμεν", "γεγόνατε", "γεγόνασιν"],
      "Perfect Middle/Passive Indicative": ["γεγένημαι", "γεγένησαι", "γεγένηται", "γεγενήμεθα", "γεγένησθε", "γεγένηνται"],
      "2nd Aorist Middle Indicative": ["ἐγενόμην", "ἐγένου", "ἐγένετο", "ἐγενόμεθα", "ἐγένεσθε", "ἐγένοντο"],
      "Present Indicative": ["γίνομαι", "γίνῃ", "γίνεται", "γινόμεθα", "γίνεσθε", "γίνονται"],
      "Imperfect Indicative": ["ἐγινόμην", "ἐγίνου", "ἐγίνετο", "ἐγινόμεθα", "ἐγίνεσθε", "ἐγίνοντο"],
      "Future Indicative": ["γενήσομαι", "γενήσῃ", "γενήσεται", "γενησόμεθα", "γενήσεσθε", "γενήσονται"],
      "Aorist Indicative": ["ἐγενόμην", "ἐγένου", "ἐγένετο", "ἐγενόμεθα", "ἐγένεσθε", "ἐγένοντο"],
      "Perfect Indicative": ["γέγονα", "γέγονας", "γέγονε(ν)", "γεγόναμεν", "γεγόνατε", "γεγόνασι(ν)"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["γίνωμαι", "γίνῃ", "γίνηται", "γινώμεθα", "γίνησθε", "γίνωνται"],
      "Aorist Middle Subjunctive": ["γένωμαι", "γένῃ", "γένηται", "γενώμεθα", "γένησθε", "γένωνται"],
      "Aorist Passive Subjunctive": ["γενήῶ", "γενήῇς", "γενήῇ", "γενήῶμεν", "γενήῆτε", "γενήῶσιν"],
    },
    infinitives: {
      "Present Middle/Passive": "γίνεσθαι",
      "2nd Aorist Middle": "γενέσθαι",
      "Perfect Active": "γεγονέναι",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["γίνου", "γινέσθω", "γίνεσθε", "γινέσθωσαν"],
      "2nd Aorist Middle Imperative": ["γενοῦ", "γενέσθω", "γένεσθε", "γενέσθωσαν"],
      "1st Aorist Passive Imperative": ["γενήθητι", "γενηθήτω", "γενήθητε", "γενηθήτωσαν"],
    },

  },
  "εἰσέρχομαι": {
    meaning: "I come/go into; enter",
    indicative: {
      "Present Middle/Passive Indicative": ["εἰσέρχομαι", "εἰσέρχῃ", "εἰσέρχεται", "εἰσερχόμεθα", "εἰσέρχεσθε", "εἰσέρχονται"],
      "Future Middle Indicative": ["εἰσελεύσομαι", "εἰσελεύσῃ", "εἰσελεύσεται", "εἰσελευσόμεθα", "εἰσελεύσεσθε", "εἰσελεύσονται"],
      "Imperfect Middle/Passive Indicative": ["εἰσηρχόμην", "εἰσήρχου", "εἰσήρχετο", "εἰσηρχόμεθα", "εἰσήρχεσθε", "εἰσήρχοντο"],
      "Perfect Active Indicative": ["εἰσελήλυθα", "εἰσελήλυθας", "εἰσελήλυθε(ν)", "εἰσεληλύθαμεν", "εἰσεληλύθατε", "εἰσεληλύθασιν"],
      "2nd Aorist Active Indicative": ["εἰσῆλθον", "εἰσῆλθες", "εἰσῆλθε(ν)", "εἰσήλθομεν", "εἰσήλθετε", "εἰσῆλθον"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["εἰσέρχωμαι", "εἰσέρχῃ", "εἰσέρχηται", "εἰσέρχώμεθα", "εἰσέρχησθε", "εἰσέρχωνται"],
      "Aorist Active Subjunctive": ["εἰσέλθω", "εἰσέλθῃς", "εἰσέλθῃ", "εἰσέλθωμεν", "εἰσέλθητε", "εἰσέλθωσιν"],
      "Aorist Middle Subjunctive": ["εἰσέλθωμαι", "εἰσέλθῃ", "εἰσέλθηται", "εἰσέλθώμεθα", "εἰσέλθησθε", "εἰσέλθωνται"],
    },
    infinitives: {
      "Present Middle/Passive": "εἰσέρχεσθαι",
      "2nd Aorist Active": "εἰσελθεῖν",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["εἰσέρχου", "εἰσερχέσθω", "εἰσέρχεσθε", "εἰσερχέσθωσαν"],
      "2nd Aorist Active Imperative": ["εἴσελθε", "εἰσελθέτω", "εἰσέλθετε", "εἰσελθέτωσαν"],
    },

  },
  "ἐξέρχομαι": {
    meaning: "I go/come out",
    indicative: {
      "Present Middle/Passive Indicative": ["ἐξέρχομαι", "ἐξέρχῃ", "ἐξέρχεται", "ἐξερχόμεθα", "ἐξέρχεσθε", "ἐξέρχονται"],
      "Future Middle Indicative": ["ἐξελεύσομαι", "ἐξελεύσῃ", "ἐξελεύσεται", "ἐξελευσόμεθα", "ἐξελεύσεσθε", "ἐξελεύσονται"],
      "Imperfect Middle/Passive Indicative": ["ἐξηρχόμην", "ἐξήρχου", "ἐξήρχετο", "ἐξηρχόμεθα", "ἐξήρχεσθε", "ἐξήρχοντο"],
      "Perfect Active Indicative": ["ἐξελήλυθα", "ἐξελήλυθας", "ἐξελήλυθε(ν)", "ἐξεληλύθαμεν", "ἐξεληλύθατε", "ἐξεληλύθασιν"],
      "2nd Aorist Active Indicative": ["ἐξῆλθον", "ἐξῆλθες", "ἐξῆλθε(ν)", "ἐξήλθομεν", "ἐξήλθετε", "ἐξῆλθον"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["ἐξέρχωμαι", "ἐξέρχῃ", "ἐξέρχηται", "ἐξέρχώμεθα", "ἐξέρχησθε", "ἐξέρχωνται"],
      "Aorist Active Subjunctive": ["ἐξέλθω", "ἐξέλθῃς", "ἐξέλθῃ", "ἐξέλθωμεν", "ἐξέλθητε", "ἐξέλθωσιν"],
      "Aorist Middle Subjunctive": ["ἐξέλθωμαι", "ἐξέλθῃ", "ἐξέλθηται", "ἐξέλθώμεθα", "ἐξέλθησθε", "ἐξέλθωνται"],
    },
    infinitives: {
      "Present Middle/Passive": "ἐξέρχεσθαι",
      "2nd Aorist Active": "ἐξελθεῖν",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["ἐξέρχου", "ἐξερχέσθω", "ἐξέρχεσθε", "ἐξερχέσθωσαν"],
      "2nd Aorist Active Imperative": ["ἔξελθε", "ἐξελθέτω", "ἐξέλθετε", "ἐξελθέτωσαν"],
    },

  },
  "εὑρίσκω": {
    meaning: "I find",
    indicative: {
      "Present Active Indicative": ["εὑρίσκω", "εὑρίσκεις", "εὑρίσκει", "εὑρίσκομεν", "εὑρίσκετε", "εὑρίσκουσιν"],
      "Future Active Indicative": ["εὑρήσω", "εὑρήσεις", "εὑρήσει", "εὑρήσομεν", "εὑρήσετε", "εὑρήσουσιν"],
      "Imperfect Active Indicative": ["ηὕρισκον", "ηὕρισκες", "ηὕρισκε(ν)", "ηὑρίσκομεν", "ηὑρίσκετε", "ηὕρισκον"],
      "1st Aorist Passive Indicative": ["εὑρέθην", "εὑρέθης", "εὑρέθη", "εὑρέθημεν", "εὑρέθητε", "εὑρέθησαν"],
      "Perfect Active Indicative": ["εὕρηκα", "εὕρηκας", "εὕρηκε(ν)", "εὑρήκαμεν", "εὑρήκατε", "εὑρήκασιν"],
      "2nd Aorist Active Indicative": ["εὗρον", "εὗρες", "εὗρε(ν)", "εὕρομεν", "εὕρετε", "εὗρον"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["εὑρίσκω", "εὑρίσκῃς", "εὑρίσκῃ", "εὑρίσκωμεν", "εὑρίσκητε", "εὑρίσκωσιν"],
      "Present Middle/Passive Subjunctive": ["εὑρίσκωμαι", "εὑρίσκῃ", "εὑρίσκηται", "εὑρίσκώμεθα", "εὑρίσκησθε", "εὑρίσκωνται"],
      "Aorist Active Subjunctive": ["εὕρω", "εὕρῃς", "εὕρῃ", "εὕρωμεν", "εὕρητε", "εὕρωσιν"],
      "Aorist Middle Subjunctive": ["εὕρωμαι", "εὕρῃ", "εὕρηται", "εὕρώμεθα", "εὕρησθε", "εὕρωνται"],
      "Aorist Passive Subjunctive": ["ὑρέῶ", "ὑρέῇς", "ὑρέῇ", "ὑρέῶμεν", "ὑρέῆτε", "ὑρέῶσιν"],
    },
    infinitives: {
      "Present Active": "εὑρίσκειν",
      "1st Aorist Passive": "εὑρεθῆναι",
      "2nd Aorist Active": "εὑρεῖν",
      "Perfect Active": "εὑρηκέναι",
    },
    imperative: {
      "Present Active Imperative": ["εὕρισκε", "εὑρισκέτω", "εὑρίσκετε", "εὑρισκέτωσαν"],
      "2nd Aorist Active Imperative": ["εὑρέ", "εὑρέτω", "εὕρετε", "εὑρέτωσαν"],
    },

  },
  "λαμβάνω": {
    meaning: "I take/receive",
    indicative: {
      "Present Active Indicative": ["λαμβάνω", "λαμβάνεις", "λαμβάνει", "λαμβάνομεν", "λαμβάνετε", "λαμβάνουσι(ν)"],
      "Present Middle/Passive Indicative": ["λαμβάνομαι", "λαμβάνῃ", "λαμβάνεται", "λαμβανόμεθα", "λαμβάνεσθε", "λαμβάνονται"],
      "Future Active Indicative": ["λήμψομαι", "λήμψῃ", "λήμψεται", "λημψόμεθα", "λήμψεσθε", "λήμψονται"],
      "Imperfect Active Indicative": ["ἐλάμβανον", "ἐλάμβανες", "ἐλάμβανε(ν)", "ἐλαμβάνομεν", "ἐλαμβάνετε", "ἐλάμβανον"],
      "1st Aorist Passive Indicative": ["ἐλήμφθην", "ἐλήμφθης", "ἐλήμφθη", "ἐλήμφθημεν", "ἐλήμφθητε", "ἐλήμφθησαν"],
      "Perfect Active Indicative": ["εἴληφα", "εἴληφας", "εἴληφε(ν)", "εἰλήφαμεν", "εἰλήφατε", "εἰλήφασι(ν)"],
      "2nd Aorist Active Indicative": ["ἔλαβον", "ἔλαβες", "ἔλαβε(ν)", "ἐλάβομεν", "ἐλάβετε", "ἔλαβον"],
      "2nd Aorist Middle Indicative": ["ἐλαβόμην", "ἐλάβου", "ἐλάβετο", "ἐλαβόμεθα", "ἐλάβεσθε", "ἐλάβοντο"],
      "Aorist Active Indicative": ["ἔλαβον", "ἔλαβες", "ἔλαβε(ν)", "ἐλάβομεν", "ἐλάβετε", "ἔλαβον"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["λαμβάνω", "λαμβάνῃς", "λαμβάνῃ", "λαμβάνωμεν", "λαμβάνητε", "λαμβάνωσιν"],
      "Present Middle/Passive Subjunctive": ["λαμβάνωμαι", "λαμβάνῃ", "λαμβάνηται", "λαμβάνώμεθα", "λαμβάνησθε", "λαμβάνωνται"],
      "Aorist Active Subjunctive": ["λάβω", "λάβῃς", "λάβῃ", "λάβωμεν", "λάβητε", "λάβωσιν"],
      "Aorist Middle Subjunctive": ["λάβωμαι", "λάβῃ", "λάβηται", "λάβώμεθα", "λάβησθε", "λάβωνται"],
      "Aorist Passive Subjunctive": ["λήμφῶ", "λήμφῇς", "λήμφῇ", "λήμφῶμεν", "λήμφῆτε", "λήμφῶσιν"],
    },
    infinitives: {
      "Present Active": "λαμβάνειν",
      "2nd Aorist Active": "λαβεῖν",
      "Perfect Active": "εἰληφέναι",
    },
    imperative: {
      "Present Active Imperative": ["λάμβανε", "λαμβανέτω", "λαμβάνετε", "λαμβανέτωσαν"],
      "2nd Aorist Active Imperative": ["λαβέ", "λαβέτω", "λάβετε", "λαβέτωσαν"],
    },

  },
  "προσέρχομαι": {
    meaning: "I come/go to",
    indicative: {
      "Present Middle/Passive Indicative": ["προσέρχομαι", "προσέρχῃ", "προσέρχεται", "προσερχόμεθα", "προσέρχεσθε", "προσέρχονται"],
      "Future Middle Indicative": ["προσελεύσομαι", "προσελεύσῃ", "προσελεύσεται", "προσελευσόμεθα", "προσελεύσεσθε", "προσελεύσονται"],
      "Imperfect Middle/Passive Indicative": ["προσηρχόμην", "προσήρχου", "προσήρχετο", "προσηρχόμεθα", "προσήρχεσθε", "προσήρχοντο"],
      "Perfect Active Indicative": ["προσελήλυθα", "προσελήλυθας", "προσελήλυθε(ν)", "προσεληλύθαμεν", "προσεληλύθατε", "προσεληλύθασιν"],
      "2nd Aorist Active Indicative": ["προσῆλθον", "προσῆλθες", "προσῆλθε(ν)", "προσήλθομεν", "προσήλθετε", "προσῆλθον"],
      "Present Indicative": ["προσέρχομαι", "προσέρχῃ", "προσέρχεται", "προσερχόμεθα", "προσέρχεσθε", "προσέρχονται"],
      "Imperfect Indicative": ["προσηρχόμην", "προσήρχου", "προσήρχετο", "προσηρχόμεθα", "προσήρχεσθε", "προσήρχοντο"],
      "Future Indicative": ["προσελεύσομαι", "προσελεύσῃ", "προσελεύσεται", "προσελευσόμεθα", "προσελεύσεσθε", "προσελεύσονται"],
      "Aorist Indicative": ["προσῆλθον", "προσῆλθες", "προσῆλθε(ν)", "προσῆλθομεν", "προσῆλθετε", "προσῆλθον"],
      "Perfect Indicative": ["προσελήλυθα", "προσελήλυθας", "προσελήλυθε(ν)", "προσεληλύθαμεν", "προσεληλύθατε", "προσελήλυθασι(ν)"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["προσέρχωμαι", "προσέρχῃ", "προσέρχηται", "προσέρχώμεθα", "προσέρχησθε", "προσέρχωνται"],
      "Aorist Active Subjunctive": ["προσέλθω", "προσέλθῃς", "προσέλθῃ", "προσέλθωμεν", "προσέλθητε", "προσέλθωσιν"],
      "Aorist Middle Subjunctive": ["προσέλθωμαι", "προσέλθῃ", "προσέλθηται", "προσέλθώμεθα", "προσέλθησθε", "προσέλθωνται"],
    },
    infinitives: {
      "Present Middle/Passive": "προσέρχεσθαι",
      "2nd Aorist Active": "προσελθεῖν",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["προσέρχου", "προσερχέσθω", "προσέρχεσθε", "προσερχέσθωσαν"],
      "2nd Aorist Active Imperative": ["πρόσελθε", "προσελθέτω", "προσέλθετε", "προσελθέτωσαν"],
    },

  },
  "προσεύχομαι": {
    meaning: "I pray",
    indicative: {
      "Present Middle/Passive Indicative": ["προσεύχομαι", "προσεύχῃ", "προσεύχεται", "προσευχόμεθα", "προσεύχεσθε", "προσεύχονται"],
      "Future Middle Indicative": ["προσεύξομαι", "προσεύξῃ", "προσεύξεται", "προσευξόμεθα", "προσεύξεσθε", "προσεύξονται"],
      "Imperfect Middle/Passive Indicative": ["προσηυχόμην", "προσηύχου", "προσηύχετο", "προσηυχόμεθα", "προσηύχεσθε", "προσηύχοντο"],
      "1st Aorist Middle Indicative": ["προσηυξάμην", "προσηύξω", "προσηύξατο", "προσηυξάμεθα", "προσηύξασθε", "προσηύξαντο"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["προσεύχωμαι", "προσεύχῃ", "προσεύχηται", "προσευχώμεθα", "προσεύχησθε", "προσεύχωνται"],
      "Aorist Middle Subjunctive": ["προσεύξωμαι", "προσεύξῃ", "προσεύξηται", "προσευξώμεθα", "προσεύξησθε", "προσεύξωνται"],
    },
    infinitives: {
      "Present Middle/Passive": "προσεύχεσθαι",
      "1st Aorist Middle": "προσεύξασθαι",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["προσεύχου", "προσευχέσθω", "προσεύχεσθε", "προσευχέσθωσαν"],
      "1st Aorist Middle Imperative": ["πρόσευξαι", "προσευξάσθω", "προσεύξασθε", "προσευξάσθωσαν"],
    },

  },
  "ἀπέρχομαι": {
    meaning: "I depart",
    indicative: {
      "Present Middle/Passive Indicative": ["ἀπέρχομαι", "ἀπέρχῃ", "ἀπέρχεται", "ἀπερχόμεθα", "ἀπέρχεσθε", "ἀπέρχονται"],
      "Future Middle Indicative": ["ἀπελεύσομαι", "ἀπελεύσῃ", "ἀπελεύσεται", "ἀπελευσόμεθα", "ἀπελεύσεσθε", "ἀπελεύσονται"],
      "Imperfect Middle/Passive Indicative": ["ἀπηρχόμην", "ἀπήρχου", "ἀπήρχετο", "ἀπηρχόμεθα", "ἀπήρχεσθε", "ἀπήρχοντο"],
      "Perfect Active Indicative": ["ἀπελήλυθα", "ἀπελήλυθας", "ἀπελήλυθε(ν)", "ἀπεληλύθαμεν", "ἀπεληλύθατε", "ἀπεληλύθασιν"],
      "2nd Aorist Active Indicative": ["ἀπῆλθον", "ἀπῆλθες", "ἀπῆλθε(ν)", "ἀπήλθομεν", "ἀπήλθετε", "ἀπῆλθον"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["ἀπέρχωμαι", "ἀπέρχῃ", "ἀπέρχηται", "ἀπέρχώμεθα", "ἀπέρχησθε", "ἀπέρχωνται"],
      "Aorist Active Subjunctive": ["ἀπέλθω", "ἀπέλθῃς", "ἀπέλθῃ", "ἀπέλθωμεν", "ἀπέλθητε", "ἀπέλθωσιν"],
      "Aorist Middle Subjunctive": ["ἀπέλθωμαι", "ἀπέλθῃ", "ἀπέλθηται", "ἀπέλθώμεθα", "ἀπέλθησθε", "ἀπέλθωνται"],
    },
    infinitives: {
      "Present Middle/Passive": "ἀπέρχεσθαι",
      "2nd Aorist Active": "ἀπελθεῖν",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["ἀπέρχου", "ἀπερχέσθω", "ἀπέρχεσθε", "ἀπερχέσθωσαν"],
      "2nd Aorist Active Imperative": ["ἄπελθε", "ἀπελθέτω", "ἀπέλθετε", "ἀπελθέτωσαν"],
    },

  },
  "ἄρχομαι": {
    meaning: "I begin",
    indicative: {
      "Present Middle/Passive Indicative": ["ἄρχομαι", "ἄρχῃ", "ἄρχεται", "ἀρχόμεθα", "ἄρχεσθε", "ἄρχονται"],
      "Future Middle Indicative": ["ἄρξομαι", "ἄρξῃ", "ἄρξεται", "ἀρξόμεθα", "ἄρξεσθε", "ἄρξονται"],
      "Imperfect Middle/Passive Indicative": ["ἠρχόμην", "ἤρχου", "ἤρχετο", "ἠρχόμεθα", "ἤρχεσθε", "ἤρχοντο"],
      "1st Aorist Middle Indicative": ["ἠρξάμην", "ἤρξω", "ἤρξατο", "ἠρξάμεθα", "ἤρξασθε", "ἤρξαντο"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["ἄρχωμαι", "ἄρχῃ", "ἄρχηται", "ἀρχώμεθα", "ἄρχησθε", "ἄρχωνται"],
      "Aorist Middle Subjunctive": ["ἄρξωμαι", "ἄρξῃ", "ἄρξηται", "ἀρξώμεθα", "ἄρξησθε", "ἄρξωνται"],
    },
    infinitives: {
      "Present Middle/Passive": "ἄρχεσθαι",
      "1st Aorist Middle": "ἄρξασθαι",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["ἄρχου", "ἀρχέσθω", "ἄρχεσθε", "ἀρχέσθωσαν"],
      "1st Aorist Middle Imperative": ["ἄρξαι", "ἀρξάσθω", "ἄρξασθε", "ἀρξάσθωσαν"],
    },

  },
  "γράφω": {
    meaning: "I write",
    indicative: {
      "Present Active Indicative": ["γράφω", "γράφεις", "γράφει", "γράφομεν", "γράφετε", "γράφουσι(ν)"],
      "Present Middle/Passive Indicative": ["γράφομαι", "γράφῃ", "γράφεται", "γραφόμεθα", "γράφεσθε", "γράφονται"],
      "Future Active Indicative": ["γράψω", "γράψεις", "γράψει", "γράψομεν", "γράψετε", "γράψουσι(ν)"],
      "Imperfect Active Indicative": ["ἔγραφον", "ἔγραφες", "ἔγραφε(ν)", "ἐγράφομεν", "ἐγράφετε", "ἔγραφον"],
      "1st Aorist Active Indicative": ["ἔγραψα", "ἔγραψας", "ἔγραψε(ν)", "ἐγράψαμεν", "ἐγράψατε", "ἔγραψαν"],
      "Perfect Active Indicative": ["γέγραφα", "γέγραφας", "γέγραφε(ν)", "γεγράφαμεν", "γεγράφατε", "γέγραφασι(ν)"],
      "Perfect Middle/Passive Indicative": ["γέγραμμαι", "γέγραψαι", "γέγραπται", "γεγράμμεθα", "γέγραφθε", "γεγραμμένοι εἰσίν"],
      "2nd Aorist Passive Indicative": ["ἐγράφην", "ἐγράφης", "ἐγράφη", "ἐγράφημεν", "ἐγράφητε", "ἐγράφησαν"],
      "Aorist Active Indicative": ["ἔγραψα", "ἔγραψας", "ἔγραψε(ν)", "ἐγράψαμεν", "ἐγράψατε", "ἔγραψαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["γράφω", "γράφῃς", "γράφῃ", "γράφωμεν", "γράφητε", "γράφωσιν"],
      "Present Middle/Passive Subjunctive": ["γράφωμαι", "γράφῃ", "γράφηται", "γράφώμεθα", "γράφησθε", "γράφωνται"],
      "Aorist Active Subjunctive": ["γράψω", "γράψῃς", "γράψῃ", "γράψωμεν", "γράψητε", "γράψωσιν"],
      "Aorist Middle Subjunctive": ["γράψωμαι", "γράψῃ", "γράψηται", "γράψώμεθα", "γράψησθε", "γράψωνται"],
      "Aorist Passive Subjunctive": ["γραφῶ", "γραφῇς", "γραφῇ", "γραφῶμεν", "γραφῆτε", "γραφῶσιν"],
    },
    infinitives: {
      "Present Active": "γράφειν",
      "Present Middle/Passive": "γράφεσθαι",
      "1st Aorist Active": "γράψαι",
      "2nd Aorist Passive": "γραφῆναι",
      "Perfect Active": "γεγραφέναι",
      "Perfect Middle/Passive": "γεγράφθαι",
    },
    imperative: {
      "Present Active Imperative": ["γράφε", "γραφέτω", "γράφετε", "γραφέτωσαν"],
      "Present Middle/Passive Imperative": ["γράφου", "γραφέσθω", "γράφεσθε", "γραφέσθωσαν"],
      "1st Aorist Active Imperative": ["γράψον", "γραψάτω", "γράψατε", "γραψάτωσαν"],
      "2nd Aorist Passive Imperative": ["γράφητι", "γραφήτω", "γράφητε", "γραφήτωσαν"],
    },

  },
  "δοξάζω": {
    meaning: "I praise, honor, glorify",
    indicative: {
      "Present Active Indicative": ["δοξάζω", "δοξάζεις", "δοξάζει", "δοξάζομεν", "δοξάζετε", "δοξάζουσι(ν)"],
      "Present Middle/Passive Indicative": ["δοξάζομαι", "δοξάζῃ", "δοξάζεται", "δοξαζόμεθα", "δοξάζεσθε", "δοξάζονται"],
      "Future Active Indicative": ["δοξάσω", "δοξάσεις", "δοξάσει", "δοξάσομεν", "δοξάσετε", "δοξάσουσι(ν)"],
      "Imperfect Active Indicative": ["ἐδόξαζον", "ἐδόξαζες", "ἐδόξαζε(ν)", "ἐδοξάζομεν", "ἐδοξάζετε", "ἐδόξαζον"],
      "1st Aorist Active Indicative": ["ἐδόξασα", "ἐδόξασας", "ἐδόξασε(ν)", "ἐδοξάσαμεν", "ἐδοξάσατε", "ἐδόξασαν"],
      "1st Aorist Passive Indicative": ["ἐδοξάσθην", "ἐδοξάσθης", "ἐδοξάσθη", "ἐδοξάσθημεν", "ἐδοξάσθητε", "ἐδοξάσθησαν"],
      "Perfect Middle/Passive Indicative": ["δεδόξασμαι", "δεδόξασαι", "δεδόξασται", "δεδοξάσμεθα", "δεδόξασθε", "δεδόξασνται"],
      "Perfect Active Indicative": ["δεδόξακα", "δεδόξακας", "δεδόξακε(ν)", "δεδοξάκαμεν", "δεδοξάκατε", "δεδόξακασι(ν)"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["δοξάζω", "δοξάζῃς", "δοξάζῃ", "δοξάζωμεν", "δοξάζητε", "δοξάζωσιν"],
      "Present Middle/Passive Subjunctive": ["δοξάζωμαι", "δοξάζῃ", "δοξάζηται", "δοξάζώμεθα", "δοξάζησθε", "δοξάζωνται"],
      "Aorist Active Subjunctive": ["δοξάσω", "δοξάσῃς", "δοξάσῃ", "δοξάσωμεν", "δοξάσητε", "δοξάσωσιν"],
      "Aorist Middle Subjunctive": ["δοξάσωμαι", "δοξάσῃ", "δοξάσηται", "δοξάσώμεθα", "δοξάσησθε", "δοξάσωνται"],
      "Aorist Passive Subjunctive": ["δοξασθῶ", "δοξασθῇς", "δοξασθῇ", "δοξασθῶμεν", "δοξασθῆτε", "δοξασθῶσιν"],
    },
    infinitives: {
      "Present Active": "δοξάζειν",
      "1st Aorist Active": "δοξάσαι",
      "1st Aorist Passive": "δοξασθῆναι",
    },
    imperative: {
      "Present Active Imperative": ["δόξαζε", "δοξαζέτω", "δοξάζετε", "δοξαζέτωσαν"],
      "1st Aorist Active Imperative": ["δόξασον", "δοξασάτω", "δοξάσατε", "δοξασάτωσαν"],
      "1st Aorist Passive Imperative": ["δοξάσθητι", "δοξασθήτω", "δοξάσθητε", "δοξασθήτωσαν"],
    },

  },
  "κηρύσσω": {
    meaning: "I proclaim; preach",
    indicative: {
      "Present Active Indicative": ["κηρύσσω", "κηρύσσεις", "κηρύσσει", "κηρύσσομεν", "κηρύσσετε", "κηρύσσουσι(ν)"],
      "Future Active Indicative": ["κηρύξω", "κηρύξεις", "κηρύξει", "κηρύξομεν", "κηρύξετε", "κηρύξουσι(ν)"],
      "Imperfect Active Indicative": ["ἐκήρυσσον", "ἐκήρυσσες", "ἐκήρυσσε(ν)", "ἐκηρύσσομεν", "ἐκηρύσσετε", "ἐκήρυσσον"],
      "1st Aorist Active Indicative": ["ἐκήρυξα", "ἐκήρυξας", "ἐκήρυξε(ν)", "ἐκηρύξαμεν", "ἐκηρύξατε", "ἐκήρυξαν"],
      "1st Aorist Passive Indicative": ["ἐκηρύχθην", "ἐκηρύχθης", "ἐκηρύχθη", "ἐκηρύχθημεν", "ἐκηρύχθητε", "ἐκηρύχθησαν"],
      "Aorist Active Indicative": ["ἐκήρυξα", "ἐκήρυξας", "ἐκήρυξε(ν)", "ἐκηρύξαμεν", "ἐκηρύξατε", "ἐκήρυξαν"],
      "Perfect Active Indicative": ["κεκήρυχα", "κεκήρυχας", "κεκήρυχε(ν)", "κεκηρύχαμεν", "κεκηρύχατε", "κεκήρυχασι(ν)"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["κηρύσσω", "κηρύσσῃς", "κηρύσσῃ", "κηρύσσωμεν", "κηρύσσητε", "κηρύσσωσιν"],
      "Present Middle/Passive Subjunctive": ["κηρύσσωμαι", "κηρύσσῃ", "κηρύσσηται", "κηρύσσώμεθα", "κηρύσσησθε", "κηρύσσωνται"],
      "Aorist Active Subjunctive": ["κηρύξω", "κηρύξῃς", "κηρύξῃ", "κηρύξωμεν", "κηρύξητε", "κηρύξωσιν"],
      "Aorist Middle Subjunctive": ["κηρύξωμαι", "κηρύξῃ", "κηρύξηται", "κηρύξώμεθα", "κηρύξησθε", "κηρύξωνται"],
      "Aorist Passive Subjunctive": ["κηρύχῶ", "κηρύχῇς", "κηρύχῇ", "κηρύχῶμεν", "κηρύχῆτε", "κηρύχῶσιν"],
    },
    infinitives: {
      "Present Active": "κηρύσσειν",
      "1st Aorist Active": "κηρύξαι",
      "1st Aorist Passive": "κηρυχθῆναι",
    },
    imperative: {
      "Present Active Imperative": ["κήρυσσε", "κηρυσσέτω", "κηρύσσετε", "κηρυσσέτωσαν"],
      "1st Aorist Active Imperative": ["κήρυξον", "κηρυξάτω", "κηρύξατε", "κηρυξάτωσαν"],
      "1st Aorist Passive Imperative": ["κηρύχθητι", "κηρυχθήτω", "κηρύχθητε", "κηρυχθήτωσαν"],
    },

  },
  "πίνω": {
    meaning: "I drink",
    indicative: {
      "Present Active Indicative": ["πίνω", "πίνεις", "πίνει", "πίνομεν", "πίνετε", "πίνουσι(ν)"],
      "Future Middle Indicative": ["πίομαι", "πίῃ", "πίεται", "πιόμεθα", "πίεσθε", "πίονται"],
      "Imperfect Active Indicative": ["ἔπινον", "ἔπινες", "ἔπινε(ν)", "ἐπίνομεν", "ἐπίνετε", "ἔπινον"],
      "1st Aorist Passive Indicative": ["ἐπόθην", "ἐπόθης", "ἐπόθη", "ἐπόθημεν", "ἐπόθητε", "ἐπόθησαν"],
      "Perfect Active Indicative": ["πέπωκα", "πέπωκας", "πέπωκε(ν)", "πεπώκαμεν", "πεπώκατε", "πέπωκασι(ν)"],
      "2nd Aorist Active Indicative": ["ἔπιον", "ἔπιες", "ἔπιε(ν)", "ἐπίομεν", "ἐπίετε", "ἔπιον"],
      "Future Active Indicative": ["πίομαι", "πίῃ", "πίεται", "πιόμεθα", "πίεσθε", "πίονται"],
      "Aorist Active Indicative": ["ἔπιον", "ἔπιες", "ἔπιε(ν)", "ἐπίομεν", "ἐπίετε", "ἔπιον"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["πίνω", "πίνῃς", "πίνῃ", "πίνωμεν", "πίνητε", "πίνωσιν"],
      "Present Middle/Passive Subjunctive": ["πίνωμαι", "πίνῃ", "πίνηται", "πίνώμεθα", "πίνησθε", "πίνωνται"],
      "Aorist Active Subjunctive": ["πίω", "πίῃς", "πίῃ", "πίωμεν", "πίητε", "πίωσιν"],
      "Aorist Middle Subjunctive": ["πίωμαι", "πίῃ", "πίηται", "πίώμεθα", "πίησθε", "πίωνται"],
      "Aorist Passive Subjunctive": ["πόῶ", "πόῇς", "πόῇ", "πόῶμεν", "πόῆτε", "πόῶσιν"],
    },
    infinitives: {
      "Present Active": "πίνειν",
      "2nd Aorist Active": "πιεῖν",
      "Perfect Active": "πεπωκέναι",
    },
    imperative: {
      "Present Active Imperative": ["πῖνε", "πινέτω", "πίνετε", "πινέτωσαν"],
      "2nd Aorist Active Imperative": ["πίε", "πιέτω", "πίετε", "πιέτωσαν"],
    },

  },
  "ἄγω": {
    meaning: "I lead, bring, arrest",
    indicative: {
      "Present Active Indicative": ["ἄγω", "ἄγεις", "ἄγει", "ἄγομεν", "ἄγετε", "ἄγουσι(ν)"],
      "Present Middle/Passive Indicative": ["ἄγομαι", "ἄγῃ", "ἄγεται", "ἀγόμεθα", "ἄγεσθε", "ἄγονται"],
      "Future Active Indicative": ["ἄξω", "ἄξεις", "ἄξει", "ἄξομεν", "ἄξετε", "ἄξουσι(ν)"],
      "Imperfect Active Indicative": ["ἦγον", "ἦγες", "ἦγε(ν)", "ἤγομεν", "ἤγετε", "ἦγον"],
      "1st Aorist Passive Indicative": ["ἤχθην", "ἤχθης", "ἤχθη", "ἤχθημεν", "ἤχθητε", "ἤχθησαν"],
      "Perfect Active Indicative": ["ἦχα", "ἦχας", "ἦχε(ν)", "ἤχαμεν", "ἤχατε", "ἦχασι(ν)"],
      "2nd Aorist Active Indicative": ["ἤγαγον", "ἤγαγες", "ἤγαγε(ν)", "ἠγάγομεν", "ἠγάγετε", "ἤγαγον"],
      "Aorist Active Indicative": ["ἤγαγον", "ἤγαγες", "ἤγαγε(ν)", "ἠγάγομεν", "ἠγάγετε", "ἤγαγον"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἄγω", "ἄγῃς", "ἄγῃ", "ἄγωμεν", "ἄγητε", "ἄγωσιν"],
      "Present Middle/Passive Subjunctive": ["ἄγωμαι", "ἄγῃ", "ἄγηται", "ἄγώμεθα", "ἄγησθε", "ἄγωνται"],
      "Aorist Active Subjunctive": ["ἀγάγω", "ἀγάγῃς", "ἀγάγῃ", "ἀγάγωμεν", "ἀγάγητε", "ἀγάγωσιν"],
      "Aorist Middle Subjunctive": ["ἀγάγωμαι", "ἀγάγῃ", "ἀγάγηται", "ἀγάγώμεθα", "ἀγάγησθε", "ἀγάγωνται"],
      "Aorist Passive Subjunctive": ["εχῶ", "εχῇς", "εχῇ", "εχῶμεν", "εχῆτε", "εχῶσιν"],
    },
    infinitives: {
      "Present Active": "ἄγειν",
      "1st Aorist Passive": "ἀχθῆναι",
      "2nd Aorist Active": "ἀγαγεῖν",
    },
    imperative: {
      "Present Active Imperative": ["ἄγε", "ἀγέτω", "ἄγετε", "ἀγέτωσαν"],
      "2nd Aorist Active Imperative": ["ἄγαγε", "ἀγαγέτω", "ἀγάγετε", "ἀγαγέτωσαν"],
      "1st Aorist Passive Imperative": ["ἄχθητι", "ἀχθήτω", "ἄχθητε", "ἀχθήτωσαν"],
    },

  },
  "φοβέομαι": {
    meaning: "I fear",
    indicative: {
      "Present Middle/Passive Indicative": ["φοβοῦμαι", "φοβῇ", "φοβεῖται", "φοβούμεθα", "φοβεῖσθε", "φοβοῦνται"],
      "Imperfect Middle/Passive Indicative": ["ἐφοβούμην", "ἐφοβοῦ", "ἐφοβεῖτο", "ἐφοβούμεθα", "ἐφοβεῖσθε", "ἐφοβοῦντο"],
      "1st Aorist Passive Indicative": ["ἐφοβήθην", "ἐφοβήθης", "ἐφοβήθη", "ἐφοβήθημεν", "ἐφοβήθητε", "ἐφοβήθησαν"],
      "Present Indicative": ["φοβοῦμαι", "φοβῇ", "φοβεῖται", "φοβούμεθα", "φοβεῖσθε", "φοβοῦνται"],
      "Imperfect Indicative": ["ἐφοβούμην", "ἐφοβοῦ", "ἐφοβεῖτο", "ἐφοβούμεθα", "ἐφοβεῖσθε", "ἐφοβοῦντο"],
      "Future Indicative": ["φοβηθήσομαι", "φοβηθήσῃ", "φοβηθήσεται", "φοβηθησόμεθα", "φοβηθήσεσθε", "φοβηθήσονται"],
      "Aorist Indicative": ["ἐφοβήθην", "ἐφοβήθης", "ἐφοβήθη", "ἐφοβήθημεν", "ἐφοβήθητε", "ἐφοβήθησαν"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["φοβῶμαι", "φοβῇ", "φοβῆται", "φοβώμεθα", "φοβῆσθε", "φοβῶνται"],
      "Aorist Passive Subjunctive": ["φοβηθῶ", "φοβηθῇς", "φοβηθῇ", "φοβηθῶμεν", "φοβηθῆτε", "φοβηθῶσιν"],
    },
    infinitives: {
      "Present Middle/Passive": "φοβεῖσθαι",
      "1st Aorist Passive": "φοβηθῆναι",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["φοβοῦ", "φοβείσθω", "φοβεῖσθε", "φοβείσθωσαν"],
      "1st Aorist Passive Imperative": ["φοβήθητι", "φοβηθήτω", "φοβήθητε", "φοβηθήτωσαν"],
    },

  },
  "χαίρω": {
    meaning: "I rejoice",
    indicative: {
      "Present Active Indicative": ["χαίρω", "χαίρεις", "χαίρει", "χαίρομεν", "χαίρετε", "χαίρουσι(ν)"],
      "Imperfect Active Indicative": ["ἔχαιρον", "ἔχαιρες", "ἔχαιρε(ν)", "ἐχαίρομεν", "ἐχαίρετε", "ἔχαιρον"],
      "2nd Aorist Passive Indicative": ["ἐχάρην", "ἐχάρης", "ἐχάρη", "ἐχάρημεν", "ἐχάρητε", "ἐχάρησαν"],
      "Future Active Indicative": ["χαρήσομαι", "χαρήσῃ", "χαρήσεται", "χαρησόμεθα", "χαρήσεσθε", "χαρήσονται"],
      "Aorist Active Indicative": ["ἐχάρην", "ἐχάρης", "ἐχάρη", "ἐχάρημεν", "ἐχάρητε", "ἐχάρησαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["χαίρω", "χαίρῃς", "χαίρῃ", "χαίρωμεν", "χαίρητε", "χαίρωσιν"],
      "Present Middle/Passive Subjunctive": ["χαίρωμαι", "χαίρῃ", "χαίρηται", "χαίρώμεθα", "χαίρησθε", "χαίρωνται"],
      "Aorist Active Subjunctive": ["χαρῶ", "χαρῇς", "χαρῇ", "χαρῶμεν", "χαρῆτε", "χαρῶσιν"],
      "Aorist Passive Subjunctive": ["χαρῶ", "χαρῇς", "χαρῇ", "χαρῶμεν", "χαρῆτε", "χαρῶσιν"],
    },
    infinitives: {
      "Present Active": "χαίρειν",
      "2nd Aorist Passive": "χαρῆναι",
    },
    imperative: {
      "Present Active Imperative": ["χαῖρε", "χαιρέτω", "χαίρετε", "χαιρέτωσαν"],
    },

  },
  "αἰτέω": {
    meaning: "I ask; demand",
    indicative: {
      "Present Active Indicative": ["αἰτῶ", "αἰτεῖς", "αἰτεῖ", "αἰτοῦμεν", "αἰτεῖτε", "αἰτοῦσι(ν)"],
      "Present Middle/Passive Indicative": ["αἰτοῦμαι", "αἰτῇ", "αἰτεῖται", "αἰτούμεθα", "αἰτεῖσθε", "αἰτοῦνται"],
      "Future Active Indicative": ["αἰτήσω", "αἰτήσεις", "αἰτήσει", "αἰτήσομεν", "αἰτήσετε", "αἰτήσουσι(ν)"],
      "Imperfect Active Indicative": ["ᾔτουν", "ᾔτεις", "ᾔτει", "ᾐτοῦμεν", "ᾐτεῖτε", "ᾔτουν"],
      "1st Aorist Active Indicative": ["ᾔτησα", "ᾔτησας", "ᾔτησε(ν)", "ᾐτήσαμεν", "ᾐτήσατε", "ᾔτησαν"],
      "1st Aorist Middle Indicative": ["ᾐτησάμην", "ᾐτήσω", "ᾐτήσατο", "ᾐτησάμεθα", "ᾐτήσασθε", "ᾐτήσαντο"],
      "Perfect Active Indicative": ["ᾔτηκα", "ᾔτηκας", "ᾔτηκε(ν)", "ᾐτήκαμεν", "ᾐτήκατε", "ᾔτηκασι(ν)"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["αἰτῶ", "αἰτῇς", "αἰτῇ", "αἰτῶμεν", "αἰτῆτε", "αἰτῶσιν"],
      "Present Middle/Passive Subjunctive": ["αἰτῶμαι", "αἰτῇ", "αἰτῆται", "αἰτώμεθα", "αἰτῆσθε", "αἰτῶνται"],
      "Aorist Active Subjunctive": ["αἰτήσω", "αἰτήσῃς", "αἰτήσῃ", "αἰτήσωμεν", "αἰτήσητε", "αἰτήσωσιν"],
      "Aorist Middle Subjunctive": ["αἰτήσωμαι", "αἰτήσῃ", "αἰτήσηται", "αἰτήσώμεθα", "αἰτήσησθε", "αἰτήσωνται"],
      "Aorist Passive Subjunctive": ["αἰτηθῶ", "αἰτηθῇς", "αἰτηθῇ", "αἰτηθῶμεν", "αἰτηθῆτε", "αἰτηθῶσιν"],
    },
    infinitives: {
      "Present Active": "αἰτεῖν",
      "Present Middle/Passive": "αἰτεῖσθαι",
      "1st Aorist Active": "αἰτῆσαι",
      "1st Aorist Middle": "αἰτήσασθαι",
      "Perfect Active": "ᾐτηκέναι",
    },
    imperative: {
      "Present Active Imperative": ["αἴτει", "αἰτείτω", "αἰτεῖτε", "αἰτείτωσαν"],
      "Present Middle/Passive Imperative": ["αἰτοῦ", "αἰτείσθω", "αἰτεῖσθε", "αἰτείσθωσαν"],
      "1st Aorist Active Imperative": ["αἴτησον", "αἰτησάτω", "αἰτήσατε", "αἰτησάτωσαν"],
    },

  },
  "μαρτυρέω": {
    meaning: "I bear witness, testify",
    indicative: {
      "Present Active Indicative": ["μαρτυρῶ", "μαρτυρεῖς", "μαρτυρεῖ", "μαρτυροῦμεν", "μαρτυρεῖτε", "μαρτυροῦσι(ν)"],
      "Future Active Indicative": ["μαρτυρήσω", "μαρτυρήσεις", "μαρτυρήσει", "μαρτυρήσομεν", "μαρτυρήσετε", "μαρτυρήσουσι(ν)"],
      "Imperfect Active Indicative": ["ἐμαρτύρουν", "ἐμαρτύρεις", "ἐμαρτύρει", "ἐμαρτυροῦμεν", "ἐμαρτυρεῖτε", "ἐμαρτύρουν"],
      "1st Aorist Active Indicative": ["ἐμαρτύρησα", "ἐμαρτύρησας", "ἐμαρτύρησε(ν)", "ἐμαρτυρήσαμεν", "ἐμαρτυρήσατε", "ἐμαρτύρησαν"],
      "1st Aorist Passive Indicative": ["ἐμαρτυρήθην", "ἐμαρτυρήθης", "ἐμαρτυρήθη", "ἐμαρτυρήθημεν", "ἐμαρτυρήθητε", "ἐμαρτυρήθησαν"],
      "Perfect Active Indicative": ["μεμαρτύρηκα", "μεμαρτύρηκας", "μεμαρτύρηκε(ν)", "μεμαρτυρήκαμεν", "μεμαρτυρήκατε", "μεμαρτύρηκασι(ν)"],
      "Perfect Middle/Passive Indicative": ["μεμαρτύρημαι", "μεμαρτύρησαι", "μεμαρτύρηται", "μεμαρτυρήμεθα", "μεμαρτύρησθε", "μεμαρτύρηνται"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["μαρτυρῶ", "μαρτυρῇς", "μαρτυρῇ", "μαρτυρῶμεν", "μαρτυρῆτε", "μαρτυρῶσιν"],
      "Present Middle/Passive Subjunctive": ["μαρτυρῶμαι", "μαρτυρῇ", "μαρτυρῆται", "μαρτυρώμεθα", "μαρτυρῆσθε", "μαρτυρῶνται"],
      "Aorist Active Subjunctive": ["μαρτυρήσω", "μαρτυρήσῃς", "μαρτυρήσῃ", "μαρτυρήσωμεν", "μαρτυρήσητε", "μαρτυρήσωσιν"],
      "Aorist Middle Subjunctive": ["μαρτυρήσωμαι", "μαρτυρήσῃ", "μαρτυρήσηται", "μαρτυρήσώμεθα", "μαρτυρήσησθε", "μαρτυρήσωνται"],
      "Aorist Passive Subjunctive": ["μαρτυρήῶ", "μαρτυρήῇς", "μαρτυρήῇ", "μαρτυρήῶμεν", "μαρτυρήῆτε", "μαρτυρήῶσιν"],
    },
    infinitives: {
      "Present Active": "μαρτυρεῖν",
      "1st Aorist Active": "μαρτυρῆσαι",
      "Perfect Active": "μεμαρτυρηκέναι",
    },
    imperative: {
      "Present Active Imperative": ["μαρτύρει", "μαρτυρείτω", "μαρτυρεῖτε", "μαρτυρείτωσαν"],
      "1st Aorist Active Imperative": ["μαρτύρησον", "μαρτυρησάτω", "μαρτυρήσατε", "μαρτυρησάτωσαν"],
    },

  },
  "ἀναβαίνω": {
    meaning: "I go/come up",
    indicative: {
      "Present Active Indicative": ["ἀναβαίνω", "ἀναβαίνεις", "ἀναβαίνει", "ἀναβαίνομεν", "ἀναβαίνετε", "ἀναβαίνουσι(ν)"],
      "Future Middle Indicative": ["ἀναβήσομαι", "ἀναβήσῃ", "ἀναβήσεται", "ἀναβησόμεθα", "ἀναβήσεσθε", "ἀναβήσονται"],
      "Imperfect Active Indicative": ["ἀνέβαινον", "ἀνέβαινες", "ἀνέβαινε(ν)", "ἀνεβαίνομεν", "ἀνεβαίνετε", "ἀνέβαινον"],
      "Perfect Active Indicative": ["ἀναβέβηκα", "ἀναβέβηκας", "ἀναβέβηκε(ν)", "ἀναβεβήκαμεν", "ἀναβεβήκατε", "ἀναβεβήκασιν"],
      "2nd Aorist Active Indicative": ["ἀνέβην", "ἀνέβης", "ἀνέβη", "ἀνέβημεν", "ἀνέβητε", "ἀνέβησαν"],
      "Future Active Indicative": ["ἀναβήσομαι", "ἀναβήσῃ", "ἀναβήσεται", "ἀναβησόμεθα", "ἀναβήσεσθε", "ἀναβήσονται"],
      "Aorist Active Indicative": ["ἀνέβην", "ἀνέβης", "ἀνέβη", "ἀνέβημεν", "ἀνέβητε", "ἀνέβησαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἀναβαίνω", "ἀναβαίνῃς", "ἀναβαίνῃ", "ἀναβαίνωμεν", "ἀναβαίνητε", "ἀναβαίνωσιν"],
      "Present Middle/Passive Subjunctive": ["ἀναβαίνωμαι", "ἀναβαίνῃ", "ἀναβαίνηται", "ἀναβαίνώμεθα", "ἀναβαίνησθε", "ἀναβαίνωνται"],
      "Aorist Active Subjunctive": ["ἀναβῶ", "ἀναβῇς", "ἀναβῇ", "ἀναβῶμεν", "ἀναβῆτε", "ἀναβῶσιν"],
      "Aorist Middle Subjunctive": ["ἀναβωμαι", "ἀναβῃ", "ἀναβηται", "ἀναβώμεθα", "ἀναβησθε", "ἀναβωνται"],
    },
    infinitives: {
      "Present Active": "ἀναβαίνειν",
      "2nd Aorist Active": "ἀναβῆναι",
      "Perfect Active": "ἀναβεβηκέναι",
    },
    imperative: {
      "Present Active Imperative": ["ἀνάβαινε", "ἀναβαινέτω", "ἀναβαίνετε", "ἀναβαινέτωσαν"],
      "2nd Aorist Active Imperative": ["ἀνάβηθι", "ἀναβήτω", "ἀνάβητε", "ἀναβήτωσαν"],
    },

  },
  "καταβαίνω": {
    meaning: "I go/come down",
    indicative: {
      "Present Active Indicative": ["καταβαίνω", "καταβαίνεις", "καταβαίνει", "καταβαίνομεν", "καταβαίνετε", "καταβαίνουσιν"],
      "Future Middle Indicative": ["καταβήσομαι", "καταβήσῃ", "καταβήσεται", "καταβησόμεθα", "καταβήσεσθε", "καταβήσονται"],
      "Imperfect Active Indicative": ["κατέβαινον", "κατέβαινες", "κατέβαινε(ν)", "κατεβαίνομεν", "κατεβαίνετε", "κατέβαινον"],
      "Perfect Active Indicative": ["καταβέβηκα", "καταβέβηκας", "καταβέβηκε(ν)", "καταβεβήκαμεν", "καταβεβήκατε", "καταβεβήκασιν"],
      "2nd Aorist Active Indicative": ["κατέβην", "κατέβης", "κατέβη", "κατέβημεν", "κατέβητε", "κατέβησαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["καταβαίνω", "καταβαίνῃς", "καταβαίνῃ", "καταβαίνωμεν", "καταβαίνητε", "καταβαίνωσιν"],
      "Present Middle/Passive Subjunctive": ["καταβαίνωμαι", "καταβαίνῃ", "καταβαίνηται", "καταβαίνώμεθα", "καταβαίνησθε", "καταβαίνωνται"],
      "Aorist Active Subjunctive": ["καταβῶ", "καταβῇς", "καταβῇ", "καταβῶμεν", "καταβῆτε", "καταβῶσιν"],
      "Aorist Middle Subjunctive": ["καταβωμαι", "καταβῃ", "καταβηται", "καταβώμεθα", "καταβησθε", "καταβωνται"],
    },
    infinitives: {
      "Present Active": "καταβαίνειν",
      "2nd Aorist Active": "καταβῆναι",
      "Perfect Active": "καταβεβηκέναι",
    },
    imperative: {
      "Present Active Imperative": ["κατάβαινε", "καταβαινέτω", "καταβαίνετε", "καταβαινέτωσαν"],
      "2nd Aorist Active Imperative": ["κατάβηθι", "καταβήτω", "κατάβητε", "καταβήτωσαν"],
    },

  },
  "παρακαλέω": {
    meaning: "I call to one's side; urge, implore; comfort",
    indicative: {
      "Present Active Indicative": ["παρακαλῶ", "παρακαλεῖς", "παρακαλεῖ", "παρακαλοῦμεν", "παρακαλεῖτε", "παρακαλοῦσιν"],
      "Future Active Indicative": ["παρακαλέσω", "παρακαλέσεις", "παρακαλέσει", "παρακαλέσομεν", "παρακαλέσετε", "παρακαλέσουσιν"],
      "Imperfect Active Indicative": ["παρεκάλουν", "παρεκάλεις", "παρεκάλει", "παρεκαλοῦμεν", "παρεκαλεῖτε", "παρεκάλουν"],
      "1st Aorist Active Indicative": ["παρεκάλεσα", "παρεκάλεσας", "παρεκάλεσε(ν)", "παρεκαλέσαμεν", "παρεκαλέσατε", "παρεκάλεσαν"],
      "1st Aorist Passive Indicative": ["παρεκλήθην", "παρεκλήθης", "παρεκλήθη", "παρεκλήθημεν", "παρεκλήθητε", "παρεκλήθησαν"],
      "Perfect Active Indicative": ["παρακέκληκα", "παρακέκληκας", "παρακέκληκε(ν)", "παρακεκλήκαμεν", "παρακεκλήκατε", "παρακεκλήκασιν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["παρακαλῶ", "παρακαλῇς", "παρακαλῇ", "παρακαλῶμεν", "παρακαλῆτε", "παρακαλῶσιν"],
      "Present Middle/Passive Subjunctive": ["παρακαλῶμαι", "παρακαλῇ", "παρακαλῆται", "παρακαλώμεθα", "παρακαλῆσθε", "παρακαλῶνται"],
      "Aorist Active Subjunctive": ["παρακαλέσω", "παρακαλέσῃς", "παρακαλέσῃ", "παρακαλέσωμεν", "παρακαλέσητε", "παρακαλέσωσιν"],
      "Aorist Middle Subjunctive": ["παρακαλέσωμαι", "παρακαλέσῃ", "παρακαλέσηται", "παρακαλέσώμεθα", "παρακαλέσησθε", "παρακαλέσωνται"],
      "Aorist Passive Subjunctive": ["παρκλήῶ", "παρκλήῇς", "παρκλήῇ", "παρκλήῶμεν", "παρκλήῆτε", "παρκλήῶσιν"],
    },
    infinitives: {
      "Present Active": "παρακαλεῖν",
      "1st Aorist Active": "παρακαλέσαι",
      "1st Aorist Passive": "παρακληθῆναι",
    },
    imperative: {
      "Present Active Imperative": ["παρακάλει", "παρακαλείτω", "παρακαλεῖτε", "παρακαλείτωσαν"],
      "1st Aorist Active Imperative": ["παρακάλεσον", "παρακαλεσάτω", "παρακαλέσατε", "παρακαλεσάτωσαν"],
      "1st Aorist Passive Imperative": ["παρακλήθητι", "παρακληθήτω", "παρακλήθητε", "παρακληθήτωσαν"],
    },

  },
  "πείθω": {
    meaning: "I persuade",
    indicative: {
      "Present Active Indicative": ["πείθω", "πείθεις", "πείθει", "πείθομεν", "πείθετε", "πείθουσιν"],
      "Present Middle/Passive Indicative": ["πείθομαι", "πείθῃ", "πείθεται", "πειθόμεθα", "πείθεσθε", "πείθονται"],
      "Future Active Indicative": ["πείσω", "πείσεις", "πείσει", "πείσομεν", "πείσετε", "πείσουσιν"],
      "Imperfect Active Indicative": ["ἔπειθον", "ἔπειθες", "ἔπειθε(ν)", "ἐπείθομεν", "ἐπείθετε", "ἔπειθον"],
      "1st Aorist Active Indicative": ["ἔπεισα", "ἔπεισας", "ἔπεισε(ν)", "ἐπείσαμεν", "ἐπείσατε", "ἔπεισαν"],
      "1st Aorist Passive Indicative": ["ἐπείσθην", "ἐπείσθης", "ἐπείσθη", "ἐπείσθημεν", "ἐπείσθητε", "ἐπείσθησαν"],
      "Perfect Active Indicative": ["πέπεικα", "πέπεικας", "πέπεικε(ν)", "πεπείκαμεν", "πεπείκατε", "πεπείκασιν"],
      "Perfect Middle/Passive Indicative": ["πέποιθα", "πέποιθας", "πέποιθε(ν)", "πεποίθαμεν", "πεποίθατε", "πεποίθασιν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["πείθω", "πείθῃς", "πείθῃ", "πείθωμεν", "πείθητε", "πείθωσιν"],
      "Present Middle/Passive Subjunctive": ["πείθωμαι", "πείθῃ", "πείθηται", "πείθώμεθα", "πείθησθε", "πείθωνται"],
      "Aorist Active Subjunctive": ["πείσω", "πείσῃς", "πείσῃ", "πείσωμεν", "πείσητε", "πείσωσιν"],
      "Aorist Middle Subjunctive": ["πείσωμαι", "πείσῃ", "πείσηται", "πείσώμεθα", "πείσησθε", "πείσωνται"],
      "Aorist Passive Subjunctive": ["πείσῶ", "πείσῇς", "πείσῇ", "πείσῶμεν", "πείσῆτε", "πείσῶσιν"],
    },
    infinitives: {
      "Present Active": "πείθειν",
      "1st Aorist Active": "πεῖσαι",
      "1st Aorist Passive": "πεισθῆναι",
      "Perfect Active": "πεπεικέναι",
    },
    imperative: {
      "Present Active Imperative": ["πεῖθε", "πειθέτω", "πείθετε", "πειθέτωσαν"],
      "Present Middle/Passive Imperative": ["πείθου", "πειθέσθω", "πείθεσθε", "πειθέσθωσαν"],
      "1st Aorist Active Imperative": ["πεῖσον", "πεισάτω", "πείσατε", "πεισάτωσαν"],
      "1st Aorist Passive Imperative": ["πείσθητι", "πεισθήτω", "πείσθητε", "πεισθήτωσαν"],
    },

  },
  "ἐσθίω": {
    meaning: "I eat",
    indicative: {
      "Present Active Indicative": ["ἐσθίω", "ἐσθίεις", "ἐσθίει", "ἐσθίομεν", "ἐσθίετε", "ἐσθίουσι(ν)"],
      "Future Middle Indicative": ["φάγομαι", "φάγῃ", "φάγεται", "φαγόμεθα", "φάγεσθε", "φάγονται"],
      "Imperfect Active Indicative": ["ἤσθιον", "ἤσθιες", "ἤσθιε(ν)", "ἠσθίομεν", "ἠσθίετε", "ἤσθιον"],
      "2nd Aorist Active Indicative": ["ἔφαγον", "ἔφαγες", "ἔφαγε(ν)", "ἐφάγομεν", "ἐφάγετε", "ἔφαγον"],
      "Future Active Indicative": ["ἔδομαι", "ἔδῃ", "ἔδεται", "ἐδόμεθα", "ἔδεσθε", "ἔδονται"],
      "Aorist Active Indicative": ["ἔφαγον", "ἔφαγες", "ἔφαγε(ν)", "ἐφάγομεν", "ἐφάγετε", "ἔφαγον"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ἐσθίω", "ἐσθίῃς", "ἐσθίῃ", "ἐσθίωμεν", "ἐσθίητε", "ἐσθίωσιν"],
      "Present Middle/Passive Subjunctive": ["ἐσθίωμαι", "ἐσθίῃ", "ἐσθίηται", "ἐσθίώμεθα", "ἐσθίησθε", "ἐσθίωνται"],
      "Aorist Active Subjunctive": ["φάγω", "φάγῃς", "φάγῃ", "φάγωμεν", "φάγητε", "φάγωσιν"],
      "Aorist Middle Subjunctive": ["φάγωμαι", "φάγῃ", "φάγηται", "φάγώμεθα", "φάγησθε", "φάγωνται"],
    },
    infinitives: {
      "Present Active": "ἐσθίειν",
      "2nd Aorist Active": "φαγεῖν",
    },
    imperative: {
      "Present Active Imperative": ["ἔσθιε", "ἐσθιέτω", "ἐσθίετε", "ἐσθιέτωσαν"],
      "2nd Aorist Active Imperative": ["φάγε", "φαγέτω", "φάγετε", "φαγέτωσαν"],
    },

  },
  "πέμπω": {
    meaning: "I send",
    indicative: {
      "Present Active Indicative": ["πέμπω", "πέμπεις", "πέμπει", "πέμπομεν", "πέμπετε", "πέμπουσιν"],
      "Future Active Indicative": ["πέμψω", "πέμψεις", "πέμψει", "πέμψομεν", "πέμψετε", "πέμψουσιν"],
      "Imperfect Active Indicative": ["ἔπεμπον", "ἔπεμπες", "ἔπεμπε(ν)", "ἐπέμπομεν", "ἐπέμπετε", "ἔπεμπον"],
      "1st Aorist Active Indicative": ["ἔπεμψα", "ἔπεμψας", "ἔπεμψε(ν)", "ἐπέμψαμεν", "ἐπέμψατε", "ἔπεμψαν"],
      "1st Aorist Passive Indicative": ["ἐπέμφθην", "ἐπέμφθης", "ἐπέμφθη", "ἐπέμφθημεν", "ἐπέμφθητε", "ἐπέμφθησαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["πέμπω", "πέμπῃς", "πέμπῃ", "πέμπωμεν", "πέμπητε", "πέμπωσιν"],
      "Present Middle/Passive Subjunctive": ["πέμπωμαι", "πέμπῃ", "πέμπηται", "πέμπώμεθα", "πέμπησθε", "πέμπωνται"],
      "Aorist Active Subjunctive": ["πέμψω", "πέμψῃς", "πέμψῃ", "πέμψωμεν", "πέμψητε", "πέμψωσιν"],
      "Aorist Middle Subjunctive": ["πέμψωμαι", "πέμψῃ", "πέμψηται", "πέμψώμεθα", "πέμψησθε", "πέμψωνται"],
      "Aorist Passive Subjunctive": ["πέμφῶ", "πέμφῇς", "πέμφῇ", "πέμφῶμεν", "πέμφῆτε", "πέμφῶσιν"],
    },
    infinitives: {
      "Present Active": "πέμπειν",
      "1st Aorist Active": "πέμψαι",
      "1st Aorist Passive": "πεμφθῆναι",
    },
    imperative: {
      "Present Active Imperative": ["πέμπε", "πεμπέτω", "πέμπετε", "πεμπέτωσαν"],
      "1st Aorist Active Imperative": ["πέμψον", "πεμψάτω", "πέμψατε", "πεμψάτωσαν"],
      "1st Aorist Passive Imperative": ["πέμφθητι", "πεμφθήτω", "πέμφθητε", "πεμφθήτωσαν"],
    },

  },
  "φέρω": {
    meaning: "I carry, bear, produce",
    indicative: {
      "Present Active Indicative": ["φέρω", "φέρεις", "φέρει", "φέρομεν", "φέρετε", "φέρουσι(ν)"],
      "Present Middle/Passive Indicative": ["φέρομαι", "φέρῃ", "φέρεται", "φερόμεθα", "φέρεσθε", "φέρονται"],
      "Future Active Indicative": ["οἴσω", "οἴσεις", "οἴσει", "οἴσομεν", "οἴσετε", "οἴσουσι(ν)"],
      "Imperfect Active Indicative": ["ἔφερον", "ἔφερες", "ἔφερε(ν)", "ἐφέρομεν", "ἐφέρετε", "ἔφερον"],
      "1st Aorist Active Indicative": ["ἤνεγκα", "ἤνεγκας", "ἤνεγκε(ν)", "ἠνέγκαμεν", "ἠνέγκατε", "ἤνεγκαν"],
      "1st Aorist Passive Indicative": ["ἠνέχθην", "ἠνέχθης", "ἠνέχθη", "ἠνέχθημεν", "ἠνέχθητε", "ἠνέχθησαν"],
      "Perfect Active Indicative": ["ἐνήνοχα", "ἐνήνοχας", "ἐνήνοχε(ν)", "ἐνηνόχαμεν", "ἐνηνόχατε", "ἐνηνόχασιν"],
      "Aorist Active Indicative": ["ἤνεγκα", "ἤνεγκας", "ἤνεγκε(ν)", "ἠνέγκαμεν", "ἠνέγκατε", "ἤνεγκαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["φέρω", "φέρῃς", "φέρῃ", "φέρωμεν", "φέρητε", "φέρωσιν"],
      "Present Middle/Passive Subjunctive": ["φέρωμαι", "φέρῃ", "φέρηται", "φέρώμεθα", "φέρησθε", "φέρωνται"],
      "Aorist Active Subjunctive": ["ἐνέγκω", "ἐνέγκῃς", "ἐνέγκῃ", "ἐνέγκωμεν", "ἐνέγκητε", "ἐνέγκωσιν"],
      "Aorist Middle Subjunctive": ["ἐνέγκωμαι", "ἐνέγκῃ", "ἐνέγκηται", "ἐνέγκώμεθα", "ἐνέγκησθε", "ἐνέγκωνται"],
      "Aorist Passive Subjunctive": ["ενέχῶ", "ενέχῇς", "ενέχῇ", "ενέχῶμεν", "ενέχῆτε", "ενέχῶσιν"],
    },
    infinitives: {
      "Present Active": "φέρειν",
      "1st Aorist Active": "ἐνεγκεῖν / ἐνέγκαι",
      "1st Aorist Passive": "ἐνεχθῆναι",
      "Perfect Active": "ἐνηνοχέναι",
    },
    imperative: {
      "Present Active Imperative": ["φέρε", "φερέτω", "φέρετε", "φερέτωσαν"],
      "1st Aorist Active Imperative": ["ἔνεγκον", "ἐνεγκάτω", "ἐνέγκατε", "ἐνεγκάτωσαν"],
      "1st Aorist Passive Imperative": ["ἐνέχθητι", "ἐνεχθήτω", "ἐνέχθητε", "ἐνεχθήτωσαν"],
    },

  },
  "εὐαγγελίζω": {
    meaning: "I bring good news; preach",
    indicative: {
      "Present Active Indicative": ["εὐαγγελίζω", "εὐαγγελίζεις", "εὐαγγελίζει", "εὐαγγελίζομεν", "εὐαγγελίζετε", "εὐαγγελίζουσι(ν)"],
      "Present Middle/Passive Indicative": ["εὐαγγελίζομαι", "εὐαγγελίζῃ", "εὐαγγελίζεται", "εὐαγγελιζόμεθα", "εὐαγγελίζεσθε", "εὐαγγελίζονται"],
      "Future Middle Indicative": ["εὐαγγελίσομαι", "εὐαγγελίσῃ", "εὐαγγελίσεται", "εὐαγγελισόμεθα", "εὐαγγελίσεσθε", "εὐαγγελίσονται"],
      "Imperfect Middle/Passive Indicative": ["εὐηγγελιζόμην", "εὐηγγελίζου", "εὐηγγελίζετο", "εὐηγγελιζόμεθα", "εὐηγγελίζεσθε", "εὐηγγελίζοντο"],
      "1st Aorist Middle Indicative": ["εὐηγγελισάμην", "εὐηγγελίσω", "εὐηγγελίσατο", "εὐηγγελισάμεθα", "εὐηγγελίσασθε", "εὐηγγελίσαντο"],
      "1st Aorist Passive Indicative": ["εὐηγγελίσθην", "εὐηγγελίσθης", "εὐηγγελίσθη", "εὐηγγελίσθημεν", "εὐηγγελίσθητε", "εὐηγγελίσθησαν"],
      "Imperfect Active Indicative": ["εὐηγγέλιζον", "εὐηγγέλιζες", "εὐηγγέλιζε(ν)", "εὐηγγελίζομεν", "εὐηγγελίζετε", "εὐηγγέλιζον"],
      "Future Active Indicative": ["εὐαγγελιῶ", "εὐαγγελιεῖς", "εὐαγγελιεῖ", "εὐαγγελιοῦμεν", "εὐαγγελιεῖτε", "εὐαγγελιοῦσι(ν)"],
      "1st Aorist Active Indicative": ["εὐηγγέλισα", "εὐηγγέλισας", "εὐηγγέλισε(ν)", "εὐηγγελίσαμεν", "εὐηγγελίσατε", "εὐηγγέλισαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["εὐαγγελίζω", "εὐαγγελίζῃς", "εὐαγγελίζῃ", "εὐαγγελίζωμεν", "εὐαγγελίζητε", "εὐαγγελίζωσιν"],
      "Present Middle/Passive Subjunctive": ["εὐαγγελίζωμαι", "εὐαγγελίζῃ", "εὐαγγελίζηται", "εὐαγγελιζώμεθα", "εὐαγγελίζησθε", "εὐαγγελίζωνται"],
      "Aorist Active Subjunctive": ["εὐαγγελίσω", "εὐαγγελίσῃς", "εὐαγγελίσῃ", "εὐαγγελίσωμεν", "εὐαγγελίσητε", "εὐαγγελίσωσιν"],
      "Aorist Middle Subjunctive": ["εὐαγγελίσωμαι", "εὐαγγελίσῃ", "εὐαγγελίσηται", "εὐαγγελισώμεθα", "εὐαγγελίσησθε", "εὐαγγελίσωνται"],
      "Aorist Passive Subjunctive": ["ὐηγγελίσῶ", "ὐηγγελίσῇς", "ὐηγγελίσῇ", "ὐηγγελίσῶμεν", "ὐηγγελίσῆτε", "ὐηγγελίσῶσιν"],
    },
    infinitives: {
      "Present Middle/Passive": "εὐαγγελίζεσθαι",
      "1st Aorist Middle": "εὐαγγελίσασθαι",
      "1st Aorist Passive": "εὐαγγελισθῆναι",
    },
    imperative: {
      "Present Active Imperative": ["εὐαγγέλιζε", "εὐαγγελιζέτω", "εὐαγγελίζετε", "εὐαγγελιζέτωσαν"],
      "Present Middle/Passive Imperative": ["εὐαγγελίζου", "εὐαγγελιζέσθω", "εὐαγγελίζεσθε", "εὐαγγελιζέσθωσαν"],
      "1st Aorist Middle Imperative": ["εὐαγγέλισαι", "εὐαγγελισάσθω", "εὐαγγελίσασθε", "εὐαγγελισάσθωσαν"],
    },

  },
  "θεωρέω": {
    meaning: "I look at; perceive",
    indicative: {
      "Present Active Indicative": ["θεωρῶ", "θεωρεῖς", "θεωρεῖ", "θεωροῦμεν", "θεωρεῖτε", "θεωροῦσι(ν)"],
      "Future Active Indicative": ["θεωρήσω", "θεωρήσεις", "θεωρήσει", "θεωρήσομεν", "θεωρήσετε", "θεωρήσουσι(ν)"],
      "Imperfect Active Indicative": ["ἐθεώρουν", "ἐθεώρεις", "ἐθεώρει", "ἐθεωροῦμεν", "ἐθεωρεῖτε", "ἐθεώρουν"],
      "1st Aorist Active Indicative": ["ἐθεώρησα", "ἐθεώρησας", "ἐθεώρησε(ν)", "ἐθεωρήσαμεν", "ἐθεωρήσατε", "ἐθεώρησαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["θεωρῶ", "θεωρῇς", "θεωρῇ", "θεωρῶμεν", "θεωρῆτε", "θεωρῶσιν"],
      "Present Middle/Passive Subjunctive": ["θεωρῶμαι", "θεωρῇ", "θεωρῆται", "θεωρώμεθα", "θεωρῆσθε", "θεωρῶνται"],
      "Aorist Active Subjunctive": ["ἐθεώρησω", "ἐθεώρησῃς", "ἐθεώρησῃ", "ἐθεώρησωμεν", "ἐθεώρησητε", "ἐθεώρησωσιν"],
      "Aorist Middle Subjunctive": ["ἐθεώρησωμαι", "ἐθεώρησῃ", "ἐθεώρησηται", "ἐθεώρησώμεθα", "ἐθεώρησησθε", "ἐθεώρησωνται"],
      "Aorist Passive Subjunctive": ["θεωρηθῶ", "θεωρηθῇς", "θεωρηθῇ", "θεωρηθῶμεν", "θεωρηθῆτε", "θεωρηθῶσιν"],
    },
    infinitives: {
      "Present Active": "θεωρεῖν",
      "1st Aorist Active": "θεωρῆσαι",
    },
    imperative: {
      "Present Active Imperative": ["θεώρει", "θεωρείτω", "θεωρεῖτε", "θεωρείτωσαν"],
      "1st Aorist Active Imperative": ["θεώρησον", "θεωρησάτω", "θεωρήσατε", "θεωρησάτωσαν"],
    },

  },
  "κάθημαι": {
    meaning: "I sit (down); live",
    indicative: {
      "Present Middle/Passive Indicative": ["κάθημαι", "κάθῃ", "κάθηται", "καθήμεθα", "κάθησθε", "κάθηνται"],
      "Future Middle Indicative": ["καθήσομαι", "καθήσῃ", "καθήσεται", "καθησόμεθα", "καθήσεσθε", "καθήσονται"],
      "Imperfect Middle/Passive Indicative": ["ἐκαθήμην", "ἐκάθου", "ἐκάθητο", "ἐκαθήμεθα", "ἐκάθησθε", "ἐκάθηντο"],
      "Present Indicative": ["κάθημαι", "κάθησαι", "κάθηται", "καθήμεθα", "κάθησθε", "κάθηνται"],
      "Imperfect Indicative": ["ἐκαθήμην", "ἐκάθησο", "ἐκάθητο", "ἐκαθήμεθα", "ἐκάθησθε", "ἐκάθηντο"],
      "Future Indicative": ["καθήσομαι", "καθήσῃ", "καθήσεται", "καθησόμεθα", "καθήσεσθε", "καθήσονται"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["καθῶμαι", "καθῇ", "καθῆται", "καθώμεθα", "καθῆσθε", "καθῶνται"],
    },
    infinitives: {
      "Present Middle/Passive": "καθῆσθαι",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["κάθου", "καθήσθω", "κάθησθε", "καθήσθωσαν"],
    },

  },
  "μέλλω": {
    meaning: "I am about to",
    indicative: {
      "Present Active Indicative": ["μέλλω", "μέλλεις", "μέλλει", "μέλλομεν", "μέλλετε", "μέλλουσιν"],
      "Future Active Indicative": ["μελλήσω", "μελλήσεις", "μελλήσει", "μελλήσομεν", "μελλήσετε", "μελλήσουσιν"],
      "Imperfect Active Indicative": ["ἤμελλον", "ἤμελλες", "ἤμελλε(ν)", "ἠμέλλομεν", "ἠμέλλετε", "ἤμελλον"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["μέλλω", "μέλλῃς", "μέλλῃ", "μέλλωμεν", "μέλλητε", "μέλλωσιν"],
      "Present Middle/Passive Subjunctive": ["μέλλωμαι", "μέλλῃ", "μέλληται", "μέλλώμεθα", "μέλλησθε", "μέλλωνται"],
    },
    infinitives: {
      "Present Active": "μέλλειν",
    },
    imperative: {
      "Present Active Imperative": ["μέλλε", "μελλέτω", "μέλλετε", "μελλέτωσαν"],
    },

  },
  "οἶδα": {
    meaning: "I know, understand",
    indicative: {
      "Future Active Indicative": ["εἴσομαι", "εἴσῃ", "εἴσεται", "εἰσόμεθα", "εἴσεσθε", "εἴσονται"],
      "Imperfect Active Indicative": ["ᾔδειν", "ᾔδεις", "ᾔδει", "ᾔδειμεν", "ᾔδειτε", "ᾔδεισαν"],
      "Perfect Active Indicative": ["οἶδα", "οἶδας", "οἶδε(ν)", "οἴδαμεν", "οἴδατε", "οἴδασιν"],
      "Present Meaning": ["οἶδα", "οἶδας", "οἶδε(ν)", "οἴδαμεν", "οἴδατε", "οἴδασι(ν)"],
      "Past Meaning": ["ᾔδειν", "ᾔδεις", "ᾔδει", "ᾔδειμεν", "ᾔδειτε", "ᾔδεισαν"],
      "Future Indicative": ["εἴσομαι", "εἴσῃ", "εἴσεται", "εἰσόμεθα", "εἴσεσθε", "εἴσονται"],
      "Imperative": ["ἴσθι", "—", "—", "—", "ἴστε", "—"],
      "Infinitive": ["εἰδέναι"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["εἰδῶ", "εἰδῇς", "εἰδῇ", "εἰδῶμεν", "εἰδῆτε", "εἰδῶσιν"],
      "Aorist Active Subjunctive": ["εἰδῶ", "εἰδῇς", "εἰδῇ", "εἰδῶμεν", "εἰδῆτε", "εἰδῶσιν"],
    },
    infinitives: {
      "Perfect Active": "εἰδέναι",
    },
      imperative: {
        "Present Active Imperative": ["ἴσθι", "ἔστω", "ἴστε", "ἔστωσαν"],
      },
  },
  "ἀσπάζομαι": {
    meaning: "I greet, salute",
    indicative: {
      "Present Middle/Passive Indicative": ["ἀσπάζομαι", "ἀσπάζῃ", "ἀσπάζεται", "ἀσπαζόμεθα", "ἀσπάζεσθε", "ἀσπάζονται"],
      "Future Middle Indicative": ["ἀσπάσομαι", "ἀσπάσῃ", "ἀσπάσεται", "ἀσπασόμεθα", "ἀσπάσεσθε", "ἀσπάσονται"],
      "Imperfect Middle/Passive Indicative": ["ἠσπαζόμην", "ἠσπάζου", "ἠσπάζετο", "ἠσπαζόμεθα", "ἠσπάζεσθε", "ἠσπάζοντο"],
      "1st Aorist Middle Indicative": ["ἠσπασάμην", "ἠσπάσω", "ἠσπάσατο", "ἠσπασάμεθα", "ἠσπάσασθε", "ἠσπάσαντο"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["ἀσπάζωμαι", "ἀσπάζῃ", "ἀσπάζηται", "ἀσπαζώμεθα", "ἀσπάζησθε", "ἀσπάζωνται"],
      "Aorist Middle Subjunctive": ["ἀσπάσωμαι", "ἀσπάσῃ", "ἀσπάσηται", "ἀσπασώμεθα", "ἀσπάσησθε", "ἀσπάσωνται"],
    },
    infinitives: {
      "Present Middle/Passive": "ἀσπάζεσθαι",
      "1st Aorist Middle": "ἀσπάσασθαι",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["ἀσπάζου", "ἀσπαζέσθω", "ἀσπάζεσθε", "ἀσπαζέσθωσαν"],
      "1st Aorist Middle Imperative": ["ἄσπασαι", "ἀσπασάσθω", "ἀσπάσασθε", "ἀσπασάσθωσαν"],
    },

  },
  "κράζω": {
    meaning: "I cry out, call out",
    indicative: {
      "Present Active Indicative": ["κράζω", "κράζεις", "κράζει", "κράζομεν", "κράζετε", "κράζουσιν"],
      "Future Active Indicative": ["κράξω", "κράξεις", "κράξει", "κράξομεν", "κράξετε", "κράξουσιν"],
      "Imperfect Active Indicative": ["ἔκραζον", "ἔκραζες", "ἔκραζε(ν)", "ἐκράζομεν", "ἐκράζετε", "ἔκραζον"],
      "1st Aorist Active Indicative": ["ἔκραξα", "ἔκραξας", "ἔκραξε(ν)", "ἐκράξαμεν", "ἐκράξατε", "ἔκραξαν"],
      "Perfect Active Indicative": ["κέκραγα", "κέκραγας", "κέκραγε(ν)", "κεκράγαμεν", "κεκράγατε", "κεκράγασιν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["κράζω", "κράζῃς", "κράζῃ", "κράζωμεν", "κράζητε", "κράζωσιν"],
      "Present Middle/Passive Subjunctive": ["κράζωμαι", "κράζῃ", "κράζηται", "κράζώμεθα", "κράζησθε", "κράζωνται"],
      "Aorist Active Subjunctive": ["κράξω", "κράξῃς", "κράξῃ", "κράξωμεν", "κράξητε", "κράξωσιν"],
      "Aorist Middle Subjunctive": ["κράξωμαι", "κράξῃ", "κράξηται", "κράξώμεθα", "κράξησθε", "κράξωνται"],
    },
    infinitives: {
      "Present Active": "κράζειν",
      "1st Aorist Active": "κράξαι",
      "Perfect Active": "κεκραγέναι",
    },
    imperative: {
      "Present Active Imperative": ["κράζε", "κραζέτω", "κράζετε", "κραζέτωσαν"],
      "1st Aorist Active Imperative": ["κράξον", "κραξάτω", "κράξατε", "κραξάτωσαν"],
    },

  },
  "δέχομαι": {
    meaning: "I take/receive",
    indicative: {
      "Present Middle/Passive Indicative": ["δέχομαι", "δέχῃ", "δέχεται", "δεχόμεθα", "δέχεσθε", "δέχονται"],
      "Future Middle Indicative": ["δέξομαι", "δέξῃ", "δέξεται", "δεξόμεθα", "δέξεσθε", "δέξονται"],
      "Imperfect Middle/Passive Indicative": ["ἐδεχόμην", "ἐδέχου", "ἐδέχετο", "ἐδεχόμεθα", "ἐδέχεσθε", "ἐδέχοντο"],
      "1st Aorist Middle Indicative": ["ἐδεξάμην", "ἐδέξω", "ἐδέξατο", "ἐδεξάμεθα", "ἐδέξασθε", "ἐδέξαντο"],
      "Perfect Middle/Passive Indicative": ["δέδεγμαι", "δέδεξαι", "δέδεκται", "δεδέγμεθα", "δέδεχθε", "δέδεχνται"],
    },
    subjunctive: {
      "Present Middle/Passive Subjunctive": ["δέχωμαι", "δέχῃ", "δέχηται", "δεχώμεθα", "δέχησθε", "δέχωνται"],
      "Aorist Middle Subjunctive": ["δέξωμαι", "δέξῃ", "δέξηται", "δεξώμεθα", "δέξησθε", "δέξωνται"],
    },
    infinitives: {
      "Present Middle/Passive": "δέχεσθαι",
      "1st Aorist Middle": "δέξασθαι",
    },
    imperative: {
      "Present Middle/Passive Imperative": ["δέχου", "δεχέσθω", "δέχεσθε", "δεχέσθωσαν"],
      "1st Aorist Middle Imperative": ["δέξαι", "δεξάσθω", "δέξασθε", "δεξάσθωσαν"],
    },

  },
  "δοκέω": {
    meaning: "I think/seem",
    indicative: {
      "Present Active Indicative": ["δοκῶ", "δοκεῖς", "δοκεῖ", "δοκοῦμεν", "δοκεῖτε", "δοκοῦσιν"],
      "Future Active Indicative": ["δόξω", "δόξεις", "δόξει", "δόξομεν", "δόξετε", "δόξουσιν"],
      "Imperfect Active Indicative": ["ἐδόκουν", "ἐδόκεις", "ἐδόκει", "ἐδοκοῦμεν", "ἐδοκεῖτε", "ἐδόκουν"],
      "1st Aorist Active Indicative": ["ἔδοξα", "ἔδοξας", "ἔδοξε(ν)", "ἐδόξαμεν", "ἐδόξατε", "ἔδοξαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["δοκῶ", "δοκῇς", "δοκῇ", "δοκῶμεν", "δοκῆτε", "δοκῶσιν"],
      "Present Middle/Passive Subjunctive": ["δοκῶμαι", "δοκῇ", "δοκῆται", "δοκώμεθα", "δοκῆσθε", "δοκῶνται"],
      "Aorist Active Subjunctive": ["δοξω", "δοξῃς", "δοξῃ", "δοξωμεν", "δοξητε", "δοξωσιν"],
      "Aorist Middle Subjunctive": ["δοξωμαι", "δοξῃ", "δοξηται", "δοξώμεθα", "δοξησθε", "δοξωνται"],
    },
    infinitives: {
      "Present Active": "δοκεῖν",
      "1st Aorist Active": "δόξαι",
    },
    imperative: {
      "Present Active Imperative": ["δόκει", "δοκείτω", "δοκεῖτε", "δοκείτωσαν"],
    },

  },
  "σπείρω": {
    meaning: "I sow",
    indicative: {
      "Present Active Indicative": ["σπείρω", "σπείρεις", "σπείρει", "σπείρομεν", "σπείρετε", "σπείρουσιν"],
      "Future Active Indicative": ["σπερῶ", "σπερεῖς", "σπερεῖ", "σπεροῦμεν", "σπερεῖτε", "σπεροῦσιν"],
      "Imperfect Active Indicative": ["ἔσπειρον", "ἔσπειρες", "ἔσπειρε(ν)", "ἐσπείρομεν", "ἐσπείρετε", "ἔσπειρον"],
      "1st Aorist Active Indicative": ["ἔσπειρα", "ἔσπειρας", "ἔσπειρε(ν)", "ἐσπείραμεν", "ἐσπείρατε", "ἔσπειραν"],
      "Perfect Middle/Passive Indicative": ["ἔσπαρμαι", "ἔσπαρσαι", "ἔσπαρται", "ἐσπάρμεθα", "ἔσπαρσθε", "ἔσπαρνται"],
      "2nd Aorist Passive Indicative": ["ἐσπάρην", "ἐσπάρης", "ἐσπάρη", "ἐσπάρημεν", "ἐσπάρητε", "ἐσπάρησαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["σπείρω", "σπείρῃς", "σπείρῃ", "σπείρωμεν", "σπείρητε", "σπείρωσιν"],
      "Present Middle/Passive Subjunctive": ["σπείρωμαι", "σπείρῃ", "σπείρηται", "σπείρώμεθα", "σπείρησθε", "σπείρωνται"],
      "Aorist Active Subjunctive": ["σπειρω", "σπειρῃς", "σπειρῃ", "σπειρωμεν", "σπειρητε", "σπειρωσιν"],
      "Aorist Middle Subjunctive": ["σπειρωμαι", "σπειρῃ", "σπειρηται", "σπειρώμεθα", "σπειρησθε", "σπειρωνται"],
      "Aorist Passive Subjunctive": ["σπάρῶ", "σπάρῇς", "σπάρῇ", "σπάρῶμεν", "σπάρῆτε", "σπάρῶσιν"],
    },
    infinitives: {
      "Present Active": "σπείρειν",
      "1st Aorist Active": "σπεῖραι",
      "2nd Aorist Passive": "σπαρῆναι",
    },
    imperative: {
      "Present Active Imperative": ["σπεῖρε", "σπειρέτω", "σπείρετε", "σπειρέτωσαν"],
      "1st Aorist Active Imperative": ["σπεῖρον", "σπειράτω", "σπείρατε", "σπειράτωσαν"],
      "2nd Aorist Passive Imperative": ["σπάρηθι", "σπαρήτω", "σπάρητε", "σπαρήτωσαν"],
    },

  },
  "ὑπάγω": {
    meaning: "I depart",
    indicative: {
      "Present Active Indicative": ["ὑπάγω", "ὑπάγεις", "ὑπάγει", "ὑπάγομεν", "ὑπάγετε", "ὑπάγουσι(ν)"],
      "Imperfect Active Indicative": ["ὑπῆγον", "ὑπῆγες", "ὑπῆγε(ν)", "ὑπήγομεν", "ὑπήγετε", "ὑπῆγον"],
      "Future Active Indicative": ["ὑπάξω", "ὑπάξεις", "ὑπάξει", "ὑπάξομεν", "ὑπάξετε", "ὑπάξουσι(ν)"],
      "Aorist Active Indicative": ["ὑπῆξα", "ὑπῆξας", "ὑπῆξε(ν)", "ὑπήξαμεν", "ὑπήξατε", "ὑπῆξαν"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["ὑπάγω", "ὑπάγῃς", "ὑπάγῃ", "ὑπάγωμεν", "ὑπάγητε", "ὑπάγωσιν"],
      "Present Middle/Passive Subjunctive": ["ὑπάγωμαι", "ὑπάγῃ", "ὑπάγηται", "ὑπάγώμεθα", "ὑπάγησθε", "ὑπάγωνται"],
    },
    infinitives: {
      "Present Active": "ὑπάγειν",
    },
    imperative: {
      "Present Active Imperative": ["ὕπαγε", "ὑπαγέτω", "ὑπάγετε", "ὑπαγέτωσαν"],
    },

  },
  "συνάγω": {
    meaning: "I gather together, bring together; lead",
    indicative: {
      "Present Active Indicative": ["συνάγω", "συνάγεις", "συνάγει", "συνάγομεν", "συνάγετε", "συνάγουσι(ν)"],
      "Present Middle/Passive Indicative": ["συνάγομαι", "συνάγῃ", "συνάγεται", "συναγόμεθα", "συνάγεσθε", "συνάγονται"],
      "Future Active Indicative": ["συνάξω", "συνάξεις", "συνάξει", "συνάξομεν", "συνάξετε", "συνάξουσι(ν)"],
      "Imperfect Active Indicative": ["συνῆγον", "συνῆγες", "συνῆγε(ν)", "συνήγομεν", "συνήγετε", "συνῆγον"],
      "1st Aorist Passive Indicative": ["συνήχθην", "συνήχθης", "συνήχθη", "συνήχθημεν", "συνήχθητε", "συνήχθησαν"],
      "2nd Aorist Active Indicative": ["συνήγαγον", "συνήγαγες", "συνήγαγε(ν)", "συνηγάγομεν", "συνηγάγετε", "συνήγαγον"],
      "Imperfect Middle/Passive Indicative": ["συνηγόμην", "συνῆγου", "συνῆγετο", "συνηγόμεθα", "συνῆγεσθε", "συνῆγοντο"],
      "Aorist Active Indicative": ["συνήγαγον", "συνήγαγες", "συνήγαγε(ν)", "συνηγάγομεν", "συνηγάγετε", "συνήγαγον"],
      "Perfect Active Indicative": ["συνῆχα", "συνῆχας", "συνῆχε(ν)", "συνήχαμεν", "συνήχατε", "συνῆχασι(ν)"],
    },
    subjunctive: {
      "Present Active Subjunctive": ["συνάγω", "συνάγῃς", "συνάγῃ", "συνάγωμεν", "συνάγητε", "συνάγωσιν"],
      "Present Middle/Passive Subjunctive": ["συνάγωμαι", "συνάγῃ", "συνάγηται", "συνάγώμεθα", "συνάγησθε", "συνάγωνται"],
      "Aorist Active Subjunctive": ["συναγάγω", "συναγάγῃς", "συναγάγῃ", "συναγάγωμεν", "συναγάγητε", "συναγάγωσιν"],
      "Aorist Middle Subjunctive": ["συναγάγωμαι", "συναγάγῃ", "συναγάγηται", "συναγάγώμεθα", "συναγάγησθε", "συναγάγωνται"],
      "Aorist Passive Subjunctive": ["συνχῶ", "συνχῇς", "συνχῇ", "συνχῶμεν", "συνχῆτε", "συνχῶσιν"],
    },
    infinitives: {
      "Present Active": "συνάγειν",
      "1st Aorist Passive": "συναχθῆναι",
      "2nd Aorist Active": "συναγαγεῖν",
    },
    imperative: {
      "Present Active Imperative": ["σύναγε", "συναγέτω", "συνάγετε", "συναγέτωσαν"],
      "2nd Aorist Active Imperative": ["συνάγαγε", "συναγαγέτω", "συναγάγετε", "συναγαγέτωσαν"],
      "1st Aorist Passive Imperative": ["συνάχθητι", "συναχθήτω", "συνάχθητε", "συναχθήτωσαν"],
    },

  },
  "δίδωμι": {
    meaning: "I give",
    indicative: {
      "Present Active Indicative": ["δίδωμι", "δίδως", "δίδωσι(ν)", "δίδομεν", "δίδοτε", "διδόασι(ν)"],
      "Imperfect Active Indicative": ["ἐδίδουν", "ἐδίδους", "ἐδίδου", "ἐδίδομεν", "ἐδίδοτε", "ἐδίδουν"],
      "Future Active Indicative": ["δώσω", "δώσεις", "δώσει", "δώσομεν", "δώσετε", "δώσουσι(ν)"],
      "Aorist Active Indicative": ["ἔδωκα", "ἔδωκας", "ἔδωκε(ν)", "ἔδομεν", "ἔδοτε", "ἔδοσαν"],
      "Perfect Active Indicative": ["δέδωκα", "δέδωκας", "δέδωκε(ν)", "δεδώκαμεν", "δεδώκατε", "δεδώκασι(ν)"],
    },

    imperative: {
      "Present Active Imperative": ["δίδου", "διδότω", "δίδοτε", "διδότωσαν"],
      "2nd Aorist Active Imperative": ["δός", "δότω", "δότε", "δότωσαν"],
    },
  },
  "συνέρχομαι": {
    meaning: "I come together / assemble",
    note: "deponent",
    indicative: {
      "Present Indicative": ["συνέρχομαι", "συνέρχῃ", "συνέρχεται", "συνερχόμεθα", "συνέρχεσθε", "συνέρχονται"],
      "Imperfect Indicative": ["συνηρχόμην", "συνήρχου", "συνήρχετο", "συνηρχόμεθα", "συνήρχεσθε", "συνήρχοντο"],
      "Future Indicative": ["συνελεύσομαι", "συνελεύσῃ", "συνελεύσεται", "συνελευσόμεθα", "συνελεύσεσθε", "συνελεύσονται"],
      "Aorist Indicative": ["συνῆλθον", "συνῆλθες", "συνῆλθε(ν)", "συνῆλθομεν", "συνῆλθετε", "συνῆλθον"],
      "Perfect Indicative": ["συνελήλυθα", "συνελήλυθας", "συνελήλυθε(ν)", "συνεληλύθαμεν", "συνεληλύθατε", "συνελήλυθασι(ν)"],
    },

    imperative: {
      "Present Middle/Passive Imperative": ["συνέρχου", "συνερχέσθω", "συνέρχεσθε", "συνερχέσθωσαν"],
      "2nd Aorist Active Imperative": ["σύνελθε", "συνελθέτω", "συνέλθετε", "συνελθέτωσαν"],
    },
  },
  "υἱοθετέω": {
    meaning: "I adopt",
    note: "ε-contract",
    indicative: {
      "Present Active Indicative": ["υἱοθετῶ", "υἱοθετεῖς", "υἱοθετεῖ", "υἱοθετοῦμεν", "υἱοθετεῖτε", "υἱοθετοῦσι(ν)"],
      "Imperfect Active Indicative": ["υἱοθέτουν", "υἱοθέτεις", "υἱοθέτει", "υἱοθετοῦμεν", "υἱοθετεῖτε", "υἱοθέτουν"],
      "Future Active Indicative": ["υἱοθετήσω", "υἱοθετήσεις", "υἱοθετήσει", "υἱοθετήσομεν", "υἱοθετήσετε", "υἱοθετήσουσι(ν)"],
      "1st Aorist Active Indicative": ["υἱοθέτησα", "υἱοθέτησας", "υἱοθέτησε(ν)", "υἱοθετήσαμεν", "υἱοθετήσατε", "υἱοθέτησαν"],
    },
    imperative: {
      "Present Active Imperative": ["υἱοθέτει", "υἱοθετείτω", "υἱοθετεῖτε", "υἱοθετείτωσαν"],
      "1st Aorist Active Imperative": ["υἱοθέτησον", "υἱοθετησάτω", "υἱοθετήσατε", "υἱοθετησάτωσαν"],
    },
  },
  "φίλεω": {
    meaning: "I love",
    note: "ε-contract",
    indicative: {
      "Present Active Indicative": ["φιλῶ", "φιλεῖς", "φιλεῖ", "φιλοῦμεν", "φιλεῖτε", "φιλοῦσι(ν)"],
      "Imperfect Active Indicative": ["ἐφίλουν", "ἐφίλεις", "ἐφίλει", "ἐφιλοῦμεν", "ἐφιλεῖτε", "ἐφίλουν"],
      "Future Active Indicative": ["φιλήσω", "φιλήσεις", "φιλήσει", "φιλήσομεν", "φιλήσετε", "φιλήσουσι(ν)"],
      "1st Aorist Active Indicative": ["ἐφίλησα", "ἐφίλησας", "ἐφίλησε(ν)", "ἐφιλήσαμεν", "ἐφιλήσατε", "ἐφίλησαν"],
      "Perfect Active Indicative": ["πεφίληκα", "πεφίληκας", "πεφίληκε(ν)", "πεφιλήκαμεν", "πεφιλήκατε", "πεφίληκασι(ν)"],
    },
    imperative: {
      "Present Active Imperative": ["φίλει", "φιλείτω", "φιλεῖτε", "φιλείτωσαν"],
      "1st Aorist Active Imperative": ["φίλησον", "φιλησάτω", "φιλήσατε", "φιλησάτωσαν"],
    },
  },
  "φαίνω": {
    meaning: "I show / appear",
    indicative: {
      "Present Active Indicative": ["φαίνω", "φαίνεις", "φαίνει", "φαίνομεν", "φαίνετε", "φαίνουσι(ν)"],
      "Imperfect Active Indicative": ["ἔφαινον", "ἔφαινεις", "ἔφαινε(ν)", "ἐφαίνομεν", "ἐφαίνετε", "ἔφαινον"],
      "Future Active Indicative": ["φανῶ", "φανεῖς", "φανεῖ", "φανοῦμεν", "φανεῖτε", "φανοῦσι(ν)"],
      "Aorist Active Indicative": ["ἔφηνα", "ἔφηνας", "ἔφηνε(ν)", "ἐφήναμεν", "ἐφήνατε", "ἔφηναν"],
      "Perfect Active Indicative": ["πέφαγκα", "πέφαγκας", "πέφαγκε(ν)", "πεφάγκαμεν", "πεφάγκατε", "πέφαγκασι(ν)"],
    },
    imperative: {
      "Present Active Imperative": ["φαῖνε", "φαινέτω", "φαίνετε", "φαινέτωσαν"],
      "1st Aorist Active Imperative": ["φῆνον", "φηνάτω", "φήνατε", "φηνάτωσαν"],
    },
  },
  "φεύγω": {
    meaning: "I flee",
    indicative: {
      "Present Active Indicative": ["φεύγω", "φεύγεις", "φεύγει", "φεύγομεν", "φεύγετε", "φεύγουσι(ν)"],
      "Imperfect Active Indicative": ["ἔφευγον", "ἔφευγες", "ἔφευγε(ν)", "ἐφεύγομεν", "ἐφεύγετε", "ἔφευγον"],
      "Future Active Indicative": ["φεύξομαι", "φεύξῃ", "φεύξεται", "φευξόμεθα", "φεύξεσθε", "φεύξονται"],
      "Aorist Active Indicative": ["ἔφυγον", "ἔφυγες", "ἔφυγε(ν)", "ἐφύγομεν", "ἐφύγετε", "ἔφυγον"],
    },

    imperative: {
      "Present Active Imperative": ["φεῦγε", "φευγέτω", "φεύγετε", "φευγέτωσαν"],
      "2nd Aorist Active Imperative": ["φύγε", "φυγέτω", "φύγετε", "φυγέτωσαν"],
    },
  },
  "φρονέω": {
    meaning: "I think / have an attitude",
    note: "ε-contract",
    indicative: {
      "Present Active Indicative": ["φρονῶ", "φρονεῖς", "φρονεῖ", "φρονοῦμεν", "φρονεῖτε", "φρονοῦσι(ν)"],
      "Imperfect Active Indicative": ["ἐφρόνουν", "ἐφρόνεις", "ἐφρόνει", "ἐφρονοῦμεν", "ἐφρονεῖτε", "ἐφρόνουν"],
      "Future Active Indicative": ["φρονήσω", "φρονήσεις", "φρονήσει", "φρονήσομεν", "φρονήσετε", "φρονήσουσι(ν)"],
      "1st Aorist Active Indicative": ["ἐφρόνησα", "ἐφρόνησας", "ἐφρόνησε(ν)", "ἐφρονήσαμεν", "ἐφρονήσατε", "ἐφρόνησαν"],
    },

    imperative: {
      "Present Active Imperative": ["φρόνει", "φρονείτω", "φρονεῖτε", "φρονείτωσαν"],
      "1st Aorist Active Imperative": ["φρόνησον", "φρονησάτω", "φρονήσατε", "φρονησάτωσαν"],
    },
  },
  "φωνέω": {
    meaning: "I call / cry out",
    note: "ε-contract",
    indicative: {
      "Present Active Indicative": ["φωνῶ", "φωνεῖς", "φωνεῖ", "φωνοῦμεν", "φωνεῖτε", "φωνοῦσι(ν)"],
      "Imperfect Active Indicative": ["ἐφώνουν", "ἐφώνεις", "ἐφώνει", "ἐφωνοῦμεν", "ἐφωνεῖτε", "ἐφώνουν"],
      "Future Active Indicative": ["φωνήσω", "φωνήσεις", "φωνήσει", "φωνήσομεν", "φωνήσετε", "φωνήσουσι(ν)"],
      "1st Aorist Active Indicative": ["ἐφώνησα", "ἐφώνησας", "ἐφώνησε(ν)", "ἐφωνήσαμεν", "ἐφωνήσατε", "ἐφώνησαν"],
    },

    imperative: {
      "Present Active Imperative": ["φώνει", "φωνείτω", "φωνεῖτε", "φωνείτωσαν"],
      "1st Aorist Active Imperative": ["φώνησον", "φωνησάτω", "φωνήσατε", "φωνησάτωσαν"],
    },
  },
  "ἵστημι": {
    meaning: "I stand / I set / place",
    indicative: {
      "Present Active Indicative": ["ἵστημι", "ἵστης", "ἵστησι(ν)", "ἵσταμεν", "ἵστατε", "ἱστᾶσι(ν)"],
      "Imperfect Active Indicative": ["ἵστην", "ἵστης", "ἵστη", "ἵσταμεν", "ἵστατε", "ἵστασαν"],
      "Future Active Indicative": ["στήσω", "στήσεις", "στήσει", "στήσομεν", "στήσετε", "στήσουσι(ν)"],
      "1st Aorist Active Indicative": ["ἔστησα", "ἔστησας", "ἔστησε(ν)", "ἐστήσαμεν", "ἐστήσατε", "ἔστησαν"],
      "Aorist Active Indicative": ["ἔστην", "ἔστης", "ἔστη", "ἔστημεν", "ἔστητε", "ἔστησαν"],
      "Perfect Active Indicative": ["ἕστηκα", "ἕστηκας", "ἕστηκε(ν)", "ἑστήκαμεν", "ἑστήκατε", "ἑστήκασι(ν)"],
    },

    imperative: {
      "Present Active Imperative": ["ἵστη", "ἱστάτω", "ἵστατε", "ἱστάτωσαν"],
      "2nd Aorist Active Imperative": ["στῆθι", "στήτω", "στῆτε", "στήτωσαν"],
      "1st Aorist Active Imperative": ["στῆσον", "στησάτω", "στήσατε", "στησάτωσαν"],
      "1st Aorist Passive Imperative": ["σταθήτι", "σταθήτω", "στάθητε", "σταθήτωσαν"],
    },
  },
  "ὀνομάζω": {
    meaning: "I name / call",
    indicative: {
      "Present Active Indicative": ["ὀνομάζω", "ὀνομάζεις", "ὀνομάζει", "ὀνομάζομεν", "ὀνομάζετε", "ὀνομάζουσι(ν)"],
      "Imperfect Active Indicative": ["ὠνόμαζον", "ὠνόμαζες", "ὠνόμαζε(ν)", "ὠνομάζομεν", "ὠνομάζετε", "ὠνόμαζον"],
      "Future Active Indicative": ["ὀνομάσω", "ὀνομάσεις", "ὀνομάσει", "ὀνομάσομεν", "ὀνομάσετε", "ὀνομάσουσι(ν)"],
      "1st Aorist Active Indicative": ["ὠνόμασα", "ὠνόμασας", "ὠνόμασε(ν)", "ὠνομάσαμεν", "ὠνομάσατε", "ὠνόμασαν"],
    },

    imperative: {
      "Present Active Imperative": ["ὀνόμαζε", "ὀνομαζέτω", "ὀνομάζετε", "ὀνομαζέτωσαν"],
      "1st Aorist Active Imperative": ["ὀνόμασον", "ὀνομασάτω", "ὀνομάσατε", "ὀνομασάτωσαν"],
      "1st Aorist Passive Imperative": ["ὀνομάσθητι", "ὀνομασθήτω", "ὀνομάσθητε", "ὀνομασθήτωσαν"],
    },
  },
  "ὑποτάσσω": {
    meaning: "I submit / subject",
    indicative: {
      "Present Active Indicative": ["ὑποτάσσω", "ὑποτάσσεις", "ὑποτάσσει", "ὑποτάσσομεν", "ὑποτάσσετε", "ὑποτάσσουσι(ν)"],
      "Imperfect Active Indicative": ["ὑπέτασσον", "ὑπέτασσες", "ὑπέτασσε(ν)", "ὑπετάσσομεν", "ὑπετάσσετε", "ὑπέτασσον"],
      "Future Active Indicative": ["ὑποτάξω", "ὑποτάξεις", "ὑποτάξει", "ὑποτάξομεν", "ὑποτάξετε", "ὑποτάξουσι(ν)"],
      "1st Aorist Active Indicative": ["ὑπέταξα", "ὑπέταξας", "ὑπέταξε(ν)", "ὑπετάξαμεν", "ὑπετάξατε", "ὑπέταξαν"],
    },

    imperative: {
      "Present Active Imperative": ["ὑπότασσε", "ὑποτασσέτω", "ὑποτάσσετε", "ὑποτασσέτωσαν"],
      "Present Middle/Passive Imperative": ["ὑποτάσσου", "ὑποτασσέσθω", "ὑποτάσσεσθε", "ὑποτασσέσθωσαν"],
      "1st Aorist Active Imperative": ["ὑπόταξον", "ὑποταξάτω", "ὑποτάξατε", "ὑποταξάτωσαν"],
      "2nd Aorist Passive Imperative": ["ὑποτάγηθι", "ὑποταγήτω", "ὑποτάγητε", "ὑποταγήτωσαν"],
    },
  },
};
