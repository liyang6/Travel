<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
    	<detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script type="text/javascript">
import DetailBanner from './components/Banner'	
import DetailHeader from './components/Header'	
import DetailList from './components/List'	
export default {
  name: "detail",
  components:{
  	DetailBanner,
  	DetailHeader,
  	DetailList
  },
  data(){
  	return {
  		list:[{
  			title:"成人票",
  			children:[
  				{
	  				title:"成人3",
	  				children:[
		  				{
			  				title:"成人3-1"
			  			},
			  			{
			  				title:"成人5-1"
			  			}
		  			]
	  			},
	  			{
	  				title:"成人5"
	  			}
  			]
  		},
  		{
  			title:"学生票"
  		},
  		{
  			title:"儿童票"
  		},
  		{
  			title:"特惠票"
  		}]
  	}
  }
}

</script>
<style type="text/css">
	.content{
		height: 50rem;
	}
</style>
