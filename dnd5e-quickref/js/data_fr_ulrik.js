data_action_fr_ulrik_class = [
    {
        title: "Sursaut",
        icon: "sword-array",
        subtitle: "Réaliser une action supplémentaire",
        description: "",
        reference: "Guerrier",
        bullets: [
            "Vous pouvez réaliser une action supplémentaire en plus de votre action normale et de votre éventuelle action bonus.",
            "Une fois cette capacité utilisée, vous devez terminer un repos court ou long pour pouvoir l'utiliser de nouveau."
        ]
    },
    {
        title: "Coup de bouclier assomant",
        icon: "shield",
        subtitle: "Attaquer au bouclier pour assomer",
        description: "",
        reference: "Guerrier",
        bullets: [
            "Lorsque vous maniez un bouclier en combat, vous pouvez passer un <b>dé de supériorité</b> et faire une attaque avec votre main secondaire dans le cadre de vos attaques normales. <br> Vous ajoutez le résultat du dé au jet d'attaque et votre bonus de Force ou de Dextérité (au choix) au jet de dégâts.",
            "Si vous touchez, la cible doit réussir un jet de sauvegarde de Constitution ou être étourdie jusqu'à la fin de votre prochain tour. <br> DD du jet de sauvegarde contre la manœuvre = 8 + votre bonus de maîtrise + votre modificateur de Force ou de Dextérité (au choix)",
            "Le bouclier est considéré comme une arme improvisée dans ce cas, et la base de dommage est donc un D4."
        ]
    }
];

    data_bonusaction_fr_ulrik_class = [
    {
        title: "Second souffle",
        icon: "strong",
        subtitle: "Se soigner",
        description: "Puiser dans son endurance pour se soigner",
        reference: "Guerrier",
        bullets: [
            "Vous possédez une réserve d'endurance limitée dans laquelle vous pouvez puiser pour vous protéger contre les dégâts.", 
            "À votre tour vous pouvez utiliser une action bonus pour regagner un nombre de pv égal à 1d10 + 14 (votre niveau de guerrier).",
            "Une fois cette capacité utilisée, vous devez terminer un repos court ou long pour pouvoir l'utiliser de nouveau."
        ]
    },
    {
        title: "Coup de bouclier puissant",
        icon: "skull-shield",
        subtitle: "Attaquer avec son bouclier",
        description: "",
        reference: "Guerrier",
        bullets: [
            "Lorsque vous maniez un bouclier en combat, vous pouvez passer un <b>dé de supériorité</b> et utiliser votre action bonus pour faire une attaque avec votre main secondaire comme si vous vous battiez avec deux armes.",
            "Vous ajoutez au choix votre bonus de Force ou de Dextérité et le résultat du dé au jet de dégâts.",
            "Le bouclier est considéré comme une arme improvisée dans ce cas, et la base de dommage est donc un D4."
        ]
    }
];

data_bonusaction_fr_ulrik_feat = [
    {
        title: "Bousculer avec son bouclier",
        icon: "shield",
        subtitle: "Bousculer avec son bouclier",
        description: "",
        reference: "Don Spécialiste des boucliers",
        bullets: [
            "Si vous prenez l'action Attaquer à votre tour, vous pouvez utiliser une action bonus pour essayer de bousculer une créature située à 1,50 mètre ou moins de vous avec votre bouclier."
        ]
    },
    {
        title: "Attaquer en chargeant",
        icon: "quick-slash",
        subtitle: "Attaquer en chargeant",
        description: "",
        reference: "Don Expert de la charge",
        bullets: [
            "Lorsque vous utilisez votre action pour Foncer, vous pouvez utiliser une action bonus pour faire une attaque au corps à corps avec une arme ou bousculer une créature.",
            "Si vous vous déplacez d'au moins 3 mètres en ligne droite juste avant de prendre cette action bonus, vous gagnez <br> - soit un bonus de +5 aux dégâts de l'attaque (si vous avez choisi de faire une attaque au corps à corps et que vous touchez), <br> - soit vous repoussez la cible jusqu'à 3 mètres de vous (si vous avez choisi de la bousculer et que vous réussissez)."
        ]
    }
];

data_reaction_fr_ulrik_class = [
    {
        title: "Parade au bouclier",
        icon: "shield-reflect",
        subtitle: "Parer une attaque adverse réussie",
        description: "",
        reference: "Guerrier",
        bullets: [ 
            "Lorsque vous êtes touché par une attaque alors que vous portez un bouclier, vous pouvez dépenser un <b>dé de supériorité</b> en réaction, et ajouter le nombre obtenu à votre CA."
        ]
    }
];

data_maneuver_fr_ulrik_class = [
    {
        title: "Riposte",
        icon: "saber-slash",
        subtitle: "Riposter contre une attaque ratée",
        description: "",
        reference: "Guerrier",
        bullets: [ 
            "Si une créature vous rate lors d'une attaque au corps à corps, vous pouvez utiliser votre réaction et un <b>dé de supériorité</b> pour faire une attaque avec une arme au corps à corps contre cette créature.",
            "Si vous touchez, ajoutez votre <b>dé de supériorité</b> aux dégâts."
        ]
    },
    {
        title: "Distraction",
        icon: "sword-spin",
        subtitle: "Distraire après une attaque réussie",
        description: "",
        reference: "Guerrier",
        bullets: [ 
            "Si vous touchez une créature lors d'une attaque avec une arme, vous pouvez dépenser un <b>dé de supériorité</b> pour distraire la créature et provoquer une ouverture pour vos alliés.",
            "Ajoutez votre <b>dé de supériorité</b> à vos dégâts. La prochaine attaque contre votre cible aura l'avantage si ce n’est pas vous qui frappez et si elle est faite avant le début de votre prochain tour."
        ]
    },
    {
        title: "Attaque précise",
        icon: "targeting",
        subtitle: "Améliorer le jet d'attaque",
        description: "",
        reference: "Guerrier",
        bullets: [
            "Si vous réalisez une attaque avec une arme, vous pouvez dépenser un <b>dé de supériorité</b> et l’ajouter au jet d'attaque.",
            "Vous pouvez utiliser cette manoeuvre avant ou après avoir lancé le jet d'attaque, mais avant qu'un quelconque effet de l'attaque ne s'applique."
        ]
    },
    {
        title: "Attaque menaçante",
        icon: "reaper-scythe",
        subtitle: "Effrayer après une attaque réussie",
        description: "",
        reference: "Guerrier",
        bullets: [
            "Si vous touchez une créature lors d'une attaque avec une arme, vous pouvez dépenser un <b>dé de supériorité</b> pour tenter d’effrayer la cible.",
            "Ajoutez votre <b>dé de supériorité</b> aux dégâts, et la cible doit faire un jet de sauvegarde de Sagesse. <br> DD du jet de sauvegarde contre la manœuvre = 8 + votre bonus de maîtrise + votre modificateur de Force ou de Dextérité (au choix)",
            "En cas d'échec, la cible est effrayée jusqu'à la fin de votre prochain tour."
        ]
    },
    {
        title: "Attaque de manoeuvre",
        icon: "backup",
        subtitle: "Placer un allié après une attaque réussie",
        description: "",
        reference: "Guerrier",
        bullets: [ 
            "Si vous touchez une créature lors d'une attaque avec une arme, vous pouvez dépenser un <b>dé de supériorité</b> pour placer l’un de vos alliés dans une position avantageuse.",
            "Ajoutez votre <b>dé de supériorité</b> aux dégâts et choisissez une créature amicale qui peut vous voir ou vous entendre. <br> Cette créature pourra utiliser sa réaction pour se déplacer de la moitié de sa vitesse sans provoquer d'attaque d’opportunité de la part de la cible de votre attaque."
        ]
    },
    {
        title: "Croche-pied",
        icon: "foot-trip",
        subtitle: "Faire tomber après une attaque réussie",
        description: "",
        reference: "Guerrier",
        bullets: [ 
            "Si vous touchez une créature lors d'une attaque avec une arme, vous pouvez utiliser un <b>dé de supériorité</b> pour tenter de mettre votre cible à terre.",
            "Ajoutez votre <b>dé de supériorité</b> aux dégâts, et si la cible est de taille G ou plus petite elle devra faire un jet de sauvegarde de Force. <br> DD du jet de sauvegarde contre la manœuvre = 8 + votre bonus de maîtrise + votre modificateur de Force ou de Dextérité (au choix)",
            "En cas d’échec, votre cible tombe à terre."
        ]
    } 
    
    
];
