import { PackageType } from "./PackageType";


export interface Package {
    PackageName: string;
    PackageQuantity: number;
    PackageBalance: number;
    PackageType: PackageType;
}
