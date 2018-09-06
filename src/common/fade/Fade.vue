<template>
  <transition>
    <slot></slot>
  </transition>
</template>
<script type="text/javascript">
export default {
  name: "fadeAnimation"
}

</script>
<style type="text/css" scoped lang="stylus">
.v-enter,.v-leave{
  opacity: 0;
}
.v-enter-active,.v-leave-active{
  transition: opacity .5s;
}
</style>
