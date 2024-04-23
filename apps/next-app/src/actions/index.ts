"use server";

import prisma from "db";

export async function createMessage() {
    await prisma.message.create({
        data: {
            text: "Aryan setup the DB",
        },
    });
}
