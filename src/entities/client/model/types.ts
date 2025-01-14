export interface Address {
  country: string;
  zip: string;
  street: string;
  office: string;
}

export interface Contacts {
  phone: string;
  email: string;
}

export interface Client {
  id: string;
  name: string;
  balance: string;
  createdAt: string;
  updatedAt: string;
  isArchived: boolean;
  address: Address;
  contacts: Contacts;
}
