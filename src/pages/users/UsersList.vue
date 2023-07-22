<template>
  <div>
    <VCard title="Liste des utilisateurs">
      <VTable>
        <thead>
          <tr>
            <th class="text-uppercase">N°</th>
            <th>Email</th>
            <th>Téléphonne</th>
            <th>Rôle</th>
            <th>Date de création</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td class="text-center">
              {{ index + 1 }}
            </td>
            <td>
              {{ user.email }}
            </td>
            <td class="text-center">
              {{ user.telephone }}
            </td>
            <td class="text-center">
              {{ user.role }}
            </td>
            <td class="text-center">
              {{ user.created_at }}
            </td>
          </tr>
        </tbody>
      </VTable>
    </VCard>
  </div>
</template>

<script lang="ts">
import useAuth from "@/services/authService.js";
import DemoSimpleTableBasics from "@/views/pages/tables/DemoSimpleTableBasics.vue";
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  components: { DemoSimpleTableBasics },
  setup() {
    const { loading, users, onGetUsers } = useAuth();
    onMounted(async () => {
      await onGetUsers();
    });

    return {
      loading,
      users,
    };
  },
});
</script>
