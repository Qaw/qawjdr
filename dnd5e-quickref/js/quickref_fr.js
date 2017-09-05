function add_quickref_item(parent, data, type, origin) {
    var icon = data.icon || "perspective-dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[no title]";

    var item = document.createElement("div");
    item.className += "item itemsize";
    if (origin == "class"){
        item.className += " class";
    }
    else if (origin == "heroic"){
        item.className += " heroic";
    }
    item.innerHTML =
    '\
    <div class="item-icon iconsize icon-' + icon + '"></div>\
    <div class="item-text-container text">\
        <div class="item-title">' + title + '</div>\
        <div class="item-desc">' + subtitle + '</div>\
    </div>\
    ';

    var style = window.getComputedStyle(parent.parentNode.parentNode);
    var color = style.backgroundColor;

    item.onclick = function () {
        show_modal(data, color, type);
    };

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

function init() {

    fill_section(data_movement_fr, "basic-movement", "Move", "standard");
    fill_section(data_action_fr, "basic-actions", "Action", "standard");
    fill_section(data_bonusaction_fr, "basic-bonus-actions", "Bonus action", "standard");
    fill_section(data_reaction_fr, "basic-reactions", "Reaction", "standard");
    fill_section(data_condition_fr, "basic-conditions", "Condition", "standard");
    fill_section(data_environment_obscurance_fr, "environment-obscurance", "Environment", "standard");
    fill_section(data_environment_light_fr, "environment-light", "Environment", "standard");
    fill_section(data_environment_vision_fr, "environment-vision", "Environment", "standard");
    fill_section(data_environment_cover_fr, "environment-cover", "Environment", "standard");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}


$(window).load(init);

