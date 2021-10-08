<template>
  <div id="app">
    <tabs @clicked="tabClicked">
        <tab name="My Page">
            <h1>Profile</h1>
           <User></User>
        </tab>
        <tab name="Appearance">
            <Appearance></Appearance>
        </tab>
    </tabs>
  </div>
  
</template>

<script src="./app.js"></script>

<style lang="scss" scoped>
#app {
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
  h1{
    text-align: left;
  }
}

</style>

<style lang="scss">
  html, body{
    height: 100%;
  }
  .tabs-component-tabs{
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    li{
      flex: 50%;
      padding: 5px;
      border-radius: 10px;
      a{
        text-decoration: none;
        color: #000;
        display: block;
      }
    }
    .tabs-component-tab{
      &.is-active{
        background:#3d6efd;
        a{
          color: #fff
        }
      }
    }
  }
  .tabs-component-panel{
    padding: 0 20px;
    ul{
      list-style-type: none;
      margin: 0;
    }
  }
</style>
