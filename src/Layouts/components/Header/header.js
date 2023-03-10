import classNames from 'classnames/bind';
import styles from './header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
//Import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faStream,
    faGear,
    faSignOut,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';

//Import Tippy library
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessagesIcon, UploadIcon } from '~/components/icons';
import Image from '~/components/image';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;
    const handleMenuChange = (data) => {
        console.log(data);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View profile',
            to: '/@nghia',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faStream}></FontAwesomeIcon>,
            title: 'LIVE studio',
            to: '/LIVE',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Settings',
            to: '/Settings',
        },
        {
            icon: <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>,
            title: 'Dark mode',
            Darkmode: true,
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-name')}>
                    <img src={images.logo} alt="tiktok"></img>
                </Link>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <UploadIcon className={cx('uploadIcons')} />
                            <>
                                <div>
                                    <Tippy
                                        appendTo={document.body}
                                        delay={[0, 100]}
                                        content="Messages"
                                        placement="bottom"
                                    >
                                        <button className={cx('action-btns')}>
                                            <MessagesIcon />
                                        </button>
                                    </Tippy>
                                </div>
                            </>

                            <>
                                <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                    <button className={cx('action-btns')}>
                                        <InboxIcon className={cx('inboxIcons')} />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>
                            </>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary to="/">
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src=""
                                className={cx('user-avatar')}
                                alt=""
                                fallback="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1661351444560902~c5_100x100.jpeg?x-expires=1678269600&x-signature=rH0%2Fe8Y4OhCTSw4EoNfiVh7ohv0%3D"
                            ></Image>
                        ) : (
                            <button className={cx('moreBtn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
