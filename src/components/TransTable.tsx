import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../context/hooks";
import { useWindowSize } from "@uidotdev/usehooks";
import { Button, Input, Modal, TextField, Typography } from "@mui/material";
import { BaseURL } from "../consts";
import { updateBalance } from "../context/userRedux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

 const TransTable = ({state} : {state: string}) => {



  const [user, setUser] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const dispatch = useAppDispatch()
  // @ts-ignore
  const token = useAppSelector((state) => state.user.user.token);
  // @ts-ignore
  const { width, height } = useWindowSize();
  const [data, setData] = React.useState([]);
  const [filtredData, setFiltredData] = React.useState([])
  const [dataToShow, setDataToShow] = React.useState('noFilter')
  const [depot, setDepot] = React.useState<number>(0);
  const [retrait, setRetrait] = React.useState<number>(0);

  const fetchData = async () => {
    axios
      .request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `${BaseURL}/api/e/users/transactions`,
      })
      .then((response) => {
        setData(response.data);
      });
  };

  



  React.useEffect(() => {
    fetchData();
  }, []);
  console.log(data)

  const columns: GridColDef[] = [
    //   { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "sender",
      headerName: "sender",
      // @ts-ignore
      // width: width/5,
      editable: true,
    },
    {
      field: "receiver",
      headerName: "receiver",
      // @ts-ignore
      // width: width/5,
      editable: true,
    },
    {
      field: "amount",
      headerName: "amount",
      // @ts-ignore
      //  width: width/4,
      editable: true,
    },
  ];


  React.useEffect(() => {
    
  
    if (state && state.length > 0) {
      // Apply filter only when state is not empty
      setDataToShow('Filter')
      // @ts-ignore
      const filteredData = data.filter((item) => item.username.toLowerCase().includes(state.toLowerCase()))
      setFiltredData(filteredData)
    } else {
      // Set data back to the initial data when state is empty
      setDataToShow('noFilter')
      
    }
  }, [state, data])


  return (
    <Box sx={{ height: "100%", width: "100%", backgroundColor: "white" }}>
     
      <DataGrid
        rows={dataToShow === 'noFilter' ? data ?? [] : filtredData ?? []}
        columns={[...columns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 100, 1000]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default TransTable
