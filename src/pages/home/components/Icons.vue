<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(pageCont,inx) of pages" :key="inx">
        <div class="icon" v-for="item in pageCont" :key="item.id">
          <div class="icon_img">
            <img class="icon_img_cont" :src="item.imgUrl">
          </div>
          <p class="icon_desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "icons",
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption:{
        autoplay:false
      }
    }
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach( (item, index) => {
        const page = Math.floor(index / 8);
        if ( !pages[page] ) {
          pages[page] = [];
        }
        pages[page].push(item);

      })
      return pages
    }
  }
}

</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

.icons>>>.swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  margin-top:.1rem;
  height: 0;
  overflow: hidden;
  padding-bottom: 50%;
}

.icon {
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  overflow: hidden;
}

.icon_img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: .44rem;
  padding: .1rem;
  box-sizing: border-box;
}

.icon_img_cont {
  display: block;
  margin: 0 auto;
  height: 100%;
}

.icon_desc {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: .44rem;
  line-height: .44rem;
  text-align: center;
  color: $dark;
  ellipsis()
}

</style>
