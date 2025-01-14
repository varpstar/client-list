<template>
    <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        class="input-field"
        @input="onInput"
    />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Input",
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: "Enter text...",
        },
        type: {
            type: String,
            default: "text",
        },
    },
    methods: {
        onInput(event: Event) {
            const target = event.target as HTMLInputElement | null;
            if (target) {
                this.$emit("update:modelValue", target.value);
            }
        },
    },
});
</script>

<style scoped>
.input-field {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #374151;
    border-radius: 12px;
    background: linear-gradient(145deg, #0d1117, #161b22);
    color: #e5e7eb;
    font-size: 1rem;
    outline: none;
    transition:
        border-color 0.3s,
        box-shadow 0.3s;
}
.input-field:focus {
    border-color: #06b6d4;
    box-shadow: 0 0 8px rgba(6, 182, 212, 0.5);
}
.input-field::placeholder {
    color: #9ca3af;
    font-style: italic;
}
</style>
