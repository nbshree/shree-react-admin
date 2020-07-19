import React, {useState} from "react";
import {Menu, Dropdown, Button, Modal, message, Icon, Row, Col} from 'antd'
import classNameUtils from '@/utils/classNameUtils'
import '@/style/login.less'

const Login = () => {
    const [switchLeft, setSwitchLeft] = useState(false);

    const [notforget, setNotforget] = useState(true);

    let translateLeft = {'translate-left': true, 'login-col': true, 'switch-left': switchLeft}
    let translateRight = {'translate-right': true, 'login-col': true, 'switch-right': switchLeft}
    const loginCardJsx = () => {
        if (notforget) {
            return (
                <div className={"login-card"}>
                    denglu
                    <button onClick={() => {
                        setSwitchLeft(true);
                        setTimeout(() => {
                            setNotforget(false);
                        }, 300)
                    }}>forget</button>
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
    return (
        <div className="login-page">
            <div className="login-wrap">
                <Col span={10} className={classNameUtils(translateLeft)}>
                    {loginCardJsx()}
                    {loginCardRightJsx()}
                </Col>
                <Col span={14} className={classNameUtils(translateRight)}>
                    <div className="wallpaper"/>
                </Col>
            </div>
        </div>

    )
}
export default Login;
