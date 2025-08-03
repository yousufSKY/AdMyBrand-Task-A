'use client';

import { Sidebar } from '@/components/dashboard/sidebar';
import { Navbar } from '@/components/dashboard/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Target, Play, Pause, Plus, BarChart3, DollarSign, MousePointer } from 'lucide-react';

const campaigns = [
  {
    id: 1,
    name: 'Summer Sale 2024',
    status: 'Active',
    budget: 15000,
    spent: 8500,
    impressions: 125000,
    clicks: 3200,
    conversions: 145,
    ctr: 2.56,
    cpc: 2.65,
    startDate: '2024-06-01',
    endDate: '2024-08-31'
  },
  {
    id: 2,
    name: 'Brand Awareness Q3',
    status: 'Active',
    budget: 25000,
    spent: 12300,
    impressions: 280000,
    clicks: 5600,
    conversions: 230,
    ctr: 2.00,
    cpc: 2.20,
    startDate: '2024-07-01',
    endDate: '2024-09-30'
  },
  {
    id: 3,
    name: 'Product Launch',
    status: 'Paused',
    budget: 10000,
    spent: 7800,
    impressions: 95000,
    clicks: 2100,
    conversions: 89,
    ctr: 2.21,
    cpc: 3.71,
    startDate: '2024-05-15',
    endDate: '2024-07-15'
  }
];

export default function CampaignsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 lg:ml-64">
        <Navbar />
        
        <main className="p-4 lg:p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Campaign Management</h1>
              <p className="text-muted-foreground">
                Monitor and optimize your advertising campaigns
              </p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Campaign
            </Button>
          </div>

          {/* Campaign Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Campaigns</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-green-500">+2 this month</p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Spend</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$28,600</div>
                <p className="text-xs text-muted-foreground">of $50,000 budget</p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. CTR</CardTitle>
                <MousePointer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.25%</div>
                <p className="text-xs text-green-500">+0.3% vs last month</p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Conversions</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">464</div>
                <p className="text-xs text-green-500">+12% vs last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Campaign List */}
          <Card>
            <CardHeader>
              <CardTitle>Active Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{campaign.name}</h3>
                          <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                            {campaign.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {campaign.startDate} - {campaign.endDate}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          {campaign.status === 'Active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <Button variant="outline" size="sm">
                          <BarChart3 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Budget Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Budget Used</span>
                        <span>${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}</span>
                      </div>
                      <Progress value={(campaign.spent / campaign.budget) * 100} className="h-2" />
                    </div>

                    {/* Campaign Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Impressions</p>
                        <p className="text-lg font-semibold">{campaign.impressions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Clicks</p>
                        <p className="text-lg font-semibold">{campaign.clicks.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">CTR</p>
                        <p className="text-lg font-semibold">{campaign.ctr}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">CPC</p>
                        <p className="text-lg font-semibold">${campaign.cpc}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Conversions</p>
                        <p className="text-lg font-semibold">{campaign.conversions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Campaign Performance Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Keywords</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['summer sale', 'discount deals', 'brand products', 'limited offer', 'new collection'].map((keyword, index) => (
                    <div key={keyword} className="flex justify-between items-center p-2 rounded hover:bg-muted/50">
                      <span className="text-sm font-medium">{keyword}</span>
                      <Badge variant="outline">{(150 - index * 20)} clicks</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">Increase Budget</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Summer Sale campaign is performing well. Consider increasing budget by 20%.</p>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-1">Optimize Keywords</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">Product Launch campaign has low CTR. Review and optimize keyword targeting.</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-1">Expand Audience</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">Brand Awareness campaign shows potential. Consider expanding target audience.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}