/**
 * A super dumb fetcher
 * pretty much only used in swr stuff
 * */
export const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred whilst fetching data!");

    throw error;
  }

  return res.json();
};
