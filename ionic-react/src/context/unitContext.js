import React from 'react'

const UnitContext = React.createContext('mkg')

export const UnitProvider = UnitContext.Provider
export const UnitConsumer = UnitContext.Consumer

export default UnitContext
