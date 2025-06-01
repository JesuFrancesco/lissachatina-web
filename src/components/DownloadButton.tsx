import { handleDownloadClient } from "@/utils/download";
import androidLogo from "@/assets/android.svg";
import iosLogo from "@/assets/apple.svg";

export default function DownloadButton({
  title,
  asset,
  disabled,
}: {
  title: string;
  asset: string;
  disabled: boolean;
}) {
  return (
    <button
      onClick={() => handleDownloadClient(asset)}
      disabled={disabled}
      className="font-bold flex align-middle gap-4 flex-row justify-center"
    >
      {title === "Android" ? (
        <img
          src={androidLogo}
          className="dark:invert"
          alt="Android Logo"
          width={32}
          height={32}
        />
      ) : (
        <img
          src={iosLogo}
          className="dark:invert"
          alt="iOS Logo"
          width={32}
          height={32}
        />
      )}
      <div className="flex flex-col justify-center">{title}</div>
    </button>
  );
}
