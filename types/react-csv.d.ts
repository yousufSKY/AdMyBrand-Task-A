declare module 'react-csv' {
  import { ComponentType, ReactNode } from 'react';

  interface CSVLinkProps {
    data: any[];
    headers?: any[];
    filename?: string;
    children: ReactNode;
  }

  export const CSVLink: ComponentType<CSVLinkProps>;
}
