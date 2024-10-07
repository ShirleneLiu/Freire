'use client';


import { repositories, contributors, fetchCommunityBySlug } from '@/app/lib/data'
import Image from 'next/image';
import Link from 'next/link';

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
  const client_id = process.env.GITHUB_OAUTH_CLIENT_ID;
  // const redirect_uri = process.env.GITHUB_OAUTH_REDIRECT_URI;
  const redirect_uri = typeof window !== 'undefined' ? window.location.href : '';
  console.log('redirect_uri:', redirect_uri);

  return (
    <main className="flex-1 p-4 w-full bg-black text-white min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* 左侧部分 */}
        <div className="w-full md:w-2/3 pr-4">
          {/* 展示社区信息 */}
          <section className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{community.slug}</h1>
            <Image src={community.image_url} alt={community.slug} width={300} height={200} className="mb-4" />
            <p>{community.description}</p>
          </section>

          {/* 展示社区仓库信息 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Community Repositories</h2>
            <div className="grid grid-cols-1 gap-4">
              {community_repositories.map((repo, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold">{repo.name}</h3>
                  <p>{repo.description}</p>
                </div>
              ))}
              <div className="mt-4">
                <Link
                  href={`https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=user`}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 inline-block">
                  Verify
                </Link>
              </div>
            </div>

          </section>
        </div>
        {/* 右侧部分 */}
        <div className="w-full md:w-1/3 pl-4">
          {/* 展示贡献者信息 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contributors</h2>
            <div className="flex flex-col gap-4">
              {community_contributors.map((contributor) => (
                <div key={contributor.id} className="flex items-center bg-gray-800 p-4 rounded-lg">
                  <Image src={contributor.avatarUrl} alt={contributor.userId} width={50} height={50} className="rounded-full mr-4" />
                  <p>{contributor.userId}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}