import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "change_me";

export async function registerUser(data: {
  email?: string;
  password?: string;
}) {
  const email = data.email?.toLowerCase().trim();
  const password = data.password;

  if (!email || !password)
    throw { status: 400, message: "Email e senha são obrigatórios" };

  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) throw { status: 400, message: "Email já cadastrado" };

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({ data: { email, password: hashed } });

  return { id: user.id, email: user.email };
}

export async function loginUser(data: { email?: string; password?: string }) {
  const email = data.email?.toLowerCase().trim();
  const password = data.password;

  if (!email || !password) throw new Error("Email e senha são obrigatórios");

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Usuário não encontrado");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Senha incorreta");

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return { token, user: { id: user.id, email: user.email } };
}
