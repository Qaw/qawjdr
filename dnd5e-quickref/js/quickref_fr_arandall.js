function initPerso() {

    fill_section(data_action_fr_arandall_heroic, "basic-actions", "Action", "heroic");
    fill_section(data_bonusaction_fr_arandall_heroic, "basic-bonus-actions", "Action bonus", "heroic");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(initPerso);
