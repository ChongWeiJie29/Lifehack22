import React, { useState } from "react";
import Html5QrcodePlugin from "./qrCode";
import { Link, useNavigate } from 'react-router-dom';
import Itemslist from '../itemslist/itemslist';

class Scanner extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback.
        this.onNewScanResult = this.onNewScanResult.bind(this);
    }

    render() {
        return (<div style={{width:"300px"}}>
            <h4>Scan the QR code here!</h4>
            <Html5QrcodePlugin 
                fps={10}
                qrbox={200}
                disableFlip={false}
                qrCodeSuccessCallback={this.onNewScanResult}/>
            <div class="tab">
                <Link to="../itemslist"><button class="item_tab">Items</button></Link>
                <button class="QR_tab">QR code scanner</button>
            </div>
        </div>);
    }

    onNewScanResult(decodedText, decodedResult) {
        // Handle the result here.
    }
};

export default Scanner;