import React, { useState } from "react";

const FLOOR_OPTIONS = [
  "Not sure yet",
  "Ground floor (3100 sq ft)",
  "First floor (3500 sq ft)",
  "Second floor (3500 sq ft)",
  "Multiple floors",
];

function FormFields({ form, onChange, idPrefix, showType, showVisitDate }) {
  return (
    <>
      <div>
        <label
          htmlFor={`${idPrefix}-name`}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full name
        </label>
        <input
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          value={form.name}
          onChange={onChange}
          autoComplete="name"
          className="w-full p-3 border rounded"
          required
        />
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-phone`}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone
        </label>
        <input
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          value={form.phone}
          onChange={onChange}
          autoComplete="tel"
          className="w-full p-3 border rounded"
          required
        />
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-email`}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          autoComplete="email"
          className="w-full p-3 border rounded"
        />
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-business`}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Your business / intended use
        </label>
        <input
          id={`${idPrefix}-business`}
          name="business"
          type="text"
          value={form.business}
          onChange={onChange}
          autoComplete="organization"
          placeholder="e.g. Retail showroom, clinic, restaurant"
          className="w-full p-3 border rounded"
        />
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-floor`}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Floor of interest
        </label>
        <select
          id={`${idPrefix}-floor`}
          name="floor"
          value={form.floor}
          onChange={onChange}
          autoComplete="off"
          className="w-full p-3 border rounded"
        >
          {FLOOR_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {showType && (
        <div>
          <label
            htmlFor={`${idPrefix}-type`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            I'm looking to
          </label>
          <select
            id={`${idPrefix}-type`}
            name="type"
            value={form.type}
            onChange={onChange}
            autoComplete="off"
            className="w-full p-3 border rounded"
          >
            <option value="Leasing enquiry">Leasing enquiry</option>
            <option value="Book a site visit">Book a site visit</option>
          </select>
        </div>
      )}

      {showVisitDate && (
        <div>
          <label
            htmlFor={`${idPrefix}-visitDate`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Preferred visit date
          </label>
          <input
            id={`${idPrefix}-visitDate`}
            name="visitDate"
            type="date"
            value={form.visitDate}
            onChange={onChange}
            autoComplete="off"
            className="w-full p-3 border rounded"
          />
        </div>
      )}

      <div className="md:col-span-2">
        <label
          htmlFor={`${idPrefix}-message`}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message / Requirements
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          value={form.message}
          onChange={onChange}
          autoComplete="off"
          rows={4}
          className="w-full p-3 border rounded"
        />
      </div>
    </>
  );
}

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  business: "",
  floor: "Not sure yet",
  visitDate: "",
  message: "",
  type: "Leasing enquiry",
};

export default function KayakaLanding() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [showBooking, setShowBooking] = useState(false);
  const [sent, setSent] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const PHONE1 = "919845465200";
  const PHONE2 = "919886366691";
  const EMAIL = "nkamalas@gmail.com";

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function openBooking() {
    setForm((prev) => ({ ...prev, type: "Book a site visit" }));
    setShowBooking(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const lines = [
      "Hi, I'm interested in leasing the commercial space on Manganahalli Main Road (SMV Layout).",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Enquiry type: ${form.type}`,
      form.business && `Business / intended use: ${form.business}`,
      `Floor of interest: ${form.floor}`,
      form.visitDate && `Preferred visit date: ${form.visitDate}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${PHONE1}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    const newWindow = window.open(whatsappUrl, "_blank");
    if (!newWindow) {
      window.location.href = whatsappUrl;
    } else {
      setSent(true);
    }
    setForm(INITIAL_FORM);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <div className="text-lg font-semibold">Commercial Space for Lease</div>
              <p className="text-sm text-gray-500">
                SMV Layout (BDA), Manganahalli Main Road, Bengaluru
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#amenities" className="hover:text-indigo-600">Amenities</a>
            <a href="#plans" className="hover:text-indigo-600">Plans</a>
            <a href="#gallery" className="hover:text-indigo-600">Gallery</a>
            <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded-md">
              Enquire / Visit
            </a>
          </nav>
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileNav(!mobileNav)}
            aria-expanded={mobileNav}
            aria-controls="mobile-menu"
          >
            {mobileNav ? "Close" : "Menu"}
          </button>
        </div>
        {mobileNav && (
          <nav id="mobile-menu" className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm border-t">
            <a href="#about" onClick={() => setMobileNav(false)} className="pt-3">About</a>
            <a href="#amenities" onClick={() => setMobileNav(false)}>Amenities</a>
            <a href="#plans" onClick={() => setMobileNav(false)}>Plans</a>
            <a href="#gallery" onClick={() => setMobileNav(false)}>Gallery</a>
            <a href="#contact" onClick={() => setMobileNav(false)} className="px-4 py-2 bg-indigo-600 text-white rounded-md text-center">
              Enquire / Visit
            </a>
            <a href={`tel:+${PHONE1}`} className="px-4 py-2 border rounded-md text-center">
              Call: 98454 65200
            </a>
          </nav>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-green-100 text-green-700 rounded-full">
              Available for lease
            </span>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight">
              Premium Commercial Space on Manganahalli Main Road
            </h1>
            <p className="mt-4 text-gray-600">
              A new commercial building on Manganahalli Main Road in SMV
              Layout (BDA), with three-side road frontage and column-free
              floors — ideal for retail, showrooms, clinics, restaurants and
              offices.
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
                onClick={openBooking}
                className="inline-block px-6 py-3 border rounded-md"
              >
                Book a Site Visit
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

          <div className="order-1 md:order-2 rounded-lg overflow-hidden bg-gray-10">
            <div className="h-full flex items-center justify-center text-gray-600">
              <img
                src={`${process.env.PUBLIC_URL}/images/NE.jpg`}
                alt="North-east corner elevation of the commercial building on Manganahalli Main Road, SMV Layout"
                width={1156}
                height={900}
                fetchPriority="high"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* About / Location */}
        <section id="about" className="scroll-mt-20 mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Property Overview & Location
          </h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700">
                This property offers three dedicated commercial floors with
                basement parking, located in the prominent Sir M. Visvesvaraya
                Layout (SMV Layout) by BDA, on Manganahalli Main Road,
                Bengaluru. Modern post-tensioned construction provides large
                column-free spaces ideal for retail, showrooms, and offices.
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <strong>Road frontage:</strong> North 51 ft, East 100 ft,
                  South 45 ft visibility
                </li>
                <li>
                  <strong>Nearby:</strong> 80,000 sq ft BDA park across the road,
                  upcoming 30-floor twin-tower apartment (~800m), upcoming park on
                  adjacent 30,000 sq ft CA site, 200-bed government hospital
                </li>
                <li>
                  <strong>Access:</strong> Within 500 meters of the 100 ft
                  connector road to Mysore & Magadi Road
                </li>
              </ul>
            </div>
            <div>
              <div className="rounded border p-4 bg-gray-50">
                <h3 className="font-semibold">Why businesses choose this location</h3>
                <ul className="mt-2 list-disc pl-5 text-gray-600 space-y-1">
                  <li>Large open-plan spaces due to post-tension system</li>
                  <li>High visibility: multiple road frontages</li>
                  <li>
                    Dedicated commercial lift & service areas for
                    loading/unloading
                  </li>
                  <li>Option for dedicated lift access for single-tenant floors</li>
                  <li>Lease a single floor or multiple floors</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="mt-6">
          <h3 className="text-lg font-semibold">Map Location</h3>
          <div className="mt-3 rounded overflow-hidden shadow-sm">
            <iframe
              title="Map showing the location of the commercial space on Manganahalli Main Road"
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
          <h2 className="text-2xl font-semibold">Neighbourhood & Growth</h2>
          <p className="text-gray-600 mt-2">
            Located in the heart of Sir M. Visvesvaraya Layout (SMV Layout,
            BDA) — one of West Bangalore's fastest-growing commercial
            corridors.
          </p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <div className="text-2xl font-bold text-indigo-600">30-Floor</div>
              <div className="text-sm text-gray-600 mt-1">Upcoming twin towers ~800 m away — a growing customer catchment</div>
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
              <div className="text-sm text-gray-600 mt-1">Upcoming park on adjacent CA site</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <div className="text-2xl font-bold text-indigo-600">3+</div>
              <div className="text-sm text-gray-600 mt-1">Top schools — Vidyanikethan, Chaitanya, Agastya</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border text-center">
              <div className="text-2xl font-bold text-indigo-600">80,000 ft²</div>
              <div className="text-sm text-gray-600 mt-1">BDA public park across the road</div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <h3 className="font-semibold text-gray-700">Dining & Entertainment</h3>
              <p className="text-sm text-gray-600 mt-2">
                Domino's, Pizza Hut, Nandhini, Samruddi, Krishna Aramane,
                Suka, The Soda Factory — all within the neighbourhood.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <h3 className="font-semibold text-gray-700">Established Brands on This Road</h3>
              <p className="text-sm text-gray-600 mt-2">
                Zudio, Harsha Electricals, Honda and TVS two-wheeler showrooms
                — proven commercial demand on Manganahalli Main Road.
              </p>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="scroll-mt-20 mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Amenities & Facilities</h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
              <li>Basement parking</li>
              <li>2 Lifts (Primary + Commercial)</li>
              <li>Power backup & Solar provision</li>
              <li>24/7 CCTV & security</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Technical & Structural</h3>
            <p className="text-gray-600 mt-2">
              Post-tension slab system enables column-free retail and office
              layouts and reduces effective beam depth. Typical beam thickness
              ~1.5 ft, clear height 10.5 ft. Detailed structural drawings and
              load plans are available to shortlisted tenants on request.
            </p>

            <div className="mt-4">
              <div className="text-sm text-gray-500">
                Available on request
              </div>
              <ul className="list-disc pl-5 text-gray-600 mt-2">
                <li>Parking layout and service routes</li>
                <li>Power load and energy details</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Floor Plans */}
        <section id="plans" className="scroll-mt-20 mt-10">
          <h2 className="text-2xl font-semibold">Floor Plans</h2>
          <p className="text-gray-600 mt-2">
            Floor plans for each commercial level and ground floor.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold mb-2">Ground Floor – 3100 sq ft</h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/ground_floor_plan.jpg`}
                alt="Ground floor layout plan — 3100 sq ft commercial space"
                loading="lazy"
                className="w-full rounded border"
              />
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold mb-2">
                First & Second Floor – 3500 sq ft each
              </h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/first_second_floor.jpg`}
                alt="First and second floor layout plan — 3500 sq ft each"
                loading="lazy"
                className="w-full rounded border"
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="scroll-mt-20 mt-10">
          <h2 className="text-2xl font-semibold">Gallery</h2>
          <p className="text-gray-600 mt-2">
            Elevation views of the building — North, East, and north-east
            corner perspectives.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <figure className="rounded overflow-hidden shadow-sm bg-white p-2">
              <img
                src={`${process.env.PUBLIC_URL}/images/North_Side.jpeg`}
                alt="North side elevation of the commercial building"
                loading="lazy"
                className="w-full h-64 object-cover rounded"
              />
              <figcaption className="mt-2 text-center text-sm text-gray-700">
                North Side Elevation
              </figcaption>
            </figure>

            <figure className="rounded overflow-hidden shadow-sm bg-white p-2">
              <img
                src={`${process.env.PUBLIC_URL}/images/East_Side.jpeg`}
                alt="East side elevation of the commercial building"
                loading="lazy"
                className="w-full h-64 object-cover rounded"
              />
              <figcaption className="mt-2 text-center text-sm text-gray-700">
                East Side Elevation
              </figcaption>
            </figure>

            <figure className="rounded overflow-hidden shadow-sm bg-white p-2">
              <img
                src={`${process.env.PUBLIC_URL}/images/NE_Corner_side.jpeg`}
                alt="North-east corner elevation of the commercial building"
                loading="lazy"
                className="w-full h-64 object-cover rounded"
              />
              <figcaption className="mt-2 text-center text-sm text-gray-700">
                NE Corner Elevation
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Contact / Lead Capture */}
        <section
          id="contact"
          className="scroll-mt-20 mt-10 bg-white rounded-lg p-6 shadow-sm"
        >
          <h2 className="text-2xl font-semibold">Leasing Enquiry / Book a Visit</h2>
          <p className="text-gray-600 mt-2">
            Lease terms are tailored to each tenant. Tell us a little about
            your business and we'll get back with a quote that fits your
            needs.
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
              href={`mailto:${EMAIL}?subject=Commercial%20Space%20Leasing%20Enquiry`}
              className="px-5 py-3 bg-gray-700 text-white rounded-md inline-flex items-center gap-2"
            >
              Email Us
            </a>
            <a
              href={`tel:+${PHONE1}`}
              className="px-5 py-3 bg-indigo-600 text-white rounded-md inline-flex items-center gap-2"
            >
              Call: 98454 65200
            </a>
            <a
              href={`tel:+${PHONE2}`}
              className="px-5 py-3 bg-indigo-600 text-white rounded-md inline-flex items-center gap-2"
            >
              Call: 98863 66691
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <FormFields
              form={form}
              onChange={handleChange}
              idPrefix="main"
              showType
              showVisitDate={form.type === "Book a site visit"}
            />

            <div className="md:col-span-2 flex gap-3 items-center">
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white rounded-md"
              >
                Send via WhatsApp
              </button>
              {sent && (
                <span role="status" className="text-sm text-green-600">
                  WhatsApp opened in a new tab — just press send.
                </span>
              )}
            </div>
          </form>
        </section>

        <footer className="mt-12 border-t pt-6 pb-4 text-sm text-gray-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold text-gray-700">Commercial Space for Lease</div>
              <div className="mt-1">AGS Layout, SMV Layout (BDA), Manganahalli Main Road, Bengaluru</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Contact</div>
              <div className="mt-1 space-y-1">
                <div><a href={`tel:+${PHONE1}`} className="hover:text-indigo-600">+91 98454 65200</a></div>
                <div><a href={`tel:+${PHONE2}`} className="hover:text-indigo-600">+91 98863 66691</a></div>
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
            © {new Date().getFullYear()} — All rights reserved.
          </div>
        </footer>
      </main>

      {/* Booking Modal (simple) */}
      {showBooking && (
        <div
          className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          <div className="bg-white rounded-md p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start">
              <h3 id="booking-modal-title" className="text-lg font-semibold">Book a Site Visit</h3>
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
              <FormFields
                form={form}
                onChange={handleChange}
                idPrefix="modal"
                showType={false}
                showVisitDate
              />

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
