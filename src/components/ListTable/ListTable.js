import React from "react";

import "./ListTable.css";

export default function ListTable({ columns, data, onRowClick }) {
    return (
        <table className="list-table">
            <thead className="list-table-head">
                <tr className="list-table-tr">
                    {columns.map((column, index) => (
                        <th key={index} className="list-table-th">{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="list-table-body">
                {data.map((row, index) => (
                    <tr key={index} className="list-table-tr" onClick={()=>{ onRowClick(row) }}>
                        {columns.map((column, index) => (
                            <td key={index} className="list-table-td">{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}