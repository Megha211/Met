# MET - WebRTC-Based Video Calling and Messaging Web App

Met is a modern web application built with the MERN stack, focusing on real-time communication through audio and video calls, messaging, and group interactions. It leverages WebRTC technology for peer-to-peer connections, ensuring a seamless and secure communication experience.

## Demo

You can access a live demo of Met [here](https://met-snowy.vercel.app/).

## Libraries Used

- **Frontend:** React, Material UI, Redux, Typescript
- **Backend:** Express.js, MongoDB, JWT for authentication, GoogleOAuth
- **Real-time Communication:** WebRTC, Socket.io, simple-peer
- **Other:** Redux for state management

## Features

- **User Authentication:** Secure user authentication and authorization.
- **Google Authentication:** Google Signin for ease of login for users.
- **CAPTCHA Verification:** During login to enhance security and prevent automated bot attacks.
- **Audio and Video Chat:** High-quality peer-to-peer audio and video calls.
- **Messaging:** Real-time messaging with message storage in the database.
- **Invitations:** Send and receive invitations for calls and chats.
- **Online Indicator:** See who's online and available for communication.
- **Typing Notifications:** Get notified when someone is typing a message.
- **Screen Sharing:** Share your screen during a call for presentations or demos.
- **Accept/Reject Calls:** Ability to accept or reject incoming calls.
- **Group Chats:** Create and manage group chats with multiple participants.
- **Friend Management:** Add or remove friends, unfriend someone if needed.
- **Met Spaces:** Host and join live spaces for discussions similar to Twitter spaces.
- **MESH Topology:** Utilizes MESH topology for Met spaces, enabling a peer-to-peer network between participants.
- **Search Functionality:** Easily find friends and groups with a dedicated search button.
- **Emoji Support**: Express yourself with emojis while chatting with friends or in group conversations.


## Installation

1. **Clone the Project:**
   ```
   git clone https://github.com/Megha211/Met.git
   ```

2. **Backend Setup:**

   - Navigate to the server directory:
     ```
     cd Met/server
     ```
   - Install server dependencies:
     ```
     npm install
     ```
   - Set up required environment variables (`MONGO_URI_DEV`, `JWT_SECRET`).
   - Start the development server with nodemon:
     ```
     npm run dev
     ```

3. **Frontend Setup:**

   - Navigate to the client directory:
     ```
     cd ../client
     ```
   - Install client dependencies:
     ```
     npm install
     ```
   - Start the React development server:
     ```
     npm run start
     ```

4. Ensure you have MongoDB installed and running on your system.

---
