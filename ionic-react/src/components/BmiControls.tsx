import React from 'react'
import { IonButton, IonCol, IonIcon, IonRow } from '@ionic/react'
import { calculatorOutline, refreshCircleOutline } from 'ionicons/icons'

const BmiControls: React.FC<{
  onCalculate: () => void
  onReset: () => void
}> = ({ onCalculate, onReset }) => {
  return (
    <IonRow>
      <IonCol className='ion-text-left'>
        <IonButton onClick={onCalculate}>
          <IonIcon slot='start' icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className='ion-text-right'>
        <IonButton onClick={onReset}>
          <IonIcon slot='start' icon={refreshCircleOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  )
}

export default BmiControls
