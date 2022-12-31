import React from 'react'
import Button from 'react-bootstrap/Button'
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
import AdviceIcon from '../assets/icons/advise.png'
import CalendarItem from '../assets/icons/calendar.png'
import EstimateIcon from '../assets/icons/estimate.png'
import HouseIcon from '../assets/icons/house.png'
import LiscenceIcon from '../assets/icons/liscense.png'
import MoneyBackIcon from '../assets/icons/money back.png'
import MoneyIcon from '../assets/icons/money.png'
import VacuumIcon from '../assets/icons/vacuum.png'

function Home() {
  return (
    <div>
        <TopNav />
        <div className='layout--styles hero--section'>
          <h1 className='font-size-5 text-center'>CRYSTAL GLASS GLAZING</h1>
          <Button className='btn--large'>CLICK ME</Button>
        </div>
        <div className='layout--styles d-flex justify-content-between p-5 layout-420px' >
          <div className='w-50  text-center width-420px p-5 padding-5px--420px'>
            <h5 className='color--red' >TRUSTED PROFESSIONALS</h5>
            <h2>Glazing or Railing?
Get It Done By The best!</h2>
            <p>Crystal glass and glazing offers quality railing    and glazing services in Los Angeles and the San Gabriel/San Fernando Valley.Our company has been dedicated to providing skilled, reliable railing services to the area. <br />
        We’ve been providing exceptional installation, repair, and  replacement services for all glass needs.We take pride in being locally owned and operated. <br />under

         Our team is composed of licensed and highly trained professionals who can handle all residential and commercial glassing repairs and services. When you work with the experts at Crystal Glass and Glazing, you can rest assured you’re receiving top of the line service that is unmatched. </p>
          </div>
          <div className='w-50 d-flex justify-content-center width-420px'>
            <img src={AboutUsPic} style={{width:'100%'}} className='img-420px'/>
          </div>
        </div>
        <div className='our-services--section layout--styles'>
          <div>
            <h2 className='text-center'>Our Services</h2>
            <p className='font-size-2'>We provide services and products that set high standarts for qualitty, reliability, durability and value for money</p>
          </div>
          <div className='flex-container-row w-100 p-5 h-75'> 
            <Card style={{width:'18rem', height:'100%'}}>
              <Card.Img src={ShowerDoorPhoto}  style={{objectFit:'cover', height:"90%"}}/>
              <Card.Body>
               <Card.Title className='text-center font-size-2 text-uppercase color--black'>Shower doors</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{width:'18rem', height:'100%'}}>
            <Card.Img src={StairsPhoto}  style={{objectFit:'cover', height:"90%"}}/>
              <Card.Body>
               <Card.Title className='text-center font-size-2 text-uppercase color--black'>Glass Railing</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{width:'18rem', height:'100%'}}>
            <Card.Img src={MirrorPhoto}  style={{objectFit:'cover', height:"90%"}}/>
              <Card.Body>
               <Card.Title className='text-center font-size-2 text-uppercase color--black'>Custom Mirrors</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{width:'18rem', height:'100%'}}>
            <Card.Img src={FloatingStairsPhoto}  style={{objectFit:'cover', height:"90%"}}/>
              <Card.Body>
               <Card.Title className='text-center font-size-2 text-uppercase color--black'>Floating stairs</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div>
          <div className='layout--styles why-choose-us--section'>

            <h2 className='text-center'>Our Services</h2>
            <Container style={{width:'100%', heighth:'80%'}}>
              <Row style={{height:"50%"}}>
                <Col className='why-choose-us--icons text-center' style={{height:'100%'}}>
                  <img src = {AdviceIcon} style={{width:"70%", height:"80%", marginBottom:'20px'}} />
                  <p>blah blach blah blac  </p>
                </Col>
                <Col className='why-choose-us--icons' style={{height:'100%'}}>
                  <img src = {CalendarItem} style={{width:"70%", height:"80%"}}/>
                  </Col>
                <Col className='why-choose-us--icons' style={{height:'100%'}}>
                  <img src = {EstimateIcon} style={{width:"70%", height:"80%"}}/>
                  </Col>
                <Col className='why-choose-us--icons' style={{height:'100%'}}>
                  <img src = {HouseIcon} style={{width:"70%", height:"80%"}}/>
                  </Col>
              </Row>
              <Row style={{height:"50%"}}>
                <Col className='why-choose-us--icons' style={{height:'100%'}}>
                  <img src = {LiscenceIcon} style={{width:"70%", height:"80%"}}/>
                  </Col>
                <Col className='why-choose-us--icons' style={{height:'100%'}}>
                  <img src = {MoneyBackIcon} style={{width:"70%", height:"80%"}}/
                  ></Col>
                <Col className='why-choose-us--icons' style={{height:'100%'}}>
                  <img src = {MoneyIcon} style={{width:"70%", height:"80%"}}/>
                  </Col>
                <Col className='why-choose-us--icons' style={{height:'100%'}}>
                  <img src = {VacuumIcon} style={{width:"70%", height:"80%"}}/></
                  Col>
              </Row>
            </Container>
          </div>
        </div>
    </div>
  )
}

export default Home