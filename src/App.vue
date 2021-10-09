<template>
  <div id="app" class="color-wheel">
    <h1>yummy front end assignment</h1>
    <pinch-zoom :autoHeight="true" >
      <section class="color-wheel__preview" :style="{'background-color': bgColor}">
      </section>
    </pinch-zoom>
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
    width: 50px;
    height: 50px;
    background: var(--color);
    border-radius: 100%;
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
  .pinch-zoom-wrapper {
    height: 200px;
    background-color: #fff;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    background: #fff !important;
    transform: translate(-50%, -50%);
  }
}

</style>