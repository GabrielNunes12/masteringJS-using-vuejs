<template>
  <div>
    <Header></Header>
    <div class="container">
      <div
        class="card"
        v-for="(article, index) in renderList.listAnimes"
        :key="index"
        :value="article.value"
      >
        <div class="card-header">{{ article.header }}</div>
        <div class="card-body">
          <h5 class="card-title">{{ article.title }}</h5>
          <p class="card-text">
            {{ article.value }}
          </p>
          <a href="#" class="btn btn-primary">{{ $t("Go to store") }}</a>
          <a href="#" class="btn btn-secondary" @click="removeItem(article)"
            >Remove it</a
          >
        </div>
      </div>
      <template prepend>
        <b-form @submit.stop.prevent>
          <b-input-group-text>Add anime</b-input-group-text>
          <b-form-input
            v-model="addAnimeListTitle"
            placeholder="Type your Favorite anime title"
          ></b-form-input>

          <b-form-invalid-feedback :state="validationTitle">
            Your Title must be 3 to 100 characters.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationTitle">
            Looks Good.
          </b-form-valid-feedback>

          <b-form-input
            v-model="addAnimeListHeader"
            placeholder="Type your Favorite anime header"
          ></b-form-input>

          <b-form-invalid-feedback :state="validationHeader">
            Your Header must be 3 to 100 characters.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationHeader">
            Looks Good.
          </b-form-valid-feedback>

          <b-form-input
            v-model="addAnimeListDescription"
            placeholder="Type your Favorite anime description"
          ></b-form-input>

          <b-form-invalid-feedback :state="validation">
            Your Description must be 3 to 100 characters.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation">
            Looks Good.
          </b-form-valid-feedback>

          <b-button
            variant="outline-secondary"
            @click="addSomeAnimes(renderNewList)"
            >Add anime</b-button
          >
        </b-form>
      </template>
      <locale-switcher />
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import LocaleSwitcher from "./LocaleSwitcher.vue";
export default {
  name: "Home",
  props: {},
  components: {
    Header,
    LocaleSwitcher,
  },
  data() {
    return {
      addAnimeListTitle: "",
      addAnimeListHeader: "",
      addAnimeListDescription: "",
      renderList: {
        listAnimes: [],
      },
      renderNewList: [
        {
          value: this.addAnimeListTitle,
          header: this.addAnimeListDescription,
          title: this.addAnimeListHeader,
        },
      ],
    };
  },
  computed: {
    validation() {
      const isValid =
        this.addAnimeListDescription.length > 3 &&
        this.addAnimeListDescription.length < 100;
      return isValid;
    },
    validationTitle() {
      const isValidTitle =
        this.addAnimeListTitle.length > 3 &&
        this.addAnimeListTitle.length < 100;
      return isValidTitle;
    },
    validationHeader() {
      const isValidHeader =
        this.addAnimeListHeader.length > 3 &&
        this.addAnimeListHeader.length < 100;
      return isValidHeader;
    },
  },
  methods: {
    addSomeAnimes() {
      const newObj = {
        value: this.addAnimeListDescription,
        header: this.addAnimeListHeader,
        title: this.addAnimeListTitle,
      };
      this.renderList.listAnimes.push(newObj);
      this.clearForm();
    },
    clearForm() {
      this.addAnimeListTitle = "";
      this.addAnimeListHeader = "";
      this.addAnimeListDescription = "";
    },
    removeItem(value) {
      const index = this.renderList.listAnimes.indexOf(value);
      this.renderList.listAnimes.splice(index, 1);
    },
  },
};
</script>
<style scoped>
</style>
