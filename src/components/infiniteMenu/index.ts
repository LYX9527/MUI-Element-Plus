import infiniteMenu from './src/index';
import {App} from "vue";

export default {
    install(app:App){
        app.component("InfiniteMenu",infiniteMenu);
    }
}