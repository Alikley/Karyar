import React from 'react'
import './scss/About.scss'
import {Card,Col,Row} from 'react-bootstrap/';

import img1 from '../../assest/Character_00000117643974164102315750000009602833775446383522_.png'
import karyar from '../../assest/کاریار.png'
import fram1 from '../../assest/Frame 90.png'
import fram2 from '../../assest/mdi_crossfit.png'
import fram3 from '../../assest/fluent_money-dismiss-20-regular.png'
import image from '../../assest/Group-2.png'
import image2 from '../../assest/Group 38.png'




function About() {
  return (
    <div className='about'>
        <div className="box">
            <h2 className='LOGO'>درباره<img src={karyar} alt="" /></h2>
            <p>کاریار استارت‌آپی اجتماعی و غیرانتفاعی، متعهد به عدالت، دسترسی و فرصت همگانی است که با
                 ایجاد محیطی با دسترسی مناسب در زمینه‌ی آموزش IT به خصوص کدنویسی، فرصت رشد و پیشرفت را برای تمام اقشار جامعه فارغ از طبقه‌بندی‌های
                  اجتماعی و انتزاعی موجود، فراهم می‌کند.</p>
                  <p>
                  کاریار معتقد است که مشارکت فعال و آگاهانه در جامعه‌ی دیجیتالی امروز، نیازمند یادگیری علوم کامپیوتر است و برای دستیابی به این هدف، همواره تلاش می‌کند موانعی که از ورود و مشارکت جلوگیری می‌کند را شناسایی کرده و از بین ببرد.
                  </p>
                  <p>
                  به این ترتیب دانشجویان فارغ التحصیل شده از کاریار، توانایی مقابله با مشکلات منحصر به فرد عصر دیجیتال و حل مسئله را خواهند داشت. به عبارت دیگر، کاریار فقط آموزش نیست، آموزش معطوف به کسب و کار است.
                  </p>
                  <Row xs={1} md={3} className="g-4" style={{padding:"25px 20rem",margin:"10px 80px 0px 35rem"}}>
                    <Col>
                    <Card  className="card-1">
                        <Card.Img variant="top" src={fram1} className="card-img"  />
                        <Card.Body>
                        <Card.Title  className="card-text">سرمایه‌گذاری روی افراد علاقه‌مند و خلاق</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-2">
                        <Card.Img variant="top" src={fram2}  className="card-img" />
                        <Card.Body>
                        <Card.Title className="card-text">    عدم دریافت هزینه 
تا ورود به کسب و کار </Card.Title>

                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-3" >
                        <Card.Img variant="top" src={fram3} className="card-img"  />
                        <Card.Body>
                        <Card.Title className="card-text">پشتکار و تلاش بی‌وقفه
تا حصول نتیجه‌ی‌ نهایی</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                 </Row>
            <img src={img1} className="char" alt="" />
        </div>



        {/* box */}

    <div className='box2'>
        <h2 >
        تاریخچه کاریار
        </h2>
            <p>کاریار استارت‌آپی اجتماعی و غیرانتفاعی، متعهد به عدالت، دسترسی و فرصت همگانی است که با
                 ایجاد محیطی با دسترسی مناسب در زمینه‌ی آموزش IT به خصوص کدنویسی، فرصت رشد و پیشرفت را برای تمام اقشار جامعه فارغ از طبقه‌بندی‌های
                  اجتماعی و انتزاعی موجود، فراهم می‌کند.</p>
                  <p>
                  کاریار معتقد است که مشارکت فعال و آگاهانه در جامعه‌ی دیجیتالی امروز، نیازمند یادگیری علوم کامپیوتر است و برای دستیابی به این هدف، همواره تلاش می‌کند موانعی که از ورود و مشارکت جلوگیری می‌کند را شناسایی کرده و از بین ببرد.
                  </p>
                  <p>
                  به این ترتیب دانشجویان فارغ التحصیل شده از کاریار، توانایی مقابله با مشکلات منحصر به فرد عصر دیجیتال و حل مسئله را خواهند داشت. به عبارت دیگر، کاریار فقط آموزش نیست، آموزش معطوف به کسب و کار است.
                  </p>
                  <img src={image} alt="" />
    </div>
    
    <div className='box3'>
        <h2 >
        فلسفه کاریار       
         </h2>
          <p>
          ما اعتقاد داریم آموزش IT با استانداردهای جهانی و کیفیت مناسب باید در دسترس 
عموم باشد و هر فردی فارغ از جنسیت، نژاد، قومیت، هویت، درآمد خانواده، محل 
زندگی خود و … باید امکان آموزش را داشته باشد. کاریار قصد دارد تا فرصت 
آموزش را برای تک‌تک افراد با انگیزه و علاقه‌مند به پیشرفت در کشور فراهم کند. 
          </p>
        <p>
        برای حرکت در راستای این دیدگاه، با موسسه‌ها و افراد بی‌شماری که به ایجاد، 
تامین اعتبار و گسترش آموزش علوم کامپیوتر کمک کرده‌اند همکاری می‌کنیم و برای 
هدایت مهارت‌آموزها در نیل به پروژه‌های نهایی و حل تمرین از گروه داوطلب‌های 
کاریار بهره می‌جوییم.
        </p>
            <img src={image2} alt="" />
    </div>
    <div className="box4">
        <h2>
        ویژگی‌های متمایز کاریار 
        </h2>
    <Row xs={1} md={2} className="g-0">
        <Col>
          <Card className='card4'>
            <Card.Img variant="top" src="holder.js/100px160"  className="card-img"/>
            <Card.Body>
              <Card.Title className="card-text">تعاون و همکاری سازنده برای ساخت جهانی متفاوت‌تر</Card.Title>
            </Card.Body>
          </Card>

          <Card className='card4'>
            <Card.Img variant="top" src="holder.js/100px160" className="card-img"/>
            <Card.Body>
              <Card.Title className="card-text">به روز‌کردن متناوب اطلاعات علوم کامپیوتر و انعطاف‌پذیری لازم همگام با تغییرات پیش رونده‌ی دنیای دیجیتال</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card4'> 
            <Card.Img variant="top" src="holder.js/100px160" className="card-img" />
            <Card.Body>
              <Card.Title className="card-text">رعایت عدالت در ایجاد فرصت‌های برابر برای عموم افراد و فارغ از تمام مرزبندی‌های موجود</Card.Title>
            </Card.Body>
          </Card>

          <Card className='card4'>
            <Card.Img variant="top" src="holder.js/100px160" className="card-img"/>
            <Card.Body>
              <Card.Title className="card-text">Card title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </div>

    
    </div>
  )
}

export default About