import React from 'react'
import { IonContent, IonPage, IonList, IonButton, IonSlides, IonSlide, IonHeader, IonToolbar } from '@ionic/react'
import Logo from '../components/icons/logo_c.png'

import './Page.css';

const slideOpts = {
    slidInicisl: 1,
    speed: 400
};

export const Initial: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='primary'></IonToolbar>
            </IonHeader>
            <IonContent>

                <div className='slideContainer'>
                    <IonSlides pager={true} options={slideOpts}>

                        <IonSlide>
                            <IonList>
                                <img src={Logo} />
                                <p>
                                    Olá! Seja bem vindo ao FindMind o App que auxiliará sua empresa a tomar decisões com base em informações fornecidas pelos relatórios desenvolvidos pela Contabilidade.
                        </p>
                            </IonList>
                        </IonSlide><IonSlide>
                            <IonList>
                                <img src={Logo} />
                                <p>
                                    As palavras <strong>Finanças, indicadores e contabilidade</strong> te causam arrepio só de pensar em matemática e nomenclaturas que você não entende?
                        </p>
                            </IonList>
                        </IonSlide>
                        <IonSlide>
                            <IonList>
                                <img src={Logo} />
                                <p>
                                    Não se preocupe, o FinMind te apresentará tudo em uma linguagem simplificada e você não precisará conhecer fórmulas ou fazer cálculos.
                        </p>
                            </IonList>
                        </IonSlide>
                        <IonSlide>
                            <IonList>
                                <img src={Logo} />
                                <p>
                                    Para ter acesso às informações só preencher os dados solicitados em cada campo de variáveis, que te apresentaremos o resultado que você precisa para começar sua análise.
                       </p>
                            </IonList>
                        </IonSlide>
                        <IonSlide>
                            <IonList>
                                <img src={Logo} />
                                <p>
                                    E onde você encontrará as informações para alimentar esse APP? Muito simples: nos relatórios contábeis de sua empresa. Solicite ao seu Contador os dados sempre que necessário.
                                    <IonList>
                                        <IonButton shape="round" size='default' href="/home">
                                            <p style={{ color: 'white' }}>Iniciar</p>
                                        </IonButton>
                                    </IonList>
                                </p>
                            </IonList>
                        </IonSlide>
                    </IonSlides>
                </div>
            </IonContent>

        </IonPage>


    );
};

export default Initial;