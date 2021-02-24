Blockly.Blocks['test'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blockly.Msg.fortest");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Blockly.Msg.VarOne");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};