/**
 * Web chat
 */

if (location.protocol == "https:") {
    var dplat = "https://cita.logo-net.co.uk/Delivery/DBURLssl.php";
} else {
    var dplat = "http://cita.logo-net.co.uk/Delivery/DBURL.php";
}

var strPURL = parent.document.URL;
strPURL = strPURL.replace(/&/g, "^");
strPURL = strPURL.toLowerCase();
strPURL = strPURL.replace(/script/g, "HACK");
strPURL = strPURL.replace(/</g, "HACKONE");
strPURL = strPURL.replace(/>/g, "HACKTWO");
strPURL = strPURL.replace(/%3c/g, "HACKONE");
strPURL = strPURL.replace(/%3e/g, "HACKTWO");
var T = new Date();
var cMS = T.getTime();
document.write("<scr" + "ipt type='text/javascript' src='" + dplat);
document.write("?SDTID=158");
document.write('&PURL=' + strPURL);
document.write('&CMS=' + cMS);
document.write("'></scr" + "ipt>");
