<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrap">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrap" v-for="item in hotCities" :key="item.id">
						<div class="button">{{item.name}}</div>
					</div>
					
				</div>
			</div>
			<div 
				class="area" 
				v-for="(item,key) in cities" 
				:key="key"
				:ref="key"
			>
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom" v-for="val in item" :key="val.id">{{val.name}}</div>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Bscroll from 'better-scroll'
	export default {
		name:"cityList",
		mounted(){
			this.scroll=new Bscroll(this.$refs.wrapper)
		},
		props:{
			cities:Object,
			hotCities:Array,
			letter:String
		},
		watch:{
			letter(){
				if(this.letter){
					const element=this.$refs[this.letter][0];
					this.scroll.scrollToElement(element);
				}
			}
		}
	}
</script>

<style type="text/css" scoped lang="stylus">
@import '~styles/varibles.styl'
.border-topbottom{
	&:before,
	&:after{
		border-color: #ccc;
	}
}
.border-bottom{
	&:before{
		border-color: #ccc;
	}
}

.list{
	position: absolute;
	top:1.58rem;
	left:0;
	right:0;
	bottom:0;
	overflow: hidden;
}
.title{
	line-height: .54rem;
	padding-left: .2rem;
	font-size: .26rem;
	background: #eee;
	color:#666;
}
.button-list{
	padding:.1rem .6rem .1rem .1rem;
	overflow: hidden;
}
.button-wrap{
	float: left;
	width: 33.33%;
}

.button{
	margin:.1rem;
	padding:.1rem 0;
	text-align: center;
	border:.02rem solid #ccc;
	border-radius: .06rem;
}
.item-list .item{
	line-height: .76rem;
	padding-left: .2rem;
	color: #666;
}
</style>
