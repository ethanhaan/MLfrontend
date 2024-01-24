import { MainContext } from '../../../providers/MainProvider';
import { useContext } from 'react';
import { Box } from '@mui/material';
import Heading from '../../../components/Heading';
import { ReactComponent as ChevronIcon } from '../../../icons/chevron-right-regular.svg';
import { motion } from 'framer-motion';

const BreadCrumb = ({onClick, children}) => {

  return (
    <motion.div
      style={{
        cursor: "pointer",
        padding: "12px",
        transition: "150ms ease-out all",
        borderRadius: "8px",
        "&:hover": { backgroundColor: "#00000009" },
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClick}
    >
      <Heading>
        {children}
      </Heading>
    </motion.div>
  )
}

const calculatePathBreadcrumbs = (model, modelState) => {

  const fullPath = modelState.split("/").slice(1);

  return fullPath.map((part, index) => {
    return {
      name: part
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' '),
      path: `DEFAULT/${fullPath.slice(0, index+1).join("/")}`
    }
  });
}

export default () => {

	const { main, setMain } = useContext(MainContext);

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }}>
      <BreadCrumb onClick={()=>setMain({...main, modelState: "DEFAULT"})}>
        { main.model }
      </BreadCrumb>
      { calculatePathBreadcrumbs(main.model, main.modelState).map((part) => (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              width: "12px",
              height: "12px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <ChevronIcon />
          </motion.div>
          <BreadCrumb onClick={()=>setMain({...main, modelState: part.path})}>
            {part.name}
          </BreadCrumb>
        </>
      ))} 
    </Box>
  )
}
