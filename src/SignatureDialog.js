// src/SignatureDialog.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import SignaturePadComponent from './SignaturePadComponent';

const SignatureDialog = ({ open, onClose, onSave }) => {
    const [signatureData, setSignatureData] = useState('');

    const handleSave = (data) => {
        setSignatureData(data);
        onSave(data);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Sign Here</DialogTitle>
            <DialogContent>
                <SignaturePadComponent onEnd={handleSave} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={() => onSave(signatureData)} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default SignatureDialog;
