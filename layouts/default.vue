<template>
  <div>
    <!-- begin navigation -->
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-start">
          <nuxt-link active-class="is-active" to="/" class="navbar-item is-tab" exact>Home</nuxt-link>
          <nuxt-link
            active-class="is-active"
            to="/puppy/new"
            class="navbar-item is-tab"
            exact
          >Post your own puppy 🐶</nuxt-link>
        </div>
      </div>
    </nav>
    <!-- end navigation -->

    <!-- displays the page component -->
    <nuxt />

    <!-- begin footer -->
    <footer class="footer home-footer has-background-black">
      <div class="content has-text-centered">
        <p class="has-text-white">
          <strong class="has-text-white">Puppy adoption website</strong> by
          <a href="https://github.com/davidwlfreitas">David Freitas</a>
        </p>
      </div>
    </footer>
    <!-- end footer -->
  </div>
</template>

<style scoped>
  .image-puppies {
    object-fit: cover;
    border-radius: 0px;
    width: 100%;
    opacity: 1;
    object-position: center 69.36%;
    display: block;
  }
  .main-content {
  margin: 20px 0;
}
body {
  font-family: "Open Sans Condensed", sans-serif;
}

p {
  font-size: 22px;
}

.home-footer{
  margin-top: 20vh;
}
</style>  