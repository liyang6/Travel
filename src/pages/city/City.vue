<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
	</div>
</template>
<script type="text/javascript">
	import CityHeader from './components/CityHeader'
	import CitySearch from './components/CitySearch'
	export default {
		name:"city",
		components:{
			CityHeader,
			CitySearch
		}
	}
</script>

<style type="text/css">
	
</style>
