import { mount } from 'svelte';
import { createInertiaApp } from "@inertiajs/svelte";
import "../css/app.css";


const withAppDefaults = new URLSearchParams(window.location.search).get('withAppDefaults')

createInertiaApp({
  resolve: async (name) => {
    const pages = import.meta.glob('./pages/**/*.svelte', { eager: true })

    if (name === 'DeferredProps/InstantReload') {
      // Add small delay to ensure the component is loaded after the initial page load
      // This is for projects that don't use { eager: true } in import.meta.glob
      await new Promise((resolve) => setTimeout(resolve, 50))
    }

    return pages[`./pages/${name}.svelte`]
  },
  setup({ el, App, props }) {
    mount(App, { target: el, props })
  },
  ...(withAppDefaults && {
    defaults: {
      visitOptions: (href, options) => {
        return { headers: { ...options.headers, 'X-From-App-Defaults': 'test' } }
      },
    },
  }),
})