import router from '@/router/index'
import {useCounterStore} from '@/stores/auth'
const data=['/login']


// router.beforeEach((to,form,next)=>{

//     const store=useCounterStore();

//     const token=store.token;
    
//     if(token){
//         if(to.path=='/login'){
//             next({path:form.path});
//         }else{
//             next();
//         }
//     }else{
//         next('/login')
//     }


// })