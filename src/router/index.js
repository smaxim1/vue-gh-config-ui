import Vue from 'vue';
import Router from 'vue-router';
import SysParamList from '@/components/SysParamList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SysParamList',
      component: SysParamList,
    },
  ],
});
