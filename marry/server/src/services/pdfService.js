const puppeteer = require("puppeteer");

async function generatePDF(image) {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Set A4 viewport size (210mm × 297mm at 96dpi ≈ 794 × 1123px)
    await page.setViewport({ width: 794, height: 1123 });

    // Inject the captured image — guaranteed pixel-perfect match to the UI
    await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body { 
            width: 794px; 
            height: 1123px; 
            overflow: hidden;
            background: white;
          }
          img { 
            width: 100%; 
            height: 100%;
            display: block; 
            object-fit: contain;
          }
        </style>
      </head>
      <body>
        <img src="${image}" />
      </body>
    </html>
  `, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });

    await browser.close();
    return pdf;
}

module.exports = { generatePDF };
