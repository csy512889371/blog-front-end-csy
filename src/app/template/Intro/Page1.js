import React from 'react';
import TweenOne from 'rc-tween-one';
import {Link} from 'react-router-dom';

export default function Page1() {
    return (
        <TweenOne
            key="image"
            className="image1 image-wrapper"
            animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
        />
    );
}
