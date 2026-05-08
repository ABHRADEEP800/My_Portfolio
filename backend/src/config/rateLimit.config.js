import parseForwarded from "forwarded-parse";
import { ipKeyGenerator } from "express-rate-limit";

const smartKeyGenerator = (req, res) => {
  let ip = req.ip;
  try {
    if (req.headers.forwarded) {
      const forwards = parseForwarded(req.headers.forwarded);
      ip = forwards[0]?.for || req.ip;
    }
  } catch {}
  return ipKeyGenerator(ip);
};

export const baseRateLimitOptions = {
  standardHeaders: true,
  legacyHeaders: false,
  validate: { forwardedHeader: false, trustProxy: false },
  keyGenerator: smartKeyGenerator,
};
