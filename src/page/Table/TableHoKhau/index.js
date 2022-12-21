import { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Collapse, Button, TextField } from '@mui/material';

// import styles from './Table1.module.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

//column field
const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'soHoKhau', headerName: 'Số hộ khẩu', width: 110 },
    { field: 'noiThuongTru', headerName: 'Nơi thường trú', width: 140 },
    { field: 'thanhVien', headerName: 'Danh sách các thành viên', width: 300 },
    { field: 'chuHo', headerName: 'Chủ hộ', width: 150 },
    { field: 'toPhuTrach', headerName: 'Tổ phụ trách', type: 'number', width: 150 },
]
//data in each row
const rows = [
    { id: 1, soHoKhau: '123432', noiThuongTru: 'Hà Nội', thanhVien: 'Nguyễn Văn A, Nguyễn Văn B', chuHo: 'Nguyễn Văn C', toPhuTrach: 1 },
    { id: 2, soHoKhau: '123432', noiThuongTru: 'Hà Nội', thanhVien: 'Nguyễn Văn A, Nguyễn Văn B', chuHo: 'Nguyễn Văn C', toPhuTrach: 1 },
    { id: 3, soHoKhau: '123432', noiThuongTru: 'Hà Nội', thanhVien: 'Nguyễn Văn A, Nguyễn Văn B', chuHo: 'Nguyễn Văn C', toPhuTrach: 1 },
    { id: 4, soHoKhau: '123432', noiThuongTru: 'Hà Nội', thanhVien: 'Nguyễn Văn A, Nguyễn Văn B', chuHo: 'Nguyễn Văn C', toPhuTrach: 1 },
    { id: 5, soHoKhau: '123432', noiThuongTru: 'Hà Nội', thanhVien: 'Nguyễn Văn A, Nguyễn Văn B', chuHo: 'Nguyễn Văn C', toPhuTrach: 1 },
    { id: 6, soHoKhau: '123432', noiThuongTru: 'Hà Nội', thanhVien: 'Nguyễn Văn A, Nguyễn Văn B', chuHo: 'Nguyễn Văn C', toPhuTrach: 1 },
    { id: 7, soHoKhau: '123432', noiThuongTru: 'Hà Nội', thanhVien: 'Nguyễn Văn A, Nguyễn Văn B', chuHo: 'Nguyễn Văn C', toPhuTrach: 1 },
    { id: 8, soHoKhau: '123432', noiThuongTru: 'Hà Nội', thanhVien: 'Nguyễn Văn A, Nguyễn Văn B', chuHo: 'Nguyễn Văn C', toPhuTrach: 1 }
]

export default function TableHoKhau() {
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
                <div>
                    <TextField sx={{ margin: '0 5px 0 0' }} id="outlined-basic" label={columns[0].headerName}
                        variant='filled' value={idField} disabled />
                    <TextField sx={{ margin: '0 5px 0 0' }} id="outlined-basic" label={columns[1].headerName}
                        variant='filled' value={deskField} onChange={(e) => setDeskField(e.target.value)} />
                </div>
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