const app = Vue.createApp({
    data() {
        return {
            firstname: "kaka",
            lastname: "JR",
            email: "kaka@gmail.com",
            gender: "male",
            picture: "https://randomuser.me/api/portraits/men/10.jpg",
        };
    },
    methods: {
        getUser() {
            (this.firstname = "Delice"),
            (this.lastname = "Muhoza"),
            (this.email = "demuhoza@gmail.com");
            this.gender = "female";
            this.picture = "https://randomuser.me/api/portraits/women/10.jpg";
        },
    },
});
app.mount("#app");