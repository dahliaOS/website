import type { NextApiRequest, NextApiResponse } from "next";
import { APIResponse } from "../../types/types";

interface Author {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface Uploader {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface Asset {
  url: string;
  id: number;
  node_id: string;
  name: string;
  label?: unknown;
  uploader: Uploader;
  content_type: string;
  state: string;
  size: number;
  download_count: number;
  created_at: Date;
  updated_at: Date;
  browser_download_url: string;
}

interface Reactions {
  "url": string;
  "total_count": number;
  "+1": number;
  "-1": number;
  "laugh": number;
  "hooray": number;
  "confused": number;
  "heart": number;
  "rocket": number;
  "eyes": number;
}

export interface VersionResponse {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  author: Author;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: Date;
  published_at: Date;
  assets: Asset[];
  tarball_url: string;
  zipball_url: string;
  body: string;
  discussion_url: string;
  reactions: Reactions;
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<APIResponse<number>>,
) {
  const request: Array<VersionResponse> = await fetch(
    "https://api.github.com/repos/dahliaOS/releases/releases",
  ).then(res => res.json());

  res.status(200).json({
    success: true,
    data: request
      ?.map(allReleases => {
        return allReleases.assets[0].name.includes("efi")
          ? allReleases.assets[0].download_count +
              allReleases.assets[1].download_count
          : allReleases.assets[0].download_count;
      })
      .reduce<number>((accumulator, current) => {
        return accumulator + current;
      }, 0),
  });
}
