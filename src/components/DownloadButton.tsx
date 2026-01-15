import { handleDownloadClient } from "@/utils/download";
import Button from "@/ui/button";
import React from "react";

type DownloadButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  title: string;
  asset?: string;
  icon?: string;
};
export default function DownloadButton({
  disabled,
  title,
  asset,
  icon,
  className,
  ...props
}: DownloadButtonProps) {
  return (
    <Button
      onClick={() => handleDownloadClient(asset!)}
      disabled={disabled}
      className={`hover:font-bold flex align-middle gap-4 flex-row justify-center disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      <img
        src={icon}
        className="dark:invert"
        alt={"Logo de " + title}
        width={32}
        height={32}
      />

      <div className="flex flex-col justify-center">{title}</div>
    </Button>
  );
}
