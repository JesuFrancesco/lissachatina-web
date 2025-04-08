import snailLogo from '/snail.svg'
import './App.css'

const DownloadButton = ({ title, asset }: { title: string , asset: string}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/assets/${asset}`;
    link.download = asset;
    link.click();
  };

  return (
    <button onClick={handleDownload}>{title}</button>
  );
};
function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={snailLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Lisschatina App</h1>
      <div className="card" style={({ display: "flex", flexDirection: "row", gap: 16, justifyContent: "center", alignItems: "center" })}>
        <DownloadButton title='Android' asset='android.apk' />
        <DownloadButton title='iOS' asset='ios.ipa' />
      </div>
      <p>
        ¡Descarga la app ahora!
      </p>
    </>
  )
}

export default App
