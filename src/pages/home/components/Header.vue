<template>
  <div class="header">
  	<div class="header-left">
  		<div class="iconfont back-icon">&#xe624;</div>
  	</div>
  	<div class="header-input">
  		<span class="iconfont">&#xe632;</span>输入城市/经典/主题
  	</div>
	<router-link to="/city">
  		<div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe6aa;</span></div>
	</router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "homeHeader",
  computed:{
  	...mapState(['city'])
  }
}

</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'
.header
	display:flex
	line-height:$headerHeight;
	background:$bgColor
	color:#fff
	.header-left
		width:.64rem
		.back-icon
			text-align:center
			font-size:.4rem
	.header-input
		margin-top:.12rem
		margin-left:.1rem
		padding-left:.2rem
		flex:1
		height: .64rem
		line-height: .64rem
		background:#fff
		border-radius:.1rem 
		color:#ccc
	.header-right
		min-width:1.04rem
		padding:0 .1rem
		text-align:center
		color:#fff
		.arrow-icon
			font-size:.3rem

</style>
