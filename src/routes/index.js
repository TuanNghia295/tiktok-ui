// Layouts
import { HeaderOnly } from '~/componens/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/profile';
import Upload from '~/pages/upload';
import Search from '~/pages/Search';
// public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null
    }
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
