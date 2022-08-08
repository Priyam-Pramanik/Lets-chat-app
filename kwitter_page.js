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

     user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
      
      function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name: user_name,
              message: msg,
              likes: 0
        });
        document.getElementById("msg").value = "";

  }

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";


}
