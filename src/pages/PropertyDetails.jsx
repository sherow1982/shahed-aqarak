import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { housesDB } from '../db/data'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { HiHomeModern, HiCheckBadge, HiMapPin, HiArrowLeft } from 'react-icons/hi2'

export default function PropertyDetails() {
  const { id } = useParams()
  const house = housesDB.find((h) => h.id === parseInt(id))

  if (!house) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">العقار غير موجود</h1>
          <p className="text-gray-600 mb-6">للأسف، العقار الذي تبحث عنه غير متوفر</p>
          <Link to="/" className="bg-secondary text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-primary transition">
            <HiArrowLeft />
            العودة للرئيسية
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Link to="/" className="flex items-center gap-2 text-secondary hover:text-primary mb-6 transition">
          <HiArrowLeft />
          العودة للقائمة
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* صورة العقار */}
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <img
                src={house.image}
                alt={house.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* معلومات العقار */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h1 className="text-4xl font-bold text-primary mb-4">{house.title}</h1>

              <div className="flex items-center gap-2 mb-4 text-gray-700">
                <HiMapPin className="text-secondary text-xl" />
                <span className="text-lg">{house.city} - {house.country}</span>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">{house.description}</p>

              {/* المواصفات */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-gray-200 py-6">
                <div className="text-center">
                  <div className="text-secondary text-2xl mx-auto mb-2">🛏️</div>
                  <p className="text-sm text-gray-600">غرف النوم</p>
                  <p className="text-2xl font-bold text-primary">{house.bedrooms}</p>
                </div>
                <div className="text-center">
                  <div className="text-secondary text-2xl mx-auto mb-2">🚿</div>
                  <p className="text-sm text-gray-600">الحمامات</p>
                  <p className="text-2xl font-bold text-primary">{house.bathrooms}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">المساحة</p>
                  <p className="text-2xl font-bold text-primary">{house.area}</p>
                  <p className="text-xs text-gray-600">م²</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">النوع</p>
                  <p className="text-lg font-bold text-secondary">{house.propertyType}</p>
                </div>
              </div>
            </div>
          </div>

          {/* جانب السعر والتفاصيل */}
          <div className="lg:col-span-1">
            <div className="bg-secondary text-white rounded-lg shadow-lg p-8 sticky top-20">
              <div className="mb-6">
                <p className="text-sm opacity-80 mb-2">السعر</p>
                <p className="text-4xl font-bold">
                  {(house.price / 1000000).toFixed(2)} م
                </p>
              </div>

              <button className="w-full bg-white text-secondary font-bold py-3 rounded-lg hover:bg-gray-100 transition mb-3">
                📞 اتصل بنا الآن
              </button>

              <button className="w-full border-2 border-white text-white font-bold py-3 rounded-lg hover:bg-white hover:text-secondary transition">
                ❤️ أضف للمفضلة
              </button>

              <div className="border-t border-white border-opacity-30 mt-6 pt-6">
                <h3 className="font-bold mb-3">معلومات إضافية</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>الدولة:</span>
                    <span>{house.country}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>المدينة:</span>
                    <span>{house.city}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>النوع:</span>
                    <span>{house.propertyType}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
