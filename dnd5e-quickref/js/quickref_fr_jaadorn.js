function initPerso() {

    fill_section(data_bonusaction_fr_jaadorn_class, "basic-bonus-actions", "Action bonus", "class");
    fill_section(data_action_fr_jaadorn_class, "basic-actions", "Action", "class");
    fill_section(data_reaction_fr_jaadorn_class, "basic-actions", "Action", "class");

    fill_section(data_bonusaction_fr_jaadorn_heroic, "basic-bonus-actions", "Action bonus", "heroic");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(initPerso);
