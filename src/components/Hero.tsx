import Logo from "./Logo";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-8 p-4">
      {/* Title */}
      <h1 className="text-6xl font-bold">Lissachatina App</h1>

      {/* Logo */}
      <Logo />
    </div>
  );
};

export default Hero;
