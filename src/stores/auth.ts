import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { userInfoApi } from '@/api/auth';

export const useCounterStore = defineStore('login', () => {

    const token = ref<string>('');
    const info = ref<Object>();
    const isCollapse = ref(false);
    const tags=ref([])

    const getInfo = async () => {
        try {
            const res = await userInfoApi();
            info.value = res.data.data;
        } catch (error) {
            console.log(error);
        }
    }


    return {
        token,
        getInfo,
        info,
        isCollapse
    }
}, {
    persist: true,
},
)
