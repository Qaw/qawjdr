function initPerso() {

    fill_section(data_bonusaction_fr_farlans_class, "basic-bonus-actions", "Bonus action", "class");
    fill_section(data_action_fr_farlans_class, "basic-actions", "Action", "class");

    fill_section(data_action_fr_farlans_heroic, "basic-actions", "Action", "heroic");
    fill_section(data_bonusaction_fr_farlans_heroic, "basic-bonus-actions", "Bonus action", "heroic");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(initPerso);
