import React, { useState } from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonInput, IonItem, IonList, IonModal, IonPage, IonRow } from '@ionic/react'
import Header from '../../components/HeaderHome'
import Icone from '../../components/icons/icons/lg.png'


import '../Page.css'


const LG: React.FC = () => {
    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [number3, setNumber3] = useState<number>();
    const [number4, setNumber4] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const result = ((number! + number2!) / (number3! + number4!)).toFixed(2);
    return (
        <IonPage>
            <Header />
            <IonContent>
                <h1>Liquidez Geral</h1>
                <IonGrid>
                    <div className='container'>
                        <IonRow>
                            <IonCol>
                                <IonCard className='card' >
                                    <IonCardHeader >

                                        <img src={Icone} />

                                        <p>
                                            Qual a <strong>capacidade total de pagamento</strong> de minha empresa, considerando tudo que ela converterá em dinheiro a curto e longo prazo, com tudo que já assumiu como dívida?
                                    </p>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    type='number'
                                                    value={number}
                                                    placeholder='Ativo Circulante (R$)'
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
                                                    placeholder='Ativo Realizável a Longo Prazo(R$)'
                                                    inputmode='numeric'
                                                    onIonChange={e => setNumber2(parseInt(e.detail.value!, 10))}
                                                >
                                                </IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    color='primary'
                                                    type='number'
                                                    value={number3}
                                                    placeholder='Passivo Circulante (R$)'
                                                    inputmode='numeric'
                                                    onIonChange={e => setNumber3(parseInt(e.detail.value!, 10))}
                                                >
                                                </IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    color='primary'
                                                    type='number'
                                                    value={number4}
                                                    placeholder='Passivo Não Circulante (R$)'
                                                    inputmode='numeric'
                                                    onIonChange={e => setNumber4(parseInt(e.detail.value!, 10))}
                                                >
                                                </IonInput>
                                            </IonItem>
                                            <IonRow>

                                                <IonModal isOpen={showModal}>
                                                    <Header />
                                                    <IonGrid >
                                                        <IonRow>
                                                            <IonCol className='container'>
                                                                <h1 style={{ paddingLeft: '50px', paddingRight: '50px' }}>Liquidez Geral</h1>
                                                                <p className='textModal'> Para cada R$1,00 de dívida que deverá ser paga (no curto e longo prazo), sua empresa possui <strong> R$ {result} </strong> de valores a receber (no curto e longo prazo).</p>
                                                                <p style={{ color: '#808080', fontSize: '15px', padding:'20px' }}>Entende-se como Curto Prazo o perído de 01 ano e Longo Prazo o período superior a 01 ano</p>
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
                                                    href='/liquidez'>
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

export default LG;