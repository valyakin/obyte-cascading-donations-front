import obyte from 'obyte'
import constants from 'ocore/constants'

export const SET_AA_STATE_VARS = 'obyte/setAaStateVars'

/* eslint-disable-next-line no-undef */
const config = __APP_CONFIG__

const client = new obyte.Client(
	config.hub.ws,
	{
		reconnect: true,
		testnet: constants.bTestnet
	}
)

export default () => ({
	namespaced: true,
	state: {
		vars: {}
	},
	mutations: {
		[SET_AA_STATE_VARS] (state, vars) {
			state.vars = vars
		}
	},
	actions: {
		async init ({ commit }) {
			client.api.getAaStateVars({
				address: config.aa.address
			}, function (err, result) {
				if (err) throw new Error(err)
				commit(SET_AA_STATE_VARS, result)
			})
		}
	}
})
