<script>
  // Capture props from goravel
  export let props;
</script>

<div
  class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"
>
  <div class="max-w-7xl mx-auto p-6 lg:p-8">
    <div class="flex justify-center flex-col items-center">
      <img
        src="https://www.goravel.dev/logo.png"
        width="400"
        alt="Logo"
        class="medium-zoom-image"
      />
      <h1 class="text-6xl font-bold text-gray-900 dark:text-white">+</h1>
      <div style="width: 100%; max-width: 400px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 634.6 177.4"
          style="width: 100%; max-width: 400px"
        >
          <path
            d="M138.2 23.5c7.9 11.1 11 24.8 8.6 38.2-1.1 6.3-3.6 12.3-7.1 17.7 5.2 9.8 6.9 21.1 4.9 32-2.4 13.1-10.1 24.6-21.4 31.7l-41.3 26.3c-23.5 15-56.1 8-72.5-15.6-7.9-10.9-11-24.7-8.6-38.1 1.1-6.3 3.6-12.3 7.1-17.7C2.7 88.2 1 76.9 3 66c2.4-13.1 10.1-24.7 21.4-31.7L65.7 7.9c23.5-15 56-8 72.5 15.6"
            style="fill:#ff3e00"
          />
          <path
            d="M61.6 156.2c3-.8 5.8-2 8.4-3.7l41.3-26.3c6.8-4.3 11.5-11.2 12.9-19.1 1.4-8-.4-16.3-5.2-23-7.8-11.3-21.9-16.5-35.2-13.1-3 .8-5.8 2-8.4 3.7l-15.8 10c-.8.5-1.6.9-2.5 1.1-4 1-8.3-.5-10.6-3.9-1.4-2-2-4.5-1.6-6.9.4-2.4 1.8-4.5 3.9-5.7L90.1 43c.8-.5 1.6-.9 2.5-1.1 4-1 8.3.5 10.6 3.9 1.3 1.8 1.9 4 1.7 6.1v1.5c-.1 0 1.4.5 1.4.5 5.8 1.8 11.3 4.5 16.2 8.1l2.1 1.6.8-2.4c.4-1.3.7-2.6 1-3.9 1.4-8-.4-16.3-5.2-23C113.4 23 99.3 17.8 86 21.2c-3 .8-5.8 2-8.4 3.7L36.3 51.2c-6.8 4.3-11.5 11.2-12.9 19.1-1.4 8 .4 16.3 5.2 23 7.8 11.3 21.9 16.5 35.2 13.1 3-.8 5.8-2 8.4-3.7L88 92.6c.8-.5 1.6-.9 2.5-1.1 4-1 8.3.5 10.6 3.9 1.4 2 2 4.5 1.6 6.9-.4 2.4-1.8 4.5-3.9 5.8l-41.3 26.3c-.8.5-1.6.9-2.5 1.1-4 1-8.3-.5-10.6-3.9-1.3-1.8-1.9-4-1.7-6.1V124c.1 0-1.4-.5-1.4-.5-5.8-1.8-11.3-4.5-16.2-8.1l-2.1-1.6-.8 2.4c-.4 1.3-.7 2.6-1 3.9-1.4 8 .4 16.3 5.2 23 7.8 11.3 21.9 16.5 35.2 13.1"
            style="fill:#fff"
          />
          <path
            d="M242 127.9c-6.2.2-12.3-1.6-17.4-4.9-4.8-3.2-8.4-8-10.2-13.5l10.6-3.9c1.5 3.4 3.9 6.3 6.9 8.4 3.1 2.1 6.8 3.2 10.5 3.1 3.6.2 7.1-.9 10-3 2.5-2.1 3.9-5.4 3.7-8.7 0-1.5-.3-3-1-4.4-.6-1.2-1.4-2.3-2.3-3.3-1.2-1.1-2.5-2-4-2.7-1.8-.9-3.3-1.6-4.5-2.1-1.2-.5-2.9-1.1-5.3-1.9-2.9-1-5.1-1.8-6.5-2.4-2-.8-3.9-1.8-5.7-2.9-2-1-3.8-2.4-5.3-4-1.3-1.6-2.4-3.3-3.2-5.3-3.1-7.5-1-16.1 5.1-21.3 4.3-3.8 10.2-5.7 17.7-5.7 6.2 0 11.3 1.4 15.3 4.1 3.9 2.6 6.7 6.5 8.1 10.9l-10.4 3.5c-1-2.3-2.8-4.3-5-5.6-2.7-1.5-5.7-2.2-8.8-2.1-3-.2-6 .7-8.5 2.4-2.1 1.6-3.2 4.1-3.1 6.7 0 2 .9 3.9 2.4 5.2 1.4 1.4 3.1 2.6 5 3.4 1.7.7 4.4 1.7 7.9 2.9 2.2.8 3.8 1.4 4.8 1.8 1 .4 2.6 1.1 4.6 2 1.6.7 3.2 1.6 4.7 2.5 1.3 1 2.6 2 3.8 3.1 1.3 1.1 2.4 2.5 3.3 4 .8 1.5 1.5 3.2 1.9 4.9.6 2 .8 4.1.8 6.1 0 7.1-2.4 12.6-7.3 16.6-4.8 4-11.1 6-18.6 6Zm69.4-1.3-26-75.8h12.1l17.2 52.9c1 2.8 1.7 5.7 2.4 8.7.6-2.9 1.4-5.8 2.4-8.7l17-52.9h12l-25.9 75.8h-11.3Zm60.2 0V50.8h47v10.6h-35.8v20.8h23.1v10.6h-23.1V116h38.1v10.6h-49.4Zm78.1 0V50.8H461v65h37.1v10.8h-48.3Zm90.8-65v65h-11.3v-65h-21.5V50.8h54.2v10.8h-21.5Zm44.7 65V50.8h47v10.6h-35.8v20.8h23.1v10.6h-23.1V116h38.1v10.6h-49.4Z"
            style="fill:#ffffffcc"
          />
        </svg>
      </div>
    </div>

    <div class="mt-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <a
          href="https://goravel.dev"
          class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-blue-500"
        >
          <div>
            <div
              class="h-16 w-32 flex items-center justify-center rounded-full"
            >
              <img
                src="https://www.goravel.dev/logo.png"
                alt="Logo"
                class="medium-zoom-image"
              />
            </div>

            <h2
              class="mt-6 text-xl font-semibold text-gray-900 dark:text-white"
            >
              Goravel
            </h2>

            <p
              class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
            >
              Goravel is a web application framework with complete functions and
              good scalability. As a starting scaffolding to help Gopher quickly
              build their own applications. The framework style is consistent
              with Laravel, let Php developer don't need to learn a new
              framework, but also happy to play around Golang! In tribute to
              Laravel!
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="self-center shrink-0 stroke-blue-500 w-6 h-6 mx-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </a>

        <a
          href="https://svelte.dev/"
          class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-blue-500"
        >
          <div>
            <div
              class="h-16 w-32 flex items-center justify-center rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 634.6 177.4"
                width="400"
              >
                <path
                  d="M138.2 23.5c7.9 11.1 11 24.8 8.6 38.2-1.1 6.3-3.6 12.3-7.1 17.7 5.2 9.8 6.9 21.1 4.9 32-2.4 13.1-10.1 24.6-21.4 31.7l-41.3 26.3c-23.5 15-56.1 8-72.5-15.6-7.9-10.9-11-24.7-8.6-38.1 1.1-6.3 3.6-12.3 7.1-17.7C2.7 88.2 1 76.9 3 66c2.4-13.1 10.1-24.7 21.4-31.7L65.7 7.9c23.5-15 56-8 72.5 15.6"
                  style="fill:#ff3e00"
                />
                <path
                  d="M61.6 156.2c3-.8 5.8-2 8.4-3.7l41.3-26.3c6.8-4.3 11.5-11.2 12.9-19.1 1.4-8-.4-16.3-5.2-23-7.8-11.3-21.9-16.5-35.2-13.1-3 .8-5.8 2-8.4 3.7l-15.8 10c-.8.5-1.6.9-2.5 1.1-4 1-8.3-.5-10.6-3.9-1.4-2-2-4.5-1.6-6.9.4-2.4 1.8-4.5 3.9-5.7L90.1 43c.8-.5 1.6-.9 2.5-1.1 4-1 8.3.5 10.6 3.9 1.3 1.8 1.9 4 1.7 6.1v1.5c-.1 0 1.4.5 1.4.5 5.8 1.8 11.3 4.5 16.2 8.1l2.1 1.6.8-2.4c.4-1.3.7-2.6 1-3.9 1.4-8-.4-16.3-5.2-23C113.4 23 99.3 17.8 86 21.2c-3 .8-5.8 2-8.4 3.7L36.3 51.2c-6.8 4.3-11.5 11.2-12.9 19.1-1.4 8 .4 16.3 5.2 23 7.8 11.3 21.9 16.5 35.2 13.1 3-.8 5.8-2 8.4-3.7L88 92.6c.8-.5 1.6-.9 2.5-1.1 4-1 8.3.5 10.6 3.9 1.4 2 2 4.5 1.6 6.9-.4 2.4-1.8 4.5-3.9 5.8l-41.3 26.3c-.8.5-1.6.9-2.5 1.1-4 1-8.3-.5-10.6-3.9-1.3-1.8-1.9-4-1.7-6.1V124c.1 0-1.4-.5-1.4-.5-5.8-1.8-11.3-4.5-16.2-8.1l-2.1-1.6-.8 2.4c-.4 1.3-.7 2.6-1 3.9-1.4 8 .4 16.3 5.2 23 7.8 11.3 21.9 16.5 35.2 13.1"
                  style="fill:#fff"
                />
                <path
                  d="M242 127.9c-6.2.2-12.3-1.6-17.4-4.9-4.8-3.2-8.4-8-10.2-13.5l10.6-3.9c1.5 3.4 3.9 6.3 6.9 8.4 3.1 2.1 6.8 3.2 10.5 3.1 3.6.2 7.1-.9 10-3 2.5-2.1 3.9-5.4 3.7-8.7 0-1.5-.3-3-1-4.4-.6-1.2-1.4-2.3-2.3-3.3-1.2-1.1-2.5-2-4-2.7-1.8-.9-3.3-1.6-4.5-2.1-1.2-.5-2.9-1.1-5.3-1.9-2.9-1-5.1-1.8-6.5-2.4-2-.8-3.9-1.8-5.7-2.9-2-1-3.8-2.4-5.3-4-1.3-1.6-2.4-3.3-3.2-5.3-3.1-7.5-1-16.1 5.1-21.3 4.3-3.8 10.2-5.7 17.7-5.7 6.2 0 11.3 1.4 15.3 4.1 3.9 2.6 6.7 6.5 8.1 10.9l-10.4 3.5c-1-2.3-2.8-4.3-5-5.6-2.7-1.5-5.7-2.2-8.8-2.1-3-.2-6 .7-8.5 2.4-2.1 1.6-3.2 4.1-3.1 6.7 0 2 .9 3.9 2.4 5.2 1.4 1.4 3.1 2.6 5 3.4 1.7.7 4.4 1.7 7.9 2.9 2.2.8 3.8 1.4 4.8 1.8 1 .4 2.6 1.1 4.6 2 1.6.7 3.2 1.6 4.7 2.5 1.3 1 2.6 2 3.8 3.1 1.3 1.1 2.4 2.5 3.3 4 .8 1.5 1.5 3.2 1.9 4.9.6 2 .8 4.1.8 6.1 0 7.1-2.4 12.6-7.3 16.6-4.8 4-11.1 6-18.6 6Zm69.4-1.3-26-75.8h12.1l17.2 52.9c1 2.8 1.7 5.7 2.4 8.7.6-2.9 1.4-5.8 2.4-8.7l17-52.9h12l-25.9 75.8h-11.3Zm60.2 0V50.8h47v10.6h-35.8v20.8h23.1v10.6h-23.1V116h38.1v10.6h-49.4Zm78.1 0V50.8H461v65h37.1v10.8h-48.3Zm90.8-65v65h-11.3v-65h-21.5V50.8h54.2v10.8h-21.5Zm44.7 65V50.8h47v10.6h-35.8v20.8h23.1v10.6h-23.1V116h38.1v10.6h-49.4Z"
                  style="fill:#ffffffcc"
                />
              </svg>
            </div>

            <h2
              class="mt-6 text-xl font-semibold text-gray-900 dark:text-white"
            >
              Svelte
            </h2>

            <p
              class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
            >
              Svelte is a UI framework that uses a compiler to let you write
              breathtakingly concise components that do minimal work in the
              browser, using languages you already know — HTML, CSS and
              JavaScript. It’s a love letter to web development. But don’t take
              our word for it. Developers consistently rank Svelte as the
              framework they’re most excited about using.
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="self-center shrink-0 stroke-blue-500 w-6 h-6 mx-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </a>
      </div>
    </div>

    <div
      class="flex justify-center mt-16 px-0 sm:items-center sm:justify-between"
    >
      <div class="ml-4 text-sm text-gray-500 dark:text-gray-400 flex gap-2">
        <p>Goravel {props.version}</p>
        <p>Svelte {props.svelte}</p>
        <p>Inertiajs {props.inertiajs}</p>
      </div>
    </div>
  </div>
</div>
