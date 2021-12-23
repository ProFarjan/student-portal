<template>
  <div>
    <b-row>
      <b-col>
        <div class="card mb-4">
          <h3 class="card-title card-header m-0 font-weight-700">
            ONLINE PAYMENT
          </h3>
          <div class="card-body p-3">
            <div class="alert alert-warning p-1 alert-card border-radius-0">TO AVOID LATE PAYMENT PENALTY PAY ON TIME</div>
            <b-row>
              <b-col sm="12" md="6">
                <h3 class="text-primary text-20 p-2 alert alert-gray-500 border-radius-0">Online Payment</h3>
                <table class="table table-sm table-responsive-sm table-borderless">
                  <tr>
                    <td style="text-align: right;vertical-align: middle;">
                      <h5 class="m-0">Payment Amount <span class="font-weight-600 text-danger">*</span></h5>
                    </td>
                    <td class="text-right" width="50%" style="vertical-align: middle;">
                      <input class="form-control text-right" type="text" placeholder="Enter Amount" />
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;vertical-align: middle;">
                      <h5 class="m-0">Outstanding balance amount</h5>
                    </td>
                    <td class="text-right" width="50%" style="vertical-align: middle;">
                      <strong>19,911.00</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;vertical-align: middle;">
                      <h5 class="m-0">Remaining due amount</h5>
                    </td>
                    <td class="text-right" width="50%" style="vertical-align: middle;">
                      <strong>19,911.00</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: right;vertical-align: middle;"></td>
                    <td class="text-right" width="50%" style="vertical-align: middle;">
                      <button class="btn btn-primary btn-lg">$ Pay Now</button>
                    </td>
                  </tr>
                </table>
              </b-col>
              <b-col sm="12" md="6">
                <div class="alert alert-info p-1 mb-0 alert-card border-radius-0">LAST PAYMENT INFORMATION</div>
                <table class="table table-sm table-responsive-sm table-striped table-hover mb-4">
                  <thead>
                    <tr>
                      <th>Fee Head</th>
                      <th>Payment Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tuition Fee</td>
                      <td>10.12.2021</td>
                      <td>11,00 BDT</td>
                    </tr>
                  </tbody>
                </table>

                <div class="alert alert-danger p-1 mb-0 alert-card border-radius-0">PAYMENT SCHOLARSHIP</div>
                <table class="table table-sm table-responsive-sm table-striped table-hover mb-4">
                  <thead>
                    <tr>
                      <th>Fee Head</th>
                      <th>Payment Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tuition Fee</td>
                      <td>10.12.2021</td>
                      <td>11,00 BDT</td>
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
export default {
  name: "OnlinePayment"
};
</script>

<style scoped>

</style>