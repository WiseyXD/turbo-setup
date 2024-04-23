import { Server } from "socket.io";

const io = new Server({
    /* options */
});

io.on("connection", (socket) => {
    console.log(socket.id);
});

console.log("Heelo");

io.listen(7000);
