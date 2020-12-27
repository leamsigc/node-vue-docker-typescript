<template>
  <div class="parent">
    <header class="text-gray-600 body-font bg-indigo-600">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <router-link to="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
              <path
                d="M13.499 23c-.684 0-1.17-.132-1.458-.396-.276-.276-.414-.678-.414-1.206 0-.156.006-.402.018-.738.024-.348.054-.756.09-1.224.036-.468.072-.978.108-1.53.048-.552.096-1.116.144-1.692.06-.708.108-1.314.144-1.818a51.595 51.595 0 00.162-2.232c.024-.252.036-.468.036-.648.012-.192.018-.366.018-.522.012-.156.018-.324.018-.504 0-.096.03-.162.09-.198a.288.288 0 01.18-.072c.312 0 .654-.006 1.026-.018l1.116-.072c.372-.024.732-.042 1.08-.054.348-.024.654-.036.918-.036.768 0 1.428.096 1.98.288.552.18.996.45 1.332.81.348.348.6.774.756 1.278.168.504.252 1.08.252 1.728 0 .708-.096 1.392-.288 2.052a4.877 4.877 0 01-.864 1.728 4.253 4.253 0 01-1.53 1.206c-.624.3-1.368.45-2.232.45-.516 0-.954-.054-1.314-.162l-.252 3.312a.456.456 0 01-.072.216c-.036.036-.108.054-.216.054h-.828zm2.916-10.26c-.156 0-.33.012-.522.036-.192.012-.396.03-.612.054l-.09 1.836c-.036.72-.084 1.476-.144 2.268.18.048.354.084.522.108.18.012.342.018.486.018.42 0 .756-.096 1.008-.288.264-.204.468-.45.612-.738.144-.288.24-.588.288-.9.048-.312.072-.582.072-.81 0-.516-.12-.906-.36-1.17-.228-.276-.648-.414-1.26-.414z"
                fill="#02E079"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="11.627"
                y="10.04"
                width="9.468"
                height="14.96"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feColorMatrix values="0 0 0 0 0.10365 0 0 0 0 0.01125 0 0 0 0 0.3 0 0 0 0.27 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
            </defs>
          </svg>
          <span class="ml-3 text-xl">Plan-it</span>
        </router-link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
          <router-link to="/" class="mr-5 hover:text-gray-300">Home</router-link>
          <a class="mr-5 hover:text-gray-300">Schedule</a>
        </nav>
        <router-link
          to="/login"
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Login
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </header>
    <router-view />
    <footer class="text-gray-600 body-font">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap md:text-left text-center">
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-200">
        <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Button
            </button>
            <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
              Bitters chicharrones fanny pack <br class="lg:block hidden" />waistcoat green juice
            </p>
          </div>
          <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            © 2020 tailblocks —
            <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer"
              >@knyttneve</a
            >
          </p>
          <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm"
            >Enamel pin tousled raclette tacos irony</span
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "./assets/css/styles.scss";
body {
  @apply bg-gray-100;
}
</style>
