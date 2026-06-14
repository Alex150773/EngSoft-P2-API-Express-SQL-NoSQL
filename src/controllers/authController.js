const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const xss = require('xss');
const User = require('../models/sql/User');
const env = require('../config/env');

function createToken(user) {
  return jwt.sign({ id: user.id, email: user.email, role: user.role }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn
  });
}

async function register(req, res) {
  const { name, email, password, role } = req.body;
  const exists = await User.findOne({ where: { email } });
  if (exists) return res.status(409).json({ message: 'E-mail já cadastrado' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name: xss(name),
    email: xss(email),
    password: hashedPassword,
    role
  });

  return res.status(201).json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: createToken(user)
  });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(401).json({ message: 'Credenciais inválidas' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Credenciais inválidas' });

  return res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: createToken(user)
  });
}

module.exports = { register, login };
