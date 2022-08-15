import Backdrop from "./Backdrop"

interface Props{
    children: React.ReactNode;
    close: () => void;
}
const Modal = ({children, close}: Props): JSX.Element =>{
    return <Backdrop close={close}>{children}</Backdrop>;
}

export default Modal;