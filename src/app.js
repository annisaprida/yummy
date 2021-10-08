import {Tabs, Tab} from 'vue-tabs-component';

import User from './components/User.vue'
import Appearance from './components/Appearance.vue'

export default {
  name: 'App',
  components: {
    User,
    Appearance,
    Tabs,
    Tab
  },
  methods: {
    tabClicked(selectedTab){
      this.$store.dispatch('setIsSettingUserData', selectedTab.tab.name.toLowerCase() === "appearance")
    }
  }
}