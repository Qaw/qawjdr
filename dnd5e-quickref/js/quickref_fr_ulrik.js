function initPerso() {

    fill_section(data_action_fr_ulrik_class, "basic-actions", "Action", "class");
    
    fill_section(data_bonusaction_fr_ulrik_class, "basic-bonus-actions", "Action bonus", "class");
    fill_section(data_bonusaction_fr_ulrik_feat, "basic-bonus-actions", "Action bonus", "feat");

    fill_section(data_reaction_fr_ulrik_class, "basic-reactions", "Réaction", "class");

    fill_section(data_maneuver_fr_ulrik_class, "basic-maneuvers", "Manoeuvre", "class");
       
    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(initPerso);