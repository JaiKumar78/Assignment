import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useMediaQuery } from '@mui/material';

function App() {
  const store = useSelector((state) => state);
    const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)'); 

  // 1) Give an example of an async await based function to fetch data from the JSON placeholder API ? (https://jsonplaceholder.typicode.com/)

  useEffect(() => {
    const fetchData = async() => {
      // fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      // .then(response => response.json())
      // .then(json => console.log(json))
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const result = await response.json();
        console.log(result);
        setData(result);
      }
      catch(error){
        console.log(error);
      }
    };

    fetchData();
  }, [])

  return (
    <>

    {/* 2) Display the results from above in a MUI table that takes half of the screen width on a laptop screens and full screen width on mobile screen ? */}
      <TableContainer component={Paper} sx={{ width: isMobile ? '100%' : '50%', margin: 'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => ( // No need for slice, as we already limited it in API call
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}

export default App
