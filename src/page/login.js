import React, {useState} from "react";
import {Menu, Dropdown, Button, Modal, message, Icon, Row, Col} from 'antd'
import classNameUtils from '@/utils/classNameUtils'
import {login, logOut, getInfo} from '@/newstore/action'
import {
    SketchOutlined
} from '@ant-design/icons';
import '@/style/login.less'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const [switchLeft, setSwitchLeft] = useState(false);

    const [notforget, setNotforget] = useState(true);

    let translateLeft = {'translate-left': true, 'login-col': true, 'switch-left': switchLeft}
    let translateRight = {'translate-right': true, 'login-col': true, 'switch-right': switchLeft}
    const loginCardJsx = () => {
        if (notforget) {
            return (
                <div className={"login-card"}>
                    <SketchOutlined style={{"fontSize": "4rem"}}/>
                    denglu
                    <button onClick={() => {
                        setSwitchLeft(true);
                        setTimeout(() => {
                            setNotforget(false);
                        }, 300)
                    }}>forget</button>
                    <button onClick={() => {
                        props.dispatch(login({username: "admin", password: "qwe123"}))
                    }}>登陆
                    </button>
                    <button onClick={() => {
                        console.log(props)
                    }}>查看redux信息
                    </button>
                    <button onClick={() => {
                        props.dispatch(getInfo())
                    }}>查看用户信息
                    </button>
                    <button onClick={() => {
                        props.dispatch(logOut())
                    }}>退出
                    </button>
                </div>
            );
        }
    }

    const loginCardRightJsx = () => {
        if (!notforget) {
            return (
                <div className={"login-card-right"}>wangji
                    <button onClick={() => {
                        setSwitchLeft(false);
                        setTimeout(() => {
                            setNotforget(true);
                        }, 300)
                    }}>back</button>
                </div>
            );
        }
    }
    const divAll = () => {
        if (localStorage.getItem("JSESSIONID")) {
            return (<Redirect to="/"/>)
        } else {
            return (<div className="login-page">
                <div className="login-wrap">
                    <Col span={10} className={classNameUtils(translateLeft)}>
                        {loginCardJsx()}
                        {loginCardRightJsx()}
                    </Col>
                    <Col span={14} className={classNameUtils(translateRight)}>
                        <div className="wallpaper"/>
                    </Col>
                </div>
            </div>)
        }
    }
    return (
        divAll()
    )
}
export default connect((state, props) => ({
    data: state.login,
    userInfo: state.user
}))(Login);
