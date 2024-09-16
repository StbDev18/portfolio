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

/* Experience data */

const dataPoints = [
    {
        key: 'sinapsis',
        state: true
    },
    {
        key: 'ing-apro',
        state: false
    },
    {
        key: 'q10',
        state: false
    },
    {
        key: 'corprevenir',
        state: false
    },
]

const buildPoints = () => {
    const $timeline = $('#timeline');
    for (let i = 0; i < dataPoints.length; i++) {
        const element = dataPoints[i];
        let point = document.createElement('a');
        let icon = document.createElement('em');
        point.setAttribute('id', 'experience-' + (dataPoints.length - i));
        point.classList.add('point', 'display-flex', 'align-items-center', 'justify-content-center');
        icon.classList.add('icon', 'icon-free-history');
        if (element.state) point.classList.add("active");
        point.appendChild(icon);
        $timeline.appendChild(point);

        point.addEventListener('click', (e) => {
            if (!e.target.classList.contains('active')) {
                //1. Seteamos de nuevo el estado de los items
                dataPoints.map(p => p.state = false);
                //2. Obtenemos los elemenots DOM de los items
                const points = $$('.point');
                //3. Eliminamos la clase active de todos los items
                points.forEach(p => p.classList.remove('active'));
                //4. Seteamos en true el estado del item al cual le dimos click
                dataPoints[i].state = true;
                //5. Agregamos la clase active al elemento al cual le dimos click
                point.classList.add('active');

                setExperience(element.key);
            }
        })
    }

}

buildPoints();

const experience = {
    company: 'sinapsis',
    "sinapsis": {
        name: 'Sinapsis Innovation',
        activity: 'desarrollo de herramientas y servicios tecnológicos.',
        role: 'Desarrollador frontend semi senior',
        duration: '3 años (06/06/2021 – actualmente)',
        stack: ['html', 'css', 'angular'],
        tasks: 'Desarrollo frontend con Angular, desarrollo de REST API con NodeJS y administración de base de datos con MongoDB.'
    },
    "ing-apro": {
        name: 'Ingenieria apropiada',
        activity: 'Dedicada a brindar servicios y herramientas tecnológicas para el control negocios.',
        role: 'Desarrollador mobile',
        duration: '2 meses (26/04/2021 – 01/06/2021)',
        stack: ['html', 'css', 'react-native'],
        tasks: 'Desarrollo de aplicación móvil con consumo de servicios expuestos por el CRM (Vtiger) para la administración de negocios.'
    },
    "q10": {
        name: 'Q10 Soluciones',
        activity: 'Proveedores de Software académico, administrativo y de educación virtual para instituciones de educación en Colombia.',
        role: 'Desarrollador web',
        duration: '3 meses (17/11/2020 – 16/02/2021)',
        stack: ['html', 'css', 'csharp'],
        tasks: 'Soporte y apoyo en el desarrollo de la aplicación proveedora del servicio para instituciones académicas.'
    },
    "corprevenir": {
        name: 'Corprevenir',
        activity: 'Empresa dedicada a la elaboración de planes de riesgos laborales',
        role: 'Analista desarrollador fullstack',
        duration: '2 años (18/10/2019 – 10/11/2020)',
        stack: ['html', 'css', 'angular', 'node', 'mongodb'],
        tasks: 'Desarrollo de aplicacion web con el stack MEAN. Frontend con Angular, REST API con NodeJS y administración de base de datos MongoDB.'
    }
}

const setExperience = (company) => {
    const $company = $('#company');
    $company.innerHTML = '';
    //1. Construir el contenedor de  rol y la duracion
    let containerRoleDuration = document.createElement('div');
    //2. Agregar clases al contenedor de rol y duracion
    containerRoleDuration.classList.add('role-duration', 'display-flex', 'flex-direction-column', 'justify-content-center');
    //3. Creamos los elementos DOM para los textos de rol y duracion
    let role = document.createElement('p');
    let duration = document.createElement('p');
    //4. Agregamos las clases al rol y duracion
    role.classList.add('role');
    duration.classList.add('duration');
    //5. Inyectamos el contenido del rol y duracion
    role.innerText = experience[company].role;
    duration.innerText = experience[company].duration;
    //6. Agregar el rol y la duracion al contenedor
    containerRoleDuration.append(role, duration);
    //7. Agregar el contenedor a la compañia
    $company.appendChild(containerRoleDuration);

    //8. Construir el contenedor de  rol y la duracion
    let containerDescriptión = document.createElement('div');
    //9. Agregar clases al contenedor de descripcion
    containerDescriptión.classList.add('description', 'display-flex', 'flex-direction-column', 'justify-content-center', 'gap-3', 'padding-block-3');

    //10. Creamos el nombre de la compañia
    let nameCompany = document.createElement('h2');
    //11. Inyectamos el nombre de la compañia
    nameCompany.innerText = experience[company].name;

    containerDescriptión.append(nameCompany);


    //12. Creamos los elementos de la actividad realizada en la compañia
    let activity = document.createElement('div');
    let activityTitle = document.createElement('h3');
    let activityInfo = document.createElement('p');
    //13. Inyectamos el contenido de los elementos de la actividad realizada en la compañia
    activityTitle.innerText = 'Actividad';
    activityInfo.innerText = experience[company].activity;
    //14. Agregamos el contenido a la actividad
    activity.append(activityTitle, activityInfo);

    //15. Creamos los elementos de la responsabilidad en la compañia
    let responsabilities = document.createElement('div');
    let responsabilityTitle = document.createElement('h3');
    let responsabilyInfo = document.createElement('p');
    //16. Inyectamos el contenido de los elementos de la responsabilidad en la compañia
    responsabilityTitle.innerText = 'Responsabilidades';
    responsabilyInfo.innerText = experience[company].tasks;
    //17. Agregamos el contenido a la responsabilidad
    responsabilities.append(responsabilityTitle, responsabilyInfo);

    //28. Agregamos los contenedores al de descripción
    containerDescriptión.append(activity, responsabilities);

    //22. Agregamos el contenedor de descipción a la compañia
    $company.appendChild(containerDescriptión);

    //18. Creamos el stack usando en la compañia
    let containerStack = document.createElement('div');
    //19. Agregar clases al contenedor de stack
    containerStack.classList.add('stack-tech', 'display-flex', 'flex-wrap', 'align-items-center', 'justify-content-center', 'gap-4', 'p-4');
    //20. Creamos los iconos de cada tecnologia
    for (let i = 0; i < experience[company].stack.length; i++) {
        const element = experience[company].stack[i];
        let imgIcon = document.createElement('img');
        imgIcon.setAttribute('width', 35);
        imgIcon.setAttribute('src', './assets/svgs/icons-tech/' + element + '.svg');
        imgIcon.setAttribute('alt', 'Icono ' + element);
        //21. Agregamos los iconos al contenedor
        containerStack.appendChild(imgIcon);
    }

    //22. Agregamos el contenedor de descipción a la compañia
    $company.appendChild(containerStack);
}

setExperience('sinapsis');
