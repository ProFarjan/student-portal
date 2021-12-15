<template>
  <div>
    <b-row>
      <b-col>
        <div class="card mb-4">
          <h3 class="card-title card-header m-0 font-weight-700">
            STUDENT RESULT
          </h3>
          <div class="card-body p-3">

            <b-tabs
              active-nav-item-class="font-weight-bold text-uppercase">
              <b-tab title="Semester Wise Transcript" active>
                <div v-for="se in 4" :key="se">
                  <table class="table table-sm table-responsive-sm table-striped mb-4">
                  <thead>
                    <tr class="bg-gray-200">
                      <th colspan="7" class="text-center">
                        <p class="text-primary font-weight-700 text-18 m-0">SUMMER 2021 (MAY - AUG)</p>
                      </th>
                    </tr>
                    <tr>
                      <th class="text-center" width="5%">SL</th>
                      <th width="10%" class="text-center">Code</th>
                      <th>Course Title</th>
                      <th width="15%" class="text-center">Attempted Credit</th>
                      <th width="15%" class="text-center">Earned Credit</th>
                      <th width="10%" class="text-center">Grade</th>
                      <th width="10%" class="text-center">GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 6" :key="i">
                      <td class="text-center">{{i}}</td>
                      <td class="text-center">CSE 2203</td>
                      <td class="text-left">Numerical Methods</td>
                      <td class="text-center">3.0</td>
                      <td class="text-center">3.0</td>
                      <td class="text-center">A<sup>-</sup></td>
                      <td class="text-center">3.25</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr class="bg-gray-200">
                      <th colspan="3" class="text-right">Total :</th>
                      <th class="text-center">18</th>
                      <th class="text-center">18</th>
                      <th></th>
                      <th class="text-center">3.25</th>
                    </tr>
                  </tfoot>
                </table>
                  <div v-if="se > 0" class="separator-breadcrumb border-top mb-4"></div>
                </div>

              </b-tab>
              <b-tab title="Academic Transcript">
                <div class="alert alert-card alert-info">
                  <h4 class="m-0">Academic Transcript Copy</h4>
                </div>

                <table class="table table-sm table-responsive-sm table-striped table-bordered">
                  <thead>
                    <tr class="bg-gray-200">
                      <th class="text-center" width="3%">SL</th>
                      <th class="text-center" width="15%">Course Code</th>
                      <th>Course Title</th>
                      <th class="text-center" width="15%">Credit Hour</th>
                      <th class="text-center" width="15%">Grade Letter</th>
                      <th class="text-center" width="15%">Grade Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 38" :key="i">
                      <td class="text-center">{{i}}</td>
                      <td class="text-center">CSE 4136</td>
                      <td>Computer Networks</td>
                      <td class="text-center">3.0</td>
                      <td class="text-center">A<sup>-</sup></td>
                      <td class="text-center">{{ (3.25 - (0.01 * i)).toFixed(2) }}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr class="bg-gray-200">
                      <th colspan="3" class="text-right">Total</th>
                      <th class="text-center">122</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </tfoot>
                </table>

                <div class="alert text-center alert-card alert-success">
                  <h4 class="m-0">Your CGPA:- 3.071</h4>
                </div>
              </b-tab>
            </b-tabs>

          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "result"
};
</script>

<style scoped>

</style>