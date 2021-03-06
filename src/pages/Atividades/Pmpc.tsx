import React, { useState } from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonInput, IonItem, IonList, IonModal, IonPage, IonRow } from '@ionic/react'
import Header from '../../components/HeaderHome'
import Icone from '../../components/icons/icons/pmpc.png'

import '../Page.css'


const PMPC: React.FC = () => {

    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const result = ((number! * 360) / number2!).toFixed(0);


    return (
        <IonPage>
            <Header />
            <IonContent>
                <h1>Prazo Médio de Pagamento de Compras</h1>
                <p className='sub'> Essa informação lhe auxiliará a analisar à política de compras e
                prazos de pagamentos adotados por seus fornecedores </p>
                <IonGrid>
                    <div className='container'>
                        <IonRow>
                            <IonCol>
                                <IonCard className='card' >
                                    <IonCardHeader>
                                        <img src={Icone} />

                                        <p>Quantos dias, em média, minha empresa demora para <strong>pagar as compras</strong>?</p>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    required={true}
                                                    type='number'
                                                    value={number}
                                                    placeholder='Fornecedores (R$)'
                                                    onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}
                                                    color='primary'
                                                    inputmode='numeric'>

                                                </IonInput>
                                            </IonItem>

                                            <IonItem>
                                                <IonInput className='input'
                                                    required={true}
                                                    color='primary'
                                                    type='number'
                                                    value={number2}
                                                    placeholder='Compras (R$)'
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
                                                                <h1 style={{ paddingLeft: '50px', paddingRight: '50px' }}>Prazo Médio de Pagemento de Compras</h1>
                                                                <p className='textModal'>Sua empresa precisa pagar suas compras, em média, <strong> {result} </strong> dias.</p>
                                                                <p style={{ color: '#808080', fontSize: '15px', padding:'20px' }}>Orientamos analisar esse resultado em conjunto com
                                                                o resultado encontrado no Indicador de Prazo Médio de Recebimento de Vendas, sendo aconselhado que: Prazo de Recebimentos
                                                        de Vendas ≥ Prazo de Pagamento de Compras</p>
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
                                                    href='/atividades'>
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

export default PMPC;