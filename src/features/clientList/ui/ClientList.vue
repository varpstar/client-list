<template>
    <div class="p-6 bg-gray-900 text-white min-h-screen">
        <div class="flex flex-wrap gap-4 mb-6 items-center justify-between">
            <div class="flex-1 min-w-[200px] max-w-[400px]">
                <Input
                    v-model="searchQuery"
                    placeholder="Search by name, address, or contacts..."
                />
            </div>

            <div class="flex items-center gap-4">
                <Checkbox v-model="showArchived" label="Show Archived" />
                <div class="w-[180px]">
                    <Select
                        v-model="selectedSort"
                        :options="sortOptions"
                        @change="sortClients"
                    />
                </div>
                <Switch v-model="isCardView" />
            </div>
        </div>

        <div v-if="!isCardView" class="overflow-auto">
            <ClientTable
                :clients="filteredClients"
                @toggle-archive="toggleArchiveClient"
                @edit="handleClickEditClient"
            />
        </div>

        <div
            v-if="isCardView"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <ClientCards
                :clients="filteredClients"
                @toggle-archive="toggleArchiveClient"
                @edit="handleClickEditClient"
            />
        </div>
        <div class="fixed bottom-6 right-6">
            <Button @click="showAddClientModal = true" class="shadow-lg"
                >Add New Client</Button
            >
        </div>

        <AddClientModal
            :isOpen="showAddClientModal"
            @close="showAddClientModal = false"
            @addClient="addClient"
        />

        <EditClientModal
            v-if="showEditClientModal"
            :isOpen="showEditClientModal"
            :client="selectedClient as Client"
            @close="
                showEditClientModal = false;
                selectedClient = null;
            "
            @editClient="editClient"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { filterClients } from "@/features/clientList/model/filters";
import { useClientStore } from "@/entities/client/model/store";

import type { Client } from "@/entities/client/model/types";
import ClientCards from "@/entities/client/ui/ClientCards.vue";
import ClientTable from "@/entities/client/ui/ClientTable.vue";
import AddClientModal from "@/entities/client/ui/AddClientModal.vue";
import EditClientModal from "@/entities/client/ui/EditClientModal.vue";

import Button from "@/shared/ui/Button.vue";
import Input from "@/shared/ui/Input.vue";
import Checkbox from "@/shared/ui/Checkbox.vue";
import Select from "@/shared/ui/Select.vue";
import Switch from "@/shared/ui/Switch.vue";

export default defineComponent({
    name: "ClientList",
    components: {
        ClientCards,
        ClientTable,
        Button,
        Input,
        Checkbox,
        Select,
        Switch,
        AddClientModal,
        EditClientModal,
    },
    setup() {
        const store = useClientStore();
        const showAddClientModal = ref(false);
        const showEditClientModal = ref(false);
        const searchQuery = ref("");
        const showArchived = ref(false);
        const isCardView = ref(false);
        const selectedSort = ref<"name" | "balance">("name");
        const selectedClient = ref<Client | null>(null);
        const sortOptions = [
            { value: "name", label: "Sort by Name" },
            { value: "balance", label: "Sort by Balance" },
        ];

        const filteredClients = computed(() => {
            return filterClients(
                store.clients,
                searchQuery.value,
                showArchived.value,
            );
        });

        const sortClients = (field: "name" | "balance") => {
            store.sortClients(field);
        };

        const toggleArchiveClient = (client: Client) => {
            store.toggleArchiveClient(client.id);
        };

        const addClient = (newClient: Client) => {
            store.addClient(newClient);
            showAddClientModal.value = false;
        };

        const handleClickEditClient = (client: Client) => {
            if (!client) return;
            selectedClient.value = client;
            showEditClientModal.value = true;
        };

        const editClient = (editedClient: Client) => {
            store.editClient(editedClient);
            showEditClientModal.value = false;
            selectedClient.value = null;
        };

        return {
            selectedClient,
            searchQuery,
            showArchived,
            isCardView,
            selectedSort,
            sortOptions,
            filteredClients,
            sortClients,
            toggleArchiveClient,
            showAddClientModal,
            showEditClientModal,
            addClient,
            handleClickEditClient,
            editClient,
        };
    },
});
</script>
