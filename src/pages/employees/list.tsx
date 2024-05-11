import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  DeleteButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import { useMemo } from "react";

export const EmployeesList = () => {
  const { dataGridProps } = useDataGrid({});

  const columns = useMemo<GridColDef[]>(
    () => [
      {
        field: "id",
        headerName: "ID",
        type: "number",
        minWidth: 50,
      },
      {
        field: "name",
        flex: 1,
        headerName: "Employee Name",
        minWidth: 200,
      },
      {
        field: "employment",
        flex: 1,
        headerName: "Employment Type",
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
