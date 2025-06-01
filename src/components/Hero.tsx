import Logo from "./Logo";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4">
      {/* Title */}
      <h1 className="font-bold">Lissachatina App</h1>

      {/* Logo */}
      <Logo />
    </div>
  );
};

export default Hero;
