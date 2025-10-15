<template>
  <div class="h-screen flex justify-center items-center">
    <img src="/monochromatic.svg" class="block w-1/4 min-w-66" :alt="global?.title" />
  </div>
</template>

<script setup lang="ts">
const { getSingletonItem } = useDirectusItems()

interface Global {
  id?: string | number
  title: string
}

const global = await getSingletonItem<Global>({
  collection: 'global',
})
</script>
