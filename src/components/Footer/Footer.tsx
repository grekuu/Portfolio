import { Container } from 'react-bootstrap'
import './footer.scss'
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="footer-container" id="contact">
            <Container className="content-container">
                <div className="copyright">©{currentYear} All rights reserved.</div>
                <div className="socials">
                    <a href="https://github.com/grekuu">
                        <AiOutlineGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/gracjan-prusik-b12041251/">
                        <AiFillLinkedin />
                    </a>
                </div>
            </Container>
        </div>
    )
}

export default Footer
