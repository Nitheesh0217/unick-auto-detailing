
import { QuoteRequest } from '../types';

// Mock initial data
const MOCK_LEADS: QuoteRequest[] = [
  {
    id: '1',
    timestamp: new Date(),
    services: ['Ceramic Coating', 'Premium Interior'],
    vehicle: { year: 2024, make: 'Tesla', model: 'Model 3' },
    contact: { name: 'Alex Rivera', email: 'alex@example.com', phone: '305-555-0123', whatsapp: true },
    location: 'Miami Beach',
    preferredDate: '2024-05-20',
    preferredTime: 'morning',
    estimatedPrice: { min: 550, max: 750 },
    status: 'new'
  },
  {
    id: '2',
    timestamp: new Date(Date.now() - 86400000),
    services: ['Wash & Wax'],
    vehicle: { year: 2021, make: 'BMW', model: 'X5' },
    contact: { name: 'Sarah Chen', email: 'sarah@example.com', phone: '786-555-9876', whatsapp: false },
    location: 'Coral Gables',
    preferredDate: '2024-05-21',
    preferredTime: 'afternoon',
    estimatedPrice: { min: 100, max: 150 },
    status: 'contacted'
  }
];

class LeadStore {
  private leads: QuoteRequest[] = [...MOCK_LEADS];
  private listeners: (() => void)[] = [];

  getLeads() {
    return this.leads;
  }

  addLead(lead: QuoteRequest) {
    this.leads = [lead, ...this.leads];
    this.notify();
  }

  updateStatus(id: string, status: QuoteRequest['status']) {
    this.leads = this.leads.map(l => l.id === id ? { ...l, status } : l);
    this.notify();
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l());
  }
}

export const leadStore = new LeadStore();
