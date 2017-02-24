

window.onload=function(){
	function $(id) {
		return typeof id==='string'?document.getElementById(id):id;
	}
	var index=0;
	var timer=null;
	var pic=$("pic").getElementsByTagName("li");
	var num=$("num").getElementsByTagName("li");
	var flash=$("flash");
	var left=$("left");
	var right=$("right");
	//�������ͷ
	left.onclick=function(){
		index--;
		if (index<0) {
			index=num.length-1
		};
			changeOption(index);
	}
	//�����Ҽ�ͷ
	right.onclick=function(){
		index++;
		if (index>=num.length) {
			index=0
		};
			changeOption(index);
	}      
	//��껮�ڴ������棬ֹͣ��ʱ��
	flash.onmouseover=function(){
		clearInterval(timer);
	}
	//����뿪���ڣ�������ʱ��
	flash.onmouseout=function(){
		timer=setInterval(run,1000)
	}
	//��껮��ҳǩ���棬ֹͣ��ʱ�����ֶ��л�
	for(var i=0;i<num.length;i++){
		num[i].id=i;    //�������滻Ϊ��num[i].setAttribute("id",i);
		num[i].onmouseover=function(){
			clearInterval(timer);
			changeOption(this.id); //this.idָ���ǵ�ǰ�����num��id
		}
	}    
	//�����ʱ��
	timer=setInterval(run,2000)
	//��װ����run
	function run(){
		index++;
		if (index>=num.length) {index=0};
		changeOption(index);
	}
	//��װ����changeOption
	function changeOption(curindex){

		for(var j=0;j<num.length;j++){
			pic[j].style.display="none";
			num[j].className="";
		}
		pic[curindex].style.display="block";
		num[curindex].className="active";
		// index=curindex;
	}
}