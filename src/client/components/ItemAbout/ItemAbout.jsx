import React from 'react'
import { Item, Icon } from 'semantic-ui-react'

const ItemAbout = () => (
    <div className="itemContainer">
        <Item.Group>
            <Item>
                <Item.Content>
                    <div className="infos">
                        <Item.Header>Informations :</Item.Header>
                        <Item.Description>
                        <ul>
                            <li><Icon name="id card outline"/> Prénom           : Logan</li>
                            <li><Icon name="id card outline"/> Nom              : Wilquin</li>
                            <li><Icon name="id card outline"/> Âge              : 20 ans (25 septembre 1997)</li>
                            <li><Icon name="world"/> Origine(s)       : Français </li>
                            <li><Icon name="flag outline"/> Nationalitée     : Française</li>
                        </ul>
                        </Item.Description>
                    </div>
                    <div className="se">
                        <Item.Header>Savoir être :</Item.Header>
                            <Item.Description>
                            <ul>
                                <li><Icon name="users"/> Sociable</li>
                                <li><Icon name="smile outline"/> Aimable</li>
                                <li><Icon name="handshake outline"/> Serviable</li>
                                <li><Icon name="pencil"/> Créatif</li>
                                <li><Icon name="question"/> Curieux</li>
                                <li><Icon name="hand peace outline"/> Motivé</li>
                                <li><Icon name="heart outline"/> Passioné</li>
                            </ul>
                        </Item.Description>
                    </div>
                </Item.Content>
            </Item>
        </Item.Group>
    </div>
)

export default ItemAbout