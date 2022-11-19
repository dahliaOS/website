import useSWR, { SWRResponse } from "swr";
import { Releases } from "../../types/types";

export const useGithubReleases = () => {
  const { data, error }: SWRResponse<Releases, Error> = useSWR(
    "https://api.github.com/repos/dahliaOS/releases/releases",
  );

  return {
    releases: data,
    isLoading: !error && !data,
    isError: error,
  };
};
