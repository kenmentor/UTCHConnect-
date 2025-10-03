import { writable } from "svelte/store";

export type ThemeSettings = {
  primary: string;
  secondary: string;
};

// Load from localStorage or use defaults
const stored = localStorage.getItem("theme");
const initial: ThemeSettings = stored
  ? JSON.parse(stored)
  : { primary: "#0050E6", secondary: "#FF5722" };

export const theme = writable<ThemeSettings>(initial);

// Save back to localStorage whenever it changes
theme.subscribe((value) => {
  localStorage.setItem("theme", JSON.stringify(value));

  // Update CSS vars on document root
  document.documentElement.style.setProperty("--color-primary", value.primary);
  document.documentElement.style.setProperty("--color-secondary", value.secondary);
});
