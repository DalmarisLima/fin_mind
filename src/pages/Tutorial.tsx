import React from 'react'
import { IonContent, IonPage, IonList, IonButton, IonSlides, IonSlide, IonHeader, IonToolbar } from '@ionic/react'
import Logo from '../components/icons/logo_c.png'

import './Page.css';

const slideOpts = {
    slidInicisl: 1,
    speed: 400
};

export const Tutorial: React.FC = () => {
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
                                <p> As palavras <strong>Finanças, Indicadores e Contabilidade</strong> te causam arrepio só
                                    de pensar em matemática e nomenclaturas que você não entende? Não se
                                    preocupe, o app Finmind te apresentará tudo em uma linguagem simplificada
                                     e você não precisará conhecer fórmulas ou fazer cálculos </p>
                                     <img src="https://img.icons8.com/small/16/000000/double-right.png"/>
                                     
                            </IonList>
                        </IonSlide>
                        <IonSlide>
                            <IonList>
                                <img src={Logo} />
                                <p> Para ter acesso às informações só será necessário preencher os dados solicitados
                                nos campos de variáveis e será apresentado a informação que você precisa para começar
                                sua análise. E onde você encontrará as informações para alimentar esse App?
                                Muito simples: nos relatórios contábeis de sua empresa. Solicite os dados ao seu
                                Contador sempre que necessário.
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
export default Tutorial;