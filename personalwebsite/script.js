// Überprüfe, ob ein Hash in der URL vorhanden ist
if (window.location.hash) {
    // Extrahiere den Hash-Wert aus der URL
    var hash = window.location.hash.substring(1);

    // Überprüfe, ob der Hash mit "personalwebsite" übereinstimmt
    if (hash === "personalwebsite") {
        // Ändere den Hash-Wert auf den gewünschten Wert
        window.location.hash = "personalwebsitejoa";
    }
}