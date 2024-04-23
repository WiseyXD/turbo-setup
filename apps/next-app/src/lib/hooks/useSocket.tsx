import React from "react";
import { io } from "socket.io-client";

export default function useSocket() {
    const socket = io("http://localhost:7000");
    return socket;
}
