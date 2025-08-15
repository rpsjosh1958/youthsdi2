import Navbar from "../components/Navbar";
import '../css/home.css';
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Landing from "../components/Landing";
import Funds from "../components/Funds";
import BackToTop from "../components/BackToTop";

export default function Home() {
    return (
        <>
            <Navbar />
            {/* Hero Section with YSDI branding */}
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            The <span className="highlight">Youth Sustainable</span>
                            <br />
                            <span className="highlight">Development Initiative</span>
                            <br />
                        </h1>
                        <p className="hero-subtitle">The pathway to the future we crave</p>
                        <div className="hero-mission">
                            <p>Promoting peace and sustainable development by addressing global challenges and making basic needs explicitly at every child's disposal.</p>
                        </div>
                        <div className="hero-buttons">
                            <button className="btn btn-custom">Get Informed</button>
                            <button className="btn btn-custom btn-outline">Join Us</button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Vision and Mission Section */}
            <div className="vision-mission-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mission-card">
                                <h3>Mission</h3>
                                <p>Our mission is to promote peace and sustainable development by addressing global challenges and making basic needs explicitly at every child's disposal.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="vision-card">
                                <h3>Vision</h3>
                                <p>We envision a world where fundamental human rights are upheld and aligning our efforts with UN Goals and frame work to create a positive and lasting impact on a global scale.</p>
                            </div>
                        </div>
                    </div>
                    <div className="agenda-2030">
                        <h4>"AGENDA 2030"</h4>
                        <p>The Agenda 2030 is a constructive frame work designed by this organization to help in the best of our capacity to make sure that the United Nations Sustainable Development Goals 1,3,4 and 6 are achieved by 2030.</p>
                    </div>
                </div>
            </div>

            <Landing />
            <Initiatives />
            <Funds />
            <ContactForm />
            <Footer />
            <BackToTop />
        </>
    );
}