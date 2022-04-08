<script lang="ts" setup>
import {toLine} from "@/utils";

interface Props {
  icon?: string,
  value: string|number,
  max?:string|number,
  isDot?: boolean,
  type?: string,
}

const props = withDefaults(defineProps<Props>(), {
  icon: "Bell",
  value: "",
  max: 99,
  isDot: false,
  type: "danger",
});
</script>

<template>
  <el-popover
      placement="bottom"
      :width="300"
      trigger="click"
  >
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge class="cursor-pointer" :value="props.value" :max="props.max" :isDot="props.isDot" :type="props.type">
        <component :is="`el-icon-${toLine(props.icon)}`"/>
      </el-badge>
    </template>
  </el-popover>

</template>

<style lang="scss" scoped>

</style>