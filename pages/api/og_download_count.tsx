import { ImageResponse } from "@vercel/og";
import Image from "next/image";
export const config = {
  runtime: "edge",
};

interface DownloadCount {
  success: boolean;
  data: number;
}

export default async function handler() {
  try {
    const request: DownloadCount = await fetch(
      "https://dahliaos.io/api/download_count",
    ).then(res => res.json());

    const count = request.success
      ? `Total download count is ${request.data}`
      : "Could not obtain total download count";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "white",
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "200px",
          }}
        >
          <Image
            alt="dahliaOS Logotype"
            width={400}
            src="https://raw.githubusercontent.com/dahliaOS/brand/62d9cf35262982255fd85545e0185b9e39642fb1/dahliaOS/logotype/svg/logotype-light.svg"
          />
          <p
            style={{
              fontSize: 45,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: "black",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            }}
          >
            {count}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch {
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
