document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        
    }
}



function toggleTheme() {
    var theme = document.getElementById("theme");
    if (theme.getAttribute('href') == 'css/main.css') {
        theme.setAttribute('href', 'css/dark.css');
    } else {
        theme.setAttribute('href', 'css/main.css');
    }
}