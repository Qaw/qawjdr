function initPerso() {

    fill_section(data_action_fr_ghaleb_class, "basic-actions", "Action", "class");
    fill_section(data_bonusaction_fr_ghaleb_class, "basic-bonus-actions", "Action bonus", "class");

    fill_section(data_reaction_fr_ghaleb_heroic, "basic-reactions", "Réaction", "heroic");

    fill_section(data_maneuver_fr_ghaleb_class, "basic-maneuvers", "Manoeuvre", "class");
    fill_section(data_maneuver_fr_ghaleb_heroic, "basic-maneuvers", "Manoeuvre", "heroic");
       
    fill_section(data_feature_fr_ghaleb_class, "basic-features", "Capacité", "class");
    fill_section(data_feature_fr_ghaleb_feat, "basic-features", "Capacité", "feat");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(initPerso);