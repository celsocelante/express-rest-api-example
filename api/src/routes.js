import { Router } from 'express';

const routes = Router();

routes.get("/", (request, response) => {
    response.json({});
})

routes.get("/ping", (request, response) => {
    response.send("pong");
});

export default routes;