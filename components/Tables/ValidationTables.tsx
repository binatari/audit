import React, { useState } from "react";
import { BaseTable } from "./BaseTable";
import { attributeColumns } from "./columns";
import useApi from "@/hooks/useApi";
import { attribute, validationResponse } from "@/utils/types";
import SearchInput from "../Input/SearchInput";

const ValidationTables = ({url}:{url:string}) => {
  const [query, setQuery] = useState("test");
  const [value, setValue] = useState("test");
  const { data, isLoading } = useApi<validationResponse>({
    url: `${url}?id=${query}`,
  });

  const attributes = data?.attributes || [];
  const updateQuery = () => setQuery(value);
  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return (
    <div className="container mx-auto px-4">
      <div className=" flex gap-4 my-2">
        <SearchInput value={value} onChange={updateValue} />
        <button
          onClick={updateQuery}
          className="flex bg-[#6936F5] items-center text-white px-4 text-[15px] font-medium "
        >
          Validate
        </button>
      </div>
      <BaseTable columns={attributeColumns} data={attributes} />
    </div>
  );
};

export default ValidationTables;
