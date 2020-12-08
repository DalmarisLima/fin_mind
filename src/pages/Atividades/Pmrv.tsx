import React, { useState } from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonInput, IonItem, IonList, IonModal, IonPage, IonRow } from '@ionic/react'
import Header from '../../components/HeaderHome'
import Icone from '../../components/icons/icons/pmrv.png'

import '../Page.css'


const PMRV: React.FC = () => {

    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const result = ((number! * 360) / number2!).toFixed(0);

    return (
        <IonPage>
            <Header />
            <IonContent>
                
                <IonGrid>
                <h1>Prazo Médio de Recebimento de Vendas</h1>
                
                <p className='sub'>Essa informação lhe auxiliará a tomar decisões relacionadas 
                à sua política interna de prazo de recebimento de vendas. </p>

                    <div className='container'>
                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' >
                                    <IonCardHeader>
                                        <img src={Icone}/>

                                        <p>Quantos dias, em média, minha empresa espera para <strong>receber as vendas</strong> ?</p>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    type='number'
                                                    value={number}
                                                    placeholder='Duplicata a Receber (R$)'
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
                                                    placeholder='Vendas Brutas (R$)'
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
                                                                <h1 style={{ paddingLeft: '50px', paddingRight: '50px' }}>Prazo Médio de Recebimento de Vendas</h1>
                                                                <p className='textModal'>Sua empresa leva, em média, <strong> {result} </strong> dias para receber suas vendas.</p>
                                                                <p style={{ color: '#808080', fontSize: '15px', padding:'20px' }}>Orientamos analisar esse dado em conjunto com o resultado encontrado no 
                                                        Indicador de Prazo Médio de Pagamento de Compras, sendo aconselhado para o alcance de um 
                                                        melhor equilíbrio financeiro que: Prazo de Recebimentos ≥ Prazo de Pagamento</p>
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

export default PMRV;