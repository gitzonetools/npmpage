"use strict";
const plugins = require("./npmpage.plugins");
// package dirs
exports.packageDir = plugins.path.join(__dirname, "../");
// module paths
exports.gitBookBin = plugins.path.join(exports.packageDir, "node_modules/", "gitbook-cli/", "bin/gitbook.js");
// project dirs
exports.cwd = process.cwd();
exports.pagesDir = plugins.path.join(exports.cwd, "pages/");
exports.coverageDir = plugins.path.join(exports.cwd, "coverage/");
exports.docsDir = plugins.path.join(exports.cwd, "docs/");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wYXRocy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL25wbXBhZ2UucGF0aHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQVksT0FBTyxXQUFNLG1CQUFtQixDQUFDLENBQUE7QUFFN0MsZUFBZTtBQUNKLGtCQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTNELGVBQWU7QUFDSixrQkFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFVLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXRHLGVBQWU7QUFDSixXQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLGdCQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLG1CQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ2xELGVBQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMifQ==