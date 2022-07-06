import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router /*inyectamos servicio de ruteo*/ ) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.router.navigate(['/login']);
  }

}
