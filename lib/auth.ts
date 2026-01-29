import crypto from 'crypto';

// Simulação de banco de dados em memória (em produção usar banco real)
interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  paymentStatus: 'pending' | 'completed';
  purchaseDate?: string;
  accessLevel: 'free' | 'premium';
}

// Simulando um banco de dados
let users: User[] = [
  {
    id: '1',
    email: 'demo@example.com',
    password: hashPassword('123456'),
    name: 'Usuário Demo',
    paymentStatus: 'completed',
    purchaseDate: new Date().toISOString(),
    accessLevel: 'premium'
  }
];

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

export function registerUser(email: string, password: string, name: string) {
  if (users.find(u => u.email === email)) {
    throw new Error('Email já registrado');
  }

  const newUser: User = {
    id: crypto.randomBytes(8).toString('hex'),
    email,
    password: hashPassword(password),
    name,
    paymentStatus: 'pending',
    accessLevel: 'free'
  };

  users.push(newUser);
  return { id: newUser.id, email: newUser.email, name: newUser.name };
}

export function authenticateUser(email: string, password: string) {
  const user = users.find(u => u.email === email && u.password === hashPassword(password));
  
  if (!user) {
    throw new Error('Email ou senha inválidos');
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    accessLevel: user.accessLevel,
    paymentStatus: user.paymentStatus
  };
}

export function getUserById(id: string) {
  const user = users.find(u => u.id === id);
  if (!user) return null;

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    accessLevel: user.accessLevel,
    paymentStatus: user.paymentStatus,
    purchaseDate: user.purchaseDate
  };
}

export function updatePaymentStatus(id: string, status: 'pending' | 'completed') {
  const user = users.find(u => u.id === id);
  if (user) {
    user.paymentStatus = status;
    if (status === 'completed') {
      user.accessLevel = 'premium';
      user.purchaseDate = new Date().toISOString();
    }
  }
}
