import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/componens/Popper';
import AccountItem from '~/componens/AccountItem';
import Button from '~/componens/Button';

//Import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSign, faSignIn } from '@fortawesome/free-solid-svg-icons';

//Import Tippy library
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok"></img>

                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false}></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
