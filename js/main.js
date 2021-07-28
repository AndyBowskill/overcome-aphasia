const toggleTheme = () => {
    const theme = document.getElementById("theme");
    const lightTheme = "css/light.min.css";
    const darkTheme = "css/dark.min.css";
    
    const selectedTheme = theme.getAttribute('href') === lightTheme ? darkTheme : lightTheme;
    theme.setAttribute('href', selectedTheme); 
}