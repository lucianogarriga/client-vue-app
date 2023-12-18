<template>
  <section>
    <header>
      <h3>{{ name }}</h3>
    </header>
    <div>...</div>
  </section>
</template>

<script>
export default {
  name: "Column",
  data() {
    return {};
  },
  props: {
    name: String,
    listId: String,
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #579aaaa6;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03),
  0 2px 5px 0,
  0 1px 2px 0;
  box-sizing: border-box;
  border-radius: 3px;
  color: white;
  margin: 1rem;
  padding: 1rem; 
  width: 100%;  
  @media screen and (min-width: 600px) {
    width: calc(50% - 2rem - 2px);
  }
  @media screen and (min-width: 1024) {
    width: calc(33% - 2rem - 2px);
  }
}
</style>