import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import { useSpring, animated } from '@react-spring/web';
import SvgIcon from '@mui/material/SvgIcon';
import { data } from './SampleData';
import { v4 as uuidv4 } from 'uuid';

import Collapse from '@mui/material/Collapse';
import { alpha, styled } from '@mui/material/styles';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import PopupModal from '../../../../../../components/PopupModal';

import { MainContext } from '../../../../../../providers/MainProvider';

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const CustomTreeItem = React.forwardRef((props, ref) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} ref={ref} />
));

const TextViewer = ({ text }) => {
  return (
    <PopupModal sx={{
      width: "400px",
      height: "600px",
    }}>
      {text} 
    </PopupModal>
  )
}

const StyledTreeItem = styled(CustomTreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
  [`& .${treeItemClasses.label}`]: {
    fontFamily: "Montserrat, sans-serif !important",
    fontSize: "13px !important",
    padding: "6px !important",
  },
  [`& .${treeItemClasses.selected}`]: {
    backgroundColor: "#00000009 !important",
  },
  [`& .${treeItemClasses.content}`]: {
    transition: "all 100ms ease-out",
    borderRadius: "6px",
  },
  [`& .${treeItemClasses.content}:hover`]: {
    backgroundColor: "#00000009 !important",
  },
}));

export default function CustomizedTreeView({data}) {

  const { main, setMain } = useContext(MainContext);

  return (
    <Box sx={{ 
      minHeight: 270, 
      maxWidth: "100% !important",
    }}>
      <TreeView
        aria-label="customized"
        defaultExpanded={['1']}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}
        sx={{ overflowX: 'hidden' }}
      >
        <StyledTreeItem nodeId="1" label={
          <Box sx={{ display: "flex", gap: "6px"}}>
            <Box sx={{ fontWeight: 600 }}>Status: </Box>
            {data.status === "COMPLETE" && (
              <Box sx={{ fontWeight: 500, color: "#25B063"}}>Complete</Box>
            )}
            {data.status === "IN_PROGRESS" && (
              <Box sx={{ fontWeight: 500, color: "#FBBD25"}}>In Progress</Box>
            )}
          </Box>
        }/>
        <StyledTreeItem nodeId="2" label={
          <Box sx={{ display: "flex", gap: "6px"}}>
            <Box sx={{ fontWeight: 600 }}>Result</Box>
          </Box>
        }>
          <StyledTreeItem nodeId="3" label={
            data.result ? (
              <Box
                onClick={()=>setMain({...main, popupComponent: <TextViewer text={data.result} />})}
              >
                {data.result.substring(0, 100)+"..."}
              </Box>
            ) : (
              <Box>No Result Yet</Box>
            )
          }/>
        </StyledTreeItem>
        <StyledTreeItem nodeId="4" label={
          <Box sx={{ display: "flex", gap: "6px"}}>
            <Box sx={{ fontWeight: 600 }}>Page Data</Box>
          </Box>
        }>
          {data.urls.map((url, urlIndex) => (
            <StyledTreeItem nodeId={uuidv4()} label={url}>
              {data["page_contents"][urlIndex] && (
                <>
                  {
                    data["page_contents"][urlIndex].map((sentence) => (
                      <StyledTreeItem nodeId={uuidv4()} label={sentence} />
                    ))
                  }
                </>
              )}
            </StyledTreeItem>
          ))} 
        </StyledTreeItem>
      </TreeView>
    </Box>
  );
}
