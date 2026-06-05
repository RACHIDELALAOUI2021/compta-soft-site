import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Pool } from "pg";

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;
const connectionString = process.env.DATABASE_URL;

if (!email || !password) {
  console.error("Définissez ADMIN_EMAIL et ADMIN_PASSWORD dans .env");
  process.exit(1);
}

if (!connectionString) {
  console.error("Définissez DATABASE_URL dans .env");
  process.exit(1);
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const passwordHash = await bcrypt.hash(password, 12);

const admin = await prisma.adminUser.upsert({
  where: { email: email.toLowerCase() },
  update: { passwordHash },
  create: { email: email.toLowerCase(), passwordHash },
});

console.log(`Admin prêt : ${admin.email}`);
await prisma.$disconnect();
await pool.end();
