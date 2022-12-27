const switchBtn = document.querySelector('#themecheck')
const defaultTheme = window.matchMedia("(prefers-color-scheme :dark)");
let currentTheme = localStorage.getItem('theme')
switchBtn.addEventListener('change', switchTheme)

if (defaultTheme.matches) {
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#eeeeee");
        switchBtn.checked = false;
    } else if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#000000");
        switchBtn.checked = true;
    }

} else {
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#eeeeee");
        switchBtn.checked = false;
    } else if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#000000");
        switchBtn.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#000000");
        localStorage.setItem('theme', 'dark')
        console.log(localStorage.getItem('theme'));
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#eeeeee");
        localStorage.setItem('theme', 'light')
        console.log(localStorage.getItem('theme'));
    }
}