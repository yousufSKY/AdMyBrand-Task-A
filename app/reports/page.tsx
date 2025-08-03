'use client';

import { Sidebar } from '@/components/dashboard/sidebar';
import { Navbar } from '@/components/dashboard/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FileText, Download, Calendar, Filter, Search, TrendingUp, BarChart3, PieChart } from 'lucide-react';

const reports = [
  {
    id: 1,
    name: 'Monthly Performance Report',
    description: 'Comprehensive overview of monthly metrics and KPIs',
    type: 'Performance',
    lastGenerated: '2024-01-15',
    status: 'Ready',
    size: '2.4 MB',
    format: 'PDF'
  },
  {
    id: 2,
    name: 'User Engagement Analysis',
    description: 'Detailed analysis of user behavior and engagement patterns',
    type: 'Analytics',
    lastGenerated: '2024-01-14',
    status: 'Ready',
    size: '1.8 MB',
    format: 'Excel'
  },
  {
    id: 3,
    name: 'Revenue Breakdown Q1',
    description: 'Quarterly revenue analysis with forecasting',
    type: 'Financial',
    lastGenerated: '2024-01-13',
    status: 'Processing',
    size: '3.2 MB',
    format: 'PDF'
  },
  {
    id: 4,
    name: 'Campaign ROI Report',
    description: 'Return on investment analysis for all marketing campaigns',
    type: 'Marketing',
    lastGenerated: '2024-01-12',
    status: 'Ready',
    size: '1.5 MB',
    format: 'PDF'
  },
  {
    id: 5,
    name: 'Customer Acquisition Cost',
    description: 'Analysis of customer acquisition costs across channels',
    type: 'Marketing',
    lastGenerated: '2024-01-11',
    status: 'Ready',
    size: '2.1 MB',
    format: 'Excel'
  }
];

const reportTemplates = [
  {
    name: 'Executive Summary',
    description: 'High-level overview for stakeholders',
    icon: TrendingUp,
    color: 'bg-blue-500'
  },
  {
    name: 'Detailed Analytics',
    description: 'In-depth data analysis and insights',
    icon: BarChart3,
    color: 'bg-green-500'
  },
  {
    name: 'Visual Dashboard',
    description: 'Chart-heavy visual representation',
    icon: PieChart,
    color: 'bg-purple-500'
  }
];

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 lg:ml-64">
        <Navbar />
        
        <main className="p-4 lg:p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
              <p className="text-muted-foreground">
                Generate and manage comprehensive business reports
              </p>
            </div>
            <Button className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Generate Report
            </Button>
          </div>

          {/* Report Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Reports</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-green-500">+5 this month</p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Scheduled Reports</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Auto-generated</p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Downloads</CardTitle>
                <Download className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">234</div>
                <p className="text-xs text-green-500">+18% this month</p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Storage Used</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2 GB</div>
                <p className="text-xs text-muted-foreground">of 5 GB limit</p>
              </CardContent>
            </Card>
          </div>

          {/* Report Templates */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Report Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {reportTemplates.map((template) => {
                  const Icon = template.icon;
                  return (
                    <div key={template.name} className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg ${template.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">{template.name}</h4>
                          <p className="text-sm text-muted-foreground">{template.description}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Generate Report
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Reports List */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle>Recent Reports</CardTitle>
                <div className="flex gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:flex-none">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search reports..." className="pl-10 w-full sm:w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{report.name}</h4>
                        <p className="text-sm text-muted-foreground">{report.description}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <Badge variant="outline">{report.type}</Badge>
                          <span className="text-xs text-muted-foreground">
                            Generated: {report.lastGenerated}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Size: {report.size}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={report.status === 'Ready' ? 'default' : 'secondary'}>
                        {report.status}
                      </Badge>
                      {report.status === 'Ready' && (
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Report Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Report Usage Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Performance Reports</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Financial Reports</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Marketing Reports</span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scheduled Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Weekly Performance</p>
                      <p className="text-sm text-muted-foreground">Every Monday at 9:00 AM</p>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Monthly Revenue</p>
                      <p className="text-sm text-muted-foreground">1st of every month</p>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Quarterly Review</p>
                      <p className="text-sm text-muted-foreground">End of each quarter</p>
                    </div>
                    <Badge variant="secondary">Paused</Badge>
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