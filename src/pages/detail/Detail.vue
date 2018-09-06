<template>
  <div>
    <detail-banner 
    	:sightName="sightName"
    	:bannerImg="bannerImg"
    	:gallaryImgs="gallaryImgs"
    ></detail-banner>
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
import axios from 'axios'

export default {
  name: "detail",
  components:{
  	DetailBanner,
  	DetailHeader,
  	DetailList
  },
  data(){
  	return {
  		sightName:"",
  		bannerImg:"",
  		gallaryImgs:[],
  		list:[]
  	}
  },
  methods:{
  	getDetailInfo(){
  		axios.get('/static/mock/detail.json',{
  			params:{
  				id:this.$route.params.id
  			}
  		}).then(this.handeleGetDataSucc)
  	},
  	handeleGetDataSucc(res){
  		res=res.data;
  		if(res.ret && res.data){
  			let data=res.data;
  			this.sightName=data.sightName;
  			this.bannerImg=data.bannerImg;
  			this.gallaryImgs=data.gallaryImgs;
  			this.list=data.categoryList;
  		}
  	}
  },
  mounted(){
  	this.getDetailInfo();
  }
}

</script>
<style type="text/css">
	.content{
		height: 50rem;
	}
</style>
