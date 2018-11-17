/**
 * Service making request to the app api
 */
export function api<T>(url: string): Promise<T> {
	return fetch(process.env.REACT_APP_API + url).then(response => {
		if (response.ok && response.status < 400) {
			return response.json();
		}
		throw new Error(response.statusText);
	});
}
