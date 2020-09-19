import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name = '';
  lastname = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }
  signUp() {
    if (this.name.length && this.email.length && this.password.length) {
      this.http
        .post(`http://localhost:8001/api/signup`, {
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
        })
        .toPromise()
        .then((res) => {
          this.toastr.success('Signup successfully Login to continue');
        })
        .catch((err) => {
          console.log(err);
          if (err.error.error.code === 'ER_DUP_ENTRY') {
            this.toastr.error('Email already exists, chhose different email!');
          } else {
            this.toastr.error('Something went wrong');
          }
        });
    }
  }
  login() {
    this.router.navigate(['login']);
  }

}
