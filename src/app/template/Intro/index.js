import React from 'react';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import LoadMoreList from './EventList';
import {getStyle} from '../../utils';

export default class Intro extends React.Component {
    render() {
        let props = this.props;
        return (
            <div className="main-wrapper">
                <Banner {...props}/>
                <Page1/>
                <Page2/>
                <LoadMoreList/>

                <style dangerouslySetInnerHTML={{__html: getStyle()}}/>
            </div>
        )
    }
}
