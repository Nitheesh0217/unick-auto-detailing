
export type ServiceStatus = 'new' | 'contacted' | 'quoted' | 'scheduled' | 'completed';

export interface VehicleInfo {
  year: number;
  make: string;
  model: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  whatsapp: boolean;
}

export interface QuoteRequest {
  id: string;
  timestamp: Date;
  services: string[];
  vehicle: VehicleInfo;
  photos?: string[];
  contact: ContactInfo;
  location: string;
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'evening';
  notes?: string;
  estimatedPrice: { min: number; max: number };
  status: ServiceStatus;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  basePrice: number;
  popular?: boolean;
  benefits?: string[];
  idealFor?: string;
}
