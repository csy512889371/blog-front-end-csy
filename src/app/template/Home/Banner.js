import React from 'react';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import QueueAnim from 'rc-queue-anim';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';

function typeFunc(a) {
    if (a.key === 'line') {
        return 'right';
    } else if (a.key === 'button') {
        return 'bottom';
    }
    return 'left';
}

export default function Banner() {

    return (
        <section className="page banner-wrapper">
            <ScrollElement
                className="page"
                id="banner"
                playScale={0.9}
            >
                <QueueAnim className="banner-text-wrapper" type={typeFunc} delay={300} key="banner">
                    <h2 key="h2">Java <p>架构</p></h2>
                    <p key="content">程序员的充电站</p>
                    <span className="line" key="line"/>
                    <div key="button1" className="start-button clearfix">
                        <Link to="\">
                            注册
                        </Link>
                    </div>
                </QueueAnim>
                <Icon type="down" className="down"/>
            </ScrollElement>
        </section>
    )
}
