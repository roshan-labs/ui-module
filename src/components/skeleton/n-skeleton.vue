<template>
  <div class="flex">
    <!-- CONTENT -->
    <div class="flex-1">
      <h3 class="h-[16px] bg-[rgba(190,190,190,0.2)] rounded-[4px]" style="width: 38%"></h3>
      <ul :class="[title ? 'mt-lg' : '']">
        <li class="h-[16px] bg-[rgba(190,190,190,0.2)] rounded-[4px]"></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  /** 是否显示标题占位图 */
  title: { type: [Boolean], default: true },
})
</script>
