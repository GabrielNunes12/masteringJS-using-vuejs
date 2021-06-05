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
          <a href="#" class="btn btn-primary">{{ $t('goToStore') }}</a>
          <a href="#" class="btn btn-secondary" @click="removeItem(article)">{{
            $t("remove")
          }}</a>
        </div>
      </div>
      <template prepend>
        <b-form @submit.stop.prevent>
          <b-input-group-text>{{ $t("Add_anime") }}</b-input-group-text>
          <b-form-input
            v-model="addAnimeListTitle"
            placeholder="Type your Favorite anime title"
          ></b-form-input>

          <b-form-invalid-feedback :state="validationTitle">
            {{ $t("titleValidation") }}
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationTitle">
            {{ $t("looksGood") }}
          </b-form-valid-feedback>

          <b-form-input
            v-model="addAnimeListHeader"
            placeholder="Type your Favorite anime header"
          ></b-form-input>

          <b-form-invalid-feedback :state="validationHeader">
            {{ $t("validationHeader") }}
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationHeader">
            {{ $t("looksGood") }}
          </b-form-valid-feedback>

          <b-form-input
            v-model="addAnimeListDescription"
            placeholder="Type your Favorite anime description"
          ></b-form-input>

          <b-form-invalid-feedback :state="validation">
            {{ $t("validationDescription") }}
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation">
            {{ $t("looksGood") }}
          </b-form-valid-feedback>

          <b-button
            variant="outline-secondary"
            @click="addSomeAnimes(renderNewList)"
            >{{ $t("Add_anime") }}</b-button
          >
        </b-form>
      </template>
    </div>
  </div>
</template>
<script>
import { eventBus } from '../../main.js';
import Header from "./Header.vue";
export default {
  name: "Home",
  props: {
    objProps: {
      type: Object,
      required: false,
    }
  },
  components: {
    Header,
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
      if(!this.renderNewList.value && !this.renderNewList.header && !this.renderNewList.title) return;
      const newObj = {
        value: this.addAnimeListDescription,
        header: this.addAnimeListHeader,
        title: this.addAnimeListTitle,
      };
      this.renderList.listAnimes.push(newObj);
      eventBus.addAnime(this.renderList.listAnimes);
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
