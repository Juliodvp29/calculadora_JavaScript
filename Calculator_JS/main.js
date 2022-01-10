const d = document;
const $result = d.getElementById("Result");
const $number = d.querySelector(".number");

d.addEventListener("click", (e) => {
    try {
        if (e.target.classList.contains("number")) {
            $result.textContent += `${e.target.value}`;
          } else if (e.target.classList.contains("operator")) {
            $result.textContent += `${e.target.value}`;
          } else if (e.target.classList.contains("operator-out")) {
            deleteLast();
          } else if (e.target.classList.contains("result")) {
            result();
          } else if (e.target.classList.contains("clear")) {
            $result.textContent = "";
          }        
    } catch (error) {
        $result.textContent = "Invalid Operation";
    }
        
    

});

function deleteLast() {
  $result.textContent = $result.textContent.slice(0, -1);
}

function result() {
  $result.textContent = eval($result.textContent);
}
