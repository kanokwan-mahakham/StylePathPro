// InputFields.js
import React from 'react';

const InputFields = ({ placeholder }) => {
    return (
        <div className="input-container">
            <div className="icon-container">
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                    <path d="M13.5513 17.535H11.9171V15.9007C11.9171 14.5468 10.8195 13.4493 9.46562 13.4493H4.56277C3.20888 13.4493 2.11134 14.5468 2.11134 15.9007V17.535H0.477051V15.9007C0.477051 13.6443 2.30629 11.815 4.56277 11.815H9.46562C11.7221 11.815 13.5513 13.6443 13.5513 15.9007V17.535ZM7.01419 10.1807C4.30642 10.1807 2.11134 7.98562 2.11134 5.27786C2.11134 2.57008 4.30642 0.375 7.01419 0.375C9.72196 0.375 11.9171 2.57008 11.9171 5.27786C11.9171 7.98562 9.72196 10.1807 7.01419 10.1807ZM7.01419 8.54643C8.81934 8.54643 10.2828 7.08304 10.2828 5.27786C10.2828 3.47267 8.81934 2.00929 7.01419 2.00929C5.20901 2.00929 3.74562 3.47267 3.74562 5.27786C3.74562 7.08304 5.20901 8.54643 7.01419 8.54643Z" fill="#1C1C1C"/>
                </svg>
            </div>
                <input type="text" placeholder="Username" />
            </div>
    );
};

export default InputFields;
