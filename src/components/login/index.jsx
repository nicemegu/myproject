
//login组件

import React,{Component} from 'react';
import {Form,Input,Icon,Button} from 'antd'

import logoimg from './logo.png'
import './index.less'
export default class Login extends Component{
  render(){
    return <div className="login">
      <header className="login-header">
        <img src={logoimg} alt="logo"/>
        <h1>React:后台管理系统</h1>
      </header>
      <div className="section-input">
        <h3>用户登入</h3>
        <Form className='login-form'>
          <Form.Item>
            <Input 
            prefix={<Icon type='user' style={{color:'rgba(0,0,0,.25)'}}/>}
            placeholder='请输入账号'/>
          </Form.Item>
          <Form.Item>
            <Input 
            prefix={<Icon type = 'lock' style={{color:'rgba(0,0,0,.25)'}}/>}
            placeholder='请输入密码'/>
          </Form.Item>
          <Form.Item >
            <Button className='login-btn' type='primary'>登入</Button>
          </Form.Item>
          
        </Form>
      </div>
    </div>
  }
}