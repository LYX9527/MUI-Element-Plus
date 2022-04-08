<script lang="ts" setup>
const visible = ref(false)
</script>

<template>
  <ChooseIconSrc title="选择图标" v-model:visible="visible" type="success" >
    选择图标
  </ChooseIconSrc>
</template>

<style lang="scss" scoped>

</style>