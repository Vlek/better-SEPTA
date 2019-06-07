# better-SEPTA

### Mission Statement :
Our group wishes to focus on making society a better place by better utilizing what is already available, creating cost efficient software-based services for the public. We chose to do this in order to create the most societal good that we can with limited resources, choosing to focus on goods and services most used by everyday individuals that we are knowledgeable regarding such that we would have enough first-hand experience with them to have an educated discussion regarding their optimization for better consumption. 

### Problem Statement : 
The SEPTA transit is a vital public utility that runs on a semi-regular schedule. However, due to unforeseen issues, delays, or malfunctions, the service can be delayed for a considerable amount of time. There is currently no up-to-date information that is readily consumable for the public to gauge when they would like to use SEPTA nor when they should arrive in order to receive optimal service (e.g., catching the correct Trolley that gets one closest to their destination).

### Goal : 
The goal of this repository is to host the source code for a web application designed to create an accessible means for individuals to make informed decisions regarding traveling to their intended destination using SEPTA transit as well as for team collaboration. 

### Roles and Responsibilities :

The contributors and their roles are follows: 

- Derek McCammond : Software Architect 
- Pratik Shekhar : Software Engineer/Developer
- Sam Prasad : Software Engineer/Developer

## Homework 2 Additions

### Revised Problem Statement

SEPTA is a vital public utility that runs on a semi-regular schedule. However, due to unforeseen issues, delays, or malfunctions, the service can be delayed for a considerable amount of time. There is currently no up-to-date information that is readily consumable for the public to gauge when they would like to use SEPTA nor when they should arrive in order to receive optimal service.

### Features

| User | Feature Name | Description |
| --- | --- | --- |
| Better SEPTA User | Map | As a user, I should be able to see an intuitive display of the locations of the SEPTA transportation methods available to me |
| Better SEPTA User | Map Interaction | As a user, I would want to be able to intuitively interact with the display of the SEPTA transportation methods |
| Better SEPTA User | Real-time trip data | As a user, I would want the information being displayed to be up-to-date |
| Better SEPTA User | Filter trip data | As a user, I want to be able focus only on the transportation methods that are pertinent to me. |


### System Architecture
![Figure 1](/img/arch.png)

### The Rationale for Patterns and Tactics
In order to best meet the requirements of the above-proposed application, our group has decided on a pattern which uses several frameworks which we believe will best aid us in being able to leverage pre-existing solutions to speed up development. 

Based on the type of problem we are trying to solve, we believed that a web application would be the most suitable. While a phone app or a desktop app would have been potential options, we wanted to go with a platform agnostic tool that could be readily used on-the-go with minimal setup time and resources.

In order to serve the website, we are choosing to go with Google Cloud as it is easy to set up for static websites like the one we will be creating. The service will be able to take care of the necessary underlying technology for handling websites, including being able to take requests and send correctly formatting website data back to the user. We chose to go with this service over others due to previous experience with the platform, its ease of use, as well as its free tier and trial account pay structure as it will likely be free for the duration of the project.

The SEPTA API allows us to use already available data collected by SEPTA without having to otherwise monitor the different transit methods ourselves. This saves us time and resources that we can apply to creating a better user experience.

The Google Maps API allows us to use a service that hosts map and route information and directly sends this information to the user, allowing us to not have to worry about handling it ourselves. While other options are available, Google Maps is one of the most fully-featured services available and also has free credits for initial use which should span the lifetime of the class project.

React is our chosen web framework, allowing us to create graphically pleasing web designs. In addition, React allows us to better cater to all of the individuals that may use our application, as we want to ensure that those that are not on unlimited data plans can still use the app. React is a lightweight framework which allows for the creation of single-page web apps, reducing the amount of bandwidth used during navigation. React also simplifies the web development process by allowing for the creation of modularized components that can be reused across the website.

We decided to use the Flux architecture to build the client-side web application where data flows through the application in a single direction so that there are no two-way bindings. Two-way data binding leads to updates that are unpredictable as changing one object can lead to another object changing, which could also trigger more updates. This makes it difficult to manage the application as more features are added and pinpoint the source of an error in case anything goes wrong. 

The unidirectional flow of data allows us to know exactly where the data comes from and to which components it needs to be redirected next. The dispatcher, stores, and views are independent nodes in Flux with distinct inputs and outputs, and, where dependencies do occur between stores, they are kept in a strict hierarchy, with synchronous updates managed by the dispatcher. This gives us a clear idea about how different components react to a state change and makes it easier to debug the application. 

### SEPTA API Documentation

Allows introspection of the SEPTA locations and routes, and provides real time data on delays, alerts, vehicles, and routes.

``GET	Bus/Trolley Routes``
```
Required Params:
Route number: STRING

Sample Response
{
    {​4 items
    "lng":​-75.207958
    "lat":​40.076849
    "stopid":​250
    "stopname":​"Germantown Av &amp; Bethlehem Pk 1 - FS"
    }
}
```

``GET Bus/Trolley Schedules``
```
Required Param:
Stop ID: NUM

Optional Params:
req3: STRING
i for inbound, o for outbound

req2: NUM
Route number

req6: NUM
Number of results

Sample Response
{​  1 item
    "17":​[​7 items 0​:​{​7 items
    "StopName":​"JFK Blvd & 15th St"
    SE 577: Assignment 2
    "Route":​"17"
    "date":​"9:16a"
    "day":​"Thu"
    "Direction":​"1" "DateCalender":​"05/09/19 09:16 am" "DirectionDesc":​"20th-Johnston"
}
    1​:​{​7 items
    "StopName":​"JFK Blvd & 15th St" "Route":​"17"
    "date":​"9:26a"
    "day":​"Thu"
    "Direction":​"1" "DateCalender":​"05/09/19 09:26 am"
    "DirectionDesc":​"20th-Johnston"
}

```

``GET Regional Rail Schedules``
```
Required Param:
req1: NUM

Sample Response 
[​16 items
    0​:​{​4 items
    "station":​"Airport Terminal E-F" 
    "sched_tm":​"7:07 pm" 
    "est_tm":​"7:07 pm" 
    "act_tm":​"na"
}
1​:​{​...​}​4 items]​
```

``GET Bus Detours``

```
Required Param:
req1: NUM
Route Number

Sample Response:
[​
    1 item
    0​:​{​2 items "route_id":​"2" "route_info":​[​2 items
    0​:​{​7 items
    "route_direction":​"SB"
    "reason":​"PGW"
    "start_location":​"17th & Locust"
    "end_location":​""
    "start_date_time":​"4/16/2019 9:53 AM"
    "end_date_time":​"5/16/2019 4:00 PM"
    "current_message":​" "Weekdays only"...9am-5pm SB via 17th  
    Street L - Locust R - Broad Street R - Washington           
    Avenue L - 17th Street Reg Rt"
    } 
]

```

``GET Next to Arrive``

```
Required Params:
req1: String
Origin station

req2: String
Destination station

Sample response:
{​
    12 items
    "orig_train":​"9460" 
    "orig_line":​"Airport" 
    "orig_departure_time":​" 8:12PM" 
    "orig_arrival_time":​" 8:30PM" 
    "orig_delay":​"On time" "term_train":​"583" 
    "term_line":​"Paoli/Thorndale" 
    "term_depart_time":​" 8:49PM" 
    "term_arrival_time":​" 9:05PM" 
    "Connection":​"30th Street Station" "term_delay":​"On time"
    "isdirect":​"false" 
}
```

### Security Considerations :
Better SEPTA is a website which, once navigated to, allows users to securely request map information from Google and SEPTA route information from a trusted third-party API solution. We do not require user accounts, nor is a login required, mitigating the security concerns the end user may reasonably have.