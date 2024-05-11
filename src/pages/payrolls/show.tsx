import { Stack, Typography, Divider, List } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useShow } from "@refinedev/core";
import {
  DeleteButton,
  EditButton,
  Show,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import { useMemo } from "react";

export const PayrollShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  const { dataGridProps } = useDataGrid({
    resource: "/payroll/6kFy4vXiL1teJqZvblCI/list",
  });

  const columns = useMemo<GridColDef[]>(
    () => [
      {
        field: "name",
        width: 200,
        headerName: "Employee",
      },
      {
        field: "rate_base",
        type: "number",
        headerName: "Base Pay",
      },
      {
        field: "employment",
        headerName: "Employment",
      },
      {
        field: "total_absence",
        headerName: "Less Absences",
      },
      {
        field: "total_late",
        headerName: "Less Lates",
      },
      {
        field: "total_undertime",
        headerName: "Less Undertime",
      },
      {
        field: "summary_compensation",
        headerClassName: "super-styling-header--green",
        headerName: "Total Compensation",
      },
      {
        field: "summary_deductions",
        headerClassName: "super-styling-header--red",
        headerName: "Deductions",
      },
      {
        field: "summary_grosspay",
        headerClassName: "super-styling-header--green",
        headerName: "Gross Pay",
      },
      {
        field: "summary_allowance",
        headerClassName: "super-styling-header--green",
        headerName: "Allowances",
      },
      {
        field: "rate_overtime",
        headerClassName: "super-styling-header--green",
        headerName: "Overtime",
      },
      {
        field: "summary_netpay",
        headerClassName: "super-styling-header--green",
        headerName: "Net Pay",
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton resource="/payroll/:id/list/edit/:id" hideText recordItemId={row.id} />
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

  const record = data?.data;

  return (
    <>
      <Show isLoading={isLoading}>
        <Stack gap={1}>
          <Typography variant="body1">{"Payroll Period"}</Typography>
          <Typography variant="h5">{record?.paydate}</Typography>
          <Typography variant="body1">{"Payroll Date"}</Typography>
          <Typography variant="h5">{record?.payperiod}</Typography>
          <Divider />
        </Stack>

        <List
          sx={{
            "& .super-styling-header--red": {
              backgroundColor: "#ef5350",
            },
            "& .super-styling-header--green": {
              backgroundColor: "#4caf50",
            },
            "& .super-styling-header--darkgreen": {
              backgroundColor: "#1b5e20",
            },
          }}
        >
          <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
      </Show>
    </>
  );
};
