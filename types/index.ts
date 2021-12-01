export type Releases = Array<Release>;

export interface Release {
  name: string;
  tag_name: string;
  body: string;
  assets: Assets[];
  assets_url: string;
  html_url: string;
  created_at: Date;
  published_at: Date;
}

export interface Assets {
  download_count: number;
  name: string;
  browser_download_url: string;
}

export interface DownloadProps {
  more: boolean;
}
