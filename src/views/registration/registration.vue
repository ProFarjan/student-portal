<template>
  <div>
    <reg-header :lists="headers"></reg-header>
    <b-row>
      <b-col>
        <div class="card mb-4">
          <h3 class="card-title card-header m-0 font-weight-700">
            COURSE REGISTRATION
          </h3>
          <div class="card-body p-3">
            <div class="alert alert-success alert-card p-1 border-radius-0">REQUESTED COURSES FOR REGISTRATION</div>
            <b-row class="mt-3">
              <b-col>
                <table class="table table-sm table-responsive-sm table-striped mb-4">
                  <thead>
                    <tr>
                      <th class="text-center" width="5%">SL</th>
                      <th width="10%" class="text-center">Code</th>
                      <th>Course Title</th>
                      <th width="15%" class="text-center">Credit Hours</th>
                      <th width="15%" class="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 6" :key="i">
                      <td class="text-center vertical-align-middle">{{ i }}</td>
                      <td class="text-center vertical-align-middle">CSE 2203</td>
                      <td class="text-left vertical-align-middle">Numerical Methods</td>
                      <td class="text-center vertical-align-middle">3.0</td>
                      <td class="text-center vertical-align-middle">
                        <span class="badge badge-outline-success border-radius-0">APPROVED</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </b-col>
            </b-row>

            <div class="alert alert-info text-16 p-2 font-weight-600 mt-3 alert-card border-radius-0">YOU HAVE THE FOLLOWING COURSES AVAILABLE FOR RECOURSE</div>
            <b-row class="mt-3">
              <b-col>
                <table class="table table-sm table-responsive-sm table-striped mb-4">
                  <thead>
                    <tr>
                      <th class="text-center" width="5%">SL</th>
                      <th width="10%" class="text-center">Code</th>
                      <th>Course Title</th>
                      <th width="15%" class="text-center">Credit Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr v-for="i in 2" :key="i">
                    <td class="text-center vertical-align-middle">{{ i }}</td>
                    <td class="text-center vertical-align-middle">CSE 2203</td>
                    <td class="text-left vertical-align-middle">Electronic Engineering</td>
                    <td class="text-center vertical-align-middle">3.0</td>
                  </tr>
                  </tbody>
                </table>
              </b-col>
            </b-row>
            <button class="btn btn-primary btn-facebook font-weight-600 btn-lg float-right ripple" type="button">CLICK FOR RECOURSE REGISTRATION</button>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RegHeader from "../../components/RegHeader";
export default {
  name: "registration",
  components: { RegHeader },
  data: () => ({
    headers: [
      {name: 'COURSE REGISTRATION', link: ''},
      {name: 'RECOURSE', link: 'recourse'},
      {name: 'RETAKE EXAM', link: 'retake'},
    ]
  })
};
</script>

<style scoped>

</style>