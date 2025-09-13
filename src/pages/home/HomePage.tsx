import "@/App.css";
import { Link } from "react-router-dom"
import DownloadButton from "@components/DownloadButton";
import Hero from "@components/Hero";
import ImageCarousel from "@components/ImageCarousel";
import GithubLogo from "@/assets/github.svg";

function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Hero */}
      <Hero />

      {/* Carrusel */}
      <ImageCarousel />

      {/* CTA */}
      <p className="text-3xl text-center">¡Descarga la app ahora!</p>
      <div className="flex flex-row justify-center align-middle gap-16">
        <DownloadButton
          disabled={false}
          title="Android"
          asset="https://github.com/JesuFrancesco/lissachatina-web/releases/download/0.6.0-beta%2B2/app-arm64-v8a-release.apk"
        />
        <DownloadButton
          disabled={true}
          title="iOS"
          asset="https://github.com/JesuFrancesco/lissachatina-web/releases/latest"
        />
      </div>

      <hr />

      {/* CTA 2 */}
      <p className="text-3xl text-center">¡Visítanos en GitHub!</p>
      <div className="w-full flex flex-col justify-center align-middle items-center gap-4">
        <a
          href="https://github.com/JesuFrancesco/lissachatina-web"
          target="_blank"
        >
          <img
            src={GithubLogo}
            width={128}
            height={128}
            className="dark:invert"
            alt="Github Logo"
          />
        </a>
      </div>
      <footer>
        <Link to="/politica-de-privacidad">Política de privacidad</Link>
      </footer>
    </div>
  );
}

export default HomePage;
