import { useState, useEffect, useRef } from 'react'
import '../style/Properties.css'
import { properties } from '../data/properties'
import { ShowProperty } from '../components/ShowProperty'

export function Property() {
    const [showProperty, setShowProperty] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const propertySelected = useRef(null);

    const scrollToSection = (elementRef, p) => {
        setShowProperty(p);
        if (elementRef.current) {
            window.scrollTo({
                top: elementRef.current.offsetTop,
                behavior: "smooth"
            });
        }
    };


    return (
        <div>
            <div className="propertiesHero">
                <div className="propertiesHeroText">
                    <div>It’s more than four walls. </div>
                    <div className="propertiesHeroTextBold"> It’s a space that supports your growth.</div>
                </div>
                <div className="propertiesHeroImage" />
            </div>
            <div className="properties">
                {
                    properties &&
                    properties.map(p =>
                        <div className="property">
                            <img src={p.images?.thumbnail} alt="propertyImg" />
                            <div className="propertyText">
                                <div>{p.address1}</div>
                                {p.address1b && <div>{p.address1b}</div>}
                            </div>
                            <div className="propertyTextLink" onClick={() => scrollToSection(propertySelected, p)}>VIEW PROPERTY →</div>
                        </div>
                    )
                }
            </div>

            <div ref={propertySelected}> {showProperty && <ShowProperty property={showProperty} />}</div>

        </div>
    )
}
