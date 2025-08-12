# Movie Ticket Booking System

A complete web-based movie ticket booking system, built with HTML, CSS, JavaScript, and PHP with MySQL backend.

## 🎬 Features

### User Features
- **User Authentication**: Secure login system with role-based access
- **Movie Browsing**: Browse and view movie details with ratings, trailers, and descriptions
- **Theater Selection**: Choose from multiple theaters with different timings
- **Seat Selection**: Interactive seat map with different pricing tiers (Platinum, Gold, Silver)
- **Ticket Booking**: Select number of tickets and confirm bookings
- **Booking Confirmation**: Complete booking process with cost calculation

### Admin Features
- **Movie Management**: Add, edit, and delete movies
- **Theater Management**: Manage theater information
- **User Management**: View and manage user accounts
- **Booking Overview**: View all bookings with detailed information
- **Dashboard**: Comprehensive admin dashboard for system management

## 🏗️ Architecture

### Frontend
- **HTML5**: Semantic markup for all pages
- **CSS3**: Modern styling with responsive design using Bootstrap 5.3.3
- **JavaScript**: Client-side functionality and API interactions
- **Bootstrap**: Responsive UI framework for consistent design

### Backend
- **PHP**: Server-side logic and API endpoints
- **MySQL**: Database management system
- **RESTful API**: JSON-based API for frontend-backend communication

### Database Schema
The system uses a MySQL database with the following main tables:
- `users`: User accounts and authentication
- `movies`: Movie information and metadata
- `theaters`: Theater details
- `bookings`: Booking records and seat reservations
- `reviews`: Movie reviews and ratings

## 📁 Project Structure

```
WEB_PROJECT/
├── home.html              # Main landing page with movie listings
├── login.html             # User authentication page
├── admin.html             # Admin dashboard
├── movie_details.html     # Detailed movie information page
├── theater_selection.html # Theater and timing selection
├── ticket_selection.html  # Number of tickets selection
├── seat_selection.html    # Interactive seat map
├── confirmation.html      # Booking confirmation page
├── script.js             # Main JavaScript functionality
├── styles.css            # Custom CSS styling
└── backend/
    └── api.php           # PHP API endpoints
```

## 🚀 Setup Instructions

### Prerequisites
- XAMPP (Apache + MySQL + PHP)
- Web browser
- Text editor

### Installation Steps

1. **Clone/Download the Project**
   ```bash
   # Place the project in your XAMPP htdocs folder
   C:\xampp\htdocs\web_project\
   ```

2. **Database Setup**
   - Start XAMPP and ensure Apache and MySQL are running
   - Open phpMyAdmin (http://localhost/phpmyadmin)
   - Create a new database named `bookmyshow`
   - Import the database schema (you'll need to create the tables)

3. **Database Configuration**
   - Update database credentials in `backend/api.php`:
   ```php
   $conn = new mysqli('localhost', 'root', 'your_password', 'bookmyshow');
   ```

4. **Access the Application**
   - Open your browser and navigate to: `http://localhost/web_project/login.html`

## 🎯 Usage Guide

### For Users
1. **Login**: Use provided credentials to access the system
2. **Browse Movies**: View available movies on the home page
3. **Select Movie**: Click "Book" on any movie to view details
4. **Choose Theater**: Select preferred theater and timing
5. **Select Tickets**: Choose number of tickets (1-6)
6. **Pick Seats**: Use the interactive seat map to select seats
7. **Confirm Booking**: Review details and confirm the booking

### For Admins
1. **Admin Login**: Use admin credentials to access the dashboard
2. **Manage Movies**: Add, edit, or delete movies from the system
3. **Manage Theaters**: Add or modify theater information
4. **View Bookings**: Monitor all user bookings
5. **User Management**: Manage user accounts

## 🎨 Design Features

### UI/UX Highlights
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern Interface**: Clean, intuitive design inspired by BookMyShow
- **Interactive Elements**: Hover effects, smooth transitions, and visual feedback
- **Color Scheme**: Red (#DC3545) primary color with professional styling
- **Typography**: Montserrat font family for modern readability

### Key Components
- **Navigation Bar**: Consistent header with branding and navigation
- **Movie Cards**: Attractive movie posters with booking buttons
- **Seat Map**: Interactive theater seating with different pricing tiers
- **Admin Dashboard**: Comprehensive management interface
- **Booking Flow**: Step-by-step booking process with progress tracking

## 🔧 Technical Features

### JavaScript Functionality
- **State Management**: LocalStorage for session persistence
- **API Integration**: Fetch API for backend communication
- **Dynamic Content**: Real-time updates and data loading
- **Form Validation**: Client-side validation for user inputs
- **Error Handling**: Comprehensive error handling and user feedback

### PHP Backend
- **RESTful API**: JSON-based API endpoints
- **Database Operations**: Secure CRUD operations
- **Authentication**: User login and role-based access control
- **Data Validation**: Server-side validation and sanitization
- **Error Logging**: Comprehensive error logging and debugging

### Security Features
- **SQL Injection Prevention**: Prepared statements for database queries
- **Input Validation**: Both client and server-side validation
- **Session Management**: Secure user session handling
- **Error Handling**: Graceful error handling without exposing sensitive information

## 🎫 Booking System Details

### Seat Pricing Tiers
- **Platinum (Row A)**: ₹250 - Premium front-row seating
- **Gold (Rows B-G)**: ₹200 - Standard premium seating
- **Silver (Rows H-K)**: ₹175 - Economy seating

### Theater Features
- Multiple show timings throughout the day
- Support for different languages (Hindi, English, Telugu)
- Features like m-Ticket, Food & Beverage, Cancellation available

### Booking Process
1. Movie selection with detailed information
2. Theater and timing selection
3. Ticket quantity selection (1-6 tickets)
4. Interactive seat map selection
5. Booking confirmation with cost calculation
6. Database storage of booking information

## 🔄 API Endpoints

### Authentication
- `POST /api.php?action=login` - User login

### Movies
- `GET /api.php?action=movies` - Get all movies
- `GET /api.php?action=movie_details&movie_id={id}` - Get movie details
- `POST /api.php?action=add_movie` - Add new movie (Admin)
- `POST /api.php?action=update_movie` - Update movie (Admin)
- `DELETE /api.php?action=delete_movie&movie_id={id}` - Delete movie (Admin)

### Theaters
- `GET /api.php?action=theaters` - Get all theaters
- `POST /api.php?action=add_theater` - Add new theater (Admin)
- `POST /api.php?action=update_theater` - Update theater (Admin)
- `DELETE /api.php?action=delete_theater&theater_id={id}` - Delete theater (Admin)

### Bookings
- `POST /api.php?action=book` - Create new booking
- `GET /api.php?action=bookings` - Get all bookings (Admin)

### Users
- `GET /api.php?action=users` - Get all users (Admin)
- `DELETE /api.php?action=delete_user&user_id={id}` - Delete user (Admin)

## 🛠️ Customization

### Adding New Features
- **Payment Integration**: Add payment gateway integration
- **Email Notifications**: Implement booking confirmation emails
- **Movie Reviews**: Implement user review system
- **Advanced Search**: Add movie search and filtering

### Styling Customization
- Modify `styles.css` for visual changes
- Update color scheme in CSS variables
- Customize Bootstrap components
- Add new animations and transitions

## 🐛 Troubleshooting

### Common Issues
1. **Database Connection Error**: Check XAMPP status and database credentials
2. **API Errors**: Verify API endpoint URLs and server configuration
3. **Session Issues**: Clear browser cache and localStorage
4. **Styling Problems**: Ensure Bootstrap CSS is properly loaded

### Debug Mode
- Enable PHP error reporting in `api.php` for debugging
- Check browser console for JavaScript errors
- Monitor network requests in browser developer tools

## 📝 License

This project is created for educational purposes. Feel free to use and modify as needed.

## 👥 Contributing

Contributions are always welcome! If you spot a bug, have an idea for improvement, or want to add a new feature, feel free to open an issue or submit a pull request. Suggestions for documentation updates, translations, or performance enhancements are also appreciated. Every contribution, big or small, helps improve the project for everyone.

---

🎬 Built with love for movie lovers and hassle-free ticket booking.
