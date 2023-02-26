import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';

import CustomAPIError from '../errors/custom-error.js';

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError('Please provide username and password', 400);
  }

  const id = uuid();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  console.log(token);

  res.status(200).json({ msg: 'Login successful', token });
};

export const dashboard = async (req, res) => {
  const number = Math.floor(Math.random() * 100);

  res.status(200).json({
    message: 'Dashboard',
    secret: 'This is a secret',
    number,
  });
};
