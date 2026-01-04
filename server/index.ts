import http from "http"
import {Server} from "socket.io"

const server = http.createServer()
const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

io.on('connection',(socket)=>{
  console.log('a user connected')
  
  socket.on('message',(message:string)=>{
    console.log(message)
    io.emit('message',message)
  })
})

server.listen(3000,()=>{
  console.log('server running on http://localhost:3000')
})