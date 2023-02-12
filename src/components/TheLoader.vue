<template>
  <div
      class="spinner"
      :class="{ 'spinner--is-hidden': !visible }"
  >
    <div class="spinner__circle-1">
      <div class="spinner__circle-2"></div>
    </div>
    <div class="spinner__message">
      Loading ...
    </div>
  </div>
</template>

<script>
export default {
  name: "TheLoader",
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner {
  --spinner-circle1--color: var(--color-green);
  --spinner-circle1--size: 100px;
  --spinner-circle1--duration: 2s;

  --spinner-circle2--color: var(--color-blue);
  --spinner-circle2--size: 80px;
  --spinner-circle2--duration: 1.5s;

  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  background-color: rgba(#2f2f2f, 0.9);
}

.spinner--is-hidden {
  display: none;
}

.spinner__message {
  margin-top: 15px;
  font-weight: 500;
  font-size: 2.2rem;
  font-family: sans-serif;
  display: inline-block;

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(120deg, var(--color-green), var(--color-blue));
  color: var(--color-white-mute);
}

.spinner__circle-1,
.spinner__circle-2 {
  border-radius: 50%;
  animation-name: spinner;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.spinner__circle-1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--spinner-circle1--size);
  height: var(--spinner-circle1--size);
  border-left: 12px solid var(--spinner-circle1--color);
  animation-duration: var(--spinner-circle1--duration);
}

.spinner__circle-2 {
  width: var(--spinner-circle2--size);
  height: var(--spinner-circle2--size);
  border-right: 12px solid var(--spinner-circle2--color);
  animation-duration: var(--spinner-circle2--duration);
}

@keyframes spinner {
  100% {
    transform: rotate(360deg);
  }
}
</style>