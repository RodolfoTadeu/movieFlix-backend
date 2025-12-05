# Backend — Movies Portfolio


## Setup

1. Instale dependências:
npm install

2. Gere client do Prisma + migrate:
npx prisma generate
npx prisma migrate dev --name init

3. Rodar em dev:
npm run dev

Endpoints principais:
- POST /auth/register { email, password }
- POST /auth/login { email, password }