<script lang="ts" setup>
import {toLine} from "@/utils";

interface Props {
  classType?: string;
  text?: string;
  upIconColor?: string;
  downIconColor?: string;
  reverseColor?: boolean;
  upTextColor?: string;
  downTextColor?: string;
  upIcon?: string;
  downIcon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  classType: 'up',
  text: '',
  upIconColor: '#f5222d',
  downIconColor: '#52c41a',
  reverseColor: false,
  upTextColor: '#000',
  downTextColor: '#000',
  upIcon: 'CaretTop',
  downIcon: 'CaretBottom',
});

let slots = useSlots();
</script>

<template>
  <div class="flex ">
    <div class="text-sm"
         :style="{color: props.classType==='up'?
         props.upTextColor:
         props.downTextColor
    }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ props.text }}</div>
    </div>
    <div>
      <component
          :is="`el-icon-${toLine(props.upIcon)}`"
          :style="{color:props.reverseColor?
          props.downIconColor:
          props.upIconColor
          }"
          v-if="props.classType ==='up'"/>
      <component
          :is="`el-icon-${toLine(props.downIcon)}`"
          :style="{color:props.reverseColor?
          props.upIconColor:
          props.downIconColor
          }"
          v-else/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
svg{
  width: 1em;
  height: 1em;
}
</style>