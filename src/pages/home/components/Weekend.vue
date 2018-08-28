<template>
	<div>
		<div class="title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="val in recommendList" :key="val.id">
				<div class="item-img-wrapper">
					<img :src="val.imgUrl" class="item-img" alt="" />
				</div>
				<div class="item-info">
					<p class="item-title">{{val.title}}</p>
					<p class="item-desc">{{val.title}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	name:"HomeWeekend",
	data(){
		return {
			recommendList:[
				{
					id:"0001",
					imgUrl:"http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg",
					title:"金海湖风景区",
					desc:"1401条评论"
				},
				{
					id:"0002",
					imgUrl:"http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg",
					title:"故宫",
					desc:"14101条评论"
				},
				{
					id:"0003",
					imgUrl:"http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
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
.item-img-wrapper{
	width:100%;
	height: 0;
	padding-bottom: 41.3926%;
}
.item-img-wrapper img{
	width: 100%;
}
.item-info{
	min-width: 0;
	padding:.1rem;
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
</style>
