
if (window.location.hash) {
    var hash = window.location.hash.substring(1);
    if (hash === "personalwebsite") {  
        window.location.hash = "personalwebsitejoa";
    } else if (hash === "personalwebsitejoa") {
        window.location.hash = "personalwebsite";
    }
}