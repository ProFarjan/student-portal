<template>
  <div class="breadcrumb">
    <ul>
      <li v-for="(list,i) in lists" :key="i" class="font-weight-600">
        <router-link v-if="list.link" :to="list.link">{{ list.name }}</router-link>
        <span v-else>{{ list.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RegHeader",
  props: {
   lists: {
     type: Array,
     required: true,
   },
  }
};
</script>

<style scoped>

</style>