---

## ⚙️ Tech Stack

- **Bun** – Runtime for the server  
- **Socket.IO** – Real-time communication  
- **TypeScript** – Server-side typing  
- **HTML / JavaScript** – Client-side UI and logic  

---

## 🚀 How It Works (High Level)

1. The **server** runs on port `3000` using Bun.
2. Clients load the frontend (`index.html` + `app.js`) via a simple HTTP server.
3. Each browser connection gets a unique `socket.id`.
4. When a client sends a message:
   - The server attaches the sender’s socket ID.
   - The message is broadcast to all connected clients.
5. On the client:
   - Messages sent by the current socket align **right**.
   - Messages from other sockets align **left**.

---

## 🖥️ Prerequisites

Make sure you have the following installed:

- **Bun**  
  https://bun.sh  

- **Python 3** (only for serving the frontend)  
  https://www.python.org  

---

## ▶️ How to Run the Project

```bash
cd server
bun index.ts

cd app
python3 -m http.server 5500