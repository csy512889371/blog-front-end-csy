import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectAsyncStore} from '../../Store';

class Bundle extends Component {

    static propTypes = {
        load: PropTypes.any,
        children: PropTypes.any,
    };

    static contextTypes = {
        store: PropTypes.object
    };

    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null,
    };

    componentWillMount() {
        this._isMounted = true;
        this.load(this.props);
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    load(props) {
        this.setState({
            mod: null,
        });
        props.load().then((mod) => {
            if (this._isMounted) {
                const {reducer, view, sagas} = mod;
                injectAsyncStore(this.context.store, reducer, sagas);
                if (this._isMounted) {
                    this.setState({
                        mod: view['default'] ? view['default'] : view,
                    });
                }
            }
        });
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : <div>组件加载中...</div>;
    }
}

export default Bundle;
