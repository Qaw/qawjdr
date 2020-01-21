function add_quickref_item(parent, data, type, origin) {
    var icon = data.icon || "perspective-dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[no title]";

    var displayType = data.displayType || "";

    var item = document.createElement("div");
    item.className += "item itemsize";
    if (origin == "class"){
        item.className += " class";
    }
    else if (origin == "heroic"){
        item.className += " heroic";
    }
    else if (origin == "feat"){
        item.className += " feat";
    }

    if (displayType == ""){
        item.innerHTML =
        '\
        <div class="item-icon iconsize icon-' + icon + '"></div>\
        <div class="item-text-container text">\
            <div class="item-title">' + title + '</div>\
            <div class="item-desc">' + subtitle + '</div>\
        </div>\
        ';
    }
    else if (displayType == "minor") {
        item.innerHTML =
        '\
        <div class="item-icon minor iconsize icon-' + icon + '"></div>\
        <div class="item-text-container text">\
            <div class="item-title minor">' + title + '</div>\
            <div class="item-desc minor" >' + subtitle + '</div>\
        </div>\
        ';
    }

    var style = window.getComputedStyle(parent.parentNode.parentNode);
    var color = style.backgroundColor;

    item.onclick = function () {
        show_modal(data, color, type);
    };

    parent.appendChild(item);
}

function add_character_item(parent, data) {
    var item = document.createElement("div");
    var bullets = data.bullets || [];

    var style = window.getComputedStyle(parent.parentNode.parentNode);
    var color = style.backgroundColor;
    color = color || "black";

    var bullets_html = bullets.map(function (item) { return "<p class=\"fonstsize\">" + item + "</p>"; }).join("\n");
    $("#bullets").html(bullets_html);

    parent.appendChild(item);
}

function show_modal(data, color, type) {
    var title = data.title || "[no title]";
    var subtitle = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var reference = data.reference || "";
    type = type || "";
    color = color || "black";

    $("body").addClass("modal-open");
    $("#modal").addClass("modal-visible");
    $("#modal-backdrop").css("height", window.innerHeight + "px");
    $("#modal-container").css("background-color", color).css("border-color", color);
    $("#modal-title").text(title).append("<span class=\"float-right\">" + type + "</span>");
    $("#modal-subtitle").text(subtitle);
    $("#modal-reference").text(reference);

    var bullets_html = bullets.map(function (item) { return "<p class=\"fonstsize\">" + item + "</p>"; }).join("\n<hr>\n");
    $("#modal-bullets").html(bullets_html);
}

function hide_modal() {
    $("body").removeClass("modal-open");
    $("#modal").removeClass("modal-visible");
}

function fill_section(data, parentname, type, origin) {
    var parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_quickref_item(parent, item, type, origin);
    });
}

function fill_character_section(data, parentname) {
    var parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_character_item(parent, item);
    });
}

function init() {

    fill_section(data_movement_fr, "basic-movement", "Mouvement", "standard");
    fill_section(data_action_fr, "basic-actions", "Action", "standard");
    fill_section(data_bonusaction_fr, "basic-bonus-actions", "Action bonus", "standard");
    fill_section(data_reaction_fr, "basic-reactions", "Réaction", "standard");
    fill_section(data_condition_fr, "basic-conditions", "Condition", "standard");
    fill_section(data_environment_obscurance_fr, "environment-obscurance", "Environnement", "standard");
    fill_section(data_environment_light_fr, "environment-light", "Environnement", "standard");
    fill_section(data_environment_vision_fr, "environment-vision", "Environnement", "standard");
    fill_section(data_environment_cover_fr, "environment-cover", "Environnement", "standard");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}


$(window).load(init);

