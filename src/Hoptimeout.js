import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const UpdatedComponent = (WrappedComponent) => {
    function NewComponent() {
    let nav = useNavigate(); 
    let time = 0;
    const resetTimer = () => {
        clearTimeout(time);
        time = setTimeout(() => {
            nav("/Login");
        }, 5000);
    }
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;
    return <WrappedComponent />;
}

  return NewComponent;
};

export default UpdatedComponent;
