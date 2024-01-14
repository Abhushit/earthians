export function handleExport(imageUrl, prompt, upscale) {
  const img = new Image();
  img.crossOrigin = "anonymous"; // Enable cross-origin resource sharing for images

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const width = upscale ? img.width * 2 : img.width;
    const height = upscale ? img.height * 2 : img.height;

    canvas.width = width;
    canvas.height = height;

    if (upscale) {
      // To upscale, draw the image on the canvas twice its original size
      ctx.drawImage(img, 0, 0, width, height);
    } else {
      // Draw the image on the canvas at its original size
      ctx.drawImage(img, 0, 0);
    }

    // Convert the canvas content to data URL with PNG format
    const dataUrl = canvas.toDataURL("image/png");

    // Create a download link and trigger a click to download the image
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${prompt}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  img.src = imageUrl;
}
