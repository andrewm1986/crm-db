<template>
  <div id="app">
	  <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link class="nav-item" exact-active-class="active" tag="li" to="/"><a class="nav-link" href="#">List companies</a></router-link>
            <router-link class="nav-item" exact-active-class="active" tag="li" to="/add-company"><a class="nav-link" href="#">Add Company</a></router-link>
          </ul>
        </div>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
</style>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "jquery";
import "bootstrap";

@Component
export default class App extends Vue {}
</script>