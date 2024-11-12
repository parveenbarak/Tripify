const Razorpay = require("razorpay");

const paymentHandle = async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = req.body;

    // Validate the request payload
    if (!options.amount || !options.currency || !options.receipt) {
      return res.status(400).json({ message: "Invalid request payload" });
    }

    const order = await razorpay.orders.create(options);
    if (!order) {
      return res.status(500).json({ message: "Failed to create order" });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { paymentHandle };