import  ratelimit  from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit(`rate-limit-${req.ip}`);

        if (!success) {
            return res.status(429).json({ message: "Too many requests. Please try again later." });
        }

        next();
    } catch (error) {
        console.error("Rate limiting error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default rateLimiter;

