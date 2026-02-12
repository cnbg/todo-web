<script setup>
import { goto } from '@/utils'

setTimeout(function () {
  goto('/')
}, 10000)
</script>

<template>
  <div class="flex items-center justify-center flex-col gap-5 h-full min-h-32 p-2 text-center">
    <div class="uppercase">{{ $t('server_not_responding') }}</div>
    <Button outlined severity="contrast" @click="goto('/')">
      <div class="flex items-center gap-3 p-1">
        <i class="pi pi-spin pi-spinner"></i>
        <span>{{ $t('try_again') }}</span>
      </div>
    </Button>
  </div>
</template>
