<template>
	<div class="container" @click="handelGallary">
		<div class="wrapper">
			<swiper :options="swiperOptions">
		      <!-- slides -->
		      <swiper-slide v-for="(item,inx) in imgs" :key="inx">
		        <img class="gallary-img" :src="item">
		      </swiper-slide>
		      
		      <div class="swiper-pagination" slot="pagination"></div>
		    </swiper>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:"gallary",
		data(){
			return {
				swiperOptions:{
					pagination:".swiper-pagination",
					paginationType:"fraction",
					observeParents:true,
					observer:true
				}
			}
		},
		props:{
			imgs:{
				type:Array,
				default (){
					return []
				}
			}
		},
		methods:{
			handelGallary(){
				this.$emit("closeImg");
			}
		}
	}
</script>

<style type="text/css" scoped>
.container{
	display: flex;
	flex-direction: column;
	justify-content: center;

	position: fixed;
	left:0;
	right:0;
	top:0;
	bottom: 0;
	z-index: 99;
	background: #000;
}
.wrapper{
	width: 100%;
	padding-top: 50%;
	padding-bottom: 50%;
	height: 0;
	background: #fff;
}
.gallary-img{
	width: 100%;
}
.swiper-pagination{
	bottom:-1rem;
	color: #fff;
}
.swiper-container{
	overflow: initial;
	transform: translate(0,-50%);
}

</style>