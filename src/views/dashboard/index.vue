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
        <accounts-statistic></accounts-statistic>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="card mb-4">
          <div class="card-body p-0">
            <h5 class="card-title m-0 p-3"><span class="font-weight-600">Fees &amp; Payment Information</span></h5>
            <div style="height: 360px"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of main-content -->
  </div>
</template>

<script>
import ResultStatistic from "@/components/ResultStatistic";
import AccountsStatistic from "@/components/AccountsStatistic";

export default {
  name: "index",
  components: { AccountsStatistic, ResultStatistic },
};
</script>

<style scoped>
</style>
