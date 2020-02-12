<template>
  <b-loading
    :is-full-page="true"
    :active.sync="isLoading"
    :can-cancel="false"
  ></b-loading>
</template>

<script>
export default {
  props: {
    isLoading: Boolean
  }
};
</script>

<style scoped></style>
