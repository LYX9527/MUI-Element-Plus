<script lang="ts" setup>
import {toLine} from "@/utils";
import {ActionOptions, ListOptions, ListItem} from "@/components/list/src/types";

interface Props {
  list: Array<ListOptions>
  actions?: Array<ActionOptions>,
}

const props = withDefaults(defineProps<Props>(), {
  actions: () => [],
});
const emits = defineEmits([
  "clickItem",
  "clickAction",
]);
const handleClickItem = (item: ListItem, index: number) => {
  emits("clickItem", {item, index});
}
const handleClickAction = (action: ActionOptions, index: number) => {
  emits("clickAction", {action, index});
}
</script>

<template>
  <el-tabs class="list_tabs_items">
    <el-tab-pane v-for="(v,i) in props.list" :key="i" :label="v.title">
      <el-scrollbar max-height="400px">
        <div class="flex items-center p-2 cursor-pointer hover:bg-blue-100"
             v-for="(item,index) in v.content"
             :key="index"
             @click="handleClickItem(item,index)">
          <div class="flex-1">
            <el-avatar size="small" :src="item.avatar" class="mr-2"></el-avatar>
          </div>
          <div class="flex-3 " style="flex:3">
            <div v-if="item.title" class="flex items-center justify-between">
              <div>
                {{ item.title }}
              </div>
              <el-tag v-if="item.tagType" :type="item.tagType" size="small">
                {{ item.tag }}
              </el-tag>
            </div>
            <div v-if="item.description">{{ item.description }}</div>
            <div class="text-sm text-gray-400">{{ item.time }}</div>
          </div>
        </div>
        <div class="flex h-10 border-t-2 items-center justify-center">
          <div v-for="(v,i) in props.actions"
               class="flex-1 flex items-center justify-center cursor-pointer"
               @click="handleClickAction(v,i)"
          >
            <div>
              <component :is="`el-icon-${toLine(v.icon)}`"></component>
            </div>
            <div>{{ v.title }}</div>
          </div>
        </div>
      </el-scrollbar>
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>

</style>