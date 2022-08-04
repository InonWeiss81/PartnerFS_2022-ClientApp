import { Address } from "./Address";
import { Contract } from "./Contract";

export interface Customer {
    FirstName: string;
    LastName: string;
    IdNumber: string;
    Address: Address;
    ContractList: Contract[];
}

