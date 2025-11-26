import React, { useContext, useState } from 'react'
import { HouseContext } from '../context/HouseContext'
import { citiesData, propertyTypes, priceRanges } from '../db/data'

export default function Search() {
  const { setSearchTerm } = useContext(HouseContext)
  const [country, setCountry] = useState('السعودية')
  const [city, setCity] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [priceRange, setPriceRange] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchTerm({
      country,
      city,
      propertyType,
      priceRange,
    })
  }

  return (
    <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Country */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-primary">الدولة</label>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value)
              setCity('')
            }}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
          >
            {Object.keys(citiesData).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-primary">المدينة</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
          >
            <option value="">جميع المدن</option>
            {citiesData[country]?.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-primary">نوع العقار</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
          >
            <option value="">جميع الأنواع</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-primary">نطاق السعر</label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
          >
            <option value="">جميع الأسعار</option>
            {priceRanges.map((range, idx) => (
              <option key={idx} value={JSON.stringify(range)}>{range.label}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-secondary text-white p-3 rounded-lg font-bold hover:bg-primary transition text-lg"
      >
        🔍 بحث
      </button>
    </form>
  )
}
