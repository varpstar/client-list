<template>
    <label
        class="flex items-center text-sm text-gray-300 font-medium hover:text-white transition-colors duration-300"
    >
        <input
            type="checkbox"
            v-model="modelValue"
            :class="checkboxClass"
            @change="handleChange"
        />
        <span class="ml-2">{{ label }}</span>
    </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "Checkbox",
    emits: ["update:modelValue"],
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
        label: {
            type: String,
            required: false,
            default: "",
        },
        size: {
            type: String as () => "small" | "medium" | "large",
            default: "small",
            required: false,
            validator: (value: string) =>
                ["small", "medium", "large"].includes(value),
        },
    },
    computed: {
        checkboxClass(): string {
            const sizeClasses = {
                small: "w-4 h-4",
                medium: "w-5 h-5",
                large: "w-6 h-6",
            } as const;
            return `appearance-none border border-gray-700 rounded bg-gradient-to-br from-gray-800 via-gray-900 to-black checked:from-green-500 checked:to-green-600 checked:border-green-500 transition-all duration-300 ${sizeClasses[this.size]}`;
        },
    },
    methods: {
        handleChange(event: Event) {
            if (event.target instanceof HTMLInputElement) {
                this.$emit("update:modelValue", event.target.checked);
            }
        },
    },
});
</script>

<style scoped>
input:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(6, 182, 212, 0.5);
}
input:checked {
    background-image: linear-gradient(90deg, #06b6d4, #3b82f6);
}
</style>
