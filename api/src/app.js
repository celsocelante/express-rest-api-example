import express from 'express';
import body_parser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import path from 'path';

// Basic setup
const app = express();
app.disable('x-powered-by');
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Main routes
app.use("/", routes);

// Catch 404 erros
app.use((request, response, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

// Problem handler
app.use((error, request, response, next) => {
    response
        .status(error.status || 500)
        .send(error.message);
});

export default app;