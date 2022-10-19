import { ReactComponent as LOGOSVG } from "./qr-code.svg";
import ScannerForm from "./ScannerForm";

const QRScanner = () => {
  return (
    <main>
      <div className="flex flex-col-reverse align-center justify-center p-10 m-auto md:max-w-4xl md:flex-row">
        <div className="w-full md:w-2/3 mr-24">
          <h1 className="text-3xl-font-bold mb-5 md:text-4xl">
            QR Code Scanner
          </h1>
          <p className="mb-4">
            QR Code allow smartphone users to access your website simply and
            quickly.
          </p>
          <ScannerForm />
        </div>
        <div className="w-full md:w-1/3 self-center">
          <LOGOSVG className="w-1/2 m-auto mb-10 md:w-full" />
        </div>
      </div>
    </main>
  );
};

export default QRScanner;
