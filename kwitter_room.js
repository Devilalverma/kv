var firebaseConfig = {
  apiKey: "AIzaSyB62Tk6l6FCcD8kaTs9AV1MvJUxYOxoGgU",
  authDomain: "medichatapp-707a6.firebaseapp.com",
  databaseURL: "https://medichatapp-707a6-default-rtdb.firebaseio.com",
  projectId: "medichatapp-707a6",
  storageBucket: "medichatapp-707a6.appspot.com",
  messagingSenderId: "28006247447",
  appId: "1:28006247447:web:a5484a7dd75e434094c052",
  measurementId: "G-KBNRSHYVBB"
};
    function addRoom(){
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}
