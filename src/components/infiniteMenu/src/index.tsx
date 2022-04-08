import {MenuItem} from "@/components/menus/src/types";
import {toLine} from "@/utils";
import {PropType, StyleValue} from "vue";
import './index.scss'
import * as Icons from "@element-plus/icons-vue"
export default defineComponent({
    props: {
        data: {
            type: Array as PropType<MenuItem[]>,
            required: true
        },
        defaultActive: {
            type: String,
            default: ""
        },
        router: {
            type: Boolean,
            default: false
        }
    },
    setup(props, ctx) {
        // 封装一个渲染无限层级菜单的函数
        const attrs = useAttrs()
        const renderMenu = (data: MenuItem[]) => {
            return data.map(item => {
                item.i = item.icon ? (Icons as any)[item.icon] : (Icons as any)["Menu"]
                const slots = {
                    title: () => {
                        return <>
                            <item.i/>
                            <span style={{
                                marginLeft: "4px"
                            } as StyleValue}>{item.title}</span>
                        </>
                    }
                }
                if (item.children && item.children.length) {
                    return (
                        <el-sub-menu index={item.index} v-slots={slots}>
                            {renderMenu(item.children)}
                        </el-sub-menu>
                    )
                } else {
                    return (
                        <el-menu-item index={item.index}>
                            <item.i/>
                            <span style={{
                                marginLeft: "4px"
                            } as StyleValue}>{item.title}</span>
                        </el-menu-item>
                    )
                }
            })
        }
        return () => {
            return (
                <el-menu
                    class={'infinite-menu'}
                    default-active={props.defaultActive}
                    router={props.router}
                    {...attrs}
                >
                    {renderMenu(props.data)}
                </el-menu>
            )
        }
    }
})