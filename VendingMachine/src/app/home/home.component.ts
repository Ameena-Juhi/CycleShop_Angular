import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})

export class HomeComponent {

  productId: number = 0;
  products: any[] = [];

  constructor(private router: Router, private http: HttpClient) { }
  
    onButtonClick() {  
    const productId = this.productId;
    this.router.navigate(['/sectionpage', productId]);
    
  }
  
  ngOnInit(): void {
    
    this.http.get('assets/data.json').subscribe((data: any) => {   
      this.products = data.products;
      console.log(this.products);

    });
    
  };
  
}



