<template>
    <table
        class="w-full text-left text-sm border-collapse rounded-lg overflow-hidden bg-gray-50"
    >
        <thead>
            <tr class="bg-gray-800 text-gray-400">
                <th
                    class="px-4 py-3 border-b border-gray-700 tracking-wider text-xs uppercase font-semibold"
                >
                    Name
                </th>
                <th
                    class="px-4 py-3 border-b border-gray-700 tracking-wider text-xs uppercase font-semibold"
                >
                    Balance
                </th>
                <th
                    class="px-4 py-3 border-b border-gray-700 tracking-wider text-xs uppercase font-semibold"
                >
                    Created
                </th>
                <th
                    class="px-4 py-3 border-b border-gray-700 tracking-wider text-xs uppercase font-semibold"
                >
                    Edited
                </th>
                <th
                    class="px-4 py-3 border-b border-gray-700 tracking-wider text-xs uppercase font-semibold"
                >
                    Address
                </th>
                <th
                    class="px-4 py-3 border-b border-gray-700 tracking-wider text-xs uppercase font-semibold"
                >
                    Contacts
                </th>
                <th
                    class="px-4 py-3 border-b border-gray-700 tracking-wider text-xs uppercase font-semibold"
                >
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="client in clients"
                :key="client.id"
                :class="[
                    'hover:bg-gray-700 transition',
                    client.isArchived ? 'bg-gray-700 text-gray-400' : '',
                ]"
            >
                <td
                    class="fw-400 px-4 py-3 border-b border-gray-800 font-normal"
                >
                    {{ client.name }}
                </td>
                <td
                    class="fw-400 px-4 py-3 border-b border-gray-800 font-normal"
                >
                    {{ client.balance.toLocaleString() }} USD
                </td>
                <td
                    class="fw-400 px-4 py-3 border-b border-gray-800 font-normal"
                >
                    {{ client.createdAt }}
                </td>
                <td
                    class="fw-400 px-4 py-3 border-b border-gray-800 font-normal"
                >
                    {{ client.updatedAt }}
                </td>
                <td
                    class="fw-400 px-4 py-3 border-b border-gray-800 font-normal"
                >
                    {{
                        `${[
                            client.address.street,
                            client.address.office,
                            client.address.zip,
                            client.address.country,
                        ]
                            .filter(Boolean)
                            .join(", ")}`
                    }}
                </td>
                <td
                    class="fw-400 px-4 py-3 border-b border-gray-800 font-normal"
                >
                    <p>{{ client.contacts.phone }}</p>
                    <p>{{ client.contacts.email }}</p>
                </td>
                <td class="px-4 py-3 border-b border-gray-800 space-x-2">
                    <button
                        class="p-2 rounded hover:bg-gray-600"
                        @click="$emit('edit', client)"
                        aria-label="Edit Client"
                    >
                        <PencilIcon class="w-5 h-5 text-mint" />
                    </button>

                    <button
                        class="p-2 rounded hover:bg-gray-600"
                        @click="$emit('toggleArchive', client)"
                        :aria-label="
                            client.isArchived
                                ? 'Unarchive Client'
                                : 'Archive Client'
                        "
                    >
                        <component
                            :is="
                                client.isArchived
                                    ? 'ArrowUpTrayIcon'
                                    : 'ArchiveBoxXMarkIcon'
                            "
                            class="w-5 h-5"
                            :class="
                                client.isArchived
                                    ? 'text-green-400'
                                    : 'text-red-400'
                            "
                        />
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import {
    PencilIcon,
    ArrowUpTrayIcon,
    ArchiveBoxXMarkIcon,
} from "@heroicons/vue/24/outline";
import type { Client } from "@/entities/client/model/types";

export default defineComponent({
    name: "ClientTable",
    components: {
        PencilIcon,
        ArchiveBoxXMarkIcon,
        ArrowUpTrayIcon,
    },
    props: {
        clients: {
            type: Array as PropType<Client[]>,
            required: true,
        },
    },
    emits: ["toggleArchive", "edit"],
});
</script>
