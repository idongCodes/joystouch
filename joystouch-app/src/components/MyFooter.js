import React from 'react';

const MyFooter = () => {
    return (
        <div>
            <p>Copyright &copy; { new Date().getFullYear() } JoysTouch. All rights reserved. Website created with React & BootStrap by <a href="https://idngessn.io" target="_blank" rel="noopener noreferrer">idngessn.io.</a></p>
        </div>
    );
};

export default MyFooter;