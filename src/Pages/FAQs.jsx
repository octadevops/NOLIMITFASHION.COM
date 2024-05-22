import { useState } from "react";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion";

const FAQs = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "How do I make a purchase?",
      data: `To make a purchase, go to the website's 'order now' button and follow the on-screen instructions.
`,
      isOpen: false,
    },
    {
      key: 2,
      title: " What methods of payment does NOLIMIT Online accept?",
      data: `We have a wide range of payment options for you to choose from. Cash on Delivery (COD) is available throughout the island. Bank Payments / Online Bank Transfers / Payment Link or simply place an order on our website and pay with your VISA, Mastercard and Amercian Express cards.
`,
      isOpen: false,
    },
    {
      key: 3,
      title:
        "Will NOLIMIT Online restock an item I wanted to purchase which is sold out?",
      data: `Will NOLIMIT Online restock an item I wanted to purchase which is sold out?`,
      isOpen: false,
    },
    {
      key: 4,
      title: "Can I ship to more than one address?",
      data: `Although you can enter a different address as the recipient's address, we only ship to one address in one delivery.`,
      isOpen: false,
    },
    {
      key: 5,
      title: "Can I change my delivery address?",
      data: `If you wish to change your delivery address, please immediately contact us and we will do our best to assist you in this matter. In case we cannot change the address anymore, usually because the package has already been shipped, we will need to contact our courier to request a change of delivery address.`,
      isOpen: false,
    },
    {
      key: 6,
      title: "How long does it take for a delivery, and how much does it cost?",
      data: `Our standard delivery time ranges from 2-5 business days. Orders are subject to the prices listed on the product page at the time of purchase. Taxes are not included in these pricing; the entire price (including taxes) is shown on the shopping basket page. We accept a variety of credit cards, including Visa, American Express, and Mastercard, and will charge your credit card for the invoice as soon as the item has been accepted and shipped. International Shipping varies from location to location. Please inquire before make the purchase.`,
      isOpen: false,
    },
    {
      key: 7,
      title: "What is the time limit for a return notice?",
      data: `Exchange/return must be made within 14 days from the purchased date. The garment should be in its original condition in order to be exchanged, it will only be accepted with its receipt and NOLIMIT Onlinetags attached. For more information you can refer to our ‘Exchange Policy’ on the website.
`,
      isOpen: false,
    },
    {
      key: 8,
      title: "If I need to exchange the package, how can I send it to NOLIMIT",
      data: `Refer to our ‘Exchange policy’ and follow our ‘Exchange step by step guide’.
`,
      isOpen: false,
    },
    {
      key: 9,
      title: "How do I track my order?",
      data: `When you make a purchase from us, you will receive an email with your order details and a link to trace your order.`,
      isOpen: false,
    },
    {
      key: 10,
      title:
        "Is it possible to amend or change my order once it has been placed?",
      data: `Once an order is submitted, we are unable to change the ordered products or the quantity selected. In this situation, we suggest you contact us within 10- 25 minutes and you may only propose adjustments or cancel the incorrect order if your package is not yet dispatched from our warehouse. If not, we recommend you cancel the incorrect order and place a new order for your desired item(s) on our website at your own convenience.`,
      isOpen: false,
    },
    {
      key: 11,
      title: "How do I cancel my order?",
      data: `In the event you wish to cancel your order, please contact us. Upon receiving your cancellation request, we will check and reach out to our warehouse to request for your order to be cancelled. Once confirmed, we will contact you to confirm. If your order has already been shipped out, we will contact our courier service and request that the package be rerouted back to our warehouse. In case your order still gets delivered, please refuse the package and request for a return to the sender. We'll process it, issue a full refund to your account, and contact you via email within 2-3 business days of receiving the item(s).`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="bg-[#33383F] w-full text-white flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center ">
          <div className="felx justify-center md:w-[1024px] ">
            <div className="py-5">
              <h2 className="text-2xl mx-auto text-white py-10">FAQs</h2>
              {accordions.map((accordion) => (
                <Accordion
                  key={accordion.key}
                  title={accordion.title}
                  data={accordion.data}
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                />
              ))}
            </div>
            {/* <img src={Main} alt="image" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
