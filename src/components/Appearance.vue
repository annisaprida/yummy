<template>
  <section class="profile">
    <div class="profile__preview" 
    :class="activeThemes" 
    :style="{'background-color':bgColor, 'border-color': borderColor}">
      <div class="profile__photo">
        <img 
        :style="{'border-color': borderColor}"
        src="../assets/logo.png"
        />
      </div>
      <div class="profile__detail">
        <h1>{{userData.name}}</h1>
        <h3>{{userData.bio}}</h3>
        <p>{{userData.description}}</p>
      </div>
    </div>
    
    <tabs :options="{ useUrlFragment: false }">
      <tab name="Themes Options">
        <button class="profile__theme-button" @click="setActiveThemes('blue')">Theme 1</button>
        <button class="profile__theme-button" @click="setActiveThemes('pink')">Theme 2</button>
      </tab>
      <tab name="Background color">
        <vue2-color-picker v-model="bgColor"></vue2-color-picker>
      </tab>
      <tab name="Border color">
        <vue2-color-picker v-model="borderColor"></vue2-color-picker>
      </tab>
    </tabs>
  </section>
</template>

<script src="./js/appearance.js"></script>


<style lang="scss" scoped>
  .profile{
    &__preview{
      padding: 15px;
      margin-bottom: 15px;
      border: 10px solid #fff;
      border-radius: 10px;
      &.blue{
        background:turquoise;
        color: #fff;
      }
      &.pink{
        background: pink;
        color: #000;
      }
    }
    &__photo{
      img{
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          width: 100px;
      }
    }
    &__detail{
      margin-bottom: 40px;
    }
    .tabs-component-panels{
      padding: 15px;
    }
    &__theme-button{
      background: none;
      border: 2px solid #3d6efd;
      padding: 10px;
      margin-right: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
</style>

<style lang="scss">
  .profile{
    .tabs-component-panels{
      padding: 15px 0;
      ul{
        list-style-type: none;
      }
    }
  }
  
</style>
