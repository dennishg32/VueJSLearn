const app = Vue.createApp({
    data() {
        return {
            firstname: "Dennis",
            lastname: "HG",
            email: "dennihg32@gmail.com",
            gender: "male",
            picture: "https://media.wired.com/photos/5cc244c9af643e2f373ebb28/1:1/w_1800,h_1800,c_limit/Coding-Becomes-Criminal.jpg",
        };
    },
});
app.mount("#app");