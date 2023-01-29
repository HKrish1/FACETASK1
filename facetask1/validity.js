function func_savedata(data){

    var string_data = JSON.stringify(data);
  
  //var file = new File([string_data], 'savefile.txt', {type: 'text'})
    var file = new Blob([string_data], {type:'text'});
  
    var anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(file);
    anchor.download = 'savefile.txt';
    anchor.click();
    URL.revokeObjectURL(anchor.href);
  }