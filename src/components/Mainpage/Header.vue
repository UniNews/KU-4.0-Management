<template>
  <div class="columns is-centered">
    <div class="column is-half is-size-3-touch is-size-2-desktop has-text-centered has-text-weight-bold">
      <div class="marginTop10px">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.marginTop10px {
  margin-top: 10px;
}
</style>