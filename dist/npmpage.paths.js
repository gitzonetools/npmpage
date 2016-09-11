"use strict";
const plugins = require('./npmpage.plugins');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wYXRocy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL25wbXBhZ2UucGF0aHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQVksT0FBTyxXQUFNLG1CQUd6QixDQUFDLENBSDJDO0FBRTVDLGVBQWU7QUFDSixrQkFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQTtBQUUxRCxlQUFlO0FBQ0osa0JBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBVSxFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUVyRyxlQUFlO0FBQ0osV0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNuQixnQkFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUMzQyxtQkFBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUVqRCxlQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0FBQ3pDLHFCQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBRWhELGtCQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQy9DLHdCQUFnQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBIn0=