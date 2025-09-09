import AppStoreIcon from '@assets/images/apple.svg';
import GooglePlayIcon from '@assets/images/gplay.svg';

export const storeButtons = [
  {
    icon: AppStoreIcon, // передаем компонент как есть, без JSX
    storeName: 'App Store',
    url: 'https://www.apple.com/store',
  },
  {
    icon: GooglePlayIcon, // передаем компонент как есть, без JSX
    storeName: 'Google Play',
    url: 'https://play.google.com/store/games',
  },
] as const;