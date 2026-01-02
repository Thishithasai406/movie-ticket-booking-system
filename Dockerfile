FROM php:8.2-apache

RUN docker-php-ext-install mysqli

COPY WEB_PROJECT/backend/ /var/www/html/

RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
