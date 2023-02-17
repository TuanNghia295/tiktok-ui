import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
const Image = forwardRef(
    ({ src, alt, className, fallback: customFallback = images.noimg, ...props }, ref) => {
        //fallback: customFallback: đổi tên fallback thành customFallback để không bị trùng bằng ES6 
        const [fallback, setFallback] = useState('');
        const handleError = () => {
            setFallback(customFallback);
        };
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            ></img>
        );
    },
);

export default Image;