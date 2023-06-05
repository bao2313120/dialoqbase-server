import { FastifySchema } from "fastify";

export const createBotSchema: FastifySchema = {
    body: {
        type: "object",
        required: ["content", "type"],
        properties: {
            content: {
                type: "string",
            },
            type: {
                type: "string",
                enum: ["text", "website"],
            },
            name: {
                type: "string",
            },
        },
    }
}


export const getBotByIdSchema: FastifySchema = {
    params: {
        type: "object",
        required: ["id"],
        properties: {
            id: {
                type: "string",
            },
        },
    },
}


export const addNewSourceByIdSchema: FastifySchema = {
    params: {
        type: "object",
        required: ["id"],
        properties: {
            id: {
                type: "string",
            },
        },
    },
    body: {
        type: "object",
        required: ["content", "type"],
        properties: {
            content: {
                type: "string",
            },
            type: {
                type: "string",
                enum: ["text", "website"],
            },
        },
    }
}


export const updateBotByIdSchema: FastifySchema = {
    params: {
        type: "object",
        required: ["id"],
        properties: {
            id: {
                type: "string",
            },
        },
    },
    body: {
        type: "object",
        required: ["name"],
        properties: {
            name: {
                type: "string",
            },
        },
    }
}