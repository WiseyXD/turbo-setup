import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("Connected " + socket.id);

    socket.on("msg", (data) => {
        console.log(data);
        socket.emit("aryan", data);
    });
});

httpServer.listen(7000, () => console.log("WS is listening on 7000"));
