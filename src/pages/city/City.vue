<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list :cities="cities" :hotCities="hotCities"></city-list>
		<alphabet :cities="cities"></alphabet>
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	import CityHeader from './components/CityHeader'
	import CitySearch from './components/CitySearch'
	import CityList from './components/CityList'
	import Alphabet from './components/Alphabet'
	export default {
		name:"city",
		components:{
			CityHeader,
			CitySearch,
			CityList,
			Alphabet
		},
		data(){
			return {
				cities:{},
				hotCities:[]
			}
		},
		methods:{
			getCityInfo(){
				axios.get('/static/mock/city.json').then(this.getCityInfoSucc)
			},
			getCityInfoSucc(res){
				res=res.data;
				if(res.ret && res.data){
					const data=res.data;
					this.cities=data.cities;
					this.hotCities=data.hotCities;
				}
			}
		},
		mounted(){
			this.getCityInfo()
		}
	}
</script>

<style type="text/css">
	
</style>
