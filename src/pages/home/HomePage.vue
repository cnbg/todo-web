<script setup lang="ts">
</script>

<template>
  <MainLayout>
    <div class="p-4">
      <h1 class="text-3xl font-bold underline">
        {{ $t('homepage') }}
      </h1>
      <hr class="my-4" />
      <div class="flex flex-wrap gap-4">
        <Button @click="$router.push({name: 'auth.profile'})" outlined severity="contrast" :label="$t('profile')" />
        <Button @click="$router.push({name: 'org.list'})" outlined severity="contrast" :label="$t('organizations')" />
      </div>
    </div>
  </MainLayout>
</template>
