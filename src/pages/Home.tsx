import React, { useState } from 'react'
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonModal, IonPage, IonRow } from '@ionic/react'
import Header from '../components/HeaderHome'

import IconeA from '../components/icons/icons/atividades.png'
import IconeL from '../components/icons/icons/liquidez.png'
import IconeR from '../components/icons/icons/rentabilidade.png'
import IconeE from '../components/icons/icons/endividamento.png'


import './Page.css'


const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);



  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid className='container'>

          <IonRow>
            <IonCol>
              <h1> Indicadores</h1>
            </IonCol>
          </IonRow>


          <IonRow style={{ marginTop: '50px' }}>
            <IonCol>
              <IonCard className='card' onClick={() => setShowModal(true)}>
                <IonCardContent >
                  <img src={IconeA} />

                  <p>Indicadores de Atividades</p>

                  <IonModal isOpen={showModal}>
                    <Header />
                    <IonGrid >
                      <IonRow>
                        <IonCol className='container'>
                          <h1 style={{ paddingLeft: '50px', paddingRight: '50px' }}> Indicadores de Atividades</h1>
                          <img src={IconeA}/>

                          <p className='textModal' > Através dos Indicadores de Atividades você conseguirá avaliar a performance
                          de sua empresa nas diversas etapas de seu ciclo operacional. Assim, será possível
                          ter em mãos uma análise desde o momento da compra de insumos produtivos ou de produtos
                          para revenda (dependendo de sua atividade econômica), até o momento do recebimento dos valores
                          resultantes da venda do produto para o consumidor final.</p>
                          <IonRow>
                            <IonCol>
                              <IonButton href='\home' size='default' fill='default' shape='round' >Voltar</IonButton>
                              <IonButton href='\atividades' size='default' shape='round' color='primary' >Continuar</IonButton>
                            </IonCol>
                          </IonRow>

                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonModal>
                </IonCardContent>
              </IonCard>


            </IonCol>
            <IonCol>
              <IonCard className='card' onClick={() => setShowModal2(true)}>
                <IonCardContent>
                  <img src={IconeL} />

                  <p> Indicadores de Liquidez </p>

                  <IonModal isOpen={showModal2}>
                    <Header />
                    <IonGrid >
                      <IonRow>
                        <IonCol className='container'>
                          <h1 style={{ paddingLeft: '50px', paddingRight: '50px' }}> Indicadores de Liquidez</h1>
                          <img src={IconeL} />

                          <p className='textModal'>  Os Indicadores de Liquidez auxiliarão sua empresa a analisar e entender
                          sua capacidade financeira, ou seja, indicará a capacidade monetária de sua
                        empresa em cumprir com suas obrigações.</p>
                          <IonRow>
                            <IonCol>
                              <IonButton href='\home' size='default' fill='default' shape='round' >Voltar</IonButton>
                              <IonButton href='\liquidez' size='default' shape='round' color='primary' >Continuar</IonButton>
                            </IonCol>
                          </IonRow>

                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonModal>

                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>


          <IonRow>
            <IonCol>
              <IonCard className='card' onClick={() => setShowModal3(true)}>
                <IonCardContent>
                  <img src={IconeR} />

                  <p>Indicadores de Rentabilidade</p>

                  <IonModal isOpen={showModal3}>
                    <Header />
                    <IonGrid >
                      <IonRow>
                        <IonCol className='container'>
                          <h1 style={{ paddingLeft: '50px', paddingRight: '50px' }}> Indicadores de Rentabilidade</h1>
                          <img src={IconeR} />

                          <p className='textModal'> Através dos Indicadores de Rentabilidade será possível verificar a capacidade
                          da empresa de gerar retorno financeiro a partir dos investimentos realizados.
                          Auxiliando a entender se a estratégia adotada pelo negócio está funcionando,
                          ou seja, se a empresa está no caminho certo e se está fazendo os investimentos
                           corretos.</p>
                          <IonRow>
                            <IonCol>
                              <IonButton href='\home' size='default' fill='default' shape='round' >Voltar</IonButton>
                              <IonButton href='\rentabilidade' size='default' shape='round' color='primary' >Continuar</IonButton>
                            </IonCol>
                          </IonRow>

                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonModal>

                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>

              <IonCard className='card' onClick={() => setShowModal4(true)}>

                <IonCardContent>
                  <img src={IconeE} />

                  <p>Indicadores de Endividamento</p>
                  <IonModal isOpen={showModal4}>
                    <Header />
                    <IonGrid >
                      <IonRow>
                        <IonCol className='container'>
                          <h1 style={{ paddingLeft: '50px', paddingRight: '50px' }}> Indicadores de Endividamento</h1>
                          <img src= {IconeE} />

                          <p className='textModal'> Através deste indicador será possível analisar o nível de endividamento da
                          empresa, ou seja o quanto o Ativo da empresa é financiado por recursos dos
                        proprietários (Capital Próprio) ou por recursos de terceiros (Capital de Terceiros)</p>
                          <IonRow>
                            <IonCol>
                              <IonButton href='\home' size='default' fill='default' shape='round' >Voltar</IonButton>
                              <IonButton href='\endividamento' size='default' shape='round' color='primary' >Continuar</IonButton>
                            </IonCol>
                          </IonRow>

                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonModal>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default Home;