import { Section } from "./Section";
import { contactInfo } from "../data/menu";

export function LocationHours() {
  // Google Maps embed URL for 269 Putnam Ave, Cambridge, MA
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.5088!2d-71.1089!3d42.3656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37761d5d3c4e7%3A0x8b0f3e8b8b8b8b8b!2s269%20Putnam%20Ave%2C%20Cambridge%2C%20MA%2002139!5e0!3m2!1sen!2sus!4v1234567890";

  return (
    <Section id="location" title="Hours & Location" className="bg-slate-800" titleClassName="text-amber-100">
      {/* Decorative header */}
      <div className="flex items-center justify-center gap-4 -mt-4 mb-8">
        <div className="h-0.5 w-20 bg-amber-500"></div>
        <span className="text-amber-400 text-2xl">&#9733;</span>
        <div className="h-0.5 w-20 bg-amber-500"></div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Hours and Location Info */}
        <div className="space-y-6">
          {/* Hours */}
          <div className="rounded-lg bg-slate-900 p-6 shadow-lg border-2 border-amber-700/50">
            <h3 className="mb-4 text-xl font-bold text-amber-100 uppercase tracking-wide flex items-center gap-2">
              <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hours
            </h3>
            <div className="space-y-3 text-amber-100">
              <p className="flex items-center gap-3 text-lg">
                <span className="font-bold text-white">Mon-Sat:</span>
                <span>11am – 6pm</span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <span className="font-bold text-white">Sunday:</span>
                <span>11am – 4pm</span>
              </p>
              {contactInfo.hours.note && (
                <p className="mt-4 text-amber-300 italic text-sm border-t border-slate-700 pt-3">
                  {contactInfo.hours.note}
                </p>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="rounded-lg bg-slate-900 p-6 shadow-lg border-2 border-amber-700/50">
            <h3 className="mb-4 text-xl font-bold text-amber-100 uppercase tracking-wide flex items-center gap-2">
              <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Find Us
            </h3>
            <div className="space-y-3 text-amber-100">
              <p className="text-lg">{contactInfo.address}</p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
                  className="text-lg font-bold text-amber-300 transition-colors hover:text-white"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <div className="mt-4 p-4 bg-red-800/30 rounded-lg border border-red-700/50">
                <p className="text-amber-200 text-sm">
                  Look for the <span className="font-bold text-white">blue house</span> on Putnam Ave near Harvard.
                  Outdoor picnic seating available!
                </p>
              </div>

              {/* Get Directions Button */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contactInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 sm:px-5 bg-red-700 text-white rounded-lg text-sm sm:text-base font-medium hover:bg-red-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="rounded-lg overflow-hidden shadow-lg border-2 border-amber-700/50 h-full min-h-[300px] md:min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.4396799075344!2d-71.11437168454477!3d42.36687097918594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37761c8a9a8a9%3A0x8a8a8a8a8a8a8a8a!2s269%20Putnam%20Ave%2C%20Cambridge%2C%20MA%2002139!5e0!3m2!1sen!2sus!4v1703854800000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "300px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alive & Kicking Lobsters Location"
          ></iframe>
        </div>
      </div>
    </Section>
  );
}
