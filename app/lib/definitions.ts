// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Community = {
  id: string;
  name: string;
  image_url: string;
  members_count: number;
  slug: string;
};


export type Repository = {
  id: string;
  communityId: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  owner: User;
};

export type Contributor = {
  id: string;
  userId: string;
  repositoryId: string;
  contributions: number;
  avatarUrl: string;
};