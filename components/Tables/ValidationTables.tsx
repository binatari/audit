import React, { useState } from "react";
import { BaseTable } from "./BaseTable";
import { attributeColumns } from "./columns";
import useApi from "@/hooks/useApi";
import { attribute, tableTypes, validationResponse } from "@/utils/types";
import SearchInput from "../Input/SearchInput";
import TableLoader from "../Loader.tsx/TableLoader";

const ValidationTables = ({ url, type }: { url: string; type: tableTypes }) => {
  const [query, setQuery] = useState("test");
  const [value, setValue] = useState("test");
  const { data, isLoading, isSuccess } = useApi<validationResponse>({
    url: `${url}?id=${query}`,
  });

  const attributes = data?.attributes || [];
  const updateQuery = () => setQuery(value);
  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return (
    <div className="container mx-auto px-4 overflow-auto">
      <div className=" flex gap-4 my-2">
        <SearchInput value={value} onChange={updateValue} />
        <button
          onClick={updateQuery}
          className="flex bg-[#05b8fe] items-center text-white px-4 text-[15px] font-medium "
        >
          Validate
        </button>
      </div>
      {isSuccess && !isLoading ? (
        <p className=" text-gray-500 text-sm mb-2">
          {data?.isVerified
            ? `This ${type} is verified`
            : `This ${type} has not yet been verified`}
        </p>
      ) : null}

      {isLoading ? (
        <TableLoader />
      ) : (
        <BaseTable columns={attributeColumns} data={attributes} />
      )}
    </div>
  );
};

export default ValidationTables;
