"use strict";
const plugins = require("./npmpage.plugins");
// package dirs
exports.packageDir = plugins.path.join(__dirname, '../');
// module paths
exports.gitBookBin = plugins.path.join(exports.packageDir, 'node_modules/', 'gitbook-cli/', 'bin/gitbook.js');
// project dirs
exports.cwd = process.cwd();
exports.pagesDir = plugins.path.join(exports.cwd, 'pages/');
exports.coverageDir = plugins.path.join(exports.cwd, 'coverage/');
exports.docsDir = plugins.path.join(exports.cwd, 'docs/');
exports.docsOutputDir = plugins.path.join(exports.cwd, 'pages/');
exports.gitbookDir = plugins.path.join(exports.cwd, 'gitbook/');
exports.gitbookOutputDir = plugins.path.join(exports.cwd, 'pages/gitbook/');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wYXRocy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL25wbXBhZ2UucGF0aHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZDQUE0QztBQUU1QyxlQUFlO0FBQ0osUUFBQSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLEtBQUssQ0FBQyxDQUFBO0FBRTFELGVBQWU7QUFDSixRQUFBLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBVSxFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUVyRyxlQUFlO0FBQ0osUUFBQSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ25CLFFBQUEsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUMzQyxRQUFBLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFHLEVBQUUsV0FBVyxDQUFDLENBQUE7QUFFakQsUUFBQSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0FBQ3pDLFFBQUEsYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUVoRCxRQUFBLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFHLEVBQUUsVUFBVSxDQUFDLENBQUE7QUFDL0MsUUFBQSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQSJ9