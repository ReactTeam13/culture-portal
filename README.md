## Evaluation

### Min scope - **50**
- [x] **10** Main page + page with a list of authors + author's page (only pages with content without widgets);
- [x] **10** Page with team members + page with worklog
- [x] **10** Page with list of authors contains search widget;
- [x] **20** Portal has two languages;


### Normal scope - **140**
- [x] **20** Portal has page with styleguide;
- [x] **10** Mobile version is okey
- [x] **10** Ipad/tablet version is okey
- [x] **10** Author's page contains timeline;
- [x] **10** Author's page contains video overlay;
- [x] **20** Author's page contains photo gallery;
- [x] **10** Author's page contains map (geowidget);
- [x] **from 0 to 20** Design (typography, icons, colors, links + buttons + input are styled)
- [x] **20** Material-ui / bootstrap is used
- [x] **10** Portal has third language;

### Extra scope - **70**
- [x] **10** Confidence of the project presentation;
- [x] **10** Project is made using gatsbyjs;
- [x] **10** Contentful / netlify cms is used for content management
- [x] **20** Animations / special effects like paralax 
- [x] **up to 20** Outstanding design;
- [x] **20** Storybook/styleguidist/other react styleguide tool usage for the page with styles

Mark calculation : 10 + 10 + 10 + 20 + 20 + 10 + 10 + 10 + 10 + 20 + 10 + 20 + 20 + 10 + 10 + 10 + 10 + 20 + 20 + 20  
Total - **280**

## Worklog

*Anasatsia*

| time spent | feature |
|-------------|-------------|
| 4h | Data collecting. Create view prototype of app(main page). Design |
| 1h | Translate data |
| 2.5h | Investigate parallax library, prepare paralax block pictures |
| 5.5h | Create author page (figma) layout, implement of main page parallax block |
| 4h | Work with timeline block, table with author works, video, map block |
| 5h | Styleguide: page logo, colors, fonts |

*Artsiom*

| time spent | feature |
|-------------|-------------|
| 4h | Infrastructure. Establish local environment |
| 4h | Add Material UI, migrate implemented components to gatsby environment |
| 1.5h | Investigate storybook, which addon we can use to represent typography and etc. Fix storybook |
| 1.5h | Storybook info-addon, storybook decorator and documentation. |
| 3h | Implement Logo, Header components. |
| 2h | Implement Search Component. |
| 2h | Search Component, refactoring. |
| 2h | Storybook filling. |
| 2h | storybook filling, code refactoring, solving issues with SB config. |

*Maryna*

| time spent | feature |
|-------------|-------------|
| 0.2h | Structure team worklog table |
| 2h | Data collecting |
| 2h | Add visualisation of components to Storybook |
| 2.5h | Architect Block component. |
| 2h | Button component. |
| 2h | Translate data. |
| 3h | Main page block, Architect block, Button style and position. |
| 3.5h | Worklog page, responsive table. |
| 4h | Block with Difficulties at Worklog Component, translation of block. |
| 2h | Worklog data update, translation of updates. |

*Anton*

| time spent | feature |
|-------------|-------------|
| 0.2h | Research gatsbyjs and contentful. |
| 2h | Migration on gatsby. |
| 2h | Language controls, internationalization. |
| 2.5h | Integration with contentful. |
| 2h | Apply translation to footer and header. |
| 2h | Translation main page, translation team page. |

*Ksenia*

| time spent | feature |
|-------------|-------------|
| 3.5h | Collect data, split tasks, CMS research. |
| 4.5h | Build Team, Link, TeamAvatar components. Collect team data, translate, structurize |
| 5h | Translate, add architects data. Footer layout, footer data, data translation |
| 7h | Team page: layout, fix responsive style, add parallax team photo block, add title, translations, change contribution for each member. |
| 8h | Creating two parallax components, add on page. |
| 3.5h | Worklog data to object, add worklog translation. Add worklog table. |
| 3.5h | Self-evaluation with checkboxes and list of all requirements for Worklog Components. |
| 3h | Worklog layout. |

*Irina*

| time spent | feature |
|-------------|-------------|
| 3h | Project structure. |
| 2h | Add list of works |
| 2h | Add modal video |
| 2h | Add search panel. |
| 4h | Translation of interface and author data. |


## How to start
npm install

- npm run build - production build
- npm run start - development mode
- npm run format - format the code
- npm run lint - show linter errors
- npm run lint:fix - fix all possible linter errors
- npm run storybook - open storybook
