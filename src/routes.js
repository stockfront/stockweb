// import {StockInfo} from "./views/StockInfo/StockInfo"
import {WebMain} from "./views/Home/WebMain"
import {StockInfo} from "./views/StockInfo/StockInfo"
import {CommunityWrapper} from "./views/community/CommunityWrapper"
import {Stats1} from "./views/Stats/Stats1/Stats1"
import {News} from "./views/News/News"
import {Manage} from "./views/Manage/Manage"
import {Reference} from "./views/Reference/Reference"



const routes = [
    {
        path: "",
        name: "홈",
        component: WebMain,
        layout: "/main"
    },

    {
        path: "/stockinfo",
        name: "종목정보",
        component: StockInfo,
        layout: "/stockinfo"
    },
    {
        path: "/community",
        name: "커뮤니티",
        component: CommunityWrapper,
        layout: "/community"
    },
    {
        path: "/state",
        name: "뇌피셜 지표",
        component: Stats1,
        layout: "/state"
    },
    {
        path:"/news",
        name:"뉴스",
        component:News,
        layout:"/news"
    },
    {
        path:"/manage",
        name:"관리자",
        component: Manage,
        layout:"/manage"
    },
    {
        path: "/ref",
        name: "Ref",
        component: Reference,
        layout: "/ref"
    }
]


export default routes;