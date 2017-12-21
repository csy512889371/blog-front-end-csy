import React, {Component} from 'react';
import Banner from './Banner';
import {view as Topics} from '../Topics/TopicListForHome'
import {getStyle} from '../../utils';

class Header extends Component {
    render() {
        let props = this.props;
        return (
            <div className="main-wrapper">
                <Banner {...props}/>
                <Topics {...props}/>
                <style dangerouslySetInnerHTML={{__html: getStyle()}}/>
            </div>
        )
    }
}

export default Header
