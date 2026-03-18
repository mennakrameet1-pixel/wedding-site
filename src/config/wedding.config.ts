import { WeddingConfigType } from "@/interfaces/config";

export const weddingConfig: WeddingConfigType = {
  people: {
    bride: { firstName: 'سماسيمو', lastName: '' },
    groom: { firstName: 'ميدو', lastName: '' },
  },
  date: {
    date: '2026-06-15T21:30:00',
    time: '9:30 PM',
  },
  location: {
    title: 'قاعة السرايا',
    address: 'دمياط الجديدة',
    link: 'https://maps.google.com',
    latLng: '31.4395,31.6508'
  }
};
