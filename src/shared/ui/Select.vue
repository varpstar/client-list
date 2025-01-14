<template>
    <div class="relative w-full max-w-xs">
        <select
            :value="modelValue"
            @change="onChange"
            class="block w-full bg-gray-800 text-white border border-gray-600 rounded-lg py-3 px-4 text-sm appearance-none shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:bg-gray-700"
        >
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
        <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Select",
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        options: {
            type: Array as () => { value: string; label: string }[],
            required: true,
        },
    },
    emits: ["change", "update:modelValue"],
    methods: {
        onChange(event: Event) {
            const target = event.target as HTMLSelectElement | null;
            if (target) {
                this.$emit("change", target.value);
                this.$emit("update:modelValue", target.value);
            }
        },
    },
});
</script>

<style scoped>
select {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    letter-spacing: 0.02em;
}
select:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
