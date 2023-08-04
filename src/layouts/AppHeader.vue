<template>
  <header>
    <nav>
      <router-link to="/">Форма</router-link>
      <router-link to="/preview">Превью</router-link>
    </nav>
  </header>
</template>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 76px;
  box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);

  background: white url("../assets/logo.svg") 5% center/12% no-repeat;
}
nav {
  display: flex;
  gap: 24px;
}

nav a {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  color: #1117;
  text-decoration: none;
}
nav a:hover {
  color: #01a7fd;
}
</style>
