import { faker } from '@faker-js/faker';
import { Campaign, ChartData, TrafficSource, MetricCard } from '@/types/dashboard';

export const generateMetrics = (): MetricCard[] => {
  return [
    {
      id: 'revenue',
      title: 'Total Revenue',
      value: `$${faker.number.int({ min: 50000, max: 150000 }).toLocaleString()}`,
      change: faker.number.float({ min: -15, max: 25, fractionDigits: 1 }),
      changeType: Math.random() > 0.3 ? 'increase' : 'decrease',
      icon: 'DollarSign'
    },
    {
      id: 'users',
      title: 'Active Users',
      value: faker.number.int({ min: 8000, max: 25000 }).toLocaleString(),
      change: faker.number.float({ min: -10, max: 30, fractionDigits: 1 }),
      changeType: Math.random() > 0.2 ? 'increase' : 'decrease',
      icon: 'Users'
    },
    {
      id: 'conversions',
      title: 'Conversions',
      value: faker.number.int({ min: 500, max: 2000 }).toLocaleString(),
      change: faker.number.float({ min: -20, max: 40, fractionDigits: 1 }),
      changeType: Math.random() > 0.25 ? 'increase' : 'decrease',
      icon: 'Target'
    },
    {
      id: 'growth',
      title: 'Growth Rate',
      value: `${faker.number.float({ min: 5, max: 35, fractionDigits: 1 })}%`,
      change: faker.number.float({ min: -5, max: 15, fractionDigits: 1 }),
      changeType: Math.random() > 0.3 ? 'increase' : 'decrease',
      icon: 'TrendingUp'
    }
  ];
};

export const generateUserGrowthData = (): ChartData[] => {
  const data: ChartData[] = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  months.forEach(month => {
    data.push({
      name: month,
      users: faker.number.int({ min: 1000, max: 5000 }),
      growth: faker.number.int({ min: 500, max: 2000 })
    });
  });
  
  return data;
};

export const generateCampaignPerformanceData = (): ChartData[] => {
  const campaigns = ['Social Media', 'Google Ads', 'Email', 'Display', 'Video', 'Influencer'];
  
  return campaigns.map(campaign => ({
    name: campaign,
    revenue: faker.number.int({ min: 5000, max: 25000 }),
    value: faker.number.int({ min: 5000, max: 25000 })
  }));
};

export const generateTrafficSources = (): TrafficSource[] => {
  return [
    { name: 'Organic Search', value: faker.number.int({ min: 25, max: 45 }), color: '#3B82F6' },
    { name: 'Social Media', value: faker.number.int({ min: 15, max: 30 }), color: '#8B5CF6' },
    { name: 'Direct Traffic', value: faker.number.int({ min: 10, max: 25 }), color: '#10B981' },
    { name: 'Email', value: faker.number.int({ min: 5, max: 20 }), color: '#F59E0B' },
    { name: 'Paid Search', value: faker.number.int({ min: 5, max: 15 }), color: '#EF4444' }
  ];
};

export const generateCampaigns = (count: number = 20): Campaign[] => {
  return Array.from({ length: count }, () => {
    const impressions = faker.number.int({ min: 10000, max: 100000 });
    const clicks = faker.number.int({ min: 100, max: 5000 });
    
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      status: faker.helpers.arrayElement(['Active', 'Paused', 'Completed']) as Campaign['status'],
      budget: faker.number.int({ min: 1000, max: 50000 }),
      impressions,
      clicks,
      ctr: Number(((clicks / impressions) * 100).toFixed(2)),
      dateCreated: faker.date.recent({ days: 90 }).toISOString().split('T')[0]
    };
  });
};