<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useOrgStore } from '@/stores'

const { t } = useI18n()
const orgSt = useOrgStore()

onMounted(async () => {
  await orgSt.getList()
})
</script>

<template>
  <MainLayout>
    <div class="p-4">
      <div class="flex flex-wrap gap-4">
        <Button @click="$router.push({ name: 'home' })" outlined severity="contrast" icon="pi pi-chevron-left" />
        <h1 class="text-3xl font-bold underline">
          {{ $t('organizations') }}
        </h1>
      </div>
      <hr class="my-4" />
      <div class="flex flex-col gap-4">
        <div v-for="org in orgSt.items" :key="org.id" class="p-4 border rounded-lg">
          <div class="font-bold text-xl">{{ org.name }}</div>
          <div class="text-gray-500">{{ org.okpo }}</div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style>

</style>
