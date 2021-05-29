<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <p>AnimaApp</p>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/" class="nav-link">
            {{ this.showConfig.home }}
          </router-link>
          <router-link to="/anime" class="nav-link">
            {{ this.showConfig.anime }}
          </router-link>
          <router-link to="/about" class="nav-link">
            {{ this.showConfig.about }}
          </router-link>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >{{$t('search')}}</b-button
            >
          </b-nav-form>

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

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>Langs</em>
            </template>
            <b-dropdown-item
              href="#"
              v-for="(lang, index) in renderList.listLangs"
              :key="`Lang${index}`"
              :value="lang"
            >
              <b-dropdown-item href="#" @click="changeLang(lang)">{{ lang }}</b-dropdown-item>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { config } from "../../utils.js";
import Vue from 'vue'
export default {
  data() {
    return {
      activeLocale: Vue.config.lang,
      showConfig: {},
      renderList: {
        listLangs: ['en','br'],
        listUsers: [
          {
            value: "Profile",
          },
          {
            value: "Sign-out",
          },
        ],
      },
    };
  },
  created() {
    this.showConfig = { ...config };
  },
  methods: {
    changeLang(language) {
      Vue.config.lang = language;
      this.$i18n.locale = Vue.config.lang;
    }
  }
};
</script>

<style>
</style>