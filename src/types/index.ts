export interface IUser {
  _id: string;
  names: string;
  email: string;
  password: string;
}

export interface AuthenticationData {
  names?: string;
  email: string;
  password: string;
}

export interface TransactionI {
  amount: string;
  type: string;
  mode: string;
  note: string;
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
  bgColor: string;
}

export interface MenuLinksProps {
  name: string;
  path: string;
  icon: string;
}
