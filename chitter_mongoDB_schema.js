/*
SQL to MongoDB Mapping Chart
http://docs.mongodb.org/manual/reference/sql-comparison/

Install mongoDB on your machine
http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/

I was lazy to set mongoDD to start when windows start so I use Console2 (http://sourceforge.net/projects/console/) and I open two windows (tabs). 
(I assume you will navigate to directory when you have installed mongoDB before u run follow commands)
	- in first window I start mongoDB './mongod'
	- in second window I will conect to mongo by follow command 'mongo' and then just use query commands etc
*/

/*
There are two ways how you can queries data:
	- by console. Personally I prefer use console as it's harder write querie in MongoVUE and also your learn query much quicker. 
	- by Gui tools for MongoDB (http://www.mongovue.com/), In free version you can only open three tabs
*/

/* For this example I had to add '_id' manually to the users collection as I need user_id reference in tweets collection to user collection  
(tweets _id's are created automatically when u insert data). In real app u will take user id and add to the user_id. NOTE: id is unique so u can't have two same id's.
The username and email should be unique I will make them unique when I return back from holiday. I was also thinking how we gonna use searching as mongoDb support 
full text search (this was add last month) or we can use tags (we will index array) so user can hastag. We can discuss searhing 2mor on the call 
*/

//Follow command will create users collection and add two records
db.users.insert ( 
	[
		{
			_id: ObjectId("507f1f77bcf86cd799439011"),
			name: 'Martin Micunda',
			username: 'mmicunda',
			email: 'martin.micunda@asidua.com',
			password: 'mmicunda123',
			avatar: ''
		},
		{
			_id: ObjectId("507f1f77bcf86cd799439012"),
			name: 'Chris  Laughlin',
			username: 'claughlin',
			email: 'christopher.laughlin@asidua.com',
			password: 'claughlin123',
			avatar: ''
		}	
	]	
)

// check if data been inserted by follow command db.users.find() - NOTE: I am use db.users.find().pretty() as pretty function will print result nicely

// add tweets data 
db.tweets.insert ( 
	[
		{
			user_id: ObjectId("507f1f77bcf86cd799439011"), 
			date: ISODate("2012-07-20T13:15:37Z"),
			text: "Welcome Martin!",
			tags: [ "mongoDB", "angulaJS"]
		},
		{
			user_id: ObjectId("507f1f77bcf86cd799439012"), 
			date: ISODate("2012-07-20T13:15:37Z"),
			text: "Welcome Chris!",
			tags: [ "mongoDB", "angulaJS"]
		}	
	]	
)


// when u want to add many tweets u can run loop
for(i=1;i<200;i++) {
	db.tweets.save(
		{
			user_id: ObjectId("507f1f77bcf86cd799439011"), 
			date: ISODate("2012-07-20T13:15:37Z"),
			text: "Welcome Martin!",
			tags: [ "mongoDB", "angulaJS"]
		}	
	);
}

