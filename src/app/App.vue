<template>
    <div id="app" class="bg-gray-900 min-h-screen text-white">
        <header>
            <h1 class="text-2xl font-bold decoration-mint">Client List</h1>
        </header>
        <main class="p-6">
            <ClientList />
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClientList from "@/features/clientList/ui/ClientList.vue";

export default defineComponent({
    name: "App",
    components: { ClientList },
});
</script>

<style scoped>
body {
    color: #cefbfb;
    fill: var(--outerspace);
    min-width: 320px;
    max-width: 100%;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    font-family: MainFont, sans-serif;
    font-size: 16px;
    font-weight: 600;
    background-image: linear-gradient(
        -45deg,
        rgba(130, 0, 100, 0.07) 0%,
        rgba(30, 190, 180, 0.07) 90%
    );
}
#app {
    font-family: "Inter", sans-serif;
    line-height: 1.6;
    padding: 0 24px;
}
header {
    inset: 0px 24px;
    height: 64px;
    padding: 16px 32px;
    border-bottom: 2px solid #100e14;
    border-left: 2px solid #100e14;
    border-right: 2px solid #100e14;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
    background: #100e14;
    box-shadow: 0 12px 8px -8px #0d090f;
    background-image: linear-gradient(
        -45deg,
        rgba(130, 0, 100, 0.07) 0%,
        rgba(30, 190, 180, 0.07) 90%
    );
}
</style>
