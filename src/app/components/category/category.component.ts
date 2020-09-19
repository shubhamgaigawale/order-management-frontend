import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  name = '';
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  async add(id) {
    try {
      if (this.name.length) {
        const create = await this.http
          .post(`http://localhost:8001/api/category/create/`+id, { name: this.name })
          .toPromise();
        console.log({ create });
        this.toastr.success('Category Added Successfully');
      }
    } catch (e) {
      console.log({ e });
      this.toastr.error('Something went wrong, Check server is up and running');
    }
  }
}


