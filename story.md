**Problem Statement:**   
In 2019, Singapore generated around 744 million kg of food waste. How can we tackle this growing problem and encourage Singaporeans to cut down on unnecessary food waste?

## Issue at hand
One common cause of food wastage in Singapore is the phenomenon of throwing away expired and unconsumed foods bought from the grocery store, which is often a result of **overbuying** and **poor planning**.

## What it does
This project aims to tackle the food wastage problem which arises from food products that are left unconsumed after being bought from supermarkets. Our solution provides shoppers with a convenient method to monitor the list of food which they purchased via a mobile app. This helps prevent unnecessary food wastage in two ways: For one, users are able to identify the foods which are expiring soon hence **deem which foods should be consumed first**. Secondly, users can **make a more informed choice on the amount of food to buy** upon knowing the quantity of food already present in storage.

Here’s how the app works:
The user scans the QR code on the receipt using the “QR scanner” tab, and the app automatically filters out food items from the entire grocery list. These items are listed in the “Item List” Tab with their manufacturing and expiry date, and the user has the option to choose how the list is arranged. Once a product is within a few days of its expiry date, the app sends a notification to the user to remind him to consume it in time.

Overall Flow:
When users log in, their email address and id number is stored in our user database. This id number is crucial for our app to keep track of the items bought by the user in the future. As the user scans the QR code on the receipt, our app accesses the supermarket’s database to retrieve the items bought, with reference to the items’ id numbers. Here, we can access both the name of the product, the category it is under, as well as its expiry date. The app retrieves all this information from the databases and displays the relevant details onto the item list panel, where users will be able to keep track of. When the expiry date of the food nears, users receive a phone notification informing them to consume those food items first.

## How we built it
We developed the interactive mobile app using **React** and created sample databases containing user details as well as important information on a variety of food options available in the supermarket.

## Inspiration
This idea was inspired from the **Healthy 365** app, which was created by the Health Promotion Board and released in 2016. We would have liked to build our app in conjunction with the existing features of the Healthy 365 app, which essentially allows shoppers to track their purchases and earn points by scanning the QR code printed on receipts. However, given the time constraints set by the hackathon, we decided the best approach would be to implement our own mobile app with the abovementioned complementary features.

## Challenges faced
Our main problem was the gap in technical knowledge. Though we managed to implement the gist of the solution, some minute details had to be left out due to time constraints. 

## Conclusion
We are a team of pre-U students who are passionate about development and making change. LifeHack 2022, being the first hackathon that all of our members are participating in, presented itself as a great challenge as we learnt the different factors to build an effective solution. We assessed our ideas with reference to the assessment rubric provided in order to craft a solution which is both convenient and viable in the real world.
