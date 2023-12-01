import { Component, Input } from '@angular/core';
import { LoggingService } from '../../services/logging.service';
import { AccountsService } from '../../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;


  constructor(private loggingserive: LoggingService, private accountsService: AccountsService) { }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loggingserive.logStatusChange(status);
  }
}
