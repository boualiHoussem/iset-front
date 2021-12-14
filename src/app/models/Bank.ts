import {Address} from './Address';

export class Bank {
  id: number;
  name: string;
  address: Address;
  customers: Array<any>;


  constructor(id: number, name: string, address: Address, customers: Array<any>) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.customers = customers;
  }
}
