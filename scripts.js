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

const keys = [
    'BIKE-3BN-23VZ-09DH-E49',
    'BIKE-3BD-2Q9J-07E5-K3Q',
    'BIKE-3AN-CB9Z-0XF2-0A1',
    'BIKE-1BD-DGKG-0FFZ-AD8',
    'BIKE-0B9-G5ZB-09DV-H50',
    'BIKE-1B1-V8VD-0XDR-5ZN',
    'BIKE-2B1-ZXGD-0XEW-T1A',
    'BIKE-2A6-71VA-07ES-H27',
    'BIKE-3AA-15FB-0VD6-858',
    'BIKE-0AP-BSB0-0DCJ-T7W',
    'BIKE-2B6-CDC5-0ZFQ-AKQ',
    'BIKE-0AP-Q1CK-0DFW-BWE',
    'BIKE-2A6-Y5GC-0ZEG-GSV',
    'BIKE-2AE-Y9RV-0FE5-CZH',
    'BIKE-1AK-6E5Y-05E1-W1F',
    'BIKE-1BZ-4JFE-0VEP-P82',
    'BIKE-1BQ-BPC1-0XFV-8EK',
    'BIKE-3AV-AA8D-0ZCZ-WK5',
    'BIKE-2AQ-HYJP-0XDW-7QM',
    'BIKE-3AV-RJ44-0BDS-FRR',
    'BIKE-3BQ-RPPT-03EN-RYH'
];

let currentIndex = 0;

// Event listener for "Get Free Key" button
document.getElementById('getKeyButton').addEventListener('click', function() {
    const freeKey = keys[currentIndex];
    document.getElementById('keyDisplay').innerText = `Your Free Key: ${freeKey}`;
    currentIndex = (currentIndex + 1) % keys.length; // Cycle through the keys
});

// Function to fetch and display user information
async function getUserInfo() {
    try {
        // Fetch IP address
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ip = data.ip;
        const device = navigator.userAgent;
        const os = navigator.platform;

        // Display user information
        document.getElementById('ipDisplay').innerText = `IP Address: ${ip}`;
        document.getElementById('deviceDisplay').innerText = `Device: ${device}`;
        document.getElementById('osDisplay').innerText = `Operating System: ${os}`;

        // Save user information to Firebase
        const userRef = database.ref('users/' + ip.replace(/\./g, '_'));
        await userRef.set({ ip, device, os });
        console.log('User information saved successfully to Firebase.');

    } catch (error) {
        console.error('Error fetching or saving user info:', error);
        // Display error to the user if necessary
        alert('There was an error fetching or saving your information. Please try again.');
    }
}

// Call the function to get user info
getUserInfo();
