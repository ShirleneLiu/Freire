'use client';


import { repositories, contributors, fetchCommunityBySlug } from '@/app/lib/data'
import Image from 'next/image';

export default function Page({ params }: { params: { slug: string } }) {
  console.log('params:', params);

  const community = fetchCommunityBySlug(params.slug);
  if (!community) {
    return <div>Community not found</div>;
  }
  const community_id = community.id;
  // show repositories info: name and description
  const community_repositories = repositories.filter((repository) => repository.communityId === community_id);
  const community_contributors = contributors.filter((contributor) => community_repositories.map((repository) => repository.id).includes(contributor.repositoryId));

  return (
    <main className="flex-1 p-4 w-full bg-black text-white min-h-screen">
      <div className="container mx-auto">
        {/* 展示社区信息 */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{community.slug}</h1>
          <Image src={community.image_url} alt={community.slug} width={600} height={400} className="mb-4" />
          <p>{community.description}</p>
        </section>

        {/* 展示社区仓库信息 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Community Repositories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {community_repositories.map((repo, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">{repo.name}</h3>
                <p>{repo.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 展示贡献者信息 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Contributors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {contributors.map((contributor) => (
              <div key={contributor.id} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
                <Image src={contributor.avatarUrl} alt={contributor.userId} width={100} height={100} className="rounded-full mb-2" />
                <p>{contributor.userId}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}