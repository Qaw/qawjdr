data_movement_fr = [
    {
        title: "Se déplacer",
        icon: "run",
        subtitle: "Coût: 1m par 1m",
        description: "Coût du mouvement: 1m par 1m",
        reference: "PHB, pg. 190.",
        bullets: [
            "Si vous avez plusieurs vitesses, par exemple une vitesse de marche et une vitesse de vol, vous pouvez alterner entre les vitesses durant votre mouvement. À chaque fois que vous changez de vitesse, il faut enlever la distance déjà parcourue de votre nouvelle vitesse. Le résultat détermine la distance que vous pouvez encore parcourir.",
            "Vous pouvez vous déplacer à travers l'espace occupé par une créature non hostile.",
            "vous ne pouvez pas vous déplacer dans l'espace occupé par une créature hostile, à moins que la créature ne soit deux tailles plus grandes ou plus petites que vous.",
            "L'espace d'une autre créature reste un terrain difficile pour vous.",
            "Que cette créature soit amie ou ennemie, vous ne pouvez pas volontairement arrêter votre mouvement dans son espace."
        ]
    },
    {
        title: "Escalader",
        icon: "crags",
        subtitle: "Coût: 1m coûte 2m",
        description: "Coût de mouvement: chaque mètre de déplacement en coûte un autre (ou deux autres si le terrain est difficile)",
        reference: "PHB, pg. 182.",
        bullets: [
            "À la discrétion du MJ, escalader une paroi verticale et glissante ou dépourvue de point d'appui, nécessitera un jet de Force (Athlétisme) réussi."
        ]
    },
    {
        title: "Nager",
        icon: "at-sea",
        subtitle: "Coût: 1m coûte 2m",
        description: "Coût de mouvement: chaque mètre de déplacement en coûte un autre (ou deux autres si le terrain est difficile)",
        reference: "PHB, pg. 182.",
        bullets: [
            "Franchir une distance à travers des eaux agitées peut demander un jet de Force (Athlétisme) réussi."
        ]
    },
    {
        title: "Se jeter à terre",
        icon: "falling",
        subtitle: "Coût: 0m",
        description: "Coût du mouvement: 0m (gratuit)",
        reference: "PHB, pgs. 190-191,292.",
        bullets: [
            "Vous pouvez vous jeter à terre sans utiliser votre vitesse.",
            "Pour bouger quand vous êtes à terre, vous devez ramper ou utiliser la magie comme la téléportation.",
            "Se jeter à terre ajoute la condition <i>À terre</i>."
        ]
    },
    {
        title: "Ramper",
        icon: "crawl",
        subtitle: "Coût: 1m coûte 2m",
        description: "Coût de mouvement: chaque mètre de déplacement en coûte un autre (ou deux autres si le terrain est difficile)",
        reference: "PHB, pg. 182.",
        bullets: [
            "Chaque mètre avancé en rampant coûte un mètre supplémentaire.",
            "Chaque mètre avancé en rampant en terrain difficile coûte 3 mètres."
        ]
    },
    {
        title: "Se relever",
        icon: "strong",
        subtitle: "Coût: la moitiée de votre vitesse",
        description: "Coût: la moitiée de votre vitesse",
        reference: "PHB, pg. 190-191.",
        bullets: [
            "Vous ne pouvez pas vous relever si vous n'avez pas assez de mouvement restant ou si votre vitesse est de 0."
        ]
    },
    {
        title: "Saut en hauteur",
        icon: "wingfoot",
        subtitle: "Coût: 1m par 1m",
        description: "Coût: chaque mètre franchi lors du saut coûte un mètre de déplacement",
        reference: "PHB, pg. 182.",
        bullets: [
            "Vous faites un bond d'un nombre de mètres égal à votre modificateur de Force divisé par 3 + 1 si vous prenez un élan d'au moins 3 mètres. ",
            "Lorsque vous faites un saut sans élan, vous pouvez atteindre seulement la moitié de cette distance.",
            "Vous pouvez étendre vos bras de la moitié de votre taille au-dessus de vous durant le saut. Cela vous permettra d'atteindre un point au-dessus de vous situé à la hauteur du saut plus une fois et demi votre taille.",
            "Dans des circonstances particulières, votre MD peut vous demander un jet de Force (Athlétisme) pour sauter plus haut que votre capacité normale."
        ]
    },
    {
        title: "Saut en longueur",
        icon: "wingfoot",
        subtitle: "Coût: 1m par 1m",
        description: "Coût du mouvement: 1,5m par 1,5m",
        reference: "PHB, pg. 182.",
        bullets: [
            "Vous couvrez un nombre de mètres égal à votre valeur de <b>Force</b> divisée par 3 si vous prenez un élan d'au moins 3 mètres.",
            "Lorsque vous faites un saut en longueur sans élan, vous pouvez seulement franchir la moitié de cette distance.",
            "vous pouvez devoir réussir un jet de Force (Athlétisme) DD 10 pour sauter au-dessus d'un petit obstacle (pas plus haut que le quart de votre distance de saut), comme une haie ou un petit mur.Dans le cas contraire, vous le touchez.",
            "Lorsque vous atterrissez sur un terrain difficile, vous devez réussir un jet de Dextérité (Acrobaties) DD 10 pour retomber sur vos pieds. Dans le cas contraire, vous tombez à terre."
        ]
    },
    {
        title: "Improviser",
        icon: "juggler",
        subtitle: "Tout mouvement absent de cette liste",
        description: "Faire n'importe quel mouvement que vous imaginez",
        bullets: [
            "Quand vous décrivez un mouvement non décrit dans les règles, le MJ vous dit si cette action est possible et quel genre de jet de dés détermine, si nécessaire, le succès ou l'échec."
        ]
    },
    {
        title: "Terrain difficile",
        icon: "stone-pile",
        subtitle: "Modificateur de coût: +1,5m par 1,5m",
        reference: "PHB, pg. 182.",
        description: "Vous vous déplacez à la moitié de votre vitesse en terrain difficile (se déplacer d'un mètre en terrain difficile coûte 2 mètres de déplacement).",
        bullets: [
        ]
    },
    {
        title: "Bouger une créature agrippée",
        icon: "grab",
        subtitle: "Modificateur: demi vitesse",
        description: "Bouger une créature que vous avez agrippée",
        reference: "PHB, pg. 195.",
        bullets: [
            "Quand vous vous déplacez, vous pouvez traîner ou porter la créature que vous avez agrippée, mais votre vitesse est diminuée par deux, à moins que la créature ne soit plus petite que vous d'au moins deux tailles."
        ]
    }
];
