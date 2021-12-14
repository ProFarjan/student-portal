<template>
  <div>
    <div class="breadcrumb">
      <h1 class="mr-2">Student Profile</h1>
      <ul>
        <li>View Profile</li>
      </ul>
    </div>
    <div class="separator-breadcrumb border-top"></div>

    <b-row>
      <b-col>
        <div class="card mb-4">
          <div class="card-body p-3">

            <b-row>
              <b-col md="3">
                <b-img  fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKf0XAGNvI7Jw4FuouF4Nh_g_NgacIzvdSCg&usqp=CAU" alt="Image 1"></b-img>
              </b-col>
              <b-col md="9">
                <h3 class="text-center profile-header">Computer Science &amp; Engineering (Batch: 46E) <b-button squared size="sm" variant="light" class="float-right">Edit</b-button></h3>
                <b-row>
                  <b-col>
                    <div class="vGrid">
                      <label>Name</label>
                      <p>Md. Student Name</p>
                    </div>
                    <div class="vGrid">
                      <label>Birth of Date</label>
                      <p>03 Feb 1998</p>
                    </div>
                    <div class="vGrid">
                      <label>Phone</label>
                      <p>01966885733 &amp; 01823874659</p>
                    </div>
                    <div class="vGrid">
                      <label>Email</label>
                      <p>hellowfarjan@gmail.com</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="vGrid">
                      <label>Gender</label>
                      <p>Male</p>
                    </div>
                    <div class="vGrid">
                      <label>Blood</label>
                      <p>B+</p>
                    </div>
                    <div class="vGrid">
                      <label>Marital Status</label>
                      <p>Unmarried</p>
                    </div>
                    <div class="vGrid">
                      <label>National ID</label>
                      <p>199861147000371</p>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>

            <b-tabs class="mt-4">
              <b-tab title="PARENTS" active>
                <b-row>
                  <b-col>
                    <h4 style="margin: 0px 0 6px;font-size: 16px;font-weight: 900;">My Father</h4>
                    <b-row>
                      <b-col>
                        <div class="vGrid">
                          <label>Father's Name</label>
                          <p>Md. Your Father</p>
                        </div>
                        <div class="vGrid">
                          <label>Phone</label>
                          <p>01966885733</p>
                        </div>
                      </b-col>
                      <b-col>
                        <div class="vGrid">
                          <label>Occupation</label>
                          <p>Business</p>
                        </div>
                        <div class="vGrid">
                          <label>Email</label>
                          <p>yourfathers@gmail.com</p>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col>
                    <h4 style="margin: 0px 0 6px;font-size: 16px;font-weight: 900;">My Mother</h4>
                    <b-row>
                      <b-col>
                        <div class="vGrid">
                          <label>Mother's Name</label>
                          <p>Must. Your Mother</p>
                        </div>
                        <div class="vGrid">
                          <label>Phone</label>
                          <p>01966885733</p>
                        </div>
                      </b-col>
                      <b-col>
                        <div class="vGrid">
                          <label>Occupation</label>
                          <p>House Wife</p>
                        </div>
                        <div class="vGrid">
                          <label>Email</label>
                          <p>yourmother@gmail.com</p>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="ADDRESS">
                <b-row>
                  <b-col>
                    <h4 style="margin: 0px 0 6px;font-size: 16px;font-weight: 900;">Present Address</h4>
                    <b-row>
                      <b-col>
                        <div class="vGrid">
                          <label>Address</label>
                          <p>Puthia</p>
                        </div>
                        <div class="vGrid">
                          <label>Thana</label>
                          <p>Rajshahi Sadar</p>
                        </div>
                        <div class="vGrid">
                          <label>Post Code</label>
                          <p>6203</p>
                        </div>
                      </b-col>
                      <b-col>
                        <div class="vGrid">
                          <label>District</label>
                          <p>Rajshahi</p>
                        </div>
                        <div class="vGrid">
                          <label>Country</label>
                          <p>Bangladesh</p>
                        </div>
                        <div class="vGrid">
                          <label>Full Address</label>
                          <p>Puthia Rajshahi Sadar - 6203, Rajshahi, Bangladesh</p>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col>
                    <h4 style="margin: 0px 0 6px;font-size: 16px;font-weight: 900;">Permanent Address</h4>
                    <b-row>
                      <b-col>
                        <div class="vGrid">
                          <label>Address</label>
                          <p>Puthia</p>
                        </div>
                        <div class="vGrid">
                          <label>Thana</label>
                          <p>Rajshahi Sadar</p>
                        </div>
                        <div class="vGrid">
                          <label>Post Code</label>
                          <p>6203</p>
                        </div>
                      </b-col>
                      <b-col>
                        <div class="vGrid">
                          <label>District</label>
                          <p>Rajshahi</p>
                        </div>
                        <div class="vGrid">
                          <label>Country</label>
                          <p>Bangladesh</p>
                        </div>
                        <div class="vGrid">
                          <label>Full Address</label>
                          <p>Puthia Rajshahi Sadar - 6203, Rajshahi, Bangladesh</p>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="EMERGENCY">
                <b-row>
                  <b-col>
                    <h4 style="margin: 0px 0 6px;font-size: 16px;font-weight: 900;">Local Guardian's Information</h4>
                    <b-row>
                      <b-col>
                        <div class="vGrid">
                          <label>Guardian Name</label>
                          <p>Bilkish Akbar</p>
                        </div>
                        <div class="vGrid">
                          <label>Occupation</label>
                          <p>House Wife</p>
                        </div>
                        <div class="vGrid">
                          <label>Relation with student</label>
                          <p>Mother</p>
                        </div>
                      </b-col>
                      <b-col>
                        <div class="vGrid">
                          <label>Email</label>
                          <p>local@gmail.com</p>
                        </div>
                        <div class="vGrid">
                          <label>Phone</label>
                          <p>01966885733</p>
                        </div>
                        <div class="vGrid">
                          <label>Full Address</label>
                          <p>Puthia Rajshahi Sadar - 6203, Rajshahi, Bangladesh</p>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col>
                    <h4 style="margin: 0px 0 6px;font-size: 16px;font-weight: 900;">Emergency Contact</h4>
                    <b-row>
                      <b-col>
                        <div class="vGrid">
                          <label>Full Name</label>
                          <p>Md. Akbar Ali</p>
                        </div>
                        <div class="vGrid">
                          <label>Relation with student</label>
                          <p>Father</p>
                        </div>
                      </b-col>
                      <b-col>
                        <div class="vGrid">
                          <label>Phone</label>
                          <p>01966885733</p>
                        </div>
                        <div class="vGrid">
                          <label>Email Address</label>
                          <p>local@gmail.com</p>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="EDUCATION">
                upcoming
              </b-tab>
              <b-tab title="ADDITIONAL">
                upcoming
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
  name: "Profile"
};
</script>

<style scoped>
  .profile-header {
    padding: 4px 0;
    border-top: 2px solid #7ecfef;
    border-bottom: 2px solid #7ecfef;
    font-weight: 600;
    font-size: 20px;
    color: #639;
  }
  .vGrid {
    margin: 2px 0 10px;
    line-height: 18px;
  }
  .vGrid p {
    margin: 0;
    font-weight: 700;
    font-size: 14px;
  }
  .vGrid label {
    color: #b7b6b7;
    font-size: 15px;
    margin: 0;
    font-weight: 600;
  }
  .btn-light {
    color: #000 !important;
    background-color: #eee !important;
    border-color: #eee !important;
  }
</style>