'use client';

import { Sidebar } from '@/components/dashboard/sidebar';
import { Navbar } from '@/components/dashboard/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Database, 
  Key, 
  Mail,
  Smartphone,
  Globe,
  Save,
  Upload
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 lg:ml-64">
        <Navbar />
        
        <main className="p-4 lg:p-6 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Settings Navigation */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">Settings Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  {[
                    { icon: User, label: 'Profile', active: true },
                    { icon: Bell, label: 'Notifications', active: false },
                    { icon: Shield, label: 'Security', active: false },
                    { icon: Palette, label: 'Appearance', active: false },
                    { icon: Database, label: 'Data & Privacy', active: false },
                    { icon: Key, label: 'API Keys', active: false }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.label}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                          item.active 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>

            {/* Settings Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Profile Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Change Avatar
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        JPG, GIF or PNG. 1MB max.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      className="w-full min-h-[100px] px-3 py-2 border border-input bg-background rounded-md text-sm"
                      placeholder="Tell us about yourself..."
                      defaultValue="Marketing professional with 5+ years of experience in digital campaigns and analytics."
                    />
                  </div>

                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              {/* Notification Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive email updates about your account activity
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Get push notifications on your devices
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Marketing Emails</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about new features and promotions
                        </p>
                      </div>
                      <Switch />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Weekly Reports</Label>
                        <p className="text-sm text-muted-foreground">
                          Get weekly summary reports via email
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Security & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">Enabled</Badge>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label className="text-base">Connected Devices</Label>
                      <div className="space-y-2">
                        {[
                          { device: 'MacBook Pro', location: 'San Francisco, CA', lastActive: '2 hours ago', current: true },
                          { device: 'iPhone 14', location: 'San Francisco, CA', lastActive: '1 day ago', current: false },
                          { device: 'Chrome Browser', location: 'New York, NY', lastActive: '3 days ago', current: false }
                        ].map((device, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Smartphone className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <p className="font-medium">{device.device}</p>
                                <p className="text-sm text-muted-foreground">
                                  {device.location} • {device.lastActive}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {device.current && <Badge variant="default">Current</Badge>}
                              {!device.current && (
                                <Button variant="outline" size="sm">Revoke</Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* API Keys */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    API Keys
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { name: 'Production API Key', created: '2024-01-01', lastUsed: '2 hours ago', status: 'Active' },
                      { name: 'Development API Key', created: '2024-01-10', lastUsed: '1 day ago', status: 'Active' },
                      { name: 'Testing API Key', created: '2024-01-15', lastUsed: 'Never', status: 'Inactive' }
                    ].map((key, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{key.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Created: {key.created} • Last used: {key.lastUsed}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={key.status === 'Active' ? 'default' : 'secondary'}>
                            {key.status}
                          </Badge>
                          <Button variant="outline" size="sm">Regenerate</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline">
                    <Key className="h-4 w-4 mr-2" />
                    Generate New API Key
                  </Button>
                </CardContent>
              </Card>

              {/* Danger Zone */}
              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-600 dark:text-red-400">Danger Zone</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div>
                      <p className="font-medium text-red-900 dark:text-red-100">Delete Account</p>
                      <p className="text-sm text-red-700 dark:text-red-300">
                        Permanently delete your account and all associated data
                      </p>
                    </div>
                    <Button variant="destructive" size="sm">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}