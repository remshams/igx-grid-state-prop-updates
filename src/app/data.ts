export interface GridRow {
  id: number;
  name: string;
  status: string;
  createdAt: Date;
}

export const sampleData: GridRow[] = [
  { id: 1, name: 'Item Alpha', status: 'Active', createdAt: new Date('2024-01-15') },
  { id: 2, name: 'Item Beta', status: 'Pending', createdAt: new Date('2024-02-20') },
  { id: 3, name: 'Item Gamma', status: 'Active', createdAt: new Date('2024-03-10') },
  { id: 4, name: 'Item Delta', status: 'Inactive', createdAt: new Date('2024-04-05') },
  { id: 5, name: 'Item Epsilon', status: 'Active', createdAt: new Date('2024-05-12') },
  { id: 6, name: 'Item Zeta', status: 'Pending', createdAt: new Date('2024-06-18') },
  { id: 7, name: 'Item Eta', status: 'Active', createdAt: new Date('2024-07-22') },
  { id: 8, name: 'Item Theta', status: 'Inactive', createdAt: new Date('2024-08-30') },
  { id: 9, name: 'Item Iota', status: 'Active', createdAt: new Date('2024-09-14') },
  { id: 10, name: 'Item Kappa', status: 'Pending', createdAt: new Date('2024-10-25') },
];