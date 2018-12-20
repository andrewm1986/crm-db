<template>
  <div class="add-edit-company">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="name">
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <textarea class="form-control" id="address" placeholder="Enter address" v-model="address"></textarea>
    </div>
    <div class="form-group">
      <label for="logo">Logo</label>
      <input type="text" class="form-control" id="logo" placeholder="Enter logo" v-model="logo">
    </div>
    <button type="submit" class="btn btn-primary" @click="saveDetails">Save</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';

@Component({
})
export default class CompanyEdit extends Vue {
  id: number | undefined;
  name: string = ""; // not sure why i need to assign this to empty string to work
  address: string = ""; // not sure why i need to assign this to empty string to work
  logo: string = ""; // not sure why i need to assign this to empty string to work

  @Prop() company: any;

  mounted() {
      if (this.company !== undefined) {
          this.id = this.company.id;
          this.name = this.company.name;
          this.address = this.company.address;
          this.logo = this.company.logo;
      }
  }

  saveDetails() {
    this.$emit("updated", { id: this.id, name: this.name, address: this.address, logo: this.logo });
  }
}
</script>
