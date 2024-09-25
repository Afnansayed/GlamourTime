import React from "react";

const Question = () => {
  return (
    <section className="bg-gradient-to-r from-sky-300 to-cyan-50 rounded-lg text-gray-800 mt-12">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 text-gray-600">
          Here are some common questions about our salon services. If you have
          more, feel free to contact us!
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
              What types of services do you offer at your salon?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              We offer a variety of services including haircuts, hair coloring,
              styling, manicures, pedicures, facials, and massage therapies. We
              also provide specialized treatments such as keratin smoothing and
              scalp care.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
              Do I need to make an appointment, or do you accept walk-ins?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              We highly recommend booking an appointment to ensure availability,
              especially for popular services like hair coloring or massages.
              However, we do accept walk-ins depending on stylist availability.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
              What should I do if I need to cancel or reschedule my appointment?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              We understand that plans change. You can cancel or reschedule your
              appointment by calling us or using our online booking system at
              least 24 hours in advance to avoid any cancellation fees.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
              What products do you use, and can I purchase them at your salon?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              We use high-quality, professional-grade products from brands such
              as Olaplex, Wella, and MoroccanOil. Many of the products we use
              are available for purchase at our salon to help you maintain your
              look at home.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
              What health and safety measures are in place at your salon?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              Your safety is our priority. We follow all local health
              guidelines, including regular sanitization of tools, workstations,
              and public areas. Masks and hand sanitizers are available for
              staff and clients, and we encourage appointments for social
              distancing purposes.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Question;
