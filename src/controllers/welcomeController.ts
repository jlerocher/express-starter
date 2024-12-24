import { Request, Response } from "express";

/**
 * Handles the request to say hello.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A promise that resolves to sending a greeting message.
 */
export const sayHello = async (req: Request, res: Response) => {
    res.send("Hello, world here! Your server is running!");
};
