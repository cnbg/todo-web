<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { cookie, focusElement, goto } from '@/utils'
import { useAuthStore } from '@/stores'

const auth = useAuthStore()

const login = async () => {
  await auth.login()
  if (!auth.loading && auth.errors.length === 0) {
    goto('/')
  }
}

onBeforeMount(async () => {
  auth.username = await cookie.get('username') || ''
  auth.password = '123456'
})
</script>

<template>
  <div class="w-full h-full flex items-center justify-center p-2" style="min-height: 220px">
    <div class="w-96">
      <div class="flex flex-col gap-4">
        <InputGroup>
          <InputGroupAddon><i class="pi pi-user"></i></InputGroupAddon>
          <InputText v-model.trim="auth.username" :placeholder="$t('enter_your_email')"
                     autofocus fluid maxlength="300" tabindex="0"
                     @keyup.enter.native="focusElement('password-input')" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon><i class="pi pi-key"></i></InputGroupAddon>
          <Password v-model.trim="auth.password" :placeholder="$t('enter_your_password')"
                    :feedback="false" input-id="password-input" fluid maxlength="255"
                    tabindex="1" toggleMask @keyup.enter.native="login" />
        </InputGroup>
        <Button
            :disabled="auth.loading" :label="$t('login')" severity="contrast" @click="login"
            :icon="auth.loading ? 'pi pi-spin pi-spinner' : 'pi pi-sign-in'" fluid
        />
        <Message v-for="error in auth.errors" severity="error">{{ $t(error) }}</Message>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
