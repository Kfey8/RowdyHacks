window.onload = function() {

    var itemArray = new Array(); //You could remove this line
    var ddlItems = document.getElementById("ddlitemslist"),
        itemArray = ["Rhumatoid Arthritis", "Lymes Disease", "Lupus", "Stroke", "Cancer", "Eczema", "Diabetes", "RespiratoryDisease", "Osteoarthritis", "other"];

    for (var i = 0; i < itemArray.length; i++) {
        var opt = itemArray[i];
        var el = document.createElement("option");

        el.textContent = opt;
        el.value = opt;

        ddlItems.appendChild(el);
    }
}