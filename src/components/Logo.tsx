import snailLogo from "/snail.svg";

const Logo = () => {
  return (
    <img
      src={snailLogo}
      className="w-32 hover:scale-110 transition-transform hover:duration-1000 hover:ease-in-out hover:-rotate-12 dark:invert"
      alt="Lissachatina Logo"
    />
  );
};

export default Logo;
