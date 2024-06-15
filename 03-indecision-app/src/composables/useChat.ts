import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);
  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;
    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) return;
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });
    // Evaluar si termina con simbolo de interrogacion.
    if (!text.endsWith('?')) return;
    await sleep(1.5);
    const { answer, image } = await getHerResponse();
    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };
  // Las composables simpre necesitan retornar algo
  return {
    // Properties
    messages,
    // MetHods
    onMessage,
  };
};
