# connect aws ec2 instance
    ssh -i ~/workspace/foodOrderWorkspace/foodorder-app-key-1.pem ubuntu@ec2-54-90-242-254.compute-1.amazonaws.com 

# download node in ubuntu instance 
    
# add nodejs 10 ppa (personal package archive) from nodesource
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

# install nodejs and npm
sudo apt-get install -y nodejs

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

# conenct RDS mysql instance 
mysql -h foodorderdb.cmhqa3wxmetc.us-east-1.rds.amazonaws.com -P 3306 -u foodOMasterUser -p

# install mysql on the same instanc 

sudo install -y mysql-server

mysqladmin -u root password Hello@123

ALTER USER  'root'@'localhost' IDENTIFIED BY 'sql_native_password' AS 'Hello@123';

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Hello@123';