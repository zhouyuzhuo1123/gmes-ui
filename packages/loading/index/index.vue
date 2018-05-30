<template>
	<div class="gl-loading-mask" v-show="visible">
		<div class="gl-loading-spinner">
    		<div class="carcontent">
                <div class="car">
                    <div class="car_top1"></div>
                    <div class="car_top2"></div>
                    <div class="car_win1"></div>
                    <div class="car_win2"></div>
                    <div class="car_bottom1"></div>
                    <div class="car_bottom2">
                        <div class="name">{{name}}</div>
                    </div>
                    <div class="frontWheel">
                        <div class="frontfoot foot"></div>
                    </div>
                    <div class="endWheel">
                        <div class="endfoot foot"></div>
                    </div>
                    <div class="exhaust"></div>
                </div>
                <p class="message">{{message}}</p>
            </div>

		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
                name:'GEELY',
                visible:false,
                message:'没有权限'
			}
		}

	}
</script>


