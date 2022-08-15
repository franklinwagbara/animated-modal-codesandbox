import BackdropStyled from './styles/BackdropStyled';
import {motion} from 'framer-motion';

type Props = {
    children: React.ReactNode,
    close: () => void;
}

const Backdrop = ({children, close}: Props): JSX.Element =>{
    return (
        <BackdropStyled onClick={close}>
            <motion.div 
                className="content" 
                onClick={(e) => e.stopPropagation()}
                initial={{y: "-100vh"}}
                animate={{y: 0}}
            >
                {children}
            </motion.div>
        </BackdropStyled>
    );
}
export default Backdrop;