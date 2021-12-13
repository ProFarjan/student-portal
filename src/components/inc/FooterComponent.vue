<template>
  <!-- Footer Start -->
  <div>
    <div class="flex-grow-1"></div>
    <div class="app-footer">
      <div class="row">
        <div class="col-md-9">
          <p>
            <strong>{{ $root.$data.author.title }}</strong>
          </p>
          <p>{{ $root.$data.author.description }}</p>
        </div>
      </div>
      <div
        class="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center"
      >
        <a
          class="btn btn-primary text-white btn-rounded"
          :href="$root.$data.author.url"
          target="_blank"
          >{{ $root.$data.author.name }}</a
        >
        <span class="flex-grow-1"></span>
        <div class="d-flex align-items-center">
          <img class="logo" :src="$root.$data.author.logo" alt="" />
          <div>
            <p class="m-0">&copy; 2021 {{ $root.$data.author.company }}</p>
            <p class="m-0">All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- fotter end -->
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped></style>
