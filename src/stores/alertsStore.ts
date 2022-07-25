import { writable } from "svelte/store"

export const ALERT_TYPES = {
	SUCCESS: "success",
	ERROR: "error",
	DANGER: "danger",
	WARNING: "warning",
	INFO: "info",
	PRIMARY: "primary",
	SECONDARY: "secondary",
	LIGHT: "light",
	DARK: "dark",
}
Object.freeze(ALERT_TYPES)

export const alertMessage = writable("")
export const alertType = writable("")

export const displayAlert = (
	message: string,
	type = ALERT_TYPES.DANGER,
	resetTime: number = 5000
) => {
	alertMessage.set(message)
	alertType.set(type)

	if (resetTime) {
		setTimeout(() => {
			alertMessage.set("")
		}, resetTime)
	}
}

// test alert
displayAlert("Boilerplate Success!", ALERT_TYPES.SUCCESS)
