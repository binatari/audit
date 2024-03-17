import { ReactNode } from "react";

export interface componentWithChildren {
  children: ReactNode;
}

export interface attribute {
  id: string;
  label: string;
  requestedOn: null | string;
  updatedOn: string;
  status: {
    label: string;
    code: string;
  };
  link: {
    url: string;
    label: string;
    adminOnly: boolean;
  };
}

export interface validationResponse {
  id: string;
  status: {
    label: string;
    code: number;
  };
  isVerified: boolean;
  attributes: attribute[];
}
