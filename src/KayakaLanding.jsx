import React, { useState } from "react";

export default function KayakaLanding() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "Enquiry",
  });
  const [showBooking, setShowBooking] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const PHONE1 = "919845465200";
  const PHONE2 = "919886366691";
  const EMAIL = "nkamalas@gmail.com";
  const [mobileNav, setMobileNav] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const text = `Hi, I'm interested in Kayaka Real Estate.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AType: ${form.type}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${PHONE1}?text=${text}`, "_blank");
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "", type: "Enquiry" });
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-lg font-semibold">Kaayaka</h1>
              <p className="text-sm text-gray-500">
                Bengaluru — SMV Layout (AGS), Manganahalli Main Road
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#amenities" className="hover:text-indigo-600">Amenities</a>
            <a href="#plans" className="hover:text-indigo-600">Plans</a>
            <a href="#gallery" className="hover:text-indigo-600">Gallery</a>
            <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded-md">
              Book / Enquire
            </a>
          </nav>
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mobileNav ? "Close" : "Menu"}
          </button>
        </div>
        {mobileNav && (
          <nav className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm border-t">
            <a href="#about" onClick={() => setMobileNav(false)} className="pt-3">About</a>
            <a href="#amenities" onClick={() => setMobileNav(false)}>Amenities</a>
            <a href="#plans" onClick={() => setMobileNav(false)}>Plans</a>
            <a href="#gallery" onClick={() => setMobileNav(false)}>Gallery</a>
            <a href="#contact" onClick={() => setMobileNav(false)} className="px-4 py-2 bg-indigo-600 text-white rounded-md text-center">
              Book / Enquire
            </a>
            <a href="tel:+919845465200" className="px-4 py-2 border rounded-md text-center">
              Call: 98454 65200
            </a>
          </nav>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">
              Kaayaka — Commercial & Residential Landmark in SMV Layout
            </h2>
            <p className="mt-4 text-gray-600">
              A premium commercial building on Manganahalli Main Road with
              exceptional visibility, three-side road access, and post-tensioned
              construction. Ideal for brands seeking a strong presence in
              West Bangalore's fastest-growing corridor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-lg bg-white p-4 shadow-sm border">
                <div className="text-sm text-gray-400">Commercial Carpet</div>
                <div className="font-semibold">Ground - 3100 sq ft</div>
                <div className="font-semibold">1st/2nd - 3500 sq ft each</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm border">
                <div className="text-sm text-gray-400">Parking</div>
                <div className="font-semibold">Basement — 4800 sq ft</div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md"
              >
                Enquire Now
              </a>
              <button
                onClick={() => setShowBooking(true)}
                className="inline-block px-6 py-3 border rounded-md"
              >
                Book a Visit
              </button>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>
                Post-tensioned construction — large clear spans, minimal columns
              </li>
              <li>Clear height: 10.5 ft</li>
              <li>North 51 ft, East 100 ft, South 45 ft road frontage</li>
              <li>Close to major retail & food brands and hospital</li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden bg-gray-10">
            <div className="h-full flex items-center justify-center text-gray-600">
              <img
                src={`${process.env.PUBLIC_URL}/images/NE.jpg`}
                alt="North-East Corner Elevation"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* About / Location */}
        <section id="about" className="scroll-mt-20 mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-2xl font-semibold">
            Project Overview & Location
          </h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700">
                Kayaka is a five-floor mixed use building (including a basement
                for parking) located in the prominent Sir M. Vishweshwaraiah
                Layout (SMV Layout) by BDA, on Manganahalli Main Road, Bengaluru.
                With three dedicated commercial floors, a spacious residential
                house, and modern structural design using post-tensioning, Kayaka
                offers flexibility for large-format retail, offices and an
                exclusive residence.
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <strong>Road frontage:</strong> North 51 ft, East 100 ft,
                  South 45 ft visibility
                </li>
                <li>
                  <strong>Nearby:</strong> Upcoming 30-floor premium apartment
                  (~800m away), large CA site (~30,000 sq ft), 200-bed
                  government hospital, high-street brands within 100–900 meters
                </li>
                <li>
                  <strong>Access:</strong> Within 500 meters of the 100 ft
                  connector road to Mysore & Magadi Road
                </li>
              </ul>
            </div>
            <div>
              <div className="rounded border p-4 bg-gray-50">
                <h4 className="font-semibold">Key Commercial Selling Points</h4>
                <ul className="mt-2 list-disc pl-5 text-gray-600 space-y-1">
                  <li>Large open-plan spaces due to post-tension system</li>
                  <li>High visibility: multiple road frontages</li>
                  <li>
                    Dedicated commercial lift & service areas for
                    loading/unloading
                  </li>
                  <li>Option for dedicated lift access for single-tenant floors</li>
                </ul>
              </div>

              <div className="rounded border p-4 bg-gray-50 mt-4">
                <h4 className="font-semibold">Residential Highlights</h4>
                <ul className="mt-2 list-disc pl-5 text-gray-600 space-y-1">
                  <li>Single 3600 sq ft house with private access</li>
                  <li>
                    Primary lift, security, CCTV and modern smart home features
                  </li>
                  <li>Solar power and power backup planned</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="mt-6">
          <h4 className="text-lg font-semibold">Map Location</h4>
          <div className="mt-3 rounded overflow-hidden shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=12.951489,77.479681&t=k&z=18&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=12.951489,77.479681"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block px-5 py-2 bg-indigo-600 text-white rounded-md text-sm"
          >
            Get Directions
          </a>
        </section>

        {/* Neighbourhood */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold">Neighbourhood & Growth</h3>
          <p className="text-gray-600 mt-2">
            Located in the heart of Sir M. Vishweshwaraiah Layout (SMV Layout,
            BDA) — one of West Bangalore's most sought-after residential and
            commercial corridors.
          </p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <div className="text-2xl font-bold text-indigo-600">30-Floor</div>
              <div className="text-sm text-gray-600 mt-1">Premium apartment coming up ~800m away</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <div className="text-2xl font-bold text-indigo-600">200-Bed</div>
              <div className="text-sm text-gray-600 mt-1">Government hospital nearby</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <div className="text-2xl font-bold text-indigo-600">100 ft</div>
              <div className="text-sm text-gray-600 mt-1">Connector road to Mysore & Magadi Road within 500m</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <div className="text-2xl font-bold text-indigo-600">30,000 ft²</div>
              <div className="text-sm text-gray-600 mt-1">Large CA site adjacent</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <div className="text-2xl font-bold text-indigo-600">3+</div>
              <div className="text-sm text-gray-600 mt-1">Top schools nearby — Vidyanikethan, Chaitanya, Agastya</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <div className="text-2xl font-bold text-indigo-600">High</div>
              <div className="text-sm text-gray-600 mt-1">Daily foot traffic from schools, hospital & residential areas</div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="scroll-mt-20 mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold">Amenities & Facilities</h4>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
              <li>Basement parking (4800 sq ft)</li>
              <li>2 Lifts (Primary + Commercial)</li>
              <li>Power backup & Solar provision</li>
              <li>24/7 CCTV & security</li>
              <li>Loading/unloading area</li>
              <li>Smart locks & access control</li>
              <li>Fire safety & emergency exits</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold">Technical & Structural</h4>
            <p className="text-gray-600 mt-2">
              Post-tension slab system enables column-free retail and office
              layouts and reduces effective beam depth. Typical beam thickness
              ~1.5 ft, clear height 10.5 ft. Detailed structural drawings and
              load plans will be provided by the structural engineer.
            </p>

            <div className="mt-4">
              <div className="text-sm text-gray-500">
                Available on request
              </div>
              <ul className="list-disc pl-5 text-gray-600 mt-2">
                <li>Floor plans and carpet layouts</li>
                <li>Elevation and 3D renders</li>
                <li>Parking layout and service routes</li>
                <li>Energy & sustainability notes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Floor Plans */}
        <section id="plans" className="scroll-mt-20 mt-10">
          <h3 className="text-2xl font-semibold">Floor Plans</h3>
          <p className="text-gray-600 mt-2">
            Floor plans for each commercial level and ground floor.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold mb-2">Ground Floor – 3100 sq ft</h4>
              <img
                src={`${process.env.PUBLIC_URL}/images/ground_floor_plan.jpg`}
                alt="Ground Floor Plan"
                className="w-full rounded border"
              />
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold mb-2">
                First & Second Floor – 3500 sq ft each
              </h4>
              <img
                src={`${process.env.PUBLIC_URL}/images/first_second_floor.jpg`}
                alt="First and Second Floor Plan"
                className="w-full rounded border"
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="scroll-mt-20 mt-10">
          <h3 className="text-2xl font-semibold">Gallery</h3>
          <p className="text-gray-600 mt-2">
            Elevation views of Kayaka — North, East, and NE Corner perspectives.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded overflow-hidden shadow-sm bg-white p-2">
              <img
                src={`${process.env.PUBLIC_URL}/images/North_Side.jpeg`}
                alt="North_Side"
                className="w-full h-64 object-cover rounded"
              />
              <div className="mt-2 text-center text-sm text-gray-700">
                North Side Elevation
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-sm bg-white p-2">
              <img
                src={`${process.env.PUBLIC_URL}/images/East_Side.jpeg`}
                alt="East_Side"
                className="w-full h-64 object-cover rounded"
              />
              <div className="mt-2 text-center text-sm text-gray-700">
                East Side Elevation
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-sm bg-white p-2">
              <img
                src={`${process.env.PUBLIC_URL}/images/NE_Corner_side.jpeg`}
                alt="North-East Corner Elevation"
                className="w-full h-64 object-cover rounded"
              />
              <div className="mt-2 text-center text-sm text-gray-700">
                NE Corner Elevation
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Lead Capture */}
        <section
          id="contact"
          className="scroll-mt-20 mt-10 bg-white rounded-lg p-6 shadow-sm"
        >
          <h3 className="text-2xl font-semibold">Enquire / Book a Visit</h3>
          <p className="text-gray-600 mt-2">
            Fill the form to send us a WhatsApp message, or reach out directly.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${PHONE1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-green-600 text-white rounded-md inline-flex items-center gap-2"
            >
              WhatsApp Us
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Kayaka%20Real%20Estate%20Enquiry`}
              className="px-5 py-3 bg-gray-700 text-white rounded-md inline-flex items-center gap-2"
            >
              Email Us
            </a>
            <a
              href="tel:+919845465200"
              className="px-5 py-3 bg-indigo-600 text-white rounded-md inline-flex items-center gap-2"
            >
              Call: 98454 65200
            </a>
            <a
              href="tel:+919886366691"
              className="px-5 py-3 bg-indigo-600 text-white rounded-md inline-flex items-center gap-2"
            >
              Call: 98863 66691
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="p-3 border rounded"
              placeholder="Full name"
              required
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="p-3 border rounded"
              placeholder="Phone"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="p-3 border rounded"
              placeholder="Email"
              required
            />
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="p-3 border rounded"
            >
              <option>Enquiry</option>
              <option>Book Visit</option>
              <option>Request Brochure</option>
            </select>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="md:col-span-2 p-3 border rounded"
              placeholder="Message / Requirements"
              rows={4}
            />

            <div className="md:col-span-2 flex gap-3 items-center">
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white rounded-md"
              >
                Send via WhatsApp
              </button>
              {sent && (
                <span className="text-sm text-green-600">
                  Opening WhatsApp...
                </span>
              )}
            </div>
          </form>
        </section>

        <footer className="mt-12 border-t pt-6 pb-4 text-sm text-gray-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold text-gray-700">Kaayaka</div>
              <div className="mt-1">SMV Layout (AGS), Manganahalli Main Road, Bengaluru</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Contact</div>
              <div className="mt-1 space-y-1">
                <div><a href="tel:+919845465200" className="hover:text-indigo-600">+91 98454 65200</a></div>
                <div><a href="tel:+919886366691" className="hover:text-indigo-600">+91 98863 66691</a></div>
                <div><a href={`mailto:${EMAIL}`} className="hover:text-indigo-600">{EMAIL}</a></div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Quick Links</div>
              <div className="mt-1 space-y-1">
                <div><a href="#about" className="hover:text-indigo-600">About</a></div>
                <div><a href="#plans" className="hover:text-indigo-600">Floor Plans</a></div>
                <div><a href="#contact" className="hover:text-indigo-600">Contact Us</a></div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400">
            © {new Date().getFullYear()} Kayaka — All rights reserved.
          </div>
        </footer>
      </main>

      {/* Booking Modal (simple) */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-md p-6 w-full max-w-xl">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-semibold">Book a Visit / Reserve</h4>
              <button
                onClick={() => setShowBooking(false)}
                className="text-gray-500"
              >
                Close
              </button>
            </div>

            <form
              onSubmit={(e) => {
                handleSubmit(e);
                setShowBooking(false);
              }}
              className="mt-4 grid gap-3"
            >
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="p-3 border rounded"
                placeholder="Full name"
                required
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="p-3 border rounded"
                placeholder="Phone"
                required
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="p-3 border rounded"
                placeholder="Email"
                required
              />
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="p-3 border rounded"
              >
                <option>Book Visit</option>
                <option>Reserve Space</option>
              </select>

              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setShowBooking(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
