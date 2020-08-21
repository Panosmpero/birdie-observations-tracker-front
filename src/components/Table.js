import React from "react";
import { useSelector } from "react-redux";
import * as util from "../util";
import Loading from "./Loading";

const Table = () => {
  const { payload, error } = useSelector((state) => state.observations);

  const tableKeys = payload ? util.filterDataKeys(payload) : []

  return (
    <div className="table-container container overflow">
      {error ? (
        <div>Error</div>
      ) : !payload ? (
        <Loading />
      ) : (
        <table>
          <thead>
            <tr>
              {tableKeys.map((x, id) => (
                <th key={id}>{util.formatString(x)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payload.map((obs, id) => {
              return (
                <tr key={id}>
                  {tableKeys.map((x, i) => {
                    if (i===0) obs[x] = util.formatDate(obs[x])
                    return (
                      <td key={i}>
                        {obs[x] && (typeof obs[x] === "string") 
                           ? util.formatString(obs[x])
                           : typeof obs[x] === "number"
                           ? obs[x]
                           : "-"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
