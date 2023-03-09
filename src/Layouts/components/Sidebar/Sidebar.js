import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItems } from './Menu';
import SuggestedAccounts from '../SuggestedAccounts';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveIcon,
    LiveIconActive,
    UserGroupICon,
    UserGroupIConActive,
} from '~/components/icons';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems
                    title="For you"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItems
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupICon />}
                    activeIcon={<UserGroupIConActive />}
                />
                <MenuItems
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveIconActive />}
                />
            </Menu>
            <SuggestedAccounts label={'Suggested Accounts'} />
            <SuggestedAccounts label={'Following Accounts'} />
        </aside>
    );
}

export default Sidebar;
