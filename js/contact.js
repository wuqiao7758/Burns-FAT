$(function(){
    const map = new BMap.Map("map");// 创建地图实例 
    const point = new BMap.Point(113.759026, 34.735052);  // 创建点坐标  
    map.centerAndZoom(point,15);// 初始化地图，设置中心点坐标和地图级别  
    // map.centerAndZoom('智游',15);// 初始化地图，设置中心点坐标和地图级别  
    map.addControl(new BMap.NavigationControl());    
    map.addControl(new BMap.ScaleControl());    
    map.addControl(new BMap.OverviewMapControl());    
    map.addControl(new BMap.MapTypeControl());    
    map.setCurrentCity("郑州");//设置地图显示城市
    map.enableScrollWheelZoom(true)//开启鼠标滚轮缩放
})