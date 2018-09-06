<template>
	<div>
		<div class="banner" @click="handleBanner">
			<img class="banner-img" :src="bannerImg">
			<div class="banner-info">
				<div class="banner-title">{{sightName}}</div>
				<div  class="banner-number"><span class="iconfont arrow-icon">&#xe64a;</span>{{gallaryImgs.length}}</div>
			</div>
		</div>

		<common-gallary @closeImg="handleImgClose" :imgs="gallaryImgs" v-show="showGallary"></common-gallary>
	</div>
</template>
<script type="text/javascript">
import CommonGallary from 'common/gallary/Gallary'	
export default	{
	name:"DetailBanner",
	components:{
		CommonGallary
	},
	data(){
		return {
			imgs:[
				'http://img1.qunarzz.com/sight/p0/1507/5d/87b21344892ce3493920b8eb46794337.water.jpg_r_800x800_d60d1d3b.jpg',
				'http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg'
			],
			showGallary:false
		}
	},
	methods:{
		handleBanner(){
			this.showGallary=true;
		},
		handleImgClose(){
			this.showGallary=false;
		}
	},
	props:{
		sightName:String,
    	bannerImg:String,
    	gallaryImgs:Array
	}
}
</script>
<style scoped lang='stylus'>
.banner{
	position: relative;
	height: 0;
	padding-bottom: 55%;
	overflow: hidden;
}	
.banner-img{
	width: 100%;
}
.banner-info{
	display: flex;
	position: absolute;
	left:0;
	right:0;
	bottom: 0;
	line-height: .6rem;
	color: #fff;
	background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8))
}
.banner-title{
	flex: 1;
	font-size: .32rem
	padding:0 .2rem;
}
.banner-number{
	margin-top:.14rem;
	padding: 0 .4rem;
	line-height: .32rem;
	height: .32rem;
	font-size: .24rem;
	border-radius: .2rem;
	background: rgba(0,0,0,.6);
}
.arrow-icon{
	font-size: .24rem;
}
</style>