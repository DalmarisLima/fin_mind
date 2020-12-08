import React, { useState } from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow } from '@ionic/react'
import Header from '../../components/HeaderHome'

import Icone from '../../components/icons/icons/ce.png'


import '../Page.css'


const CE: React.FC = () => {
    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [showModal, setShowModal] = useState(false);

   var result =( (number! / number2!)*100).toFixed(2);



        return (
            <IonPage>
                <Header />
                <IonContent>

                    <h1>Composição de Endividamento</h1>

                    <IonGrid>
                        <div className='container'>
                            <IonRow>
                                <IonCol>
                                    <IonCard className='card'>
                                        <IonCardHeader >
                                            <img src={Icone} />

                                            <p> Qual o percentual médio de <strong>dívidas vencíveis a curto prazo</strong> (prazo de 01 ano) minha empresa opera?</p>

                                        </IonCardHeader>
                                        <IonCardContent>
                                            <IonList>
                                                <IonItem>
                                                    <IonInput
                                                        className='input'
                                                        type='number'
                                                        value={number}
                                                        placeholder='Passivo Circulante (R$) '
                                                        onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}
                                                        color='primary'
                                                        inputmode='numeric'
                                                        required>
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
                                                        required
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
                                                                    <h1 style={{ paddingLeft: '50px', paddingRight: '50px' }}>Composição de Endividamento</h1>
                                                                    <p className='textModal'>Sua empresa possui <strong>{result}%</strong> de dívidas que vencerão em um prazo de até um ano.</p>
                                                                    <p style={{ color: '#808080', fontSize: '15px', padding: '20px' }}>Analise se os rescuros de terceiros (obrigações) possuem
                                                                    data de vencimento, em maior parte, a curto ou a longo prazo.</p>
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
                                                        style={{ marginTop: '20px' }} >
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

export default CE;