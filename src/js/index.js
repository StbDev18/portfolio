const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);

const body = $('body');

const btnChangeTheme = $('#btn-theme');

const containerBtnsTheme = $('.container-themes');

const btnThemeBlack = $('#btn-theme-black');
const btnThemeWhite = $('#btn-theme-white');
const btnThemeDark = $('#btn-theme-dark');
const btnThemeLight = $('#btn-theme-light');
const btnThemePrimary = $('#btn-theme-primary');

const removeClassBodyTheme = (theme) => {
    body.classList.remove('black');
    body.classList.remove('white');
    body.classList.remove('dark');
    body.classList.remove('light');
    body.classList.remove('primary');
}

/* Function close popup buttons theme */
document.addEventListener('click', (event) => {
    if (!containerBtnsTheme.contains(event.target) && !btnChangeTheme.contains(event.target)) containerBtnsTheme.classList.remove('visible');
});

btnChangeTheme.addEventListener('click', () => {
    if (containerBtnsTheme.classList.contains('visible')) {
        containerBtnsTheme.classList.remove('visible');
    } else {
        containerBtnsTheme.classList.add('visible');
    }
});

btnThemeBlack.addEventListener('click', () => {
    removeClassBodyTheme();
    body.classList.add('black');
});

btnThemeWhite.addEventListener('click', () => {
    removeClassBodyTheme();
    body.classList.add('white');
});

btnThemeDark.addEventListener('click', () => {
    removeClassBodyTheme();
    body.classList.add('dark');
});

btnThemeLight.addEventListener('click', () => {
    removeClassBodyTheme();
    body.classList.add('light');
});

btnThemePrimary.addEventListener('click', () => {
    removeClassBodyTheme();
    body.classList.add('primary');
});

