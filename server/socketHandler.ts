import { Socket } from "socket.io";

const clients:Socket[] = [];

export function addClient(client:Socket) {
  clients.push(client);
}

export function removeClient(client:Socket) {
  const index = clients.indexOf(client);
  if (index !== -1) {
    clients.splice(index, 1);
  }
}

export function broadcast(message:string) {
  clients.forEach(client => {
    client.send(message);
  });
}

export function handleConnection(socket:Socket) {
  addClient(socket);
  socket.on("disconnect", () => {
    removeClient(socket);
  });
}