<template>
  <div>
    <Header></Header>
    <main class="container">
      <section v-if="this.showAlert">
        <b-alert show variant="success">
          <h4 class="alert-heading">Well done!</h4>
          <p>
            {{$t('aboutSection1')}} <br/>
            {{$t('aboutSubSection1')}}
          </p>
          <hr />
          <p class="mb-0">
            {{$t('aboutSection2')}} <br/>
            {{$t('aboutSubSection2')}}
            <ul>
              <li>
                <a :href="this.showImg.facebook.href" target="_blank">
                  <img
                    :src="this.showImg.facebook.src"
                    :width="this.showImg.facebook.width"
                    :height="this.showImg.facebook.height"
                  />
                </a>
                <span>
                  <a :href="this.showImg.github.href" target="_blank">
                    <img
                      :src="this.showImg.github.src"
                      :width="this.showImg.github.width"
                      :height="this.showImg.github.height"
                    />
                  </a>
                </span>
              </li>
            </ul>
          </p>
        </b-alert>
      </section>

      <section v-if="!this.showAlert">
        <b-alert show variant="secondary">
          <h4 class="alert-heading">{{$t('permissionDenied')}}</h4>
          <p>
            {{$t('permissionsToSee')}}
          </p>
        </b-alert>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { pathImgObj } from "../../utils.js";
export default {
  components: {
    Header,
  },
  data() {
    return {
      showImg: {},
      showAlert: Boolean,
    };
  },
  created() {
    this.showAlert = confirm("Are you sure about this?");
    this.showImg = { ...pathImgObj };
  },
  methods: {},
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
