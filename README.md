# FEIB SSO Platform Project Usage

---

## Project Stack

- Nx workspace
- Next.js
  - Version 13, without experimental features)
- React.js
  - Version 18
- Material UI
  - Version 5
- Emotion
  - For Material UI and theme customization
- TSS-react
  - For Material UI and component styling
- Axios
- Zustand
  - For shared state management, since this is not a massive project, using redux or RTK may be overkilled
- React Query
  - For optimization of data fetching, revalidating and caching
- React Hook Form
  - For form's utility functions
  - Reserve the extensibility of the systems complexity to accommodate more management functions
- Zod
  - For form validation, works well with TypeScript

* Storybook
  - For UI library and shared layout testing and documenting
* Cypress
  - For e2e test (in the later phase of the project, maybe Jan. 2023)
* Jest
  - Preserve the configuration if there are needs to write unit tests

---

## Project Structure

_專案架構與資料夾內容規劃說明如下：_

### apps

- sso-admin
  - SSO 權限管理後台
  - Next.js project
  * Will be built as static webpage, build with the following command:
    ```shell
    yarn nx run sso-admin:export
    ```
  * Run dev server with the following command:
    ```shell
    yarn nx run sso-admin:serve
    ```

* sso-portal
  - SSO 權限系統
  - Next.js project
  - Will be built as static webpage, build with the following command:
    ```shell
    yarn nx run sso-portal:export
    ```
  * Run dev server with the following command:
    ```shell
    yarn nx run sso-portal:serve
    ```

### dist

**Built projects, deployable files**

### libs

- common-ui

  - 共用元件庫
  - React component library
  - Contains all the basic components and custom MUI components

  * Add new component in common-ui library with the following command:
    ```shell
    yarn nx g @nrwl/react:component [component name] --project=common-ui --export=true
    ```
  * Run the storybook dev server with the following command:
    ```shell
    yarn nx run common-ui:storybook [--port=PORT]
    ```

- common-layout
  - 共用 layout
  - Next.js component library
  * Contains all the common layouts appear in multiple pages
  * Add new layout component in common-layout library with the following command:
    ```shell
    yarn nx g @nrwl/next:component [layout name] --project=common-layout --export=true
    ```
  * Run the storybook dev server with the following command:
    ```shell
    yarn nx run common-layout:storybook [--port=PORT]
    ```

* common-page

  - 共用頁面
  - Next.js component library
  - Contains all the common pages appear in both sso-portal and sso-admin apps
  - Since most of the pages are very similar in sso-portal and sso-admin, and the differences of the functionality are determined by authorization. Therefore, collecting all common pages in the common-page library, and use them in both apps

  * Add new page component in common-page library with the following command:
    ```shell
    yarn nx g @nrwl/next:component [page name] --project=common-page --export=true
    ```
  * Run the storybook dev server with the following command:
    ```shell
    yarn nx run common-page:storybook [--port=PORT]
    ```

* theme

  - MUI custom theme configuration and other style relative constants

* types
  - Contains all the shared types through all the component library and apps
* shared
  **contains all the shared utility functions, assets and constants**
  - <strong style="background-color: lightcyan; display: inline-block;">api</strong><br /> Contains the axios configuration, custom fetcher function and all the api services
  * <strong style="background-color: lightcyan; display: inline-block;">assets</strong><br />> Contains all the static files that should be shared through out all the libraries and apps
  * <strong style="background-color: lightcyan; display: inline-block;">enum</strong><br /> Contains all the enum and constants that should be shared through out all the libraries and apps
  * <strong style="background-color: lightcyan; display: inline-block;">store</strong><br /> Contains all the state management and configuration that should be shared through out all libraries and apps
  * <strong style="background-color: lightcyan; display: inline-block;">routes</strong><br /> Contains all the routes name in both sso-portal and sso-admin
* mock-data
  - Contains the json-server configuration and all the mock data generation functions
  - Active the mocking json server with the following command:
    (will build the mock server first than serve it.)
    ```shell
    yarn nx run mock-data:serve
    ```
    <strong>(if there is any update in mock-data project, we should stop the mock server and start it again to serve the new data.)</strong>
