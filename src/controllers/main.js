import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';

import { BadRequest } from '../errors/index.js';

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest('Please provide username and password');
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
  const { user } = res;

  return res.status(200).json({
    msg: `Hello ${user.username}!`,
    secret: `Your secret number is ${number}`,
  });
};
