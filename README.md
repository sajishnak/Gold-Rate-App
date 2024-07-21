# Degital Gold Wallet

---

# Local development

These instructions should get you set up ready to work on this application

## Setting up a development environment

Refer to [React Native environment setup](https://reactnative.dev/docs/environment-setup) to make sure everything is up and running.
Follow the `React Native CLI Quickstart` section as we don't support Expo managed flow.

> You'll need MacOS to run the iOS app.

#### Minimum requirements

- **Node.js**: ^18

## Settingup .env

- Create a file named with .env with following values

```
EXPO_PUBLIC_API_URL=''
EXPO_PUBLIC_API_KEY=''
```

## Running the iOS app

- To install the iOS dependencies, run: `npm install && npx pod-install`
- To run a on a **Development Simulator**: `npm run ios`
- Changes applied to Javascript will be applied automatically, any changes to native code will require a recompile

## Running the Android app

- To install the Android dependencies, run: `npm install`
- To run a on a **Development Emulator**: `npm run android`
- Changes applied to Javascript will be applied automatically, any changes to native code will require a recompile

```

```
