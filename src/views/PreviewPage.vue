<template>
  <section class="preview">
    <p class="user-title">
      {{ userInfo() ? "Персональные данные" : "Персональных данных нет" }}
    </p>
    <div class="user-info">
      <span>{{ userInfo() }}</span>
    </div>
    <section class="section-children" v-if="children.length && user.fullName">
      <p class="children-title">Дети</p>
      <div v-for="(child, index) in children" :key="index" class="child-info">
        <span>{{ childrenInfo(child) }}</span>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    children() {
      return this.$store.state.children;
    },
  },
  methods: {
    userInfo() {
      return (
        this.user.fullName && [this.user.fullName, this.user.age].join(", ")
      );
    },
    childrenInfo(child) {
      return child.name && [child.name, child.age].join(", ");
    },
  },
};
</script>

<style>
.preview {
  display: grid;
  justify-content: center;
}
.user-title {
  margin: 20px 0 10px 0;
}
.children-title {
  margin-top: 50px;
}
.user-info,
.child-info {
  height: 20px;
  display: flex;
  color: var(--colors-black, #111);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
.child-info {
  width: fit-content;
  margin: 20px 0 20px 0;
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 5px;
  background: var(--colors-gray-l, #f1f1f1);
}
</style>
