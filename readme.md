# React Native: One Time Password Authentication 🎏

This application was bootstrapped with the Expo XDE client to make development on mobile devices awesome. Instead of simulating your application in XCode, Expo provides a local URL to connect to on your phone. You can even connect to your app with a mobile barcode you can scan on your phone! 😁

If you're already familiar with React jumping over to React Native is pretty straightforward. You just change your div tags to View and p-tags to Text 😂. React Native has a pretty small environment, however, you get a multitude of native components and features packed into this library.

### ⚡️ React Native docs: https://facebook.github.io/react-native/docs/
(Just look at all those components!)

This is a simple mobile app to get me to play around with the Twilio API (text messaging service) and Firebase cloud functions. To sign in and register with this app you must first provide your mobile number. You'll receive a text message from Twilio containing a personalized code to enter and authenticate you as a user.

The cool part of using Firebase cloud functions is the ability to just skip having a server! Some advantages of having cloud functions that come to mind include:
* No server setup - serverless!
* Offload computing power from my laptop to Google's megacomputers
* Functions being saved and backed up in the cloud

Having no server and relying on cloud functions just feels... lighter... physically 😅. For smaller applications that only rely on a handful of HTTP endpoints, I think Firebase cloud functions (and Firebase the actualy cloud database) are worth trying!