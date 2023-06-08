import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import BasicCard from './card';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const timeFormatting = (time) => {
    const isoString = time
    const date = new Date(isoString)
    const formattedTime = date.toLocaleString()
    return formattedTime
  }

const Items = ({data}) => {
    
  return (
   
    <div>
        
        {data.map((item) => {

      return(
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        
        <Item><h2>Country</h2> <BasicCard data={item.country}/></Item>
        <Item><h2>Deceased</h2><BasicCard data={item.deceased || "NA"}/></Item>
        <Item><h2>Infected</h2><BasicCard data={item.infected || "NA"}/></Item>
        <Item><h2>Last Updated</h2><BasicCard data={timeFormatting(item.lastUpdatedApify)}/></Item>
      </Stack>
        )})}
    </div>
  )

}

export default Items
