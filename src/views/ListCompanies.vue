<template>
  <div class="home">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Logo</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in sortedCompanies" v-bind:key="company.id">
          <td>{{company.name}}</td>
          <td>{{company.address}}</td>
          <td><img :src="company.logo" height="20" /></td>
          <td>
            <router-link class="btn btn-primary" :to="`/edit-company/${company.id}`">Edit</router-link>
            <button class="btn btn-danger" @click="deleteCompany(company.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';

@Component({
})
export default class Home extends Vue {
  @Getter sortedCompanies!: any;
  @Mutation deleteCompany!: any; // Make function type
}
</script>
