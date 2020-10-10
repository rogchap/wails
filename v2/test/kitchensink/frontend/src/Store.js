import { writable } from 'svelte/store';
import runtime from '@wails/runtime';

export let selectedPage = writable();

export let darkMode = writable(runtime.System.DarkModeEnabled());

// Handle Dark/Light themes automatically
runtime.System.OnThemeChange( (isDarkMode) => {
    darkMode.set(isDarkMode);
});

// LogLevel
// Create a svelte store for the logLevel and initialise with 
// the loglevel stored in the Wails runtime
export let logLevel = writable(runtime.System.LogLevel.get());

// Bind updates to the Wails store to the Svelte Store
runtime.System.LogLevel.subscribe( (newValue) => {
    logLevel.set(newValue);
})

