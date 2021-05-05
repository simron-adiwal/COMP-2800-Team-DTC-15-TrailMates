
function openClose() {
  let style = getComputedStyle(document.getElementById("mySidenav"))
  let width = style.width;
  switch (width) {
    case "250px":
      document.getElementById("mySidenav").style.width = "0";
      break;
    case "0px":
      document.getElementById("mySidenav").style.width = "250px";
      break;
  }
};

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPes5NkunBodm_wtBsW8b-78t8jNfhsgE",
    authDomain: "trailmates-657f0.firebaseapp.com",
    projectId: "trailmates-657f0",
    storageBucket: "trailmates-657f0.appspot.com",
    messagingSenderId: "877707794753",
    appId: "1:877707794753:web:a9ee3826e467041bed69c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
