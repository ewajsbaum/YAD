import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../style/ShowProperty.css'
import { properties } from '../data/properties'

export function ShowProperty() {
    const { id } = useParams();
    const property = properties.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const onButtonClick = (brochure) => {
        const pdfUrl = `/brochures/${brochure}`;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', brochure); // Set the file name here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div className="propertyShowing">
                <div className="propertyType">{property.type}</div>
                <h1 className="propertyTitle">{property.title || property.address1}</h1>
                {property.address1b && <h1 className="propertyTitle">{property.address1b}</h1>}
                <h3 className="propertyCity">{property.city}</h3>
                <img className="propertyImage" src={property.images.main} alt={property.address1} />
            </div>
            <div className="infoSlice propertyDetails">
                <div>Property Details</div>
                <div className="propertyGla">
                    {property.detailsb && <div className="address">{property.address1}</div>}
                    {property.details.totalGLA && <div><span>Total GLA:</span> {property.details.totalGLA} square feet</div>}
                    {property.details.officeGLA && <div><span>Office GLA:</span> {property.details.officeGLA} square feet</div>}
                    {property.details.retailGLA && <div><span>Retail GLA:</span> {property.details.retailGLA} square feet</div>}
                </div>
                {property.detailsb &&
                    <div className="propertyGla">
                        <div className="address">{property.address1b}</div>
                        {property.detailsb.totalGLA && <div><span>Total GLA:</span> {property.detailsb.totalGLA} square feet</div>}
                        {property.detailsb.officeGLA && <div><span>Office GLA:</span> {property.detailsb.officeGLA} square feet</div>}
                        {property.detailsb.retailGLA && <div><span>Retail GLA:</span> {property.detailsb.retailGLA} square feet</div>}
                    </div>}
            </div>
            <div className="infoSlice propertyHighlights">
                <div>{property.highlights.map(h => <div>&#x2713;  {h}</div>)}</div>
                <img src={property.images.highlights} alt="highlights" className="secondaryImage" />
            </div>
            <div className="infoSlice propertyDescription">
                <img src={property.images.description} alt="description" className="secondaryImage" />
                <div>{property.description}</div>
            </div>
            {property.contact &&
                <div className="infoSlice propertyContact">
                    <div>Contact</div>
                    <div className="individualContact">
                        {property.contact.map(c => <div>
                            <div className="contactName">{c.name}</div>
                            <div>{c.email}</div>
                            {c.direct && <div>direct:  {c.direct}</div>}
                            {c.mobile && <div>mobile:  {c.mobile}</div>}
                            {c.main && <div>main:  {c.main}</div>}
                        </div>)}
                    </div>
                </div>
            }
            {(property.contact || property.brochure) &&
                <div className="infoSlice propertyBrochure">
                    {property.brochure &&
                        <div onClick={() => onButtonClick(property.brochure)}>
                            Download Brochure
                        </div>
                    }
                </div>
            }

            <div className="infoSlice propertyLocation">
                <div>{property.address1}<br />{property.address2}</div>
                <iframe className="propertyMap" title={property.id} src={property.map} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            {
                property.address1b &&
                <div className="infoSlice propertyLocation secondMap">
                    <iframe className="propertyMap" title={property.id} src={property.mapb} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <div>{property.address1b}<br />{property.address2b}</div>
                </div>
            }
        </div >
    )
}
