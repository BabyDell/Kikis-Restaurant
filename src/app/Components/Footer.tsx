import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="flex flex-col items-center justify-center ">
            <Image
              src="/images/KikisLogo.webp"
              alt="Restaurant Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <Link 
              href="https://www.instagram.com/yourrestaurant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-amber-500 transition-colors"
            >
              <Instagram className="mr-2" />
              Follow us on Instagram
            </Link>
          </div>
          <div className="m-auto">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Restaurant Street</p>
            <p>Foodie City, FC 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@restaurant.com</p>
          </div>
          <div className="m-auto">
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <p>Open daily from 3:00 PM</p>
            <p>Happy Hour: 3:00 PM - 6:00 PM</p>
            <p>Dinner served from 5:00 PM</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} by Kiki&apos;s La Quinta. All rights reserved. Site by Andy Felix
        </div>
      </div>
    </footer>
  )
}

