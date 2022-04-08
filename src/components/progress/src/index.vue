<script lang="ts" setup>
import {ref} from "vue";

interface Props {
  percentage: number
  isAnimation?: boolean
  time?: number
}

const props = withDefaults(defineProps<Props>(), {
  percentage: 0,
  isAnimation: false,
  time: 3000
});
const p = ref(0)
onMounted(() => {
  if (props.isAnimation) {
    const t = Math.ceil(props.time / props.percentage);
    let timer = setInterval(() => {
      p.value++;
      if (p.value > props.percentage || p.value === props.percentage) {
        p.value = props.percentage;
        clearInterval(timer)
      } else {
        p.value = props.percentage;
      }
    }, t);
  }else{
    p.value = props.percentage;
  }
})
</script>

<template>
  <el-progress v-bind="$attrs" :percentage="p"></el-progress>
</template>

<style lang="scss" scoped>

</style>