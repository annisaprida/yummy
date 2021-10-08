import { mapGetters } from 'vuex'
import {Tabs, Tab} from 'vue-tabs-component';
import Vue2ColorPicker from 'vue2-color-picker';
export default {
  name: 'User',
  data(){
    return{
      bgColor: '',
      activeThemes: '',
      borderColor: ''
    }
  },
  computed: {
    ...mapGetters(['userData'])
  },
  methods: {
    setActiveThemes(value){
      this.bgColor = ''
      this.activeThemes = value
    }
  },
  components: {
    Tabs,
    Tab,
    'vue2-color-picker': Vue2ColorPicker
  }
}