<template>
  <div class="main-content">
    <div class="row">
      <!-- ICON BG-->
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
          <div class="card-body text-center">
            <i class="i-Right"></i>
            <div class="content" style="max-width: 100%;">
              <p class="text-muted mt-2 mb-0 font-weight-900">Earn Credit</p>
              <p class="text-primary text-18 line-height-1 mb-2">
                105.0 of 132.0
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
          <div class="card-body text-center">
            <i class="i-Money-2"></i>
            <div class="content" style="max-width: 100%;">
              <p class="text-muted mt-2 mb-0 font-weight-900">Monthly Payable</p>
              <p class="text-primary text-18 line-height-1 mb-2">5,600</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
          <div class="card-body text-center">
            <i class="i-Receipt"></i>
            <div class="content" style="max-width: 100%;">
              <p class="text-muted mt-2 mb-0 font-weight-900">CSE Program</p>
              <p class="text-primary text-18 line-height-1 mb-2">Batch: 45E</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
          <div class="card-body text-center">
            <i class="i-Bar-Chart"></i>
            <div class="content" style="max-width: 100%;">
              <p class="text-muted mt-2 mb-0 font-weight-900">CGPA</p>
              <p class="text-primary text-18 line-height-1 mb-2">3.25 out of 4.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">

      <div class="col-lg-8 col-md-12">
        <result-statistic></result-statistic>
      </div>

      <div class="col-lg-4 col-sm-12">
        <credit-statistic></credit-statistic>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="card mb-4">
          <h5 class="card-header m-0 p-3"><span class="font-weight-600">Fees &amp; Payment Information</span></h5>
          <div class="card-body p-0">

            <b-row class="p-3">
              <b-col sm="5">
                <table class="table table-sm">
                  <tr>
                    <td>Credit Required For Degree</td>
                    <td>:</td>
                    <td class="text-right">126.0</td>
                  </tr>
                  <tr>
                    <td>Max Semester Required</td>
                    <td>:</td>
                    <td class="text-right">12</td>
                  </tr>
                  <tr>
                    <td>Approved Scholarship</td>
                    <td>:</td>
                    <td class="text-right">251,510.00</td>
                  </tr>
                  <tr>
                    <td>Scholarship Type</td>
                    <td>:</td>
                    <td class="text-right">Fixed</td>
                  </tr>
                  <tr>
                    <td>Payment Interval</td>
                    <td>:</td>
                    <td class="text-right">Monthly</td>
                  </tr>
                  <tr>
                    <td>Installment Per Month (0+(1,123.02*0)/4)</td>
                    <td>:</td>
                    <td class="text-right">5,171.00</td>
                  </tr>
                  <tr>
                    <td colspan="3">Installment = (Basic Fee Per Semester + (Revised Tuition Fee Per Month * Enrolled Credit) / Semester Duration )</td>
                  </tr>
                </table>
              </b-col>
              <b-col sm="3">
                <table class="table table-sm">
                  <tr>
                    <td>Admission Fee</td>
                    <td>:</td>
                    <td class="text-right">10,500.00</td>
                  </tr>
                  <tr>
                    <td>Tuition Fee</td>
                    <td>:</td>
                    <td class="text-right">141,500.00</td>
                  </tr>
                  <tr>
                    <td>Basic Fee</td>
                    <td>:</td>
                    <td class="text-right">80,000.00</td>
                  </tr>
                  <tr>
                    <td>Project/Internship</td>
                    <td>:</td>
                    <td class="text-right">18,000.00</td>
                  </tr>
                  <tr>
                    <td>Additional Fee <i class="icon-menu i-Information font-weight-800"></i></td>
                    <td>:</td>
                    <td class="text-right">49,200.00</td>
                  </tr>
                  <tr>
                    <td>Fees Deducted <i class="icon-menu i-Information font-weight-800"></i></td>
                    <td>:</td>
                    <td class="text-right">0.00</td>
                  </tr>
                  <tr>
                    <td>Total Payable</td>
                    <td>:</td>
                    <td class="text-right"><strong>299,200.00</strong></td>
                  </tr>
                </table>
              </b-col>
              <b-col>
                <div class="alert alert-card alert-success">
                  We have received your last payment of <strong>13274.00</strong> BDT on Jan 04 2021
                </div>

                <div class="alert alert-card alert-info">
                  You have no due as of today. Thank you so much for you support
                </div>

                <div class="text-center">
                  <button class="btn btn-xl btn-primary ripple btn-raised-primary">Pay Now</button>
                </div>
              </b-col>
            </b-row>

          </div>
        </div>
      </div>
    </div>

    <b-row>
      <b-col md="6" sm="12">
        <div class="card mb-4" style="height: 350px;">
          <h5 class="card-header bg-info m-0 p-3"><span class="font-weight-600 text-white">Running Courses</span></h5>
          <div class="card-body p-3">
            <div class="table-responsive">
              <table class="table table-sm table-striped">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>COURSE NAME</th>
                  <th>CODE</th>
                  <th>CREDIT</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(i) in 5" :key="i">
                  <td>{{i}}</td>
                  <td>Numerical Methods</td>
                  <td>CSE 2203</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="6" sm="12">
        <div class="card mb-4" style="height: 350px;">
          <h5 class="card-header bg-warning m-0 p-3"><span class="font-weight-600 text-white">Upcoming Courses</span></h5>
          <div class="card-body p-3">
            <strong>THERE IS NO OFFERED COURSE FOR YOU IN NEXT SEMESTER.</strong>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6" sm="12">
        <div class="card mb-4" style="height: 350px;">
          <h5 class="card-header bg-success m-0 p-3"><span class="font-weight-600 text-white">Completed Courses</span></h5>
          <div class="card-body p-3">
            <div class="table-responsive">
              <table class="table table-sm table-striped" style="overflow-y: hidden">
              <thead>
              <tr>
                <th>SL</th>
                <th>COURSE NAME</th>
                <th>CODE</th>
                <th>CREDIT</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(i) in 7" :key="i">
                <td>{{i}}</td>
                <td>Numerical Methods</td>
                <td>CSE 2203</td>
                <td>3</td>
              </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="6" sm="12">
        <div class="card mb-4" style="height: 350px;">
          <h5 class="card-header bg-warning m-0 p-3"><span class="font-weight-600 text-white">Incomplete Courses</span></h5>
          <div class="card-body p-3">
            <div class="table-responsive">
              <table class="table table-sm table-striped" style="overflow-y: hidden">
                <thead>
                <tr>
                  <th>SL</th>
                  <th>COURSE NAME</th>
                  <th>CODE</th>
                  <th>CREDIT</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(i) in 3" :key="i">
                  <td>{{i}}</td>
                  <td>Numerical Methods</td>
                  <td>CSE 2203</td>
                  <td>3</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>

    <div class="row">
      <div class="col-md-12">
        <div class="card mb-4">
          <h5 class="card-header m-0 p-3"><span class="font-weight-600">Weekly Class Routine</span></h5>
          <div class="card-body p-3">

            <table id="routine" class="table table-sm table-bordered table-striped">
              <thead>
                <tr>
                  <th class="text-center">Time</th>
                  <th class="text-center" width="12%">MON</th>
                  <th class="text-center" width="12%">TUE</th>
                  <th class="text-center" width="12%">WED</th>
                  <th class="text-center" width="12%">THU</th>
                  <th class="text-center" width="12%">FRI</th>
                  <th class="text-center" width="12%">SAT</th>
                  <th class="text-center" width="12%">SUN</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 3" :key="i">
                  <th>09:40 - 10:30</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <span class="badge badge-outline-success ml-1 mb-1">FIN 1101</span>
                    <span class="badge badge-outline-success ml-1 mb-1">PDD</span>
                    <span class="badge badge-outline-success ml-1 mb-1">@UC#R501</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
    <!-- end of main-content -->
  </div>
</template>

<script>
import ResultStatistic from "@/components/ResultStatistic";
import CreditStatistic from "@/components/CreditStatistic";

export default {
  name: "index",
  components: { CreditStatistic, ResultStatistic },
};
</script>

<style scoped>
#routine tr td, #routine tr th {
  text-align: center;
  vertical-align: middle;
}
</style>
