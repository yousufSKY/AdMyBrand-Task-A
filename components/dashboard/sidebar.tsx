'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  Settings, 
  Menu,
  X,
  Home,
  TrendingUp,
  Target,
  Calendar
} from 'lucide-react';

const navigation = [
  { name: 'Overview', href: '/', icon: Home, current: true },
  { name: 'Analytics', href: '/analytics', icon: BarChart3, current: false },
  { name: 'Campaigns', href: '/campaigns', icon: Target, current: false },
  { name: 'Users', href: '/users', icon: Users, current: false },
  { name: 'Revenue', href: '/revenue', icon: DollarSign, current: false },
  { name: 'Reports', href: '/reports', icon: TrendingUp, current: false },
  { name: 'Calendar', href: '/calendar', icon: Calendar, current: false },
  { name: 'Settings', href: '/settings', icon: Settings, current: false },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed top-0 left-0 z-40 h-full w-64 bg-background border-r transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ADmyBRAND
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground group",
                    item.current 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className={cn(
                    "mr-3 h-4 w-4 transition-transform duration-200 group-hover:scale-110",
                    item.current ? "text-primary-foreground" : ""
                  )} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-4 py-4 border-t">
            <div className="text-xs text-muted-foreground text-center">
              © 2025 ADmyBRAND Insights
            </div>
          </div>
        </div>
      </div>
    </>
  );
}