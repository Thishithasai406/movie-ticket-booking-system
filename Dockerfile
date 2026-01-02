FROM php:8.2-apache

# Enable mysqli
RUN docker-php-ext-install mysqli

# Enable Apache rewrite
RUN a2enmod rewrite

# Copy ONLY WEB_PROJECT contents to Apache root
COPY WEB_PROJECT/ /var/www/html/

# Permissions
RUN chown -R www-data:www-data /var/www/html
