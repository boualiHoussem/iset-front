import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BankService} from '../../../services/bank.service';
import {Bank} from '../../../models/Bank';
import {Address} from '../../../models/Address';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

  bankFormGroup: FormGroup;

  constructor(private bankService: BankService) {
    this.bankFormGroup = new FormGroup({
      bankName: new FormControl(),
      zipCode: new FormControl(),
      street: new FormControl(),
      country: new FormControl()
    });
  }

  ngOnInit(): void {
  }


  createBank() {
    // Fill bank object
    let bankAddress: Address = new Address(0, '', '');
    let bank: Bank = new Bank(0, '', bankAddress, new Array<any>());


    bank.name = this.bankFormGroup.controls.bankName.value;
    bank.address.zipCode = this.bankFormGroup.controls.zipCode.value;
    bank.address.street = this.bankFormGroup.controls.street.value;
    bank.address.country = this.bankFormGroup.controls.country.value;

    // Send to backend (POST - Service)
    this.bankService.add(bank).subscribe(data => console.log(data))
  }
}
