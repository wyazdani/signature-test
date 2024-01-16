import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import SignatureDialog from "./SignatureDialog";

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [signatureImage, setSignatureImage] = useState('');

  const handleSaveSignature = (signature) => {
    setSignatureImage(signature);
    setDialogOpen(false);
  };
  return (
      <div className="App">
        <button onClick={() => setDialogOpen(true)}>Open Signature Pad</button>
        <SignatureDialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            onSave={handleSaveSignature}
        />
        {signatureImage && <img src={signatureImage} alt="Signature" />}
      </div>
  );
}

export default App;
