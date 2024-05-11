import { GridColDef, DataGrid } from "@mui/x-data-grid";
import { DeleteButton, List, ShowButton, useDataGrid } from "@refinedev/mui";
import { useMemo } from "react";

export const PayrollList = () => {
  const { dataGridProps } = useDataGrid({});

  const columns = useMemo<GridColDef[]>(
    () => [
      {
        field: "paydate",
        headerName: "Pay Date",
        minWidth: 50,
      },
      {
        field: "payperiod",
        flex: 1,
        headerName: "Pay Period",
        minWidth: 200,
      },
      {
        field: "employees",
        flex: 1,
        headerName: "Employees",
        minWidth: 200,
      },
      {
        field: "status",
        flex: 1,
        headerName: "Status",
        minWidth: 200,
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <ShowButton hideText recordItemId={row.id} />
              <DeleteButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    []
  );
  return (
    <>
      <List>
        <DataGrid {...dataGridProps} columns={columns} autoHeight />
      </List>
    </>
  );
};
