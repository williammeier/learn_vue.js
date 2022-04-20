<template>
    <p v-if="age > 25">{{ msg }}</p>
    <p v-else>You must be 25 years yold to view this message</p>
</template>

<script>
export default {
    name: "GreeTing",
    props: ["age"],
    data() {
        return {
            msg: "Hello World!"
        }
    }
}
</script>

<style scoped lang="scss">
    $red: red;
    $blue: blue;
    p  {
        color: $red;
        &:hover {
            color: $blue;
            cursor: pointer;
        }
    }
</style>