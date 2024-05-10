import { ChevronRightIcon, InboxIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";

const lists = [
  {
    title: "Extra link",
    content: {
      items: ["Affiliate Program", "Bussiness Services", "Education Services", "Gift Cards"],
    },
  },
  {
    title: "Legal",
    content: {
      items: ["join Us", "Blog", "Privacy & Policy", "Terms & Conditions"],
    },
  },
  {
    title: "Company",
    content: {
      items: ["About Us", "Blog", "Contact", "Careers"],
    },
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col">
      {/* FOOTER TOP */}
      <span className="flex items-start justify-center bg-[#1a1a1a] py-10 gap-5 ">
        {/* CONNECT */}
        <div className="flex flex-col w-[200px]">
          <h2 className="text-xl font-semibold mb-5 mt-1">Connect</h2>
          <p>Far far away, behind the word mountains, far from the countries.</p>
        </div>
        {/* END CONNECT */}

        {/* CONNECT */}
        {lists.map((item, index) => (
          <div className="flex flex-col mx-5" key={index}>
            <h2 className="text-xl font-semibold mb-5">{item.title}</h2>
            <ul className="flex flex-col gap-1">
              {item.content.items.map((subitem) => (
                <li key={subitem} className="flex gap-1">
                  <span className="flex items-center justify-center">
                    <ChevronRightIcon className="w-4 h-4" />
                  </span>
                  <p>{subitem}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* END CONNECT */}

        {/* QUESTIONS */}
        <div className="flex flex-col w-[200px] ms-20">
          <h2 className="text-xl font-semibold  mb-4">Have a Questions?</h2>
          <ul className="flex flex-col gap-1 items-start">
            <li className="flex gap-3">
              <span className="flex items-start justify-center mt-1">
                <MapIcon className="w-4 h-4" />
              </span>
              203 Fake St. Mountain View, San Francisco, California, USA
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center">
                <PhoneIcon className="w-4 h-4" />
              </span>
              +2 392 3929 210
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center">
                <InboxIcon className="w-4 h-4" />
              </span>
              info@yourdomain.com
            </li>
          </ul>
        </div>
        {/* END QUESTIONS */}
      </span>
      {/* END FOOTER TOP */}

      {/* FOOTER BOTTOM  */}
      <p className="my-5 text-center text-gray-300">
        Copyright ©2024 All rights reserved | This template is made by <span className="text-white font-bold">Hazz</span>
      </p>
      {/* END FOOTER BOTTOM  */}
    </footer>
  );
};

export default Footer;
