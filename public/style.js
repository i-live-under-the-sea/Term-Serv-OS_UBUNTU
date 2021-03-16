//this js file is for styling stuff like alerts and more
function notifacation(measage, lin){
    var main = document.createElement("div");
    var gid = idmaker("10");
    main.id = gid;
    main.style = "background-color: rgba(31, 30, 30, 0.3); border-radius: 10px; height: 60px; width: 200px; position: absolute; right: 0%; bottom: 0%;";
    document.body.appendChild(main)
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    document.head.appendChild(link)
    document.getElementById(gid).innerHTML = `<i style="color: red; position: absolute; top: 2%; left: 2%;" class="material-icons">warning</i>
    <br/>
    <a style="color: dodgerblue; padding-top: 10px; padding-left: 5x;" target="_blank" href="`+lin+`">`+measage+`</a>
    `;
}