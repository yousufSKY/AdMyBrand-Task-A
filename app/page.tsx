'use client';

import { Sidebar } from '@/components/dashboard/sidebar';
import { Navbar } from '@/components/dashboard/navbar';
import { MetricCard } from '@/components/dashboard/metric-card';
import { UserGrowthChart } from '@/components/dashboard/charts/user-growth-chart';
import { CampaignPerformanceChart } from '@/components/dashboard/charts/campaign-performance-chart';
import { TrafficSourcesChart } from '@/components/dashboard/charts/traffic-sources-chart';
import { CampaignsTable } from '@/components/dashboard/campaigns-table';
import { useDashboardData } from '@/hooks/use-dashboard-data';
import { DateRange } from '@/types/dashboard';

export default function DashboardPage() {
  const {
    metrics,
    userGrowthData,
    campaignPerformanceData,
    trafficSources,
    campaigns,
    refreshData
  } = useDashboardData();

  const handleDateRangeChange = (range: DateRange) => {
    console.log('Date range changed:', range);
    // In a real app, this would filter the data based on the date range
    refreshData();
  };

  const handleExport = () => {
    // In a real app, this would export all dashboard data
    console.log('Exporting dashboard data...');
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 lg:ml-64">
        <Navbar 
          onDateRangeChange={handleDateRangeChange}
          onExport={handleExport}
        />
        
        <main className="p-4 lg:p-6 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
            <p className="text-muted-foreground">
              Track your performance metrics and gain actionable insights
            </p>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <UserGrowthChart data={userGrowthData} />
            <CampaignPerformanceChart data={campaignPerformanceData} />
            <TrafficSourcesChart data={trafficSources} />
          </div>

          {/* Campaigns Table */}
          <div className="grid grid-cols-1 gap-6">
            <CampaignsTable campaigns={campaigns} />
          </div>
        </main>
      </div>
    </div>
  );
}