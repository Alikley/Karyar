import React from 'react'
import './Home.scss'
import {Button } from 'react-bootstrap/';
import ST from '../../assest/illustration.png'
import ImageStudent1 from '../../assest/Ellipse 2.png'
import ImageStudent2 from '../../assest/Ellipse 3.png'
import ImageStudent3 from '../../assest/Ellipse 4.png'
import ImageStudent4 from '../../assest/Ellipse 2.png'
import icon1 from '../../assest/آیکون 1.png'
import icon2 from '../../assest/icon 3 1.png'
import icon3 from '../../assest/Icon.png'
import icon4 from '../../assest/icon1 1.png'
import logo from '../../assest/کاریار.png'


import Section from '../section/Section';

function Home() {


  return (
    <div className='home'>
        <div className='banner'>
          <img className='st' src={ST} alt="" />
          <img className='logo' src={logo} />
          <p className='title'>مدرسه انلاین برنامه نویسی<br />متصل به بازار کار</p>
          <p className='content'>
           کاریار مرجع متفاوتی برای معرفی کدنویسان تازه‌نفس به استارت‌آپ‌های کوچک <br />و شرکت‌های پیشرو در اکوسیستم استارت‌آپی ایران و پلتفرمی برای پرورش<br /> تولیدکنندگان تکنولوژی در سطح جهان است.
          </p>
            <div className='student'>
          <img className='image1' src={ImageStudent1} alt="" />
          <img className='image2' src={ImageStudent2} alt="" />
          <img className='image3' src={ImageStudent3} alt="" />
          <img className='image4' src={ImageStudent4} alt="" />
            </div>
            <p className='stu'> <span style={{color:'#D34B7F'}}>250+</span>  مهارت‌‌آموز</p>
            <Button variant="success" style={{padding:"7px 42px",margin:"73vh",marginRight:"-15vh",color:"#fff"}}>ثبت نام مهارت اموز</Button>
            
            <div className='box1'>
                <p>               دوره آموزشی 
</p>
              <div className="value1">
              </div>

             </div>
             <div className='box2'>
              <div className="value2"></div>
                <p>
                   ورود به بازار
                </p>
             </div>
             <div className='box3'>
              <div className="value3"></div>
                <p>
                   منتور‌ و‌ مربی  
                </p>
             </div>
           </div>
           {/********* card **********/}
           <br />
           <br />
           
          <div>
            <h1>ویژگی‌های متمایز دوره‌های آموزشی کاریار </h1>
            <div className='countendo'>
            <div className='all-card'>

            <div className='card'>
              <img src={icon1} alt="" />
              <p className='pCard'>پروژه محور</p>
              <span className='content-card'>مهارت‌آموزان در هر دوره آموزشی، به‌صورت فردی و
تیمی پروژه‌های کاربردی را انجام می‌دهند و پروژه‌های
خود را در جلساتی با حضور کارفرماها ارائه می‌کنند.</span>
            </div>

            <div className='card'>
              <img src={icon1} alt="" />
              <p className='pCard' style={{width:"150px"}}> کارگاه‌های کاربردی</p>
              <span className='content-card'>مهارت‌آموزان در هر دوره آموزشی، به‌صورت فردی و
تیمی پروژه‌های کاربردی را انجام می‌دهند و پروژه‌های
خود را در جلساتی با حضور کارفرماها ارائه می‌کنند.</span>
            </div>
            
            {/* <div className='card' style={{margin:"-22.4rem 20rem 18rem 0px"}}>
              <img src={icon1} alt="" />
              <p className='pCard' style={{width:"150px"}}>  حضور راهنما</p>
              <span className='content-card'>
              هر مهارت‌آموز در تمام مدت آموزش، با یک مربی
حل تمرین و یک منتور در ارتباط است. آنها همراه و
راهنمای مهارت‌آموزان در مسیر حرفه‌ای شدن هستند.
</span>
            </div>

            <div className='card' style={{margin:"-15.8rem 20rem 5rem 0px"}}>
              <img src={icon1} alt="" />
              <p className='pCard' style={{width:"150px"}}>  کلاس‌های آنلاین</p>
              <span className='content-card'>تمام فرآیند اجرایی و آموزشی کاریار آنلاین است، از این رو علاقمندان از سراسر ایران می‌توانند در دوره‌های آموزشی کاریار شرکت کنند.</span>
            </div> */}
          </div>
            </div>
            </div>
          <Section />
           <br />
           <br />
         
            
    </div>
  )
}

export default Home