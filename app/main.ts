console.log(
  `%c  
  ____                      _____          _ _
  / ___| _ __   _____      _|  ___|__  _ __| (_) ___
  \___ \| '_ \ / _ \ \ /\ / / |_ / _ \| '__| | |/ _ \
  ___) | | | | (_) \ V  V /|  _| (_) | |  | | | (_) |
  |____/|_| |_|\___/ \_/\_/ |_|  \___/|_|  |_|_|\___/  
  `,
  "font-family:monospace; color: orange;"
);

// Global code
import "../styles/app.scss";
import flamethrower from "flamethrower-router";
import { scrollSave } from "./util/scroll";
import "./util/key-bindings";

// saves scroll position on navbar
scrollSave();

// Router
export const router = flamethrower({ prefetch: "hover", log: false });

// UI
export * from "./components/ui/item-comment.svelte";
export * from "./components/ui/modal-action.svelte";
export * from "./components/ui/modal-dialog.svelte";
export * from "./components/ui/route-loader.svelte";
export * from "./components/ui/toast-message.svelte";
export * from "./components/ui/navbar-toggle.svelte";
export * from "./components/ui/img-reveal.svelte";
export * from "./components/ui/scroll-show.svelte";
export * from "./components/ui/discord-count.svelte";
export * from "./components/ui/scroll-up.svelte";

// Shared
export * from "./components/ui/loading-spinner.svelte";
