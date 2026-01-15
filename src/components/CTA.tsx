import { Link } from "react-router-dom";
import DownloadButton from "./DownloadButton";
import githubLogo from "@/assets/github.svg";
import androidLogo from "@/assets/android.svg";
import appleLogo from "@/assets/apple.svg";

const CTA = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* CTA */}
      <p className="text-3xl text-center">¡Descarga la app ahora!</p>
      <div className="flex flex-row justify-center align-middle gap-16">
        <DownloadButton
          title="Android"
          asset="https://play.google.com/store/apps/details?id=github.jesufrancesco.lissachatina_app"
          icon={androidLogo}
          className="hover:cursor-pointer"
        />
        <DownloadButton icon={appleLogo} title="iOS" disabled />
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
            src={githubLogo}
            width={128}
            height={128}
            className="dark:invert"
            alt="Github Logo"
          />
        </a>
      </div>
      <footer>
        <Link className="link" to="/politica-de-privacidad">
          Política de privacidad
        </Link>
      </footer>
    </div>
  );
};

export default CTA;
