<template>
  <div class="l-page">
    <div class="l-page__navbar c-navbar">
      <div class="c-navbar__list g--margin-left-auto">
        <router-link class="font-bold" to="/">Home</router-link>
        <router-link class="font-bold" to="/about">About</router-link>
      </div>
    </div>
    <div class="l-page__main">
      <router-view />
    </div>
  </div>
</template>

<style>
.l-page__navbar a.router-link-exact-active {
  color: #c53030;
}
</style>
