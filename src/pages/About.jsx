import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Funds from '../components/Funds';
import PageHeader from "../components/PageHeader";
import ysdiLogo from '../assets/ysdi logo.png';
import aboutUsData from '../data/aboutUs.json';
import summitImg from '../assets/Initiatives/Model African Union Summit 2.jpg';
import orphanageImg from '../assets/Initiatives/Donation to the NewLife Orphanage Home.jpg';
import sunriseImg from '../assets/Initiatives/Model African Union Summit 5.jpg';
import { FaPeace } from "react-icons/fa";
import { IoLeafSharp, IoEyeSharp, IoPeopleSharp } from "react-icons/io5";
import { FaEarthAfrica, FaBullseye } from "react-icons/fa6";

export default function About() {
    const { aboutUs } = aboutUsData;
    // Helper to render Ionicons dynamically
    const getIonicon = (icon) => {
        switch (icon) {
            case 'earth-outline':
                return <FaEarthAfrica size={32} color="#1a3c40" />;
            case 'leaf-outline':
                return <IoLeafSharp size={32} color="#1a3c40" />;
            case 'peace-outline':
                return <FaPeace size={32} color="#1a3c40" />;
            default:
                return null;
        }
    };

    // Icons for mission, vision, core values
    const missionIcon = <FaBullseye size={22} color="#1a3c40" style={{marginRight: 8, verticalAlign: 'middle'}} />;
    const visionIcon = <IoEyeSharp size={22} color="#1a3c40" style={{marginRight: 8, verticalAlign: 'middle'}} />;
    const coreValuesIcon = <IoPeopleSharp size={22} color="#1a3c40" style={{marginRight: 8, verticalAlign: 'middle'}} />;
    return (
        <>
            <Navbar />
            <PageHeader title={aboutUs.title || "About Us"} path="/about" name={aboutUs.title || "About Us"} />
            {/* YSDI Logo Section */}
            <section style={{ textAlign: 'center', padding: '3rem 0 2rem 0', background: 'linear-gradient(90deg, #f8f9fa 60%, #e3f6f5 100%)' }}>
                <img 
                    src={ysdiLogo} 
                    alt="Youth Sustainable Development Initiative Logo" 
                    style={{ maxWidth: 320, height: 'auto', margin: '0 auto', display: 'block', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.13)'}}
                />
                
                <p style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.15rem', color: '#333', lineHeight: 1.7, paddingTop: 25 }}>{aboutUs.description}</p>
            </section>

            {/* Our Story */}
            <section style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 32, padding: '3rem 0', background: '#fff' }}>
                <div style={{ flex: 1, minWidth: 300, maxWidth: 540 }}>
                    <h2 style={{ color: '#1a3c40', fontWeight: 600, fontSize: '2rem', marginBottom: 16 }}>{aboutUs.story.title}</h2>
                    <p style={{ color: '#444', fontSize: '1.08rem', lineHeight: 1.7 }}>{aboutUs.story.content}</p>
                </div>
                <img src={summitImg} alt="Model African Union Summit" style={{ flex: 1, minWidth: 260, maxWidth: 400, borderRadius: 14, boxShadow: '0 4px 18px rgba(0,0,0,0.10)' }} />
            </section>

            {/* Impact Areas */}
            <section style={{ background: 'linear-gradient(90deg, #e3f6f5 60%, #f8f9fa 100%)', padding: '3rem 0' }}>
                <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: '#1a3c40', fontWeight: 600, fontSize: '2rem', marginBottom: 24 }}>{aboutUs.impactAreas.title}</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', marginBottom: 24 }}>
                        {aboutUs.impactAreas.areas.map((area, idx) => (
                            <div key={idx} style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 24, minWidth: 260, maxWidth: 320, flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
                                <span style={{ fontSize: 32 }}>{getIonicon(area.icon)}</span>
                                <h3 style={{ color: '#1a3c40', fontWeight: 500, fontSize: '1.2rem', margin: 0 }}>{area.name}</h3>
                                <p style={{ color: '#444', fontSize: '1rem', margin: 0 }}>{area.description}</p>
                            </div>
                        ))}
                    </div>
                    <img src={orphanageImg} alt="YSDI Orphanage Donation" style={{ width: '100%', maxWidth: 500, borderRadius: 14, boxShadow: '0 4px 18px rgba(0,0,0,0.10)', margin: '2rem auto 0', display: 'block' }} />
                    <p style={{ color: '#333', fontSize: '1.08rem', marginTop: 32 }}>{aboutUs.impactAreas.footer}</p>
                </div>
            </section>

            {/* Mission, Vision, Core Values */}
            <section style={{ background: '#fff', padding: '3rem 0' }}>
                <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
                    <div style={{ flex: 1, minWidth: 260, maxWidth: 350, background: '#e3f6f5', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
                        <h3 style={{ color: '#1a3c40', fontWeight: 600, fontSize: '1.15rem', marginBottom: 10 }}>{missionIcon}{aboutUs.mission.title}</h3>
                        <p style={{ color: '#444', fontSize: '1rem', margin: 0 }}>{aboutUs.mission.content}</p>
                    </div>
                    <div style={{ flex: 1, minWidth: 260, maxWidth: 350, background: '#f8f9fa', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
                        <h3 style={{ color: '#1a3c40', fontWeight: 600, fontSize: '1.15rem', marginBottom: 10 }}>{visionIcon}{aboutUs.vision.title}</h3>
                        <p style={{ color: '#444', fontSize: '1rem', margin: 0 }}>{aboutUs.vision.content}</p>
                    </div>
                    <div style={{ flex: 1, minWidth: 260, maxWidth: 350, background: '#e3f6f5', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
                        <h3 style={{ color: '#1a3c40', fontWeight: 600, fontSize: '1.15rem', marginBottom: 10 }}>{coreValuesIcon}{aboutUs.coreValues.title}</h3>
                        <ul style={{ color: '#444', fontSize: '1rem', margin: 0, paddingLeft: 18 }}>
                            {aboutUs.coreValues.values.map((val, idx) => (
                                <li key={idx} style={{ marginBottom: 6, listStyle: 'disc inside' }}>{val}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <img src={sunriseImg} alt="Sunrise" style={{ width: '100%', maxWidth: 500, borderRadius: 14, boxShadow: '0 4px 18px rgba(0,0,0,0.10)', margin: '2.5rem auto 0', display: 'block' }} />
            </section>

            <Landing />
            <Funds />
            <Footer />
            <BackToTop />
        </>
    );
}