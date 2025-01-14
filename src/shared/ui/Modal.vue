<template>
    <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
        @click.self="$emit('close')"
    >
        <div
            class="bg-gray-900 border border-gray-700 shadow-xl rounded-lg w-full max-w-lg p-6 transform transition-transform duration-300 scale-100"
        >
            <div
                class="flex justify-between items-center border-b border-gray-800 pb-3 mb-4"
            >
                <h3 class="text-xl font-semibold text-white">
                    {{ title }}
                </h3>
            </div>

            <div class="space-y-4">
                <slot></slot>
            </div>

            <div class="flex justify-end gap-3 mt-6">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Я предпочитаю декларативные вызовы модалок (что-то вроде await changeClient(client); )
// Но пока не знаю как это реализовывают в вуе, поэтому остановился на обычных
// visible флагах

export default defineComponent({
    name: "Modal",
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    emits: ["close"],
});
</script>

<style scoped></style>
