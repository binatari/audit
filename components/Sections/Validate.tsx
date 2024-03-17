import React, { useState } from "react";
import ValidationTables from "../Tables/ValidationTables";

type tableTypes = "member" | "space" | "collection" | "token";

const Validate = () => {
  const [tableType, setTableType] = useState<tableTypes>("member");
  const tableTypeTabs = ["member", "space", "collection", "token"];

  return (
    <div id="validate" className=" container mx-auto mt-10 md:mt-0">
      <span className="text-[30px] underline underline-offset-4  decoration-[#05b8fe] leading-[50px] rubik md:text-[35px]  md:leading-[80px] font-medium block">
        Validate data
      </span>
      <div className="flex  divide-solid mb-7 overflow-auto">
        {tableTypeTabs.map((value) => (
          <button
            onClick={() => setTableType(value as tableTypes)}
            className={`px-4 py-2 capitalize ${
              value == tableType ? "text-white bg-[#05b8fe]" : ""
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {tableType == "collection" ? (
        <ValidationTables url="/getKycStatusOfCollection" />
      ) : tableType == "member" ? (
        <ValidationTables url="/getKycStatusOfMember" />
      ) : tableType == "space" ? (
        <ValidationTables url="/getKycStatusOfToken" />
      ) : (
        <ValidationTables url="/getKycStatusOfSpace" />
      )}
    </div>
  );
};

export default Validate;
