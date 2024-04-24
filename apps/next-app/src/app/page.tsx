"use client";

import { CounterButton, Link } from "@repo/ui";
import useSocket from "../lib/hooks/useSocket";
import { useEffect, useState } from "react";
import prisma from "db";
import { createMessage } from "../actions";
// export const metadata = {
//     title: "Store | Kitchen Sink",
// };

export default function Store(): JSX.Element {
    const [message, setMessage] = useState<string>("");
    const socket = useSocket();

    socket.on("connect", () => {
        console.log(socket.id); // This should log the same socket ID on every render

        socket.on("aryan", (data) => {
            console.log("Resp from server" + data);
        });
    });

    // Null day

    async function handleClick(e: React.SyntheticEvent) {
        e.preventDefault();
        socket.emit("msg", message);
        createMessage();
    }

    return (
        <div className="container">
            Heelo
            <form onSubmit={handleClick}>
                <input
                    type="text"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Click me</button>
            </form>
        </div>
    );
}
