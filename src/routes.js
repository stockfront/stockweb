import {StockInfo} from "./views/StockInfo/StockInfo"
import {News} from "./views/News/News"
import {Stats1} from "./views/Stats/Stats1/Stats1"
import {Stats2} from "./views/Stats/Stats2"
import {Reference} from "./views/Reference/Reference"
import {Manage} from "./views/Manage/Manage"

const routes = [
    {
        path: "/stockinfo",
        name: "StockInfo",
        component: StockInfo,
        layout: "/main"
    },

    {
        path: "/news",
        name: "News",
        component: News,
        layout: "/main"
    },
    {
        path: "/stats1",
        name: "Stats1",
        component: Stats1,
        layout: "/main"
    },
    {
        path: "/state2",
        name: "Stats2",
        component: Stats2,
        layout: "/main"
    },
    {
        path:"/reference",
        name:"Reference",
        component: Reference,
        layout:"/reference"
    },
    {
        path: "/manage",
        name: "Manage",
        component: Manage,
        layout: "/main"
    }
]


export default routes;