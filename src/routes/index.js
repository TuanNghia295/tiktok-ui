// Layouts
import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/upload';
import Search from '~/pages/Search';
import Profile from '~/pages/profile';
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
        path: `/@/:nickname`,
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
        layout: null,
    },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
