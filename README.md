# sample
The angular setup 

 npm version 9.7.1
 Angular CLI: 11.1.2
 Node: 18.16.0
 OS: win32 x64
 
@angular-devkit/architect    0.1101.2 (cli-only)
@angular-devkit/core         11.1.2 (cli-only)
@angular-devkit/schematics   11.1.2 (cli-only)
@schematics/angular          11.1.2 (cli-only)
@schematics/update           0.1101.2 (cli-only)

npm install
ng build
ng serve -o --poll=2000

--------------------------------------------------------
The Java setup 
Java 17
Spring boot 3.1.2
Maven 3.6.3

mvn clean install
mvn spring-boot:run

below endpoint is exposed which is then called by the angular
------------------------------------------------------------
curl --location --request POST 'localhost:8080/demo/angular' \
--header 'Content-Type: application/json' \
--data-raw '{
    "key": "1-ss",
    "value": "I am trying!"
}'

------------------------------------------------------------------------------

Some commands to fix the angular setup on my compouter
  -- -----------
   1 npm install - g @angular/cli
  17 ng serve -o --poll=2000
  18 npm i -D @angular-devkit/build-angular
  19 npm i --force -D @angular-devkit/build-angular
  20 ng serve -o --poll=2000
  21 set NODE_OPTIONS=--openssl-legacy-provider
  22 $env:NODE_OPTIONS = "--openssl-legacy-provider"
  23 ng serve -o --poll=2000
  26 npm build
  27 ng build
  28 npm i -g npm-check-updates
  29 ncu -u
  30 npm cache clean --force
  31 npm install
  32 npm install --legacy-peer-deps
  33 npm install
  34 npm audit fix
  35 ng serve -o --poll=2000

