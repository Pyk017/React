import { useEffect } from "react";
import { useState } from "react";
import QRCode from "react-qr-code";

const GeneratorForm = () => {
  const [qrcodeValue, setQRCodeValue] = useState("https://www.google.com/");
  const [size, setSize] = useState(300);

  const generateQRCode = (e) => {
    e.preventDefault();

    let dimention = document.querySelector("#size").value;

    let originalText = document.querySelector("#url").value;

    setQRCodeValue(originalText);

    setSize(+dimention);

    document.querySelector(".qrcode-container").classList.remove("hidden");
  };

  const createStyleElementFromCSS = () => {
    //? assume index.html loads only one CSS file in <header></header>
    const sheet = document.styleSheets[0];

    const styleRules = [];
    for (let i = 0; i < sheet.cssRules.length; i++)
      styleRules.push(sheet.cssRules.item(i).cssText);

    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(styleRules.join(" ")));

    return style;
  };

  const downloadQRCode = () => {
    let svg = document.querySelector(".qrcode-inner-container svg");

    //? CSS must be explicitly embedded
    const style = createStyleElementFromCSS();
    svg.insertBefore(style, svg.firstChild);

    const data = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([data], {
      type: "image/svg+xml;charset=utf-8",
    });

    //? remove the temporarily injected CSS
    style.remove();

    const url = URL.createObjectURL(svgBlob);

    const img = new Image();

    img.addEventListener("load", () => {
      //? draw the image on an ad-hoc canvas
      const bbox = svg.getBBox();

      const canvas = document.createElement("canvas");
      canvas.width = bbox.width;
      canvas.height = bbox.height;

      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0, bbox.width, bbox.height);

      URL.revokeObjectURL(url);

      //? trigger a synthetic download operation with a temporary link
      const a = document.createElement("a");
      a.download = "image.png";
      document.body.appendChild(a);
      a.href = canvas.toDataURL();
      a.click();
      a.remove();
    });

    img.src = url;
  };

  useEffect(() => {
    console.log("use effect ran!");
  }, [qrcodeValue, size]);

  return (
    <>
      <GeneratorText />
      <form className="mt-4" id="generate-form" onSubmit={generateQRCode}>
        <input
          type="text"
          id="url"
          placeholder="Enter a text/URL"
          className="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5"
        />

        <select
          className="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none"
          id="size"
          defaultValue={"300"}
        >
          <option value="100">100X100</option>
          <option value="200">200X200</option>
          <option value="300">300X300</option>
          <option value="400">400X400</option>
          <option value="500">500X500</option>
        </select>

        <button
          className="bg-gray-600 rounded w-full text-white py-3 px-4 mt-5 hover:bg-black"
          type="submit"
        >
          Generate QR Code
        </button>
      </form>

      <div className="qrcode-container mt-4 flex justify-center flex-col items-center hidden">
        <div className="qrcode-inner-container">
          <QRCode value={qrcodeValue} size={size} />
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/4"
          id="download-qrcode"
          onClick={downloadQRCode}
        >
          Save Image
        </button>
        <canvas id="canvas" className="hidden"></canvas>
      </div>
    </>
  );
};

function GeneratorText() {
  return (
    <p>Enter your URL below to generate a QR Code and download the image.</p>
  );
}

export default GeneratorForm;
