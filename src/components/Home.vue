<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <img src="" />Logo_to_be_settled
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">{{ this.showConfig.home }}</b-nav-item>
          <b-nav-item href="#">{{ this.showConfig.anime }}</b-nav-item>
          <b-nav-item href="#">{{ this.showConfig.faq }}</b-nav-item>
          <b-nav-item href="#">{{ this.showConfig.about }}</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item
              href="#"
              v-for="(country, index) in renderList.listCountries"
              :key="index"
              :value="country.value"
            >
              <b-dropdown-item> {{ country.value }} </b-dropdown-item>
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item
              href="#"
              v-for="(profile, index) in renderList.listUsers"
              :key="index"
              :value="profile.value"
            >
              <b-dropdown-item href="#">{{ profile.value }}</b-dropdown-item>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
        <a href="#" class="btn btn-primary">Go to the store</a>
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
        <b-form-valid-feedback :state="validationHeader"> Looks Good. </b-form-valid-feedback>

        <b-form-input
          v-model="addAnimeListDescription"
          placeholder="Type your Favorite anime description"
        ></b-form-input>

        <b-form-invalid-feedback :state="validation">
          Your Description must be 3 to 100 characters.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation"> Looks Good. </b-form-valid-feedback>

        <b-button
          variant="outline-secondary"
          @click="addSomeAnimes(renderNewList)"
          >Add anime</b-button
        >
      </b-form>
    </template>
  </div>
</template>
<script>
import { config } from "../utils.js";

export default {
  name: "Home",
  props: {},
  data() {
    return {
      showConfig: {},
      addAnimeListTitle: "",
      addAnimeListHeader: "",
      addAnimeListDescription: "",
      renderList: {
        listCountries: [
          {
            value: "BR",
          },
          {
            value: "ES",
          },
          {
            value: "FA",
          },
          {
            value: "RU",
          },
        ],
        listUsers: [
          {
            value: "Profile",
          },
          {
            value: "Sign-out",
          },
        ],
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
  created() {
    this.showConfig = { ...config };
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
      this.$computed.validation = () => {};
      this.$computed.validationHeader = () => {};
      this.$computed.validationTitle = () => {};
    },
  },
};
</script>
<style scoped>
</style>
