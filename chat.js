// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyD8iDh2l8yY8F5TDKdUao1Ih6OiPTdJHYk",
    authDomain: "chat-room-e6045.firebaseapp.com",
    projectId: "chat-room-e6045",
    storageBucket: "chat-room-e6045.appspot.com",
    messagingSenderId: "122807895376",
    appId: "1:122807895376:web:1e46bfab02b449fb785855",
    measurementId: "G-8T9YTCX77G"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



