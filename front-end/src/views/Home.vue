<template>
  <div class="home">
    <section class="text-indigo-900 body-font bg-gray-200 custom-bg py-10">
      <div class="container mx-auto flex px-10 pt-28 md:flex-row flex-col items-center">
        <div
          class="md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pb-10"
        >
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-900">
            Scheduling software <br />
            by humans for humans
          </h1>
          <p class="mb-8 leading-relaxed">
            Plan-It helps you schedule and keep and better overview of all the projects and employees in your company by
            taking into account staff vacation, availability, and all the basic need for a better overview. Sign up for
            an early 30% off and 30 day free trial below.
          </p>
          <div class="flex w-full md:justify-start justify-center flex-wrap items-end">
            <div class="relative mb-2 md:mb-0 md:mr-4 w-full md:w-full lg:w-full xl:w-1/2 w-2/4">
              <input
                type="email"
                id="hero-field"
                name="hero-field"
                placeholder="E.G tesla@auto.com"
                class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-indigo-900 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              class="inline-flex w-full md:w-auto text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg"
            >
              Get special offer now
            </button>
          </div>
          <p class="text-sm mt-2 text-indigo-500 mb-8 w-full">
            Need access now?
            <router-link to="contact" class="text-blue-700">Request a special meeting </router-link>
          </p>
        </div>
        <div class="lg:w-1/2 md:w-1/2 w-6/6 shadow-none hidden md:block">
          <!-- <img class="object-fit object-center rounded custom-h w-full" alt="hero" src="../assets/img/hero-bg.png" /> -->
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
            <p class="leading-relaxed">Users</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
            <p class="leading-relaxed">Subscribes</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
            <p class="leading-relaxed">Downloads</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
            <p class="leading-relaxed">Products</p>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-bold title-font text-center text-gray-900 mb-5">
          All the features you need <br class="hidden sm:block" />to make a better employee schedule
        </h1>
        <p class="text-center sm:text-xl text-xl font-light text-center text-gray-900">
          Whether you have 3 employees or 3000, we have what you need to communicate with your staff, create and share
          an employee schedule, and get an overview of your business
        </p>
        <div class="flex mt-6 justify-center mb-20">
          <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/500x300"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/501x301"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/600x360"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/502x302"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/503x303"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font bg-white">
      <div class="text-center mb-10 pt-24">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Trusted by businesses worldwide</h1>
        <p class="text-light leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center text-xl font-light text-gray-900">
          Some of the biggest names in food service, hospitality, and fitness use our platform to run their businesses
          more efficiently
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <div class="container px-5 py-12 mx-auto">
        <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-gray-100 p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path
                  d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
                ></path>
              </svg>
              <p class="leading-relaxed mb-6">
                Having Plan-IT in place means that we are able to grow quickly, efficiently and easily. By using
                Plan-IT, we save money per person each month by having a detailed overview of everyone’s shifts.
              </p>
              <a class="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/106x106"
                  class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-gray-900">Daytona dev Solutions</span>
                  <span class="text-gray-500 text-sm">CEO</span>
                </span>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-gray-100 p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path
                  d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
                ></path>
              </svg>
              <p class="leading-relaxed mb-6">
                Having Plan-IT in place means that we are able to grow quickly, efficiently and easily. By using
                Plan-IT, we save money per person each month by having a detailed overview of everyone’s shifts.
              </p>
              <a class="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/107x107"
                  class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-gray-900">Robert Alexander</span>
                  <span class="text-gray-500 text-sm">CEO</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/5 md:w-1/2 p-2 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
          </div>
          <div class="lg:w-1/5 md:w-1/2 p-2 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/421x261"
              />
            </a>
          </div>
          <div class="lg:w-1/5 md:w-1/2 p-2 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/422x262"
              />
            </a>
          </div>
          <div class="lg:w-1/5 md:w-1/2 p-2 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
              />
            </a>
          </div>
          <div class="lg:w-1/5 md:w-1/2 p-2 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
              />
            </a>
          </div>
          <div class="lg:w-1/5 md:w-1/2 p-2 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
              />
            </a>
          </div>
          <div class="lg:w-1/5 md:w-1/2 p-2 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
              />
            </a>
          </div>
          <div class="lg:w-1/5 md:w-1/2 p-2 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
              />
            </a>
          </div>
          <div class="lg:w-1/5 md:w-1/2 p-2 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
              />
            </a>
          </div>
          <div class="lg:w-1/5 md:w-1/2 p-2 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {}
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.custom-bg {
  min-height: calc(80vh - 200px);
  background: linear-gradient(to right, rgba(4, 114, 204, 0.096), rgba(1, 61, 129, 0.144)),
    url("../assets/img/hero-bg.png") no-repeat center right;
  background-size: contain;
  @media (max-width: 768px) {
    background: #eee;
  }
}
</style>