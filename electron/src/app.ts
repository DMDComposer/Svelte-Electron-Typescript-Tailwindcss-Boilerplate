import { app, BrowserWindow, ipcMain, shell } from "electron"
import { join } from "path"
import setupHotReloading from "./__hot-reload"

const DEV_MODE = !app.isPackaged
let win: BrowserWindow

setupHotReloading(DEV_MODE)
app.whenReady().then(main)

// Create window and load svelte app
async function main() {
	win = new BrowserWindow({
		autoHideMenuBar: true, // disable to have default behavior
		frame: false, // disable to have default behavior and remove the custom-navigation bar
		// Disables the frame with the os-specific buttons and title.
		width: 800,
		height: 650,
		webPreferences: {
			// make sure this is enabled for safer preloading.
			contextIsolation: true,
			devTools: DEV_MODE === true ? true : false,
			preload: join(__dirname, "preload.js"),
		},
		show: false, // hide by default as to avoid flickering bug
	})

	win.loadFile(join(__dirname, "../../public/index.html"))
	win.on("ready-to-show", () => win.show())
	win.on("show", () => {
		win.webContents.openDevTools()
		win.focus()
	})
}

// Common Window Events From Custom Title Bar
ipcMain.on("window/exit", () => app.quit())
ipcMain.on("window/minimize", () => win.minimize())
ipcMain.on("window/show", () => win.show())

// handle external links
ipcMain.on("open/url", (_, url: string) => shell.openExternal(url))

// Handle VERSION REQUESTS
ipcMain.handle("versions/app", async () => app.getVersion())
ipcMain.handle("versions/nodejs", async () => process.versions.node)
ipcMain.handle("versions/chrome", async () => process.versions.chrome)
ipcMain.handle("versions/electron", async () => process.versions.electron)
