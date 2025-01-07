import { resolve } from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},

	nitro: {
		experimental: {
			websocket: true,
		},
	},
	modules: ['@pinia/nuxt'],
	compatibilityDate: '2025-01-07',
});
