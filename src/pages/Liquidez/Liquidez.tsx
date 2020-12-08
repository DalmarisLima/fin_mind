import React from 'react'
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import Header from '../../components/HeaderHome'
import IconeC from '../../components/icons/icons/lc.png'
import IconeG from '../../components/icons/icons/lg.png'

import '../Page.css'


const Liquidez: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <h1>Indicadores de Liquidez</h1>
                <IonGrid>
                    <div className="container">
                        <IonRow>
                            <IonCol>
                                <IonCard className='card' href="/lg">
                                    <IonCardContent>
                                        <img src={IconeG} />

                                        <p>Liquidez Geral</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className='card' href="/lc">
                                    <IonCardContent>
                                        <img src={IconeC} />

                                        <p>Liquidez Corrente</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                        <IonButton color= 'light' shape="round" size='default' href="/home" fill='default'>Voltar</IonButton>
                    </div>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Liquidez;