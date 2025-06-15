# Project-2-werkstuk-akg
 
## Overzicht
Dit project is gebouwd met **Craft CMS** als hoofdcontentmanagementsysteem, met een lokaal ontwikkelomgeving opgezet via **Docker**, **DDEV** en **Composer**. We hebben Twig-templates gebruikt voor dynamische pagina’s, responsive design toegepast met CSS Grid en Flexbox, en minimal JavaScript voor interactieve elementen.
 
## Wat we hebben gedaan
- **Contentbeheer en CMS-setup**
  - Craft CMS ingericht als headless CMS voor contentinvoer en -beheer.
  - Database-snapshot automatisch geïmporteerd (zie “Database” hieronder).
- **Template-ontwikkeling**
  - Twig-templates voor startpagina, projectpagina, diensten, galerij, over ons en wonen.
  - Grid-indelingen en component-based structuur met custom CSS-klassen (bijv. `.twige`, `.grid.cards`).
  - Globale H2-stijldefinities en thema’s (mariahuis, sintcoleta, cultuurcolette).
- **Interactie en Responsiveness**
  - CSS media queries voor mobiele weergave.
  - Minimal JavaScript voor menu toggles en andere UI-interacties.
- **Versiebeheer en afhankelijkheden**
  - Git voor versiecontrole.
  - Composer voor PHP-packages en Craft CMS.
 
## Gebruikte Technologieën
- **Craft CMS** – contentmanagement en dynamische pagina’s.
- **Twig** – templating engine.
- **Docker** – containerisatie van webserver en database.
- **DDEV** – eenvoudig lokaal draaien en configureren van Craft CMS.
- **Composer** – dependency management.
- **HTML5 & CSS3** – structuur en styling.
- **Flexbox & CSS Grid** – layout.
- **JavaScript** – interactieve componenten.
 
## Installatie en Gebruik (Visual Studio Code)
 
### 1. Vereisten
- Docker geïnstalleerd en actief.
- DDEV geïnstalleerd.
- Composer beschikbaar.
- Visual Studio Code (of een andere IDE).
 
### 2. Project configureren
```bash
git clone https://your-repo-url.git
cd project-2-werkstuk-akg
ddev config --project-type=craftcms --docroot=web --create-docroot
```
 
### 3. DDEV starten & Dependencies installeren
```bash
ddev start
composer install
```
 
### 4. Database
- Plaats je database-snapshot (bijv. `project-2-werkstuk-akg.sql.gz`) in:
  ```
  .ddev/db_snapshots/
  ```
- DDEV importeert de snapshot automatisch bij
```bash
 ddev start
 ```
- Handmatig importeren kan ook:
  ```bash
  ddev import-db --src=.ddev/db_snapshots/project-2-werkstuk-akg.sql.gz
  ```  
 
### 5. Toegang tot de site
- **Mariahuis:**  `https://project-2-werkstuk-akg.ddev.site/`
- **Sint-coleta** : `https://project-2-werkstuk-akg.ddev.site/sint-coleta`
- **Cultuur-colette** : `https://project-2-werkstuk-akg.ddev.site/cultuur-colette`
- **Admin URL:** `https://project-2-werkstuk-akg.ddev.site/admin`
 
### 6. Handige commando’s
- **Craft-migraties draaien:**
  ```bash
ddev ssh
php craft migrate/all
exit
```  
- **Cache legen:**
  ```bash
ddev ssh
php craft clear-caches/all
exit
```  
- **Project stoppen:**
  ```bash
ddev stop