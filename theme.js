export function swipTheme(v) {
    const body = document.body;
    const isDarkMode = body.classList.toggle('light-theme'); // Toggle la classe 'light-theme'

    if (isDarkMode) {
        v.classList.remove('bi-sun');
        v.classList.add('bi-moon-fill');
    } else {
        v.classList.remove('bi-moon-fill');
        v.classList.add('bi-sun');
    }
}