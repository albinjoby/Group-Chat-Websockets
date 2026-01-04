import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

const socket = io("http://localhost:3000");
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

socket.on("message", (text) => {
  const el = document.createElement("li");
  el.innerHTML = text;
  list.appendChild(el);
});

function sendMessage() {
  socket.emit("message", input.value);
  input.value = "";
}

button.onclick = () => {
  if (input.value.trim()) {
    sendMessage();
  }
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
