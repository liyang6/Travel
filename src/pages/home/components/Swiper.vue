<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}

</script>
<style scoped>
.wrapper>>>.swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 26.67%;
  background: #eee;
}

.swiper-img {
  width: 100%
}

</style>
