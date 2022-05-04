
const firebaseConfig = {
      apiKey: "AIzaSyAvHNwgtOGojrDwxC5uiub_13aEZ3tadYs",
      authDomain: "i-don-t-know-the-name.firebaseapp.com",
      projectId: "i-don-t-know-the-name",
      storageBucket: "i-don-t-know-the-name.appspot.com",
      messagingSenderId: "208210644438",
      appId: "1:208210644438:web:1874bd56137c511a002877"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      //End code
      });});}
getData();
function addUser(){
      user_name = document.getElementById("User_Name").ariaValueMax;
      localStorage.setItem("User_Name", user_name);

          window.location = "kwitter_room.html";
   }