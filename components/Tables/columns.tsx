import { attribute } from "@/utils/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const attributeColumns: ColumnDef<attribute>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <span>ID</span>,
  },
  {
    accessorKey: "label",
    header: ({ column }) => <span>Label</span>,
  },
  {
    accessorKey: "requestedOn",
    header: ({ column }) => <span>Date requested</span>,
    cell: ({ cell }) => {
      return <span>{cell.row.original.requestedOn ? cell.row.original.requestedOn : 'Not available'}</span>;
    },
  },
  {
    accessorKey: "updatedOn",
    header: ({ column }) => <span>Updated</span>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <span>Status</span>,
    cell: ({ cell }) => {
      return <span>{cell.row.original.status.label}</span>;
    },
  },
  {
    accessorKey: "link",
    header: ({ column }) => <span>Visit</span>,
    cell: ({ cell }) => {
      return (
        <a
          href={cell.row.original.link.url}
          className="flex gap-[4px] bg-[#6936F5] text-white py-2 px-4 text-[15px] font-medium "
        >
          Link
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_1027)">
              <path
                d="M15.6867 11.2362L11.5892 7.13873L12.6694 6L18.6109 12L12.6694 18L11.5892 16.8615L15.6867 12.764H6.38867V11.2362H15.6867Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1027">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <img />
        </a>
      );
    },
  },
];
