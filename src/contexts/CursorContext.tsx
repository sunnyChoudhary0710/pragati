import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, {useState, useEffect, createContext} from 'react'
import { useMediaQuery } from 'react-responsive';

export const CursorContext = createContext<any>({});

const CursorProvider = ({children}) => {
    const [cursor, setCursor] = useState({size: 0, background: 'var(--color-accent)'});
    const [isHovering, setIsHovering] = useState(false);
    const smallViewportIsActive = useMediaQuery({
        query: '(max-width: 1200px)'
    })

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = {damping: 20, stiffness: 290, mass: 0.45}
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);
    
    const handleMouseMove = (e) => {
        if (!smallViewportIsActive) {
            mouseX.set(e.clientX - cursor.size / 2);
            mouseY.set(e.clientY - cursor.size / 2);
        } else {
            setCursor({size: 0, background: 'none'});
        }
    }

    useEffect(()=>{
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [cursor])

    const mouseEnterHandler = () => {
        setCursor({
            size: 90,
            background: 'white'
        });
        setIsHovering(true);
    }

    const mouseLeaveHandler = () => {
        setCursor({size: 0, background: 'var(--color-accent)'});
        setIsHovering(false);
    }

    return (
        <CursorContext.Provider value={{mouseEnterHandler, mouseLeaveHandler}}>
            <motion.div className="animated-cursor" style={{
                left: springX,
                top: springY,
                width: cursor.size,
                height: cursor.size,
                backgroundColor: cursor.background,
                mixBlendMode: isHovering ? 'difference' : 'normal',
                transition: "width 0.2s ease-in-out, height 0.2s ease-in-out"
            }}></motion.div>
            {children}
        </CursorContext.Provider>
    )
}

export default CursorProvider;
