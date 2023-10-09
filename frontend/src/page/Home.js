import React, { useState,useEffect, useMemo } from "react";
import { notification } from 'antd';
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../style.css';
import axios from 'axios';
  
function Home() {
  const [text,setText]=useState("");
  const [dataList,setDataList]=useState([]);

  const openNotificationWithIcon = (type,title,text) => {
    notification[type]({
      message: title,
      description:text,
    });
  };

  let handleSubmit = e => {
    e.preventDefault();
    if(text!=""){
      axios.post('192.168.147.129:8000/api/country', {
        "countryText":text
      }).then(response => {
         openNotificationWithIcon('success','Search Tips',"Search Successfully!");
        console.log(response.data);
        setDataList(response.data.data);
      }, error => {
        openNotificationWithIcon('error','Search Tips', error.response.data.message);
        setDataList([]);
      });
    }else{
      openNotificationWithIcon('error','Search Tips','The Country Search cannot be empty');
      setDataList([]);
    }
  };

  return (
    <div>
      <Header/>

      <div className="home_body">
        <h1>Country Search Website</h1>
        <div className="country_box">
          <div className="bubbles">
            <span style={{"--num":"11"}}></span>
            <span style={{"--num":"12"}}></span>
            <span style={{"--num":"24"}}></span>
            <span style={{"--num":"10"}}></span>
            <span style={{"--num":"14"}}></span>
            <span style={{"--num":"23"}}></span>
            <span style={{"--num":"18"}}></span>
            <span style={{"--num":"16"}}></span>
            <span style={{"--num":"19"}}></span>
            <span style={{"--num":"20"}}></span>
            <span style={{"--num":"22"}}></span>
            <span style={{"--num":"25"}}></span>
            <span style={{"--num":"18"}}></span>
            <span style={{"--num":"21"}}></span>
            <span style={{"--num":"15"}}></span>
            <span style={{"--num":"13"}}></span>
            <span style={{"--num":"26"}}></span>
            <span style={{"--num":"17"}}></span>
            <span style={{"--num":"13"}}></span>
            <span style={{"--num":"28"}}></span>
            <span style={{"--num":"11"}}></span>
            <span style={{"--num":"12"}}></span>
            <span style={{"--num":"24"}}></span>
            <span style={{"--num":"10"}}></span>
            <span style={{"--num":"14"}}></span>
            <span style={{"--num":"23"}}></span>
            <span style={{"--num":"18"}}></span>
            <span style={{"--num":"16"}}></span>
            <span style={{"--num":"19"}}></span>
            <span style={{"--num":"20"}}></span>
            <span style={{"--num":"22"}}></span>
            <span style={{"--num":"25"}}></span>
            <span style={{"--num":"18"}}></span>
            <span style={{"--num":"21"}}></span>
            <span style={{"--num":"15"}}></span>
            <span style={{"--num":"13"}}></span>
            <span style={{"--num":"26"}}></span>
            <span style={{"--num":"17"}}></span>
            <span style={{"--num":"13"}}></span>
            <span style={{"--num":"28"}}></span>
            <span style={{"--num":"15"}}></span>
            <span style={{"--num":"13"}}></span>
            <span style={{"--num":"26"}}></span>
            <span style={{"--num":"17"}}></span>
            <span style={{"--num":"13"}}></span>
            <span style={{"--num":"28"}}></span>
            <span style={{"--num":"26"}}></span>
            <span style={{"--num":"17"}}></span>
            <span style={{"--num":"13"}}></span>
            <span style={{"--num":"28"}}></span>
          </div>

          <form className="form_box">
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={(e)=>handleSubmit(e)}>
              Search
            </button>
          </form>

          <div className="row">
            {dataList.map((item,index)=>{   
             return <div key={index} className="cloumn">
                <h1>{item.name.common}</h1>
                <div className="content_box">
                  <div className="messsage_box">
                    <div className="messsage_item">
                      <span className="title">AltSpellings:</span>
                      <span className="content">
                        {item.altSpellings.length>0?
                          item.altSpellings.map((altSpelling,andex)=>{
                            return item.altSpellings.length>1?
                              <span key={andex}>{altSpelling} | </span>
                            :
                            <span key={andex}>{altSpelling}</span>
                          })
                        :'Null'}
                      </span>
                    </div>

                    <div className="messsage_item">
                      <span className="title">Capital:</span>
                      <span className="content">
                        {item.capital?
                          item.capital.map((capitalItem,cndex)=>{
                            return item.capital.length>1?
                            <span key={cndex}>{capitalItem} / </span>
                            :<span key={cndex}>{capitalItem} </span>
                          })
                        :'Null'}
                      </span>
                    </div>

                    <div className="messsage_item">
                      <span className="title">Languages:</span>
                      <span className="content">
                        {item.languages?
                         Object.keys(item.languages).map((key,language_index)=>{
                          return Object.keys(item.languages).length>1? 
                           item.languages[key] +","
                          :item.languages[key] 
                         })
                        :'Null'}
                      </span>
                    </div>
                    
                    <div className="messsage_item">
                      <span className="title">Native Name:</span>
                      <span className="content">
                        {item.name.nativeName?
                         Object.keys(item.name.nativeName).map((key,nativeName_index)=>{
                          return Object.keys(item.name.nativeName).length>1? 
                           item.name.nativeName[key].official +","
                          :item.name.nativeName[key].official
                         })
                        :'Null'}
                      </span>
                    </div>

                    <div className="messsage_item">
                      <span className="title">Borders:</span>
                      <span className="content">
                        {item.borders?
                          item.borders.map((border,border_index)=>{
                            return item.borders.length>1?
                              <span key={border_index}>{border} | </span>
                            :
                            <span key={border_index}>{border}</span>
                          })
                        :'Null'}
                      </span>
                    </div>


                    <div className="messsage_item">
                      <span className="title">Currencies:</span>
                      <span className="content">
                        {item.currencies?
                         Object.keys(item.currencies).map((key,currencie_index)=>{
                          return Object.keys(item.currencies).length>1? 
                          item.currencies[key].name+`( ${item.currencies[key].symbol} )` +","
                          :item.currencies[key].name+`( ${item.currencies[key].symbol} )`
                         })
                        :'Null'}
                      </span>
                    </div>
                    
                    <div className="messsage_item">
                        <span className="title">Timezones:</span>
                        <span className="content">
                          {item.timezones?
                            item.timezones.map((timezone,timezone_index)=>{
                              return item.timezones.length>1?
                                <span key={timezone_index}>{timezone} | </span>
                              :
                              <span key={timezone_index}>{timezone}</span>
                            })
                          :'Null'}
                        </span>
                    </div>

                    <div className="messsage_item">
                        <span className="title">Tld:</span>
                        <span className="content">
                          {item.tld?
                            item.tld.map((tld_item,tld_index)=>{
                              return item.tld.length>1?
                                <span key={tld_index}>{tld_item} | </span>
                              :
                              <span key={tld_index}>{tld_item}</span>
                            })
                          :'Null'}
                        </span>
                    </div>
                    
                    
                  </div>

                  <div className="img_box">
                    {item.flags?
                      item.flags.png?
                        <img src={item.flags.png}/>
                      :''
                    :''}
                  </div>
                </div>
                
              </div>
            })}
          


          </div>

        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;