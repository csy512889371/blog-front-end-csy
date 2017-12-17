import React from 'react';
import Banner from './Banner';
import Products from './Products'
import {getStyle} from '../../utils';

 class Header extends React.Component {
    render() {
        let props = this.props;
        return (
            <div className="main-wrapper">
                <Banner {...props}/>
                <Products/>
                <style dangerouslySetInnerHTML={{__html: getStyle()}}/>
            </div>
        )
    }
}

export default Header
