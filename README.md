# Plan-R
## The event planning App
##### This is an app designed to allow community memvers to view, sign up for, and add events to their calenders, as well as allowing staff to create said events.
##### At the current time the app is built for android devices only, and it is reccomended to be tested on mobile devices opposed to emulators.

Instructions for local set up
With your development enviroment already set up, move into the directory in which you wish to create a local version, then run the following command:
```
git clone https://github.com/Alfie-F/Plan-R.git
```
You should then run the following to install all dependancies:
```
npm i
```
To then add the secret enviroment variables then run command:
```
echo "EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1" > .env
echo "EXPO_PUBLIC_APPWRITE_PROJECT_ID=674f4fdd002611bf192a" >> .env
```
you should then be able to run the app locally with:
```
npx expo start
```
Should you wish to download the hosted version please do so at ---
