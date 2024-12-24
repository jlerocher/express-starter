import express from "express";
import expressWinston from "express-winston";
import logger from "./config/logger";
import routes from "./routes";

const app = express();

// Middleware pour les logs des requêtes HTTP
app.use(
    expressWinston.logger({
        winstonInstance: logger,
        meta: true,
        msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
        expressFormat: true,
        colorize: true,
    }),
);

app.use(routes);

// Middleware pour les logs des erreurs
app.use(
    expressWinston.errorLogger({
        winstonInstance: logger,
    }),
);

export default app;
