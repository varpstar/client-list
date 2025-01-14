<template>
    <div class="flex items-center cursor-pointer select-none" @click="toggle">
        <div
            :class="{
                'bg-indigo-500': isChecked,
                'bg-gray-700': !isChecked,
            }"
            class="relative w-12 h-6 rounded-full transition-all duration-300 min-w-5"
        >
            <span
                :class="{
                    'translate-x-6': isChecked,
                    'translate-x-1': !isChecked,
                }"
                class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300"
            ></span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Switch",
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
    },
    emits: ["update:modelValue"],
    computed: {
        isChecked(): boolean {
            return this.modelValue;
        },
    },
    methods: {
        toggle() {
            this.$emit("update:modelValue", !this.modelValue);
        },
    },
});
</script>

<style scoped>
div {
    font-family: "Inter", sans-serif;
}
</style>
