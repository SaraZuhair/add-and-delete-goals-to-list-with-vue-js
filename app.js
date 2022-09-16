const app = Vue.createApp({
  data() {
    
    return { 
      enteredvalue: '',
      goals: [] 
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredvalue);
      this.enteredvalue='';
    },

    removegoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
