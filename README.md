# Plan-R
## The event planning App
##### This is an app designed to allow community members to view, sign up for, and add events to their calenders, as well as allowing staff to create said events.
##### At the current time the app is built for android devices only, and it is reccomended to be tested on mobile devices opposed to emulators.

Instructions for local set up.

With your development enviroment already set up and git installed to your IDE of choice, move into the directory in which you wish to create a local version, then run the following command to clone the repo locally:
```
git clone https://github.com/Alfie-F/Plan-R.git
```
You should then run the following to install all dependancies:
```
npm i
```
To then add the enviroment variables, run the following command:
```
echo "EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1" >> .env
echo "EXPO_PUBLIC_APPWRITE_PROJECT_ID=674f4fdd002611bf192a" >> .env
```
you should then be able to run the front end of the app locally on your machine with:
```
npx expo start
```
From here you can run the app on your android mobile device within the expo go app, by scanning the QR code, provided both devices are on the same network.

if you wish to allow users on differnt networks to try out the app you can run: 
```
npx expo start --tunnel
```
Should you wish to download the hosted version from expo dev please do so at (https://expo.dev/accounts/alfief/projects/plan-r/builds/022f175e-a33e-4a1e-bb30-ebac292b919e) this will allow you to launch the app in dev mode from an icon as you would any other app on your android device, provided you are either running the front end server locally or that a server is being ran with the --tunnel flag set. 
