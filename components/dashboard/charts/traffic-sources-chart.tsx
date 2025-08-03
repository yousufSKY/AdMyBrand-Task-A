'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { TrafficSource } from '@/types/dashboard';
import { useState, useEffect } from 'react';

interface TrafficSourcesChartProps {
  data: TrafficSource[];
}

export function TrafficSourcesChart({ data }: TrafficSourcesChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isLoading = !data || data.length === 0;

  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle>Traffic Sources</CardTitle>
      </CardHeader>
      <CardContent className="min-h-[300px]">
        {isMounted ? (
          isLoading ? (
            <div className="flex items-center justify-center h-[300px] text-muted-foreground">
              Loading...
            </div>
          ) : (
            <div style={{ width: '100%', height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart role="img" aria-label="Traffic Sources Pie Chart">
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                        aria-label={`Traffic source: ${entry.name}, value: ${entry.value}`}
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px'
                    }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    iconType="circle"
                    wrapperStyle={{ fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )
        ) : (
          <div className="flex items-center justify-center h-[300px] text-muted-foreground">
            Loading...
          </div>
        )}
      </CardContent>
    </Card>
  );
}