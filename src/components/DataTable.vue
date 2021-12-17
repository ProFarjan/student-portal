<template>
  <div>
    <b-row>
      <b-col md="2" sm="6">
        <b-form-group label="Per Page" label-for="per-page-select" label-class="font-weight-800">
          <b-form-select
            id="per-page-select"
            v-model="historyTable.perPage"
            :options="historyTable.pageOptions"
          ></b-form-select>
        </b-form-group>
      </b-col>
      <b-col md="6" sm="0"></b-col>
      <b-col md="4" sm="6">
        <b-form-group label="Search Payment History" label-for="filter-input" label-class="font-weight-800">
          <b-form-input
            id="filter-input"
            v-model="historyTable.filter"
            type="search"
            placeholder="Type to Search"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col></b-col>
    </b-row>
    <div>
      <b-table
        class="myTable"
        :items="items"
        :fields="fields"
        :current-page="historyTable.currentPage"
        :per-page="historyTable.perPage"
        :filter="historyTable.filter"
        :filter-included-fields="historyTable.filterOn"
        stacked="md"
        show-empty
        small
        striped
        @filtered="onFiltered"></b-table>
    </div>
    <b-row>
      <b-col sm="0" md="6"></b-col>
      <b-col sm="12" md="6">
        <b-pagination
          v-model="historyTable.currentPage"
          :total-rows="historyTable.totalRows"
          :per-page="historyTable.perPage"
          align="right">
        </b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  props: ['items', 'fields'],
  data: () => ({
    historyTable: {
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, { value: 100, text: "Show a lot" }],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
    }
  }),
  methods: {
    onFiltered(filteredItems) {
      this.historyTable.totalRows = filteredItems.length
      this.historyTable.currentPage = 1
    }
  },
  mounted() {
    this.historyTable.totalRows = this.items.length;
  }
};
</script>

<style scoped>
table.myTable .flip-list-move {
  transition: transform 1s;
}
</style>