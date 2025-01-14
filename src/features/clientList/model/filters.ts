import type { Client } from "@/entities/client/model/types";

export function filterClients(
  clients: Client[],
  searchQuery: string,
  showArchived: boolean,
): Client[] {
  return clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.address.country
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      client.address.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.contacts.phone.includes(searchQuery) ||
      client.contacts.email.toLowerCase().includes(searchQuery);

    const matchesArchive = showArchived || !client.isArchived;

    return matchesSearch && matchesArchive;
  });
}
