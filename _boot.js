if (process.env.APP_MODE === "seed") {
  require("./seed");
} else {
  require("./server");
}
