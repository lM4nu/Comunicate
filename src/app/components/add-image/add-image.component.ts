import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css'],
})
export class AddImageComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit(formData: any, imgInput: any) {
    const file = imgInput.files[0];
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e: any) => {
      formData.form.value.img = e.target.result;
      //console.log(formData.form.value);
      this.localStorageService.addImgData(formData.form.value);
      this.router.navigate(['/galery']);
    };
  }
}
