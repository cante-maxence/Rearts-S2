<script>
export default {
  name: "HomeView",
};
</script>

<template>
  <div>
    <body
      class="h-screen overflow-hidden flex items-center justify-center"
      style="background: #edf2f7"
    >
      <div
        class="
          min-h-screen
          bg-gray-200
          flex flex-wrap
          items-center
          justify-center
        "
      >
        <div
          class="
            flex flex-col
            sm:flex-col
            lg:flex-row
            xl:flex-row
            md:flex-row
            justify-center
            items
            center
            container
          "
        >
          <div
            class="
              py-1
              sm:py-12
              md:py-6
              lg:py-6
              xl:py-6
              px-8
              w-full
              md:max-w-min
              sm:w-full
              bg-black
              z-30
              border
            "
          >
            <h1 class="text-gray-500 font-semibold text-xl">Basic</h1>
            <div class="text-center py-4 px-7">
              <h1 class="text-gray-700 text-4xl font-black">$199.00</h1>
              <p class="text-gray-500 mt-2">Monthely</p>
            </div>
            <div class="h-px bg-gray-200"></div>
            <div class="text-center mt-3">
              <p class="text-sm text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <button
              class="
                w-150px
                mt-6
                mb-3
                py-2
                text-white
                font-semibold
                bg-gray-700
                hover:shadow-xl
                duration-200
                hover:bg-gray-800
                border
              "
            >
              Buy Now
            </button>
          </div>
          <div
            class="
              py-12
              sm:py-12
              md:py-6
              lg:py-6
              xl:py-6
              px-8
              w-150px
              md:max-w-min
              sm:w-full
              bg-purple-500
              transform
              scale-1
              sm:scale-1
              md:scale-105
              lg:scale-105
              xl:scale-105
              z-40
              shadow-none
              sm:shadow-none
              md:shadow-xl
              lg:shadow-xl
              xl:shadow-xl
              border
            "
          >
            <h1 class="text-purple-200 font-semibold text-xl">Pro</h1>
            <div class="text-center py-4 px-7">
              <h1 class="text-white text-4xl font-black">$399.00</h1>
              <p class="text-white text-opacity-50 mt-2">Monthely</p>
            </div>
            <div class="h-px bg-purple-400"></div>
            <div class="text-center mt-3">
              <p class="text-sm text-white text-opacity-80">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <button
              class="
                w-150px
                mt-6
                mb-3
                py-2
                text-white
                font-semibold
                bg-purple-400
                hover:shadow-xl
                duration-200
                hover:bg-purple-800
              "
            >
              Buy Now
            </button>
          </div>

          <div
            class="
              py-12
              sm:py-12
              md:py-6
              lg:py-6
              xl:py-6
              px-8
              w-150px
              md:max-w-min
              sm:w-full
              bg-black
              border
              z-30
            "
          >
            <h1 class="text-gray-500 font-semibold text-xl">Enterprise</h1>
            <div class="text-center py-4 px-7">
              <h1 class="text-gray-700 text-4xl font-black">$899.00</h1>
              <p class="text-gray-500 mt-2">Monthely</p>
            </div>
            <div class="h-px bg-gray-200"></div>
            <div class="text-center mt-3">
              <p class="text-sm text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <button
              class="
                w-150px
                mt-6
                mb-3
                py-2
                text-white
                font-semibold
                bg-gray-700
                hover:shadow-xl
                duration-200
                hover:bg-gray-800
              "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<style scoped>
.center {
  text-align: center;
}
.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #34495e;
}
</style>