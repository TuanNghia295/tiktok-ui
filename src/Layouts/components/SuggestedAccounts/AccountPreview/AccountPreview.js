import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1678525200&x-signature=4WhwG1%2BdMnYO0nq6w%2Bx8UNnTYYw%3D"
                    alt=""
                    className={cx('avatar')}
                ></img>
                <Button primary>Follow</Button>
            </header>

            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>Tuannghia29</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Nguyen Tuan Nghia</p>
                    <p className={cx('analystic')}>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Followers </span>
                        <strong className={cx('value')}>6.2M </strong>
                        <span className={cx('label')}>Likes</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
