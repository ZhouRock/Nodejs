function getDate()
{
		var now=new Date();
		var year=now.getYear()+1900;
		var month=now.getMonth()+1;
		var date=now.getDate();
		var day=now.getDay();
		var arr_week=new Array("星期天","星期一","星期二",
			"星期三","星期四","星期五","星期六");
		var week=arr_week[day];
		var time="当前时间："+year+"年"+month+"月"+date+"日 "+week;
		alert(time);
}

