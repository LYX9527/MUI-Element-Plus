<script lang="ts" setup>
const props = defineProps<{
  collapse: boolean
}>()
const emits = defineEmits(["update:collapse"])
const changeCollapse = () => {
  emits("update:collapse", !props.collapse)
}
</script>

<template>
  <div class="flex items-center px-6 h-16">
    <span @click="changeCollapse">
      <el-icon-expand v-if="collapse"/>
      <el-icon-fold v-else/>
    </span>
  </div>
</template>

<style lang="scss" scoped>
svg{
  width: 1em;
  height: 1em;
}
</style>