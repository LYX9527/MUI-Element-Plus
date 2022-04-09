<script lang="ts" setup>
// interface Props {
//   data?: any;
// }
//
// const props = withDefaults(defineProps<Props>(), {
//   data: ''
// });

const result = ref<string>('请选择');

const defaultMethod = ref<string>('按城市');

const selectValue = ref<string>("");

const visible = ref<Boolean>(true);
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const handleShow = () => {
  visible.value = true;
}
const handleHide = () => {
  visible.value = false;
}
</script>

<template>
  <el-popover
      placement="bottom-start"
      :width="400"
      @show = 'handleShow'
      @hide = 'handleHide'
      trigger="click"
  >
    <template #reference>
      <div class="flex items-center cursor-pointer">
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown :class="{'transform rotate-180':visible}"/>
        </div>
      </div>
    </template>
    <div class="p-2">
      <el-row>
        <el-col :span="8">
          <el-radio-group class="my_el_radio_button" size="small" v-model="defaultMethod">
            <el-radio-button label="按城市"/>
            <el-radio-button label="按省份"/>
          </el-radio-group>
        </el-col>
        <el-col :span="16">
          <el-select class="my_select w-full h-full" size="small" v-model="selectValue" filterable placeholder="Select">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>
    </div>
  </el-popover>
</template>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-left: 4px;
  transition: all .15s linear;
}
</style>