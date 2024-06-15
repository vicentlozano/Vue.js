<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <!-- El v-bind es la forma corta de sacar todasb las properties. -->
      <!-- :its-mine="message.itsMine"
      :message="message.message"
      :image="message.image" -->
    </div>
  </div>
</template>
<script setup lang="ts">
import ChatBubble from '@/components/chat/CHatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import { ref, watch } from 'vue';
interface Props {
  messages: ChatMessage[];
}
const {messages} = defineProps<Props>();
const chatRef = ref<HTMLDivElement|null>(null);
// El watch nos permite ver el estado de un componente o alguna propiedad reactiva, permitiendo que cuando se actualice su estado (cambie) realizar alguna accion)
watch(messages, () => {
  setTimeout(()=>{
    chatRef.value?.scrollTo({
    top: chatRef.value.scrollHeight,
    behavior: "smooth",
  })
  },100)
  
})
</script>
