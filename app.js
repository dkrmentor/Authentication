let signup = ()=>{
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
     
      console.log(userCredential);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + errorMessage);

      // ..
    });

}

let signin = ()=>{
    let email = document.getElementById('loginemail');
    let password = document.getElementById('loginpassword');

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
     console.log("user logged in success")
      console.log(userCredential);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + errorMessage);

      // ..
    });

}

