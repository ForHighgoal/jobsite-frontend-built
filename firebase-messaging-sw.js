importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDV7zs7Ee8M_TFC8xOb_qBJPRZKS0mLwTw",
  authDomain: "tempsemploy.firebaseapp.com",
  projectId: "tempsemploy",
  storageBucket: "tempsemploy.appspot.com",
  messagingSenderId: "873044861644",
  appId: "1:873044861644:web:24f1d88f4ee7bd562dd869",
  measurementId: "G-P3BC3MKTWW"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});