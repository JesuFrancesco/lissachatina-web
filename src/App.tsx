import snailLogo from "/snail.svg";

import androidLogo from "./assets/android.svg";
import iosLogo from "./assets/apple.svg";

import "./App.css";
import ImageCarousel from "./shared/image-carousel";

const DownloadButton = ({
  title,
  asset,
  disabled,
}: {
  title: string;
  asset: string;
  disabled: boolean;
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = asset;
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      disabled={disabled}
      style={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      {title === "Android" ? (
        <img src={androidLogo} alt="Android Logo" width={24} height={24} />
      ) : (
        <img src={iosLogo} alt="iOS Logo" width={24} height={24} />
      )}
      {title}
    </button>
  );
};

function App() {
  return (
    <>
      {/* Title */}
      <h1>Lissachatina App</h1>

      {/* Logo */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8rem",
        }}
      >
        <a
          href="https://github.com/JesuFrancesco/lissachatina-web"
          target="_blank"
        >
          <img src={snailLogo} className="logo" alt="Snail svg" height={32} />
        </a>
        <ImageCarousel />
      </div>

      {/* CTA */}
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DownloadButton
          disabled={false}
          title="Android"
          asset="https://github.com/JesuFrancesco/lissachatina-web/releases/download/v0.2.0-build-44/app-release.apk"
        />
        <DownloadButton
          disabled={true}
          title="iOS"
          asset="https://github.com/JesuFrancesco/lissachatina-web/releases/download/v0.2.0-build-44/ios_build.tar.gz"
        />
      </div>
      <p>¡Descarga la app ahora!</p>
    </>
  );
}

export default App;
