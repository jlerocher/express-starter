import { Request, Response } from "express";
import { sayHello } from "../controllers/welcomeController";

describe("sayHello", () => {
    it("should send a greeting message", async () => {
        const req = {} as Request;
        const res = {
            send: jest.fn(),
        } as unknown as Response;

        await sayHello(req, res);

        expect(res.send).toHaveBeenCalledWith(
            "Hello, world here! Your server is running!",
        );
    });
});
