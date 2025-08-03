'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Campaign } from '@/types/dashboard';
import { ArrowUpDown, Download, Search } from 'lucide-react';
import { CSVExportButton } from './csv-export-button';

interface CampaignsTableProps {
  campaigns: Campaign[];
}

export function CampaignsTable({ campaigns }: CampaignsTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Campaign;
    direction: 'asc' | 'desc';
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredAndSortedCampaigns = useMemo(() => {
    let filtered = campaigns.filter(campaign =>
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortConfig) {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'asc' 
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
        }
        
        return 0;
      });
    }

    return filtered;
  }, [campaigns, searchTerm, sortConfig]);

  const paginatedCampaigns = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedCampaigns.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedCampaigns, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedCampaigns.length / itemsPerPage);

  const handleSort = (key: keyof Campaign) => {
    setSortConfig(current => ({
      key,
      direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const getStatusBadgeVariant = (status: Campaign['status']) => {
    switch (status) {
      case 'Active': return 'default';
      case 'Paused': return 'secondary';
      case 'Completed': return 'outline';
      default: return 'default';
    }
  };

  const csvData = filteredAndSortedCampaigns.map(campaign => ({
    'Campaign Name': campaign.name,
    'Status': campaign.status,
    'Budget': campaign.budget,
    'Impressions': campaign.impressions,
    'Clicks': campaign.clicks,
    'CTR': `${campaign.ctr}%`,
    'Date Created': campaign.dateCreated
  }));

  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle>Campaign Performance</CardTitle>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>
            <CSVExportButton data={csvData} filename="campaigns.csv" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('name')}
                    className="h-auto p-0 font-semibold hover:bg-transparent"
                  >
                    Campaign Name
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('budget')}
                    className="h-auto p-0 font-semibold hover:bg-transparent"
                  >
                    Budget
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </th>
                <th className="text-left p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('impressions')}
                    className="h-auto p-0 font-semibold hover:bg-transparent"
                  >
                    Impressions
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </th>
                <th className="text-left p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('clicks')}
                    className="h-auto p-0 font-semibold hover:bg-transparent"
                  >
                    Clicks
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </th>
                <th className="text-left p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('ctr')}
                    className="h-auto p-0 font-semibold hover:bg-transparent"
                  >
                    CTR
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedCampaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-2 font-medium">{campaign.name}</td>
                  <td className="p-2">
                    <Badge variant={getStatusBadgeVariant(campaign.status)}>
                      {campaign.status}
                    </Badge>
                  </td>
                  <td className="p-2">${campaign.budget.toLocaleString()}</td>
                  <td className="p-2">{campaign.impressions.toLocaleString()}</td>
                  <td className="p-2">{campaign.clicks.toLocaleString()}</td>
                  <td className="p-2">{campaign.ctr}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}