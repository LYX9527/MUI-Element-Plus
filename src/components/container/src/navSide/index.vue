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
    index:"/chooseCity",
  },
  {
    icon:'Coin',
    title:'菜单选择',
    index:"/menus",
  },
  {
    icon:"SmiSelect",
    title:"进度条",
    index:"/progress",
  },
  {
    icon:'Open',
    title:'日期选择',
    index:'/chooseDate'
  },{
    icon:'Open',
    title:'上传',
    index:'/uploadCtrl'
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