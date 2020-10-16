import { Component, OnInit , NgZone} from '@angular/core';

declare var Portal: any;
@Component({
  selector: 'app-deep-link',
  templateUrl: './deep-link.component.html',
  styleUrls: ['./deep-link.component.scss']
})
export class DeepLinkComponent implements OnInit {
  submitted = false;
  hashedUrl;
  error;
  hashedUrl1;
  error1;
  loading;
  hashPayload = { app_namespace: '', path_param: '', expiry : undefined, instance_id: ''};
  hashPayload1 = { app_namespace: '', path_param: '', expiry : undefined, instance_id: ''};
  constructor(private ngZone: NgZone ) { }

  ngOnInit(): void {}

  async onSubmit() {
    this.loading = true;
    Portal.hashUrl(this.hashPayload).then(hasedUrl => {
      console.log('hashedUrl succes first api', hasedUrl );
      this.hashedUrl = hasedUrl;
      this.error = false;
      this.loading = false;
    } , err => {
      console.log('Error receeved first api', err);
      this.error = err;
      this.hashedUrl = undefined;
      this.loading = false;
    });

    console.log('Wait for the response 1');

    this.submitted = true;
  }

  onSubmit1() {
    Portal.hashUrl(this.hashPayload1).then(hasedUrl => {
      console.log('hashedUrl succes second api', hasedUrl );
      this.hashedUrl1 = hasedUrl;
      this.error1 = undefined;
      this.loading = false;
    } , err => {
      console.log('Error receeved second api', err);
      this.error1 = err;
      this.hashedUrl1 = undefined;
      this.loading = false;
    });

    this.submitted = true;
  }

  newPayload() {
    this.hashPayload = { app_namespace: '', path_param: '', expiry : undefined, instance_id: ''};
    this.hashPayload1 = { app_namespace: '', path_param: '', expiry : undefined, instance_id: ''};
    this.submitted = false;
    this.loading = false;
  }
}
