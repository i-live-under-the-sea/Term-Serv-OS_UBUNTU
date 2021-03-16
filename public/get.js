function closetab(btn, tab){
    btn.remove()
    document.getElementById(tab).remove();
    setTimeout(function(){var tabs = document.getElementsByClassName("tabs");
    tabs[0].click()}, 50)
}


function shrink(element){
    element.style.width = "0px";
    setTimeout(function(){ element.remove() }, 490);
}

function notifacation(measage, lin){
    var main = document.createElement("div");
    var gid = idmaker("10");
    main.id = gid;
    main.style = "-webkit-transition: width 500ms; transition: width 500ms; background-color: rgba(31, 30, 30, 0.3); border-radius: 10px; width: 200px; height: 80px; position: absolute; right: 0%; bottom: 0%;";
    document.body.appendChild(main)
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    document.head.appendChild(link)
    document.getElementById(gid).innerHTML = `<i style="color: orange; position: absolute; top: 2%; left: 2%;" class="material-icons">warning</i>
    <button onclick="shrink(this.parentElement)" style="cursor: pointer; background: transparent; border: none; color: rgba(255, 255, 255, 0.9); font-family: ubuntu; position: absolute; top: 2%; right: 2%;">Ignore</button>
    <br/>
    <a style="font-size: 80%; color: dodgerblue; position: absolute; bottom: 7.5; left: 5;" target="_blank" href="`+lin+`">`+measage+`</a>
    `;
}

function exists(file){
        var url = file;
        if (url != "") { 
            $.ajax({ 
                url: url, 
                type: 'HEAD', 
                error: function()  
                { 
                    return false;
                }, 
                success: function()  
                { 
                    return true
                } 
            }); 
        } else { 
            return undefined;
        } 
}

function detectBrowser() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return 'Firefox';
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'IE';//crap
    } else {
        return 'Unknown';
    }
} 

function ffenter(that, iid){
    if(event.keyCode == 13){
        var value = that.value;
        var frame = document.getElementById(iid);
        if(value.includes("http")){
            frame.src = value;
            that.blur()
        }else if(value.includes("google.") && value.includes(".google.") == false){
            frame.src = "https://www.google.com/search?igu=1";
            that.blur()
        }else if(value.includes(".")){
            frame.src = "https://" + value;
            that.blur()
        }else{
            frame.src = "https://www.google.com/search?igu=1&source=&q=" + value;
            that.blur()
        }
    }
}

function idmaker(length) {
    var consonants = 'bcdfghjlmnpqrstv',
        vowels = 'aeiou',
        rand = function(limit) {
            return Math.floor(Math.random()*limit);
        },
        i, word='', length = parseInt(length,10),
        consonants = consonants.split(''),
        vowels = vowels.split('');
    for (i=0;i<length/2;i++) {
        var randConsonant = consonants[rand(consonants.length)],
            randVowel = vowels[rand(vowels.length)];
        word += (i===0) ? randConsonant.toUpperCase() : randConsonant;
        word += i*2<length-1 ? randVowel : '';
    }
    return word;
}

function createtab(){
    document.getElementById("ff-create").remove();
    var btnid = idmaker(10);
    var pageid = idmaker(10);
    var inpid = idmaker(10);
    var frameid = idmaker(10);
    document.getElementById("tbs").innerHTML += `<button id="`+btnid+`" onclick="opentab('`+pageid+`', this)" class="tabs"><i onclick="closetab(this.parentElement, '`+pageid+`')" style="color: rgb(121, 120, 121); border-radius: 2.5px; cursor: pointer; position: absolute; width: 17px; text-align: center; top: 20%; right: 7.5%; font-family: arial;" class="refresh">&#10005;</i></button>`;
    document.getElementById("tbs").innerHTML += `<button onclick="createtab()" id="ff-create">+</button>`;
    var div = document.createElement("div");
    div.id = pageid;
    div.name = "tabs";
    div.classList = "ff-tab";
    div.setAttribute("name", "tabs");
    document.getElementById("ff-content").appendChild(div)
    document.getElementById(pageid).innerHTML += `
    <div id="ff-back">
        <input onkeyup="ffenter(this, '`+frameid+`')" onclick="this.select();" id="`+inpid+`" class="ff-search" placeholder="Search with google or enter address"/>
        <i onclick="document.getElementById('`+frameid+`').src = document.getElementById('`+frameid+`').src" style="color: rgb(121, 120, 121); border-radius: 2.5px; cursor: pointer; position: absolute; top: 15%; left: 8%;" class="material-icons refresh">refresh</i>
    </div>
    <iframe onload="document.getElementById('`+inpid+`').value = this.src" application="yes" is"x-frame-bypass" id="`+frameid+`" style="width: 100%; height: calc(100% - 50px); position: absolute; bottom: 0%; border: none;" src="https://www.google.com/webhp?igu=1"></iframe>`;
    document.getElementById(btnid).click();
}

function opentab(tab, btn){
    var btns = document.getElementsByClassName("tabs");
    for(var d = 0; d < btns.length; d++){
        btns[d].style.borderTop = "none";
    }
    btn.style.borderTop = "solid rgb(11, 132, 255)";
    var divsToHide = document.getElementsByName("tabs");
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
}


function ddid(what, name){
    if(what == "trash"){
        var xmlll = new XMLHttpRequest();
        xmlll.open("GET", "fe.php?trash=" + "users/" + window.location.host + "/desktop/" + name);
        xmlll.send();
    }else if(what == "rename"){
        var get = prompt("New Name");
        var xmlr = new XMLHttpRequest();
        xmlr.open("GET", "fe.php?rename=" + "users/" + window.location.host + "/desktop/" + name + "&newname=" + "users/" + window.location.host + "/desktop/" + get);
        xmlr.send();
    }else if(what == "renamee"){
        var get = prompt("New Name");
        if(get.includes(".") == false){
            var ext = ol.split('.').pop();
            get = get + "." + ext;
        }
        var xmlb = new XMLHttpRequest();
        xmlb.open("GET", "fe.php?rename=" + "users/" + window.location.host + "/desktop/" + name + "&newname=" + "users/" + window.location.host + "/desktop/" + get);
        xmlb.send();
    }
    $("[name=desktopf").remove();
    var xmll = new XMLHttpRequest();
    xmll.addEventListener("load", showdesk);
    xmll.open("GET", "fe.php?path=" + "users/" + window.location.host + "/desktop");
    xmll.send();
}

function dcon(name){
    if(document.getElementById("desk-menu")){
        document.getElementById("desk-menu").remove()
    }
    if(name.includes(".")){
        var left = event.pageX - document.body.offsetLeft;
        var top = event.pageY - document.body.offsetTop;
            document.body.innerHTML += `
                    <div id="desk-menu" style="position: absolute; top:`+top+`; left: `+left+`; width: 200px; height: 170px;">
                        <div onclick="ddid('renamee', '`+ name +`')" class="femenu">Rename</div>
                        <div onclick="ddid('trash', '`+ name +`')" class="femenu">Move To Trash</div>
                    </div>
        `;
        return;
    }
    var left = event.pageX - document.body.offsetLeft;
    var top = event.pageY - document.body.offsetTop;
        document.body.innerHTML += `
                <div id="desk-menu" style="position: absolute; top:`+top+`; left: `+left+`; width: 200px; height: 170px;">
                    <div onclick="ddid('rename', '`+ name +`')" class="femenu">Rename</div>
                    <div onclick="ddid('trash', '`+ name +`')" class="femenu">Move To Trash</div>
                </div>
    `;
}

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}
  
function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}

function removetheme(){
    localStorage.removeItem("theme");
    location.reload()
}

if(localStorage.getItem("theme") == "ltheme"){
    document.body.style.background = "url(https://assets.hongkiat.com/uploads/beautiful-minimalist-desktop-wallpapers/4k/original/01.jpg)";
    document.body.style.backgroundSize = "100% 100%";
    var taskbar = document.getElementById("task-bar").style;
    taskbar.background = "rgba(31, 30, 30, 0.3)";
    taskbar.height = "80%";
    taskbar.top = "10%";
    taskbar.left = "10px";
    taskbar.borderRadius = "5px";
    var topbar = document.getElementById("top-bar").style;
    topbar.position = "absolute";
    topbar.top = "10px";
    topbar.width = "98%";
    topbar.left = "1%"
    topbar.borderRadius = "15px"
    topbar.background = "rgba(31, 30, 30, 0.3)"
    topbar.paddingTop = "2px";
    var powermenu = document.getElementById("powermenu").style;
    powermenu.background = "rgba(31, 30, 30, 0.3)";
    powermenu.color = "white";
    //https://api.openweathermap.org/data/2.5/weather?APPID=28e01ba69af562e4ae402151737f6b6b&q=Brampton&units=imperial
    $.ajax({
        url: "https://geolocation-db.com/jsonp",
        jsonpCallback: "callback",
        dataType: "jsonp",
        success: function(location) {
            var oReq = new XMLHttpRequest();
            oReq.onload = deskweather;
            oReq.open("GET", "https://api.openweathermap.org/data/2.5/weather?APPID=28e01ba69af562e4ae402151737f6b6b&q="+location.city+"&units=imperial");
            oReq.send();
        }
    });
}else if(localStorage.getItem("theme") == "dtheme"){
    document.body.style.background = "url(public/imgs/darktheme.jpg)";
    document.body.style.backgroundSize = "100% 100%";
    var taskbar = document.getElementById("task-bar").style;
    taskbar.background = "rgba(31, 30, 30, 0.6)";
    taskbar.height = "80%";
    taskbar.top = "10%";
    taskbar.left = "10px";
    taskbar.borderRadius = "5px";
    var topbar = document.getElementById("top-bar").style;
    topbar.position = "absolute";
    topbar.top = "10px";
    topbar.width = "98%";
    topbar.left = "1%"
    topbar.borderRadius = "15px"
    topbar.background = "rgba(31, 30, 30, 0.6)"
    topbar.paddingTop = "2px";
    var powermenu = document.getElementById("powermenu").style;
    powermenu.background = "rgba(31, 30, 30, 0.6)";
    powermenu.color = "white";
    //https://api.openweathermap.org/data/2.5/weather?APPID=28e01ba69af562e4ae402151737f6b6b&q=Brampton&units=imperial
    $.ajax({
        url: "https://geolocation-db.com/jsonp",
        jsonpCallback: "callback",
        dataType: "jsonp",
        success: function(location) {
            var oReq = new XMLHttpRequest();
            oReq.onload = deskweather;
            oReq.open("GET", "https://api.openweathermap.org/data/2.5/weather?APPID=28e01ba69af562e4ae402151737f6b6b&q="+location.city+"&units=imperial");
            oReq.send();
        }
    });
}

function deskweather(){
    var getjson = JSON.parse(this.responseText);
    console.log(getjson)
    var feelsLike = getjson.main.feels_like;
    if(getjson.sys.country == "US"){
        feelsLike += "ºF"
    }else{
        var num = Number(feelsLike)
        num = (num - 32) * 5/9
        feelsLike = num.toFixed(1)
        feelsLike = feelsLike.toString()
        feelsLike += "ºC";
    }
    document.body.innerHTML += `
        <div id="notis" class="notis">
            <button onclick="document.getElementById('notis').remove()" class="opsc" style="opacity: 50%; cursor: pointer; position: absolute; top: 1; right: 1; border: none; background: transparent; font-family: ubuntu; color: white;">Ignore</button>
            <img style="position: absolute; top: 1%; left: 1%;" src="public/imgs/weather.png" width="25px" height="25px">
            <p style="width: 25px; color: white; font-family: ubuntu; margin: 0; margin-block-end: 0; margin-inline-start: 0px; margin-inline-end: 0px; padding-left: 35px; padding-top: 5px;">Weather</p>
            <h5 style="padding-left: 20px; padding-top: 10px; margin-block-start: 0; margin-block-end: 0; margin-inline-start: 0px; margin-inline-end: 0px;">Feels Like `+feelsLike+`</h5>
            
        </div>
    `;
    //<p style="position: absolute; bottom: 1%; left: 1%; margin-block-start: 0; margin-block-end: 0; margin-inline-start: 0px; margin-inline-end: 0px;">`+getjson.name+`, `+getjson.sys.country+`</p>
}

function lightTheme(){
    localStorage.setItem("theme", "ltheme")
    document.body.style.background = "url(https://assets.hongkiat.com/uploads/beautiful-minimalist-desktop-wallpapers/4k/original/01.jpg)";
    document.body.style.backgroundSize = "100% 100%";
    var taskbar = document.getElementById("task-bar").style;
    taskbar.background = "rgba(31, 30, 30, 0.3)";
    taskbar.height = "80%";
    taskbar.top = "10%";
    taskbar.left = "10px";
    taskbar.borderRadius = "5px";
    var topbar = document.getElementById("top-bar").style;
    topbar.position = "absolute";
    topbar.top = "10px";
    topbar.width = "98%";
    topbar.left = "1%"
    topbar.borderRadius = "15px"
    topbar.background = "rgba(31, 30, 30, 0.3)"
    topbar.paddingTop = "2px";
    var powermenu = document.getElementById("powermenu").style;
    powermenu.background = "rgba(31, 30, 30, 0.3)";
    powermenu.color = "white";
    document.getElementById("dtheme").remove();
    //https://api.openweathermap.org/data/2.5/weather?APPID=28e01ba69af562e4ae402151737f6b6b&q=Brampton&units=imperial
    $.ajax({
        url: "https://geolocation-db.com/jsonp",
        jsonpCallback: "callback",
        dataType: "jsonp",
        success: function(location) {
            var oReq = new XMLHttpRequest();
            oReq.onload = deskweather;
            oReq.open("GET", "https://api.openweathermap.org/data/2.5/weather?APPID=28e01ba69af562e4ae402151737f6b6b&q="+location.city+"&units=imperial");
            oReq.send();
        }
    });
}

function darkTheme(){
    localStorage.setItem("theme", "dtheme")
    document.body.style.background = "url(public/imgs/darktheme.jpg)";
    document.body.style.backgroundSize = "100% 100%";
    var taskbar = document.getElementById("task-bar").style;
    taskbar.background = "rgba(31, 30, 30, 0.6)";
    taskbar.height = "80%";
    taskbar.top = "10%";
    taskbar.left = "10px";
    taskbar.borderRadius = "5px";
    var topbar = document.getElementById("top-bar").style;
    topbar.position = "absolute";
    topbar.top = "10px";
    topbar.width = "98%";
    topbar.left = "1%"
    topbar.borderRadius = "15px"
    topbar.background = "rgba(31, 30, 30, 0.6)"
    topbar.paddingTop = "2px";
    var powermenu = document.getElementById("powermenu").style;
    powermenu.background = "rgba(31, 30, 30, 0.6)";
    powermenu.color = "white";
    //https://api.openweathermap.org/data/2.5/weather?APPID=28e01ba69af562e4ae402151737f6b6b&q=Brampton&units=imperial
    $.ajax({
        url: "https://geolocation-db.com/jsonp",
        jsonpCallback: "callback",
        dataType: "jsonp",
        success: function(location) {
            var oReq = new XMLHttpRequest();
            oReq.onload = deskweather;
            oReq.open("GET", "https://api.openweathermap.org/data/2.5/weather?APPID=28e01ba69af562e4ae402151737f6b6b&q="+location.city+"&units=imperial");
            oReq.send();
        }
    });
}

function desktoptheme(){
    document.body.innerHTML += `
        <div id="dtheme" class="window">
        <button style="cursor: pointer; background: transparent; width: 20px; height: 20px; border-radius: 50%; border: solid white 1px; color: white; font-family: ubuntu; position: relative; top: 1%; left: 1%; font-weight: none; text-align: center;" onclick="document.getElementById('dtheme').remove()">x</button>
        <p style="position: absolute; color: white; font-family: ubuntu; margin-block-start: 0; margin-block-end: 0px; margin-top: -14px; margin-left: 40px;">Themes</p>
        <button style="cursor: pointer;" class="ltheme" onclick="lightTheme()">Light</button>
        <button style="cursor: pointer;" class="dtheme" onclick="darkTheme()">Dark</button>
        <button style="color: red; border: none; cursor: pointer; background-color: whitesmoke; width: 25%; height: 5%; position: absolute; bottom: 0%; left: 37.5%;"onclick="removetheme()">No Theme</button>
        </div>
    `;
    $( function() {
        $( "#dtheme").draggable();
    });
}

function savewall(){
    if(document.getElementById("dlink").value != ""){
        var wallpaper = document.getElementById("dlink").value;
    }else{
        var wallpaper = document.getElementById("desktop-w").value;
    }
    if(wallpaper == "https://wallpaperaccess.com/full/1607416.png"){
        localStorage.removeItem("wallpapers")
        document.getElementById("wallpaperdiv").remove()
        document.body.style.background = "";
        return;
    }
    if(wallpaper == ""){
        alert("No Wallpaper Selected")
    }else{
        localStorage.setItem("wallpapers", wallpaper);
        console.log(localStorage.getItem("wallpapers"))
        document.body.style.background = "url("+wallpaper+")";
        document.body.style.backgroundSize = "100% 100%";
        document.getElementById("wallpaperdiv").remove()
    }
}

function wallpaper(){
    document.body.innerHTML += `
        <div style="position: absolute; border-radius: 5px; margin: 100px; width: 75%; height: 65%; background-color: rgb(60, 58, 44);" id="wallpaperdiv">
            <button style="cursor: pointer; background: transparent; width: 20px; height: 20px; border-radius: 50%; border: solid white 1px; color: white; font-family: ubuntu; position: relative; top: 1%; left: 1%; font-weight: none; text-align: center;" onclick="document.getElementById('wallpaperdiv').remove()">x</button>
            <p style="position: absolute; color: white; font-family: ubuntu; margin-block-start: 0; margin-block-end: 0px; margin-top: -14px; margin-left: 40px;">Wallpapers</p>
            <div style="text-align: center;"><textarea id="dlink" style="outline: none; color: white; font-family: ubuntu; background-color: rgb(29, 29, 29); width: 75%; height: 40px; border: solid black 1px; text-align: center; font-size: 150%; resize: none; position: relative; top: 20px;" placeholder="Wallpaper Link"></textarea></div>
            <textarea style="display: none;" id="desktop-w"></textarea>  
            <div class="wall-con">
            <button onclick="document.getElementById('desktop-w').value = 'https://wallpaperaccess.com/full/636909.jpg'" style="background: url(https://wallpaperaccess.com/full/636909.jpg);" class="wallpapers"></button>
            <button onclick="document.getElementById('desktop-w').value = 'https://assets.hongkiat.com/uploads/beautiful-minimalist-desktop-wallpapers/4k/original/01.jpg'" style="background: url(https://assets.hongkiat.com/uploads/beautiful-minimalist-desktop-wallpapers/4k/original/01.jpg);" class="wallpapers"></button>
            <button onclick="document.getElementById('desktop-w').value = 'public/imgs/darktheme.jpg'" style="background: url(public/imgs/darktheme.jpg);" class="wallpapers"></button>
            <button onclick="document.getElementById('desktop-w').value = 'data:image/jpeg;base64,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'" style="background: url(data:image/jpeg;base64,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);" class="wallpapers"></button>
            <button onclick="document.getElementById('desktop-w').value = 'https://images.unsplash.com/photo-1600281950046-875a638843ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80'" style="background: url(https://images.unsplash.com/photo-1600281950046-875a638843ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80);" class="wallpapers"></button>
            <button onclick="document.getElementById('desktop-w').value = 'https://wallpapercave.com/wp/E1svyPv.jpg'" style="background: url(https://wallpapercave.com/wp/E1svyPv.jpg);" class="wallpapers"></button>
            <button onclick="document.getElementById('desktop-w').value = 'https://sf-applications.s3.amazonaws.com/Bear/wallpapers/11/jan-2021-wallpaper_mac-book-pro-16-3072x1920.png'" style="background: url(https://sf-applications.s3.amazonaws.com/Bear/wallpapers/11/jan-2021-wallpaper_mac-book-pro-16-3072x1920.png);" class="wallpapers"></button>
            <button onclick="document.getElementById('desktop-w').value = 'https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&w=1000&q=80'" style="background: url(https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&w=1000&q=80);" class="wallpapers"></button>
            <button onclick="document.getElementById('desktop-w').value = 'https://wallpaperaccess.com/full/345330.jpg'" style="background: url(https://wallpaperaccess.com/full/345330.jpg);" class="wallpapers"></button>
            <button onclick="document.getElementById('desktop-w').value = 'https://wallpaperaccess.com/full/1607416.png'" style="background: url(https://wallpaperaccess.com/full/1607416.png);" class="wallpapers"></button>
            <button onclick="savewall()" style="border: none; color: white; font-family: ubuntu; background-color: dodgerblue; position: absolute; bottom: 0; left: 37.5%; height: 5%; width: 25%;">Save</button>
            </div>
        </div>
    `;
    $( function() {
        $( "#wallpaperdiv").draggable();
    });
}

if(localStorage.getItem("wallpapers") != null){
    document.body.style.background = "url("+localStorage.getItem("wallpapers")+")";
    document.body.style.backgroundSize = "100% 100%";
}

function refdesk(){
    $("[name=desktopf").remove();
    var xmll = new XMLHttpRequest();
    xmll.addEventListener("load", showdesk);
    xmll.open("GET", "fe.php?path=" + "users/" + window.location.host + "/desktop");
    xmll.send();
}

function dfol(what, ext){
    apps(what)
    var pt = "users/" + window.location.host + "/desktop/" + ext;
    document.getElementById("fei").value = pt;
    var xmll = new XMLHttpRequest();
    xmll.addEventListener("load", xmlr);
    xmll.open("GET", "fe.php?path=" + pt);
    xmll.send();
}

function showdesk(){
    var arr = this.responseText.split("\n");
    var d = 0;
    while(d < arr.length){
        if(arr[d] != ""){
            if(arr[d].includes(".")){
                document.body.innerHTML += `
                <div oncontextmenu="dcon('`+arr[d]+`')" name="desktopf" style="cursor: pointer; margin-top: 20px; margin-right: 10px; float: right; text-align: center; position: relative; width: 50px; height: 80px;">
                    <img style="margin-top: 5px; width: 62.5%; height: 50%;" src="public/imgs/file.png">
                    <p style="font-size: 50%; color: rgb(29, 29, 29); padding-top: 0; margin-top: 1px; text-align: center; position: relative; bottom: 0;">`+arr[d]+`</p>
                </div>`;
            }else{
                document.body.innerHTML += `
                <div oncontextmenu="dcon('`+arr[d]+`')" ondblclick="dfol('fe', '`+arr[d]+`')" name="desktopf" style="margin-top: 25px; margin-right: 0px; cursor: pointer; float: right; text-align: center; position: relative; width: 100px; height: 80px;">
                    <img style="width: 45%; height: 50%;" src="public/imgs/dfolder.png">
                    <p style="font-size: 50%; color: rgb(29, 29, 29); padding-left: 0; margin-top: 5px; text-align: center; position: relative; bottom: 0;">`+arr[d]+`</p>
                </div>`;
            }
        }
        d++;
    }
}

var xmlll = new XMLHttpRequest();
xmlll.addEventListener("load", showdesk);
xmlll.open("GET", "fe.php?path=users/" + window.location.host + "/desktop");
xmlll.send();




$(document).contextmenu(function(){
    event.preventDefault();
    if(event.target.id == "fe-content"){
        var left = event.pageX - document.getElementById("fe").offsetLeft;
        var top = event.pageY - document.getElementById("fe").offsetTop;
        if(document.getElementById("fe-menu")){
            document.getElementById("fe-menu").remove()
        }
        document.getElementById("fe-content").innerHTML += `
                <div id="fe-menu" style="position: absolute; top:`+top+`; left: `+left+`; width: 200px; height: 170px;">
                    <div onclick="fedo('newfol')" class="femenu">New Folder</div>
                    <div onclick="fedo('newfil')" class="femenu">New File</div>
                    <div onclick="fedo('newterm')" class="femenu">New Terminal Here</div>
                </div>
        `;
    }else if(event.target.tagName == "BODY"){
        var left = event.pageX - document.body.offsetLeft;
        var top = event.pageY - document.body.offsetTop;
        document.body.innerHTML += `
                <div id="desk-menu" style="position: absolute; top:`+top+`; left: `+left+`; width: 200px; height: 170px;">
                    <div onclick="ddo('dnewfol')" class="femenu">New Folder</div>
                    <div onclick="ddo('dnewfil')" class="femenu">New File</div>
                    <div onclick="refdesk()" class="femenu">Refresh</div>
                    <div onclick="wallpaper()" class="femenu">Wallpaper</div>
                    <div onclick="desktoptheme()" class="femenu">Theme</div>
                    <div onclick="ddo('newterm')" class="femenu">New Terminal Here</div>
                </div>
        `;
    }
})

$(document).click(function() {
    if(document.getElementById("desk-menu")){
        document.getElementById("desk-menu").remove()
    }
    if(document.getElementById("fe-content")){
        if(document.getElementById("fe-menu")){
            var femen = $("#fe-menu");
            if (!femen.is(event.target) && !femen.has(event.target).length){
                document.getElementById("fe-menu").remove()
            }
        }
    }
});

document.addEventListener("click", function(evt) {
    var flyoutElement = document.getElementById("powerbtn"),
        targetElement = evt.target;

    do {
        if (targetElement == flyoutElement) {
            if(document.getElementById("powermenu").style.display == "block"){
                document.getElementById("powermenu").style.display = "none";
            }else{
                document.getElementById("powermenu").style.display = "block";
            }
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);

    
    document.getElementById("powermenu").style.display = "none";
});


function logout(){
    var con = confirm("Are You Sure You Want To Take This Action?")
    if(con == true){
        window.location.href="main.php?logout=";
    }else{
        return
    }
}

setInterval(function(){
    var time = new Date();
    var hrs = time.getHours() - 12;
    var min = time.getMinutes();
    var date = time.getDate();
    var mon = time.getMonth();
    var darr = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    if(date < 10){
        date = "0" + date.toString();
    }
    if(min < 10){
        min = "0" + min.toString();
    }
    var get = darr[mon];
    document.getElementById("timing").innerText =  get + " " + date + " " + hrs + ":" + min;
}, 50)

function inc(id){
    if(id.style.width == "100%"){
        id.removeAttribute("style")
    }else{
        id.style.position = "absolute";
        id.style.top = "-100px";
        id.style.left = "-100px";
        id.style.width = "100%";
        id.style.height = "100%";
    }
    id.style.position = "absolute";
}


function highlight(type, id){
    if(type == "file"){
        if(id.background == ""){
            id.background = "url('public/imgs/overlayfile.png') no-repeat";
            id.backgroundSize = "100% 75%";
        }else{
            id.background = "";
            id.backgroundSize = "";
        }
    }else if(type == "folder"){
        if(id.background == ""){
            id.background = "url('public/imgs/overlayfolder.png') no-repeat";
            id.backgroundSize = "100% 75%";
        }else{
            id.background = "";
            id.backgroundSize = "";
        }
    }
}


//fe
function change(folder){
    document.getElementById("fei").value += "/" + folder;
    var xmll = new XMLHttpRequest();
    xmll.addEventListener("load", xmlr);
    xmll.open("GET", "fe.php?path=" + document.getElementById("fei").value);
    xmll.send();
}


function fback(){
    var str = document.getElementById("fei").value;
    var arr = str.split("/")
    var val = "";
    var i = 0;
    while(i < arr.length-1){
        if(val == ""){
            val = arr[i];
        }else{
            val += "/" + arr[i]
        }
        i++;
    }
    var xmll = new XMLHttpRequest();
    xmll.addEventListener("load", xmlr);
    xmll.open("GET", "fe.php?path=" + val);
    xmll.send();
    document.getElementById("fei").value = val;
}

//file explorer do
function ddo(what){
    $("[name=desktopf").remove();
    if(what == "dnewfil"){
        var fli = "users/" + window.location.host + "/desktop";
        var get = prompt("New File");
        if(get.includes(".") == false){
            get = get +  ".txt";
        }
        var xmll = new XMLHttpRequest();
        xmll.open("GET", "fe.php?tc=" + fli + "/" + get);
        xmll.send();
    }else if(what == "dnewfol"){
        var fli = "users/" + window.location.host + "/desktop";
        var get = prompt("New Folder");
        if(get.includes(".") == true){
            get = get.split('.').slice(0, -1).join('.')
        }
        var xmll = new XMLHttpRequest();
        xmll.open("GET", "fe.php?mk=" + fli + "/" + get);
        xmll.send();
    }
    var xmlll = new XMLHttpRequest();
    xmlll.addEventListener("load", showdesk);
    xmlll.open("GET", "fe.php?path=users/" + window.location.host + "/desktop");
    xmlll.send();
}

function fedo(what ,dirname){
    ol = dirname;
    dirname = document.getElementById("fei").value + "/" + dirname;
    if(what == "rename"){
        var get = prompt("New Name");
        var xmll = new XMLHttpRequest();
        xmll.open("GET", "fe.php?rename=" + dirname + "&newname=" + document.getElementById("fei").value + "/" + get);
        xmll.send();
    }else if(what == "emptytrash"){
        var xmll = new XMLHttpRequest();
        xmll.open("GET", "fe.php?emptrash=" + dirname);
        xmll.send();
    }else if(what == "trash"){
        var xmll = new XMLHttpRequest();
        xmll.open("GET", "fe.php?trash=" + dirname);
        xmll.send();
    }else if(what == "del"){
        var xmll = new XMLHttpRequest();
        xmll.open("GET", "fe.php?del=" + dirname);
        xmll.send();
    }else if(what == "dell"){
        var xmll = new XMLHttpRequest();
        xmll.open("GET", "fe.php?dell=" + dirname);
        xmll.send();
    }else if(what == "comp"){
        var xmll = new XMLHttpRequest();
        xmll.open("GET", "fe.php?compress=" + dirname);
        xmll.send();
    }else if(what == "cr"){
        var get = prompt("Folder Name");
        var xmll = new XMLHttpRequest();
        xmll.open("GET", "fe.php?createfo=" + dirname);
        xmll.send();
    }else if(what == "renamee"){
        var get = prompt("New Name");
        if(get.includes(".") == false){
            var ext = ol.split('.').pop();
            get = get + "." + ext;
        }
        var xmll = new XMLHttpRequest();
        xmll.open("GET", "fe.php?rename=" + dirname + "&newname=" + document.getElementById("fei").value + "/" + get);
        xmll.send();
    }else if(what == "newfil"){
        var fli = document.getElementById("fei").value;
        var get = prompt("New File");
        if(get.includes(".") == false){
            get = get +  ".txt";
        }
        var xmll = new XMLHttpRequest();
        xmll.open("GET", "fe.php?tc=" + fli + "/" + get);
        xmll.send();
    }else if(what == "newfol"){
        var fli = document.getElementById("fei").value;
        var get = prompt("New Folder");
        if(get.includes(".") == true){
            get = get.split('.').slice(0, -1).join('.')
        }
        var xmll = new XMLHttpRequest();
        xmll.open("GET", "fe.php?mk=" + fli + "/" + get);
        xmll.send();
    }
    var xmll = new XMLHttpRequest();
    xmll.addEventListener("load", xmlr);
    xmll.open("GET", "fe.php?path=" + document.getElementById("fei").value);
    xmll.send();
}


//context menu for file exploler folders
function fefolder(dirname, event){
    event.preventDefault();
    if(dirname == "desktop" || dirname == "documents" || dirname == "downloads"){
        if(document.getElementById("fe-menu")){
            document.getElementById("fe-menu").remove()
        }
        return;
    }else{
        if(dirname == ".trash"){
            var left = event.pageX - document.getElementById("fe").offsetLeft;
            var top = event.pageY - document.getElementById("fe").offsetTop;
            document.getElementById("fe-content").innerHTML += `
                <div id="fe-menu" style="position: absolute; top:`+top+`; left: `+left+`; width: 200px; height: 170px;">
                    <div onclick="fedo('emptytrash', 'no')" class="femenu">Empty Trash</div>
                </div>
            `;
            return;
        }
        if(document.getElementById("fe-menu")){
            document.getElementById("fe-menu").remove()
            var left = event.pageX - document.getElementById("fe").offsetLeft;
            var top = event.pageY - document.getElementById("fe").offsetTop;
            document.getElementById("fe-content").innerHTML += `
                <div id="fe-menu" style="position: absolute; top:`+top+`; left: `+left+`; width: 200px; height: 170px;">
                    <div onclick="fedo('rename', '`+dirname+`')" class="femenu">Rename</div>
                    <div onclick="fedo('trash', '`+dirname+`')" class="femenu">Move To Trash</div>
                    <div onclick="fedo('dell', '`+dirname+`')" class="femenu">Delete</div>
                    <div onclick="fedo('comp', '`+dirname+`')" class="femenu">Compress</div>
                </div>
            `;
        }else{
            var left = event.pageX - document.getElementById("fe").offsetLeft;
            var top = event.pageY - document.getElementById("fe").offsetTop;
            document.getElementById("fe-content").innerHTML += `
                <div id="fe-menu" style="position: absolute; top:`+top+`; left: `+left+`; width: 200px; height: 170px;">
                    <div onclick="fedo('rename', '`+dirname+`')" class="femenu">Rename</div>
                    <div onclick="fedo('trash', '`+dirname+`')" class="femenu">Move To Trash</div>
                    <div onclick="fedo('dell', '`+dirname+`')" class="femenu">Delete</div>
                    <div onclick="fedo('comp', '`+dirname+`')" class="femenu">Compress</div>
                </div>
        `   ;
        }
    }
    /*
        <div style="width: 200px; height: 150px;">
            <div class="femenu">Rename</div>
            <div class="femenu">Delete</div>
            <div class="femenu">Copy</div>
        </div>
    */
}

function fefile(dirname, event){
    event.preventDefault();
    if(document.getElementById("fe-menu")){
        document.getElementById("fe-menu").remove()
        var left = event.pageX - document.getElementById("fe").offsetLeft;
        var top = event.pageY - document.getElementById("fe").offsetTop;
        document.getElementById("fe-content").innerHTML += `
            <div id="fe-menu" style="position: absolute; top:`+top+`; left: `+left+`; width: 200px; height: 170px;">
                <div onclick="fedo('renamee', '`+dirname+`')" class="femenu">Rename</div>
                <div onclick="fedo('trash', '`+dirname+`')" class="femenu">Move To Trash</div>
                <div onclick="fedo('delf', '`+dirname+`')" class="femenu">Delete</div>
                <div onclick="fedo('comp', '`+dirname+`')" class="femenu">Compress</div>
            </div>
        `;
    }else{
        var left = event.pageX - document.getElementById("fe").offsetLeft;
        var top = event.pageY - document.getElementById("fe").offsetTop;
        document.getElementById("fe-content").innerHTML += `
            <div id="fe-menu" style="position: absolute; top:`+top+`; left: `+left+`; width: 200px; height: 170px;">
                <div onclick="fedo('renamee', '`+dirname+`')" class="femenu">Rename</div>
                <div onclick="fedo('trash', '`+dirname+`')" class="femenu">Move To Trash</div>
                <div onclick="fedo('delf', '`+dirname+`')" class="femenu">Delete</div>
                <div onclick="fedo('comp', '`+dirname+`')" class="femenu">Compress</div>
            </div>
        `;
    }
    /*
        <div style="width: 200px; height: 150px;">
            <div class="femenu">Rename</div>
            <div class="femenu">Delete</div>
            <div class="femenu">Copy</div>
        </div>
    */
}

function femain(event){
    event.preventDefault();
    if(document.getElementById("fe-menu")){
        document.getElementById("fe-menu").remove()
        var left = event.pageX - document.getElementById("fe").offsetLeft;
        var top = event.pageY - document.getElementById("fe").offsetTop;
        document.getElementById("fe-content").innerHTML += `
            <div id="fe-menu" style="position: absolute; top:`+top+`; left: `+left+`; width: 200px; height: 170px;">
                <div onclick="fedo('rename', '`+dirname+`')" class="femenu">Rename</div>
                <div onclick="fedo('trash', '`+dirname+`')" class="femenu">Move To Trash</div>
            </div>
        `;
    }else{
        var left = event.pageX - document.getElementById("fe").offsetLeft;
        var top = event.pageY - document.getElementById("fe").offsetTop;
        document.getElementById("fe-content").innerHTML += `
            <div id="fe-menu" style="position: absolute; top:`+top+`; left: `+left+`; width: 200px; height: 170px;">
                <div onclick="fedo('rename', '`+dirname+`')" class="femenu">New Folder</div>
                <div onclick="fedo('trash', '`+dirname+`')" class="femenu">New File</div>
            </div>
        `;
    }
}

//context menu for file exploler files
/*function fefile(filename){
    
}
*/

//xml
function xmlr(){
    var arr = this.responseText.split("\n");
    document.getElementById("fe-content").innerHTML = "";
    if(document.getElementById("fei").value == ""){
        document.getElementById("fei").value += "users/" + window.location.host;
    }
    /*if(arr[0] == "desktop" && arr[1] == "documents" && arr[2] == "downloads"){
        //document.getElementById("fei").value += "users/" + window.location.host;
    }*/
    var i = 0;
    while(i < arr.length){
        if(arr[i] != ""){
            if(arr[i].includes(".")){
                document.getElementById("fe-content").innerHTML += `
                <div oncontextmenu="fefile('`+arr[i]+`', event)" onclick="highlight('file', this.style)" style="cursor: pointer; margin-left: 10px; margin-right: 10px; float: left; text-align: center; position: relative; width: 50px; height: 80px;">
                    <img style="margin-top: 5px; width: 62.5%; height: 50%;" src="public/imgs/file.png">
                    <p style="font-size: 50%; color: rgb(29, 29, 29); padding-top: 0; margin-top: 1px; text-align: center; position: relative; bottom: 0;">`+arr[i]+`</p>
                </div>`;
            }else{
                document.getElementById("fe-content").innerHTML += `
                <div oncontextmenu="fefolder('`+arr[i]+`', event)" onclick="highlight('folder', this.style)" ondblclick="change('`+arr[i]+`')" style="cursor: pointer; float: left; text-align: center; position: relative; width: 100px; height: 80px;">
                    <img style="width: 45%; height: 50%;" src="public/imgs/folder.png">
                    <p style="font-size: 50%; color: rgb(29, 29, 29); padding-top: 0; margin-top: 5px; text-align: center; position: relative; bottom: 0;">`+arr[i]+`</p>
                </div>`;
            }
        }
        i++;
    }

    if(document.getElementById("fei").value == "users/" + window.location.host){
        document.getElementById("fe-content").innerHTML += `
            <div oncontextmenu="fefolder('.trash', event)" onclick="highlight('folder', this.style)" ondblclick="change('.trash')" style="cursor: pointer; float: left; text-align: center; position: relative; width: 75px; height: 80px;">
                <img style="padding-top: 4px; width: 45px; height: 40px;" src="public/imgs/trash.png">
                <p style="font-size: 50%; color: rgb(29, 29, 29); padding-top: 0; margin-top: 5px; text-align: center; position: relative; bottom: 0;">trash</p>
            </div>`;
    }
    //document.getElementById("fe-content").innerHTML = hi;
}

//apps

function apps(app){
    if(app == "fe"){
        if(document.getElementById("fe") && document.getElementById("fe").style.display == "none"){
            document.getElementById('fe').style.display = "block";
        }else{
            if(document.getElementById("fe")){

            }else{
                document.body.innerHTML += `
                <link rel="icon" href="public/main.css">
                <link rel="icon" href="public/fe.css">
                <div id="fe" class="file-expo">
                    <div id="feheader">
                        <button onclick="fback()" style="border-radius: 5px; background-color: rgb(29, 29, 29); width: 25px; height: 25px; border: solid black 1px; color: white; font-family: ubuntu; position: absolute; right: 75%;"><</button>
                        <button onclick="fforward()" style="border-radius: 5px; background-color: rgb(29, 29, 29); width: 25px; height: 25px; border: solid black 1px; color: white; font-family: ubuntu; position: absolute; left: 75%;">></button>
                        <input id="fei" class="fei">         
                        <div id="bar__buttons">         
                            <button onclick="document.getElementById('fe').remove()" class="bar__button" id="bar__button--exit">&#10005;</button>            
                            <button onclick="document.getElementById('fe').style.display = 'none'" class="bar__button">&#9472;</button>                
                            <button onclick="inc(document.getElementById('fe'))" class="bar__button">&#9723;</button>                   
                        <p id="bar__user">Files</p>
                        </div>
                    </div>
                    <div id="fe-content"></div>
                </div>

                `;
            }
            
            if(document.getElementById("fei").value == ""){
                var xmll = new XMLHttpRequest();
                xmll.addEventListener("load", xmlr);
                xmll.open("GET", "fe.php?path=home");
                xmll.send();
            }

            $( function() {
                $( "#fe").draggable();
            });
            document.getElementById("fe").style.position = "absolute"
        }
       
    }else if(app == "ff"){
        if(document.getElementById("ff") && document.getElementById("ff").style.display == "none"){
            document.getElementById('ff').style.display = "block";
        }else{
            if(document.getElementById("ff")){

            }else{
                //https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe?hl=en
                //document.body.innerHTML += "<script src='public/style.js'></script>";
                var browser = detectBrowser()
                if(browser == "Chrome"){
                    notifacation("If you don't have this extension installed you may experience trouble with Firefox", "https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe?hl=en")
                }else if(browser == "Firefox"){
                    notifacation("If you don't have this extension installed you may experience trouble with Firefox", "https://addons.mozilla.org/en-CA/firefox/addon/ignore-x-frame-options-header/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search")
                }else{
                    notifacation("Hmm Firefox might experience some issues because of the browser you are on", "#")
                }
                document.body.innerHTML += '<script type="module" src="public/x.js"></script>'
                document.body.innerHTML += `
                    <div id="ff" class="firefox">
                        <div id="tbs" class="firefox-tabs">
                            <div id="bar__buttons">         
                                <button style="margin-top: 1px;" onclick="document.getElementById('ff').remove()" class="bar__button" id="bar__button--exit">&#10005;</button>            
                            <button style="margin-top: 1px;" onclick="document.getElementById('ff').style.display = 'none'" class="bar__button">&#9472;</button>                
                                <button style="margin-top: 1px;" onclick="inc(document.getElementById('ff'))" class="bar__button">&#9723;</button>                   
                            </div>
                            <button id="maintab" onclick="opentab('ftab', this)" class="tabs"><i onclick="this.parentElement.remove()" style="color: rgb(121, 120, 121); border-radius: 2.5px; cursor: pointer; position: absolute; width: 17px; text-align: center; top: 20%; right: 7.5%; font-family: arial;" class="refresh">&#10005;</i></button>
                            <button onclick="createtab()" id="ff-create">+</button>
                        </div>
                        <div id="ff-content" class="ff-content">
                            <div class="ff-tab" name="tabs" id="ftab">
                                <div id="ff-back">
                                    <input onkeyup="ffenter(this, 'fiframe')" onclick="this.select();" id="ff-inp" class="ff-search" placeholder="Search with google or enter address"/>
                                    <i onclick="document.getElementById('fiframe').src = document.getElementById('fiframe').src" style="color: rgb(121, 120, 121); border-radius: 2.5px; cursor: pointer; position: absolute; top: 15%; left: 8%;" class="material-icons refresh">refresh</i>
                                </div>
                                <iframe onload="document.getElementById('ff-inp').value = this.src" application="yes" is"x-frame-bypass" id="fiframe" class="fiframe" src="https://www.google.com/webhp?igu=1"></iframe>
                            </div>
                        </div>
                    </div>
                `;
                document.getElementById("maintab").click()
            }
        }

        $( function() {
            $( "#ff").draggable();
        });
        document.getElementById("ff").style.position = "absolute";
    }
}