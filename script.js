
    const firebaseConfig = {
      apiKey: "AIzaSyBIGxImEMAlJn_LvTD6XLs4DRAfeW6-784",
      authDomain: "user-autrhentication.firebaseapp.com"
    };
    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();

    function signup() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
          document.getElementById('status').innerText = 'Account created for: ' + user.user.email;
        })
        .catch(err => {
          document.getElementById('status').innerText = err.message;
        });
    }

    function login() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      auth.signInWithEmailAndPassword(email, password)
        .then(user => {
          document.getElementById('status').innerText = 'Logged in as: ' + user.user.email;
        })
        .catch(err => {
          document.getElementById('status').innerText = err.message;
        });
    }