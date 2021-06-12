require("dotenv").config();

if (process.env.APP_MODE === "SEED") {
  require("./server");
  require("./_seed");
} else {
  require("./server");
}
