"use strict";
const early = require("early");
early.start('npmpage');
const plugins = require("./npmpage.plugins");
const promisechain = require("./npmpage.promisechain");
early.stop().then(() => {
    plugins.beautylog.figletSync('npmpage');
    promisechain.run()
        .then(() => {
        plugins.beautylog.success('npmpage created!');
    })
        .catch(err => { console.log(err); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0JBQThCO0FBQzlCLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDdEIsNkNBQTRDO0FBRTVDLHVEQUFzRDtBQUN0RCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdkMsWUFBWSxDQUFDLEdBQUcsRUFBRTtTQUNiLElBQUksQ0FBQztRQUNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDakQsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDM0MsQ0FBQyxDQUFDLENBQUEifQ==