import {Component, OnInit} from '@angular/core';
import {BankService} from '../../../services/bank.service';
import {Bank} from '../../../models/Bank';
import {Route, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  banks: Array<Bank> = new Array<Bank>();


  // Dependency Injection
  constructor(private bankService: BankService,
              private router: Router) {
  }

  ngOnInit(): void {
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
