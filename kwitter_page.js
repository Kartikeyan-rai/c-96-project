// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBbM7c0oKYvYvN-nU1QvCN-EXzpI_NouBY",
      authDomain: "kwitter-dedaa.firebaseapp.com",
      databaseURL: "https://kwitter-dedaa-default-rtdb.firebaseio.com",
      projectId: "kwitter-dedaa",
      storageBucket: "kwitter-dedaa.appspot.com",
      messagingSenderId: "1081876824583",
      appId: "1:1081876824583:web:9efc2c53ec25258b96e0a2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var user_name=localStorage.getItem("user_name");
    var room_name=localStorage.getItem("Room Name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['Name'];
message=message_data['Message'];
like=message_data['like'];
//End code
      } });  }); }
getData();
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room Name");
      window.location="index.html";
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({Name:user_name,Message:msg,like:0});
      document.getElementsById("msg").value="";
}