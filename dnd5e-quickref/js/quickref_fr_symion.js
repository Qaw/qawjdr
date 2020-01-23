function initPerso() {

    fill_section(data_action_fr_symion_class, "basic-actions", "Action", "class");
    fill_section(data_action_fr_symion_heroic, "basic-actions", "Action", "heroic");
    
    fill_section(data_bonusaction_fr_symion_class, "basic-bonus-actions", "Action bonus", "class");

    fill_section(data_feature_fr_symion_class, "basic-features", "Capacité", "class");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(initPerso);
