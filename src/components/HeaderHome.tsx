import React from 'react'
import { IonHeader, IonToolbar } from '@ionic/react'
import Logo from './icons/logo_br.png'


export const Header: React.FC = () => (
    <>
        <IonHeader>
            <IonToolbar color= 'primary'><img className='logo' src={Logo} /></IonToolbar>
        </IonHeader>
    </>
);

export default Header;