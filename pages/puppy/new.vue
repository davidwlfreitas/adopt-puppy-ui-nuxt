 <template>
  <div class="container">
    <br />
    <h1 class="title has-text-centered">{{puppy.name}}</h1>
    <div class="columns is-multiline">
      <div class="column is-half">
        <form @submit.prevent="uploadPuppy">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="What is your puppy's name?"
                v-model="puppy.name"
              />
            </div>
          </div>

          <div class="field">
          <label class="label">Breed</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="What is your puppy's breed?"
                v-model="puppy.breed"
              />
            </div>
          </div>

          <div class="field">
          <label class="label">Gender</label>
            <div class="control">
              What is your puppy's gender?
              <select v-model="puppy.gender" class="block w-full mt-1 input">
                <option value="male">Male </option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div class="field">
          <label class="label">Age</label>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="What is your puppy's age?"
                v-model="puppy.age"
              />
            </div>
          </div>

          <label class="label">Photo</label>
          <div class="field">
            <div class="control">
                <input
                  @change="onPhotoChange"
                  class="input"
                  type="text"
                  placeholder="Add your puppy's photo URL"
                  v-model="puppy.photo"
                />
             </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <label class=" items-center label">
              Is Vaccinated?
              <input type="checkbox" v-model="puppy.isVaccinated" class="ml-2">
            </label>
  
            <label class=" items-center label">
              Is Neutered?
              <input type="checkbox" v-model="puppy.isNeutered" class="ml-2">
            </label>
          </div>

          <div class="field">
            <label class="label">Medical History</label>
            <div class="control">
              <textarea
                class="textarea"
                v-model="puppy.medicalHistory"
                placeholder="Describe your puppy medical history"
              ></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label">Adoption Requirements</label>
            <div class="control">
              <textarea
                class="textarea"
                v-model="puppy.adoptionRequirements"
                placeholder="Describe your puppy adoption requirements"
              ></textarea>
            </div>
          </div>

          <br />

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>

      <div class="column is-half">
        <figure v-if="preview" class="image container is-256x256">
          <img
            style="border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
            :src="preview"
            alt
          />
        </figure>
        <figure v-else class="image container is-256x256">
          <img
            style="border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
            src="https://via.placeholder.com/150"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { puppyApi } from '../../api/api'
export default {
  head() {
    return {
      title: "New Puppy"
    };
  },
  data() {
    return {
      puppy: {
        name: "",
        breed: "",
        age: 0,
        gender: "",
        photo: "",
        isVaccinated: false,
        isNeutered: false,
        adoptionRequirements: "",
        medicalHistory: "",
      },
      preview: ""
    };
  },
  methods: {
    onPhotoChange() {
      this.preview = this.puppy.photo;
    },

    async uploadPuppy() {
      let formData = {
        name: this.puppy.name,
        breed: this.puppy.breed,
        age: Number(this.puppy.age),
        gender: this.puppy.gender,
        photo: this.puppy.photo,
        isVaccinated: this.puppy.isVaccinated,
        isNeutered: this.puppy.isNeutered,
        adoptionRequirements: this.puppy.adoptionRequirements,
        medicalHistory: this.puppy.medicalHistory,
      }

      await puppyApi.create(formData);
      this.$router.push("/");
    }
  }
};
</script>