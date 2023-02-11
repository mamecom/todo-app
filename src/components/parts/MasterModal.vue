<template>
    <div id="modal">
        <div id="modal-content" class="modal">
            <p class="modal-message">今日のタスク？今後のタスク？</p>
              <MasterButton class="today" @click="returnfalse()">今日</MasterButton>
              <MasterButton class="otherdays" @click="returnTrue()">今日以外</MasterButton>
        </div>
        <div id="modal-overlay"></div>
    </div>
</template>

<script>
import MasterButton from './MasterButton.vue';

  export default {
    components: {
      MasterButton,
},

        name: "MasterModal",
        props: ["message"],

        methods: {
            returnfalse() {
                this.$emit("execute-method", false);
            },
            returnTrue() {
                this.$emit("execute-method", true);
            },
        },
    }
</script>

<style scoped>
.modal {
  width: 500px;
  height: 30%;
  padding: 10px 20px;
  background: #ffffff;
  z-index: 2;
  display: table;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-message {
  margin-top: 30px;
}

.today {
  font-size: 17px;
  padding: 7px;
  margin: 50px 0 50px 130px;
  width: 70px;
  border-radius: 7%;
  background-color: #D7E9B9;
  float: left;
}

.otherdays {
  font-size: 17px;
  padding: 7px;
  margin: 50px 130px 50px 0;
  width: 70px;
  border-radius: 7%;
  background-color: #FAAB78;
  float: right;
}

/* .otherdays:hover {
  cursor: pointer;
  color: rgb(14, 48, 240);
  font-weight: bold;
} */

/* .today:hover {
  background: #a5272a;
  color: white;
  cursor: pointer;
} */

#modal-overlay {
  z-index: 1;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.50);
}
</style>