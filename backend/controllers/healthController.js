exports.healthCheck = (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend API is working successfully"
  });
};