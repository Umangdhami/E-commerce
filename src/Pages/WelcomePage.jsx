import React from 'react'
import welcomeImg from '../assets/img/welcome/oc-collaboration.webp'
import LazyImage from '../Components/LazyLoad/LazyImage'

const WelcomePage = () => {
  return (
    <div className='main' style={{height : '100%'}}>
      <div className="content container-fluid" style={{height : '100%', paddingTop : '62px'}}>
        <div className='h-100' style={{display : 'flex', alignItems : 'center'}}>
        <div className=" row justify-content-sm-center text-center col-12">
          <div className="col-sm-7 col-md-5">
            <LazyImage src={welcomeImg} style={{width : '100%', marginBottom : '2rem', backgroundSize : 'cover'}}/>
            <h1>Hello, nice to see you!</h1>
            <p>You are now minutes away from creativity than ever before. Enjoy!</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage