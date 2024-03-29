import { Container } from 'react-bootstrap'
import './contact.scss'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Contact = () => {
    return (
        <Container className="contact-container">
            <h3 data-aos="fade-up">CONTACT</h3>
            <h2 data-aos="fade-up">Don't be shy! Hit me up! 👇</h2>
            <div className="info-container">
                <div className="item">
                    <div className="logo" data-aos="flip-up">
                        <FaMapMarkedAlt />
                    </div>
                    <div className="info" data-aos="zoom-in-up">
                        <h3>Location</h3>
                        <a href="https://www.google.com/maps/place/Szczecin/@53.4297874,14.4598197,11z/data=!3m1!4b1!4m6!3m5!1s0x47aa093800d3a759:0xa95adc4e5f8ac4f3!8m2!3d53.4285438!4d14.5528116!16zL20vMDcxZzY?hl=pl-PL&entry=ttu">
                            Szczecin, Poland
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="logo" data-aos="flip-up">
                        <FiMail />
                    </div>
                    <div className="info" data-aos="zoom-in-up">
                        <h3>Mail</h3>
                        <a href="mailto: gracjanprusik.web@gmail.com">gracjanprusik.web@gmail.com</a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contact
