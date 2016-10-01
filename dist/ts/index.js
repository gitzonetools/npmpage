"use strict";
const early = require("early");
early.start('npmpage');
const plugins = require("./npmpage.plugins");
const promisechain = require("./npmpage.promisechain");
const npmpage_cli_1 = require("./npmpage.cli");
early.stop().then(() => {
    plugins.beautylog.figletSync('npmpage');
    npmpage_cli_1.npmpageCli.standardTask().then((argv) => {
        plugins.beautylog.info('Executing standardTask');
        promisechain.run(argv)
            .then(() => {
            plugins.beautylog.success('npmpage created!');
        })
            .catch(err => { console.log(err); });
    });
    npmpage_cli_1.npmpageCli.startParse();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0JBQThCO0FBQzlCLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDdEIsNkNBQTRDO0FBQzVDLHVEQUFzRDtBQUN0RCwrQ0FBMEM7QUFFMUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztJQUNkLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZDLHdCQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTtRQUNoQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQ2hELFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2FBQ2pCLElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDakQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFDRix3QkFBVSxDQUFDLFVBQVUsRUFBRSxDQUFBO0FBQzNCLENBQUMsQ0FBQyxDQUFBIn0=