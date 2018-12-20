import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    companies: [
      {
        id: 1,
        name: 'AHC',
        address: '160 Queen Street',
        logo: 'https://www.ahc.com/assets/img/logo.png',
      },
      {
        id: 2,
        name: 'Apple',
        address: '1 Infinite Loop',
        logo: 'https://image.freepik.com/free-icon/apple-logo_318-40184.jpg',
      },
    ]
  },
  getters: {
    companies: (state) => state.companies,
    // Slightly hacky, but we don't have a database
    sortedCompanies: (state, getters) => getters.companies.sort((c: any) => c.name),
  },
  mutations: {
    updateCompany(state, {id, name, address, logo}) {
      const company = state.companies.find((c: any) => c.id === id);

      if (company === undefined) {
        console.log('unknown company'); // handle better?
        return;
      }

      company.name = name;
      company.address = address;
      company.logo = logo;
    },
    deleteCompany(state, id) {
      const companyIndex = state.companies.findIndex((c: any) => c.id === id);
      state.companies.splice(companyIndex, 1);
    },
    addCompany(state, newCompany) {

      // slightly hacky, but we aren't using a database...
      const id: number = state.companies.sort((c: any) => c.id).reverse()[0].id;
      newCompany.id = id + 1;

      state.companies.push(newCompany);
    },
  },
  actions: {

  },
});
