<script>
import { defineComponent, reactive } from 'vue'
import View from '../chat/View.vue'
import Send from '../chat/Send.vue'
import DisplayName from '../chat/DisplayName.vue'
import Header from '../header/Header.vue'
import CommonHeader from '../header/CommonHeader.vue'
import CommonFooter from '../header/CommonFooter.vue'
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getDatabase, ref, push, onValue } from "firebase/database";

export default defineComponent({
  components: {
    View,
    Send,
    DisplayName,
    Header,
    CommonHeader,
    CommonFooter,
  },
  setup() {
    const data = reactive({
      user: {},
      chat: [],
      input: '',
      displayName: ''
    })

    data.user = getAuth().currentUser;
    data.displayName = data.user.displayName ?? '自分さん';

    const refMessage = ref(getDatabase(), 'chat');

    const updateChat = (snap) => {
      data.chat = [];
      for (const key in snap) {
        data.chat.push({
          message: snap[key].message,
          uid: snap[key].uid,
          displayName: snap[key].displayName
        })
      }
    }

    onValue(refMessage, (snapshot) => {
      const data = snapshot.val();
      updateChat(data);
    });

    const updateDisplayName = (name) => {
      updateProfile(data.user, {
        displayName: name
      });
      data.displayName = name
    }

    const pushMessage = (chatData) => {
      chatData.uid = data.user.uid
      chatData.displayName = data.displayName
      const db = getDatabase();
      push(ref(db, 'chat'), chatData);
    };

    return {
      data,
      pushMessage,
      updateDisplayName
    }

  },
  mounted() {
  },
  beforeRouteEnter: (to, from, next) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        next('/login');
      }
    });
  }
})
</script>

<template>
  <CommonHeader />
  <Header />
  <div class="container">
    <DisplayName v-model="data.displayName" @update="updateDisplayName" />
    <View :data="data" />
    <Send @sendMessage="pushMessage" />
  </div>
  <CommonFooter />
</template>

<style scoped>
</style>