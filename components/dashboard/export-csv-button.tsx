'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { CSVLink } from 'react-csv';

interface ExportCSVButtonProps {
  data: any[];
  filename: string;
}

export function ExportCSVButton({ data, filename }: ExportCSVButtonProps) {
  return (
    <CSVLink data={data} filename={filename}>
      <Button variant="outline" size="sm" className="w-full sm:w-auto">
        <Download className="h-4 w-4 mr-2" />
        Export CSV
      </Button>
    </CSVLink>
  );
}
