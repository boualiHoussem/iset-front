import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BankService} from '../../../services/bank.service';
import {Bank} from '../../../models/Bank';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  banks: Array<Bank> = new Array<Bank>();

  @Input()
  printInput!: string;

  @Output()
  printOutput: EventEmitter<string> = new EventEmitter<string>();

  // Dependency Injection
  constructor(private bankService: BankService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  bankId: number = 0;

  ngOnInit(): void {

    // this.activeRoute.queryParams.subscribe(bankId => {
    //   this.bankId = bankId;
    // })
    console.log("Input value = ",this.printInput);

    this.printOutput.emit("Output value");

    this.getBanks();
  }

  getBanks() {
    this.bankService.getAllBanks().subscribe(data => {
      this.banks = data;
    });
  }

  deleteBank(id: number) {
    //http - delete
    this.bankService.delete(id).subscribe(data => console.log(data));
    // revisit route
    this.router.navigate(['banks']);
  }

}
