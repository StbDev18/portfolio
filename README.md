# Portafolio Web - Sebastian Tobon Berrio

## Despliegue:

- **Installing Node**

```bash
nvm install 12.x.x && nvm use 12.x.x
node -v
npm -v
```

**Installing SWA-CLI**
```bash
npm install -g @azure/static-web-apps-cli
```

**Deploy to Azure SWA**

**Login AZ**

- Use Service Pincipal
```bash
az login --service-principal --tenant <Tenant-ID> --username <Client-ID> --password <Client-secret>
```
- Use Microsoft Account
```bash
az login
```

**Get Deploy Keys**
```bash
az staticwebapp secrets list --name <Static-WebApp-Name> --query "properties.apiKey"
```

**Deploy to Static WebApp**
```bash
swa deploy -O "<build-or-dist-path>" --env "Production" -R <Resource-Group-Name> -n <Static-WebApp-Name> --deployment-token "<Token-Obtained>"
```

**Example**
```bash
swa deploy -O "dist\portfolio\browser" --env "Production" -R rg-stb-portafolio -n swa-stb-portafolio --deployment-token "91fd2cc8ab14ac9c9e00689463164a8e999c14965cdecdaf9ae37832a54853075-c32ede7b-bedb-4ba1-80b4-2d2c4403c1cd00f340333"
```
**Deployment complete!**

### Comandos Git Alias - (.gitconfig):

- **pulldata** pulldata = "!git stash && git checkout development && git pull && git rebasedev".

  > Uso: pulldata se encarga de poner los cambios en memoria y rebasar la rama local con development
  
- **rebasedev** rebasedev = "!git checkout sebasdev && git rebase development".
  > Uso: rebasedev se encarga de cambiar de rama y realizar el rebase de sebasdev con development

- **pushrepos** pushrepos = "!git pushdevops && git pushgithub".
  > Uso: pushrepos se encarga de realizar el push en ambos repositorios

- **pushdevops** pushdevops = "!git seturlorigindevops && git checkout development && git merge-no-edit sebasdev && git push && git rebasedev".
  > Uso: pushdevops se encarga de definir el origin del repositorio de DevOps, cambiar a rama development, realizar el merge con sebasdev, pushear los cambios y volver a la rama local

- **pushgithub** pushgithub = "!git seturlorigingithub && git checkout development && git merge-no-edit sebasdev && git push && git seturlorigindevops && git rebasedev".
  > Uso: pushgithub se encarga de definir el origin del repositorio de GitHub, cambiar a rama development, realizar el merge con sebasdev, pushear los cambios y volver a la rama local

- **seturlorigingithub** seturlorigingithub = "!git remote set-url origin https://github.com/StbDev18/portfolio.git".
  > Uso: seturlorigingithub se encarga de setear el origen del repositio de DevOps

- **seturlorigindevops** seturlorigindevops = "!git remote set-url origin https://sebtbdev@dev.azure.com/sebtbdev/WEB-APP-PORTFOLIO/_git/WEB-APP-PORTFOLIO".
  > Uso: seturlorigingithub se encarga de setear el origen del repositio de GitHub

- **merge-no-edit** merge-no-edit = "!git merge --no-ff "$1" --no-edit".
  > Uso: merge-no-edit se encarga de configurar git para que no sea obligación el mensaje que pide el editor vim, cuando se realiza un merge


## Características:

_Lista de las principales características del proyecto._

## Tecnologías utilizadas:

_Lista de las tecnologías utilizadas en el proyecto, incluyendo los lenguajes de programación, los marcos de trabajo, las herramientas y las bibliotecas._

Este proyecto fue generado con:

1. Vanilla JavaScript - HTML - CSS

Librerias:

## Contribución:

_Instrucciones sobre cómo contribuir al proyecto._

## Autores:

_Lista de los autores del proyecto y sus roles._

## Licencia:

_Información sobre la licencia del proyecto._

Información de contacto para preguntas o problemas relacionados con el proyecto.
