import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const LoaderContainer = styled(motion.div)`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.lg};
  background: transparent;
  width: 100%;
  
  @media print {
    display: none;
  }
`;

const SpinnerWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

const SpinnerOutline = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid rgba(246, 177, 122, 0.2); // theme.colors.accent with low opacity
  border-top-color: ${theme.colors.accent};
  border-radius: 50%;
`;

const SpinnerInner = styled(motion.span)`
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border: 3px solid transparent;
  border-bottom-color: ${theme.colors.accent};
  border-radius: 50%;
  opacity: 0.6;
`;

const LoadingText = styled(motion.span)`
  color: ${theme.colors.accent};
  font-size: 1.1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: ${theme.fonts.heading};
`;

const spinTransition = {
  repeat: Infinity,
  ease: "linear",
  duration: 1
};

export const Loader = ({ text = "Loading..." }) => {
  return (
    <LoaderContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SpinnerWrapper>
        <SpinnerOutline
          animate={{ rotate: 360 }}
          transition={{ ...spinTransition, duration: 1.2 }}
        />
        <SpinnerInner
          animate={{ rotate: -360 }}
          transition={{ ...spinTransition, duration: 1.5 }}
        />
      </SpinnerWrapper>
      <LoadingText
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        {text}
      </LoadingText>
    </LoaderContainer>
  );
};
