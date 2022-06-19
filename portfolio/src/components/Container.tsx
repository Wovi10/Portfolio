import { useAnimation, motion } from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const containerVariants = {
    visible: { opacity: 1, y:0, transition: { duration: .4, delay: .1}},
    hidden: { opacity: 0, y: 10}
};

export const Container = ({ children, className, delay = 0}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return ( <motion.div
        ref={ref}
        animate={controls}
        initial={"hidden"}
        variants={containerVariants}
        className={className}
    >
        {children}
    </motion.div>)
}