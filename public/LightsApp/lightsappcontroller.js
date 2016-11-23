angular.module('directoryApp', ['ngAnimate'])
  .controller('directoryController', function() {

      var dirList = this;


      dirList.list = [
        //{tplus: 0, color: 'red' },

      ];

      dirList.diableRed = true;

      dirList.addColorChange = function() {
        dirList.list.push({tplus: dirList.tplus, color: dirList.color});
        dirList.tplus = dirList.tplus + 1;
        dirList.mintplus = dirList.tplus;
      };

  });
