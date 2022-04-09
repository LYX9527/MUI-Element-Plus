<script lang="ts" setup>
const handelChange = (val:{end:string,start:string})=>{
  console.log(val)
}
</script>

<template>
  <ChooseTimeSrc @change="handelChange"/>
</template>

<style lang="scss" scoped>

</style>