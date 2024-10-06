// data.ts
import { Community,  } from './definitions';

export const communities: Community[] = [
  {
    id: '1',
    name: 'Solar',
    image_url: '/solar.svg',
    members_count: 500,
    slug: 'solar'
  },
  {
    id: '2',
    name: '706',
    image_url: '/706.svg',
    members_count: 130000,
    slug: '706'
  },
  {
    id: '3',
    name: 'Creators',
    image_url: '/Creators.svg',
    members_count: 1300000,
    slug: 'creators'
  },
  // 添加更多社区数据
];