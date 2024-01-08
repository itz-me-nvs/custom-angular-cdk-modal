import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoAddComponent } from './demo-add/demo-add.component';
import { DialogService } from './dialogService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [DialogService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cdk-matdialog';

  constructor(private dialog: DialogService) {}

  openDialog() {
    const dialogRef = this.dialog.open(DemoAddComponent, {
      data: {
        title: 'Add a new item',
        message: 'Are you sure you want to add a new item?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Dialog was closed with result:', result);
      }
    });
  }
}
