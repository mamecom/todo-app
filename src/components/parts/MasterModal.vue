<template>
    <div id="modal">
        <div id="modal-content" class="modal">
            <p class="modal-message">今日のタスク？今後のタスク？</p>
            <MasterButton class="today" @click="returnToday">今日</MasterButton>
            <MasterButton class="otherdays" @click="returnOther">今日以外</MasterButton>
        </div>
        <div id="modal-overlay"></div>
    </div>
</template>

<script>
  import MasterButton from './MasterButton.vue';

    export default {
      data() {
        return {
        }
      },
      components: {
        MasterButton,
      },

      methods: {
          returnToday() {
              this.$emit('close-modal', true);     // HACK: 引数の命名を今日、それ以外でわかるようにしたい
          },
          returnOther() {
              this.$emit("close-modal", false);     // HACK: 引数の命名を今日、それ以外でわかるようにしたい
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
  border-radius: 5px;
  background-color: #D7E9B9;
  float: left;
}

.otherdays {
  font-size: 17px;
  padding: 7px;
  margin: 50px 130px 50px 0;
  width: 70px;
  border-radius: 5px;
  background-color: #FAAB78;
  float: right;
}

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