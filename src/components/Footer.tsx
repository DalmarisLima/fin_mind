import React from 'react'
import { IonContent, IonFooter, IonToolbar } from '@ionic/react'

interface FooterProps {
    text: string;
}

export const Footer: React.FC<FooterProps> = ({ text }) => (
    <>
        <IonContent>
            <IonFooter>
                <IonToolbar>
                    {text}
                </IonToolbar>
            </IonFooter>
        </IonContent>
    </>
);

export default Footer;