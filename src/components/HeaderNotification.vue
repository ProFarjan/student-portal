<template>
  <div>
    <b-dropdown
      size="lg"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
    >
      <template #button-content>
        <div class="badge-top-container" id="dropdownNotification">
          <span class="badge badge-primary">3</span>
          <i class="i-Bell text-muted header-icon"></i>
        </div>
      </template>
      <b-dropdown-item href="#">
        <div class="notification-details flex-grow-1">
          <p class="m-0 d-flex align-items-center">
            <span>New message</span>
            <span class="badge badge-pill badge-primary ml-1 mr-1">new</span>
            <span class="flex-grow-1"></span>
            <span class="text-small text-muted ml-auto">10 sec ago</span>
          </p>
          <p class="text-small text-muted m-0">James: Hey! are you busy?</p>
        </div>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item href="#">
        <div class="notification-details flex-grow-1">
          <p class="m-0 d-flex align-items-center">
            <span>New order received</span>
            <span class="badge badge-pill badge-success ml-1 mr-1">new</span>
            <span class="flex-grow-1"></span>
            <span class="text-small text-muted ml-auto">2 hours ago</span>
          </p>
          <p class="text-small text-muted m-0">1 Headphone, 3 iPhone x</p>
        </div>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item href="#">
        <div class="notification-details flex-grow-1">
          <p class="m-0 d-flex align-items-center">
            <span>Product out of stock</span>
            <span class="badge badge-pill badge-danger ml-1 mr-1">3</span>
            <span class="flex-grow-1"></span>
            <span class="text-small text-muted ml-auto">10 hours ago</span>
          </p>
          <p class="text-small text-muted m-0">Headphone E67, R98, XL90, Q77</p>
        </div>
      </b-dropdown-item>
    </b-dropdown>

    <!--    <div class="dropdown">-->
    <!--      <div class="badge-top-container" role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
    <!--        <span class="badge badge-primary">3</span>-->
    <!--        <i class="i-Bell text-muted header-icon"></i>-->
    <!--      </div>-->
    <!--      <div class="dropdown-menu dropdown-menu-right notification-dropdown rtl-ps-none" aria-labelledby="dropdownNotification" data-perfect-scrollbar data-suppress-scroll-x="true">-->
    <!--        <div class="dropdown-item d-flex">-->
    <!--          <div class="notification-icon">-->
    <!--            <i class="i-Speach-Bubble-6 text-primary mr-1"></i>-->
    <!--          </div>-->
    <!--          <div class="notification-details flex-grow-1">-->
    <!--            <p class="m-0 d-flex align-items-center">-->
    <!--              <span>New message</span>-->
    <!--              <span class="badge badge-pill badge-primary ml-1 mr-1">new</span>-->
    <!--              <span class="flex-grow-1"></span>-->
    <!--              <span class="text-small text-muted ml-auto">10 sec ago</span>-->
    <!--            </p>-->
    <!--            <p class="text-small text-muted m-0">James: Hey! are you busy?</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="dropdown-item d-flex">-->
    <!--          <div class="notification-icon">-->
    <!--            <i class="i-Receipt-3 text-success mr-1"></i>-->
    <!--          </div>-->
    <!--          <div class="notification-details flex-grow-1">-->
    <!--            <p class="m-0 d-flex align-items-center">-->
    <!--              <span>New order received</span>-->
    <!--              <span class="badge badge-pill badge-success ml-1 mr-1">new</span>-->
    <!--              <span class="flex-grow-1"></span>-->
    <!--              <span class="text-small text-muted ml-auto">2 hours ago</span>-->
    <!--            </p>-->
    <!--            <p class="text-small text-muted m-0">1 Headphone, 3 iPhone x</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="dropdown-item d-flex">-->
    <!--          <div class="notification-icon">-->
    <!--            <i class="i-Empty-Box text-danger mr-1"></i>-->
    <!--          </div>-->
    <!--          <div class="notification-details flex-grow-1">-->
    <!--            <p class="m-0 d-flex align-items-center">-->
    <!--              <span>Product out of stock</span>-->
    <!--              <span class="badge badge-pill badge-danger ml-1 mr-1">3</span>-->
    <!--              <span class="flex-grow-1"></span>-->
    <!--              <span class="text-small text-muted ml-auto">10 hours ago</span>-->
    <!--            </p>-->
    <!--            <p class="text-small text-muted m-0">Headphone E67, R98, XL90, Q77</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="dropdown-item d-flex">-->
    <!--          <div class="notification-icon">-->
    <!--            <i class="i-Data-Power text-success mr-1"></i>-->
    <!--          </div>-->
    <!--          <div class="notification-details flex-grow-1">-->
    <!--            <p class="m-0 d-flex align-items-center">-->
    <!--              <span>Server Up!</span>-->
    <!--              <span class="badge badge-pill badge-success ml-1 mr-1">3</span>-->
    <!--              <span class="flex-grow-1"></span>-->
    <!--              <span class="text-small text-muted ml-auto">14 hours ago</span>-->
    <!--            </p>-->
    <!--            <p class="text-small text-muted m-0">Server rebooted successfully</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "HeaderNotification",
};
</script>

<style>
.layout-sidebar-large .main-header .header-part-right .user {
  margin-right: 0 !important;
  padding-left: 0 !important;
}
.btn-group > .btn:first-child {
  margin-left: 0 !important;
  padding-left: 0;
  padding-right: 20px;
}
</style>
