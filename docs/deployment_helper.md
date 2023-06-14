# connect aws ec2 instance
    ssh -i "key pair path" ec2_public_url
  i.e.,  ssh -i ~/workspace/foodOrderWorkspace/foodorder-app-key-1.pem ubuntu@ec2-54-90-242-254.compute-1.amazonaws.com 

# Install curl
sudo apt-get install curl

# download node in ubuntu instance 
 ## add nodejs 10 ppa (personal package archive) from nodesource
  curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -

# install nodejs and npm
sudo apt-get install -y nodejs

# update node version
sudo npm cache clean -f
sudo npm install -g n
sudo n stable

# install mysql
sudo apt-get install -y mysql-server

set password for sql:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<newPassword>';

insert data in the database by set up file

# clone git repos:
https://github.com/chandragehlot/onlineFoodOrder_orchestration.git --branch <branch-name>
https://github.com/chandragehlot/onlineFoodOrder_webapp.git --branch <branch-name>

install npm dependencies
start projects with pm2


# install pm2 with npm
sudo npm install -g pm2

# set pm2 to start automatically on system startup
sudo pm2 startup systemd

sudo pm2 start

Specify the app name pm2 --name <app-name>
Delete all pm2 process pm2 delete all
Delete specific process pm2 delete <app-name>
Check the CPU and memory usage pm2 monit

# Nignx
sudo apt-get install -y nginx

sudo rm /etc/nginx/sites-available/default

sudo nano /etc/nginx/sites-available/default

server {
  listen 80 default_server;
  server_name onlineFoodOrder;

  # react app & front-end files
  location / {
    root /onlineFoodOrder_webapp/build;
    try_files $uri /index.html;
  }

  # node api reverse proxy
  location /api/ {
    proxy_pass http://localhost:4000/;
  }
}

sudo systemctl restart nginx

## second method of nginx setup

cd /etc/nginx/sites-available
sudo nano <filename>

second option of nginx configuration
server {
    listen 80;
    listen [::]:80;
    
    server_name xxx.xxx.xxx.xxx yourdomain.com;
    access_log /var/log/nginx/reat-tutorial.com.access.log;                
    error_log /var/log/nginx/reat-tutorial.com.error.log;       
    location / {
            proxy_pass http://127.0.0.1:3000;
            client_max_body_size 50m;
            client_body_buffer_size 16k;
            proxy_http_version 1.1;                                              
            proxy_set_header Upgrade $http_upgrade;                              
            proxy_set_header Connection 'upgrade';                               
            proxy_set_header Host $host;                                         
            proxy_cache_bypass $http_upgrade;   
    }
}

sudo ln -s /etc/nginx/sites-available/foodorder /etc/nginx/sites-enabled/

sudo nginx -t

sudo systemctl restart nginx

# conenct RDS mysql instance 
mysql -h foodorderdb.cmhqa3wxmetc.us-east-1.rds.amazonaws.com -P 3306 -u foodOMasterUser -p



