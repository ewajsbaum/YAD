import spadina197 from '../images/properties/197Spadina.jpg'
import adelaide from '../images/properties/featuredProperties/345Adelaide.jpg'
import adelaideMain from '../images/properties/345Adelaide/main.jpg'
import adelaideHighlights from '../images/properties/345Adelaide/highlights.jpg'
import adelaideDecription from '../images/properties/345Adelaide/description.jpg'
import spadina129 from '../images/properties/featuredProperties/129Spadina.jpg'
import spadina129Main from '../images/properties/129Spadina/main.jpg'
import spadina129Highlights from '../images/properties/129Spadina/highlights.jpg'
import spadina129Description from '../images/properties/129Spadina/description.jpg'
import king from '../images/properties/featuredProperties/590King.jpg'
import kingMain from '../images/properties/590King/main.jpg'
import kingDescription from '../images/properties/590King/description.jpg'
import kingHighlights from '../images/properties/590King/highlights.jpg'

export const properties = [
    {
        "id": "197_spadina",
        "address1": "197 Spadina Avenue",
        "images": { "thumbnail": spadina197 },
        "type": "office, retail",
        "city": "Toronto",
        "description": "The property at 197 Spadina originally housed the Empire Clothing Company, a men’s clothing manufacturer and wholesaler. Designed and built by noted architect Benjamin Brown in 1923, the property still retains its distinctive architectural character, while boasting newly renovated and functional interiors.",
        "details": {
            "totalGLA": 70000,
            "officeGLA": 60000,
            "retailGLA": 10000
        },
        "highlights": [
            "Newly renovated", "Brick and beam", "Parking available", "New elevators", "A/C exclusive to each unit", "New electical", "Updated washrooms", "Attractive, updated lobby", "Security cameras and card access"
        ],
        "address2": "Toronto, ON M5T 2C8",
        "map": "https://maps.google.com/maps?q=197+Spadina+Avenue%2C+To&t=&z=17&ie=UTF8&iwloc=&output=embed"
    },
    {
        "id": "129_spadina",
        "address1": "129 Spadina Avenue",
        "images": { "thumbnail": spadina129, "main": spadina129Main, "highlights": spadina129Highlights, "description": spadina129Description },
        "type": "office, retail",
        "city": "Toronto",
        "description": "Displaying the original date stone from 1919, both the interiors and the exterior of 129 Spadina provide a distinctive urban feel. Original brickwork and stone detailing represent the classic architecture of the time, reflecting the industrial roots of the area in both origin and visual character.",
        "details": {
            "totalGLA": 65000,
            "officeGLA": 57000,
            "retailGLA": 8000
        },
        "highlights": [
            "High ceilings", "Brick and beam", "New elevators", "Operable windows", "A/C exclusive to each unit", "New electical", "Updated washrooms", "Attractive, updated lobby", "Security cameras and card access"
        ],
        "contact": [
            {
                "name": "Thomas Muha",
                "email": "tom.muha@colliers.com",
                "direct": "416 643 3412",
                "mobile": "416 878 1732"
            },
            {
                "name": "Chris Fyvie",
                "email": "Chris.Fyvie@colliers.com",
                "direct": "416 643 3713",
                "mobile": "416 992 9869",
                "main": "416 777 2200"
            },
            {
                "name": "Toby Tobiason",
                "email": "Toby.Tobiason@colliers.com",
                "direct": "416 643 3459",
                "mobile": "416 271 8629",
                "main": "416 777 2200"
            },
            {
                "name": "Taylor Tobiason",
                "email": "Taylor.Tobiason@colliers.com",
                "direct": "416 643 3429",
                "mobile": "416 204 0332",
                "main": "416 777 2200"
            }
        ],
        "brochure": "129Spadina.pdf",
        "address2": "Toronto, ON M5V 2L3",
        "map": "https://maps.google.com/maps?q=129+Spadina+Ave%2C+Toronto&t=&z=17&ie=UTF8&iwloc=&output=embed"
    },
    {
        "id": "345_adelaide",
        "address1": "345 Adelaide Street W",
        "images": { "thumbnail": adelaide, "main": adelaideMain, "description": adelaideDecription, "highlights": adelaideHighlights },
        "type": "office, retail",
        "city": "Toronto",
        "description": "Built by prominent Toronto architect George Gouinlock in 1914, the building housed the original headquarters of the Hugh MacLean Company, precursor to Canadian media company, Maclean-Hunter. Conveniently located, the property combines both versatile interiors and easy access to transit and local amenities.",
        "details": {
            "totalGLA": 48000,
            "officeGLA": 39000,
            "retailGLA": 9000
        },
        "highlights": [
            "High ceilings", "Brick and beam", "Monthly parking available", "New elevators", "Operable windows", "A/C exclusive to each unit", "New electical", "Updated washrooms", "Attractive, updated lobby", "Security cameras and card access"
        ],
        "contact": [
            {
                "name": "Thomas Muha",
                "email": "tom.muha@colliers.com",
                "direct": "416 643 3412",
                "mobile": "416 878 1732"
            },
            {
                "name": "Chris Fyvie",
                "email": "Chris.Fyvie@colliers.com",
                "direct": "416 643 3713",
                "mobile": "416 992 9869",
                "main": "416 777 2200"
            },
            {
                "name": "Toby Tobiason",
                "email": "Toby.Tobiason@colliers.com",
                "direct": "416 643 3459",
                "mobile": "416 271 8629",
                "main": "416 777 2200"
            },
            {
                "name": "Taylor Tobiason",
                "email": "Taylor.Tobiason@colliers.com",
                "direct": "416 643 3429",
                "mobile": "416 204 0332",
                "main": "416 777 2200"
            }
        ],
        "brochure": "345Adelaide.pdf",
        "address2": "Toronto, ON M5V 1R5",
        "map": "https://maps.google.com/maps?q=345+adelaide+&t=&z=17&ie=UTF8&iwloc=&output=embed"
    },
    {
        "id": "590_king_473_adelaide",
        "address1": "590 King Street W",
        "address1b": "473 Adelaide Street W",
        "images": { "thumbnail": king, "main": kingMain, "description": kingDescription, "highlights": kingHighlights },
        "type": "office, retail",
        "city": "Toronto",
        "description": "Completed between 1902-1911, the buildings at 590 King West and 473 Adelaide originally housed the Kodak company’s flagship Canadian location before being converted into a garment factory. With easy transit access and ample signage opportunity, the property combines historical relevance with contemporary function.",
        "details": {
            "totalGLA": 61000,
            "officeGLA": 36000,
            "retailGLA": 25000
        },
        "detailsb": {
            "totalGLA": 90000,
            "officeGLA": 54000,
            "retailGLA": 36000
        },
        "highlights": [
            "High ceilings", "Brick and beam", "New elevators", "Operable windows", "New electical", "Attractive, updated lobby", "New A/C", "Security cameras and card access", "Updated washrooms", "Parking Available"
        ],
        "contact": [
            {
                "name": "Mike Brouwer",
                "email": "mike.brouwer@avisonyoung.com",
                "mobile": "416 505 7615"
            },
            {
                "name": "Brett Armstrong",
                "email": "brett.armstrong@avisonyoung.com",
                "mobile": "416 704 7667",
                "main": "416 673 4041"
            },
        ],
        "brochure": "590King.pdf",
        "address2": "Toronto, ON M5V 1M3",
        "address2b": "Toronto, ON M5V 1T1",
        "map": "https://maps.google.com/maps?q=590+King+street+west%2C+toronto&t=&z=17&ie=UTF8&iwloc=&output=embed",
        "mapb": "https://maps.google.com/maps?q=473+adelaide+&t=&z=17&ie=UTF8&iwloc=&output=embed"
    },
    {
        "id": "deer_run_shopping_center",
        "title": "Deer Run Shopping Center",
        "address1": "4040 Creditview Road",
        "images": {},
        "type": "retail",
        "city": "Mississauga",
        "description": "Anchored by Fresh Palace grocery, the shopping center hosts an established collection of leading brands, generating steady, consistent foot traffic. Conveniently situated, it attracts both residential and commercial clientele and provides close transit access.",
        "details": {
            "retailGLA": 85000
        },
        "highlights": [
            "Erindale CO Station behind the plaza", "CIBC Bank", "Tim Hortons", "Medical offices", "Residential and commercial clientele in its trading area", "Parking: 500 spots"
        ],
        "contact": [
            {
                "name": "Stan",
                "main": "416 977 7781"
            },
        ],
        "address2": "Mississauga, ON L5C 4E3",
        "map": "https://maps.google.com/maps?q=440+creditview+road%2C+missi&t=&z=17&ie=UTF8&iwloc=&output=embed"
    }
]