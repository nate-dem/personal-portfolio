import net from 'net';
import handleRequest from './handleRequest.js';

const server = net.createServer(socket => {
  socket.on("data", data => {
    try {
      const response = handleRequest(data);
      socket.write(response, err => {
        if (err) {
          console.error("Socket write error:", err.message);
        }
        socket.end();
      });
    } catch (err) {
      console.error("Error handling request:", err.message);
      socket.end();
    }
  });

  socket.on("error", err => {
    console.error("Socket error:", err.message);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
