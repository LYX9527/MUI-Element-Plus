<script lang="ts" setup>
//导入省市县数据
import arrAreas from "../lib/pca-code.json"
import {AreaData, AreaItems} from "@/types";
//省绑定值
const province = ref<string>("")
//市绑定值
const city = ref<string>("")
//县(区)绑定值
const area = ref<string>("")
//省列表
const provinceList = ref<AreaItems[]>(arrAreas)
//市列表
const cityList = computed(() => {
  const tempPro = province.value
  if (tempPro === "") return []
  else return provinceList.value.find((item: AreaItems) => item.code === tempPro)!.children!
})
//县(区)列表
const areaList = computed(() => {
  const tempCity = city.value
  if (tempCity === "") return []
  else return cityList.value.find((item: AreaItems) => item.code === tempCity)!.children!
})
//清空市县
const chooseProvince = () => {
  city.value = ""
  area.value = ""
}
//清空县(区)
const chooseCity = () => {
  area.value = ""
}
const emits = defineEmits(["areaChange"])
watch(() => area.value, () => {
  let provinceData: AreaData = {
    code: province.value,
    name: province.value && provinceList.value.find((item: AreaItems) => item.code === province.value)!.name
  }
  let cityData: AreaData = {
    code: city.value,
    name: city.value && cityList.value.find((item: AreaItems) => item.code === city.value)!.name
  }
  let areaData: AreaData = {
    code: area.value,
    name: area.value && areaList.value.find((item: AreaItems) => item.code === area.value)!.name
  }
  if(area.value!==""){
    emits("areaChange", {province: provinceData, city: cityData, area: areaData})
  }
})
</script>

<template>
  <el-select @change="chooseProvince" placeholder="请选择省份" v-model="province" clearable>
    <el-option v-for="(v,i) in provinceList" :label="v.name" :value="v.code" :key="i"/>
  </el-select>
  <el-select @change="chooseCity" :disabled="province==''" class="mx-2.5" placeholder="请选择城市" v-model="city" clearable>
    <el-option v-for="(v,i) in cityList" :label="v.name" :value="v.code" :key="i"/>
  </el-select>
  <el-select :disabled="province==''||city==''" placeholder="请选择区域" v-model="area" clearable>
    <el-option v-for="(v,i) in areaList" :label="v.name" :value="v.code" :key="i"/>
  </el-select>
</template>

<style lang="scss" scoped>

</style>