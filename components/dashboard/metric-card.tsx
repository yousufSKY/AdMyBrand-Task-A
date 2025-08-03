'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { MetricCard as MetricCardType } from '@/types/dashboard';
import { DollarSign, Users, Target, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap = {
  DollarSign,
  Users,
  Target,
  TrendingUp
};

interface MetricCardProps {
  metric: MetricCardType;
}

export function MetricCard({ metric }: MetricCardProps) {
  const Icon = iconMap[metric.icon as keyof typeof iconMap];
  const isPositive = metric.changeType === 'increase';
  const ChangeIcon = isPositive ? TrendingUp : TrendingDown;

  if (metric.loading) {
    return (
      <Card className="transition-all duration-300 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            <Skeleton className="h-4 w-24" />
          </CardTitle>
          <Skeleton className="h-4 w-4 rounded" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-32 mb-2" />
          <Skeleton className="h-4 w-20" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {metric.title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
          {metric.value}
        </div>
        <div className="flex items-center text-xs">
          <ChangeIcon className={cn(
            "h-3 w-3 mr-1",
            isPositive ? "text-green-500" : "text-red-500"
          )} />
          <span className={cn(
            "font-medium",
            isPositive ? "text-green-500" : "text-red-500"
          )}>
            {isPositive ? '+' : ''}{metric.change}%
          </span>
          <span className="text-muted-foreground ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}