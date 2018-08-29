<template>
	<ul class="list">
		<li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
	</ul>
</template>
<script type="text/javascript">
	export default {
		name:"Alphabet",
		props:{
			cities:Object
		}
	}
</script>

<style type="text/css" scoped lang="stylus">
@import '~styles/varibles.styl'
.list{
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	top:1.58rem;
	right:0;
	bottom: 0;
	width: .4rem;
}
.item{
	line-height: .4rem;
	text-align: center;
	color:$bgColor
}
</style>
