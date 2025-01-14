<template>
    <Modal v-if="isOpen" @close="closeModal" title="Edit Client">
        <template #default>
            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <Input
                        v-model="form.name"
                        placeholder="Full Name"
                        type="text"
                        required
                    />
                    <Input
                        v-model="form.balance"
                        placeholder="Balance"
                        type="number"
                        min="0.00"
                        step="0.01"
                        required
                    />
                    <Select
                        v-model="form.address.country"
                        :options="countryOptions"
                        required
                    />
                    <Input
                        v-model="form.address.street"
                        placeholder="Street"
                        type="text"
                    />
                    <Input
                        v-model="form.address.office"
                        placeholder="Office"
                        type="text"
                    />
                    <Input
                        v-model="form.address.zip"
                        placeholder="Zip"
                        type="text"
                    />
                    <Input
                        v-model="form.contacts.phone"
                        placeholder="Phone"
                        type="tel"
                    />
                    <Input
                        v-model="form.contacts.email"
                        placeholder="Email"
                        type="email"
                    />
                </div>
            </form>
        </template>

        <template #footer>
            <Button type="button" variant="secondary" @click="closeModal">
                Cancel
            </Button>
            <Button type="submit" variant="primary" @click="handleSubmit">
                Save Changes
            </Button>
        </template>
    </Modal>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

import type { Client } from "@/entities/client/model/types";

import Modal from "@/shared/ui/Modal.vue";
import Input from "@/shared/ui/Input.vue";
import Select from "@/shared/ui/Select.vue";
import Button from "@/shared/ui/Button.vue";

export default defineComponent({
    name: "EditClientModal",
    components: { Modal, Input, Select, Button },
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        client: {
            type: Object as () => Client,
            required: true,
        },
    },
    emits: ["close", "editClient"],
    setup(props, { emit }) {
        // Здесь мне не очень нравится жсон парс
        // Но это самое очевидное, что смог придумать, чтобы сбросить реактивность
        const form = ref<Client>(JSON.parse(JSON.stringify(props.client)));

        // Этот вотчер опциональный
        watch(
            () => props.client,
            (newClient) => {
                form.value = JSON.parse(JSON.stringify(newClient));
            },
            { deep: true, immediate: true },
        );

        const countryOptions = [
            { value: "USA", label: "USA" },
            { value: "Canada", label: "Canada" },
            { value: "UK", label: "UK" },
            { value: "Japan", label: "Japan" },
            { value: "Malta", label: "Malta" },
            { value: "Australia", label: "Australia" },
        ];

        const closeModal = () => {
            emit("close");
        };

        const handleSubmit = () => {
            if (!form.value.name) {
                alert("Name is required");
                return;
            }
            if (!form.value.balance || Number(form.value.balance) <= 0) {
                alert("Balance must be a positive number");
                return;
            }
            if (!form.value.contacts.email) {
                alert("Email is required");
                return;
            }
            if (!form.value.address.country) {
                alert("Country is required");
                return;
            }

            emit("editClient", {
                ...form.value,
                updatedAt: new Date().toLocaleDateString(),
            });
            closeModal();
        };

        return {
            form,
            countryOptions,
            closeModal,
            handleSubmit,
        };
    },
});
</script>

<style scoped>
form {
    max-width: 600px;
    margin: auto;
}
</style>
