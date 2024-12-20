import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header className="w-full bg-blue h-10 flex items-center justify-between px-3 text-white">
      <div className="flex space-x-2 flex-1">
        <a href="https://www.instagram.com/artefatos_primavera/">
          <Icon icon="ri:instagram-fill" className="size-5" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100057334454682">
          <Icon icon="ic:baseline-facebook" className="size-5" />
        </a>
      </div>
      <h1 className="flex-1 text-center">
        <span className="font-bold">Frete grátis</span> pra <span className="underline">campinas e região</span>
      </h1>
      <div className="flex items-center flex-1 justify-end">
        <Icon icon="ic:baseline-phone" className="size-5 mr-2" />
        <p className="font-bold">(19) 98112-3456</p>
      </div>
    </header>
  );
};

export default Header;
