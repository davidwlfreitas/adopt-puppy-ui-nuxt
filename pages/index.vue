<template>
  <!-- begin header -->
  <div>
    <section class="hero is-medium is-light is-bold  p-4">
      <div class="hero-body bg-white bg-opacity-80">
        <div class="container">
          <h1 class="title">Adopt a new puppy today!</h1>
          <h2
            class="subtitle"
          >Maybe the company of playful puppies can inspire you as you type away on the keyboard ʕ•ᴥ•ʔ</h2>
        </div>
      </div>
    </section>
    <!-- end header -->

    <!-- begin main content -->
    <section class="main-content">
      <div class="container">
        <h1 class="title has-text-centered">Available Puppies</h1>
        <div class="columns is-multiline">
          <div class="column is-half" v-for="puppy in puppies" :key="puppy.id">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title is-centered">{{ puppy.name }}</p>
              </header>
              <div class="card-content">
                <figure class="image is-3by2">
                  <img :src="`${puppy.photo}`" />
                </figure>
              </div>
              <footer class="card-footer">
                <nuxt-link :to="`/puppy/${puppy.id}`" class="card-footer-item">
                  <button class="button is-dark">Learn more about {{ puppy.name }}</button>
                </nuxt-link>
                <button
                  @click="removePuppy(puppy.id)"
                  class="card-footer-item"
                >Remove</button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end main content -->
  </div>
</template>

<script>
import { puppyApi } from "../api/api.ts";
export default {
  head: {
    title: "Home"
  },
  async asyncData(context) {
    let puppies = [];
    try {
        puppies = await puppyApi.index();
        puppies = puppies.data;
    } catch (e) {
      console.error("SOMETHING WENT WRONG :" + e);
    }
    return {
      puppies
    }
  },
  data() {
    return {
    };
  },
  methods: {
    async removePuppy(id) {
      try {
        await puppyApi.delete(id);
        this.puppies = this.puppies.filter(puppy => puppy.id !== id);
      } catch (e) {
        console.error("SOMETHING WENT WRONG :" + e);
      }
    }
  }
};
</script>
<style scoped>
  .hero-body{
    background-image: url('https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>

