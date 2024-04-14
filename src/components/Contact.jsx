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
                <button onClick={() => window.location.href = 'https://github.com/buennoo'}><Discord/></button>
                <button onClick={() => window.location.href = 'https://github.com/buennoo'}><Facebook/></button>
                <button onClick={() => window.location.href = 'https://github.com/buennoo'}><Instagram/></button>
            </div>
        </div>  
    );
}