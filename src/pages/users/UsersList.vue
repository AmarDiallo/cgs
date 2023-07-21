<template>
  <div>
    <VCard title="Liste des utilisateurs">
      <DemoSimpleTableBasics />
    </VCard>
  </div>
</template>

<script lang="ts">
import DemoSimpleTableBasics from "@/views/pages/tables/DemoSimpleTableBasics.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { DemoSimpleTableBasics },
  setup() {},
});
</script>
