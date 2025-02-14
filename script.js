const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum=0;
	let price=document.querySelectorAll(".price");
	price.forEach(pr => {
    sum += parseInt(pr.innerText);
  });
	let tr=document.createElement("tr");
	let td=document.createElement("td");
	td.id = "ans";
	document.body.append(tr,td);
	
	td.innerText=`Total ${sum}`;
	document.body.appendChild(td);
};

getSumBtn.addEventListener("click", getSum);

