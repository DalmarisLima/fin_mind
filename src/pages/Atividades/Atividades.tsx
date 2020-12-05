import React from 'react'
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import Header from '../../components/HeaderHome'
import IconeV from '../../components/icons/icons/pmrv.png'
import IconeC from '../../components/icons/icons/pmpc.png'
import IconeE from '../../components/icons/icons/pmre.png'



import '../Page.css'


const Atividades: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonGrid>

                    <div className="container">
                        <h1> Indicadores de Atividades </h1>
                        <IonRow>
                            <IonCol>
                                <IonCard className='card' href="/pmrv">
                                    <IonCardContent>
                                        <img src={IconeV} />

                                        <p>Prazo Médio de Recebimento de Vendas</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className='card' href="/pmpc">
                                    <IonCardContent>
                                        <img src={IconeC} />

                                        <p>Prazo Médio de Pagamento de Compras</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className='card' href="/pmre">
                                    <IonCardContent>
                                        <img src={IconeE} />

                                        <p>Prazo Médio de Renovação de Estoques</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonButton color='light' shape="round" size='default' href="/home" fill='default'>Voltar</IonButton>
                    </div>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Atividades;