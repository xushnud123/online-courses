import React from 'react';
import Seychas from './Seychas';
import Start from './Start';
import Zakas from './Zakas.jsx'
import Zanime from './Zanime.jsx'

const Asosiy = () => {
    return ( 
        <React.Fragment>
            <Zakas/>
            <Zanime/>
            <Start/>
            <Seychas/>
        </React.Fragment>
    );
}
export default Asosiy;