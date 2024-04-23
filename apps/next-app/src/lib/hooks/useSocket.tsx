"use client";
import React, { useMemo } from "react";
import { io } from "socket.io-client";

export default function useSocket() {
    const userId = 0;
    const socket = useMemo(() => io("http://localhost:7000"), [userId]);
    return socket;
}
