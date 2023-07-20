<template>
  <div class="main-content">
    <div class="container">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title is-centered">{{ puppy.name }}</p>
        </header>
        <div class="card-content has-background-dark">
          <figure class="image is-1by1">
            <img class :src="`${puppy.photo}`" />
          </figure>
        </div>
        <br />
        <h4 class="title is-5 is-marginless">
          <p class="has-text-centered">About</p>
          <hr />
          <p class="has-text-centered">
            <strong>{{ puppy.adoptionRequirements }}</strong>
          </p>
          <br />
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import { puppyApi } from "../../../api/api.ts";
export default {
  validate({ params }) {
    return /^[a-f\d]{24}$/i.test(params.id);
  },
  async asyncData({ params }) {
    let puppy = null;
    try {
      puppy = await puppyApi.get(params.id);
    } catch (e) {
      console.error("SOMETHING WENT WRONG :" + e);
    }
    return {
      puppy
    }
  },
  head() {
    return {
      title: this.puppy.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.puppy.adoptionRequirements
        }
      ]
    };
  }
};
</script>