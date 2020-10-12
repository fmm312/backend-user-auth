import { Router, Routes } from 'express';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import RecoveryController from './controllers/RecoveryController';
import checkCredentials from './middlewares/checkCredentials';

const routes = new Router();

routes.post('/auth', AuthController.store);
routes.post('/users', UserController.store);
routes.post('/recovery', RecoveryController.store);
routes.put('/recovery', RecoveryController.update);

routes.use(checkCredentials);
routes.get('/users', UserController.show);
routes.put('/users', UserController.update);

export default routes;
