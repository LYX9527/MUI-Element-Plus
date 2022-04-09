<script lang="ts" setup>
interface Props {
  data?:string
}

const props = withDefaults(defineProps<Props>(), {
  data:""
});
const value = ref('')
const defaultTime = ref([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])
</script>

<template>
  <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="defaultTime"
  />
</template>

<style lang="scss" scoped>

</style>