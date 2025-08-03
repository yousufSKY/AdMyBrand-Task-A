'use client';

import { Sidebar } from '@/components/dashboard/sidebar';
import { Navbar } from '@/components/dashboard/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Users, Eye, MousePointer, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const analyticsData = [
  { name: 'Jan', pageViews: 4000, sessions: 2400, bounceRate: 45 },
  { name: 'Feb', pageViews: 3000, sessions: 1398, bounceRate: 42 },
  { name: 'Mar', pageViews: 2000, sessions: 9800, bounceRate: 38 },
  { name: 'Apr', pageViews: 2780, sessions: 3908, bounceRate: 41 },
  { name: 'May', pageViews: 1890, sessions: 4800, bounceRate: 35 },
  { name: 'Jun', pageViews: 2390, sessions: 3800, bounceRate: 39 },
];

const topPages = [
  { page: '/home', views: 12543, change: 12.5 },
  { page: '/products', views: 8932, change: -3.2 },
  { page: '/about', views: 6721, change: 8.7 },
  { page: '/contact', views: 4532, change: 15.3 },
  { page: '/blog', views: 3421, change: -1.8 },
];

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 lg:ml-64">
        <Navbar />
        
        <main className="p-4 lg:p-6 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
            <p className="text-muted-foreground">
              Deep dive into your website performance and user behavior
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Page Views</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231</div>
                <p className="text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Sessions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28,543</div>
                <p className="text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.2% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Bounce Rate</CardTitle>
                <MousePointer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">38.2%</div>
                <p className="text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  -2.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Session</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2m 34s</div>
                <p className="text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +5.7% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Website Traffic Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-muted-foreground" fontSize={12} />
                    <YAxis className="text-muted-foreground" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="pageViews" 
                      stroke="#3B82F6" 
                      fill="#3B82F6" 
                      fillOpacity={0.2}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="sessions" 
                      stroke="#10B981" 
                      fill="#10B981" 
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Performing Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPages.map((page, index) => (
                    <div key={page.page} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{page.page}</p>
                          <p className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</p>
                        </div>
                      </div>
                      <Badge variant={page.change > 0 ? "default" : "secondary"}>
                        {page.change > 0 ? '+' : ''}{page.change}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Analytics Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Device Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Desktop</span>
                    <span className="text-sm font-medium">65.2%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '65.2%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Mobile</span>
                    <span className="text-sm font-medium">28.7%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '28.7%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Tablet</span>
                    <span className="text-sm font-medium">6.1%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '6.1%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['United States', 'United Kingdom', 'Canada', 'Germany', 'France'].map((country, index) => (
                    <div key={country} className="flex justify-between items-center">
                      <span className="text-sm">{country}</span>
                      <span className="text-sm font-medium">{(25 - index * 4).toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real-time Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Active Users</span>
                    <Badge variant="default">1,234</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Page Views (last hour)</span>
                    <Badge variant="secondary">5,678</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">New Sessions</span>
                    <Badge variant="outline">892</Badge>
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