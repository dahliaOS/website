import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { Releases } from "@/types/index";

export const useDownloads = () => {
  const { data, error } = useSWR("https://api.github.com/repos/dahliaOS/releases/releases", fetcher);

  return {
    release: data as Releases,
    isLoading: !error && !data,
    isError: error,
  };
};
