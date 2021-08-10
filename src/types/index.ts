export interface IUser {
  _id: string;
  names: string;
  email: string;
  password: string;
}

export interface DashboardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export interface NavbarProps {
  title: string;
  subtitle: string;
}

export interface CardProps {
  total: number;
  title: string;
  img: string;
  bgColor: string;
}
