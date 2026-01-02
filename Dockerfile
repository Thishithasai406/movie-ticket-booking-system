FROM php:8.2-apache

# Copy ONLY WEB_PROJECT contents to Apache root
COPY WEB_PROJECT/ /var/www/html/

RUN a2enmod rewrite
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
