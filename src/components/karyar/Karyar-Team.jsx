import React from 'react'
import './scss/Karyar-Team.scss'
import Vec from '../../assest/Vector-2.png'
import {Card,Col,Row} from 'react-bootstrap/';
import person1 from '../../assest/karyar-team/دکتر-محمد-حسین-بنی-اسدی 1.png'
import person2 from '../../assest/karyar-team/دکتر-یحیی-تابش 1.png'
import person3 from '../../assest/karyar-team/سلمان-جریری 1.png'
import person4 from '../../assest/karyar-team/فیروزه-صابر 1.png'
import person5 from '../../assest/karyar-team/زهرا-عمرانی 1.png'
import person6 from '../../assest/karyar-team/نرگس-بنی-اسدی 1.png'
import person7 from '../../assest/karyar-team/فرشید-اردوانی-943x1024 2.png'
import person8 from '../../assest/karyar-team/علیرضا-بنی-اسدی 1.png'
import person9 from '../../assest/karyar-team/فریبا-مهدیون-600x450 1.png'
//work
import person11 from '../../assest/karyar-work/غزل-دستوری 1.png'
import person12 from '../../assest/karyar-work/افسانه-شعبانی 1.png'
import person13 from '../../assest/karyar-work/مریم-راهور-300x300 1.png'
import person14 from '../../assest/karyar-work/صمد-قنبری 1.png'
import person15 from '../../assest/karyar-work/فاطمه-نقیلو-300x247 1.png'
import person16 from '../../assest/karyar-work/134731888_217254083787321_3285308503415620813_n-300x300 1.png'
// help
import person21 from '../../assest/karyar-help/آرزو-کشاورز-294x300 1.png'
import person22 from '../../assest/karyar-help/وحید-ترابی-293x300 1.png'
import person23 from '../../assest/karyar-help/imgonline-com-ua-shape-bMKGSV5sFNRMRO-300x300 1.png'
import person24 from '../../assest/karyar-help/یاسمن-شیریان-277x300 1.png'
import person25 from '../../assest/karyar-help/پویا-احسانی 1.png'
import person26 from '../../assest/karyar-help/محسن-حجرتی-300x300 1.png'
import person27 from '../../assest/karyar-help/jpg 1.png'





function KaryarTeam() {
  return (
    <div className='karyarteam'>
         <div className='text'>
            <h1> تیم کاریار  </h1>
            <img src={Vec} alt="" />
        </div>
        <div className='box'>
            <h1>اعضا و مشاوران هیئت مدیره</h1>
            <Row xs={1} md={3} className="g-4">
        <Col>
          <Card style={{border:"none"}} >
            <Card.Img variant="top" src={person1}  className="col-1" />
            <Card.Body>
              <Card.Title>دکتر محمد‌حسین بنی اسدی</Card.Title>
              <Card.Text>
              رئیس هیات مدیره
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person2} className="col-1" />
            <Card.Body>
              <Card.Title>دکتر یحیی تابش</Card.Title>
              <Card.Text>
              مشاور هیات مدیره

              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person3} className="col-1"  />
            <Card.Body>
              <Card.Title>سلمان جریری</Card.Title>
              <Card.Text>
              عضو هیات مدیره
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person4} className="col-1" />
            <Card.Body>
              <Card.Title>فیروزه صابر</Card.Title>
              <Card.Text>
              عضو هیات مدیره              
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person5} className="col-1" />
            <Card.Body>
              <Card.Title>زهرا عمرانی</Card.Title>
              <Card.Text>
              مدیر‌عامل و عضو هیات مدیره
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person6} className="col-1" />
            <Card.Body>
              <Card.Title>دکتر نرگس بنی‌اسدی</Card.Title>
              <Card.Text>
              مشاور هیات مدیره
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person7} className="col-1" />
            <Card.Body>
              <Card.Title>دکتر فرشید اردوانی</Card.Title>
              <Card.Text>
              عضو هیات مدیره
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person8} className="col-1" />
            <Card.Body>
              <Card.Title>امیر حسین کیهانی</Card.Title>
              <Card.Text>
              عضو هیات مدیره
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person9} className="col-1" />
            <Card.Body>
              <Card.Title>فریبا مهدیون</Card.Title>
              <Card.Text>
              مشاور هیات مدیره
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
    </Row>
        </div>




        {/* box2 */}







        <div className='box2'>
            <h1 style={{margin:"40px",padding:"40px"}}>اعضای  تیم اجرایی</h1>
            <Row xs={1} md={3} className="g-4">
        <Col>
          <Card style={{border:"none"}} >
            <Card.Img variant="top" src={person11}  className="col-1" />
            <Card.Body>
              <Card.Title>غزل دستوری</Card.Title>
              <Card.Text>
              مدیر آموزش              
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person12} className="col-1" />
            <Card.Body>
              <Card.Title> افسانه شعبانی</Card.Title>
              <Card.Text>
              مسئول دفتر              
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person13} className="col-1" />
            <Card.Body>
            <Card.Title>مریم راهور</Card.Title>
            <Card.Text>
              مسئول کارآموزی              
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person14} className="col-1" />
            <Card.Body>
            <Card.Title> صمد قنبری</Card.Title>
            <Card.Text>
              مسئول فنی             
               </Card.Text>
            </Card.Body>
          </Card>

          
        </Col>
        <Col>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person15} className="col-1" />
            <Card.Body>
              <Card.Title>  فاطمه نقی‌لو</Card.Title>
              <Card.Text>
              پشتیبانی مهارت‌آموز              
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person16} className="col-1" />
            <Card.Body>
              <Card.Title>  مهتاب فرجی</Card.Title>
              <Card.Text>
              مدیر پروژه              
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
    </Row>
        </div>







        {/* box */}


        <div className='box3'>
            <h1 style={{margin:"40px",padding:"40px"}}>اعضای  تیم اجرایی</h1>
            <Row xs={1} md={3} className="g-4">
        <Col>
          <Card style={{border:"none"}} >
            <Card.Img variant="top" src={person21}  className="col-1" />
            <Card.Body>
              <Card.Title> دکتر آرزو کشاورز</Card.Title>
              <Card.Text>
              مسئول و مشاور کمیته منتورها              
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person22} className="col-1" />
            <Card.Body>
              <Card.Title>  وحید ترابی</Card.Title>
              <Card.Text>
              مشاور و منتور        
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person23} className="col-1" />
            <Card.Body>
            <Card.Title> امیرحسین کیانی</Card.Title>
            <Card.Text>
            عضو کمیته تولید محتوا و منتور              
            </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person24} className="col-1" />
            <Card.Body>
            <Card.Title>  یاسمن شیریان</Card.Title>
            <Card.Text>
            مشاور کمیته داوطلب‌ها               
            </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person27} className="col-1" />
            <Card.Body>
            <Card.Title>  هانیه فلاح</Card.Title>
            <Card.Text>
            مشاور مددکاری             
               </Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        <Col>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person25} className="col-1" />
            <Card.Body>
              <Card.Title>   پویا احسانی</Card.Title>
              <Card.Text>
              عضو کمیته تولید محتوا و منتور              
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{border:"none"}}>
            <Card.Img variant="top" src={person26} className="col-1" />
            <Card.Body>
              <Card.Title>   محسن هجرتی</Card.Title>
              <Card.Text>
              عضو کمیته تولید محتوا و منتور              
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
    </Row>
        </div>
        
    </div>
  )
}

export default KaryarTeam