import '../css/funds.css';
import { useState, useEffect, useRef } from 'react';

export default function Funds() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [youthCount, setYouthCount] = useState(0);
    const [communityCount, setCommunityCount] = useState(0);
    const [sdgCount, setSdgCount] = useState(0);
    const sectionRef = useRef(null);

    // Intersection Observer to trigger animation when section comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.5 }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        // Animate Youth Empowered (1000+)
        let youthCurrent = 0;
        const youthTarget = 1000;
        const youthIncrement = youthTarget / 100;
        const youthTimer = setInterval(() => {
            youthCurrent += youthIncrement;
            if (youthCurrent >= youthTarget) {
                setYouthCount(youthTarget);
                clearInterval(youthTimer);
            } else {
                setYouthCount(Math.floor(youthCurrent));
            }
        }, 20);

        // Animate Communities Reached (50+)
        let communityCurrent = 0;
        const communityTarget = 50;
        const communityIncrement = communityTarget / 50;
        const communityTimer = setInterval(() => {
            communityCurrent += communityIncrement;
            if (communityCurrent >= communityTarget) {
                setCommunityCount(communityTarget);
                clearInterval(communityTimer);
            } else {
                setCommunityCount(Math.floor(communityCurrent));
            }
        }, 40);

        // Animate UN SDGs Focused (4)
        let sdgCurrent = 0;
        const sdgTarget = 4;
        const sdgTimer = setInterval(() => {
            sdgCurrent++;
            if (sdgCurrent >= sdgTarget) {
                setSdgCount(sdgTarget);
                clearInterval(sdgTimer);
            } else {
                setSdgCount(sdgCurrent);
            }
        }, 300);
    };

    return(
        <div className="funds" ref={sectionRef}>
            <div className="container">
                <div className="impact-stats">
                    <div className="stat">
                        <div className="stat-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="stat-content">
                            <h5>{youthCount}+</h5>
                            <p>Youth Empowered</p>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-icon">
                            <i className="fas fa-home"></i>
                        </div>
                        <div className="stat-content">
                            <h5>{communityCount}+</h5>
                            <p>Communities Reached</p>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-icon">
                            <i className="fas fa-globe"></i>
                        </div>
                        <div className="stat-content">
                            <h5>{sdgCount}</h5>
                            <p>UN SDGs Focused</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}