function initPerso() {

    fill_section(data_action_fr_fergheas_class, "basic-actions", "Action", "class");
    
    fill_section(data_bonusaction_fr_fergheas_class, "basic-bonus-actions", "Action bonus", "class");
    fill_section(data_bonusaction_fr_fergheas_feat, "basic-bonus-actions", "Action bonus", "feat");

    fill_section(data_feature_fr_fergheas_class, "basic-features", "Capacité", "class");
    fill_section(data_feature_fr_fergheas_heroic, "basic-features", "Capacité", "heroic");
    fill_section(data_feature_fr_fergheas_feat, "basic-features", "Capacité", "feat");
       
    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(initPerso);