<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<div class="iconfont header-back">&#xe624;</div>
		</router-link>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"cityHeader"
	}
</script>

<style type="text/css" scoped lang="stylus">
@import '~styles/varibles.styl'
.header{
	position: relative;
	height:$headerHeight;
	line-height: $headerHeight;
	overflow: hidden;
	text-align: center;
	color: #fff;
	background: $bgColor 
}
.header-back{
	position: absolute;
	top:0;
	left:0;
	width: .64rem;
	font-size: .4rem;
	text-align: center;
	color: #fff;
}	
</style>
