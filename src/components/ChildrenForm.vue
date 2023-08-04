<template>
  <div class="child-form">
    <div class="input-container child-input">
      <label class="placeholder">Имя</label>
      <input type="text" v-model="{ ...child }.name" class="user-input" />
    </div>
    <div class="input-container child-input">
      <label class="placeholder">Возраст</label>
      <input v-model="{ ...child }.age" type="number" class="user-input" />
    </div>
    <button @click="removeChild(index)" class="del">удалить</button>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    child: { type: Object, required: true },
    removeUnsavedChildren: {
      type: Function,
      required: true,
    },
  },

  methods: {
    removeChild() {
      this.$store.dispatch("deleteChild", this.index);
      this.removeUnsavedChildren(this.index);
    },
  },
};
</script>
<style>
.child-form {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.child-input {
  width: 42%;
}
.del {
  all: initial;
  cursor: pointer;
  color: #01a7fd;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>
