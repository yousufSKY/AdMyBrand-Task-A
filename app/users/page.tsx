'use client';

import { Sidebar } from '@/components/dashboard/sidebar';
import { Navbar } from '@/components/dashboard/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, UserPlus, Search, Filter, Download, Globe, Smartphone, Monitor } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const userSegments = [
  { name: 'New Users', value: 35, color: '#3B82F6' },
  { name: 'Returning Users', value: 45, color: '#10B981' },
  { name: 'Premium Users', value: 20, color: '#8B5CF6' }
];

const userActivity = [
  { month: 'Jan', newUsers: 1200, activeUsers: 3400 },
  { month: 'Feb', newUsers: 1100, activeUsers: 3200 },
  { month: 'Mar', newUsers: 1400, activeUsers: 3800 },
  { month: 'Apr', newUsers: 1300, activeUsers: 3600 },
  { month: 'May', newUsers: 1600, activeUsers: 4200 },
  { month: 'Jun', newUsers: 1800, activeUsers: 4500 }
];

const recentUsers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'Active',
    joinDate: '2024-01-15',
    lastActive: '2 hours ago',
    plan: 'Premium',
    location: 'New York, US'
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.c@example.com',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'Active',
    joinDate: '2024-02-03',
    lastActive: '1 day ago',
    plan: 'Free',
    location: 'San Francisco, US'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'Inactive',
    joinDate: '2024-01-28',
    lastActive: '1 week ago',
    plan: 'Basic',
    location: 'London, UK'
  }
];

export default function UsersPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 lg:ml-64">
        <Navbar />
        
        <main className="p-4 lg:p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
              <p className="text-muted-foreground">
                Manage and analyze your user base and engagement
              </p>
            </div>
            <Button className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Invite Users
            </Button>
          </div>

          {/* User Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24,531</div>
                <p className="text-xs text-green-500">+12.5% from last month</p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18,234</div>
                <p className="text-xs text-green-500">+8.2% from last month</p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">New Users</CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,543</div>
                <p className="text-xs text-green-500">+15.3% from last month</p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Retention Rate</CardTitle>
                <Monitor className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">74.2%</div>
                <p className="text-xs text-green-500">+2.1% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Segments</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userSegments}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {userSegments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-4 mt-4">
                  {userSegments.map((segment) => (
                    <div key={segment.name} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }}></div>
                      <span className="text-sm">{segment.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={userActivity}>
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
                    <Bar dataKey="newUsers" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="activeUsers" fill="#10B981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* User List */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle>Recent Users</CardTitle>
                <div className="flex gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:flex-none">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search users..." className="pl-10 w-full sm:w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user.name}</h4>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-xs text-muted-foreground">{user.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                          {user.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{user.lastActive}</p>
                      </div>
                      <Badge variant="outline">{user.plan}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Device Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-4 w-4" />
                      <span className="text-sm">Desktop</span>
                    </div>
                    <span className="text-sm font-medium">58.3%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4" />
                      <span className="text-sm">Mobile</span>
                    </div>
                    <span className="text-sm font-medium">35.7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-4 w-4" />
                      <span className="text-sm">Tablet</span>
                    </div>
                    <span className="text-sm font-medium">6.0%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['United States', 'United Kingdom', 'Canada', 'Germany', 'Australia'].map((country, index) => (
                    <div key={country} className="flex justify-between items-center">
                      <span className="text-sm">{country}</span>
                      <span className="text-sm font-medium">{(30 - index * 5)}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Daily Active Users</span>
                    <span className="text-sm font-medium">12,543</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Weekly Active Users</span>
                    <span className="text-sm font-medium">18,234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Monthly Active Users</span>
                    <span className="text-sm font-medium">24,531</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg. Session Duration</span>
                    <span className="text-sm font-medium">4m 32s</span>
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