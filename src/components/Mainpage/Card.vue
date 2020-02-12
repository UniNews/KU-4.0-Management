<template>
  <div class="columns is-centered">
    <div class="column is-four-fifths-tablet is-three-fifths-desktop">
      <div class="card">
        <div class="card-content">
          <div class="content marginBottom10px">
            <slot name="option"></slot>
            <slot name="body"></slot>
            <slot name="pagination"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marginBottom10px {
  margin-bottom: 10px;
}
</style>
