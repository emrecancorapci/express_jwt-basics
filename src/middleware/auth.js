import jwt from 'jsonwebtoken';
import CustomAPIError from '../errors/custom-error.js';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new CustomAPIError('Not authorized', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const { id, username } = jwt.verify(token, process.env.JWT_SECRET);
    res.user = { id, username };
  } catch (err) {
    throw new CustomAPIError('Not authorized. Token is invalid.', 401);
  }

  next();
};
