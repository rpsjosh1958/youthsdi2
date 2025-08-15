import '../css/landing.css';
import main from '../assets/LandImg.png';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();
    return(
        <div className="landing">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="landing-content">
                            <div className="caption1">
                                <hr />
                                <h4>YOUTH SUSTAINABLE DEVELOPMENT INITIATIVE</h4>
                            </div>
                            <div className="caption2">
                                <h2>Empowering <span>youth</span> to create a <span>sustainable future</span> for all</h2>
                            </div>
                            <div className="caption3">
                                <p>"Africa is the only continent that is still giving people the opportunity to create. We still have the resources, we still have the virgin dexterities which are yet to be deployed. Let us do the best we can to create a sustainable future. The future is indeed exciting." - Evison</p>
                            </div>
                            <div className="btns">
                                <button onClick={() => navigate("/about")} type="button" className="btn btn-custom btn-outline">Know More</button>
                                <button type="button" className="btn btn-custom" onClick={()=>navigate("/donate")}>Support Our Cause</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="landing-image">
                            <img src={main} alt="Youth empowerment and sustainable development" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}