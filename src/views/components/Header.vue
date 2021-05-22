<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <img src="" />Logo_to_be_settled
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
          <router-link to="/faq" class="nav-link">
            {{ this.showConfig.faq }}
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
  </div>
</template>

<script>
import { config } from "../../utils.js";
export default {
  data() {
    return {
      showConfig: {},
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
      },
    };
  },
  created() {
    this.showConfig = { ...config };
  },
};
</script>

<style>
</style>