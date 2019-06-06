import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { checkAuth } from '../redux/modules/auth/action';
import PropTypes from 'prop-types'


export class PrivateRoute extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.checkAuth();
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.path !== this.props) this.props.checkAuth();
    }

    render() {
        const { component : Component , ...rest} = this.props;

        const { isLoading, isLogin } = this.props;

        console.log(this.props)

        return (
           isLoading === true ? <div>loading ...</div> : <Route {...rest} render={
               props => (
                   isLogin ? <Component {...props}/> 
                : <Redirect to={{pathname:'/sign-in',state: {from: props.location}}}/>
               )
           }/>
        )

    }


    static propTypes = {
        component: PropTypes.any.isRequired,
        funcCode: PropTypes.string.isRequired
    }
}

const mapStateToProps = state => {
    
    console.log(state)

    return {
    isLogin: get(state, 'authReducer.isLogin'),
    isLoading: get(state, 'loadingReducer.isLoading')
}}

const mapDispatchToProps = dispatch => ({
    checkAuth: () => dispatch(checkAuth())
});

export default connect(mapStateToProps,mapDispatchToProps)(PrivateRoute);

