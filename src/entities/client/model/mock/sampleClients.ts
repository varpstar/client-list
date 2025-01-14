import type { Client } from "@/entities/client/model/types";

export const clients: Array<Client> = [
  {
    id: "1",
    name: "Satoshi Nakamoto",
    // balance: '150000.23',
    balance: "10000",
    createdAt: "2023-01-10",
    updatedAt: "2023-12-15",
    isArchived: false,
    address: {
      country: "Japan",
      zip: "123-4567",
      street: "Crypto St.",
      office: "101",
    },
    contacts: {
      phone: "+81-90-1234-5678",
      email: "satoshi@bitcoin.com",
    },
  },
  {
    id: "2",
    name: "Vitalik Buterin",
    // balance: '2500000.0',
    balance: "20000",
    createdAt: "2020-08-05",
    updatedAt: "2024-01-01",
    isArchived: false,
    address: {
      country: "Canada",
      zip: "A1B 2C3",
      street: "Ethereum Blvd.",
      office: "202",
    },
    contacts: {
      phone: "+1-780-555-1212",
      email: "vitalik@ethereum.org",
    },
  },
  {
    id: "3",
    name: "CZ Binance",
    // balance: '7500000.45',
    balance: "30000",
    createdAt: "2018-06-20",
    updatedAt: "2023-11-25",
    isArchived: true,
    address: {
      country: "Malta",
      zip: "MLT-9000",
      street: "Binance Drive",
      office: "1A",
    },
    contacts: {
      phone: "+356-999-1234",
      email: "cz@binance.com",
    },
  },
  {
    id: "4",
    name: "Elon Musk",
    // balance: '42000.69',
    balance: "40000",
    createdAt: "2022-04-01",
    updatedAt: "2023-05-15",
    isArchived: false,
    address: {
      country: "USA",
      zip: "90210",
      street: "SpaceX Road",
      office: "Mars Colony HQ",
    },
    contacts: {
      phone: "+1-310-555-1234",
      email: "elon@spacex.com",
    },
  },
  {
    id: "5",
    name: "Hal Finney",
    // balance: '50000.0',
    balance: "50000",
    createdAt: "2009-01-12",
    updatedAt: "2014-08-28",
    isArchived: true,
    address: {
      country: "USA",
      zip: "94016",
      street: "Crypto Pioneer Ln.",
      office: "1B",
    },
    contacts: {
      phone: "+1-650-555-6789",
      email: "hal.finney@bitcoin.com",
    },
  },
];
