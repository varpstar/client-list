<template>
    <button
        :class="[
            'flex items-center justify-center rounded-md font-medium uppercase tracking-wide transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2',
            sizeClasses,
            variantClasses,
            disabled
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:scale-105 active:scale-95',
        ]"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    name: "Button",
    props: {
        variant: {
            type: String as PropType<"primary" | "secondary">,
            default: "primary",
        },
        size: {
            type: String as PropType<"small" | "medium" | "large">,
            default: "small",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        variantClasses(): string {
            return this.variant === "primary"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl focus:ring-cyan-400"
                : "bg-gray-800 text-gray-400 border border-gray-700 shadow-md hover:shadow-lg focus:ring-gray-500";
        },
        sizeClasses(): string {
            switch (this.size) {
                case "small":
                    return "px-3 py-1.5 text-xs";
                case "large":
                    return "px-6 py-3 text-lg";
                default:
                    return "px-4 py-2 text-sm";
            }
        },
    },
});
</script>
