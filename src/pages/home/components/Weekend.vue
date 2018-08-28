<template>
	<div>
		<div class="title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="val in list" :key="val.id">
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
	props:{
		list:Array
	}
}

</script>

<style scoped lang="stylus">
@import '~styles/mixins.styl'


.title{
	line-height: .8rem;
	background: #eee;
	text-indent: .2rem;
}
.item-img-wrapper{
	width:100%;
	height: 0;
	padding-bottom: 37.09%;
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
