import * as crypto from 'crypto';
import { promisify } from 'util';

import { serialize } from './cookie';
import { setCookie } from './helper';

import type { Handle } from '@sveltejs/kit';

const randomBytesAsync = promisify(crypto.randomBytes);

/**
 * Create a new CSRF token.
 */
export async function createToken() {
	// return Math.random().toString(36).slice(2);
	return (await randomBytesAsync(32)).toString('hex');
}

export function attachCsrfToken(url: string, cookieName: string): Handle {
	return async ({ event, resolve }) => {
		const res = await resolve(event);

		setCookie(res, cookieName, await createToken(), {
			path: '/',
		});

		// if (event.url.pathname === url) {
		// 	setCookie(res, cookieName, await createToken());
		// }

		return res;
	};
}
