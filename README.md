# 💬 Pro Chat Native

A **professional real-time chat application** built with **React Native**, **Expo**, and **Firebase**. Join conversations instantly with anonymous authentication and enjoy a beautiful, modern chat interface with customizable themes.

---

## ✨ Features

- **⚡ Instant Access** – Join the chat in seconds with anonymous authentication (no sign-up required)
- **🔄 Real-time Messaging** – Powered by Google Firestore for seamless instant updates
- **🎨 Custom UI Themes** – Choose from 4 beautiful background colors to personalize your experience
- **✨ Modern Design** – Glassmorphism UI with professional color palettes
- **📱 Cross-Platform** – Works on iOS, Android, and Web
- **💾 Offline Support** – Messages sync when you're back online

---

## 🚀 Getting Started (Step-by-Step)

### Prerequisites

Before you begin, make sure you have installed:

- **Node.js** (v16 or higher) – [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** – [Download here](https://git-scm.com/)

**For iOS development:**
- Xcode installed on macOS
- iOS simulator or a physical iPhone

**For Android development:**
- Android Studio installed
- Android SDK configured
- Android Emulator or a physical Android device

---

## 📋 Installation Guide

### Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/levired6/pro-chat-native.git
cd pro-chat-native
```

### Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

This will install:
- `expo` – The React Native framework
- `firebase` – Backend services for authentication and messaging
- `react-native-gifted-chat` – Beautiful chat UI components
- `react-navigation` – Navigation between screens
- And other essential dependencies

### Step 3: Firebase Configuration (Already Set Up! ✅)

Good news! The Firebase configuration is already included in the `firebaseConfig.js` file. The app uses a pre-configured Firebase project:

- **Project ID:** `lets-chat-app-5eab0`
- **Firebase Console:** [View here](https://console.firebase.google.com/project/lets-chat-app-5eab0)

**If you want to use your own Firebase project:**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use an existing one)
3. Enable **Authentication** (Anonymous Sign-in method)
4. Enable **Firestore Database** (in test mode for development)
5. Copy your Firebase config from Project Settings
6. Update the `firebaseConfig.js` file with your credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### Step 4: Start the Development Server

Run the Expo development server:

```bash
npm start
```

This will display a QR code and menu options in your terminal.

---

## 📲 Running the App

After running `npm start`, you have several options:

### Option A: Run on Web (Easiest for Testing)
Press `w` in the terminal to open the app in your default web browser.

### Option B: Run on Android
**Requirements:** Android emulator running or Android device connected via USB

Press `a` in the terminal, or manually run:
```bash
npm run android
```

### Option C: Run on iOS
**Requirements:** macOS with Xcode, or iOS simulator

Press `i` in the terminal, or manually run:
```bash
npm run ios
```

### Option D: Use Expo Go App (Mobile Devices)
1. Download **Expo Go** from [App Store](https://apps.apple.com/app/expo-go/id1054823468) or [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Open Expo Go on your device
3. Scan the QR code displayed in your terminal
4. The app will load on your device instantly!

---

## 🎯 How to Use the App

### Login Screen
1. **Enter Your Name** – Type a username you'd like to use in the chat
2. **Choose a Background Color** – Select from 4 professional color circles:
   - ⚫ **Black** – Classic and minimal
   - 🟣 **Purple** – Elegant and sophisticated
   - ⚪ **Gray** – Modern and neutral
   - 🟢 **Green** – Fresh and natural
3. **Tap "Enter Chat"** – You'll be instantly authenticated and connected

### Chat Screen
- **Send Messages** – Type your message and tap the send button
- **Real-time Updates** – See messages from other users instantly
- **Log Out** – Tap the "Log Out" button in the top-right corner to sign out

---

## 📁 Project Structure

```
pro-chat-native/
├── app/
│   ├── index.tsx          # Login screen
│   ├── chat.js            # Chat screen
│   └── _layout.tsx        # Navigation setup
├── firebaseConfig.js      # Firebase configuration
├── package.json           # Project dependencies
└── README.md              # This file
```

---

## 🔧 Available Commands

```bash
# Start the development server
npm start

# Start on specific platform
npm run android
npm run ios
npm run web

# Run linting to check code quality
npm run lint

# Reset the project (clears cache and node_modules)
npm run reset-project
```

---

## 🛠️ Troubleshooting

### "Command not found: npm"
- Make sure Node.js is installed: `node --version`
- If not, download from [nodejs.org](https://nodejs.org/)

### "Metro bundler won't start"
```bash
# Clear the cache and restart
npm start -- --clear
```

### "Module not found" errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm start
```

### "Firebase authentication failed"
- Check that your Firebase project has **Anonymous Authentication** enabled
- Verify your `firebaseConfig.js` has the correct credentials
- Make sure Firestore Database exists and is in test mode (for development)

### App won't load on physical device
- Ensure your device and computer are on the same WiFi network
- The QR code must be scanned within 5 minutes of the server starting
- Try restarting the Expo server: `npm start -- --clear`

---

## 📚 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React Native** | Cross-platform mobile development |
| **Expo** | Development framework and CLI tools |
| **Firebase** | Real-time database and authentication |
| **Firestore** | Cloud database for messages |
| **React Navigation** | In-app navigation |
| **Gifted Chat** | Beautiful chat UI components |
| **TypeScript/JavaScript** | Programming languages |

---

## 🚀 Deployment

### Deploy to Expo Managed Hosting
1. Create an Expo account at [expo.dev](https://expo.dev/)
2. Install Expo CLI: `npm install -g eas-cli`
3. Login: `eas login`
4. Build and submit: `eas build`

### Deploy to App Stores
For production deployment to Apple App Store or Google Play Store, see the [Expo Deployment Guide](https://docs.expo.dev/eas/)

---

## 🤝 Contributing

Have ideas to improve Pro Chat Native?
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 💡 Tips & Best Practices

✅ **Do:**
- Keep your Firebase credentials secure (never commit them to version control)
- Test on both iOS and Android before deployment
- Enable Firestore security rules in production
- Monitor your Firebase usage to stay within free tier limits

❌ **Don't:**
- Share your Firebase API keys publicly
- Use this app's Firebase project for production without proper security rules
- Run `npm install` inside the Expo Go app

---

## 🆘 Need Help?

- **Expo Docs:** [expo.dev/docs](https://docs.expo.dev/)
- **Firebase Docs:** [firebase.google.com/docs](https://firebase.google.com/docs)
- **React Native Docs:** [reactnative.dev](https://reactnative.dev/)
- **Create an Issue:** [GitHub Issues](https://github.com/levired6/pro-chat-native/issues)

---

## 🎉 You're All Set!

You're now ready to build and run Pro Chat Native! Start with **Step 1** above and follow along. If you get stuck, check the **Troubleshooting** section or reach out for help.

Happy chatting! 💬✨
