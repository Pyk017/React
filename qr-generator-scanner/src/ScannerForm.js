import { Html5QrcodeScanner } from "html5-qrcode";
import { useRef } from "react";
import { useEffect } from "react";
import { isValidUrl } from "./helper";

const ScannerForm = () => {
  let html5QrcodeScanner = useRef(undefined);

  function onScanSuccess(decodedText, decodedResult) {
    //? handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
    alert("Scanned Successful!");
    document.querySelector(".scanned-section").classList.remove("hidden");

    const mainOutput = document.querySelector(".main-output");
    mainOutput.innerHTML = "";

    let isValidURL = isValidUrl(decodedText);
    alert(isValidURL);

    const node = document.createTextNode(decodedText);

    let innerElement;

    if (isValidURL) {
      innerElement = document.createElement("a");
      innerElement.className =
        "text-2xl-font-bold md:text-3xl text-center break-words text-red-500 hover:underline active:text-cyan-500";
      innerElement.id = "scanned-text";
      innerElement.href = decodedText;
      innerElement.target = "_blank";
    } else {
      innerElement = document.createElement("p");
      innerElement.className =
        "text-2xl-font-bold md:text-3xl text-center break-words";
      innerElement.id = "scanned-text";
    }

    innerElement.append(node);
    mainOutput.append(innerElement);

    // html5QrcodeScanner.current.clear();
  }

  function onScanFailure(error) {
    //? handle scan failure, usually better to ignore and keep scanning.
    //? for example:
    console.warn(`Code scan error = ${error}`);
  }

  function enableScanner() {
    document.querySelector("#reader").innerHTML = "";
    html5QrcodeScanner.current = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );
    html5QrcodeScanner.current.render(onScanSuccess, onScanFailure);
  }

  useEffect(() => {
    enableScanner();
  });

  return (
    <>
      <p>Upload the Image including QR Code from local device to scan.</p>
      <form className="mt-4" id="scanner-form">
        <div id="reader" className="mt-4"></div>
      </form>

      <div className="scanned-section flex-col my-4 justify-center items-center hidden">
        <h3 className="text-3xl-font-bold mb-5 md:text-4xl">Scanned Output</h3>
        <div className="main-output"></div>
        <button
          className="bg-gray-300 hover:bg-red-700 bg-red-600 text-stone-50 font-bold py-2 px-4 my-2 rounded inline-flex items-center"
          onClick={(e) => {
            let data = document.querySelector("#scanned-text").innerHTML;
            navigator.clipboard.writeText(data);
            e.currentTarget.querySelector("#copy-to-clipboard").innerHTML =
              "Copied!!";

            e.currentTarget.querySelector("img").classList.add("after-copy");

            setTimeout(() => {
              document.querySelector(".scanned-section button span").innerHTML =
                "Copy to Clipboard";
              document
                .querySelector(".scanned-section button img")
                .classList.remove("after-copy");
            }, 2000);
          }}
        >
          <img className="mr-2" alt="copy-to-clip-icon"></img>
          <span id="copy-to-clipboard">Copy to Clipboard</span>
        </button>
      </div>
    </>
  );
};

export default ScannerForm;
