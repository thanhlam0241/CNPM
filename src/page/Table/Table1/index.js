import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import styles from './Table1.module.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

//column field
const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'desk', headerName: 'Desk', width: 110 },
    { field: 'commodity', headerName: 'Commodity', width: 180 },
    { field: 'traderName', headerName: 'Trader Name', width: 120 },
    { field: 'traderEmail', headerName: 'Trader Email', width: 150 },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 150 }
]
//data in each row
const rows = [
    { id: 1, desk: 'Desk 1', commodity: 'Commodity 1', traderName: 'Trader 1', traderEmail: 'Trader 1', quantity: 1 },
    { id: 2, desk: 'Desk 2', commodity: 'Commodity 2', traderName: 'Trader 2', traderEmail: 'Trader 2', quantity: 2 },
    { id: 3, desk: 'Desk 3', commodity: 'Commodity 3', traderName: 'Trader 3', traderEmail: 'Trader 3', quantity: 3 },
    { id: 4, desk: 'Desk 4', commodity: 'Commodity 4', traderName: 'Trader 4', traderEmail: 'Trader 4', quantity: 4 },
    { id: 5, desk: 'Desk 5', commodity: 'Commodity 5', traderName: 'Trader 5', traderEmail: 'Trader 5', quantity: 5 },
    { id: 6, desk: 'Desk 6', commodity: 'Commodity 6', traderName: 'Trader 6', traderEmail: 'Trader 6', quantity: 6 },
    { id: 7, desk: 'Desk 7', commodity: 'Commodity 7', traderName: 'Trader 7', traderEmail: 'Trader 7', quantity: 7 },
    { id: 8, desk: 'Desk 8', commodity: 'Commodity 8', traderName: 'Trader 8', traderEmail: 'Trader 8', quantity: 8 },
    { id: 9, desk: 'Desk 9', commodity: 'Commodity 9', traderName: 'Trader 9', traderEmail: 'Trader 9', quantity: 9 },
    { id: 10, desk: 'Desk 10', commodity: 'Commodity 10', traderName: 'Trader 10', traderEmail: 'Trader 10', quantity: 10 },
    { id: 11, desk: 'Desk 11', commodity: 'Commodity 11', traderName: 'Trader 11', traderEmail: 'Trader 11', quantity: 11 },
    { id: 12, desk: 'Desk 12', commodity: 'Commodity 12', traderName: 'Trader 12', traderEmail: 'Trader 12', quantity: 12 },
    { id: 13, desk: 'Desk 13', commodity: 'Commodity 13', traderName: 'Trader 13', traderEmail: 'Trader 13', quantity: 13 },
    { id: 14, desk: 'Desk 14', commodity: 'Commodity 14', traderName: 'Trader 14', traderEmail: 'Trader 14', quantity: 14 },
    { id: 15, desk: 'Desk 15', commodity: 'Commodity 15', traderName: 'Trader 15', traderEmail: 'Trader 15', quantity: 15 },
    { id: 16, desk: 'Desk 16', commodity: 'Commodity 16', traderName: 'Trader 16', traderEmail: 'Trader 16', quantity: 16 },
    { id: 17, desk: 'Desk 17', commodity: 'Commodity 17', traderName: 'Trader 17', traderEmail: 'Trader 17', quantity: 17 },
    { id: 18, desk: 'Desk 18', commodity: 'Commodity 18', traderName: 'Trader 18', traderEmail: 'Trader 18', quantity: 18 },
    { id: 19, desk: 'Desk 19', commodity: 'Commodity 19', traderName: 'Trader 19', traderEmail: 'Trader 19', quantity: 19 },
    { id: 20, desk: 'Desk 20', commodity: 'Commodity 20', traderName: 'Trader 20', traderEmail: 'Trader 20', quantity: 20 },
    { id: 21, desk: 'Desk 21', commodity: 'Commodity 21', traderName: 'Trader 21', traderEmail: 'Trader 21', quantity: 21 },
    { id: 22, desk: 'Desk 22', commodity: 'Commodity 22', traderName: 'Trader 22', traderEmail: 'Trader 22', quantity: 22 },
    { id: 23, desk: 'Desk 23', commodity: 'Commodity 23', traderName: 'Trader 23', traderEmail: 'Trader 23', quantity: 23 },
    { id: 24, desk: 'Desk 24', commodity: 'Commodity 24', traderName: 'Trader 24', traderEmail: 'Trader 24', quantity: 24 },
    { id: 25, desk: 'Desk 25', commodity: 'Commodity 25', traderName: 'Trader 25', traderEmail: 'Trader 25', quantity: 25 },
    { id: 26, desk: 'Desk 26', commodity: 'Commodity 26', traderName: 'Trader 26', traderEmail: 'Trader 26', quantity: 26 },
]

export default function Table1() {
    const [selectedRows, setSelectedRows] = useState(rows[0]);
    const [visible, setVisible] = useState(false);
    const [columnsTable, setColumsTable] = useState(columns);
    const [idField, setIdField] = useState(rows[0].id);
    const [deskField, setDeskField] = useState(rows[0].desk);
    useEffect(() => {
        const actionFirst = setTimeout(() => {
            setColumsTable([
                ...columns,
                {
                    field: 'action',
                    headerName: '  ',
                    width: 220,
                    renderCell: (params) => {
                        const onClick = (e) => {
                            e.stopPropagation();

                            const api = params.api;
                            const thisRow = {};

                            api.getAllColumns()
                                .filter((c) => c.field !== '__check__' && !!c)
                                .forEach(
                                    (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                                );
                            setVisible(true);
                            setSelectedRows(thisRow);
                            setIdField(thisRow.id);
                            setDeskField(thisRow.desk);
                        };
                        return (< div style={{ display: 'flex', alignItems: 'stretch', flexDirection: 'row', padding: '2px 0', margin: '0px 2px' }}>
                            <Button variant="contained" color="primary" onClick={onClick}>
                                Edit
                            </Button>
                            <Button variant="contained" color="error" onClick={onClick}>
                                Delete
                            </Button>
                        </ div >)
                    }
                }
            ])
        }, 100)

        return () => {
            clearTimeout(actionFirst)
        }
    }, [])
    return (
        <div style={{ height: '90%', width: '100%', margin: '10' }}>
            <div>
                <Button sx={{ margin: '0 5px 1px 0' }} variant="contained" color="primary" onClick={() => setVisible(!visible)}>
                    Edit
                </Button>
                <Button sx={{ margin: '0 5px 1px 0' }} variant="contained" color="primary" onClick={() => setVisible(!visible)}>
                    Save
                </Button>
            </div>

            <Collapse sx={{ margin: '5px 0' }} in={visible} timeout="auto" >
                <form>
                    <TextField sx={{ margin: '0 5px 0 0' }} id="outlined-basic" label={columns[0].headerName}
                        variant='filled' value={idField} disabled />
                    <TextField sx={{ margin: '0 5px 0 0' }} id="outlined-basic" label={columns[1].headerName}
                        variant='filled' value={deskField} onChange={(e) => setDeskField(e.target.value)} />
                </form>
            </Collapse>

            <DataGrid
                sx={{ fontSize: 15 }}
                rows={rows}
                columns={columnsTable}
                components={{
                    Toolbar: GridToolbar,
                }}
                componentsProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                disableSelectionOnClick
            />
        </div>
    );
}