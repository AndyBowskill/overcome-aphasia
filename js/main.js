function toggleTheme() {
    var theme = document.getElementById("theme");
    if (theme.getAttribute('href') == 'css/light.min.css') {
        theme.setAttribute('href', 'css/dark.min.css');
    } else {
        theme.setAttribute('href', 'css/light.min.css');
    }
}