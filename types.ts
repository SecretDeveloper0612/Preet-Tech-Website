
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}
