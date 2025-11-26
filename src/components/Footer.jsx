import React from 'react'
import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">🏠 موقع العقارات</h3>
            <p className="text-gray-200">منصة متخصصة في عرض أفضل العقارات والفلل والشقق في الوطن العربي</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">الروابط السريعة</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-secondary transition">الرئيسية</a></li>
              <li><a href="#" className="hover:text-secondary transition">عن الموقع</a></li>
              <li><a href="#" className="hover:text-secondary transition">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-secondary transition">شروط الاستخدام</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-2 text-gray-200">
              <div className="flex items-center gap-2">
                <HiPhone className="text-secondary" />
                <span>+966 12 345 6789</span>
              </div>
              <div className="flex items-center gap-2">
                <HiEnvelope className="text-secondary" />
                <span>info@realestate.com</span>
              </div>
              <div className="flex items-center gap-2">
                <HiMapPin className="text-secondary" />
                <span>الرياض، السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary pt-8 text-center text-gray-300">
          <p>&copy; 2025 موقع العقارات. جميع الحقوق محفوظة.</p>
          <p className="text-sm mt-2">تم التطوير بواسطة React + Vite + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
