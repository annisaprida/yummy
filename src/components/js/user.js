import { mapGetters } from 'vuex'

export default {
  name: 'User',
  data(){
    return{
      userData: {
        name: '',
        bio: '',
        description: ''
      }
    }
  },
  computed: {
    ...mapGetters(['isSettingUserData'])
  },
  watch:{
    isSettingUserData(val){
      if(val){
        this.$store.dispatch('setUserData', this.userData)
      }
    }
  }
}