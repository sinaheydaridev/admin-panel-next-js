import { FC } from "react";
import Card from "../Card";

interface ITable {
  className?: string;
  head: any[];
  body: { tr: any[] }[];
}

const Table: FC<ITable> = ({ className, head, body }) => {
  return (
    <div className={className}>
      <Card className="custom-table" variant="white">
        <table className="table w-100">
          <thead className="border-bottom-grey">
            <tr>
              {head.map((item, index) => (
                <th key={index} className="pb-2" scope="col">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="list">
            {body.map(({ tr }, trIndex) => (
              <tr key={trIndex}>
                {tr.map((tdItem, tdIndex) => (
                  <td key={tdIndex} className="py-2">{tdItem}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Table;
