<template>
  <div class="edit-company">
    <CompanyEdit :company="company" @updated="saveDetails" />
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
export default class EditCompany extends Vue {
  @Prop(Number) id!: number;
  @Getter companies!: any; // Make type for company
  @Mutation updateCompany!: any; // Make function type


  get company() {
    return this.companies.find((c: any) => c.id === this.id);
  }

  saveDetails(company: any /* make type */) {
    this.updateCompany(company);
    this.$router.push('/');
  }
}
</script>
