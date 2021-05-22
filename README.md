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

### /src/MainPage.js

Main page of application. It shows sessions that user is participating and newly created sessions.
