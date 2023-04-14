import "./styles.css";
import {
  BrowserQRCodeReader,
  NotFoundException,
  ChecksumException,
  FormatException,
  BrowserCodeReader
} from "@zxing/library";
import { useEffect, useState } from "react";

export default function App() {
  const [code, setCode] = useState("");
  const [display, setDisplay] = useState("none");

  async function scanCode() {
    try {
      setDisplay("block");
      const codeReader = new BrowserQRCodeReader();
      // const videoInputDevices = await codeReader.listVideoInputDevices();
      // const selectedDeviceId = videoInputDevices[3].deviceId;

      // console.log(`Started decode from camera with id ${selectedDeviceId}`);

      const previewElem = document.querySelector(
        "#test-area-qr-code-webcam > video"
      );

      // const controls = await codeReader.decodeFromVideoDevice(
      //   undefined,
      //   previewElem,
      //   (result, error, controls) => {
      //     // use the result and error values to choose your actions
      //     // you can also use controls API in this scope like the controls
      //     // returned from the method.
      //   }
      // );

      const controls1 = await codeReader.decodeOnceFromVideoDevice(
        undefined,
        previewElem
      );

      alert(controls1.text);
      setDisplay("none");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div id="test-area-qr-code-webcam" className={display}>
        <video></video>
      </div>
      <button onClick={scanCode}>Scan</button>
    </div>
  );
}
