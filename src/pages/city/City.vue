<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list></city-list>
		<alphabet></alphabet>
	</div>
</template>
<script type="text/javascript">
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
		}
	}
</script>

<style type="text/css">
	
</style>
