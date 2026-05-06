import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Hometown Communities",
  description: "Find answers to common questions about manufactured homes, billing, financing, maintenance, and pet policies at Hometown Communities.",
  openGraph: {
    title: "FAQ | Hometown Communities",
    description: "Get answers to your questions about manufactured home living.",
  },
  alternates: {
    canonical: "https://hometowncommunities.com/faq",
  },
};

const faqCategories = [
  {
    id: "general",
    name: "General",
    icon: "/images/icons/general.svg",
    description: "General frequently asked questions by new and existing residents.",
    questions: [
      { q: "Are manufactured homes affordable?", a: "Manufactured homes provide quality housing and an opportunity for home-ownership. They often cost less than renting, and can offer more square footage and distance from neighbors than an apartment. The cost per square foot for a new manufactured home can be up to 50 percent less than the cost of a comparable site-built home, excluding land costs." },
      { q: "Are manufactured homes built to the same codes as site-built homes?", a: "Manufactured Homes are built to a set of standards as tough as those facing the site-built home builder. The Federal Manufactured Homes Construction and Safety standards govern their production, ensuring quality and safety requirements comparable to traditional site-built construction methods." },
      { q: "Are manufactured homes covered by a warranty?", a: "Yes, most manufacturers now provide warranties to guarantee the quality, workmanship, and major heating and cooling systems of the home for a specified period, typically measured in years." },
      { q: "Are manufactured homes more susceptible to fire than site-built homes?", a: "Modern manufactured homes are as safe as traditional site-built homes regarding fire susceptibility. Post-1976 manufactured homes meet the same safety standards as conventionally constructed homes." },
      { q: "Are manufactured homes more vulnerable to damage from tornadoes and hurricanes?", a: "Manufactured homes perform as well as site-built homes during a storm. The perception of greater vulnerability may stem from other factors rather than inherent structural weakness." },
      { q: "Are there limits on where I can locate or place a manufactured home?", a: "Many cities and towns, still relying on outdated perceptions and stereotypes of \"mobile homes,\" have zoning regulations limiting where you can place a manufactured home. Prospective buyers should check local zoning laws in their area." },
      { q: "Are your communities 55+, and do you accept children?", a: "Most of our communities are all-ages and welcome families with children. Posada Del Sol in Harlingen, TX is our only 55+ community." },
      { q: "Can manufactured homes be customized?", a: "With the vast majority of manufacturers now using the latest in computer-assisted design, you have the flexibility of customizing your home's floor plans and other features." },
      { q: "Do manufactured homes use the same building materials and processes as traditional site-built homes?", a: "Today's manufactured homes are constructed with identical building materials as site-built homes. However, the key distinction lies in the environment: manufactured homes are built in controlled factory settings where quality standards can be more consistently maintained." },
      { q: "Do you allow RV's and/or have any spots available for rent?", a: "Some of our communities offer RV sites. Towne North in Laredo and Posada Del Sol in Harlingen have RV accommodations available." },
      { q: "Do you offer moving assistance?", a: "Moving assistance is definitely a possibility. Reach out to your community manager to inquire about receiving moving assistance." },
      { q: "How can I receive real-time community notices and information?", a: "Each Hometown Communities location has a bulletin board positioned near the mailboxes where residents can find community updates and announcements." },
      { q: "How do I apply and what are the requirements?", a: "Apply online through our resident application portal. Requirements include background check, income verification, and credit review. We prefer applicants with a credit score of at least 550 or higher. Most applications are processed within 48 hours." },
      { q: "How do I bring my own home to the community?", a: "To bring your own home to Hometown Communities, you must complete a resident application and receive park approval. You'll need to send pictures of the home you are wanting to move into the community as part of the application process." },
      { q: "How do I contact my community manager?", a: "Contact information for each community is available on their individual community pages. You can also call or email directly. Office hours are typically Monday-Friday, 9AM-5PM." },
      { q: "How is a manufactured home different from a site-built home?", a: "A manufactured home is constructed entirely in a controlled factory environment and built according to federal Manufactured Home Construction and Safety Standards. In contrast, a site-built home is constructed on-site using traditional building methods." },
      { q: "What are today's manufactured homes like?", a: "Modern manufactured homes feature innovative designs and custom home features like state-of-the-art kitchens, luxury bathrooms and wood burning fireplaces." },
      { q: "What do I do if I want to move in/buy a home?", a: "Complete and submit our Resident Application. After submission, a representative will contact you to guide you through the next steps." },
      { q: "What do I do if I want to sell my home?", a: "Before selling your home, you must contact your community manager. We reserve the right to purchase your home first." },
      { q: "What does a modern manufactured home look like?", a: "See for yourself! View our available homes for sale or rent on the Available Homes page." },
      { q: "What is the role of the retailer in purchasing a manufactured home?", a: "Most manufactured homes are sold through retail sales centers, many of which operate independently while others are manufacturer-owned." },
      { q: "Who do I contact if I cannot report my issue to my community manager?", a: "You can call your local community office number and select the option for \"Corporate\"." },
      { q: "Who takes care of installing a manufactured home?", a: "Most states have laws that govern the installation of a new manufactured home. Your retailer or the subcontractor installing the home is responsible for the installation process." },
      { q: "Why should I consider a manufactured home?", a: "If you're looking to maximize your housing dollar, manufactured homes are worth considering. Depending on the region of the country, construction costs and other factors can make manufactured homes a more affordable option." },
      { q: "Will a manufactured home appreciate in value?", a: "Generally, a home is a great investment. Appreciation on any home - either site-built or manufactured - is affected by similar factors: the desirability of the location and other market conditions." },
      { q: "Will buying a manufactured home offer tax benefits?", a: "You can deduct the interest that you have paid on the home, just like a conventional mortgage." },
    ],
  },
  {
    id: "billing",
    name: "Billing",
    icon: "/images/icons/billing.svg",
    description: "Billing and rent questions asked by new and existing residents.",
    questions: [
      { q: "Can I pay my bills online?", a: "Yes, residents can pay their bills online by logging into the resident portal at communityresport.com to make rent payments." },
      { q: "Can I pay my rent using cash?", a: "Yes, you can use cash payment locations through Zego/CashPay. Contact your community manager for details on nearby locations." },
      { q: "Can I pay with a check or money order?", a: "Payment methods vary by community. Contact your community manager for accepted payment methods." },
      { q: "Can I set up auto payments for my rent?", a: "Yes, you can set up automatic payments through your resident portal." },
      { q: "Do you rent homes or allow rent-to-own?", a: "Yes, some homes are available with rent-to-own arrangements. Browse our available homes and filter by rent-to-own options." },
      { q: "Does lot rent go up every year?", a: "Lot rent is subject to annual adjustment as stated in your lease agreement. Contact your community manager for specific details." },
      { q: "How do I figure out how much I owe?", a: "You will receive a monthly statement via email and/or you can log in to your resident portal to view your balance." },
      { q: "How do I receive my bill?", a: "Your community manager will deliver them to your home, unless you go paperless. If you have selected paperless billing, you can log in to your resident portal." },
      { q: "What fees are associated with paying online?", a: "Each bank may differ in the charges for online payments. Check with your payment provider for specific fees." },
      { q: "What if I can't pay my bill?", a: "Communication is the key to success. If you are falling behind on payments, please contact your community manager immediately." },
      { q: "What is CashPay?", a: "ZEGO CashPay is a Visa branded card account and is FDIC insured. Residents can locate nearby facilities to establish their CashPay account for making rent payments locally." },
      { q: "What is lot rent?", a: "Lot rent is the amount of money you pay each month to rent the land that your home is placed on." },
      { q: "What is the cost of your lot rent?", a: "Lot Rent varies by community, ranging from $350-$565/month. Visit our communities page to find specific pricing for your community of interest." },
      { q: "What other costs can I expect to pay?", a: "Lot rent, water, gas, trash and sewer (varies by community). Pet fees may apply - typically $30 for one pet, $50 for two." },
      { q: "When is my rent due?", a: "Lot rent is typically due on the 1st of each month. Check your lease agreement for specific terms and grace periods." },
    ],
  },
  {
    id: "financing",
    name: "Financing",
    icon: "/images/icons/financing.svg",
    description: "Questions about financing options for manufactured homes.",
    questions: [
      { q: "Do I need a down payment?", a: "Yes, generally between 5%-10%. Consult with a lender for specific requirements. Manufactured home loans take less time to process compared to traditional mortgages." },
      { q: "How do I apply and what are the requirements to be approved for financing?", a: "Hometown Communities offers financing on select manufactured homes. To improve your approval chances, applicants should maintain good credit, have no collections, and obtain park approval. Contact us to discuss your options." },
      { q: "What can I afford?", a: "First determine your budget and reach out to one of our lenders to help \"pre-qualify\" you for your new home!" },
      { q: "What kinds of financing are available?", a: "There are a variety of financing options when you buy a manufactured home, similar to site-built homes. We work with various credit situations - contact us to discuss your options." },
    ],
  },
  {
    id: "maintenance",
    name: "Maintenance",
    icon: "/images/icons/maintenance.svg",
    description: "Maintenance and home improvement questions.",
    questions: [
      { q: "Are residents responsible for their own lawn care?", a: "Landscaping the specific lot is the responsibility of the resident. Common areas are kept up by the community." },
      { q: "Are tenants responsible for shoveling snow from their sidewalks and parking areas?", a: "The park takes care of snow removal in the streets, however residents are responsible for snow removal on the sidewalk in front of their home." },
      { q: "Are utilities included?", a: "Utility inclusion varies by community. Some communities include water and sewer in lot rent, while others bill back through the community. Electric and gas are typically resident responsibility." },
      { q: "Can I make improvements or add on to my home?", a: "Yes, with prior approval. Submit a home improvement request through our website. Once management has approved your request, you will need to get a permit if you are adding to your property." },
      { q: "How is the community managed?", a: "All of our communities have an onsite manager and maintenance staff available Monday-Friday. Emergency maintenance should be reported immediately by phone." },
      { q: "Who is responsible for plumbing issues?", a: "Plumbing issues are the responsibility of the resident for all instances between the meter and the home. Contact your utility provider directly for service issues beyond the meter." },
    ],
  },
  {
    id: "pets",
    name: "Pet Restrictions",
    icon: "/images/icons/pet-restrictions.svg",
    description: "Pet breed restrictions and policy questions.",
    questions: [
      { q: "Are emotional support animals allowed in my community?", a: "Please contact your local community manager for more information about emotional support animal policies." },
      { q: "Are pets allowed?", a: "Yes! All our communities are pet-friendly. Maximum 2 pets per home with a 30 lb weight limit per pet. Pet deposits and/or monthly pet rent may apply." },
      { q: "What breeds are restricted?", a: "Restricted breeds typically include: Pit Bulls, Rottweilers, German Shepherds, Bulldogs, Mastiffs, Huskies, Dobermans, and Alaskan Malamutes. Contact your community to confirm current policies." },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl">
            We aim to provide convenient accessibility for payments, maintenance requests,
            important documents, pet policies, and general information.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-gray-50 border-b sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-primary-dark"
              >
                <Image
                  src={category.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="opacity-70"
                />
                <span className="font-medium">{category.name}</span>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                  {category.questions.length}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 relative">
                  <Image
                    src={category.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                  <p className="text-gray-500">{category.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                      <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                      <svg
                        className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Still Have Questions?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our team is here to help. Contact us directly or reach out to your community manager.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-primary-dark px-8 py-4 font-semibold text-white hover:bg-primary transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/communities"
              className="rounded-md border-2 border-primary-dark px-8 py-4 font-semibold text-primary-dark hover:bg-primary-dark hover:text-white transition-colors"
            >
              Find Your Community
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
