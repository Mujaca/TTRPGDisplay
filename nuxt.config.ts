import { resolve } from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: false,
	},

	nitro: {
		experimental: {
			websocket: true,
		},
	},
    routeRules: {
        '/api/**': {
            cors: true
        }
    },
	modules: ['@pinia/nuxt'],
	compatibilityDate: '2025-01-07',
});
