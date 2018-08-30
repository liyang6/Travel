<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入汉字或拼音" name="">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCity(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: "citySearch",
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (!this.keyword) {
        this.list = [];
        return false;
      }

      var This = this;
      this.timer = setTimeout(() => {
        const res = [];
        for (var i in this.cities) {
          this.cities[i].forEach((val) => {
            if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
              res.push(val)
            }
          })
        }

        this.list = res;
      }, 100)
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  },
  methods: {
    handleCity(city) {
      /*this.$store.dispatch("changeCity",city);*/
      /*this.$store.commit("changeCityM",city);*/
      this.changeCityM(city)
      this.$router.push("/")
    },
    ...mapMutations(['changeCityM'])
  }
}

</script>
<style type="text/css" scoped lang="stylus">
@import '~styles/varibles.styl'
.search {
  height: .72rem;
  padding: 0 .1rem;
  background: $bgColor;
}

.search-input {
  box-sizing: border-box;
  padding: 0 .1rem;
  height: .62rem;
  line-height: .62rem;
  width: 100%;
  text-align: center;
  border-radius: .06rem;
  color: #666;
}

.search-content {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
  background: #eee;
}

.search-item {
  line-height: .62rem;
  padding-left: .2rem;
  color: #666;
  background: #fff;
}

</style>
