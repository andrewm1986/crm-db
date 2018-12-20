<template>
  <div class="add-company">
    <CompanyEdit @updated="saveDetails" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import CompanyEdit from "../components/CompanyEdit.vue";

@Component({
  components: {
    CompanyEdit
  }
})
export default class AddCompany extends Vue {
  @Mutation addCompany!: any; // Make function type

  saveDetails(company: any /* make type */) {
    this.addCompany(company);
    this.$router.push('/');
  }
}
</script>
