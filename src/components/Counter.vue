<template>
  <div>
    <h1>Vuex Counter</h1>
    <h1 class="counter">{{ counter }}</h1>
    <button @click="subtractFromCounter(value)">-</button>
    <input type="number" v-model.number="value" />
    <button @click="addToCounter(value)">+</button>
    <div>
      <button class="btn" @click="addRandomNumber">Add by Random Number</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Counter',
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapGetters(['counter']),
  },
  methods: {
    ...mapMutations(['addToCounter', 'subtractFromCounter']),
    ...mapActions(['addRandomNumber']),
  },
};
</script>

<style scoped>
.counter {
  font-size: 5rem;
}

button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}

input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}

input:focus {
  outline: none;
}

.btn {
  border-radius: 5px;
  width: auto;
  background-color: #41b983;
  margin-top: 1rem;
  color: #fff;
  cursor: pointer;
}

.btn:focus {
  outline: none;
}
</style>
