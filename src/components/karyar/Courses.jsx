import React from 'react'
import './scss/Courses.scss'
import {Card,Button} from 'react-bootstrap/';
import { MdCheckBox,MdCalendarMonth,MdPunchClock,MdMenuBook,MdOutlineCode } from "react-icons/md";
import fram1 from '../../assest/logo Final-01 1.png'

function Courses() {
  return (
    <div className='courses'>
        <div className="box">
            <p>مسیر آموزش و اشتغال برنامه‌نویسی سمت سرور (بک‌اند)</p>
            <div className="mini-box">
                <div className='content'>
                    <p className='p-1'>
                    کاریار در حال حاضر و با همراهی مدرسین و موسسات آموزشی معتبر در<br /> چهار مسیر شغلی از سطح مقدماتی تا پیشرفته دوره‌های آموزشی<br /> برگزار می‌کند:
                    </p>
                    <ul>
                        <li>مسیر آموزش و اشتغال برنامه‌نویسی سمت کاربر (فرانت‌اند)</li>
                        <li>مسیر آموزش و اشتغال برنامه‌نویسی سمت سرور (بک‌اند)</li>
                        <li style={{padding: "15px 0px 0px 65rem"}}>مسیر آموزش و اشتغال تحلیل داده</li>
                        <li style={{padding: "15px 0px 0px 64rem"}}>مسیر آموزش و اشتغال امور اداری هر</li>
                    </ul>
                    <p className='p-2'>
                    هر مهارت‌آموز با ثبت نام در دوره‌های آموزشی کاریار یک بسته آموزشی:<br /> دریافت می‌کند که این بسته آموزشی شامل<br /> دوره‌های آموزش تخصصی<br /> دوره‌ی مهارت‌های ارتباطی<br /> کلاس زبان<br /> کلاس‌های هفتگی حل تمرین<br /> جلسات ماهانه‌ مشاوره با منتور<br /> و کارگاه‌های جانبی ماهانه در حوزه‌های عمومی و تخصصی است. 
                    </p>
                    <p className='p-3'>
مهارت‌آموزان بعد از ورود به هر کدام از مسیرهای آموزش و اشتغال کاریار، طی مدت ۶ تا ۹ ماه آموزش‌های تخصصی دریافت می‌کنند و با گذراندن دوره‌ی آموزش‌های حرفه‌ای، شامل رزومه‌نویسی، مصاحبه شغلی، لینکدین و شبکه‌سازی آماده‌ی ورود به بازار کار می‌شوند.</p>
                </div>
            <Card  className="card-1">
                        <Card.Img variant="top" src={fram1} style={{margin:"-42px 1px -6vh",width:"50px",background:"#fff"}}  />
                        <Card.Body>
                        <Card.Title  className="card-text">    مسیر آموزش و اشتغال برنامه‌نویس سمت سرور (بک‌اند)</Card.Title>
                        </Card.Body>
                    </Card>
            </div>
        </div>
        <div className="box2">
        <Card  className="card-2">
      <Card.Img variant="top" src={fram1}  className="cardImg" />
      <Card.Body>
        <Card.Title  className="title">  مبانی برنامه‌نویسی و تفکر الگوریتمی (الگوریتم/اصول برنامه‌نویسی پایتون)   </Card.Title>
        <Card.Title  className="titicon">   <MdCheckBox  style={{color:"#D34B7F"}}/>مقدماتی  </Card.Title>
        <Card.Title  className="titicon2">  <MdCalendarMonth style={{color:"#D34B7F"}} />سه ماه  </Card.Title>
        <Card.Title  className="titicon3">  <MdPunchClock style={{color:"#D34B7F"}} />20 ساعت در هفته  </Card.Title>
        <Card.Title  className="titicon4">  <MdMenuBook style={{color:"#D34B7F"}} />بر اساس سیلابس‌های پلتفرم کوئرا کالج   </Card.Title>
        <Card.Title  className="titicon5">  <MdOutlineCode style={{color:"#D34B7F"}}/>پروژه محور   </Card.Title>
        <Card.Text className='cardTxT'>
        تمرکز کاریار با توجه به اهدافی که برای خود در نظر گرفته، بر آموزش برنامه‌نویسی به مهارت‌آموزان است. با گذراندن دوره‌ی برنامه‌نویسی، مهارت‌آموزان با مبانی برنامه‌نویسی پایتون و تفکر الگوریتمی آشنا می‌شوند. با آشنایی با مبانی برنامه‌نویسی، مهارت‌آموزان فقط یک زبان برنامه‌نویسی یاد نمی‌گیرند، بلکه یاد می‌گیرند که چگونه با دید برنامه‌نویسی به همه مسائل نگاه کنند. چگونه یک مسئله پیچیده را به مسائل کوچک و ساده‌تر تبدیل کنند و به صورت مدولار برنامه بنویسند. همچنین مهارت‌آموزان یاد می‌گیرند که چگونه کد خود را تست کنند و مطمئن شوند که کد، کاری که باید را انجام می‌دهد.
        </Card.Text>
        <Card.Text className='boxTXT'>
            <h4>پیش‌نیاز‌های دوره</h4>
            <p>این دوره مقدماتی است و پیش نیازی زیادی لازم ندارد. اما لازم است مهارت‌آموزان تفکر ریاضی را دوست داشته و به اعداد علاقه‌مند باشند.</p>
        </Card.Text>
        <Card.Text className='boxTXT2'>
            <h4>پیش‌نیاز‌های دوره</h4>
            <p>این دوره مقدماتی است و پیش نیازی زیادی لازم ندارد. اما لازم است مهارت‌آموزان تفکر ریاضی را دوست داشته و به اعداد علاقه‌مند باشند.</p>
        </Card.Text>
        <Card.Text className='boxTXT3'>
            <h4>پیش‌نیاز‌های دوره</h4>
            <p>این دوره مقدماتی است و پیش نیازی زیادی لازم ندارد. اما لازم است مهارت‌آموزان تفکر ریاضی را دوست داشته و به اعداد علاقه‌مند باشند.</p>
        </Card.Text>
        {/* <Button variant="success , bottom" >Go somewhere</Button> */}
      </Card.Body>
    </Card>
        </div>


        <div className="box3">
        <Card  className="card-2">
      <Card.Img variant="top" src={fram1}  className="cardImg" />
      <Card.Body>
        <Card.Title  className="title">  جنگو (اصول برنامه نویسی با فریم ورک جنگو)  </Card.Title>
        <Card.Title  className="titicon">   <MdCheckBox  style={{color:"#D34B7F"}}/>مقدماتی  </Card.Title>
        <Card.Title  className="titicon2">  <MdCalendarMonth style={{color:"#D34B7F"}} />سه ماه  </Card.Title>
        <Card.Title  className="titicon3">  <MdPunchClock style={{color:"#D34B7F"}} />20 ساعت در هفته  </Card.Title>
        <Card.Title  className="titicon4">  <MdMenuBook style={{color:"#D34B7F"}} />بر اساس سیلابس‌های پلتفرم کوئرا کالج   </Card.Title>
        <Card.Title  className="titicon5">  <MdOutlineCode style={{color:"#D34B7F"}}/>پروژه محور   </Card.Title>
        <Card.Text className='cardTxT'>
        پایتون زبان مورد علاقه برنامه نویسان است و این دوره‌‌ی آموزش برنامه‌نویسی پایتون و تفکر شی‌گرا، توسط موسسه کوئرا. با هدف ایجاد دید گسترده و عمیق نسبت به مفاهیم برنامه‌نویسی و شی‌گرایی طراحی شده است.        </Card.Text>
        <Card.Text className='boxTXT'>
            <h4>پیش‌نیاز‌های دوره</h4>
            <p>این دوره مقدماتی است و پیش نیازی زیادی لازم ندارد. اما لازم است مهارت‌آموزان تفکر ریاضی را دوست داشته و به اعداد علاقه‌مند باشند.</p>
        </Card.Text>
        <Card.Text className='boxTXT2'>
            <h4>پیش‌نیاز‌های دوره</h4>
            <p>این دوره مقدماتی است و پیش نیازی زیادی لازم ندارد. اما لازم است مهارت‌آموزان تفکر ریاضی را دوست داشته و به اعداد علاقه‌مند باشند.</p>
        </Card.Text>
        <Card.Text className='boxTXT3'>
            <h4>پیش‌نیاز‌های دوره</h4>
            <p>این دوره مقدماتی است و پیش نیازی زیادی لازم ندارد. اما لازم است مهارت‌آموزان تفکر ریاضی را دوست داشته و به اعداد علاقه‌مند باشند.</p>
        </Card.Text>
      </Card.Body>
    </Card>
</div>


    <div className="box4">
        <Card  className="card-2">
      <Card.Img variant="top" src={fram1}  className="cardImg" />
      <Card.Body>
        <Card.Title  className="title">    جنگو (اصول برنامه نویسی با فریم ورک جنگو)   </Card.Title>
        <Card.Title  className="titicon">   <MdCheckBox  style={{color:"#D34B7F"}}/>مقدماتی  </Card.Title>
        <Card.Title  className="titicon2">  <MdCalendarMonth style={{color:"#D34B7F"}} />سه ماه  </Card.Title>
        <Card.Title  className="titicon3">  <MdPunchClock style={{color:"#D34B7F"}} />20 ساعت در هفته  </Card.Title>
        <Card.Title  className="titicon4">  <MdMenuBook style={{color:"#D34B7F"}} />بر اساس سیلابس‌های پلتفرم کوئرا کالج   </Card.Title>
        <Card.Title  className="titicon5">  <MdOutlineCode style={{color:"#D34B7F"}}/>پروژه محور   </Card.Title>
        <Card.Text className='cardTxT'>
        فریم ورک جنگو ساده و انعطاف پذیر است و این دوره آموزشی توسط کوئرا برای علاقمندان به بک‌اند طراحی شده است و در آن ابتدا زبان پایتون مرور می‌شود، سپس جزئیات فریم ورک جنگو آموزش داده می‌شود.        </Card.Text>
        <Card.Text className='boxTXT'>
            <h4>پیش‌نیاز‌های دوره</h4>
            <p>این دوره مقدماتی است و پیش نیازی زیادی لازم ندارد. اما لازم است مهارت‌آموزان تفکر ریاضی را دوست داشته و به اعداد علاقه‌مند باشند.</p>
        </Card.Text>
        <Card.Text className='boxTXT2'>
            <h4>پیش‌نیاز‌های دوره</h4>
            <p>این دوره مقدماتی است و پیش نیازی زیادی لازم ندارد. اما لازم است مهارت‌آموزان تفکر ریاضی را دوست داشته و به اعداد علاقه‌مند باشند.</p>
        </Card.Text>
        <Card.Text className='boxTXT3'>
            <h4>پیش‌نیاز‌های دوره</h4>
            <p>این دوره مقدماتی است و پیش نیازی زیادی لازم ندارد. اما لازم است مهارت‌آموزان تفکر ریاضی را دوست داشته و به اعداد علاقه‌مند باشند.</p>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>



          <div className="box5">
              <p className='p-1'>
              مهارت‌های ارتباطی
              </p>
              <p className='p-2'>
              تمامی دوره‌های تخصصی در کاریار با ۱۰ ساعت آموزش‌ مهارت‌های نرم همراه است. مهارت‌های نرم مجموعه‌ای از توانمندی‌های اکتسابی است که فرد را برای حضور در فضای کار حرفه‌ای آماده می‌کند.
              </p>
              <div className="mini1">
                <p>سرفصل‌های دوره</p>
                <ul>
                  <li>رفتار و خُلق عمومی</li>
                  <li>مهارت درون فردی</li>
                  <li> مهارت بین فردی</li>
                  <li>توان سازگاری</li>
                  <li>مدیریت استرس</li>
                </ul>
              </div>
              <div className="mini2">
                <p>مدت‌زمان دوره</p>
                <span>این دوره ۱۰ ساعت است که حدود 
یک ماه زمان می برد.</span>
              </div>
              <div className="mini3">
                <p>
                پیش‌نیاز‌های دوره
                </p>
                <span>
                این دوره پیش نیازی ندارد، اما تنها برای مهارت آموزانی برگزار می‌شود که در یکی دیگر از دوره های تخصصی کاریار ثبت نام کرده باشند.
                </span>
              </div>
          </div>


        </div>
  )
}

export default Courses