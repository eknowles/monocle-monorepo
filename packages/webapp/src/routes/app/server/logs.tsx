import { FC } from "react";
import { useSelector } from "react-redux";
import { DateTime } from "luxon";
import { getServerLogs } from "../../../redux/modules/server";

const TH: FC = ({ children }) => (
  <th className="sticky top-0 p-2 text-xs font-normal tracking-tight text-left uppercase bg-white dark:text-code-400 text-code-500 dark:bg-black">
    {children}
  </th>
);
const TD: FC = ({ children }) => <td className="px-2">{children}</td>;

const Severity: FC<{ type: number }> = ({ type }) => {
  switch (type) {
    case 0: //Trace
      return <div className="px-1 text-white bg-blue-700">Trace</div>;
    case 1: //Debug
      return <div className="px-1 text-white bg-blue-800">Debug</div>;
    case 2: //Info
      return <div className="px-1 text-white bg-blue-900">Info</div>;
    case 3: //Warn
      return <div className="px-1 text-white bg-yellow-700">Warning</div>;
    case 4: //Err
      return <div className="px-1 text-white bg-red-700">Error</div>;
    case 5: //Critical
      return <div className="px-1 text-black bg-yellow-400">Critical</div>;
    default:
      //UNRECOGNIZED
      return <div className="px-1 text-black bg-blue-200">UNRECOGNIZED</div>;
  }
};

export const LogsRoute = () => {
  const logs = useSelector(getServerLogs);

  return (
    <div className="overflow-auto w-full h-full max-h-full bg-white dark:bg-black">
      <table className="w-full text-xs">
        <thead className="z-10 mb-4">
          <tr>
            <TH>Timestamp</TH>
            <TH>Severity</TH>
            <TH>Message</TH>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll w-full h-full font-mono dark:text-code-100 text-code-500">
          {(logs || []).map((log) => (
            <tr key={log.time + log.message}>
              <TD>
                {DateTime.fromMillis(+log.time).toLocaleString(
                  DateTime.DATETIME_SHORT_WITH_SECONDS
                )}
              </TD>
              <TD>
                <Severity type={log.severity} />
              </TD>
              <TD>{log.message}</TD>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
