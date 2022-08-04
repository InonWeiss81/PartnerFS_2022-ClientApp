import { Package } from "./Package";


export interface Contract {
    ContractId: string;
    ContractName: string;
    PackagesList: Package[];
}
