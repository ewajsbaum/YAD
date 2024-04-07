import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../style/Properties.css'
import { properties } from '../data/properties'

export function Property() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div>
            <div className="propertiesHero">
                <div className="propertiesHeroText">
                    <div>More than four walls. </div>
                    <div className="propertiesHeroTextBold">A space that supports your growth.</div>
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
                            <Link className="propertyTextLink" to={`${p.id}`}>VIEW PROPERTY →</Link>
                        </div>
                    )
                }
            </div>

        </div>
    )
}
