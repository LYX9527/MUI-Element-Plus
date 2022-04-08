<script lang="ts" setup>
import {options, actions} from "./data";
import {ActionOptions, ListItem} from "@/components/list/src/types";
const clickItem = (val:{item: ListItem,index:number}) => {
  console.log(val);
};
const clickAction = (val:{actions:ActionOptions,index:number})=>{
  console.log(val);
}
</script>

<template>
  <NotificationSrc value="118" isDot>
    <ListSrc
        @clickItem="clickItem"
        @clickAction="clickAction"
        :list='options'
        :actions="actions"></ListSrc>
  </NotificationSrc>
</template>

<style lang="scss" scoped>

</style>