import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useEffect, useState } from 'react';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

export default function ProgressSlide() {
    const [load, setLoad] = useState(0) 
    useEffect(() => {  
        console.log(load)  
        let iid
        if(load < 200) {
            iid = setInterval(() => {
                setLoad(load + 20)
            }, 300)
        } else {
            setTimeout(()=> {
                setLoad(-20)
            }, 1500)
            
        }
      return () => {
        return clearInterval(iid)
      }
    }, [load])

    return (<Stack spacing={2} sx={{ flexGrow: 1 }}>
        <br />
        <BorderLinearProgress color='error' variant="determinate" value={load} />
      </Stack>)
}