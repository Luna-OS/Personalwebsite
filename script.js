window.addEventListener("hashchange", function() {
    var hash = window.location.hash;
    if (hash === "#seite1") {
      document.getElementById("content").innerHTML = "<h1>Seite 1 Inhalt</h1>";
    } else if (hash === "#seite2") {
      document.getElementById("content").innerHTML = "<h1>Seite 2 Inhalt</h1>";
    }
  });
  