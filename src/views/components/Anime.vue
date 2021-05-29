<template>
  <div>
    <main>
      <Header></Header>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Anime's Quotes</h1>
            <p class="lead text-muted">From your Favorite animes.</p>
            <p>
              <a href="#" class="btn btn-primary my-2"> {{ $t("report") }} </a>
              <a href="#" class="btn btn-secondary my-2">
                {{ $t("buyNewAnime") }}</a
              >
            </p>
          </div>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-3 rows-cols-md-3 g-3"
          >
            <div
              class="col"
              v-for="(animeQuote, indexAnime) in listQuotesApi"
              :key="indexAnime"
            >
              <div class="card-shadow-sm">
                <!--IMG-->
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>{{ animeQuote.anime }}</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" height="50%" fill="#eceeef" dy=".3em"></text>
                </svg>
              </div>
              <div class="card-body">
                <p class="card-text">
                  <strong>Anime:</strong> {{ animeQuote.anime }}
                  <br />
                  <strong>{{ $t("character") }}:</strong>
                  {{ animeQuote.character }}
                  <br />
                  <strong>{{ $t("quote") }}:</strong> {{ animeQuote.quote }}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      {{ $t("view") }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      {{ $t("edit") }}
                    </button>
                  </div>
                  <small class="text-muted"> 1 min </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="text-muted py-5">
      <div class="container">
        <p class="float-end mb-1">
          <a href="#">{{ $t("backToTop") }}</a>
        </p>
        <p class="mb-1">
          Project created by
          <a href="https://github.com/GabrielNunes12"> Gabriel Nunes</a> &copy;
        </p>
        <p class="mb-0">
          My youtube channel
          <a href="https://youtube.com/c/BielTheGamer12"> {{$t('clickHere')}} </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  components: {
    Header,
  },
  data() {
    return {
      animeData: null,
      baseApiPath: "https://animechan.vercel.app",
      listQuotesApi: [],
    };
  },
  async mounted() {
    try {
      this.listQuotesApi = await axios
        .get(`${this.baseApiPath}/api/quotes`)
        .then((resp) => (this.animeData = resp.data));
    } catch (error) {
      throw new Error(error);
    }
  },
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
</style>