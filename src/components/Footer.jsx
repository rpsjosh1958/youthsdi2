import '../css/footer.css';

export default function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>
                            <a href="https://maps.app.goo.gl/AccraGhana" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-map-marker-alt"></i>Accra, Ghana</p></a>
                            <a href="tel:+233500574435"><p><i className="fa fa-phone"></i>+233 50 057 4435</p></a>
                            <a href="mailto:info@youthsdi.com"><p><i className="fa fa-envelope"></i>info@youthsdi.com</p></a>
                            <div className="footer-social">
                                <a className="btn btn-custom" href="https://twitter.com/SD_Initiative17"><i className="fab fa-x-twitter"></i></a>
                                <a className="btn btn-custom" href="https://www.facebook.com/YouthSDI"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-custom" href="https://www.instagram.com/youthsdi/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-custom" href="https://www.youtube.com/channel/YouthSDI"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-custom" href="https://www.linkedin.com/company/youth-sustainable-development-initiative/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/event">Popular Causes</a>
                            <a href="/event">Upcoming Events</a>
                            <button type="button" className="btn-link">Latest Blog</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Useful Links</h2>
                            <button type="button" className="btn-link">Terms of use</button>
                            <button type="button" className="btn-link">Privacy policy</button>
                            <button type="button" className="btn-link">Cookies</button>
                            <button type="button" className="btn-link">Help</button>
                            <button type="button" className="btn-link">FQAs</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form name='NewsLetter'>
                                <input name='subscribe' className="form-control" placeholder="Email goes here" autoComplete='email' required/>
                                <button className="btn btn-custom">Submit</button>
                                <h6>Don't worry, we don't spam!</h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <span>Youth Sustainable Development Initiative</span> | 2024, All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="https://www.linkedin.com/in/bhavesh-patil-92b7aa22a">RPSJOSH</a></p>
                    </div>
                </div>
            </div>
        </ div>
    );
}