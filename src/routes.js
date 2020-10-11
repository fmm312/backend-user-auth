import { Router, Routes } from 'express';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import checkCredentials from './middlewares/checkCredentials';

const routes = new Router();

routes.post('/auth', AuthController.store);

routes.post('/users', UserController.store);

routes.use(checkCredentials);
routes.get('/users', UserController.show);
routes.put('/users', UserController.update);

export default routes;
