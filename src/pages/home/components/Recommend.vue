<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="val in list" :key="val.id">
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
	props:{
		list:Array
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
