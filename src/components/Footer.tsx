import { socials } from "@/constants";

function Footer() {
  return (
    <footer className="border-t border-primary bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              className="text-gray-500 hover:text-green-600"
              rel="noreferrer"
            >
              <span className="sr-only">{social.name}</span>
              <img
                src={social.icon}
                alt="Nationale loterij logo"
                className="h-4 w-4"
              />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-white">
            &copy; 2024 Nationale Loterij
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
