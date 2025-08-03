'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Download, Moon, Sun, Search } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from '@/types/dashboard';

interface NavbarProps {
  onDateRangeChange?: (range: DateRange) => void;
  onExport?: () => void;
}

export function Navbar({ onDateRangeChange, onExport }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    to: new Date()
  });

  const handleDateRangeChange = (range: DateRange) => {
    setDateRange(range);
    onDateRangeChange?.(range);
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Left side - Search */}
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search insights..."
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Right side - Controls */}
        <div className="flex items-center space-x-2">
          {/* Date Range Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Calendar className="mr-2 h-4 w-4" />
                {format(dateRange.from, 'MMM dd')} - {format(dateRange.to, 'MMM dd')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <CalendarComponent
                mode="range"
                selected={{
                  from: dateRange.from,
                  to: dateRange.to
                }}
                onSelect={(range) => {
                  if (range?.from && range?.to) {
                    handleDateRangeChange({ from: range.from, to: range.to });
                  }
                }}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>

          {/* Export Button */}
          <Button variant="outline" size="sm" onClick={onExport}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:bg-accent"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}