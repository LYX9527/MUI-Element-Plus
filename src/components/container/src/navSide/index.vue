<script lang="ts" setup>
import {MenuItem} from "@/components/menus/src/types";

const props = defineProps<{
  collapse: boolean
}>()
const data: Array<MenuItem> = [
  {
    icon: 'menu',
    title: '首页',
    index:"/",
  },
  {
    icon: 'Check',
    title: '图标选择器',
    index:"/chooseIcon",
  },
  {
    icon: 'Location',
    title: '省市区选择器',
    index:"/chooseArea",
  },
  {
    icon: 'Sort',
    title: '趋势标记',
    index:"/trend",
  },
  {
    icon: 'Timer',
    title: '时间选择',
    index:"/chooseTime",
  },
  {
    icon: 'Message',
    title: '通知菜单',
    index:"/notification",
  },
  {
    icon: 'Bell',
    title: '城市选择',
    index:"6",
  },
  {
    icon:'Coin',
    title:'菜单选择',
    index:"/menus",
  },
  {
    icon:"",
    title:"进度条",
    index:"/progress",
  },
  {
    icon:'',
    title:'时间选择',
    index:'/1chooseTime'
  }
]
</script>

<template>
  <MenusSrc :default-active="$route.path" :data="data" :collapse="collapse" class="el-menu-vertical-demo" :router="true" />
</template>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>