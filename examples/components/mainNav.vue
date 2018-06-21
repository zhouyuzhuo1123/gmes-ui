<template>
	<div class="body-left">
		<ul class="side-nav">
		  <li  v-for="nav in navlist">
		    <a class="title">{{nav.name}}</a>
		    <ul class="side-nav">
		      <li  v-for="child in nav.children">
		        <!--  <a :href="'#/'+child.path">{{child.name}}</a> -->
		         <router-link :to="child.path" class="link" tag="li">{{child.name}}</router-link>
		      </li>
		    </ul>
		  </li>
		</ul>
  	</div>
</template>

<script>
	import navJson from '../nav.config.json'
	export default {
		name: 'Nav',
		data(){
			return {
			  navlist:navJson
			}
		}
	}
</script>

<style lang="scss" scoped>
.body-left{
	width: 230px;
	padding: 20px 0;
	position:fixed;
	overflow: auto;
	height:100%;
	
	.side-nav{
		margin: 0;
		padding: 0;
		width:260px;
		.title{
			padding: 0 24px 8px;
    	text-transform: uppercase;
		  font-size: 16px;
		  color: #333;
		  line-height: 40px;
		  height: 40px;
		  margin: 0;
		  padding: 0;
		  text-decoration: none;
		  display: block;
		  position: relative;
		  transition: .15s ease-out;
		  font-weight: 700;
		}
		li{
			list-style-type: none;
		}
		.link{
		  display: block;
		  height: 40px;
		  color: #7f8c8d;
		  line-height: 40px;
		  font-size: 14px;
		  overflow: hidden;
		  white-space: nowrap;
		  text-overflow: ellipsis;
		  font-weight: 400;
		  text-decoration :none;
		  cursor:pointer;
		}
		.router-link-active{
			color:#3faaf5;
		}
	}
}
</style>

