/**
 * This function converts a blob url to a File object.
 * @param blobUrl
 * @returns
 */
export const blobUrlToFile = async (blobUrl: string): Promise<File> => {
  const response = await fetch(blobUrl);
  const blob = await response.blob();
  const file = new File([blob], "file", { type: blob.type });
  return file;
};
