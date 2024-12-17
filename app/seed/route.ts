// import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
// import { invoices, customers, revenue, users } from '../lib/placeholder-data';

// const client = await db.connect();

// async function seedUsers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL,
//       role TEXT NOT NULL,
//       create_date DATE NOT NULL,
//       update_date DATE NULL,
//     );
//   `;
// }

// async function seedBranches() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS branches (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       province VARCHAR(255) NOT NULL,
//       city VARCHAR(255) NOT NULL,
//       place VARCHAR(255) NOT NULL,
//       create_date DATE NOT NULL,
//       update_date DATE NULL,
//     );
//   `;
// }

// async function seedCCTV() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS cctv (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       link VARCHAR(255) NOT NULL,
//       location_id VARCHAR(255) NOT NULL,
//       create_date DATE NOT NULL,
//       update_date DATE NULL,
//     );
//   `;
// }

// async function seedDownload() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS download (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       link VARCHAR(255) NOT NULL,
//       date VARCHAR(255) NOT NULL,
//       length VARCHAR(255) NOT NULL,
//       create_date DATE NOT NULL,
//       update_date DATE NULL,
//     );
//   `;
// }

export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  // try {
  //   await client.sql`BEGIN`;
  //   await seedUsers();
  //   await seedBranches();
  //   await seedCCTV();
  //   await seedDownload();
  //   await client.sql`COMMIT`;

  //   return Response.json({ message: 'Database seeded successfully' });
  // } catch (error) {
  //   await client.sql`ROLLBACK`;
  //   return Response.json({ error }, { status: 500 });
  // }
}
