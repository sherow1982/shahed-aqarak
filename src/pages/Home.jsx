import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from '../components/Search'
import HouseList from '../components/HouseList'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">🏠 موقع العقارات</h1>
          <p className="text-xl text-gray-600">ابحث عن عقارك المثالي من آلاف الخيارات المتاحة</p>
        </section>

        {/* Search Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">ابحث عن عقارك</h2>
          <Search />
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">🏘️</div>
            <h3 className="text-xl font-bold mb-2 text-primary">آلاف العقارات</h3>
            <p className="text-gray-600">اختر من مجموعة كبيرة من العقارات المتنوعة والمميزة</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-xl font-bold mb-2 text-primary">أسعار منافسة</h3>
            <p className="text-gray-600">احصل على أفضل الأسعار والعروض الحصرية والتنافسية</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="text-xl font-bold mb-2 text-primary">دعم متميز</h3>
            <p className="text-gray-600">فريق دعم محترف جاهز لمساعدتك في أي وقت</p>
          </div>
        </section>

        {/* Houses List */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">أحدث العقارات</h2>
          <HouseList />
        </section>
      </main>
      <Footer />
    </>
  )
}
