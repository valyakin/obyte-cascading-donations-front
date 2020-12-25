import { mapActions, mapState } from 'vuex'

export default {
	mounted () {
		this.initAaStateVars()
	},

	methods: {
		...mapActions({
			initAaStateVars: 'obyte/init'
		})
	},

	computed: {
		...mapState({
			stateVars: (state) => state.obyte.vars
		})
	}
}
