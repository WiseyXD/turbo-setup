"use client";

import { CounterButton, Link } from "@repo/ui";
import useSocket from "../lib/hooks/useSocket";

// export const metadata = {
//     title: "Store | Kitchen Sink",
// };

export default function Store(): JSX.Element {
    const socket = useSocket();
    socket.on("connect", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
    return <div className="container">Heelo</div>;
}
