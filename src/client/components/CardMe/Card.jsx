import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardMe = () => (
<div className="cardContainer">
    <Card>
        <Image src='https://i.pinimg.com/originals/b2/d1/11/b2d111a4a3a907d3506a7676687bf9cd.jpg' />
        <Card.Content>
        <Card.Header>Wilquin Logan</Card.Header>
        <Card.Meta>
            <span className='statut'>Développeur Web & Mobile</span>
        </Card.Meta>
        <Card.Description>
            <ul className='infos'>
                <li>
                    <Icon name="phone square"/>
                    06.66.56.60.80
                </li>
                <li>
                    <Icon name="mail"/>
                    logan.wilquin@foxhub.fr
                </li>
                <li>
                    <Icon name="github"/>
                    <a href="http://github.com/skullyfox">
                        http://github.com/skullyfox
                    </a>
                </li>
                <li>
                    <Icon name="linkedin"/>
                    <a href="https://www.linkedin.com/in/logan-wilquin-080238153/">
                        https://www.linkedin.com/in/logan-wilquin-080238153/
                    </a>
                </li>
                <li>
                    <Icon name="instagram"/>
                    <a href="https://www.instagram.com/sullivan_wilquin/">
                        https://www.instagram.com/sullivan_wilquin/
                    </a>
                </li>
            </ul>
        </Card.Description>
        </Card.Content>
    </Card>
</div>
)

export default CardMe