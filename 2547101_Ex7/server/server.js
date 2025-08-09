const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "results.json");

const server = http.createServer((req, res) => {
  // Set CORS headers for all requests
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === "/api/results") {
    fs.readFile(dataFilePath, "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Internal Server Error" }));
        return;
      }

      let results;
      try {
        results = JSON.parse(data);
      } catch {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Error parsing data" }));
        return;
      }

      const { name, course } = reqUrl.query;
      let filteredResults = results;

      if (name) {
        const lowerName = name.toLowerCase();
        filteredResults = filteredResults.filter((r) =>
          r.name.toLowerCase().includes(lowerName)
        );
      }

      if (course) {
        const lowerCourse = course.toLowerCase();
        filteredResults = filteredResults.filter((r) =>
          r.course.toLowerCase() === lowerCourse
        );
      }

      res.end(JSON.stringify(filteredResults));
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
