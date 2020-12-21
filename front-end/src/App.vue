<template>
  <div class="parent">
    <div class="header center-all">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <!-- <div class="sidebar center-all">Sidebar nav</div> -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --primary-color: #42b983;
  --danger-color: #c70000ee;
  --main-bg-color: #05053b;
  --white: #fefefe;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Montserrat", "Roboto";
  height: 100vh;
  overflow-y: hidden;
}
.parent {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: minmax(40px, 10px) 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "header header"
    "content content";
}

.header {
  grid-area: header;
  background: var(--main-bg-color);
  position: sticky;
  top: 0;
}
.content {
  grid-area: content;
  height: 100vh;
  overflow-y: scroll;
}

.center-all {
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--white);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--white);
}
.btn-full {
  width: 100%;
}
.btn-primary {
  background: var(--primary-color);
  border-color: var(--primary-color);
}
.btn-primary:disabled {
  background: transparent;
  color: var(--primary-color);
}
.alert {
  width: 100%;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: var(--white);
}
.success {
  background: var(--primary-color);
  border-color: var(--primary-color);
}
.danger {
  background: var(--danger-color);
  border-color: var(--danger-color);
}
</style>
