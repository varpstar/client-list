import { defineStore } from "pinia";

import type { Client } from "./types";
import { clients } from "./mock/sampleClients";

export const useClientStore = defineStore("clientStore", {
  state: () => ({
    // Лучшим вариантом было бы нормализовать пользователей по id
    // но для простоты использования оставил обычный массив
    clients,
  }),
  actions: {
    addClient(client: Client) {
      this.clients.push(client);
    },
    editClient(client: Client) {
      const existingClient = this.clients.find((c) => c.id === client.id);

      if (existingClient) Object.assign(existingClient, client);
    },
    toggleArchiveClient(id: Client["id"]) {
      const client = this.clients.find((c) => c.id === id);

      if (client) client.isArchived = !client.isArchived;
    },
    sortClients(field: keyof Client) {
      this.clients.sort((a, b) => {
        switch (field) {
          case "name": {
            return a[field].localeCompare(b[field]);
          }
          case "balance": {
            return parseFloat(b[field]) - parseFloat(a[field]);
          }

          default: {
            console.warn(`Implement sort by ${field} field!`);
            return 0;
          }
        }
      });
    },
  },
});
