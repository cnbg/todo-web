<script setup lang="ts">
</script>

<template>
  <MainLayout>
    <div class="p-4">
      <div class="flex flex-wrap gap-4">
        <Button @click="$router.push({ name: 'home' })" outlined severity="contrast" icon="pi pi-chevron-left" />
        <h1 class="text-3xl font-bold underline">
          {{ $t('roles') }}
        </h1>
      </div>
      <hr class="my-4" />
      <div class="flex flex-col gap-4">
        role list
      </div>
    </div>
  </MainLayout>
</template>

<style>

</style>
