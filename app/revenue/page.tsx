'use client';

import { Sidebar } from '@/components/dashboard/sidebar';
import { Navbar } from '@/components/dashboard/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Wallet, PiggyBank } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 45000, profit: 12000, expenses: 33000 },
  { month: 'Feb', revenue: 52000, profit: 15600, expenses: 36400 },
  { month: 'Mar', revenue: 48000, profit: 14400, expenses: 33600 },
  { month: 'Apr', revenue: 61000, profit: 18300, expenses: 42700 },
  { month: 'May', revenue: 55000, profit: 16500, expenses: 38500 },
  { month: 'Jun', revenue: 67000, profit: 20100, expenses: 46900 },
];

const revenueStreams = [
  { name: 'Subscriptions', value: 45, amount: 125000, growth: 12.5 },
  { name: 'One-time Sales', value: 30, amount: 85000, growth: -2.3 },
  { name: 'Advertising', value: 15, amount: 42000, growth: 8.7 },
  { name: 'Partnerships', value: 10, amount: 28000, growth: 15.2 },
];

const topProducts = [
  { name: 'Premium Plan', revenue: 45000, units: 450, growth: 15.2 },
  { name: 'Basic Plan', revenue: 28000, units: 700, growth: 8.7 },
  { name: 'Enterprise Plan', revenue: 67000, units: 89, growth: 22.1 },
  { name: 'Add-ons', revenue: 12000, units: 240, growth: -3.2 },
];

export default function RevenuePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 lg:ml-64">
        <Navbar />
        
        <main className="p-4 lg:p-6 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Revenue Analytics</h1>
            <p className="text-muted-foreground">
              Track your financial performance and revenue streams
            </p>
          </div>

          {/* Revenue Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$328,000</div>
                <p className="text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Recurring</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$125,000</div>
                <p className="text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.2% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Profit Margin</CardTitle>
                <PiggyBank className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">30.2%</div>
                <p className="text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Average Order</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$156</div>
                <p className="text-xs text-red-500 flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -1.2% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-muted-foreground" fontSize={12} />
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
                      dataKey="revenue" 
                      stroke="#3B82F6" 
                      fill="#3B82F6" 
                      fillOpacity={0.2}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="profit" 
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
                <CardTitle>Revenue vs Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-muted-foreground" fontSize={12} />
                    <YAxis className="text-muted-foreground" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px'
                      }}
                    />
                    <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="#EF4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Streams */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Streams</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {revenueStreams.map((stream) => (
                  <div key={stream.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium">{stream.name}</h4>
                        <Badge variant={stream.growth > 0 ? "default" : "secondary"}>
                          {stream.growth > 0 ? '+' : ''}{stream.growth}%
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${stream.amount.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">{stream.value}% of total</p>
                      </div>
                    </div>
                    <Progress value={stream.value} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Revenue Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={product.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.units} units sold</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${product.revenue.toLocaleString()}</p>
                        <Badge variant={product.growth > 0 ? "default" : "secondary"} className="text-xs">
                          {product.growth > 0 ? '+' : ''}{product.growth}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Monthly Target</span>
                      <span className="text-sm">$67K / $75K</span>
                    </div>
                    <Progress value={89.3} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">89.3% achieved</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Quarterly Target</span>
                      <span className="text-sm">$195K / $225K</span>
                    </div>
                    <Progress value={86.7} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">86.7% achieved</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Annual Target</span>
                      <span className="text-sm">$328K / $900K</span>
                    </div>
                    <Progress value={36.4} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">36.4% achieved</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Insights & Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Strong Growth</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Enterprise plan showing 22% growth. Consider expanding enterprise features.</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">Attention Needed</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">One-time sales declining. Review pricing strategy and promotional campaigns.</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Opportunity</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">Partnership revenue up 15%. Explore additional partnership opportunities.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}