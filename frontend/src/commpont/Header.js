import React, { useState,useEffect, useMemo } from "react";
import { Form, Input, Button,Checkbox,Alert,Menu,notification,List, Avatar } from 'antd';
import { Link, useNavigate, useLocation } from "react-router-dom";
import '../style.css';

function Header() {
    const { SubMenu } = Menu;
    const location = useLocation();
    const navigate=useNavigate();

    const openNotificationWithIcon = (type,title,text) => {
      notification[type]({
        message: title,
        description:text,
      });
    };
  

    useEffect(()=>{
      
    },[]);
  

    let menuClick = e => {
        if(e.key==1){
          navigate("/")
        }
    };

    return(
        <Menu  mode="horizontal" onClick={menuClick} className="head_box">
            <span className="icon_title"> 
              Country Search Website
            </span>
            <div>
              <Menu.Item key="1" >Home</Menu.Item>
            </div>

      </Menu>
    )
}

export default Header;