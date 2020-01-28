data_action_fr_ghaleb_class = [
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
    }
];

data_bonusaction_fr_ghaleb_class = [
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
        title: "Shurapoli (Danse de la lame)",
        icon: "strong",
        subtitle: "Commencer la Shurapoli",
        description: "",
        reference: "Danseur de Guerre Pellurien",
        bullets: [
            "Cette capacité ne peut être utilisée que si vous portez une armure légère ou non et, dans la plupart des cas, si vous portez un grand sabre ou un fauchon dans les deux mains.<br> En outre, elle ne peut pas être utilisée lorsque vous avez une pénalité d'encombrement ou lorsque vous utilisez un bouclier.",
            "Vous pouvez utiliser une action bonus pour entrer en position et vous bénéficiez des avantages suivants : <br>- Quand vous portez une épée à deux mains ou un fauchon, vous pouvez utiliser votre Dextérité au lieu de votre Force pour les jets d'attaque et de dégâts. <br>- Vous pouvez ajouter la moitié de votre bonus de compétence à votre CA contre toutes les attaques.",
            "La danse s'arrête si votre vitesse tombe à 0 ou si vous obtenez une pénalité d'encombrement."
        ]
    },
    {
        title: "Intouchable",
        icon: "dodging",
        subtitle: "Se désengager",
        description: "",
        reference: "Danseur de Guerre Pellurien",
        bullets: [
            "Vous pouvez vous désengager avec une action bonus.", 
            "Votre mouvement ne provoque pas d'attaques d'opportunités pour le reste du tour."
        ]
    }
];

data_reaction_fr_ghaleb_heroic = [
    {
        title: "Parade",
        icon: "sword-clash",
        subtitle: "Parer une attaque adverse réussie",
        description: "",
        reference: "Guerrier",
        bullets: [ 
            "Si une créature vous touche avec une attaque au corps à corps, vous pouvez utiliser votre réaction et un <b>dé de supériorité</b> pour réduire les dégâts d'un montant égal à votre résultat au <b>dé de supériorité</b> + votre modificateur de Dextérité."
        ]
    },
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
    }
];

data_maneuver_fr_ghaleb_class = [
    {
        title: "Vagues constantes",
        icon: "run",
        subtitle: "Améliorer l'acrobatie ou la dextérité",
        description: "",
        reference: "Danseur de Guerre Pellurien",
        bullets: [
            "Lorsque vous faites un jet qui vous permet d'appliquer votre compétence en acrobatie ou lorsque vous faites une sauvegarde de dextérité, vous pouvez utiliser un <b>dé de supériorité</b> pour augmenter le jet.",
            "Ajoutez la moitié (arrondi au supérieur) du nombre obtenu sur le <b>dé de supériorité</b> à votre jet. Vous appliquez ce bonus après avoir fait le test mais avant de savoir s'il a réussi..."
        ]
    },
    {
        title: "Désarmement",
        icon: "sword-in-stone",
        subtitle: "Désarmer après une attaque réussie",
        description: "",
        reference: "Guerrier",
        bullets: [
            "Si vous touchez une créature lors d'une attaque avec une arme, vous pouvez dépenser un <b>dé de supériorité</b> pour tenter de désarmer la cible, la forçant à lâcher un objet de votre choix qu’elle a en main.", 
            "Vous ajoutez le <b>dé de supériorité</b> aux dégâts de l’attaque, et la cible doit faire un jet de sauvegarde de Force. En cas d’échec, elle lâche l’objet que vous avez désigné. L’objet tombe à ses pieds."
        ]
    },
    {
        title: "Jeu de jambes défensif",
        icon: "tread",
        subtitle: "Se déplacer défensivement",
        description: "",
        reference: "Guerrier",
        bullets: [
            "Si vous effectuez un déplacement, vous pouvez dépenser un <b>dé de supériorité</b>, jeter le dé et ajouter le résultat à votre CA jusqu'à la fin de votre déplacement."
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
    }

    
];

data_maneuver_fr_ghaleb_heroic = [
    {
        title: "Fente",
        icon: "all-for-one",
        subtitle: "Augmenter l'allonge d'une attaque",
        description: "",
        reference: "Guerrier",
        bullets: [ 
            "Si vous réalisez une attaque avec une arme au corps à corps durant votre tour, vous pouvez dépenser un <b>dé de supériorité</b> pour augmenter l'allonge de votre frappe de 1,50 mètre. ",
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
        title: "Attaque de manoeuvre",
        icon: "backup",
        subtitle: "Déplacer un allié après une attaque réussie",
        description: "",
        reference: "Guerrier",
        bullets: [ 
            "Si vous touchez une créature lors d'une attaque avec une arme, vous pouvez dépenser un <b>dé de supériorité</b> pour placer l’un de vos alliés dans une position avantageuse.",
            "Ajoutez votre <b>dé de supériorité</b> aux dégâts et choisissez une créature amicale qui peut vous voir ou vous entendre. Cette créature pourra utiliser sa réaction pour se déplacer de la moitié de sa vitesse sans provoquer d'attaque d’opportunité de la part de la cible de votre attaque."
        ]
    }      
];

data_feature_fr_ghaleb_class = [
    {
        title: "Invincible",
        icon: "strong",
        subtitle: "Relancer un jet de sauvegarde",
        description: "",
        reference: "Guerrier",
        bullets: [ 
            "Vous pouvez relancer un jet de sauvegarde que vous avez raté. Si vous le faites, vous devez utiliser le nouveau résultat.",
            "Vous pouvez utiliser cette capacité deux fois entre les repos longs."
        ]
    },
    {
        title: "Evasion",
        icon: "dodge",
        subtitle: "Esquiver un effet de zone",
        description: "",
        reference: "Danseur de Guerre Pellurien",
        bullets: [ 
            "Votre agilité instinctive vous permet d'esquiver certains effets de zone, comme le souffle d'un dragon bleu ou un sort de boule de feu.",
            "Lorsque vous êtes soumis à un effet qui vous permet d'effectuer un jet de sauvegarde de dextérité pour ne subir que la moitié des dégâts, vous ne subissez aucun dégât si vous réussissez le jet de sauvegarde, et seulement la moitié des dégâts si vous échouez."
        ]
    }          
];

data_feature_fr_ghaleb_feat = [
    {
        title: "Athlète",
        icon: "journey",
        subtitle: "Don de mouvement",
        description: "",
        reference: "Don",
        bullets: [ 
            "<ul><li>Lorsque vous êtes à terre, vous relever prend seulement 1,50 mètre de votre mouvement</li><li>Escalader ne vous coûte pas de mouvement supplémentaire.</li><li>Vous pouvez faire un saut en longueur ou en hauteur avec seulement 1,50 mètre d'élan, au lieu de 3 mètres.</li></ul>"
        ]
    },
    {
        title: "Vigilant",
        icon: "eyeball",
        subtitle: "Don de perception",
        description: "",
        reference: "Don",
        bullets: [ 
            "<ul><li>Vous ne pouvez pas être surpris tant que vous êtes conscient.</li><li>Les autres créatures n'ont pas l'avantage aux jets d'attaque contre vous du fait que vous ne les voyez pas.</li></ul>"
        ]
    },
    {
        title: "Enfoncer profondément",
        icon: "curvy-knife",
        subtitle: "Don de combat",
        description: "",
        reference: "Don",
        bullets: [ 
            "Vous avez appris à mettre toute votre puissance dans vos attaques, même avec de petites armes. Vous gagnez les avantages suivants quand vous combattez avec une arme de mêlée qui a la propriété <i>Finesse</i> et que vous maitrisez :<ul><li>Si vous faites un critique, vous pouvez lancer un dé de dégâts supplémentaire.</li><li>Avant de faire une attaque de mêlée, vous pouvez choisir une pénalité de -5 au jet d'attaque. Si l'attaque touche, vous ajoutez 2d6 de dommage.</li></ul>"
        ]
    },
    {
        title: "Guidé par une étoile",
        icon: "star-swirl",
        subtitle: "Convaincre son interlocuteur",
        description: "",
        reference: "Don mineur",
        bullets: [ 
            "Inspiré par l'un des Cavaliers Célestes, vous pouvez à votre tour subjuguer un auditoire par votre présence ou persuader un interlocuteur avec d'ingénieuses tournures de phrases.",
            "Vous avez l'<b>Avantage</b> à n'importe quel jet basé sur le <b>Charisme</b>, auquel vous pouvez ajouter votre <b>Bonus de Compétence</b>, ou le double si celui-ci s'applique déjà au jet en question.",
            "Vous devez terminer un <b>repos long</b> avant de pouvoir utiliser de nouveau cette aptitude."
        ]
    }        
];
