<script lang="ts" setup>
const isCollapse = ref(false)

</script>

<template>
  <el-container>
    <el-aside width="auto">
      <ContainerSrcNavSide v-model:collapse="isCollapse"/>
    </el-aside>
    <el-container>
      <el-header class="p-0 border-b">
        <ContainerSrcNavHeader v-model:collapse="isCollapse"/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>

</style>