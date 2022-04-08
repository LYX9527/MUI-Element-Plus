<script lang="ts" setup>
import {toLine} from "@/utils";
import {MenuItem} from "@/components/menus/src/types";
interface Props {
  data:Array<MenuItem>
  defaultActive?:string
  router?:boolean
}

const props = withDefaults(defineProps<Props>(), {
  defaultActive: "",
});
// console.log(props.data);
</script>

<template>
<el-menu
    :default-active="props.defaultActive"
    :router="props.router"
    v-bind="$attrs"
>
  <template v-for="(v,i) in props.data" :key="i">
    <el-menu-item
        v-if="!v.children || !v.children.length"
        :index="v.index"
    >
      <component v-if="v.icon" :is="`el-icon-${toLine(v.icon)}`"/>
      <component v-else is="el-icon-menu"></component>
      <span class="ml-1.5">{{v.title}}</span>
    </el-menu-item>
    <el-sub-menu v-else :index="v.index">
      <template #title>
        <component v-if="v.icon" :is="`el-icon-${toLine(v.icon)}`"/>
        <component v-else is="el-icon-menu"></component>
        <span class="ml-1.5">{{v.title}}</span>
      </template>
      <template v-for="(item,ind) in v.children" :key="ind">
        <el-menu-item
            v-if="!item.children || !item.children.length"
            :index="item.index"
        >
          <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`"/>
          <component v-else is="el-icon-menu"></component>
          <span class="ml-1.5">{{item.title}}</span>
        </el-menu-item>
      </template>
    </el-sub-menu>
  </template>
</el-menu>
</template>

<style lang="scss" scoped>
svg{
  width: 1em;
  height: 1em;
}
</style>