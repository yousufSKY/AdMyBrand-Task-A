'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { CSVLink } from 'react-csv';
import { useEffect, useState } from 'react';

interface CSVExportButtonProps {
  data: Array<Record<string, any>>;
  filename: string;
}

export function CSVExportButton({ data, filename }: CSVExportButtonProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Button variant="outline" size="sm" className="w-full sm:w-auto">
        <Download className="h-4 w-4 mr-2" />
        Export CSV
      </Button>
    );
  }

  return (
    <CSVLink data={data} filename={filename}>
      <Button variant="outline" size="sm" className="w-full sm:w-auto">
        <Download className="h-4 w-4 mr-2" />
        Export CSV
      </Button>
    </CSVLink>
  );
}
