<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="val in recommendList" :key="val.id">
				<div class="item-img-wrapper">
					<img :src="val.imgUrl" class="item-img" alt="" />
				</div>
				<div class="item-info">
					<p class="item-title">{{val.title}}</p>
					<p class="item-desc">{{val.title}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	name:"HomeRecommend",
	data(){
		return {
			recommendList:[
				{
					id:"0001",
					imgUrl:"http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg",
					title:"金海湖风景区",
					desc:"1401条评论"
				},
				{
					id:"0002",
					imgUrl:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
					title:"故宫",
					desc:"14101条评论"
				},
				{
					id:"0003",
					imgUrl:"http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg",
					title:"北京欢乐谷",
					desc:"14021条评论"
				}
			]
		}
	}
}

</script>

<style scoped lang="stylus">
@import '~styles/mixins.styl'


.title{
	margin-top:.2rem;
	line-height: .8rem;
	background: #eee;
	text-indent: .2rem;
}
.item{
	display: flex;
	position: relative;
    padding: .2rem 0;
    overflow: hidden;
}
.item-img-wrapper{
	width: 2rem;
    height: 2rem;
}
.item-img-wrapper img{
	width: 100%;
}
.item-info{
	min-width: 0;
	padding:.1rem;
	flex:1;
}
.item-title{
	line-height: .54rem;
	font-size: .32rem;
	ellipsis()
}
.item-desc{
	line-height: .4rem;
	color: #ccc;
}
.item-button{
	line-height: .44rem;
	margin-top:.16rem;
	padding:0 .2rem;
	color: #fff;
	border-radius: .6rem;
	background: #ff9300;
}

</style>
