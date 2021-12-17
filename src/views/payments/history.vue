<template>
  <div>
    <b-row>
      <b-col>
        <div class="card mb-4">
          <h3 class="card-title card-header m-0 font-weight-700">
            STUDENT PAYMENT HISTORY
          </h3>
          <div class="card-body p-3">
            <b-row>
              <b-col sm="12" md="3">
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
                    <td>Dissertation Fee</td>
                    <td>:</td>
                    <td class="text-right">18,000.00</td>
                  </tr>
                  <tr>
                    <td>
                      Additional Fee
                      <i class="icon-menu i-Information font-weight-800"></i>
                    </td>
                    <td>:</td>
                    <td class="text-right">49,200.00</td>
                  </tr>
                  <tr>
                    <td>
                      Fees Deducted
                      <i class="icon-menu i-Information font-weight-800"></i>
                    </td>
                    <td>:</td>
                    <td class="text-right">0.00</td>
                  </tr>
                </table>
              </b-col>
              <b-col sm="12" md="5">
                <table class="table table-sm">
                  <tr class="bg-gray-200 font-weight-700">
                    <td>PARTICULAR</td>
                    <td class="text-right">AS OF TODAY</td>
                    <td class="text-right">ACCORDING TO ADMISSION</td>
                  </tr>
                  <tr>
                    <td>TOTAL PAYABLE</td>
                    <td class="text-right">299,224.00</td>
                    <td class="text-right">141,500.00</td>
                  </tr>
                  <tr>
                    <td>TOTAL PAID</td>
                    <td class="text-right">299,244.00</td>
                    <td class="text-right">80,000.00</td>
                  </tr>
                  <tr>
                    <td>BALANCE</td>
                    <td class="text-right">0.00</td>
                    <td class="text-right">-24.00</td>
                  </tr>
                  <tr class="alert alert-success font-weight-600">
                    <td colspan="2">
                      INSTALLMENT PER MONTH
                    </td>
                    <td class="text-right">5,200.00</td>
                  </tr>
                </table>
              </b-col>
              <b-col sm="12" md="4">
                <div class="alert alert-card alert-success mt-3">
                  We have received your last payment of
                  <strong>13274.00</strong> BDT on Jan 04 2021
                </div>

                <div class="text-center">
                  <button
                    class="btn btn-lg font-weight-700 btn-primary ripple btn-raised-primary"
                  >
                    Pay Now
                  </button>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h4 class="alert alert-info alert-card">All Payment Transition History</h4>
                <data-table :items="items" :fields="fields"></data-table>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import DataTable from "@/components/DataTable";
export default {
  name: "history",
  components: { DataTable },
  data: () => ({
    items: [
      { id: 1, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 2, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 3, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 4, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 5, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 6, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 7, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 8, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 9, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 10, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 11, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 12, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 900 },
      { id: 13, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 14, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 15, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 16, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 17, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 18, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 },
      { id: 19, category: 'Course Tuition Fee', remark: 'bKash Payment Method', date: '04-12-2021', amount: 10500 }
    ],
    fields: [
      { key: 'id', label: 'SL', sortable: true, sortDirection: 'desc' },
      { key: 'category', label: 'Payment Head' },
      { key: 'remark', label: 'Payment Remark/Type' },
      { key: 'date', label: 'Transaction Date' },
      { key: 'amount', label: 'Amount', class: 'text-right font-weight-700' }
    ]
  })
};
</script>

<style scoped>

</style>