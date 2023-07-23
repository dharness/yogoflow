export const blobUrlToFile = async (blobUrl: string): Promise<File> => {
  const response = await fetch(blobUrl);
  const blob = await response.blob();
  const file = new File([blob], "file", { type: blob.type });
  return file;
};
