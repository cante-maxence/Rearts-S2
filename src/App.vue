<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template class="container fluid">
  <header>
    <div>
      <button class="relative group">
        <div
          class="
            relative
            flex
            overflow-hidden
            items-center
            justify-center
            rounded-full
            w-[50px]
            h-[50px]
            transform
            transition-all
            bg-slate-700
            ring-0 ring-gray-300
            hover:ring-8
            group-focus:ring-4
            ring-opacity-30
            duration-200
            shadow-md
          "
        >
          <div
            class="
              flex flex-col
              justify-between
              w-[20px]
              h-[20px]
              transform
              transition-all
              duration-300
              origin-center
              overflow-hidden
            "
          >
            <div
              class="
                bg-white
                h-[2px]
                w-7
                transform
                transition-all
                duration-300
                origin-left
                group-focus:translate-y-6
                delay-100
              "
            ></div>
            <div
              class="
                bg-white
                h-[2px]
                w-7
                rounded
                transform
                transition-all
                duration-300
                group-focus:translate-y-6
                delay-75
              "
            ></div>
            <div
              class="
                bg-white
                h-[2px]
                w-7
                transform
                transition-all
                duration-300
                origin-left
                group-focus:translate-y-6
              "
            ></div>

            <div
              class="
                absolute
                items-center
                justify-between
                transform
                transition-all
                duration-500
                top-2.5
                -translate-x-10
                group-focus:translate-x-0
                flex
                w-0
                group-focus:w-12
              "
            >
              <div
                class="
                  absolute
                  bg-white
                  h-[2px]
                  w-5
                  transform
                  transition-all
                  duration-500
                  rotate-0
                  delay-300
                  group-focus:rotate-45
                "
              ></div>
              <div
                class="
                  absolute
                  bg-white
                  h-[2px]
                  w-5
                  transform
                  transition-all
                  duration-500
                  -rotate-0
                  delay-300
                  group-focus:-rotate-45
                "
              ></div>
            </div>
          </div>
        </div>
      </button>
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/td01">Td01</RouterLink>
        <RouterLink to="/tp01">Tp01</RouterLink>
        <RouterLink to="/td02">Td02</RouterLink>
        <RouterLink to="/tp02">Tp02</RouterLink>
        <RouterLink to="/td03">Td03</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  /*  max-width: 1280px; */
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
