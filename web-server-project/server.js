import net from 'net';
import handleRequest from './handleRequest.js';

const server = net.createServer(socket => {
  socket.on("data", data => {
    const response = handleRequest(data);
    socket.write(response);
    socket.end();
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
