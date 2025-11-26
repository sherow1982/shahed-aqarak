import React, { createContext, useState, useMemo } from 'react'
import { housesDB } from '../db/data'

export const HouseContext = createContext()

export function HouseContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState({
    country: '',
    city: '',
    propertyType: '',
    priceRange: '',
  })

  const filteredHouses = useMemo(() => {
    return housesDB.filter((house) => {
      const countryMatch = !searchTerm.country || house.country === searchTerm.country
      const cityMatch = !searchTerm.city || house.city === searchTerm.city
      const typeMatch = !searchTerm.propertyType || house.propertyType === searchTerm.propertyType

      let priceMatch = true
      if (searchTerm.priceRange) {
        const range = JSON.parse(searchTerm.priceRange)
        priceMatch = house.price >= range.min && house.price <= range.max
      }

      return countryMatch && cityMatch && typeMatch && priceMatch
    })
  }, [searchTerm])

  return (
    <HouseContext.Provider value={{ searchTerm, setSearchTerm, filteredHouses }}>
      {children}
    </HouseContext.Provider>
  )
}
