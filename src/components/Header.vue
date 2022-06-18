<template>
  <header class="fixed top-0 bg-white/40 backdrop-blur w-full rounded-b-2xl shadow">
    <nav class="px-6 py-8 md:flex md:justify-between md:items-center">
      <!-- Mobile menu button -->
      <div class="flex items-center justify-between md:hidden">
        <div @click="showMenu = !showMenu" class="flex">
          <button type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 7H21C21.6 7 22 6.6 22 6C22 5.4 21.6 5 21 5H3C2.4 5 2 5.4 2 6C2 6.6 2.4 7 3 7ZM22 12C22 12.6 21.6 13 21 13H3C2.4 13 2 12.6 2 12C2 11.4 2.4 11 3 11H21C21.6 11 22 11.4 22 12ZM3 17H21C21.6 17 22 17.4 22 18C22 18.6 21.6 19 21 19H3C2.4 19 2 18.6 2 18C2 17.4 2.4 17 3 17Z"
                fill="black"
              />
              <mask
                id="mask0_5790_206"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="2"
                y="5"
                width="20"
                height="14"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 7H21C21.6 7 22 6.6 22 6C22 5.4 21.6 5 21 5H3C2.4 5 2 5.4 2 6C2 6.6 2.4 7 3 7ZM22 12C22 12.6 21.6 13 21 13H3C2.4 13 2 12.6 2 12C2 11.4 2.4 11 3 11H21C21.6 11 22 11.4 22 12ZM3 17H21C21.6 17 22 17.4 22 18C22 18.6 21.6 19 21 19H3C2.4 19 2 18.6 2 18C2 17.4 2.4 17 3 17Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_5790_206)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" fill="black" />
              </g>
            </svg>
          </button>
        </div>
        <div class="flex space-x-2">
          <button type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.78564 17H19.3683H19.4682C20.8659 17 22.1638 16 22.3634 14.6L23.9608 6.2C24.0607 5.9 23.9608 5.6 23.7612 5.4C23.5615 5.1 23.262 5 22.9625 5H6.48939L6.18988 2.6C5.99021 1.1 4.79217 0 3.19478 0H0.998368C0.399347 0 0 0.4 0 1C0 1.6 0.399347 2 0.998368 2H3.19478C3.69396 2 4.09331 2.4 4.19315 2.9L5.6907 14.4C5.99021 15.9 7.18825 17 8.78564 17ZM4.99184 21C4.99184 19.3 6.28972 18 7.98694 18C9.68417 18 10.982 19.3 10.982 21C10.982 22.7 9.68417 24 7.98694 24C6.28972 24 4.99184 22.7 4.99184 21ZM6.98858 21C6.98858 21.6 7.38792 22 7.98694 22C8.58597 22 8.98531 21.6 8.98531 21C8.98531 20.4 8.58597 20 7.98694 20C7.38792 20 6.98858 20.4 6.98858 21ZM19.9674 18C18.2701 18 16.9723 19.3 16.9723 21C16.9723 22.7 18.2701 24 19.9674 24C21.6646 24 22.9625 22.7 22.9625 21C22.9625 19.3 21.6646 18 19.9674 18ZM18.969 21C18.969 21.6 19.3683 22 19.9674 22C20.5664 22 20.9657 21.6 20.9657 21C20.9657 20.4 20.5664 20 19.9674 20C19.3683 20 18.969 20.4 18.969 21ZM20.3667 14.2L21.7644 7H6.7889L7.68743 14.1C7.78727 14.6 8.18662 15 8.6858 15H19.3683C19.8675 15 20.2669 14.7 20.3667 14.2Z"
                fill="black"
              />
              <mask
                id="mask0_5790_212"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.78564 17H19.3683H19.4682C20.8659 17 22.1638 16 22.3634 14.6L23.9608 6.2C24.0607 5.9 23.9608 5.6 23.7612 5.4C23.5615 5.1 23.262 5 22.9625 5H6.48939L6.18988 2.6C5.99021 1.1 4.79217 0 3.19478 0H0.998368C0.399347 0 0 0.4 0 1C0 1.6 0.399347 2 0.998368 2H3.19478C3.69396 2 4.09331 2.4 4.19315 2.9L5.6907 14.4C5.99021 15.9 7.18825 17 8.78564 17ZM4.99184 21C4.99184 19.3 6.28972 18 7.98694 18C9.68417 18 10.982 19.3 10.982 21C10.982 22.7 9.68417 24 7.98694 24C6.28972 24 4.99184 22.7 4.99184 21ZM6.98858 21C6.98858 21.6 7.38792 22 7.98694 22C8.58597 22 8.98531 21.6 8.98531 21C8.98531 20.4 8.58597 20 7.98694 20C7.38792 20 6.98858 20.4 6.98858 21ZM19.9674 18C18.2701 18 16.9723 19.3 16.9723 21C16.9723 22.7 18.2701 24 19.9674 24C21.6646 24 22.9625 22.7 22.9625 21C22.9625 19.3 21.6646 18 19.9674 18ZM18.969 21C18.969 21.6 19.3683 22 19.9674 22C20.5664 22 20.9657 21.6 20.9657 21C20.9657 20.4 20.5664 20 19.9674 20C19.3683 20 18.969 20.4 18.969 21ZM20.3667 14.2L21.7644 7H6.7889L7.68743 14.1C7.78727 14.6 8.18662 15 8.6858 15H19.3683C19.8675 15 20.2669 14.7 20.3667 14.2Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_5790_212)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" fill="black" />
              </g>
            </svg>
          </button>
          <button type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23 17C23 17.6 22.6 18 22 18H2C1.4 18 1 17.6 1 17C1 16.4 1.4 16 2 16C3.1 16 4 15.1 4 14V9C4 4.6 7.6 1 12 1C16.4 1 20 4.6 20 9V14C20 15.1 20.9 16 22 16C22.6 16 23 16.4 23 17ZM14.6 21.5C14 22.5 13 23 12 23C11.5 23 11 22.9 10.5 22.6C10 22.3 9.7 22 9.4 21.5C9.1 21 9.3 20.4 9.8 20.1C10.3 19.8 10.9 20 11.2 20.5C11.2303 20.5303 11.2605 20.5697 11.2936 20.6128L11.2936 20.6128C11.3697 20.7119 11.4606 20.8303 11.6 20.9C12.1 21.2 12.7 21 13 20.5C13.3 20 13.9 19.9 14.4 20.1C14.9 20.3 14.9 21 14.6 21.5ZM18 14C18 14.7 18.2 15.4 18.5 16H5.5C5.8 15.4 6 14.7 6 14V9C6 5.7 8.7 3 12 3C15.3 3 18 5.7 18 9V14Z"
                fill="black"
              />
              <mask
                id="mask0_5790_213"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="1"
                y="1"
                width="22"
                height="22"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23 17C23 17.6 22.6 18 22 18H2C1.4 18 1 17.6 1 17C1 16.4 1.4 16 2 16C3.1 16 4 15.1 4 14V9C4 4.6 7.6 1 12 1C16.4 1 20 4.6 20 9V14C20 15.1 20.9 16 22 16C22.6 16 23 16.4 23 17ZM14.6 21.5C14 22.5 13 23 12 23C11.5 23 11 22.9 10.5 22.6C10 22.3 9.7 22 9.4 21.5C9.1 21 9.3 20.4 9.8 20.1C10.3 19.8 10.9 20 11.2 20.5C11.2303 20.5303 11.2605 20.5697 11.2936 20.6128L11.2936 20.6128C11.3697 20.7119 11.4606 20.8303 11.6 20.9C12.1 21.2 12.7 21 13 20.5C13.3 20 13.9 19.9 14.4 20.1C14.9 20.3 14.9 21 14.6 21.5ZM18 14C18 14.7 18.2 15.4 18.5 16H5.5C5.8 15.4 6 14.7 6 14V9C6 5.7 8.7 3 12 3C15.3 3 18 5.7 18 9V14Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_5790_213)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" fill="black" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-4 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="cursor-pointer text-gray-800"><router-link to="/">Home</router-link></li>
        <li class="cursor-pointer text-gray-800"><router-link to="/about">About</router-link></li>
        <li class="cursor-pointer text-gray-800"><router-link to="/Contact">Contact Us</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
