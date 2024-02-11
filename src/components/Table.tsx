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

 const Table = ({state} : {state: string}) => {
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

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = (user: string, id: string) => {
    setUserId(id);
    setUser(user);
    setOpen1(true);
  };
  const handleClose1 = () => {
    setUser("");
    setUserId("");
    setDepot(0);
    setRetrait(0);
    setOpen1(false);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = (user: string, id: string) => {
    setUserId(id);
    setUser(user);
    setOpen2(true);
  };
  const handleClose2 = () => {
    setUser("");
    setUserId("");
    setDepot(0);
    setRetrait(0);
    setOpen2(false);
  };
  const fetchData = async () => {
    axios
      .request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `${BaseURL}/api/e/users/list`,
      })
      .then((response) => {
        setData(response.data);
      });
  };

  const makeDeposit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    const money = Number.parseFloat(depot);

    try {
      const response = await axios.post(
        `${BaseURL}/api/e/trans/transfer`,
        { client_id: userId, method: "D", amount: money },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        // @ts-ignore
        const {balance} = response.data
        dispatch(updateBalance(balance))
        alert("Success");
        // @ts-ignore
        window.location.reload(false);
      }
    } catch (error) {
      // console.log(error)
      alert("Error");
      setUser("");
      setUserId("");
      handleClose1();
    }
  };
  const makeWithdrawal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    const money = Number.parseFloat(retrait);

    try {
      const response = await axios.post(
        `${BaseURL}/api/e/trans/transfer`,
        { client_id: userId, method: "W", amount: money },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status == 200) {
               // @ts-ignore
               const {balance} = response.data
               dispatch(updateBalance(balance))
               alert("Success");
               // @ts-ignore
               window.location.reload(false);
      }
    } catch (error) {
      // console.log(error)
      alert("Error");
      setUser("");
      setUserId("");
      handleClose2();
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const columns: GridColDef[] = [
    //   { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "username",
      headerName: "username",
      // @ts-ignore
      // width: width/5,
      editable: true,
    },
    {
      field: "role",
      headerName: "role",
      // @ts-ignore
      // width: width/5,
      editable: true,
    },
    {
      field: "balance",
      headerName: "balance",
      // @ts-ignore
      //  width: width/4,
      editable: true,
    },
  ];

  const Deposit: GridColDef = {
    field: "deposit",
    // headerAlign: "center",
    // align: "center",
    headerName: "dépot",
    // @ts-ignore
    // width: width/4,
    renderCell: (params) => {
      return (
        // @ts-ignore
        <Box
          component="span"
          sx={{
            backgroundColor: "#5cb85c",
            borderRadius: "0.25rem",
            color: "#fff",

            p: "0.25rem",
            cursor: "pointer",
          }}
          onClick={() => handleOpen1(params.row.username, params.row.id)}
        >
          dépot
        </Box>
      );
    },
  };

  const Withdrawal: GridColDef = {
    field: "withrawal",
    // headerAlign: "center",
    // align: "center",
    headerName: "retrait",
    // @ts-ignore
    // width: width/4,
    renderCell: (params) => {
      return (
        // @ts-ignore
        <Box
          component="span"
          sx={{
            backgroundColor: "#f32013",
            borderRadius: "0.25rem",
            color: "#fff",

            p: "0.25rem",
            cursor: "pointer",
          }}
          onClick={() => handleOpen2(params.row.username, params.row.id)}

        >
          retrait
        </Box>
      );
    },
  };

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
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ color: "#000", textAlign: "center" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Dépot
          </Typography>
          <Typography
            sx={{ color: "#000", textAlign: "center", mt: 1 }}
            id="modal-modal-description"
          >
            {user}
          </Typography>
          <div
            style={{
              width: "100%",
              marginTop: 50,
              color: "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 25,
            }}
          >
            <input
              type="number"
              style={{
                backgroundColor: "white",
                border: "1px solid darkgray",
                padding: "4px 8px",
                color: "black",
                outline: "none",
                borderRadius: 50,
              }}
              onChange={(e) => setDepot(Number(e.target.value))}
              placeholder="Montant"
              required
            />
            <Box
              component="span"
              sx={{
                backgroundColor: "#5cb85c",
                borderRadius: "0.25rem",
                color: "#fff",

                p: "0.25rem",
                cursor: "pointer",
              }}
              // @ts-ignore
              onClick={(e) => makeDeposit(e)}
            >
              dépot
            </Box>
          </div>
        </Box>
      </Modal>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ color: "#000", textAlign: "center" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Retrait
          </Typography>
          <Typography
            sx={{ color: "#000", textAlign: "center", mt: 1 }}
            id="modal-modal-description"
          >
            {user}
          </Typography>
          <div
            style={{
              width: "100%",
              marginTop: 50,
              color: "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 25,
            }}
          >
            <input
              type="number"
              style={{
                backgroundColor: "white",
                border: "1px solid darkgray",
                padding: "4px 8px",
                color: "black",
                outline: "none",
                borderRadius: 50,
              }}
              onChange={(e) => setRetrait(Number(e.target.value))}
              placeholder="Montant"
              required
            />
            <Box
              component="span"
              sx={{
                backgroundColor: "#f23013",
                borderRadius: "0.25rem",
                color: "#fff",

                p: "0.25rem",
                cursor: "pointer",
              }}
              // @ts-ignore
              onClick={(e) => makeWithdrawal(e)}
            >
              retrait
            </Box>
          </div>
        </Box>
      </Modal>

      <DataGrid
        rows={dataToShow === 'noFilter' ? data ?? [] : filtredData ?? []}
        columns={[...columns, Deposit, Withdrawal]}
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

export default Table
