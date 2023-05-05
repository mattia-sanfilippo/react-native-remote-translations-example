# react-native-remote-translations-example

An example project to show how to use remote translations in a React Native app using `react-native-localize`, `react-i18next` and other plugins.

This project uses SimpleLocalize to manage translations. You can read more about it in the [official website](https://simplelocalize.io/).

## Getting started
1. Clone the repo
2. Create a `.env` file in the root of the project and add these variables:
```
SIMPLELOCALIZE_CDN_URL=https://cdn.simplelocalize.io
SIMPLELOCALIZE_PROJECT_TOKEN=YOUR_PROJECT_TOKEN
SIMPLELOCALIZE_ENVIRONMENT=_latest
```
3. Run `yarn` to install dependencies
4. Run `npx pod-install` to install iOS dependencies
5. Run `npx react-native run-ios` or `npx react-native run-android` to start the app