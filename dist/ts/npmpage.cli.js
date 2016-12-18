"use strict";
const smartcli_1 = require("smartcli");
const plugins = require("./npmpage.plugins");
const npmpageOptions = require("./npmpage.options");
const npmpageMods = require("./npmpage.mods");
exports.run = () => {
    let localCli = new smartcli_1.Smartcli();
    localCli.addVersion('beta');
    // Standard Task
    localCli.standardTask().then((argvArg) => {
        plugins.beautylog.figletSync('npmpage');
        npmpageOptions.run(argvArg).then(configArg => {
            npmpageMods.modStandard.load().then(modStandard => {
                return modStandard.run(configArg);
            }).then((configArg) => {
                if (configArg.publish) {
                    localCli.triggerCommandByName('publish');
                }
            }).catch(err => { console.log(err); });
        });
    });
    // Publish Task
    localCli.addCommand({ commandName: 'publish' }).then(argvArg => {
        plugins.beautylog.figletSync('npmpage');
        npmpageOptions.run(argvArg).then(configArg => {
            npmpageMods.modPublish.load().then(modPublish => {
                modPublish.run(configArg);
            });
        });
    });
    localCli.startParse();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5jbGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9ucG1wYWdlLmNsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUNBQW1DO0FBR25DLDZDQUE0QztBQUM1QyxvREFBbUQ7QUFDbkQsOENBQTZDO0FBRWxDLFFBQUEsR0FBRyxHQUFHO0lBQ2IsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7SUFDN0IsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMzQixnQkFBZ0I7SUFDaEIsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87UUFDakMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdkMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUN0QyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXO2dCQUMzQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUNyQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUF3QztnQkFDN0MsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDNUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixlQUFlO0lBQ2YsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ3RELE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3ZDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDdEMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVTtnQkFDekMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUM3QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7QUFDekIsQ0FBQyxDQUFBIn0=