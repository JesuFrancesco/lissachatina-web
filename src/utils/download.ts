export const handleDownloadClient = (asset: string) => {
  const link = document.createElement("a");
  link.href = asset;
  link.click();
};
