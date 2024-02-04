import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransitionWrapper from '../../../../../components/PageTransitionWrapper';
import Data from './data/Data';
import Scraper from './scraper/Scraper';
import { AnimatePresence } from 'framer-motion';
import { Tabs, Tab } from '@mui/material';
import { ReactComponent as DatabaseIcon } from '../../../../../icons/database-regular.svg';
import { ReactComponent as MagnifyingGlassIcon } from '../../../../../icons/magnifying-glass-waveform-regular.svg';

const tabData = [
	{
		value: "DATA",
		label: "Data",
    icon: <DatabaseIcon width="16px"/>
	},
	{
		value: "SCRAPE",
		label: "New Scrape",
    icon: <MagnifyingGlassIcon width="20px"/>
	},
]

export default () => {

	const [ tabValue, setTabValue ] = useState(tabData[0].value);	

  return (
		<PageTransitionWrapper>
			<div style={{
				display: "flex",
				flexDirection: "column",
				gap: "32px",
        padding: "12px 36px",
        position: "relative",
			}}>
				<Tabs 
					value={tabValue}
					onChange={(e, value)=>setTabValue(value)}
					color="secondary"
					sx={{
						"& .Mui-selected": { color: "#3B3B3B! important", svg: { fill: "#3B3B3B" }},
						"& .MuiTabs-indicator": { backgroundColor: "#3B3B3B" },
            minHeight: "0",
            height: "44px",
            marginTop: "12px"
					}}
				>
					{ tabData.map((tab) => (
						<Tab 
							value={tab.value}
							label={tab.label}
              icon={tab.icon}
              iconPosition="start"
							disableRipple
							sx={{
								color: "#3B3B3B !important",
                "svg": {
                  fill: "#3B3B3B",
                },
								transition: "all 200ms ease",
								borderRadius: "4px 4px 0 0",
								textTransform: "none",
								fontWeight: 600,
                fontSize: "14px",
                fontFamily: "Montserrat",
                minHeight: "0px",
                padding: "12px",
								"&:hover": { 
                  backgroundColor: "#00000009",
                }
							}}
						/>
					))}
				</Tabs>
				<motion.div 
					style={{ 
            height: "330px", 
            padding: "0 6px", 
            fontSize: "13px" 
          }}
					layout
					key={tabValue}
				>
					<AnimatePresence>
						{ tabValue === "DATA" && <Data setTabValue={setTabValue} />}
						{ tabValue === "SCRAPE" && <Scraper /> }
					</AnimatePresence>
				</motion.div>
			</div>
		</PageTransitionWrapper>
  )
}
