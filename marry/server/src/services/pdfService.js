const puppeteer = require('puppeteer');

/**
 * Service to generate PDFs of templates using Puppeteer.
 * Taking an HTML string/URL and rendering it into a high-quality PDF.
 */
class PDFService {
    async generatePDF(htmlContent, options = {}) {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox']
        });

        const page = await browser.newPage();

        // Evaluate HTML content
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

        // Emulate standard screen for accurate rendering
        await page.emulateMediaType('screen');

        // Generate output
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: {
                top: '10mm',
                bottom: '10mm',
                right: '10mm',
                left: '10mm'
            },
            ...options
        });

        await browser.close();
        return pdfBuffer;
    }
}

module.exports = new PDFService();
