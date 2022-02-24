import useSWR from "swr";
import { Releases } from "../types/types";

export const useGithubReleases = () => {
  const { data, error } = useSWR(
    "https://api.github.com/repos/dahliaOS/releases/releases",
  );

  return {
    releases: data as Releases,
    isLoading: !error && !data,
    isError: error,
  };
};
