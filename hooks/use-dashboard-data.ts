"use client";

import { useState, useEffect, useCallback } from "react";
import {
  generateMetrics,
  generateUserGrowthData,
  generateCampaignPerformanceData,
  generateTrafficSources,
  generateCampaigns,
} from "@/lib/mock-data";
import { MetricCard, ChartData, TrafficSource, Campaign } from "@/types/dashboard";

export function useDashboardData() {
  const [metrics, setMetrics] = useState<MetricCard[]>([]);
  const [userGrowthData, setUserGrowthData] = useState<ChartData[]>([]);
  const [campaignPerformanceData, setCampaignPerformanceData] = useState<ChartData[]>([]);
  const [trafficSources, setTrafficSources] = useState<TrafficSource[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshData = useCallback(() => {
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      setMetrics(generateMetrics());
      setUserGrowthData(generateUserGrowthData());
      setCampaignPerformanceData(generateCampaignPerformanceData());
      setTrafficSources(generateTrafficSources());
      setCampaigns(generateCampaigns());
      setLoading(false);
    }, Math.random() * 1000 + 500);
  }, []);

  useEffect(() => {
    refreshData();

    // Commented out auto-refresh for static/mock environments
    // const interval = setInterval(refreshData, 5000);
    // return () => clearInterval(interval);
  }, [refreshData]);

  return {
    metrics: metrics.map((metric) => ({ ...metric, loading })),
    userGrowthData,
    campaignPerformanceData,
    trafficSources,
    campaigns,
    loading,
    refreshData,
  };
}