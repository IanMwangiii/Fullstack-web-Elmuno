import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LocationMap } from '../components/LocationMap';

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-600" />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-600" />
              <span>info@elmunoliquor.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-600" />
              <span>123 Kimathi Street, Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg mb-12">
        <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Weekdays</h3>
            <p className="text-gray-600">9:00 AM - 8:00 PM</p>
          </div>
          <div>
            <h3 className="font-medium">Weekends</h3>
            <p className="text-gray-600">10:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      <LocationMap />
    </div>
  );
}