import { ReactComponent as LOGOSVG } from "./qr-code.svg";
import GeneratorForm from "./GeneratorForm";

const QRGenerator = () => {
  return (
    <main>
      <div className="flex flex-col-reverse align-center justify-center p-10 m-auto md:max-w-4xl md:flex-row">
        <div className="w-full md:w-2/3 mr-24">
          <h1 className="text-3xl-font-bold mb-5 md:text-4xl">
            QR Code Generator
          </h1>
          <p className="mb-4">
            QR Code allow smartphone users to acces s your website simply and
            quickly.
          </p>
          <GeneratorForm />
        </div>
        <div className="w-full md:w-1/3 mt-24">
          <LOGOSVG className="w-1/2 m-auto mb-10 md:w-full" />
        </div>
      </div>
    </main>
  );
};

export default QRGenerator;
