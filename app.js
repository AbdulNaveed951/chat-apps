


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCIVdRydXpAY4PkT8-dGmEK06ir7gR0kJo",
    authDomain: "chat-app-91ffb.firebaseapp.com",
    databaseURL: "https://chat-app-91ffb.firebaseio.com",
    projectId: "chat-app-91ffb",
    storageBucket: "chat-app-91ffb.appspot.com",
    messagingSenderId: "120644273887",
    appId: "1:120644273887:web:056e56ac980cac0b280b6a",
    measurementId: "G-QZYY2GHDLW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  document.getElementById('send').addEventListener('click',function(e)
  {
    
      var u=document.getElementById('user');
      var msg=document.getElementById('msg');
      firebase.database().ref('chat app').push({
          user:u.value,
          txt:msg.value
      })
      msg.value='';

  })
var msgs=document.getElementById('lcd');
firebase.database().ref('chat app').on('value',function(snp)
{
  msgs.innerHTML='';
    snp.forEach(function(e)
    {
        var x=e.val();
        msgs.innerHTML+=`<p>${x.user}:${x.txt}</p>`;
    })
})

  const login = ()=>
{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log("user===>".user);
      }).catch(function(error) {
          console.log("error".message)
        
      });
}