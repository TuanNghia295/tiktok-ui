import routeConfig from '~/config/routes';

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
        path: routeConfig.home,
        component: Home,
    },
    {
        path: routeConfig.following,
        component: Following,
    },
    {
        path: routeConfig.profile,
        component: Profile,
    },
    {
        path: routeConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routeConfig.search,
        component: Search,
        layout: null,
    },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
