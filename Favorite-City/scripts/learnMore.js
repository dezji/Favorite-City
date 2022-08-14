function learnMore() {
    var more_info_box = document.getElementById("more_info");

    if (more_info_box.hasAttribute("class")) {
        more_info_box.removeAttribute("class");
        more_info_box.setAttribute("class", "show_info");
    }

};

function learnMore2() {
    var more_info_box = document.getElementById("more_info2");

    if (more_info_box.hasAttribute("class")) {
        more_info_box.removeAttribute("class");
        more_info_box.setAttribute("class", "show_info");
    }

};

function learnMore3() {
    var more_info_box = document.getElementById("more_info3");

    if (more_info_box.hasAttribute("class")) {
        more_info_box.removeAttribute("class");
        more_info_box.setAttribute("class", "show_info");
    }

};

window.onclick = function(evt) {
    var more_info_box = document.getElementById("more_info");
    var more_info_box2 = document.getElementById("more_info2");
    var more_info_box3 = document.getElementById("more_info3");

    if (event.target == more_info_box) {
        more_info_box.removeAttribute("class");
        more_info_box.setAttribute("class", "hide_info");
    }
    else if (event.target == more_info_box2) {
        more_info_box2.removeAttribute("class");
        more_info_box2.setAttribute("class", "hide_info");
    }
    else if (event.target == more_info_box3) {
        more_info_box3.removeAttribute("class");
        more_info_box3.setAttribute("class", "hide_info");
    }
};