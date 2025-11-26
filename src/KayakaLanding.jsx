import React, { useState } from "react";

// Kayaka Landing Page - Single File React Component
// TailwindCSS classes used (assumes Tailwind is configured in the project)
// Replace image placeholders with real images / renders

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

  async function handleSubmit(e) {
    e.preventDefault();
    // TODO: Replace endpoint with your serverless function or CRM endpoint
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, project: "Kayaka" }),
      });
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "", type: "Enquiry" });
    } catch (err) {
      console.error(err);
      alert("Failed to send. Please try via phone or email.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-md bg-gradient-to-br from-indigo-600 to-teal-400 flex items-center justify-center text-white font-bold"></div>
            <div>
              <h1 className="text-lg font-semibold">Kayaka</h1>
              <p className="text-sm text-gray-500">
                Bengaluru — AGS layout, Manganahalli Main Road
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
            <a href="#amenities" className="hover:text-indigo-600">
              Amenities
            </a>
            <a href="#plans" className="hover:text-indigo-600">
              Plans
            </a>
            <a href="#gallery" className="hover:text-indigo-600">
              Gallery
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              onClick={() => setShowBooking(true)}
            >
              Book / Enquire
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">
              Kayaka — Commercial & Residential Landmark in AGS Layout
            </h2>
            <p className="mt-4 text-gray-600">
              We are pleased to present a premium commercial building available
              for lease on Manganahalli Main Road — a rapidly growing
              commercial–residential corridor. With exceptional visibility,
              three-side road access, and a structurally superior design, this
              property is well-suited for brands seeking a strong presence in a
              high-demand location. Strategically designed for maximum frontage,
              accessibility, and business visibility, this commercial asset
              stands out as an ideal choice for enterprises looking to establish
              or expand their footprint in West Bangalore.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-lg bg-white p-4 shadow-sm border">
                <div className="text-sm text-gray-400">Commercial Carpet</div>
                <div className="font-semibold">Ground - 3000 sq ft</div>
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
                Book a Slot
              </button>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>
                Post-tensioned construction — large clear spans, minimal columns
              </li>
              <li>Clear height: 10.5 ft</li>
              <li>Three-sided road exposure, 51 ft northern frontage</li>
              <li>Close to major retail & food brands and hospital</li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden bg-gray-10">
            {/* Placeholder image - replace with elevation or render */}
            <div className="h-full flex items-center justify-center text-gray-600">
              <img
                src="./images/NE.jpg"
                alt="North-East Corner Elevation"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* About / Location */}
        <section id="about" className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-2xl font-semibold">
            Project Overview & Location
          </h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700">
                Kayaka is a five-floor mixed use building (including a basement
                for parking) strategically located on Manganahalli Main Road in
                AGS Layout, Bengaluru. With three dedicated commercial floors, a
                spacious residential house, and modern structural design using
                post-tensioning, Kayaka offers flexibility for large-format
                retail, offices and an exclusive residence.
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <strong>Road frontage:</strong> North side 51 ft, East 100 ft,
                  other sides 40 ft & 30 ft roads
                </li>
                <li>
                  <strong>Nearby:</strong> Large CA site (~30,000 sq ft),
                  200-bed government hospital, high-street brands within 100–900
                  meters
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.9479234526919!2d77.483!3d12.971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c7c1fba5ab3%3A0xd7de5d6afeb3eef!2sAGS%20Layout%2C%20Manganahalli%20Main%20Road%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold">Amenities & Facilities</h4>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
              <li>Basement parking (4800 sq ft)</li>
              <li>2 Lifts (Primary + Commercial)</li>
              <li>Power backup & Solar provision</li>
              <li>24/7 CCTV & security</li>
              <li>Loading/unloading area</li>
              <li>Smart locks & access control</li>
              <li>Fire safety & emergency exits (to be detailed)</li>
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
                Deliverables (suggested)
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
        <section id="plans" className="mt-10">
          <h3 className="text-2xl font-semibold">Floor Plans</h3>
          <p className="text-gray-600 mt-2">
            High‑resolution floor plans for each commercial level and ground
            floor.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold mb-2">Ground Floor – 3000 sq ft</h4>
              <img
                src="/mnt/data/GROUND FLOOR LAYOUT.pdf"
                alt="Ground Floor Plan"
                className="w-full rounded border"
              />
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold mb-2">
                First & Second Floor – 3500 sq ft each
              </h4>
              <img
                src="/mnt/data/First and Second Floor plan.pdf"
                alt="First and Second Floor Plan"
                className="w-full rounded border"
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mt-10">
          <h3 className="text-2xl font-semibold">Gallery</h3>
          <p className="text-gray-600 mt-2">
            Elevation views of Kayaka — North, East, and NE Corner perspectives.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded overflow-hidden shadow-sm bg-white p-2">
              <img
                src="./images/North_Side.jpeg"
                alt="North_Side"
                className="w-full h-64 object-cover rounded"
              />
              <div className="mt-2 text-center text-sm text-gray-700">
                North Side Elevation
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-sm bg-white p-2">
              <img
                src="./images/East_Side.jpeg"
                alt="East_Side"
                className="w-full h-64 object-cover rounded"
              />
              <div className="mt-2 text-center text-sm text-gray-700">
                East Side Elevation
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-sm bg-white p-2">
              <img
                src="./images/NE_Corner_side.jpeg"
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
          className="mt-10 bg-white rounded-lg p-6 shadow-sm"
        >
          <h3 className="text-2xl font-semibold">Enquire / Book a Visit</h3>
          <p className="text-gray-600 mt-2">
            Fill the form and our sales team will contact you. For urgent
            queries call +91-XXXXXXXXXX
          </p>

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
                className="px-6 py-3 bg-indigo-600 text-white rounded-md"
              >
                Send Enquiry
              </button>
              {sent && (
                <span className="text-sm text-green-600">
                  Thanks — we will contact you shortly!
                </span>
              )}
            </div>
          </form>
        </section>

        <footer className="mt-12 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              © {new Date().getFullYear()} Kayaka — All rights reserved.
            </div>
            <div>
              Designed for: AGS Layout, Manganahalli Main Road, Bengaluru
            </div>
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
                  className="px-4 py-2 bg-indigo-600 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
