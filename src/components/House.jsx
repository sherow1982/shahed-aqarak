import React from 'react'
import { Link } from 'react-router-dom'
import { HiHome, HiCheckBadge, HiMapPin } from 'react-icons/hi2'

export default function House({ house }) {
  return (
    <Link to={`/property/${house.id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
        <div className="relative h-64 bg-gray-200 flex items-center justify-center">
          <img
            src={house.image}
            alt={house.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-lg text-sm font-bold">
            {house.propertyType}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-primary line-clamp-2">{house.title}</h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{house.description}</p>

          <div className="flex items-center gap-2 mb-3 text-gray-700">
            <HiMapPin className="text-secondary" />
            <span className="text-sm">{house.city} - {house.country}</span>
          </div>

          <div className="flex items-center justify-between mb-3 text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <HiHome />
              <span>{house.bedrooms} غرفة</span>
            </div>
            <span>{house.area} م²</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <span className="text-2xl font-bold text-secondary">
              {(house.price / 1000000).toFixed(2)} م
            </span>
            <HiCheckBadge className="text-green-500 text-xl" />
          </div>
        </div>
      </div>
    </Link>
  )
}
