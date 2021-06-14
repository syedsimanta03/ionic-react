import React from 'react'
import { IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';

const BmiResult: React.FC<{result:  number | string}> = ({result}) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent>
            <h2>{result}</h2>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  )
}

export default BmiResult
