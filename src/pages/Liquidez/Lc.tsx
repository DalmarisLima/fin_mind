import React, { useState } from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonInput, IonItem, IonList, IonModal, IonPage, IonRow } from '@ionic/react'
import Header from '../../components/HeaderHome'
import Icone from '../../components/icons/icons/lc.png'

import '../Page.css'


const LC: React.FC = () => {
    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const result = (number! / number2!).toFixed(2);
    return (
        <IonPage>
            <Header />
            <IonContent>
                <h1>Liquidez Corrente</h1>
                <IonGrid>
                    <div className='container'>
                        <IonRow>
                            <IonCol>
                                <IonCard className='card'>
                                    <IonCardHeader >
                                        <img src={Icone} />

                                        <p>
                                            Qual a <strong>capacidade de pagamento a curto prazo</strong> (período de um ano) de minha empresa?
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
                                                    placeholder='Passivo Circulante (R$)'
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
                                                                <h1 style={{ paddingLeft: '50px', paddingRight: '50px' }}>Liquidez Corrente</h1>
                                                                <p className='textModal'>Para cada R$1,00 de dívida que deverá ser paga no curto prazo (prazo inferior a 01 ano), sua empresa possui <strong> R$ {result}</strong> de valores a receber também no curto prazo.</p>
                                                                <p className='StextModal'>É importante avaliar a qualidade dos itens do Ativo Circulante, como por exemplo, se os estoques estão obsoletos, ou se as duplicatas a receber são realmente recebíveis, além da importância de analisar a sincronia entre recebimentos e pagamentos através dos indicadores de atividade </p>
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

export default LC;