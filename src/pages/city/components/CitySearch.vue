<template>
	<div class="search">
		<input class="search-input" type="text" placeholder="输入汉字或拼音" name="">
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"citySearch"
	}
</script>

<style type="text/css" scoped lang="stylus">
@import '~styles/varibles.styl'
.search{
	height: .72rem;
	padding:0 .1rem;
	background:$bgColor;
}
.search-input{
	box-sizing: border-box;
	padding:0 .1rem;
	height: .62rem;
	line-height: .62rem;
	width: 100%;
	text-align: center;
	border-radius: .06rem;	
	color: #666;
}
</style>
