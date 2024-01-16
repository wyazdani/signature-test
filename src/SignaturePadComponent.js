// src/SignaturePadComponent.js
import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePadComponent = ({ onEnd }) => {
    const sigCanvas = useRef({});

    const clear = () => sigCanvas.current.clear();
    const save = () => onEnd(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));

    return (
        <div>
            <SignatureCanvas
                ref={sigCanvas}
                penColor='black'
                canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
            />
            <button onClick={clear}>Clear</button>
            <button onClick={save}>Save</button>
        </div>
    );
};

export default SignaturePadComponent;
