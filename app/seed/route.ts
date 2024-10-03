import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, communities } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  // drop table if exists
  await client.sql` DROP TABLE IF EXISTS ct_users`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS ct_users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO ct_users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}


async function seedCommunities() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`DROP TABLE IF EXISTS ct_communities`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS ct_communities (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image_url TEXT NOT NULL,
      members_count INT NOT NULL DEFAULT 0
    );
  `;
  console.log('Communities table created');

  const insertedCommunities = await Promise.all(
    communities.map(
      (community) => client.sql`
        INSERT INTO ct_communities (name, image_url, members_count)
        VALUES (${community.name}, ${community.image_url}, ${community.members_count})
        ON CONFLICT(id) DO NOTHING;
  `,
    ),
  );

  return insertedCommunities;
}


export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    console.log('Users seeded');
    await seedCommunities();
    console.log('Communities seeded');
    await client.sql`COMMIT`;
    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    //log the error
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
