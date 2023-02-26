import Express from 'express';
import { login, dashboard } from '../controllers/main.js';
import auth from '../middleware/auth.js';

const router = Express.Router();

router.route('/dashboard').get(auth, dashboard);
router.route('/login').post(login);

export default router;