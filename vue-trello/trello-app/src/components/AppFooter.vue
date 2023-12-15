<template>
    <footer>
        <span>Developed by <a href="https://github.com/lucianogarriga">Luciano Garriga</a> with <a href="//vuejs.org">Vue.js</a> in Córdoba, Argentina.</span>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
footer{
    box-sizing: border-box;
    background-color: #cfd8dc;
    bottom: 0;
    left: 0;
    padding: 1rem;
    position: absolute;
    width: 100%;

    a{
        font-weight: bold;
        text-decoration: none;
        color: #219065;
    }
}
</style>