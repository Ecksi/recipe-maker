<script>
export default {
  name: 'Modal'
}
</script>

<template>
  <div class="modal" @click="$emit('closeModal')">
    <div class="modal-content" @click.stop>
      <span class="modal-x" @click="$emit('closeModal')">X</span>
      <slot></slot>
    </div>
  </div>
</template>

<style>
  .modal {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    z-index: 10;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }

  .modal-content {
    position: relative;
    padding: 24px;
    background: white;
    text-align: center;
    border-radius: 8px;
    border: solid 1px black;
    cursor: default;
    top: 50%;
    left: 50%;
    max-width: 25.5rem;
    box-shadow: 0 0.0625em 0.5em 0 rgba(0, 0, 0, 0.5);
    transform: translate(-50%, -50%);
  }

  .modal-x {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
</style>
