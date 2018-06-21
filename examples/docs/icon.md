### icon 字体

<ul class="icon-list">
	<li v-for="icon in iconlist">
		<span>
			<i :class="icon"></i>
			{{icon}}
		</span>
	</li>
</ul>

<script type="text/javascript">
	export default {
		data(){
			return {
				iconlist:[
					'gl-icon-full-screen',
					'gl-icon-arrow-up-down',
					'gl-icon-pan',
					'gl-icon-plus',
					'gl-icon-search',
					'gl-icon-upload',
					'gl-icon-truck',
					'gl-icon-car',
					'gl-icon-clock',
					'gl-icon-operation',
					'gl-icon-lock',
					'gl-icon-prople',
					'gl-icon-star',
					'gl-icon-tip',
					'gl-icon-position',
					'gl-icon-shutdown',
					'gl-icon-history',
					'gl-icon-menu',

				]
			}
		}
	}

</script>