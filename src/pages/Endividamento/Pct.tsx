import React, { useState } from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonInput, IonItem, IonList, IonModal, IonPage, IonRow } from '@ionic/react'
import Header from '../../components/HeaderHome'
import Icone from '../../components/icons/icons/pct.png'

import '../Page.css'


const PCT: React.FC = () => {
    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const result = (number! / (number! + number2!)).toFixed(2);
    return (
        <IonPage>
            <Header  />
            <IonContent>
                <h1>Participação de Capital de Terceiros</h1>

                <IonGrid>
                    <div className='container'>
                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' >
                                    <IonCardHeader >
                                        <img src={Icone} />

                                        <p>
                                            Quanto para cada R$ 1,00 do <strong>ativo</strong> de minha empresa (os bens e direitos) é <strong>adiquirido através de terceiros</strong> (créditos, empréstimos, financiamentos)?
                                        </p>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    type='number'
                                                    value={number}
                                                    placeholder='Exigível Total (R$)'
                                                    onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}
                                                    color='primary'
                                                    inputmode='numeric'>
                                                </IonInput>
                                            </IonItem>

                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    color='primary'
                                                    type='number'
                                                    value={number2}
                                                    placeholder='Patrimonio Líquido (R$)'
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
                                                                <h1 style={{ paddingLeft: '50px', paddingRight: '50px' }}>Participação de Capital de Terceiros</h1>
                                                                <p className='textModal'>Para cada R$1,00 existente de Ativos (bens e direitos), <strong>R$ {result}</strong> foi adquirido através de obrigações adquiridas com terceiros (empréstimos, financiamentos, créditos).</p>
                                                                <p style={{ color: '#808080', fontSize: '15px', padding:'20px' }}>Com esta informação você saberá se sua empresa se utiliza mais de recursos de terceiros ou de recursos próprios. Orienta-se, de modo geral, que quanto menor
                                                         a dependência de recursos de terceiros, melhor.</p>
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

export default PCT;