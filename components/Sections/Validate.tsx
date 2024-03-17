import React, { useState } from "react";
import ValidationTables from "../Tables/ValidationTables";

type tableTypes = "member" | "space" | "collection" | "token";

const Validate = () => {
  const [tableType, setTableType] = useState<tableTypes>("member");
  const tableTypeTabs = ["member", "space", "collection", "token"];
  return (
    <div className=" container mx-auto">
      <span className="text-[30px] underline underline-offset-4  decoration-[#6936F5] leading-[50px] rubik md:text-[35px]  md:leading-[80px] font-medium block">
        Validate data
      </span>

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
