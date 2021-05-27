# HCI DP 4

### Team twenty-four

Jinwoo Lee, Geonhee Kang, Hwang Youngzu, Lee Sanghyun

## Live demo URL

https://hci-bookie.firebaseapp.com/

### How to use it

- First you have to sign up. Click `sign up` button at the banner. We provide Google and GitHub OAuth.
- You can see specific description of session if you click session card at the main page.
  - You can join the session at the session detail page.
- You can create your own debate with `Open Debate` button at the banner or My debates tab at the main page.
- You can read how other users are thinking. Click `share board` button at session detail pages.
- You can see other people's reading history. Click user icons where it exist.

## Core dependencies

- @material-ui
- axios
- dotenv
- firebase
- react
- styled-components

## Files description

### /src/index.js

Entry point of application

### /src/App.js

Checks whether user logged in and shows components

### /src/router.js

Main router of application. shows banner and pages depend on path

### /src/pages/MainPage.js

Main page of application. It shows sessions that user is participating and newly created sessions.

### /src/pages/CreateSession.js, /src/pages/SessionDetail.js

Pages related task 1, which is

> Create your own debate session with brief introduction and some details

### /src/pages/BookshelfMain.js, /src/pages/BookshelfDetail.js

Pages related task 2, which is

> Find the favorite book that a debate-mate picked and how the user think about books.(Out of session)

### /src/pages/AddEssay.js, /src/pages/ShareboardOngoing.js

Pages related task 3, which is

> See how other people are preparing current debate and prepare debate like they do
