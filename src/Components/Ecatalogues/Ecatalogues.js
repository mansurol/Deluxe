import React from 'react';
import { Link } from 'react-router-dom';
import './Ecatalogues.css'
const Ecatalogues = () => {
    return (
        
   <div>
   <div className="mt-5 thirdsection">
<div className="container p-5">
<div className="text-center">
<h2 >E-Catalogues</h2>
<p className="catalogue">TO GET DETAIL PRODUCT AND ESSENTIAL COMPANY INFORMATION</p>
<Link  to="/Catalogues" className="designviewall">View All</Link>
</div>
</div>
</div> 

</div>
    );
};

export default Ecatalogues;