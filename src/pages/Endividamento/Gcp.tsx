import React, { useState } from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow } from '@ionic/react'
import Header from '../../components/HeaderHome'
import Icone from '../../components/icons/icons/gcp.png'


import '../Page.css'


const GCP: React.FC = () => {
    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const result = (number! / number2!).toFixed(2);
    return (
        <IonPage>
            <Header  />
            <IonContent>
                <h1>Garantia de Capital Próprio ao Capital de Terceiros</h1>
                <IonGrid>
                    <div className='container'>
                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' >
                                    <IonCardHeader >
                                        <img src={Icone} />

                                        <p>
                                            Qual a <strong>capacidade da empresa em sanar obrigações</strong> utilizando-se
                                            exclusivamente de Capital Próprio (valores oriundos do investimento
                                            inicial e do resultado positivo de suas operações)?
                                       </p>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    type='number'
                                                    value={number}
                                                    placeholder='Patrimônio Líquido (R$)' 
                                                    onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}
                                                    color='primary'
                                                    inputmode='numeric'>
                                                </IonInput>
                                            </IonItem>
                                            <IonLabel position="floating"  className='obs'>Exigível Total = Passivo circulante + Passivo não circulante</IonLabel>

                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    color='primary'
                                                    type='number'
                                                    value={number2}
                                                    placeholder='Exigível Total (R$)'
                                                    inputmode='numeric'
                                                    onIonChange={e => setNumber2(parseInt(e.detail.value!, 10))}
                                                >
                                                </IonInput>
                                            </IonItem>
                                            <IonRow>

                                            <IonModal isOpen={showModal}>
                                                    <Header />
                                                    <IonGrid >
                                                        <IonRow>
                                                            <IonCol className='container'>
                                                                <h1 style={{ paddingLeft: '50px', paddingRight: '50px' }}>Garantia de Capital Próprio ao Capital de Terceiros</h1>
                                                                <p className='textModal'>Para cada R$1,00 de obrigações com terceiros, sua empresa possui <strong>R$ {result}</strong> como garantia positiva.</p>
                                                                <p style={{ color: '#808080', fontSize: '15px', padding:' 20px' }}> Avalie a capacidade de sua empresa em sanar as obrigações utilizando-se exclusivamente de Capital Próprio</p>
                                                                <p className='StextModal'>Capital Próprio = Todo Patrimônio que de fato a empresa possui</p>
                                                                <IonRow>
                                                                    <IonCol>
                                                                        <IonButton
                                                                            shape="round"
                                                                            size='default'
                                                                            onClick={() => setShowModal(false)}
                                                                            style={{ marginTop: '20px' }}
                                                                        > <p style={{ color: 'white' }}>Fechar</p>
                                                                        </IonButton>
                                                                    </IonCol>
                                                                </IonRow>

                                                            </IonCol>
                                                        </IonRow>
                                                    </IonGrid>
                                                </IonModal>

                                                <IonButton
                                                    shape="round"
                                                    fill='default'
                                                    size='small'
                                                    style={{ marginTop: '20px' }}
                                                    href='/endividamento'>
                                                    <p>Voltar</p>
                                                </IonButton>
                                                <IonButton
                                                    shape="round"
                                                    size='small'
                                                    color='primary'
                                                    onClick={() => setShowModal(true)}
                                                    style={{ marginTop: '20px' }}>
                                                    <p style={{ color: 'white' }}>Calcular</p>
                                                </IonButton>
                                                
                                            </IonRow>

                                        </IonList>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </div>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default GCP;