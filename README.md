
# Mindicators

This is a business application to manage any indicator you have on mind. It tries to  applies some software design principles and best pratices using node.js.

### Setup

First install `node`. It was built on a lagacy version but it's still working with 18.x LTS version.

If you don't have a SQL Server instance running, you can easly get it as a docker container by running the following statement:

```
 docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=P4ssw00rd!" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
```

You can change the `MSSQL_SA_PASSWORD` for a password of yuour choice. Once you run this, we have the `sa` user and the password defined. Go to the `~/data/db.js` file change the data access information on the sequelize setup at line 6 (I know it could be at a config file).

Once you have it, go to the console and run:

```
npm install
```

To install the dependencies and

```
npm start
```

To start the application. You will see the application running at http port `3000`.

Open the postmand and include the collection available on the root of this repository and you are good to go!
