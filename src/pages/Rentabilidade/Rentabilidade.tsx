import React from 'react'
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import Header from '../../components/HeaderHome'
import IconeA from '../../components/icons/icons/ga.png'
import IconeL from '../../components/icons/icons/ml.png'
import IconeI from '../../components/icons/icons/tri.png'

import '../Page.css'


const Rentabilidade: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <h1>Indicadores de Rentabilidade</h1>
                <IonGrid>
                    <div className="container">
                        <IonRow>
                            <IonCol>
                                <IonCard className='card' href="/tri" >
                                    <IonCardContent>
                                        <img src={IconeI} />

                                        <p>Taxa de Retorno sobre Investimento</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className='card' href="/ga">
                                    <IonCardContent>
                                        <img src={IconeA} />

                                        <p>Giro do Ativo</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className='card' href="/ml">
                                    <IonCardContent>
                                        <img src={IconeL} />

                                        <p>Margem Líquida</p>

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

export default Rentabilidade;