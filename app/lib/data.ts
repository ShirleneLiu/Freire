// data.ts
import { Community, Repository } from './definitions';

export const communities: Community[] = [
  {
    id: '1',
    name: 'Solar',
    image_url: '/solar.svg',
    members_count: 500,
    slug: 'solar',
    description: 'A community of developers building the future of energy'
  },
  {
    id: '2',
    name: '706',
    image_url: '/706.svg',
    members_count: 130000,
    slug: '706',
    description: 'A community of developers building the future of finance'
  },
  {
    id: '3',
    name: 'Creators',
    image_url: '/Creators.svg',
    members_count: 1300000,
    slug: 'creators',
    description: 'A community of creators building the future of work'
  },
  // 添加更多社区数据
];

// fetch community data by slug
export const fetchCommunityBySlug = (slug: string) => {
  return communities.find((community) => community.slug === slug);
};


export const repositories: Repository[] = [{
  id: '1',
  communityId: '3',
  name: 'CreatorsDao',
  description: 'A community of creators building the future of work',
},]


export const contributors = [
  {
    id: '1',
    userId: 'DaviRain-Su',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/53282030?v=4',
  },
  {
    id: '2',
    userId: 'v1xingyue',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/974169?v=4',
  },
  {
    id: '3',
    userId: 'Manuel-yang',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/66017597?v=4',
  },
  {
    id: '4',
    userId: 'yanboishere',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/76860915?v=4',
  },
  {
    id: '5',
    userId: 'yct21',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/3829004?v=4',
  },
  {
    id: '6',
    userId: 'jamesishandsome',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/49660809?v=4',
  },
  {
    id: '7',
    userId: 'bonnie0519',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/130346219?v=4',
  },
  {
    id: '8',
    userId: 'liushooter',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1235106?v=4',
  },
  {
    id: '9',
    userId: 'Whitehare2023',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/124434634?v=4',
  },
  {
    id: '10',
    userId: 'ShirleneLiu',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/35536320?v=4',
  },
  {
    id: '11',
    userId: 'Demian101',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/33189338?v=4',
  },
  {
    id: '12',
    userId: 'vladilen11',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/125375292?v=4',
  },
  {
    id: '13',
    userId: 'shiyivei',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/83023417?v=4',
  },
  {
    id: '14',
    userId: 'geometryolife',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/54882546?v=4',
  },
  {
    id: '15',
    userId: 'fyang1024',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/20808865?v=4',
  },
  {
    id: '16',
    userId: 'derick6',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/41363046?v=4',
  },
  {
    id: '17',
    userId: 'yifei99',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/49421799?v=4',
  },
  {
    id: '18',
    userId: 'miles-six',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/66052478?v=4',
  },
  {
    id: '19',
    userId: 'qijinzing',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/57713193?v=4',
  },
  {
    id: '20',
    userId: 'dajuguan',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/13568446?v=4',
  },
  {
    id: '21',
    userId: 'Einstellung',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26652483?v=4',
  },
  {
    id: '22',
    userId: 'luckyyang',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1963646?v=4',
  },
  {
    id: '23',
    userId: 'hyd628',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1781613?v=4',
  },
  {
    id: '24',
    userId: 'RandyPen',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/57551060?v=4',
  },
  {
    id: '25',
    userId: 'chrisyy2003',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/63803385?v=4',
  },
  {
    id: '26',
    userId: 'wrx1234',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/56150104?v=4',
  },
  {
    id: '27',
    userId: 'uvd',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/10650592?v=4',
  },
  {
    id: '28',
    userId: 'bartosz-lipinski',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/264380?v=4',
  },
  {
    id: '29',
    userId: 'DonnySolana',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/79116664?v=4',
  },
  {
    id: '30',
    userId: 'mordonez-me',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/2242042?v=4',
  },
  {
    id: '31',
    userId: 'macalinao',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/401263?v=4',
  },
  {
    id: '32',
    userId: 'Arrowana',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/8245419?v=4',
  },
  {
    id: '33',
    userId: 'joncinque',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/934662?v=4',
  },
  {
    id: '34',
    userId: 'rmshea',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/8948187?v=4',
  },
  {
    id: '35',
    userId: 'tina1998612',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/19768276?v=4',
  },
  {
    id: '36',
    userId: 'YTW7',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/91966435?v=4',
  },
  {
    id: '37',
    userId: 'ronnyhaase',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/714368?v=4',
  },
  {
    id: '38',
    userId: 'johnnieskywalker',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/6871923?v=4',
  },
  {
    id: '39',
    userId: 'johnrees',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/601961?v=4',
  },
  {
    id: '40',
    userId: 'steveluscher',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/13243?v=4',
  },
  {
    id: '41',
    userId: 'mwrites',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/20499416?v=4',
  },
  {
    id: '42',
    userId: 'josip-volarevic',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/34980162?v=4',
  },
  {
    id: '43',
    userId: 'dependabot[bot]',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/in/29110?v=4',
  },
  {
    id: '44',
    userId: 'Tidelaw',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/116292851?v=4',
  },
  {
    id: '45',
    userId: 'AlexMGN',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/25293823?v=4',
  },
  {
    id: '46',
    userId: 'max-block',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/40041609?v=4',
  },
  {
    id: '47',
    userId: 'kevinrodriguez-io',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/6248571?v=4',
  },
  {
    id: '48',
    userId: 'jacobcreech',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/82475023?v=4',
  },
  {
    id: '49',
    userId: 'HaresMahmood',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/14112766?v=4',
  },
  {
    id: '50',
    userId: 'halaprix',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/6533433?v=4',
  },
  {
    id: '51',
    userId: 'GabeDottl',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/3946760?v=4',
  },
  {
    id: '52',
    userId: 'ebramanti',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1921464?v=4',
  },
  {
    id: '53',
    userId: 'Morboz',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/24228755?v=4',
  },
  {
    id: '54',
    userId: 'birchwork',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/143273008?v=4',
  },
  {
    id: '55',
    userId: 'kaichen',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/4048?v=4',
  },
  {
    id: '56',
    userId: 'skdonepudi',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26078630?v=4',
  },
  {
    id: '57',
    userId: 'wufen771',
    repositoryId: '1',
    avatarUrl: 'https://avatars.githubusercontent.com/u/75476866?v=4',
  },
];