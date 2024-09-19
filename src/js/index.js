const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);

const body = $('body');

const btnChangeTheme = $('#btn-theme');

const containerBtnsTheme = $('.container-themes');

const btnThemeDark = $('#btn-theme-dark');
const btnThemeLight = $('#btn-theme-light');

const removeClassBodyTheme = (theme) => {
    body.classList.remove('dark');
    body.classList.remove('light');
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

btnThemeDark.addEventListener('click', () => {
    removeClassBodyTheme();
    body.classList.add('dark');
});

btnThemeLight.addEventListener('click', () => {
    removeClassBodyTheme();
    body.classList.add('light');
});
