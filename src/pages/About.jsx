import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Funds from '../components/Funds';
import PageHeader from "../components/PageHeader";
import ysdiLogo from '../assets/ysdi logo.png';

export default function About() {
    return (
        <>
            <Navbar />
            <PageHeader title="About Us" path="/about" name="About Us" />
            
            {/* YSDI Logo Section */}
            <div className="logo-section" style={{ textAlign: 'center', padding: '3rem 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <img 
                        src={ysdiLogo} 
                        alt="Youth Sustainable Development Initiative Logo" 
                        style={{ 
                            maxWidth: '1000px', 
                            height: 'auto', 
                            margin: '0 auto',
                            display: 'block',
                            borderRadius: '10px',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                        }} 
                    />
                </div>
            </div>
            
            <Landing />
            <Funds />
            <Footer />
            <BackToTop />
        </>
    );
}