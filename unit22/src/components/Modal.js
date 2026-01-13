import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({onClose, children}) => {
    return ReactDOM.createPortal(
        <div onClick={onClose}>
            <div onClick={e => e.stopPropagation()}>{children}</div>
        </div>, 
        modalRoot
        )
};
