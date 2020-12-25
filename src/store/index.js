import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import * as modules from './modules'

Vue.use(Vuex)

export default function () {
	const store = new Vuex.Store({
		modules: Object.entries(modules)
			.map(([key, factory]) => {
				return {
					key,
					value: factory()
				}
			})
			.reduce((t, entry) => ({
				...t,
				[entry.key]: entry.value
			}), {}),
		plugins: [
			createPersistedState({
				key: 'persistedState'
			})
		]
	})

	return store
}
