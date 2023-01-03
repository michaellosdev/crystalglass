import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import TopNav from '../components/TopNav'
import AboutUsPic from '../assets/About_us_photo.jpg'
import ShowerDoorPhoto from '../assets/shower_door.jpg'
import StairsPhoto from '../assets/Latest_work/Stairs_1.jpg'
import MirrorPhoto from '../assets/mirror.jpg'
import FloatingStairsPhoto from '../assets/glass_stairs.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'
//icons inport 
import StarIcon from '../assets/star.png'
import AdviceIcon from '../assets/icons/advise.png'
import CalendarItem from '../assets/icons/calendar.png'
import EstimateIcon from '../assets/icons/estimate.png'
import HouseIcon from '../assets/icons/house.png'
import LiscenceIcon from '../assets/icons/liscense.png'
import MoneyBackIcon from '../assets/icons/money back.png'
import MoneyIcon from '../assets/icons/money.png'
import VacuumIcon from '../assets/icons/vacuum.png'
import sanityClient from '../client.js'
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);


function Home() {
  const [allPostData, setAllPostData] = useState([])
  const [emailInput, setEmailInput] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  })

const handleEmailInput = (e) => {
   
    setEmailInput(current => ({ 
      ...current,
      [e.target.name]: e.target.value
    }))
} 

const submit = (e) => {
  e.preventDefault()
  setEmailInput({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  })
}
  
useEffect(()=> {  
    const query =  `*[_type == "post"]`      
    sanityClient.fetch(query).then((data) => {
      setAllPostData(data)
    })
    .catch(console.error)
}, [])

  return (
    <div>
        <TopNav />
        <div className='layout--styles hero--section' id='home'>
          <h1 >CRYSTAL GLASS GLAZING</h1>
          <Button className='btn--global btn--hero'><a href="tel:+18189668660">CONTACT US </a></Button> 
        </div>
        <div className='layout--styles about--container' >
          <div className='about-container--box'>
            <h5 className='color--red' >TRUSTED PROFESSIONALS</h5>
            <h2>Glazing or Railing?
Get It Done By The best!</h2>
            <p>Crystal glass and glazing offers quality railing    and glazing services in Los Angeles and the San Gabriel/San Fernando Valley.Our company has been dedicated to providing skilled, reliable railing services to the area. <br />
        We’ve been providing exceptional installation, repair, and  replacement services for all glass needs.We take pride in being locally owned and operated. <br />under

         Our team is composed of licensed and highly trained professionals who can handle all residential and commercial glassing repairs and services. When you work with the experts at Crystal Glass and Glazing, you can rest assured you’re receiving top of the line service that is unmatched. </p>
          </div>
          <div className='about-container--box'>
            <img src={AboutUsPic}/>
          </div>
        </div>
        <div className='our-services--section layout-420px layout--styles' id='services'>
          <div>
            <h2 >Our Services</h2>
            <p >We provide services and products that set high standarts for qualitty, reliability, durability and value for money</p>
          </div>
          <div className='our-services-cards--container'> 
            <div className='service-card'>
              <img src={ShowerDoorPhoto} className='service-card--img'/>
              <h3 className='service-card--text'>SHOWER DOORS</h3>
            </div>
            <div className='service-card'>
              <img src={StairsPhoto} className='service-card--img'/>
              <h3 className='service-card--text'>GLASS RAILING</h3>
            </div>
            <div className='service-card'>
              <img src={MirrorPhoto} className='service-card--img'/>
              <h3 className='service-card--text'>CUSTOM MIRRORS</h3>
            </div>
            <div className='service-card'>
              <img src={FloatingStairsPhoto} className='service-card--img'/>
              <h3 className='service-card--text'>FLOATING STAIRS</h3>
            </div>
          </div>
        </div>
        <div>
          <div className='layout--styles why-choose-us--section layout-420px'>

            <h2 className='text-center font-size-5'>Why choose us</h2>
              <div className='icons--container'>
                <div className='why-choose-us--icons-section'>
                  <div className='icon-box icon-box-1'>
                    <img src={MoneyIcon} alt="" className='icon' />
                    <p>No hidden cost, upfront pricing</p>
                  </div>
                  <div className='icon-box icon-box-2'>
                    <img src={HouseIcon} alt="" className='icon' />
                    <p>100% family owned and operated</p>
                  </div>
                  <div className='icon-box icon-box-3'>
                    <img src={LiscenceIcon} alt="" className='icon' />
                    <p>Fully licensed and accredited</p>
                  </div>
                  <div className='icon-box icon-box-4'>
                    <img src={CalendarItem} alt="" className='icon' />
                    <p>Work around your schedules</p>
                  </div>
                  
                </div>
                <div className='why-choose-us--icons-section'>
                  <div className='icon-box icon-box-5'>
                    <img src={AdviceIcon} alt="" className='icon' />
                    <p>FREE professional advice</p>
                  </div>
                  <div className='icon-box icon-box-6'>
                    <img src={EstimateIcon} alt="" className='icon' />
                    <p>No obligation estimations</p>
                  </div>
                  <div className='icon-box icon-box-7'>
                    <img src={VacuumIcon} alt="" className='icon' />
                    <p>We leave your premses clean and tidy</p>
                  </div>
                  <div className='icon-box icon-box-8'>
                    <img src={MoneyBackIcon} alt="" className='icon' />
                    <p>100% money back guaranteed</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='layout--styles our-latest-work--section layout-420px' id='portfolio'>
          <h2 > Our Latest Work</h2>
          <div className='portfolio-pics--container'>
            {allPostData && allPostData?.slice(0).reverse().map((post, index) => (
            <div className='img--container' key={index}> 
              <img src={urlFor(post.imageUrl).url()} className='portfolio-image'/>
            </div>  
            )).splice(0,6)}
          </div>
        </div>
        <div className='layout--styles free-estimate--section'>
          <h2 >Contact us now for FREE ESTIMATION</h2>
          <p>Take advantage of our hassle-free, no-obligation estimates! Just call us now and we will discuss your project! </p>
          
          <Button className='btn--global btn--estimate'><a href="tel:+18189668660">CONTACT US </a></Button>
          
        </div>
        <div className='reviews--section'>
          <h2 >What are customers are saying</h2>
          <div className='review-cards--container'>
              <div className='review-card'>
                <div className='review-card--header'>
                  <h3>ROSA A.</h3>
                  <h3>GLENDALE, CA</h3>
                </div> 
                <div className='review-card--body'>
                  <p>
                   Art and Aro are the real deal. I’ve been remodeling homes for 15 years and by far, these guys are the best. 

                  I spent hours researching different glass railing companies. I wanted to make sure I got a company that would do quality work since glass railing is all about technique. Save the time researching and just go with Art and Aro. 
                  </p>
                </div> 
                <div className='review-card--footer'>
                  <img src ={StarIcon} className='star-icon' />
                  <img src ={StarIcon} className='star-icon' />
                  <img src ={StarIcon} className='star-icon' />
                  <img src ={StarIcon} className='star-icon' />
                  <img src ={StarIcon} className='star-icon' />
                </div> 
              </div>
              <div className='review-card'>
                <div className='review-card--header'>
                  <h3>NICK P.</h3>
                  <h3>LONG BEACH, CA</h3>
                </div> 
                <div className='review-card--body'>
                  <p>

                I recently used Crystal Glass Glazing to install a new glass shower enclosure in my bathroom, and I couldn't be happier with the result. The team was professional, punctual, and did a fantastic job. The enclosure looks beautiful and was installed perfectly. I would highly recommend them to anyone in need of glazing services.
                  </p>
                </div> 
                <div className='review-card--footer'>
                  <img src ={StarIcon} className='star-icon' />
                  <img src ={StarIcon} className='star-icon' />
                  <img src ={StarIcon} className='star-icon' />
                  <img src ={StarIcon} className='star-icon' />
                  <img src ={StarIcon} className='star-icon' />
                </div> 
              </div>
              <div className='review-card'>
                <div className='review-card--header'>
                  <h3>MIKE S.</h3>
                  <h3>BEVERLY HILLS, CA</h3>
                </div> 
                <div className='review-card--body'>
                  <p>

                 From the initial consultation to the final installation, the team  was professional, knowledgeable, and a pleasure to work with. The finished product is absolutely beautiful and has added so much to our home. We couldn't be happier with the service and quality of work provided by Art and Aro and would highly recommend them to anyone in need of glass railing services.
                  </p>
                </div> 
                <div className='review-card--footer'>
                  <img src ={StarIcon} className='star-icon' />
                  <img src ={StarIcon} className='star-icon' />
                  <img src ={StarIcon} className='star-icon' />
                  <img src ={StarIcon} className='star-icon' />
                  <img src ={StarIcon} className='star-icon' />
                </div> 
              </div>
          </div>
        </div>
        <div className='email--section layout--styles layout-420px' id='contact'>
              <div className='email-card'>
                <form onSubmit={submit}>
                  <div className='input--box'style={{ display:'flex', justifyContent:'space-between'}}>
                    <input 
                    className='input input-styles'
                    name='fullName'
                    type="text" 
                    placeholder='Name'
                    onChange={e => handleEmailInput(e)}
                    />
                    <input 
                    className='input input-styles'
                    type="text" 
                    name='phone'
                    placeholder='Phone'
                    onChange={e => handleEmailInput(e)}
                    />
                    <input 
                    className='input inpyt-styles'
                    type="text" 
                    name='email'
                    placeholder='Email'
                    onChange={e => handleEmailInput(e)}
                    />
                  </div>
                    <textarea 
                    className='textarea input-styles'
                    type="text" 
                    name='message'
                    rows={8}
                    placeholder='Message'
                    onChange={e => handleEmailInput(e)}
                    ></textarea>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <Button type='submit' className='btn--email-card'>SEND</Button>
                    </div>
                </form>
              </div>
        </div>
        <footer>
                <Nav.Link className='mx-2 text-uppercase font-size-2' href='#home'> Home</Nav.Link>
                <Nav.Link className='mx-2 text-uppercase font-size-2' href='#services'> Services</Nav.Link>
                <Nav.Link className='mx-2 text-uppercase font-size-2' href='#portfolio'> Portfolio</Nav.Link>   
                <Nav.Link className='mx-2 text-uppercase font-size-2' href='#contact'>Contact</Nav.Link>

                <div className='footer'>
                  <div>
                  <p>EMAIL: <a href="mailto: ar.crystalglass@gmail.com">ar.crystalglass@gmail.com</a></p>
                  <p><a href="tel:+18189668660">+1(818)966-8660</a></p>
                  </div>
                  <div className='loskutech--tag'>
                    <p>CREATED BY: LOSKUTECH</p>
                    <p><a href="mailto: loskutech@gmail.com">loskutech@gmail.com</a> </p>
                    <a href="http://www.loskutech.com">loskutech.com</a>
                  </div>
                </div>
        </footer>
    </div>
  )
}

export default Home