<template>
	<ul class="list">
		<li 
			class="item" 
			v-for="item of letters" 
			:key="item"
			:ref="item"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
			@click="handleClick"
		>{{item}}</li>
	</ul>
</template>
<script type="text/javascript">
	export default {
		name:"Alphabet",
		props:{
			cities:Object
		},
		computed:{
			letters(){
				const letter=[];
				for (let i in this.cities) {
					letter.push(i);
				}
				return letter;
			}
		},
		data(){
			return {
				touchStatus:false,
				startY:0,
				timer:null,
				ele_height:0,
				top_parent:0
			}
		},
		updated(){
			const ele_first=this.$refs["A"][0];
			const ele_parent=this.$refs["A"][0].parentNode;
			this.startY=ele_first.offsetTop;
			this.ele_height=this.getStyle(ele_first,"height").replace("px","");
			this.top_parent=ele_parent.offsetTop;
		},
		methods:{
			handleClick(e){
				this.$emit("change",e.target.innerText)
			},
			handleTouchStart(){
				this.touchStatus=true;
			},
			handleTouchMove(e){
				if(this.touchStatus){
					if(this.timer){
						clearTimeout(this.timer)
					}
					setTimeout(() => {
						const touchY=e.touches[0].clientY - this.top_parent -this.startY;
						let inx=Math.floor( touchY/this.ele_height );

						if(inx >= 0 && inx < this.letters.length){
							this.$emit("change",this.letters[inx]);
						}
					},16)
					return false;
				}
			},
			handleTouchEnd(){
				this.touchStatus=false;
			},
			getStyle(ele,style){
				return ( ele.currentStyle || window.getComputedStyle(ele, null) )[style]
			}
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
