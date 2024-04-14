import { Link } from 'react-router-dom'
import { Discord, Facebook, Instagram } from 'react-bootstrap-icons';
import '../styles/Contact.css';

export default function Contact() {
    return (
        <div class="contact">
            <h2>
                Contact
            </h2>
            <p>
                Contact info
            </p>
            <div class="contact-socials">
                <Link to='/contact'><Discord/></Link>
                <Link to='/contact'><Facebook/></Link>
                <Link to='/contact'><Instagram/></Link>
            </div>
        </div>  
    );
}