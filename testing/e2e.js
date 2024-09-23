const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();

  await page.goto("https://www.namastedev.com/");
  console.log("www.namastedev.com loaded");
  await page.setViewport({ width: 1920, height: 1080 });
})();
