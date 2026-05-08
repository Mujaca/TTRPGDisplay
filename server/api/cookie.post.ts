import { createError, defineEventHandler, readBody, setCookie } from 'h3'

type CookieBody = {
	name?: string
	value?: string
	maxAge?: number
}

export default defineEventHandler(async (event) => {
	const body = await readBody<CookieBody>(event)

	if (!body?.name || body.value === undefined) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Cookie name and value are required',
		})
	}

	setCookie(event, body.name, body.value, {
		httpOnly: true,
		sameSite: 'lax',
		path: '/',
		maxAge: body.maxAge,
	})

	return { success: true }
})
