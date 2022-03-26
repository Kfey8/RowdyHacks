let chronicIllnesses = [
    {id:1, name: "Heart disease"},
    {id:2, name: "Stroke"},
    {id:3, name: "Colorectal cancer"},
    {id:4, name: "Depression"},
    {id:5, name: "Eczema"},
    {id:6, name: "Alzheimers disease"},
    {id:7, name: "Respiratory Disease"},
    {id:8, name: "Diabetes"},
    {id:9, name: "Lupus"},
    {id:10, name: "Arthritis"},
];
var select = document.getElementById("chronicIllnesses");

function appendNames(){
    for (var i = 0; i < chronicIllnesses.length; i ++){
        var opt = chronicIllnesses[i]["name"];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value =opt;
        select.appendChild(el);
        console.log("here");
    }
}
appendNames();
