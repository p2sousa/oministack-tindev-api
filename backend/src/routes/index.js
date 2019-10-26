import { Router } from 'express';
import WelcomeRouter from './welcome/index';
import DevRouter from './devs/index';

const routes = Router();

WelcomeRouter(routes);
DevRouter(routes);

export default routes;
