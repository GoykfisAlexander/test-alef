<template>
  <div>
    <p>Персональные данные</p>
    <div class="input-container">
      <label class="placeholder">Имя</label>
      <input type="text" v-model="formData.fullName" class="user-input" />
    </div>
    <div class="input-container">
      <label class="placeholder">Возраст</label>
      <input v-model="formData.age" type="number" class="user-input" />
    </div>
    <div class="children-title">
      <p>Дети (макс. 5)</p>
      <button v-if="canAddChild" @click="addChild" class="add">
        <span class="plus">+</span> Добавить ребенка
      </button>
    </div>
    <div v-if="children" class="children-form-wrapper">
      <div
        v-for="(child, index) in unsavedChildren"
        :key="index"
        class="child-form"
      >
        <ChildrenForm
          :index="index"
          :child="child"
          :removeUnsavedChildren="removeUnsavedChildren"
          @input="updateChildData(index, $event)"
        />
      </div>
    </div>
    <button @click="saveUser" class="save">Сохранить</button>
  </div>
</template>

<script>
import ChildrenForm from "@/components/ChildrenForm.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ChildrenForm,
  },

  computed: {
    ...mapState(["children"]),
    canAddChild() {
      return this.children.length < 5;
    },
  },
  data() {
    return {
      formData: {
        fullName: this.$store.state.user.fullName,
        age: this.$store.state.user.age,
      },
      unsavedChildren: [],
    };
  },
  methods: {
    ...mapActions(["save", "deleteChild"]),
    addChild() {
      this.unsavedChildren.push({ name: "", age: null });
    },
    saveUser() {
      this.save({
        user: {
          fullName: this.formData.fullName,
          age: this.formData.age,
        },
        children: this.unsavedChildren,
      });
    },
    updateChildData(index, data) {
      if (data.target.type === "text") {
        this.unsavedChildren[index]["name"] = data.target.value;
      } else {
        this.unsavedChildren[index]["age"] = data.target.value;
      }
    },
    removeUnsavedChildren(index) {
      this.unsavedChildren.splice(index, 1);
    },
  },
  created() {
    this.unsavedChildren = this.children.map((child) => ({ ...child }));
  },
};
</script>

<style>
.input-container {
  position: relative;
  height: max-content;
}

.placeholder {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 13px;
  color: #999;
  pointer-events: none;
  cursor: text;
}
.user-input {
  width: 100%;
  height: 56px;
}
input {
  color: var(--colors-black, #111);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  box-sizing: border-box;
  padding: 26px 10px 10px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
  background: #fff;
}
.children-title {
  margin-top: 23px;
  display: flex;
  justify-content: space-between;
}
.add {
  color: #01a7fd;
  cursor: pointer;
  width: 204px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: none;
  border-radius: 100px;
  border: 2px solid #01a7fd;
}
.plus {
  font-size: 24px;
}
.save {
  cursor: pointer;
  margin-top: 20px;
  width: 108px;
  height: 44;
  border: none;
  display: inline-flex;
  padding: 10px 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 100px;
  background: var(--colors-primary, #01a7fd);
  color: #fff;
}
</style>
