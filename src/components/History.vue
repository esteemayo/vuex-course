<template>
  <div class="container">
    <h4>History</h4>
    <div class="flex">
      <p
        v-for="(item, index) in history"
        :key="index"
        :class="activeIndexes(parseInt(value)).includes(index) && 'bold'"
      >
        {{ item }}
      </p>
    </div>
    <input type="number" placeholder="Search by Index" v-model.number="value" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'History',
  data() {
    return {
      value: 0,
    };
  },
  computed: mapGetters(['history', 'activeIndexes']),
};
</script>

<style scoped>
.container {
  margin-top: 7rem;
}

.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
}

.flex p {
  margin: 1rem;
}

.bold {
  font-weight: 900;
}
</style>
