<template>
  <div>
    <reg-header :lists="headers"></reg-header>
    <b-row>
      <b-col>
        <div class="card mb-4">
          <h3 class="card-title card-header m-0 font-weight-700">
            RECOURSE REGISTRATION
          </h3>
          <div class="card-body p-3">
            <div class="alert alert-info alert-card p-1 border-radius-0">YOU HAVE THE FOLLOWING COURSES AVAILABLE FOR RECOURSE</div>
            <b-row>
              <b-col>
                <v-multiselect-listbox
                  v-model="selectedCourses"
                  :options="courses"
                  :reduce-display-property="(option) => option.label"
                  :reduce-value-property="(option) => option.code"
                  selected-no-options-text="No courses selected"></v-multiselect-listbox>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <div class="alert alert-warning alert-card p-1 border-radius-0 mt-3">
                  <strong>NOTE: Courses having grade below D are mandatory for recourses.</strong>
                  Other Courses are optional. You may want to email for improvement.
                </div>
              </b-col>
              <b-col>
                <button type="button" class="btn btn-primary btn-lg mt-3 font-weight-600">Request For Registration</button>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col>
                <table class="table table-sm table-responsive-sm table-striped mb-4">
                  <thead>
                    <tr class="bg-gray-200">
                      <th colspan="7" class="text-left">
                        <p class="text-primary font-weight-700 text-16 m-0">RECOURSE REGISTRATION LIST</p>
                      </th>
                    </tr>
                    <tr>
                      <th class="text-center" width="5%">SL</th>
                      <th width="10%" class="text-center">Code</th>
                      <th>Course Title</th>
                      <th width="15%" class="text-center">Credit Hours</th>
                      <th width="15%" class="text-center">Status</th>
                      <th width="10%" class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 6" :key="i">
                      <td class="text-center vertical-align-middle">01</td>
                      <td class="text-center vertical-align-middle">CSE 2203</td>
                      <td class="text-left vertical-align-middle">Numerical Methods</td>
                      <td class="text-center vertical-align-middle">3.0</td>
                      <td class="text-center vertical-align-middle">
                        <span class="badge badge-outline-danger border-radius-0">DECLINE</span>
                      </td>
                      <td class="text-center vertical-align-middle">
                        <span class="badge badge-round-danger md m-1">
                          <i class="icon-menu i-Lock font-weight-900"></i>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import vMultiselectListbox from 'vue-multiselect-listbox';
import 'vue-multiselect-listbox/dist/vue-multi-select-listbox.css';
import RegHeader from "../../components/RegHeader";

export default {
  name: "recourse",
  components: { RegHeader, vMultiselectListbox },
  data: () => ({
    selectedCourses: [],
    courses: [{label: 'Alabama', code: 'al'}, {label: 'California', code: 'cal'}],
    headers: [
      {name: 'RECOURSE', link: ''},
      {name: 'COURSE REGISTRATION', link: 'registration'},
      {name: 'RETAKE EXAM', link: 'retake'},
    ]
  })
};
</script>

<style scoped>
.msl-multi-select {
  width: 100% !important;
}
</style>