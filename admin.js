// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBduCdHC4gvkHgxACmezLAHZRmvf3g0ZVQ",
  authDomain: "my-project2032-1687241010726.firebaseapp.com",
  databaseURL: "https://my-project2032-1687241010726-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-project2032-1687241010726",
  storageBucket: "my-project2032-1687241010726.appspot.com",
  messagingSenderId: "191512348467",
  appId: "1:191512348467:web:c71db2b64bba1943d9e046"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const usersTableBody = document.querySelector('#usersTable tbody');

database.ref('users').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        const user = childSnapshot.val();
        const row = document.createElement('tr');

        const ipCell = document.createElement('td');
        ipCell.textContent = user.ip;
        row.appendChild(ipCell);

        const deviceCell = document.createElement('td');
        deviceCell.textContent = user.device;
        row.appendChild(deviceCell);

        const osCell = document.createElement('td');
        osCell.textContent = user.os;
        row.appendChild(osCell);

        usersTableBody.appendChild(row);
    });
});

