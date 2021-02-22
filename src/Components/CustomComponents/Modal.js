import ReactDOM from "react-dom";
import "./ModalStyles.css"

const Modal = ({ visible, toggle, body }) => visible ? ReactDOM.createPortal(
    <div className="modal">
        <div className="modal-pop" role="dialog" aria-modal="true">
            <div>{body}</div>
            <button type="button" onClick={toggle}>Close</button>
        </div>
        <div className="modal-overlay"></div>
    </div>, document.body
) : null;


export default Modal;