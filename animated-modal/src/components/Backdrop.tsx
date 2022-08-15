import BackdropStyled from './styles/BackdropStyled';

type Props = {
    children: React.ReactNode,
    close: () => void;
}

const Backdrop = ({children, close}: Props): JSX.Element =>{
    return (
        <BackdropStyled onClick={close}>
            <div className="content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </BackdropStyled>
    );
}
export default Backdrop;