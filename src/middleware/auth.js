import jwt from 'jsonwebtoken';
import Unauthenticated from '../errors/unauth.js';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new Unauthenticated('Not authorized');
  }

  const token = authHeader.split(' ')[1];

  try {
    const { id, username } = jwt.verify(token, process.env.JWT_SECRET);
    res.user = { id, username };
  } catch (err) {
    throw new Unauthenticated('Not authorized. Token is invalid.');
  }

  next();
};
