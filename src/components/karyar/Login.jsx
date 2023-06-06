import React from 'react'
import {Button,Form} from 'react-bootstrap';
import './scss/Login.scss'
function Login() {
  return (
    <div className='login'>
        <div className="box">
            <div className='login-form'>
                <h2 style={{padding:"40px 0px 70px"}}>ورود به سامانه آموزشی کاریار</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{padding:"0px 0px 0px 15rem",fontSize:"20px",fontWeight:"500"}}>نام‌کاربری‌/‌ ایمیل</Form.Label>
                            <Form.Control type="email" placeholder="نام‌کاربری و یا ایمیل خود را وارد کنید" className='input' />
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{padding:"0px 0px 0px 19rem",fontSize:"20px",fontWeight:"500"}}>رمز ورود</Form.Label>
                    <Form.Control type="password" placeholder="رمز ورود خود را وارد کنید" className='input'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label style={{padding:"0px 0px 0px 13.5rem"}}>مرا به خاطر بسپار </Form.Label>
                    <Form.Check type="checkbox" style={{padding:"0px 0px 0px 0px",margin:"-30px 0px 30px 355px",color:"#00984A"}} />
                </Form.Group>
                <Button variant="primary" type="submit" style={{width:"380px",height:"66px",background:"#00984A",border:"1px solid #00984A",fontWeight:"500",margin:"0px 0px 35px"}}>
                ورود به سایت
                </Button>
                </Form>
                <p style={{fontWeight:"500",fontSize:"16px",color:"#00984A",padding:"0px 0px 35px"}}>نام کاربری و یا رمز ورود خود را فراموش کرده‌اید؟</p>
                <p>توجه کنید که کوکی‌ها باید در مرورگر شما فعال باشند.</p>
        </div>

            <div className="login-text">
                <h2 style={{fontSize:"24px",fontWeight:"700",padding:"48px"}}>
                به سامانه آموزشی کاریار خوش آمدید!
                </h2>
                <p  className="p">
                کاریار یک استارتاپ اجتماعی است که با هدف دسترسی 
به فرصت‌های آموزشی برابر در ایران، به علاقه‌مندان
 در حوزه ی کدنویسی آموزش می‌دهد.
                </p>
                <p className='p2'>
                اگر عضو سامانه آموزشی کاریار نیستید، 
با دسترسی مهمان وارد شوید:
                </p>
                <Button style={{width:"306px",height:"66px",background:"#D34B7F",border:"solid 1px #D34B7F"}}>ورود به عنوان مهمان</Button>
            </div>
        </div>
    </div>
  )
}

export default Login