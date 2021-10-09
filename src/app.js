import { Slider } from 'vue-color'
import PinchZoom from 'vue-pinch-zoom';
let defaultProps = {
  hex: '#79D2A6',
  hsl: {
    h: 150,
    s: 0.42,
    l: 0.82,
    a: 1
  },
  hsv: {
    h: 150,
    s: 0.42,
    v: 0.82,
    a: 1
  },
  rgba: {
    r: 121,
    g: 210,
    b: 166,
    a: 1
  },
  a: 1
}
export default {
  name: 'App',
  data(){
    return {
      color:defaultProps
    }
  },
  computed:{
    bgColor(){
      return this.color.hex
    }
  },
  methods:{
    updateValue (value) {
      this.colors = value
    }
  },
  components: {
    'slider-picker': Slider,
    'pinch-zoom': PinchZoom
  }
}