# Custom Angular CDK Modal

This project provides a custom modal implementation using Angular CDK. The modal is designed to be reusable, easily configurable, and integrates seamlessly with Angular applications.

## Features

- **Customizable**: Easily style and configure modals.
- **Responsive**: Adapts to various screen sizes.
- **Accessible**: Designed with accessibility in mind.

## Installation

Before you start using the custom modal, ensure you have Angular CDK installed in your project. If not, install it using the following command:

```bash
npm install @angular/cdk


## Example

import { DialogService } from './path/to/dialogService';

@NgModule({
  ...
  providers: [DialogService],
  ...
})
export class AppModule { }


open the dialog using the following code:

openModal() {
    const dialogRef = this.dialog.open(YourCustomComponent, {
      data: { ... } // Your data here
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }


  style the modal using the following code:

  .overlay-backdrop {
  /* Backdrop styles */
}

.overlay-panel {
  /* Panel styles */
}
```
