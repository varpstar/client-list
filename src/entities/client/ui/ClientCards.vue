<template>
    <div
        v-for="client in clients"
        :key="client.id"
        :class="[
            'flex flex-col bg-gradient-to-br p-6 rounded-xl shadow-md transition-transform',
            client.isArchived
                ? 'from-gray-800 to-gray-900 border border-gray-700 text-gray-400 opacity-80 scale-95 hover:shadow-none'
                : 'from-gray-900 to-black border border-gray-800 text-gray-200 hover:shadow-lg hover:scale-105',
        ]"
    >
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">{{ client.name }}</h3>
            <div class="flex gap-2">
                <button
                    class="p-2 rounded-lg bg-transparent hover:bg-gray-800 transition"
                    @click="$emit('edit', client)"
                    aria-label="Edit Client"
                >
                    <PencilIcon class="w-5 h-5 text-teal-400" />
                </button>

                <button
                    class="p-2 rounded-lg bg-transparent hover:bg-gray-800 transition"
                    @click="$emit('toggleArchive', client)"
                    aria-label="Archive/Unarchive Client"
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
            </div>
        </div>

        <div
            class="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-4"
        >
            ${{ client.balance }}
        </div>

        <div class="text-sm mb-6 space-y-2">
            <p class="text-gray-400">
                {{
                    [
                        client.address.street,
                        client.address.office,
                        client.address.zip,
                        client.address.country,
                    ]
                        .filter(Boolean)
                        .join(", ")
                }}
            </p>
            <p class="space-y-1">
                <span
                    v-if="client.contacts.phone"
                    class="flex items-center gap-2 text-gray-400"
                >
                    <PhoneIcon class="w-4 h-4 text-gray-500" />
                    {{ client.contacts.phone }}
                </span>
                <span class="flex items-center gap-2 text-gray-400">
                    <EnvelopeIcon class="w-4 h-4 text-gray-500" />
                    {{ client.contacts.email }}
                </span>
            </p>
        </div>

        <div class="text-xs text-gray-500 flex justify-between mt-auto">
            <p>Created: {{ client.createdAt }}</p>
            <p>Edited: {{ client.updatedAt }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
    PencilIcon,
    ArrowUpTrayIcon,
    ArchiveBoxXMarkIcon,
    PhoneIcon,
    EnvelopeIcon,
} from "@heroicons/vue/24/outline";
import type { Client } from "@/entities/client/model/types";
import type { PropType } from "vue";

export default defineComponent({
    name: "ClientCards",
    props: {
        clients: {
            type: Array as PropType<Client[]>,
            required: true,
        },
    },
    components: {
        ArrowUpTrayIcon,
        ArchiveBoxXMarkIcon,
        PencilIcon,
        PhoneIcon,
        EnvelopeIcon,
    },
    emits: ["toggleArchive", "edit"],
});
</script>
