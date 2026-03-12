// Firebase configuration for GlowCheck
// To set up:
// 1. Go to https://console.firebase.google.com
// 2. Create a new project
// 3. Enable Authentication (Email/Password, Google)
// 4. Enable Firestore Database
// 5. Copy your config keys below

// Replace these with your actual Firebase config
// Get them from: Project Settings > Your Apps > Firebase config

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// For now, we'll use a mock auth service for the prototype
// Replace with real Firebase implementation when ready
export const useFirebase = false; // Set to true when Firebase is configured
