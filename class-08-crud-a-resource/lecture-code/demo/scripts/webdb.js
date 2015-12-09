var webDB = {};

webDB.verbose = function (verbose) {
  var msg;
  if (verbose) {
    html5sql.logInfo = true;
    html5sql.logErrors = true;
    html5sql.putSelectResultsInArray = true;
    msg = 'html5sql verbosity on';
  } else {
    html5sql.logInfo = false;
    html5sql.logErrors = false;
    html5sql.putSelectResultsInArray = false;
    msg = 'html5sql verbosity off';
  }
  console.log(msg);
};

webDB.init = function() {
  // Open and init DB
  try {
    if (openDatabase) {
      webDB.verbose(true);
      webDB.connect('blogDB', 'Blog Database', 5*1024*1024);
      webDB.setupTables();
    } else {
      console.log('Web Databases not supported.');
    }
  } catch (e) {
    console.error('Error occured during DB init. Web Database may not be supported.');
  }
};

webDB.connect = function (database, title, size) {
  html5sql.openDatabase(database, title, size);
};

webDB.setupTables = function () {
  html5sql.process(
    'CREATE TABLE IF NOT EXISTS articles (id INTEGER PRIMARY KEY, title VARCHAR(255) NOT NULL, author VARCHAR(255) NOT NULL, authorUrl VARCHAR (255), category VARCHAR(20), publishedOn DATETIME, markdown TEXT NOT NULL);',
    function() {
      // on success
      console.log('Success setting up tables.');
    }
  );
};

webDB.importArticlesFrom = function (path) {
  // Import articles from JSON file
  $.getJSON(path, function (data, message, xhr) {
    data.forEach(webDB.insertRecord);
  });
};

webDB.insertRecord = function (a) {
  // insert article record into database
  html5sql.process(
    [
      {
        'sql': 'INSERT INTO articles (title, author, authorUrl, category, publishedOn, markdown) VALUES (?, ?, ?, ?, ?, ?);',
        'data': [a.title, a.author, a.authorUrl, a.category, a.publishedOn, a.markdown],
      }
    ],
    function () {
      console.log('Success inserting record for ' + a.title);
    }
  );
};

webDB.insertRecordWithCallback = function (a, callback) {
  // insert article record into database.
  // made a second version for now
  html5sql.process(
    [
      {
        'sql': 'INSERT INTO articles (title, author, authorUrl, category, publishedOn, markdown) VALUES (?, ?, ?, ?, ?, ?);',
        'data': [a.title, a.author, a.authorUrl, a.category, a.publishedOn, a.markdown],
        'success': callback || function () {console.log('no callback for insertRecord');},
      }
    ],
    function () {
      console.log('Success inserting record for ' + a.title);
    }
  );
};

webDB.updateRecord = function (a, id, callback) {
  //update article record in databse
  html5sql.process(
    [
      {
        'sql': 'UPDATE articles SET title = ?, author = ?, authorUrl = ?, category = ?, publishedOn = ?, markdown = ? WHERE id = ?;',
        'data': [a.title, a.author, a.authorUrl, a.category, a.publishedOn, a.markdown, id],
        'success': callback || function () {console.log('no callback for insertRecord');},
      }
    ],
    function () {
      console.log('Success updating record for ' + a.title);
    }
  );
};

webDB.deleteRecord = function (id, callback) {
  //update article record in databse
  html5sql.process(
    [
      {
        'sql': 'DELETE FROM articles WHERE id = ?;',
        'data': [id],
        'success': callback || function () {console.log('no callback for insertRecord');},
      }
    ],
    function () {
      console.log('Success deleting record for id ' + id);
    }
  );
};

//Allow passing a callback function
//Delete SQL to provide framework for students
webDB.truncateTable = function () {
  //Delete all records from given table.
  html5sql.process(
    [
      {
        'sql': 'DELETE FROM articles;'
      }
    ],
    function () {
      console.log('Success deleting all records from table');
    }
  );
};

webDB.dropTables = function () {
  html5sql.process(
    [
      'DROP TABLE IF EXISTS articles;',
      'DROP TABLE IF EXISTS authors;'
    ],
    function () {
      console.log('Database tables have been dropped.');
    }
  );
};

webDB.execute = function (sql, callback) {
  html5sql.process(
    sql,
    function (tx, result, resultArray) {
      callback(resultArray);
    }
  );
};
