const allnavitems = document.querySelectorAll('.navmenu ul li a');
allnavitems.forEach((item, i) => {
    item.addEventListener("mouseover", function (e) {
        for (var j = 0; j < i; j++) {
            allnavitems[j].firstChild.classList.add("slide-out-top");
        }
        this.firstChild.classList.add("slide-out");
        for (var k = i + 1; k < allnavitems.length; k++) {
            allnavitems[k].firstChild.classList.add("slide-out-bottom");
        }
    });
    item.addEventListener("mouseout", function (e) {
        for (var j = 0; j < i; j++) {
            allnavitems[j].firstChild.classList.remove("slide-out-top");
        }
        this.firstChild.classList.remove("slide-out");
        for (var k = i + 1; k < allnavitems.length; k++) {
            allnavitems[k].firstChild.classList.remove("slide-out-bottom");
        }
    });
});




