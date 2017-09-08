function initPerso() {

    fill_section(data_action_fr_saasken_class, "basic-actions", "Action", "class");
    fill_section(data_action_fr_saasken_heroic, "basic-actions", "Action", "heroic");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(initPerso);

