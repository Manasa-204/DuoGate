export interface College {
  name: string;
  state: string;
  short: string;
}

export interface PrimaryUser {
  name: string;
  email: string;
  phone: string;
  college: string;
  branch: string;
}

export interface PartnerUser {
  name: string;
  phone: string;
  domain: string;
}

export interface LeaderboardItem {
  rank: number;
  college: string;
  state: string;
  count: number;
  target: number;
  batch: string;
}

export interface RegistrationStreamItem {
  names: string;
  college: string;
  time: string;
  state: string;
  duo: boolean;
}

export interface VivaCard {
  id: number;
  category: string;
  q: string;
  a: string;
}

export interface TimelineStep {
  min: string;
  title: string;
  desc: string;
}

export interface ToastNotificationData {
  text: string;
  time: string;
}

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export type VaultTab = 'resume' | 'viva' | 'arch' | 'curriculum';

export type FunnelStep = 1 | 2 | 3;

export type StateFilter = 'All' | 'Uttar Pradesh' | 'Karnataka' | 'Telangana & AP' | 'Tamil Nadu' | 'Maharashtra';
