const { generatePDF } = require("../services/pdfService");

exports.createPDF = async (req, res) => {
    try {
        const { image } = req.body;

        if (!image) {
            return res.status(400).send("Image data is required.");
        }

        const pdfBuffer = await generatePDF(image);

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=biodata.pdf");
        res.setHeader("Content-Length", pdfBuffer.length);

        res.end(pdfBuffer); // 🔥 binary stream (not res.send)

    } catch (error) {
        console.error("PDF generation error:", error);
        res.status(500).send("PDF generation failed");
    }
};
