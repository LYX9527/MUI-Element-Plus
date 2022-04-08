<script lang="ts" setup>
import {MenuItem} from "@/components/menus/src/types";

const data: Array<MenuItem> = [
  {
    title: "Home",
    index: '0'
  },
  {
    title: "Edit",
    index: '1',
    icon: 'edit',
  },
  {
    title: "Page",
    index: '2',
    children:[
        {
            title: "Page 1",
            index: '2-1'
        },
        {
            title: "Page 2",
            index: '2-2'
        },
        {
            title: "Page 3",
            index: '2-3'
        }

    ]
  }
]

const infiniteData: Array<MenuItem> = [
  {
    title: "Home",
    index: '0'
  },
  {
    title: "Edit",
    index: '1',
    icon: 'Edit',
  },
  {
    title: "Page",
    index: '2',
    children:[
      {
        title: "Page 1",
        index: '2-1'
      },
      {
        title: "Page 2",
        index: '2-2'
      },
      {
        title: "Page 3",
        index: '2-3',
        children:[
          {
            title: "Page 3-1",
            index: '2-3-1'
          },
          {
            title: "Page 3-2",
            index: '2-3-2'
          },
          {
            title: "Page 3-3",
            index: '2-3-3',
            children:[
              {
                title: "Page 3-3-1",
                index: '2-3-3-1'
              },
              {
                title: "Page 3-3-2",
                index: '2-3-3-2'
              },
              {
                title: "Page 3-3-3",
                index: '2-3-3-3'
              }
            ]
          }
        ]
      }

    ]
  }
]
</script>

<template>
  <div class="flex h-full">
    <div>
      <MenusSrc :data="data" class="w-64" default-active="0" />
    </div>
    <div>
      <InfiniteMenu class="w-64" :data="infiniteData"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>