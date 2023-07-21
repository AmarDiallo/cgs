<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" max-width="448">
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div class="d-flex text-primary" v-html="logo" />
          </div>
        </template>

        <VCardTitle class="text-2xl font-weight-bold"> sneat </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">Connexion</h5>
        <p class="mb-0">Veuillez vous connecter à votre compte et commencer l'aventure</p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="$router.push('/')">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                autofocus
                placeholder="johndoe@email.com"
                label="Email"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Mot de passe"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox v-model="form.remember" label="Se souvenir de moi" />

                <RouterLink class="text-primary ms-2 mb-1" to="javascript:void(0)">
                  Mot de passe oublié ?
                </RouterLink>
              </div>

              <!-- login button -->
              <VBtn block type="submit"> Connexion </VBtn>
            </VCol>

            <!-- create account -->
            <VCol cols="12" class="text-center text-base">
              <span>New on our platform?</span>
              <RouterLink class="text-primary ms-2" to="/register">
                Create an account
              </RouterLink>
            </VCol>

            <VCol cols="12" class="d-flex align-center">
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol cols="12" class="text-center">
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<script lang="ts">
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";
import logo from "@images/logo.svg?raw";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const isPasswordVisible = ref(false);
    const form = reactive({
      email: "",
      password: "",
      remember: false,
    });

    return {
      isPasswordVisible,
      form,
      logo,
    };
  },
});
</script>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
