'use client';


import { Community } from '@/app/lib/definitions';
import Link from 'next/link';
import Image from 'next/image';

type CommunityGridProps = {
  communities: Community[];
};

const CommunityGrid: React.FC<CommunityGridProps> = ({ communities }) => {
  const formatNumber = (number: number) => {
    return new Intl.NumberFormat('en-US').format(number);
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Communities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {communities.map((community) => (
          <div key={community.slug} className="p-4 border rounded-lg shadow-md">
            <Image
              src={community.image_url}
              alt={community.name}
              className="w-32 h-32 object-cover rounded-full mx-auto"
              width={128}
              height={128}
            />
            <p className="mt-4 text-center text-xl font-semibold">
              {community.name}
            </p>
            <p className="mt-2 text-center text-gray-600">
            Members: {formatNumber(community.members_count)}
            </p>
            <div className="mt-4 text-center">
              <Link href={`/communities/${community.slug}`} className="inline-block px-4 py-2 border border-gray-700 text-gray-700 rounded-full hover:bg-gray-100">
                Verify
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityGrid;