<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useToast } from 'primevue/usetoast'
import { useEventListener } from '@vueuse/core'
import { useAuthStore } from '@/stores'
import { EventName } from '@/enums'
import type { ToastMessageOptions } from 'primevue/toast'

const dev = import.meta.env.DEV
const { t } = useI18n()
const toast = useToast()
const auth = useAuthStore()

useEventListener(document, EventName.SHOW_TOAST, (event: CustomEvent<ToastMessageOptions>) => {
  toast.add({
    severity: event.detail.severity || 'info',
    summary: t(event.detail.summary || ''),
    detail: t(event.detail.detail),
    life: event.detail.life || 3000,
  })
})
</script>

<template>
  <RouterView />
  <Teleport to="body">
    <Toast position="top-right" />
    <ConfirmDialog />
    <div v-if="dev" class="flex items-center gap-3 bottom-8 left-7 fixed z-50">
      <SelectButton v-model="auth.locale" :allow-empty="false" data-key="key" optionLabel="key" optionValue="key"
                    :options="auth.locales" @change="auth.setLocale(); $i18n.locale = auth.locale" />
      <ToggleSwitch v-model="auth.theme" @change="auth.setTheme()" :true-value="'light'" :false-value="'dark'" />
    </div>
  </Teleport>
</template>
