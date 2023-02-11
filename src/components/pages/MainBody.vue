<template>
    <main id="main-display">
        <!-- <form @submit.prevent="addTodo"> -->
        <div id="addTodo">
            <MasterText class="task" placeholder="タスクを記入"></MasterText>
            <MasterButton class="add-Button" @click="showModal()">タスクを追加</MasterButton>
            <MasterModal
                :message="message"
                v-if=modal
                @execute-method="executeMethod"
                >
            </MasterModal>
        </div>
        <!-- </form> -->
    </main>
</template>
  
<script>
  import MasterButton from '../parts/MasterButton.vue';
  import MasterText from '../parts/MasterText.vue';
  import MasterModal from '../parts/MasterModal.vue';
  
  export default {
    data() {
        return {
            modal: false,
        }
    },
    components: {
        MasterButton,
        MasterText,
        MasterModal,
    },
    methods: {
        click(message) {
            alert(message);
            // ここからモーダル
        },
        showModal() {
            // モーダル表示する際の処理が必要ならここに書く
            this.modal = true;
        },
    }
  }
  </script>
  
  <style>
    #main-display {
      text-align: center;
    }

    #addTodo {
        display: block;
        padding-top: 100px;
    }
  
    .task {
      font-size: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      margin-right: 37px;
      border: 1px solid #000000;
      width: 349px;
      height: 55px;
    }
    .add-Button {
      display: inline-block;
      font-size: 19px;
      padding: 12px 28px;
      background-color: #D7E9B9;
  
      border: none;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  
  </style>