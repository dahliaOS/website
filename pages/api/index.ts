import type { NextApiRequest, NextApiResponse } from "next";
import { APIResponse } from "../../types/types";

export const runtime = "edge";

interface IndexResponse {
  message: string;
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<APIResponse<IndexResponse>>,
) {
  res.status(200).json({
    success: true,
    data: {
      message: "Welcome to dahliaOS' web API!",
    },
  });
}
