import React from 'react'
import { IonContent, IonPage, IonList, IonButton, IonSlides, IonSlide, IonHeader, IonToolbar, IonRow, IonCol } from '@ionic/react'
import Logo from '../components/icons/logo_c.png'

import './Page.css';


export const Initial: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='primary'></IonToolbar>
            </IonHeader>
            <IonContent>

                <div className='slideContainer'>
                    <IonList>
                        <img src={Logo} />
                        <p >Olá! Seja bem vindo ao Finmind, o App que auxiliará sua empresa a tomar decisões no
                       âmbito financeiro com base em informações fornecidas pelos relatórios desenvolvidos pela Contabilidade.</p>
                    </IonList>
                    <IonRow>
                        <IonCol>
                        <IonButton href='\home' size='default' shape='round'>Iniciar</IonButton>
                            
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                        <IonButton href='\tutorial' size='default' fill='default' shape='round' color='primary' >Tutorial</IonButton>
                        </IonCol>
                    </IonRow>
                </div>
            </IonContent>

        </IonPage>


    );
};

export default Initial;