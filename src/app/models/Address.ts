export class Address {
  zipCode: number;
  street: string;
  country: string;


  constructor(zipCode: number, street: string, country: string) {
    this.zipCode = zipCode;
    this.street = street;
    this.country = country;
  }
}
