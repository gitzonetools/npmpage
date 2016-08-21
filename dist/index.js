"use strict";
const early = require("early");
early.start("npmpage");
const plugins = require("./npmpage.plugins");
const promisechain = require("./npmpage.promisechain");
early.stop().then(() => {
    plugins.beautylog.figletSync("npmpage");
    promisechain.run()
        .then(() => {
        plugins.beautylog.success("npmpage created!");
    })
        .catch(err => { console.log(err); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFDL0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2QixNQUFZLE9BQU8sV0FBTSxtQkFBbUIsQ0FBQyxDQUFBO0FBRTdDLE1BQVksWUFBWSxXQUFNLHdCQUF3QixDQUFDLENBQUE7QUFDdkQsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztJQUNkLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLFlBQVksQ0FBQyxHQUFHLEVBQUU7U0FDYixJQUFJLENBQUM7UUFDRixPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2xELENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxHQUFHLE1BQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQyxDQUFDIn0=