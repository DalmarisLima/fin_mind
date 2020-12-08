import React from 'react'
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import Header from '../../components/HeaderHome'
import IconeE from '../../components/icons/icons/ce.png'
import IconeP from '../../components/icons/icons/gcp.png'
import IconeT from '../../components/icons/icons/pct.png'

import '../Page.css'


const Endevidamento: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <h1>Indicadores de Endividamento</h1>
                <IonGrid>
                    <div className="container">
                        <IonRow>
                            <IonCol>
                                <IonCard className='card' href="/PCT" >
                                    <IonCardContent>
                                        <img src={IconeT} />

                                        <p>Participação de Capital de Terceiros</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className='card' href="/GCP">
                                    <IonCardContent>
                                        <img src={IconeP} />

                                        <p>Garantia de Capital Próprio ao Capital de Terceiros </p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className='card' href="/CE">
                                    <IonCardContent>
                                        <img src={IconeE} />

                                        <p>Composição de Endividamento </p>

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

export default Endevidamento;