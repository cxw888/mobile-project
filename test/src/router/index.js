import VueRouter from 'vue-router'
import AllRecord from '../pages/AllRecord.vue'
import HomeList from '../pages/HomeList.vue'
import ContentPractice from '../pages/ContentPractice.vue'
import StartPracticing from '../pages/StartPracticing.vue'



export default new VueRouter({
    routes: [
        {
            path: '/',
            component: HomeList,
        },
        {
            path: '/allrecord',
            component: AllRecord,
        },
        {
            path: '/contentpractice',
            component: ContentPractice,
            props({ query }) {
                return {
                    id: query.id,
                    theme: query.theme,
                    content: query.content,
                    names: query.names,
                    gender: query.gender,
                    personnality: query.personnality,
                    own: query.own
                }
            }
        },
        {
            path: '/startpracticing',
            component: StartPracticing,
            props({ query }) {
                return {
                    theme: query.theme,
                    names: query.names,

                }
            }
        }
    ]
})