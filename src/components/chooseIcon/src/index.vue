<script lang="ts" setup>
import * as ElIcons from "@element-plus/icons-vue"
import {toLine} from "@/utils";
import {useCopy} from "@/hooks/useCopy";
const props = defineProps<{
  //弹出框标题
  title: string;
  //弹出框显示与隐藏
  visible: boolean;
  //按钮类型
  type: string;
}>()
const emits = defineEmits(["update:visible"])
const handleClick = () => {
  emits("update:visible", !props.visible)
}

const clickItems = (text:string)=>{
  const componentName = `<el-icon-${toLine(text)} />`
  useCopy(componentName)
}
</script>

<template>
  <el-button @click="handleClick" :type="type">
    <slot></slot>
  </el-button>
  <el-dialog :title="title" v-model="visible" @close="emits('update:visible',!visible)">
    <div class="mx-auto h-12 px-2.5 flex items-center border-b  font-bold text-2xl">ElementUi-Plus-Icon</div>
    <div class="flex items-center flex-wrap h-96 overflow-auto py-3 cursor-pointer">
      <div class="mt-1 w-1/5 h-16 flex items-center justify-around flex-col mb-4"
           v-for="item in Object.keys(ElIcons)"
           :key="item.id"
           @click="clickItems(item)">
        <div>
          <component :is='`el-icon-${toLine(item)}`'></component>
        </div>
        <div class="mt-2">{{item}}</div>
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
svg{
  width: 2em !important;
  height: 2em !important;
}
</style>