<template>
  <div id="app" class="color-wheel">
    yummy front end assignment
    <section class="color-wheel__preview" :style="{'background-color': bgColor}">
    </section>
     <slider-picker @input="updateValue" v-model="color" />
  </div>
  
</template>

<script src="./app.js"></script>

<style lang="scss">
 html, body{
  height: 100%;
}
.color-wheel {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
  border: 1px solid #eee;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 15px;
  height: 100%;
  position: relative;
  &__preview{
    width: 200px;
    height: 200px;
    background: var(--color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .vc-slider{
    position: fixed;
    bottom: 20px;
    width: 100%;
    left: 0;
    &-swatches{
      display: none;
    }
    &-hue-warp {
      height: 20px;
      .vc-hue-picker{
        width: 20px;
        height: 20px;
        border: 2px solid #00bcd4;
        border-radius: 100%;
        transform: translate(-7px, -5px);
      }
    }
  }
}

</style>