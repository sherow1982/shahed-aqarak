import React, { useContext } from 'react'
import { HouseContext } from '../context/HouseContext'
import House from './House'

export default function HouseList() {
  const { filteredHouses } = useContext(HouseContext)

  if (filteredHouses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">لم يتم العثور على عقارات تطابق البحث</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredHouses.map((house) => (
        <House key={house.id} house={house} />
      ))}
    </div>
  )
}
