import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import "dotenv/config";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),   // <-- correct
  limiter: Ratelimit.slidingWindow(4, "60 s"),
});

export default ratelimit;




