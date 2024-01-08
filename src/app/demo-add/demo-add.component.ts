import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef } from '../dialogRef';
import { DIALOG_DATA } from '../dialogService';

@Component({
  selector: 'app-demo-add',
  standalone: true,
  imports: [],
  templateUrl: './demo-add.component.html',
  styleUrl: './demo-add.component.css',
})
export class DemoAddComponent implements OnInit {
  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    // Initialize component properties
    // Make API calls or perform initial tasks
    console.log(this.data);
  }

  closeDialog() {
    this.dialogRef.close('hello');
  }
}
