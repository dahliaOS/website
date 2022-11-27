import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasCount = searchParams.has("count");
    const count = hasCount
      ? `Total download count is ${searchParams.get("count")?.slice(0, 100)}`
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
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <img
              alt="dahliaOS Logotype"
              width={400}
              src="https://raw.githubusercontent.com/dahliaOS/brand/62d9cf35262982255fd85545e0185b9e39642fb1/dahliaOS/logotype/svg/logotype-light.svg"
            />
          </div>
          <div
            style={{
              fontSize: 54,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: "black",
              marginTop: 30,
              padding: "0 120px",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            }}
          >
            {count}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
