import {App} from "vue";
import chooseArea from "@/components/chooseArea";
import chooseIcon from "@/components/chooseIcon";
import trend from "@/components/trend";
import notification from "@/components/notification";
import list from "@/components/list";
import menus from "@/components/menus";
const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menus
];

export default{
  install(app: App) {
    components.forEach(component => {
        app.use(component);
    });
  }
}