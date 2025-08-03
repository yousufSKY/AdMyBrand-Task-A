export interface MetricCard {
  id: string;
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  loading?: boolean;
}

export interface ChartData {
  name: string;
  value: number;
  growth?: number;
  revenue?: number;
  users?: number;
  date?: string;
}

export interface Campaign {
  id: string;
  name: string;
  status: 'Active' | 'Paused' | 'Completed';
  budget: number;
  impressions: number;
  clicks: number;
  ctr: number;
  dateCreated: string;
}

export interface TrafficSource {
  name: string;
  value: number;
  color: string;
}

export interface DateRange {
  from: Date;
  to: Date;
}