<script lang="ts" setup>
const startTime = ref<string>("");
const endTime = ref<string>("");
interface Props {
  startPlaceholder?:string
  endPlaceholder?:string
  start?:string
  end?:string
  step?:string
}

const props = withDefaults(defineProps<Props>(), {
  startPlaceholder:'请选择开始时间',
  endPlaceholder:'请选择结束时间',
  start:"08:30",
  step:"00:15",
  end:"18:30"
});
const emits = defineEmits(["change"]);

const clear = () => {
  endTime.value = "";
}
const endChange = () => {
  emits("change", {
    start: startTime.value,
    end: endTime.value
  });
}
</script>

<template>
  <el-time-select
      v-model="startTime"
      :max-time="endTime"
      class="mr-4"
      :placeholder="props.startPlaceholder"
      :start="props.start"
      :step="props.step"
      :end="props.end"
      @change="clear"
      v-bind="$attrs.startOptions"
  />
  <el-time-select
      v-model="endTime"
      :min-time="startTime"
      :placeholder="props.endPlaceholder"
      :start="props.start"
      :disabled="startTime === ''"
      :step="props.step"
      :end="props.end"
      @change="endChange"
      v-bind="$attrs.endOptions"
  />
</template>

<style lang="scss" scoped>

</style>