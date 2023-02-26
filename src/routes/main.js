import Express from 'express';
import { login, dashboard } from '../controllers/main.js';

const router = Express.Router();

router.route('/dashboard').get(dashboard);
router.route('/login').post(login);

export default router;