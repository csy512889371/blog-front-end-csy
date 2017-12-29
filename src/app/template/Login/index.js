/**
 * Created by feichongzheng on 17/9/27.
 */
import React from 'react';
import Bundle from '../../bundle/views/bundle';

const view = (props) => {
    return (
        <Bundle load={() => import('./lazy')}>
            {(View) => {
                return <View {...props}/>
            }}
        </Bundle>
    );
};

export {view};
