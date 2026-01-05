import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

const socket = io("http://localhost:3000");
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

socket.on("message", ({ text, senderId}) => {
  const el = document.createElement("li");
  el.style.listStyleType = 'none'
  el.innerHTML = text;
  
  if(senderId === socket.id){
    el.classList = 'me'
  }else{
    el.className = 'others'
  }
  
  list.appendChild(el);
});

function sendMessage() {
  if(!input.value.trim()) return
  socket.emit("message", input.value);
  input.value = "";
}

button.onclick = sendMessage 

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
