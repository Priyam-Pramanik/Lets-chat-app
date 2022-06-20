const firebaseConfig = {
    apiKey: "AIzaSyD1i6DmqIjvGGqBmlBC3W0J4dXBuP3C-DQ",
    authDomain: "letschatapp-db.firebaseapp.com",
    databaseURL: "https://letschatapp-db-default-rtdb.firebaseio.com",
    projectId: "letschatapp-db",
    storageBucket: "letschatapp-db.appspot.com",
    messagingSenderId: "774658590990",
    appId: "1:774658590990:web:a22cce309a70b1cb546f5f"
  };
  
 
  const app = initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("add_room").value;
      fire.database().ref("/").child(room_name).update({
            purpose : "Adding New Room" 
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_message.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name = " + Room_names);
row = "<div class = 'room_name' id =  "+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;    
//End code
});});}
getData();
function redirectToRoomName(Name){
      console.log(Name);
      localStorage.setItem("room_name",Name);
      window.location = "kwitter_page.html";
      }