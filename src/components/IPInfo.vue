<script setup>
import { defineProps } from "vue";
const props = defineProps({
  ipInfo: Object
});
</script>
<template>
  <div
    class="absolute -bottom-64 flex flex-col lg:flex-row lg:-bottom-20 bg-white gap-x-12 gap-y-4 px-8 pt-8 pb-12 rounded-md"
  >
    <!-- Flex Item #1 -->
    <div class="flex flex-col">
      <h3 class="text-xs uppercase mb-2">IP Address</h3>
      <span class="text-2xl">{{ props.ipInfo.address }}</span>
    </div>
    <!-- Flex Item #2 -->
    <div class="flex flex-col">
      <h3 class="text-xs uppercase mb-2">Location</h3>
      <span class="text-2xl">{{ props.ipInfo.state }}</span>
    </div>
    <!-- Flex Item #3 -->
    <div class="flex flex-col">
      <h3 class="text-xs uppercase mb-2">Timezone</h3>
      <span class="text-2xl">UTC {{ props.ipInfo.timezone }}</span>
    </div>
    <!-- Flex Item #4 -->
    <div class="flex flex-col">
      <h3 class="text-xs uppercase mb-2">ISP</h3>
      <span class="text-2xl capitalize">{{ props.ipInfo.isp }}</span>
    </div>
  </div>
</template>
