# Plan-R
## The event planning App
##### This is an app designed to allow community members to view, sign up for, and add events to their calenders, as well as allowing staff to create said events.
##### At the current time the app is built for android devices only, and it is recommended to be tested on mobile devices opposed to emulators.

## Instructions for local set up.

With your development environment already set up and git installed to your IDE of choice, move into the directory in which you wish to create a local version of the front end, then run the following command to clone the repo locally:
```
git clone https://github.com/Alfie-F/Plan-R.git
```
You should then run the following to install all dependencies:
```
npm i
```
To then add the environment variables, run the following command:
```
echo "EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1" >> .env
echo "EXPO_PUBLIC_APPWRITE_PROJECT_ID=674f4fdd002611bf192a" >> .env
```
you should then be able to run the front end of the app locally on your machine with:
```
npx expo start
```
From here you can run the app on your android mobile device within the expo go app, by scanning the QR code, provided both devices are on the same network.

if you wish to allow users on different networks to try out the app you can run: 
```
npx expo start --tunnel
```
Should you wish to download the hosted version from expo dev please do so at (https://expo.dev/accounts/alfief/projects/plan-r/builds/022f175e-a33e-4a1e-bb30-ebac292b919e) this will allow you to launch the app in dev mode from an icon as you would any other app on your android device, provided you are either running the front end server locally or that a server is being ran with the --tunnel flag set. 

## More about the app

Backend is handled by appwrite. This means data does not require seeding and is consistent between log in events - if you register an account it will persist, as will your logged in state if you do not log out before closing the app.

Users are able to sign in, register, go to events and logout from the splash page - with sad paths for user inputs covered, providing prompts to correct them.

if you wish to log in please use one of the following:

**a@gmail.com**, 

**b@gmail.com**, 

**c@gmail.com**, 

the password for each of these being 12341234 (however should you create your own account a more secure password is recommended!)

Your are encouraged to also register your own accounts!

Please especially note that **c@gmail.com** is the admin user - as such they have the staff privileges to create events via the "Staff" tab, with sad paths handled. Please feel free to create some events of your own with this account!

Users, both admin or otherwise are then able to view a list of events in the "Events" tab, which they are able to sign up for by clicking on and then pressing the corresponding sign up button. This will add the event to the "My Events" tab, and change the button to allowing them to add the event to their calendar. On an android mobile device this will prompt the user to add the event to a calendar of their choice. **Please note this is the reason emulators are not recommended, as this prompt has known issues on some emulators**

Should the user eventually wish to log out, they may do so via the "Account" button in the header.

## Requirements
Node V21.6.1 is recommended.
