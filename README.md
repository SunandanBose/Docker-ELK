 # Docker-ELK

## Running our Dockerized ELK
>
>>	```git clone https://github.com/deviantony/docker-elk.git
>>	cd /docker-elk
>>	docker-compose up -d```
>

## Verifying the installation
>
>>	```docker ps```

>> *[Note :  ports on the localhost will be mapped to the default ports used by 
			 Elasticsearch (9200/9300), Kibana (5601) and Logstash (5000/5044).]*

>>	```user : elastic
>>	password : changeme```
>


## Install Filebeat

>>	```curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-7.7.1-darwin-x86_64.tar.gz
>>	tar xzvf filebeat-7.7.1-darwin-x86_64.tar.gz
>>	cd filebeat-7.7.1-darwin-x86_64/```

>> change filebeat.yml value to below mentioned

>>	```filebeat.inputs:
>>	- type: log
>>	  enabled: true
>>	  paths:
>>	    - /Users/sunbose/TestWorkspace/*.log
>>
>>
>>	output.elasticsearch:
>>	  hosts: ["localhost:9200"]
>>	  username: "elastic"
>>	  password: "changeme"
>>
>>	setup.kibana:
>>	  host: "localhost:5601"
>>	  username: "elastic"
>>	  password: "changeme"```
>

## Start Filebeat
>>	```./filebeat -e```
>

## Go To Kibana Dashboard in Browser

>>Management -> Kibana -> Index Patterns

>>Create Index Pattern -> select filebeat (version which you installed above) -> Next

>>Configure Settings -> Time filter field name -> @timestamp -> Create Index Pattern

>>Analyze the data in Kibana Discover Page 
>
