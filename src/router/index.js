// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import LoginPage from '../components/Login'
import RegisterPage from '../components/Register'
import HomePage from '../components/Home/Home'

// #region  首页组件
import IndexPage from '../components/Home/pages/Index'
// 轮播图详情组件
import LiuXiang from '../components/Home/pages/Index/RotationPicture/LiuXiang'
import BreathingField from '../components/Home/pages/Index/RotationPicture/BreathingField'
import OldAntique from '../components/Home/pages/Index/RotationPicture/OldAntique'
import RuyueErzhi from '../components/Home/pages/Index/RotationPicture/RuyueErzhi'
//#endregion


// #region  广场组件
import SquarePage from '../components/Home/pages/Square'
import SquarePosts from '../components/Home/pages/Square/SquarePosts'
import AboutV from '../components/Home/pages/Square/AboutV'
import WantToKnow from '../components/Home/pages/Square/WantToKnow'
import Original from '../components/Home/pages/Square/Original'
import ShowFace from '../components/Home/pages/Square/ShowFace'
import Life from '../components/Home/pages/Square/Life'
import BlackFans from '../components/Home/pages/Square/BlackFans'

//#endregion

// #region  商城组件
import MallPage from '../components/Home/pages/Mall'
import FisrtContent from '../components/Home/pages/Mall/albums/albumcontents/FisrtContent'
import SecondContent from '../components/Home/pages/Mall/albums/albumcontents/SecondContent'
import ThirdContent from '../components/Home/pages/Mall/albums/albumcontents/ThirdContent'
import FourthContent from '../components/Home/pages/Mall/albums/albumcontents/FourthContent'
import FifthContent from '../components/Home/pages/Mall/albums/albumcontents/FifthContent'
import SixthContent from '../components/Home/pages/Mall/albums/albumcontents/SixthContent'
import SeventhContent from '../components/Home/pages/Mall/albums/albumcontents/SeventhContent'
import EighthContent from '../components/Home/pages/Mall/albums/albumcontents/EighthContent'

//#endregion

// #region  个人主页组件
import PersonalPage from '../components/Home/pages/Personal'
import Info from '../components/Home/pages/Personal/Personalinfo/Info'
import PersonalPosts from '../components/Home/pages/Personal/Personalinfo/PersonalPosts'
import Message from '../components/Home/pages/Personal/Personalinfo/Message'

//#endregion

// 解决路由重复问题
const originalReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalReplace.call(this, location).catch(err => err);
};

export default new VueRouter({
    routes: [
        // 登录
        { name: 'login', path: '/login', component: LoginPage },
        { path: "/", redirect: "login" },
        // 注册
        { name: 'register', path: '/register', component: RegisterPage },
        // 主页
        {
            name: 'home', path: '/home', component: HomePage,
            children: [
                // 首页
                { name: 'index', path: 'index', component: IndexPage, },

                // 轮播图
                { name: 'liuxiang', path: 'liuxiang', component: LiuXiang },
                { name: 'breathingfield', path: 'breathingfield', component: BreathingField },
                { name: 'oldantique', path: 'oldantique', component: OldAntique },
                { name: 'ruyueerzhi', path: 'ruyueerzhi', component: RuyueErzhi },

                // 广场
                {
                    name: 'square', path: 'square', component: SquarePage,
                    children: [
                        { name: 'squareposts', path: 'squareposts', component: SquarePosts },
                        { name: 'aboutV', path: 'aboutV', component: AboutV },
                        { name: 'wanttoknow', path: 'wanttoknow', component: WantToKnow },
                        { name: 'original', path: 'original', component: Original },
                        { name: 'showface', path: 'showface', component: ShowFace },
                        { name: 'life', path: 'life', component: Life },
                        { name: 'blackfans', path: 'blackfans', component: BlackFans },

                    ]
                },


                // 商城
                { name: 'mall', path: 'mall', component: MallPage, },
                { name: 'fisrtcontent', path: 'fisrtcontent', component: FisrtContent, },
                { name: 'secondcontent', path: 'secondcontent', component: SecondContent, },
                { name: 'thirdcontent', path: 'thirdcontent', component: ThirdContent, },
                { name: 'fourthcontent', path: 'fourthcontent', component: FourthContent, },
                { name: 'fifthcontent', path: 'fifthcontent', component: FifthContent, },
                { name: 'sixthcontent', path: 'sixthcontent', component: SixthContent, },
                { name: 'seventhcontent', path: 'seventhcontent', component: SeventhContent, },
                { name: 'eighthcontent', path: 'eighthcontent', component: EighthContent, },

                // 专辑



                // 个人主页
                {
                    name: 'personal', path: 'personal', component: PersonalPage,
                    children: [
                        { name: 'info', path: 'info', component: Info, },
                        { name: 'personalposts', path: 'personalposts', component: PersonalPosts, },
                        { name: 'message', path: 'message', component: Message, },

                    ]
                },
            ]
        }
    ]
})