import config from '~/config';

// Layouts
import { HeaderOnly } from '~/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/upload';
import Search from '~/pages/Search';
import Profile from '~/pages/profile';
import Live from '~/pages/Live';
// public Routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.live,
        component: Live,
        layout: null,
    },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
