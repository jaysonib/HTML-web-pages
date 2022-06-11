
var a = 0;
function deleteit(b) {
    document.getElementById("c" + b + "").outerHTML = '';
}

function saveit() {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var hour = d.getHours();
    var min = d.getMinutes();
    document.getElementById('d3').outerHTML += " <div class='card-2' id='c" + a + "' ><img src='pin.jpg' style='padding:0px; height:35px; width:35px;' />your " + a + " note is:    <textarea ></textarea> <p  style='font-size:9px;  padding-top:-40px; '> <img src='delete11.jpg' onclick='  deleteit(" + a + ")' style='height:30px; width:30px;'/> " + day + " / " + month + "/" + year + " " + hour + " : " + min + "</p> </div>";
}