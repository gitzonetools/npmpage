"use strict";
const early = require('early');
early.start('npmpage');
const plugins = require('./npmpage.plugins');
const promisechain = require('./npmpage.promisechain');
early.stop().then(() => {
    plugins.beautylog.figletSync('npmpage');
    promisechain.run()
        .then(() => {
        plugins.beautylog.success('npmpage created!');
    })
        .catch(err => { console.log(err); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxLQUFLLFdBQU0sT0FDdkIsQ0FBQyxDQUQ2QjtBQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQ3RCLE1BQVksT0FBTyxXQUFNLG1CQUN6QixDQUFDLENBRDJDO0FBRTVDLE1BQVksWUFBWSxXQUFNLHdCQUM5QixDQUFDLENBRHFEO0FBQ3RELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDZCxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN2QyxZQUFZLENBQUMsR0FBRyxFQUFFO1NBQ2IsSUFBSSxDQUFDO1FBQ0YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUNqRCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMzQyxDQUFDLENBQUMsQ0FBQSJ9