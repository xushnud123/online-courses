import React from 'react';
import Footer from './Footer';
import Partner from './Partner';
import Seychas from './Seychas';
import Start from './Start';
import Teachers from './Teachers';
import Zakas from './Zakas.jsx'
import Zanime from './Zanime.jsx'

const Asosiy = () => {
    return ( 
        <React.Fragment>
            <Zakas/>
            <Zanime/>
            <Start/>
            <Seychas/>
            <Partner/>
            <Teachers/>
            <Footer/>
        </React.Fragment>
    );
}
export default Asosiy;