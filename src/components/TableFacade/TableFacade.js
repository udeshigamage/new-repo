import React from "react";
import DataTable from "react-data-table-component"

import "./TableFacade.css"

export default function TableFacade( { columns, data, onRowClicked } ) {
    return (
        <div className="table-facade-container">
            <DataTable
                columns={columns}
                data={data}
                pagination
                highlightOnHover
                responsive
                paginationPerPage={7}
                paginationRowsPerPageOptions={[5,10,20,25,30]} 
                onRowClicked={onRowClicked}
            />
        </div>
    );
}