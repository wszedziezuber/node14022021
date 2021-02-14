const av_salary = 3500;
document.getElementById("getSalary").addEventListener("click", count);

function count (e) {
    console.log(e);
    e.preventDefault();
    const salary=document.getElementById("salary").value
    
    if (salary >= av_salary){
        document.getElementById("result").innerText="Twoja pensja jest większa lub równa"
    }
    else {
        document.getElementById("result").innerText="Biedaku XDDDDDD"
    }
}