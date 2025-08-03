'use client';

import { Sidebar } from '@/components/dashboard/sidebar';
import { Navbar } from '@/components/dashboard/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus, Clock, Users, Video, MapPin } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Marketing Team Standup',
    time: '09:00 AM',
    date: '2024-01-16',
    type: 'Meeting',
    attendees: 8,
    location: 'Conference Room A',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Product Launch Review',
    time: '02:00 PM',
    date: '2024-01-16',
    type: 'Review',
    attendees: 12,
    location: 'Virtual',
    color: 'bg-green-500'
  },
  {
    id: 3,
    title: 'Client Presentation',
    time: '04:30 PM',
    date: '2024-01-16',
    type: 'Presentation',
    attendees: 6,
    location: 'Client Office',
    color: 'bg-purple-500'
  },
  {
    id: 4,
    title: 'Weekly Analytics Review',
    time: '10:00 AM',
    date: '2024-01-17',
    type: 'Review',
    attendees: 5,
    location: 'Virtual',
    color: 'bg-orange-500'
  }
];

const todaySchedule = [
  { time: '09:00', event: 'Marketing Team Standup', duration: '30 min' },
  { time: '10:30', event: 'Campaign Strategy Discussion', duration: '60 min' },
  { time: '14:00', event: 'Product Launch Review', duration: '90 min' },
  { time: '16:30', event: 'Client Presentation', duration: '45 min' }
];

const calendarStats = [
  { label: 'Today\'s Meetings', value: '4', change: '+1' },
  { label: 'This Week', value: '18', change: '+3' },
  { label: 'Avg. Duration', value: '45m', change: '-5m' },
  { label: 'Meeting Hours', value: '12h', change: '+2h' }
];

export default function CalendarPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 lg:ml-64">
        <Navbar />
        
        <main className="p-4 lg:p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Calendar & Events</h1>
              <p className="text-muted-foreground">
                Manage your schedule and upcoming events
              </p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Schedule Meeting
            </Button>
          </div>

          {/* Calendar Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {calendarStats.map((stat, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-green-500">{stat.change} from last week</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Today's Schedule & Upcoming Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaySchedule.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="text-sm font-mono text-muted-foreground min-w-[50px]">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.event}</p>
                        <p className="text-sm text-muted-foreground">{item.duration}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Join
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className={`w-3 h-3 rounded-full ${event.color} mt-2`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{event.title}</h4>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {event.time}
                          </span>
                          <span className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {event.attendees}
                          </span>
                          <span className="flex items-center">
                            {event.location === 'Virtual' ? (
                              <Video className="h-3 w-3 mr-1" />
                            ) : (
                              <MapPin className="h-3 w-3 mr-1" />
                            )}
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calendar View */}
          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 6; // Start from previous month
                  const isCurrentMonth = day > 0 && day <= 31;
                  const isToday = day === 16;
                  const hasEvent = [16, 17, 18, 22, 25].includes(day);
                  
                  return (
                    <div
                      key={i}
                      className={`
                        aspect-square p-2 text-sm border rounded-lg cursor-pointer transition-colors
                        ${isCurrentMonth ? 'hover:bg-muted/50' : 'text-muted-foreground bg-muted/20'}
                        ${isToday ? 'bg-primary text-primary-foreground' : ''}
                        ${hasEvent && !isToday ? 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800' : ''}
                      `}
                    >
                      <div className="flex flex-col h-full">
                        <span className={`text-xs ${isToday ? 'font-bold' : ''}`}>
                          {isCurrentMonth ? day : ''}
                        </span>
                        {hasEvent && isCurrentMonth && (
                          <div className="flex-1 flex items-end">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Meeting Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Meeting Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Team Meetings</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Client Calls</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Reviews</span>
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
                <CardTitle>Meeting Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center">
                      <Video className="h-3 w-3 mr-2" />
                      Virtual
                    </span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center">
                      <MapPin className="h-3 w-3 mr-2" />
                      Conference Room
                    </span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center">
                      <MapPin className="h-3 w-3 mr-2" />
                      External
                    </span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Full Calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Check Availability
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Clock className="h-4 w-4 mr-2" />
                    Time Zone Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}