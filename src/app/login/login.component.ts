import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  ngOnInit(): void {
    // Call the function to fetch data when the component initializes
    this.fetchData();
  }

  fetchData() {
    const requestData = {
      // Your data here
    };
    
    // Use the Fetch API to make an HTTP request
    fetch('https://betafibernet.actcorp.in/common_upgrade/Plans/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type based on your API requirements
        // Add any additional headers if needed
      },
      body: JSON.stringify(requestData), // Convert data to JSON string
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Process the fetched data here
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }
}
