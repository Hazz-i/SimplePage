import { ChevronRightIcon } from "@heroicons/react/24/outline";

const lists = [
  ["Extra link", ["Affiliate Program", "Bussiness Services", "Education Services", "Gift Cards"]],
  ["Legal", ["join Us", "Blog", "Privacy & Policy", "Terms & Conditions"]],
  ["Company", ["About Us", "Blog", "Contact", "Careers"]],
];

const Footer = () => {
  return (
    <footer className="h-[30vh] bg-black text-white flex flex-col">
      {/* FOOTER TOP */}
      <span className="flex items-center justify-center bg-gray-600 py-10 gap-5">
        {/* CONNECT */}
        <div className="flex flex-col w-[200px]">
          <h2 className="text-semibold mb-5">Connect</h2>
          <p>Far far away, behind the word mountains, far from the countries.</p>
        </div>
        {/* END CONNECT */}

        {/* CONNECT */}
        <div className="flex">
          {/* {lists.map((item, index) => (
            <li key={index} className={`flex ${index % 2 === 0 ? "flex-row" : "flex-col"}`}>
              <div className="flex-col">
                <h2 className="text-lg font-bold mb-2">{item[0]}</h2>
                {item.map((subItem: any) => (
                  <span key={subItem} className="mr-4 flex">
                    <ChevronRightIcon className="w-5" />
                    {subItem}
                  </span>
                ))}
              </div>
            </li>
          ))} */}
        </div>
        {/* END CONNECT */}
      </span>
      {/* FOOTER TOP */}
    </footer>
  );
};

export default Footer;
